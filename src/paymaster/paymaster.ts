import React from "react";
import { BigNumber, ethers } from 'ethers';
import { Contract, Provider, types, utils, Wallet } from 'zksync-web3';
import { PAYMASTER_ADDRESS, PAYMASTER_CONTRACT_ABI, RPC } from "./config";

export interface PaymasterProps {
  network: 'testnet' | 'mainnet';
  pk: string;
  paymentToken: string;
  partnerCode: string;
  populateTransaction: ethers.PopulatedTransaction;
}

export const paymasterExecute = async (props: PaymasterProps): Promise<types.TransactionResponse> => {

  let provider = new Provider(RPC.mainnet);
  if (props.network === 'testnet') {
    provider = new Provider(RPC.testnet);
  }

  const signer = new Wallet(props.pk, provider);
  const paymasterAddress = PAYMASTER_ADDRESS[props.network as keyof typeof PAYMASTER_ADDRESS];

  const gasLimit = await provider.estimateGas({ ...props.populateTransaction, from: signer.address });
  const gasPrice = await provider.getGasPrice();

  const ethFee = gasLimit.mul(gasPrice).mul(110).div(100);

  const paymasterContract = new Contract(paymasterAddress, PAYMASTER_CONTRACT_ABI, provider);
  const minAmount = await paymasterContract.getTokenFee(props.paymentToken, ethFee);
  const abiCoder = new ethers.utils.AbiCoder();
  const input = abiCoder.encode(["bytes32"], [props.partnerCode]);

  const paymasterParams = utils.getPaymasterParams(paymasterAddress, {
    type: "ApprovalBased",
    token: props.paymentToken,
    minimalAllowance: minAmount,
    innerInput: input,
  });

  let populatedTx = props.populateTransaction;
  populatedTx.customData = {
    gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
    paymasterParams,
  };

  const sentTx = await signer.sendTransaction({
    ...populatedTx,
    maxFeePerGas: gasPrice,
    maxPriorityFeePerGas: BigNumber.from(0),
    gasLimit,
  });
  return sentTx;
};
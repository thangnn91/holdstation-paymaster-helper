export const RPC = {
    testnet: "https://zksync2-testnet.zksync.dev",
    mainnet: "https://mainnet.era.zksync.io"
}

export const PAYMASTER_ADDRESS = {
    testnet: "",

    mainnet: ""
}

export const PAYMASTER_CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_weth",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_masterPool",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_moduleManager",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "partnerCode",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ethFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenFee",
                "type": "uint256"
            }
        ],
        "name": "GasPaid",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gasRefund",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gasPrice",
                "type": "uint256"
            }
        ],
        "name": "Refunded",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BATCH_TX_SELECTOR",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DECIMAL_PRECISION",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_partnerCode",
                "type": "bytes32"
            },
            {
                "internalType": "bool",
                "name": "_isActiveGeneralFlow",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_isActiveBasedFlow",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_allowSendNative",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "_quota",
                "type": "uint256"
            }
        ],
        "name": "activePartner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_partnerCode",
                "type": "bytes32"
            }
        ],
        "name": "deActivePartner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "depositETH",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_partnerCode",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "_moduleAddress",
                "type": "address"
            },
            {
                "internalType": "enum GasPondStorage.TypeEnabled",
                "name": "_type",
                "type": "uint8"
            }
        ],
        "name": "enableModule",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_partnerCode",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "_moduleAddress",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "_selector",
                "type": "bytes4"
            },
            {
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }
        ],
        "name": "enabledModuleFunction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_ethFee",
                "type": "uint256"
            }
        ],
        "name": "getTokenFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isWhitelisted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "masterPool",
        "outputs": [
            {
                "internalType": "contract IMasterPool",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minimumETHBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "moduleManager",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "modules",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "moduleId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "moduleBaseAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isValid",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "partnerQuota",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "partnerQuotaUsed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "partners",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isValid",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isActiveGeneralFlow",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isActiveBasedFlow",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "allowSendNative",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "txType",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "from",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "to",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "gasLimit",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "gasPerPubdataByteLimit",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxFeePerGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPriorityFeePerGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "paymaster",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[4]",
                        "name": "reserved",
                        "type": "uint256[4]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "factoryDeps",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "paymasterInput",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "reservedDynamic",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Transaction",
                "name": "_transaction",
                "type": "tuple"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "enum ExecutionResult",
                "name": "_txResult",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "_maxRefundedGas",
                "type": "uint256"
            }
        ],
        "name": "postTransaction",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_masterPool",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_weth",
                "type": "address"
            }
        ],
        "name": "setMasterPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token0",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_token1",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_pool",
                "type": "address"
            }
        ],
        "name": "setTokenPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "tokenDiscount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "tokenPool",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "txType",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "from",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "to",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "gasLimit",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "gasPerPubdataByteLimit",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxFeePerGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxPriorityFeePerGas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "paymaster",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256[4]",
                        "name": "reserved",
                        "type": "uint256[4]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "factoryDeps",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "paymasterInput",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "reservedDynamic",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Transaction",
                "name": "_transaction",
                "type": "tuple"
            }
        ],
        "name": "validateAndPayForPaymasterTransaction",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "magic",
                "type": "bytes4"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "weth",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }
        ],
        "name": "whitelistToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawERC20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]
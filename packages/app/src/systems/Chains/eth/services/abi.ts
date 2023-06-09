export const AbiFuelMessagePortal = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'sender',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'recipient',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'amount',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'SentMessage',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ETH_DECIMALS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'FUEL_BASE_ASSET_DECIMALS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_MESSAGE_DATA_SIZE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PAUSER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'recipient',
        type: 'bytes32',
      },
    ],
    name: 'depositETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fuelBaseAssetDecimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fuelChainConsensusContract',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'messageId',
        type: 'bytes32',
      },
    ],
    name: 'incomingMessageSuccessful',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'incomingMessageTimelock',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract FuelChainConsensus',
        name: 'fuelChainConsensus',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'messageSender',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'sender',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'recipient',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'nonce',
            type: 'bytes32',
          },
          {
            internalType: 'uint64',
            name: 'amount',
            type: 'uint64',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct Message',
        name: 'message',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'prevRoot',
            type: 'bytes32',
          },
          {
            internalType: 'uint64',
            name: 'height',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'timestamp',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'daHeight',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'txCount',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'outputMessagesCount',
            type: 'uint64',
          },
          {
            internalType: 'bytes32',
            name: 'txRoot',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'outputMessagesRoot',
            type: 'bytes32',
          },
        ],
        internalType: 'struct FuelBlockHeader',
        name: 'blockHeader',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'key',
            type: 'uint256',
          },
          {
            internalType: 'bytes32[]',
            name: 'proof',
            type: 'bytes32[]',
          },
        ],
        internalType: 'struct MerkleProof',
        name: 'messageInBlockProof',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'poaSignature',
        type: 'bytes',
      },
    ],
    name: 'relayMessageFromFuelBlock',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'sender',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'recipient',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'nonce',
            type: 'bytes32',
          },
          {
            internalType: 'uint64',
            name: 'amount',
            type: 'uint64',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct Message',
        name: 'message',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'prevRoot',
            type: 'bytes32',
          },
          {
            internalType: 'uint64',
            name: 'height',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'timestamp',
            type: 'uint64',
          },
          {
            internalType: 'bytes32',
            name: 'applicationHash',
            type: 'bytes32',
          },
        ],
        internalType: 'struct FuelBlockHeaderLite',
        name: 'rootBlockHeader',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'prevRoot',
            type: 'bytes32',
          },
          {
            internalType: 'uint64',
            name: 'height',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'timestamp',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'daHeight',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'txCount',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'outputMessagesCount',
            type: 'uint64',
          },
          {
            internalType: 'bytes32',
            name: 'txRoot',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'outputMessagesRoot',
            type: 'bytes32',
          },
        ],
        internalType: 'struct FuelBlockHeader',
        name: 'blockHeader',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'key',
            type: 'uint256',
          },
          {
            internalType: 'bytes32[]',
            name: 'proof',
            type: 'bytes32[]',
          },
        ],
        internalType: 'struct MerkleProof',
        name: 'blockInHistoryProof',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'key',
            type: 'uint256',
          },
          {
            internalType: 'bytes32[]',
            name: 'proof',
            type: 'bytes32[]',
          },
        ],
        internalType: 'struct MerkleProof',
        name: 'messageInBlockProof',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'poaSignature',
        type: 'bytes',
      },
    ],
    name: 'relayMessageFromPrevFuelBlock',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'recipient',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'messageTimelock',
        type: 'uint64',
      },
    ],
    name: 'setIncomingMessageTimelock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

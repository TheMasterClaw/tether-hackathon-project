// PaymentStreamV2 ABI — matches deployed PaymentStreamV2.sol
export const PAYMENT_STREAM_ABI = [
  {
    "inputs": [
      { "name": "_usdt", "type": "address" },
      { "name": "_feeRecipient", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" },
      { "name": "duration", "type": "uint256" },
      { "name": "serviceId", "type": "string" },
      { "name": "_autoRenew", "type": "bool" }
    ],
    "name": "createStream",
    "outputs": [{ "name": "streamId", "type": "bytes32" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "streamId", "type": "bytes32" }],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "streamId", "type": "bytes32" }],
    "name": "cancelStream",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "streamId", "type": "bytes32" }],
    "name": "pauseStream",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "streamId", "type": "bytes32" }],
    "name": "resumeStream",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "streamId", "type": "bytes32" }],
    "name": "availableBalance",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "streamId", "type": "bytes32" }],
    "name": "getStream",
    "outputs": [
      { "name": "sender", "type": "address" },
      { "name": "recipient", "type": "address" },
      { "name": "depositAmount", "type": "uint256" },
      { "name": "withdrawnAmount", "type": "uint256" },
      { "name": "startTime", "type": "uint256" },
      { "name": "endTime", "type": "uint256" },
      { "name": "ratePerSecond", "type": "uint256" },
      { "name": "status", "type": "uint8" },
      { "name": "serviceId", "type": "string" },
      { "name": "autoRenew", "type": "bool" },
      { "name": "remainingTime", "type": "uint256" },
      { "name": "availableNow", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "sender", "type": "address" }],
    "name": "getSenderStreams",
    "outputs": [{ "name": "", "type": "bytes32[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "recipient", "type": "address" }],
    "name": "getRecipientStreams",
    "outputs": [{ "name": "", "type": "bytes32[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "user", "type": "address" }],
    "name": "getAllStreamsForAddress",
    "outputs": [{ "name": "", "type": "bytes32[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "user", "type": "address" },
      { "name": "_status", "type": "uint8" }
    ],
    "name": "getStreamsByStatus",
    "outputs": [{ "name": "", "type": "bytes32[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "recipient", "type": "address" },
      { "name": "enabled", "type": "bool" }
    ],
    "name": "setAutoRenewal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "streamCount",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "platformFeeBps",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  // Events
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "streamId", "type": "bytes32" },
      { "indexed": true, "name": "sender", "type": "address" },
      { "indexed": true, "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" },
      { "name": "startTime", "type": "uint256" },
      { "name": "endTime", "type": "uint256" },
      { "name": "serviceId", "type": "string" },
      { "name": "autoRenew", "type": "bool" }
    ],
    "name": "StreamCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "streamId", "type": "bytes32" },
      { "indexed": true, "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "StreamWithdrawn",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "streamId", "type": "bytes32" },
      { "indexed": true, "name": "sender", "type": "address" },
      { "name": "remainingAmount", "type": "uint256" }
    ],
    "name": "StreamCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "streamId", "type": "bytes32" },
      { "name": "autoRenewed", "type": "bool" }
    ],
    "name": "StreamCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "streamId", "type": "bytes32" },
      { "name": "pausedAt", "type": "uint256" },
      { "name": "remainingTime", "type": "uint256" }
    ],
    "name": "StreamPaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "streamId", "type": "bytes32" },
      { "name": "resumedAt", "type": "uint256" },
      { "name": "newEndTime", "type": "uint256" }
    ],
    "name": "StreamResumed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "streamId", "type": "bytes32" },
      { "indexed": true, "name": "recipient", "type": "address" },
      { "name": "notificationType", "type": "string" },
      { "name": "message", "type": "string" }
    ],
    "name": "NotificationSent",
    "type": "event"
  }
];

export const AGENT_WALLET_ABI = [
  {
    "inputs": [
      { "name": "_owner", "type": "address" },
      { "name": "_operator", "type": "address" },
      { "name": "_usdt", "type": "address" },
      { "name": "_paymentStream", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "name": "recipient", "type": "address" },
      { "name": "maxAmount", "type": "uint256" },
      { "name": "maxDuration", "type": "uint256" },
      { "name": "enabled", "type": "bool" }
    ],
    "name": "configureAutoStream",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" },
      { "name": "duration", "type": "uint256" }
    ],
    "name": "initiateStream",
    "outputs": [{ "name": "", "type": "bytes32" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "sendPayment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "amount", "type": "uint256" }],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "amount", "type": "uint256" }],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getStats",
    "outputs": [
      { "name": "balance", "type": "uint256" },
      { "name": "received", "type": "uint256" },
      { "name": "sent", "type": "uint256" },
      { "name": "remainingDaily", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getApprovedRecipients",
    "outputs": [{ "name": "", "type": "address[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "newLimit", "type": "uint256" }],
    "name": "setDailyLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "newOperator", "type": "address" }],
    "name": "setOperator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "recipients", "type": "address[]" },
      { "name": "amounts", "type": "uint256[]" }
    ],
    "name": "batchSend",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const BILLING_REGISTRY_ABI = [
  {
    "inputs": [
      { "name": "name", "type": "string" },
      { "name": "description", "type": "string" },
      { "name": "endpoint", "type": "string" },
      { "name": "billingType", "type": "uint8" },
      { "name": "rate", "type": "uint256" },
      { "name": "minDuration", "type": "uint256" },
      { "name": "maxDuration", "type": "uint256" },
      { "name": "tags", "type": "string[]" }
    ],
    "name": "registerService",
    "outputs": [{ "name": "serviceId", "type": "bytes32" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "serviceId", "type": "bytes32" }],
    "name": "getService",
    "outputs": [{
      "components": [
        { "name": "serviceId", "type": "bytes32" },
        { "name": "provider", "type": "address" },
        { "name": "name", "type": "string" },
        { "name": "description", "type": "string" },
        { "name": "endpoint", "type": "string" },
        { "name": "billingType", "type": "uint8" },
        { "name": "rate", "type": "uint256" },
        { "name": "minDuration", "type": "uint256" },
        { "name": "maxDuration", "type": "uint256" },
        { "name": "isActive", "type": "bool" },
        { "name": "totalEarned", "type": "uint256" },
        { "name": "totalRequests", "type": "uint256" },
        { "name": "ratingSum", "type": "uint256" },
        { "name": "ratingCount", "type": "uint256" },
        { "name": "tags", "type": "string[]" }
      ],
      "name": "",
      "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "provider", "type": "address" }],
    "name": "getProviderServices",
    "outputs": [{ "name": "", "type": "bytes32[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "keyword", "type": "string" }],
    "name": "searchServices",
    "outputs": [{ "name": "", "type": "bytes32[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "serviceId", "type": "bytes32" },
      { "name": "rating", "type": "uint8" }
    ],
    "name": "rateService",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMarketplaceStats",
    "outputs": [
      { "name": "totalServices", "type": "uint256" },
      { "name": "totalVolume", "type": "uint256" },
      { "name": "totalProviders", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "offset", "type": "uint256" },
      { "name": "limit", "type": "uint256" }
    ],
    "name": "getActiveServices",
    "outputs": [{ "name": "", "type": "bytes32[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "tag", "type": "string" }],
    "name": "getServicesByTag",
    "outputs": [{ "name": "", "type": "bytes32[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "serviceId", "type": "bytes32" },
      { "name": "durationOrQuantity", "type": "uint256" }
    ],
    "name": "calculateCost",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "serviceId", "type": "bytes32" }],
    "name": "getAverageRating",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "serviceId", "type": "bytes32" },
      { "name": "newRate", "type": "uint256" },
      { "name": "isActive", "type": "bool" },
      { "name": "newDescription", "type": "string" },
      { "name": "newEndpoint", "type": "string" }
    ],
    "name": "updateService",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalServices",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
];

export const USDT_ABI = [
  {
    "inputs": [
      { "name": "spender", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "owner", "type": "address" },
      { "name": "spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "account", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "name": "", "type": "uint8" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "sender", "type": "address" },
      { "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "transferFrom",
    "outputs": [{ "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const PAYMENT_STREAM_ADDRESS = (import.meta.env.VITE_PAYMENT_STREAM_ADDRESS || '0xc3E0869913FCdbeB59934FfC92C74269c428C834') as `0x${string}`;
export const BILLING_REGISTRY_ADDRESS = (import.meta.env.VITE_BILLING_REGISTRY_ADDRESS || '0x9C34200882C37344A098E0e8B84a533DFB80e552') as `0x${string}`;
export const USDT_ADDRESS = (import.meta.env.VITE_USDT_ADDRESS || '0xEf70C6e8D49DC21b96b02854089B26df9BECE227') as `0x${string}`;
export const AGENT_WALLET_ADDRESS = (import.meta.env.VITE_AGENT_WALLET_ADDRESS || '0x8F44610D43Db6775e351F22F43bDF0ba7F8D0CEa') as `0x${string}`;
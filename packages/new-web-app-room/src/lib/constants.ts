export const SUPPORTED_CHAINS = {
  BASE_SEPOLIA: {
    id: 84532,
    name: "Base Sepolia",
    rpcUrl: "https://sepolia.base.org",
    explorerUrl: "https://sepolia.basescan.org",
  },
  ARBITRUM_SEPOLIA: {
    id: 421614,
    name: "Arbitrum Sepolia",
    rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
    explorerUrl: "https://sepolia.arbiscan.io",
  },
} as const;

export const CONTRACT_ADDRESSES = {
  [SUPPORTED_CHAINS.BASE_SEPOLIA.id]: {
    AUDIT_REGISTRY: "0x...", // To be deployed
    GUARD_NFT: "0x...", // To be deployed
    GUARD_TOKEN: "0x...", // To be deployed
  },
  [SUPPORTED_CHAINS.ARBITRUM_SEPOLIA.id]: {
    AUDIT_REGISTRY: "0x...", // To be deployed
    GUARD_NFT: "0x...", // To be deployed
    GUARD_TOKEN: "0x...", // To be deployed
  },
} as const;

export const VULNERABILITY_TYPES = [
  "Reentrancy",
  "Integer Overflow",
  "Access Control",
  "Unchecked External Call",
  "DOS",
  "Front-running",
  "Timestamp Manipulation",
  "Uninitialized Storage",
  "Delegatecall",
  "tx.origin Authentication",
] as const;

export const SEVERITY_LEVELS = ["Critical", "High", "Medium", "Low"] as const;

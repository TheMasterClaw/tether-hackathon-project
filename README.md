# TetherStream - USDT Micropayment Streaming

[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://paystream-beryl.vercel.app)
[![Tether](https://img.shields.io/badge/Tether-USDT-26A17B)]()

## 🎯 Hackathon Submission - Tether Hackathon Galactica: WDK Edition 1

**Track**: Agent Wallets (WDK / Agents Integration)
**Focus**: WDK-powered autonomous agent wallets with USDT streaming

## 💰 What It Does

TetherStream enables **real-time USDT micropayments** for AI services.

### The Problem
- AI API subscriptions are monthly (pay for unused time)
- No way to pay per-second for compute
- Agents can't easily transact with each other
- High fees for small payments

### The Solution
- **WDK Agent Wallets** - Self-custodial wallets powered by `@tetherto/wdk-core` + `@tetherto/wdk-wallet-evm`
- **Streaming Payments** - Pay by the second, not by the month
- **On-Chain Policy Control** - Daily limits, approved recipients, max stream amounts
- **USDT Integration** - Native stablecoin support on Base
- **Low Fees** - Optimized for micropayments on Base Sepolia

## 🚀 Live Demo

**Try it now**: https://paystream-beryl.vercel.app

## ✨ Features

### 📊 Analytics Dashboard
- Real-time payment flow tracking (incoming/outgoing/net)
- Volume over time charts
- Stream timeline with progress bars
- Service breakdown analytics
- Time range selection (24h, 7d, 30d, all time)

### 🎬 Live Stream Visualization
- Canvas-based animated USDT particle flows
- Real-time simulation with adjustable speed
- Visual distinction between incoming (green) and outgoing (red) streams
- Individual stream controls

### 📋 Stream Templates
- Pre-configured templates for common use cases:
  - AI Agent Services
  - GPU Compute
  - Content Access
  - Cloud Storage
  - Data API Access
- Cost comparison vs traditional billing
- One-click template selection

### 📜 Transaction History
- Complete event log (created, withdrawn, cancelled, completed)
- Filter by event type
- CSV export functionality
- Expandable event details
- Pagination for large histories

### 🎮 Demo Mode
- Interactive simulation without real transactions
- Adjustable simulation speed (1x - 1000x)
- Multiple demo streams running simultaneously
- Perfect for hackathon presentations

### 🔔 Notifications
- Real-time toast notifications
- Types: success, error, warning, info, incoming, outgoing
- Auto-dismissing with progress bars
- Stream-specific notification hooks

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│              Frontend (React + TypeScript)           │
│  ┌─────────────────────────────────────────────┐    │
│  │  Dashboard          │  Stream Manager        │    │
│  │  - Analytics        │  - Create streams      │    │
│  │  - Visualizations   │  - Templates           │    │
│  │  - Live flows       │  - Pre-fill params     │    │
│  ├─────────────────────────────────────────────┤    │
│  │  Marketplace        │  Agent Wallets (WDK)   │    │
│  │  - Service registry │  - Seed generation     │    │
│  │  - Ratings          │  - HD derivation       │    │
│  │  - Search           │  - Policy config       │    │
│  └─────────────────────────────────────────────┘    │
└──────────┬─────────────────────────┬────────────────┘
           │ wagmi + RainbowKit      │ @tetherto/wdk-core
           │ (User Wallets)          │ (Agent Wallets)
           │                         │
┌──────────▼─────────────────────────▼────────────────┐
│              Smart Contracts (Base Sepolia)          │
│  PaymentStreamV2.sol  - Streaming + pause/resume    │
│  AgentWallet.sol      - Policy-controlled wallets   │
│  BillingRegistry.sol  - Service marketplace         │
│  MockUSDT.sol         - USDT for testing            │
└─────────────────────────────────────────────────────┘
```

## 📊 Smart Contracts (Base Sepolia)

| Contract | Address | Purpose |
|----------|---------|---------|
| **PaymentStreamV2** | `0xc3E0869913FCdbeB59934FfC92C74269c428C834` | Streaming + pause/resume |
| **AgentWallet** | `0x8F44610D43Db6775e351F22F43bDF0ba7F8D0CEa` | Agent wallets |
| **BillingRegistry** | `0x9C34200882C37344A098E0e8B84a533DFB80e552` | Service registry |
| **MockUSDT** | `0xEf70C6e8D49DC21b96b02854089B26df9BECE227` | Test USDT |

## 💸 Use Cases

- **AI APIs** - Pay per API call in real-time
- **GPU Compute** - Rent GPU resources by the second
- **Content Streaming** - Pay for content as you consume
- **Data APIs** - Real-time data feeds with streaming payments
- **Agent-to-Agent** - AI services transacting autonomously

## 🎥 Demo Video

See [DEMO.md](./DEMO.md) for the full demo walkthrough with screenshots and step-by-step instructions.

## 🛠️ Tech Stack

- **Agent Wallets**: Tether WDK (`@tetherto/wdk-core` + `@tetherto/wdk-wallet-evm`)
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Web3**: wagmi + RainbowKit (user wallets)
- **Contracts**: Solidity ^0.8.20 + Hardhat
- **Network**: Base Sepolia
- **Token**: USDT (Mock for testnet)

## 📁 Project Structure

```
tether-hackathon-project/
├── contracts/           # Solidity smart contracts
│   ├── PaymentStreamV2.sol
│   ├── BillingRegistry.sol
│   ├── AgentWallet.sol
│   └── MockUSDT.sol
├── frontend/            # React frontend
│   src/
│   ├── components/
│   │   ├── WDKAgentWallets.tsx     # WDK agent wallet manager
│   │   ├── AnalyticsDashboard.tsx
│   │   ├── LiveStreamVisualization.tsx
│   │   ├── StreamTemplates.tsx
│   │   ├── TransactionHistory.tsx
│   │   ├── DemoMode.tsx
│   │   └── Notifications.tsx
│   ├── utils/
│   │   ├── contracts.ts            # ABIs + addresses
│   │   └── wdk.ts                  # WDK integration layer
│   └── main.tsx
├── scripts/             # Deployment scripts
└── test/                # Contract tests (36 tests)
```

## 🧪 Test Coverage

```
Contract Tests: 36/36 PASSING ✅

TetherStream.test.js (5 tests)
├── PaymentStream     - Streaming logic, withdrawals, cancellation
├── AgentWallet       - Wallet functionality, auto-streams
├── BillingRegistry   - Service registration, ratings
└── MockUSDT          - Token transfers, approvals

TetherStream.extended.test.js (31 tests)
├── PaymentStream     - Edge cases, fee calculation, limits
├── AgentWallet       - Operator permissions, daily limits, batch ops
└── BillingRegistry   - Marketplace stats, search, cost calculation
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start frontend dev server
cd frontend && npm run dev

# Deploy contracts (requires .env setup)
npx hardhat run scripts/deploy.js --network baseSepolia
```

## 🎮 Demo Mode

Try the demo mode to see payment streaming in action without spending real USDT:

1. Navigate to `/app/demo`
2. Watch simulated streams flow in real-time
3. Adjust simulation speed (1x to 1000x)
4. Pause/resume individual streams

## 📝 Environment Variables

```env
VITE_PAYMENT_STREAM_ADDRESS=0x...
VITE_BILLING_REGISTRY_ADDRESS=0x...
VITE_AGENT_WALLET_ADDRESS=0x...
VITE_USDT_ADDRESS=0x...
VITE_WALLETCONNECT_PROJECT_ID=your_project_id
```

## 🏆 Why We Win

- **WDK-Native** - Agent wallets built on `@tetherto/wdk-core`, not generic EVM tools
- **Self-Custodial Agents** - BIP39 seeds, HD derivation, keys never leave agent runtime
- **Real USDT Streaming** - Pay-per-second micropayments on Base
- **Policy Control** - On-chain daily limits, approved recipients, max stream amounts
- **Production Architecture** - 36 passing tests, clean ABIs, working contracts on Base Sepolia
- **Complete Solution** - Templates, analytics, history, marketplace, and WDK agent management

## 📄 License

MIT License - see LICENSE file

---

**Try it now**: https://paystream-beryl.vercel.app

**GitHub**: https://github.com/TheMasterClaw/tether-hackathon-project

# 🛡️ DeFiGuard AI - AI-Powered Smart Contract Security Auditor

![DeFiGuard AI](https://img.shields.io/badge/DeFiGuard-AI%20Auditor-blue?style=for-the-badge&logo=ethereum)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

**DeFiGuard AI** is an advanced AI-powered smart contract security auditor that uses Google Gemini 2.5 Flash to analyze Solidity contracts for vulnerabilities, gas optimizations, and security best practices.

## 🌟 Features

### 🤖 AI-Powered Analysis
- **Gemini 2.5 Flash Integration**: Advanced AI analysis for comprehensive vulnerability detection
- **Real-time Analysis**: Instant security assessment with detailed explanations
- **Historical Context**: References to real-world exploits and similar vulnerabilities

### 🔍 Comprehensive Security Auditing
- **Vulnerability Detection**: Identifies reentrancy, overflow, access control, and other critical issues
- **Risk Scoring**: Intelligent risk assessment with color-coded severity levels
- **Gas Optimization**: Suggestions for reducing gas costs and improving efficiency
- **Best Practices**: Security recommendations based on industry standards

### ⛓️ Blockchain Integration
- **Multi-Chain Support**: Base Sepolia, Arbitrum Sepolia, Ethereum Sepolia
- **Thirdweb Integration**: Seamless wallet connection and blockchain interactions
- **On-Chain Registry**: Audit results stored on-chain for transparency
- **NFT Certification**: Mint security badges for audited contracts

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Beautiful, modern interface with aurora backgrounds
- **Cyberpunk Aesthetics**: Neon colors and futuristic styling
- **Responsive Design**: Works perfectly on desktop and mobile
- **Interactive Components**: Smooth animations and transitions

### 🏗️ Advanced Architecture
- **MCP Framework**: Nullshot Framework with Model Context Protocol
- **AI Agents**: Specialized agents for auditing, risk assessment, and remediation
- **Modular Design**: Clean, maintainable codebase with TypeScript

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd defiguard-ai
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Required API Keys

1. **Google Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add to `GEMINI_API_KEY` in `.env.local`

2. **Thirdweb Client ID**
   - Visit [Thirdweb Dashboard](https://thirdweb.com/dashboard)
   - Create a new project
   - Copy the Client ID to `NEXT_PUBLIC_THIRDWEB_CLIENT_ID`

### Optional Configuration

- **RPC Endpoints**: Configure custom RPC URLs for different networks
- **Explorer APIs**: Add API keys for blockchain explorers (Etherscan, etc.)

## 📁 Project Structure

```
defiguard-ai/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── analyze/       # Contract analysis endpoint
│   │   │   └── gemini/        # Gemini AI endpoint
│   │   ├── audit/             # Audit page
│   │   ├── dashboard/         # Dashboard page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── audit/            # Audit-related components
│   │   ├── dashboard/        # Dashboard components
│   │   ├── home/             # Homepage components
│   │   ├── layout/           # Layout components
│   │   └── ui/               # Reusable UI components
│   └── lib/                  # Utilities and configurations
│       ├── agents/           # AI agents
│       ├── gemini/           # Gemini client
│       ├── mcp/              # MCP servers
│       └── utils.ts          # Utility functions
├── public/                   # Static assets
├── mcp.json                 # MCP configuration
└── package.json             # Dependencies and scripts
```

## 🤖 AI Agents

### AuditorAgent
- **Purpose**: Main contract analysis using Gemini AI
- **Features**: Vulnerability detection, risk scoring, comprehensive analysis
- **Output**: Detailed security report with recommendations

### RiskAgent  
- **Purpose**: Risk assessment and scoring
- **Features**: Severity calculation, risk level determination
- **Output**: Risk metrics and recommendations

### RemediationAgent
- **Purpose**: Generate fixes for identified vulnerabilities
- **Features**: Code remediation, multiple fix suggestions
- **Output**: Fixed contract code and implementation guidance

## 🔌 MCP Servers

### SlitherMCP
- **Purpose**: Static analysis integration
- **Features**: Code quality assessment, gas analysis
- **Status**: Placeholder implementation (ready for Slither integration)

### BlockchainMCP
- **Purpose**: On-chain data retrieval
- **Features**: Contract verification, transaction history
- **Status**: Ready for blockchain explorer integration

### DeFiDataMCP
- **Purpose**: DeFi-specific analysis
- **Features**: Historical exploit data, similar contract analysis
- **Status**: Expandable for DeFi protocol integration

## 🎨 Styling & Theming

### Design System
- **Colors**: Cyber blue (#00f0ff), purple (#b400ff), pink (#ff00ea)
- **Effects**: Glassmorphism, aurora backgrounds, neon glows
- **Typography**: Modern sans-serif with gradient text effects
- **Animations**: Smooth transitions with Framer Motion

### Customization
- Modify colors in `tailwind.config.ts`
- Update animations in `globals.css`
- Customize components in `components/ui/`

## 🧪 Testing

```bash
# Run TypeScript checks
pnpm type-check

# Run ESLint
pnpm lint

# Run all validations
pnpm validate
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Configure build command as `pnpm build`
- **Railway**: Use the provided `railway.json` configuration
- **Docker**: Dockerfile included for containerized deployment

## 🔐 Security Considerations

- **API Keys**: Never commit API keys to version control
- **Environment Variables**: Use `.env.local` for sensitive data
- **CORS**: Configure appropriate CORS policies for production
- **Rate Limiting**: Implement rate limiting for API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini**: For providing advanced AI capabilities
- **Thirdweb**: For blockchain integration tools
- **Next.js**: For the amazing React framework
- **Tailwind CSS**: For utility-first styling
- **Nullshot Framework**: For MCP architecture support

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions)
- **Email**: support@defiguard.ai

---

**Built for NullShot Hacks Season 0 - Track 1b** 🏆

*Securing the future of DeFi, one contract at a time.* 🛡️

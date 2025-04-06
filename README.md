# EPO

**Product Overview**

EPO is an alternative use case for ENS, enabled through integration with Coinbase Smart Wallet, that allows anyone to easily build an on-chain profile. Users can obtain their own unique ENS-based ID on Layer 2 (Base) without complex procedures or needing to prepare ETH beforehand. Based on this ID, users can build a multifunctional profile featuring: aggregation of multiple links (similar to Linktree or Bento), on-chain evaluation and verification of skills and portfolios, publishing decentralized blogs utilizing IPFS, displaying verified personal information (such as age, nationality) via Self Protocol, and privacy-preserving sending.

---

**Problem**

Existing services that utilize ENS mainly for resolving address. We'll try real-world use cases. This process is complex and daunting, especially for blockchain beginners. Furthermore, services like eth.limo require technical knowledge regarding IPFS after obtaining an ENS domain, and the content configuration and upload procedures are cumbersome. Due to these factors, building on-chain profiles and using them for self-expression and information sharing is not straightforward for many users.

---

**Solution and Key Features**

<img src="https://github.com/user-attachments/assets/8aac0a68-60a9-45f3-9d98-c915509fa6d4" alt="drawing" width="70%"/>

- **Create Account**
EPO utilizes ENS Subnames and Coinbase Smart Wallet features to provide a mechanism for easily and quickly creating ENS accounts. Users first obtain an Ethereum address via Coinbase Smart Wallet, and by simply entering their desired username, it is instantly registered as an ENS subdomain on the Base Sepolia (L2) network. In this mechanism, the L2Registrar contract directly links the user's wallet address to the ENS name, and the L2ReverseResolver contract establishes a bidirectional link between the wallet address and the ENS name.
- **Profile Links**
Similar to standard ENS features, users can aggregate and display various information, such as links to X  accounts and wallet addresses for other blockchains (e.g., Solana, Bitcoin).
- **Privacy-Preserving Money Transfer**
Additionally, EPO features a privacy sending function integrated with Fluidkey. By registering a stealth address in their ENS profile, privacy-protected sending becomes possible for users.
- **Verified Profile**
    
    **Skills & Portfolio:** Users can list their skill sets and portfolios, and other EPO users can evaluate this content on-chain. As the evaluator's wallet address and ENS name are recorded, this provides transparent and trustworthy proof of achievements.
    
- **Writing**
It provides a decentralized blog function utilizing IPFS. When the "Start Blog" button is pressed, a user-specific group (Group ID) is generated. When an article in Markdown format is uploaded via the "New" button, that article is saved and published on IPFS.

---

- **Upcoming features**
    - **Custom Theming and Plugins: Profile Personalization and Extensibility**
        
        We will provide features allowing users to freely customize the appearance (theme, color scheme, layout) of their EPO profiles.Furthermore, we plan to introduce a system enabling third-party developers to add their own unique features (plugins). For example, users will be able to extend their profiles according to their needs, such as displaying portfolios from specific DeFi protocols, showing participation status in DAOs, or integrating specific gaming achievements.
        
    - **Token Gated Content: Community and Exclusive Content**
        
        We will add functionality to display exclusive content (such as limited blog posts, private information, or special links) only to holders of specific NFTs or FTs .
        
    - **Encrypted Messages: Private and Secure Communication**
        
        We will add a feature enabling users to send and receive end-to-end encrypted private messages with other EPO users.By providing a secure communication channel tied to wallet addresses, users will be able to contact others directly through their EPO profiles while protecting their privacy. (Potential technology: We are considering leveraging decentralized messaging protocols like XMTP).

---

## Codes
- `packages/frontend` : fronetnd for epo.im -> deployed cloudflare workers
- `packages/druin` : durin - ENS subnames on an L2

## Deployments
- [ENS L2 Registry on Base Sepolia](https://sepolia.basescan.org/address/0x10f609f3a940c065afa3e0ee034e9812092b2d39)
- [ENS config on Sepolia](https://sepolia.app.ens.domains/epo.eth?tab=more)
- [ENS subnames on Sepolia](https://sepolia.app.ens.domains/epo.eth?tab=subnames)

### Reference
- [Durin](https://durin.dev/): Issue onchain ENS subdomains on an L2
- [L2 Primary Name](https://docs.ens.domains/web/reverse/#l2-primary-names)(https://docs.ens.domains/web/reverse#l2-primary-names): Primary Names on L2
- [L2 Reverse Resolver Contracts on Base Sepolia](https://sepolia.basescan.org/address/0xa12159e5131b1eEf6B4857EEE3e1954744b5033A#code): L2 Primary Names
- [Self](https://self.xyz/): Verify real users while preserving privacy.

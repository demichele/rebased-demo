# Simple token transfer UI

This dApp was created using `@iota/create-dapp` that sets up a basic React
Client dApp using the following tools:

- [React](https://react.dev/) as the UI framework
- [TypeScript](https://www.typescriptlang.org/) for type checking
- [Vite](https://vitejs.dev/) for build tooling
- [Radix UI](https://www.radix-ui.com/) for pre-built UI components
- [ESLint](https://eslint.org/)
- [`@iota/dapp-kit`](https://docs.iota.org/references/ts-sdk/dapp-kit) for
  connecting to wallets and loading data
- [pnpm](https://pnpm.io/) for package management

## Starting your dApp

To install dependencies you can run

```bash
pnpm install
```

To start your dApp in development mode run

```bash
pnpm dev
```

## Building

To build your app for deployment you can run

```bash
pnpm build
```

## Token Minting and Configuration Guide

This guide explains the process of minting a token and configuring the required settings after publishing the token package. Follow these steps carefully to ensure a successful minting process.

## Steps to Mint the Token

### 1. Publish the Token Package

- **Publish the token package**: Ensure that you are the owner of the token package. Only the owner can mint tokens.
- **Copy your IOTA wallet address**: After publishing the token package, copy your IOTA wallet address from the IOTA wallet.

### 2. Check Package Publication on the IOTA Testnet Explorer

- **Go to the IOTA Testnet Explorer**: Open the [IOTA Test Explorer](https://explorer.rebased.iota.org/?network=testnet).
- **Search for your wallet address**: Paste your IOTA wallet address in the search bar to find the most recent transaction.
- **Identify the Package Publication Transaction**: The most recent transaction will be your package publication. Find the transaction that corresponds to the package you just published.

### 3. Copy the Package Address

- In the transaction details, copy the **package address**.
- This address is important for configuring your network.

### 4. Update the `networkConfig.ts` File

- Open your `networkConfig.ts` file in your project.
- **Paste the package address** in the `packageId` field in the `networkConfig.ts` file.

  Example:
  ```ts
  export const networkConfig = {
    packageId: "PASTE-YOUR-PACKAGE-ADDRESS-HERE",
    // other config options...
  };

### 5. Set the Treasury Cap Address

- **Find the Treasury Cap transaction**: Go back to the IOTA Testnet Explorer and search for the Treasury Cap transaction.
- **Copy the Treasury Cap address**: Copy the address from the treasury cap transaction details.
- **Paste the Treasury Cap address** in the `treasuryCap` field of the `networkConfig.ts` file.

  Example:
  ```ts
  export const networkConfig = {
    packageId: "PASTE-YOUR-PACKAGE-ADDRESS-HERE",
    treasuryCap: "PASTE-YOUR-TREASURY-CAP-ADDRESS-HERE",
    // other config options...
  };

### 6. Mint the Token from the Frontend Application

- Now, proceed to mint the token from the **frontend application**.
  - Interact with the frontend and trigger the minting process.
  - The frontend will mint the token by sending a transaction to the IOTA network.

### 7. Verify the Token Minting Transaction

- **Go back to the IOTA Testnet Explorer** and search for the **minting transaction**.
- Find the transaction associated with the token minting.
- **Copy the Token Address** from the minting transaction details.

### 8. Final Steps

- Once you have the token address, your token is successfully minted.
- You can now use this token address for further transactions, such as transferring or interacting with your token.


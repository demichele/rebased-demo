# IOTA Move Package: Token Transfer

This README provides a step-by-step guide to setting up and working with an IOTA Move package for token transfers.

## Prerequisites

- Ensure you have the IOTA Move CLI installed.
- Familiarity with Move language and IOTA dApp concepts is helpful.

## Setup Instructions

### 1. Create a New Package
Run the following command to create a new IOTA Move package:
```bash
iota move new token_transfer_package
```
This will generate the following structure:
- `sources/`: Folder to store your module files.
- `tests/`: Folder to store your test files.
- `Move.toml`: Configuration file for the package.

### 2. Write the Token Transfer Module
Navigate to the `sources` folder and create a new file named `transfer.move`:
```bash
cd token_transfer_package/sources
touch transfer.move
```
Write your module code for token transfer in `transfer.move`.

### 3. Write Tests for the Module
Navigate to the `tests` folder and write the test cases for your module:
```bash
cd ../tests
touch transfer_test.move
```
Add appropriate tests to validate your module's functionality.

## Build and Test the Package

### Build the Package
Run the following command to build the package:
```bash
iota move build
```

### Test the Package
Execute the test cases by running:
```bash
iota move test
```

## Publish the Package

Once your package is ready, publish it to the IOTA client:
```bash
iota client publish
```

For Token Transfer frontend, refer to the dedicated [README](./frontend/README.md) file in the frontend folder.
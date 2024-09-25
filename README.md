# BAR Token Transfer Checker

This Node.js script filters BAR token transfers involving specific stakeholders over the last X blocks on the Chiliz blockchain.

## Pre-requisites

- Node.js version 20 or superior
- NPM
- A valid RPC URL

You must create a `.env` file in the project root with the following variables:

```bash
RPC_URL=your_rpc_url_here
BAR_TOKEN_ADDRESS=0xFD3C73b3B09D418841dd6Aff341b2d6e3abA433b
BLOCKS_TO_CHECK=200000
STAKEHOLDERS=comma_separated_stakeholder_addresses
```
## Installation

To install the project dependencies, run:

```bash
npm install
```

## Running the nodeJS script

Ensure the .env file is correctly set up with the necessary variables:
```bash
RPC_URL=your_rpc_url_here
BAR_TOKEN_ADDRESS=0xFD3C73b3B09D418841dd6Aff341b2d6e3abA433b
BLOCKS_TO_CHECK=200000
STAKEHOLDERS=comma_separated_stakeholder_addresses
```

Example:

```bash
# Chiliz Mainnet RPC URL
RPC_URL=https://rpc.ankr.com/chiliz

# BAR token address
BAR_TOKEN_ADDRESS=0xFD3C73b3B09D418841dd6Aff341b2d6e3abA433b

# Number of blocks to check
BLOCKS_TO_CHECK=200000

# List of stakeholder addresses
STAKEHOLDERS=0x16E352ea78FE927358C6B22D2C8F4A64013d483a,0x590F0d784b88801Eb2dd8a9817BC5aEdB46170d5,0x6C0Ba6d4eF5Ea5694C6Bf900A7048E0718078E51
```

To execute the script and fetch BAR token transfers involving stakeholders, run the following:

```bash
npm start
```



## Improvements

### Scalability

- **Batch Processing**: Divide block ranges into smaller chunks and process them in parallel to handle larger ranges of blocks efficiently.
- **Asynchronous Fetching**: Use asynchronous requests to fetch logs concurrently, reducing the total execution time for large data sets.

### Security

- **Input Validation**: Validate all input, including addresses and block ranges, to ensure proper formatting and reduce vulnerabilities.
- **Secret Management**: Use environment-specific secret management tools (e.g., AWS Secrets Manager or HashiCorp Vault) to store sensitive information such as private keys or API credentials securely.

### Performance

- **Caching**: Implement caching strategies (e.g., Redis or in-memory caching) to store frequently requested data, reducing repetitive blockchain queries.
- **Event-driven Architecture**: Use an event-driven system to react to new transactions or block updates, reducing the need for constant polling.

## Author

Duarte Teles

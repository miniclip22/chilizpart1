# BAR Token Transfer Checker

This Node.js script filters BAR token (ERC20) transfers involving specific stakeholders over the last X blocks on the Chiliz blockchain.

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

To execute the script and fetch BAR token transfers involving stakeholders, run:

```bash
npm start
```

Ensure the .env file is correctly set up with the necessary variables:
```bash
RPC_URL=your_rpc_url_here
BAR_TOKEN_ADDRESS=0xFD3C73b3B09D418841dd6Aff341b2d6e3abA433b
BLOCKS_TO_CHECK=200000
STAKEHOLDERS=comma_separated_stakeholder_addresses
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
import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();
const rpcUrl = process.env.RPC_URL;
const blocksToCheck = process.env.BLOCKS_TO_CHECK !== undefined ? parseInt(process.env.BLOCKS_TO_CHECK, 10) : 5000;
const stakeholders = process.env.STAKEHOLDERS.split(',').map(address => address.trim());
const barAddress = process.env.BAR_TOKEN_ADDRESS;

if (rpcUrl === undefined) {
    throw new Error("RPC_URL env variable must be set");
} else if (barAddress === undefined) {
    throw new Error("Bar address env variable must be defined");
} else if (stakeholders === undefined) {
    throw new Error("Stakeholders env variable must be set");
}

const web3Provider = new Web3(new Web3.providers.HttpProvider(rpcUrl));

const getCurrentBlockNumber = async () => {
    try {
        const blockNumber = await web3Provider.eth.getBlockNumber();
        return BigInt(blockNumber);
    } catch (error) {
        console.error(`Error getting current block number`);
        throw error;
    }
};

const getTransferLogs = async (fromBlock, toBlock) => {
    try {
        return await web3Provider.eth.getPastLogs({
            fromBlock: web3Provider.utils.toHex(fromBlock),
            toBlock: web3Provider.utils.toHex(toBlock),
            address: barAddress,
            topics: [web3Provider.utils.sha3('Transfer(address,address,uint256)')] // Filtering for Transfer events
        });
    } catch (error) {
        console.error(`Error fetching logs from block ${fromBlock.toString()} to ${toBlock.toString()}:`, error);
        throw error;
    }
};

const getTransfers = async () => {
    try {
        const latestBlock = await getCurrentBlockNumber();
        const fromBlock = latestBlock - BigInt(blocksToCheck);
        const logs = await getTransferLogs(fromBlock, latestBlock);


        const filteredLogs = logs.filter(log =>
            stakeholders.includes(web3Provider.utils.toChecksumAddress('0x' + log.topics[1].slice(26))) ||
            stakeholders.includes(web3Provider.utils.toChecksumAddress('0x' + log.topics[2].slice(26)))
        );
        console.log('Filtered BAR token transfers:', filteredLogs);

    } catch (error) {
        console.error('Error getting transfers:', error);
        throw error;
    }
};

// Execute the main function
(async () => {
    await getTransfers();
})();
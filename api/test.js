const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
    await Moralis.start({
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImYxMGRmYTMyLWJhYjAtNDZlMC05NDQ0LWQ1NzJkNjY2OTdlNiIsIm9yZ0lkIjoiMzY0ODU1IiwidXNlcklkIjoiMzc0OTc3IiwidHlwZUlkIjoiMGJkMTIxYWItZmVmNy00NGMxLThkNmMtZGUyOGY0NGNlYWM2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDAyOTcxNDcsImV4cCI6NDg1NjA1NzE0N30.tYRL8Ee9kt4s2K59hU_8YSFetHDSGgraJbRr6n9w99Q",
    });

    const address = "0x26fcbd3afebbe28d0a8684f790c48368d21665b5";

    const chain = EvmChain.ETHEREUM;

    const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
        address,
        chain,
    });

    console.log(response.toJSON());
};

runApp();
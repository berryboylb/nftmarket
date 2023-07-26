
import nftMarketplace from "./NFTMarketplace.json";
import dotenv from "dotenv";
dotenv.config({});
export const NFTMarketplaceAddress = process.env.CONTRACT_ADDRESS;
export const nftMarketplaceAbi = nftMarketplace.abi;
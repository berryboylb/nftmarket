/// 0x5FbDB2315678afecb367f032d93F642f64180aa3
/// 0x5FbDB2315678afecb367f032d93F642f64180aa3
/// 0x5FbDB2315678afecb367f032d93F642f64180aa3
/// 0x5FbDB2315678afecb367f032d93F642f64180aa3
import dotenv from "dotenv";
import nftMarketplace from "./NFTMarketplace.json";
dotenv.config({ path: '../config.env' })
export const NFTMarketplaceAddress = "0x396458729e4da0c2b157f46B0D6920626C39C6b8";
export const nftMarketplaceAbi = nftMarketplace.abi;
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';

// INTERNAL IMPORT
import { Category, Brand } from '../components/componentsindex';
import NFTDetailsPage from '../NFTDetailsPage/NFTDetailsPage';
import toast from "react-hot-toast";

// IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';

const nftDetails = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext);


  // const [nft, setNft] = useState({
  //   image: "",
  //   tokenId: "",
  //   name: "",
  //   owner: "",
  //   price: "",
  //   seller: "",
  // });

  const [nft, setNft] = useState();

  const router = useRouter();

  useEffect(() => {
    console.log("Current Account:", currentAccount);
    // Perform any actions or logic based on the currentAccount value
  }, [currentAccount]);

  useEffect(() => {
    console.log("nft:", nft);
  }, [nft])

  useEffect(() => {
    if (!router.isReady) return;
    if (Object.keys(router.query).length == 0) {
      toast.error("No query parameters");
      router.back();
      return;
    }
    setNft(router.query)
  }, [router.isReady, router.query]);


  return (
    <div>
      {nft && <NFTDetailsPage nft={nft} />}
      <Category />
      <Brand />
    </div>
  )
}

export default nftDetails

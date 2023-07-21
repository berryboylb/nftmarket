import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

// INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex";
import { NFTTabs } from "../NFTDetailsIndex";
import Loader from "../../components/Loader";

// IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const [loading, setLoading] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provenance, setProvenance] = useState(false);
  const [owner, setOwner] = useState(false);
  const [social, setSocial] = useState();
  console.log("nft", nft);
  const changeLoader = () => setLoading((k) => !k);
  const router = useRouter();

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provenenceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user5,
    images.user3,
    images.user7,
    images.user5,
    images.user1,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText == "Bid History") {
      setHistory(true);
      setProvenance(false);
      setOwner(false);
    } else if (btnText == "Provenance") {
      setProvenance(true);
      setHistory(false);
      setOwner(false);
    }
  };

  const openOwner = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvenance(false);
    } else {
      setOwner(false);
    }
  };

  // SMART CONTRACT DATA
  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* PART ONE */}
        <div className={Style.NFTDescription_box_share}>
          <p>Vitural Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook />
                  FaceBook
                </a>
                <a href="#">
                  <TiSocialInstagram />
                  Instagram
                </a>
                <a href="#">
                  <TiSocialLinkedin />
                  Linkedin
                </a>
                <a href="#">
                  <TiSocialTwitter />
                  Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube />
                  YouTube
                </a>
              </div>
            )}

            {/* <BsThreeDots
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            /> */}

            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar />
                  Change Price
                </a>
                <a href="#">
                  <BiTransferAlt />
                  Transfer
                </a>
                <a href="#">
                  <MdReportProblem />
                  Report Abuse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep />
                  Delete Item
                </a>
              </div>
            )}
          </div>
        </div>
        {/* PART TWO */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>
            {nft.name} # {nft.tokenId}
          </h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
                  <span>
                    Karli Coast <MdVerified />
                  </span>
                </Link>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.creatorbackground7}
                alt="Profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Collection</small> <br />
                <span>
                  Wayne <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_bidding}>
            {/* <p>
              <MdTimer /> <span>Auction ending in:</span>
            </p> */}

            {/* <div className={Style.NFTDescription_box_profile_bidding_box_timer}>
              <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                <p>2</p>
                <span>Days</span>
              </div>
              <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                <p>22</p>
                <span>hours</span>
              </div>
              <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                <p>45</p>
                <span>mins</span>
              </div>
              <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                <p>12</p>
                <span>secs</span>
              </div>
            </div> */}

            <div className={Style.NFTDescription_box_profile_bidding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  {nft.price} ETH
                  {/* <span>(= $3,221.22)</span> */}
                </p>
              </div>
              {/* <span>[96 in stock]</span> */}
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_btn}>
              {currentAccount.toLowerCase() == nft.owner.toLowerCase() ? (
                <Button
                  icon={<FaWallet />}
                  btnText="List on Marketplace"
                  handleClick={() => {
                    console.log("owner");
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                    );
                  }}
                  classStyle={Style.button}
                />
              ) : (
                <>
                  {loading ? (
                    <Loader />
                  ) : (
                    <Button
                      icon={<FaPercentage />}
                      btnText="Buy NFT"
                      handleClick={() => {
                        changeLoader();
                        buyNFT(nft.tokenId, () => changeLoader());
                      }}
                      classStyle={Style.button}
                    />
                  )}
                </>
              )}

              {/* <Button
                icon={<FaPercentage />}
                btnText="Make Offer"
                handleClick={() => { }}
                classStyle={Style.button}
              /> */}
            </div>

            {/* <div className={Style.NFTDescription_box_profile_bidding_box_tabs}>
              <button onClick={(e) => openTabs(e)}>Bid History</button>
              <button onClick={(e) => openTabs(e)}>Provenance</button>
              <button onClick={() => openOwner()}>Owner</button>
            </div> */}

            {/* {history && (
              <div className={Style.NFTDescription_box_profile_bidding_box_tabs_card}>
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provenance && (
              <div className={Style.NFTDescription_box_profile_bidding_box_tabs_card}>
                <NFTTabs dataTab={provenenceArray} />
              </div>
            )}
            {owner && (
              <div className={Style.NFTDescription_box_profile_bidding_box_tabs_card}>
                <NFTTabs dataTab={ownerArray} />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;

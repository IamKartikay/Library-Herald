import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Context from "../context/StateContext";
import logo from "../assets/logo2.jpg";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLink, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import ShareToggle from "./ShareToggle";

const Journal = () => {
  const {
    fbshare,
    twittershare,
    lkdshare,
    copyLink,
    incrementLikes,
    decrementLikes,
    incrementViews,
  } = useContext(Context);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const article_id = queryParams.get("id");
  const year = queryParams.get("year");
  const volume = queryParams.get("volume");
  const issue = queryParams.get("issue");
  const [data, setData] = useState(null);
  const [liked, setLiked] = useState(false); //to toggle like button
  const [currLikes, setcurrLikes] = useState(null); //to prevent refreshes to show updated likes

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/article/?_id=${article_id}`
      );
      const jsonData = await response.json();
      setcurrLikes(jsonData.likes)
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  const {
    abstract,
    authors,
    title,
    keywords,
    authorDetails,
    firstPage,
    lastPage,
    printISSN,
    onlineISSN,
    doi,
    views,
    _id
  } = data ?? {};


  function re(text) {
    let pattern = /([1-5])(?=[A-Z])/g;
    let modifiedText = text.replace(pattern, "\n$1");
    return modifiedText;
  }

  const handleLikeButton = () => {
    if (liked) {
      setcurrLikes((currLikes) => currLikes - 1);
      decrementLikes(_id);
    } else {
      setcurrLikes((currLikes) => currLikes + 1);
      incrementLikes(_id);
    }
    setLiked(!liked);
  };

  return (
    <>
      {data ? (
        <div className="j_container">
          <div className="j_content">
            <div className="sec1" style={{ marginBottom: "25px" }}>
              <img src={logo} />
              <p>Library Herald</p>
              <ShareToggle />
            </div>
            <div className="section">
              <h1>{title}</h1>
            </div>
            <div className="section">
              <p>
                Library Herald <br /> Year : {year}, Volume : {volume}, Issue :{" "}
                {issue} <br />
                First page : <b>({firstPage}) </b>
                Last page : <b>({lastPage})</b> <br />
                Print ISSN : {printISSN}. Online ISSN : {onlineISSN}.<br />
                Article DOI : {doi}
              </p>
            </div>
            <div className="section">
              <p style={{ fontWeight: "bold" }}>{title}</p>
            </div>
            <div className="section">
              <p style={{ whiteSpace: "pre-line" }}>
                <span style={{ fontWeight: "bold" }}>{authors}</span>
                {re(authorDetails)}
              </p>
            </div>
            {abstract && (
              <div className="section">
                <p style={{ fontWeight: "bold" }}>Abstract</p>
                <p style={{ textAlign: "justify" }}>{abstract}</p>
              </div>
            )}
            {keywords && (
              <div className="section">
                <p style={{ fontWeight: "bold" }}>Keywords</p>
                <p>{keywords}</p>
              </div>
            )}
            <div id="hori-line" style={{ marginTop: "45px" }} />
            <div className="socials">
              <div className="logos">
                <button onClick={fbshare}>
                  <FaFacebookF size={14} />
                </button>
                <button onClick={lkdshare}>
                  <FaLinkedinIn />
                </button>
                <button onClick={twittershare}>
                  <FaXTwitter />
                </button>
                <button onClick={copyLink}>
                  <AiOutlineLink />
                </button>
              </div>
              <Link
                to={`/articles/?year=${year}&issue=${issue}&volume=${volume}`}
              >
                issue{issue} {year}
              </Link>
            </div>
            <div id="hori-line" />
            <div className="sec3">
              <div>
                <p>{views} views</p>
              </div>
              <div>
                <p>{currLikes}</p>
                <button onClick={()=>handleLikeButton(_id)}>
                  {liked ? (
                    <AiFillHeart color="#d52c49" />
                  ) : (
                    <AiOutlineHeart color="#d52c49" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <h1>Loading!</h1>
        </div>
      )}
    </>
  );
};

export default Journal;

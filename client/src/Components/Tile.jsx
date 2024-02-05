import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import "./tile.css";
import logo from "../assets/logo2.jpg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FaLinkedinIn, FaFacebookF, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import Context from "../context/StateContext";

const Tile = (props) => {
  const { fbshare, twittershare, lkdshare,copyLink } = useContext(Context);

  //Component-Level State:
  const [option, SetOption] = useState(false);
  const [sharepopup, setSharepopup] = useState(false);
  const handleSharepopup = () => {
    setSharepopup(true);
    SetOption(false);
  };

  const Navigate = useNavigate();
  console.log(props.data);
  const { _id, firstPage, lastPage, printISSN, title, onlineISSN, doi } =
    props.data;

  const { year, volume, issue } = props;

  return (
    <>
      <Dialog
        open={sharepopup}
        onClose={() => setSharepopup(!sharepopup)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 5,
            marginBottom: 2,
          }}
        >
          {"Share Post"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <span
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-around",
                marginBottom: "30px",
              }}
            >
              <button
                onClick={fbshare}
                style={{
                  background: "#4464a3",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              >
                <FaFacebookF size={30} color="white" />
              </button>
              <button
                onClick={twittershare}
                style={{
                  background: "#55acee",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              >
                <FaXTwitter size={30} color="white" />
              </button>
              <button
                onClick={lkdshare}
                style={{
                  background: "#0077b5",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              >
                <FaLinkedinIn size={30} color="white" />
              </button>
              <button
                onClick={copyLink}
                style={{
                  background: "#333333",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              >
                <AiOutlineLink size={30} color="white" />
              </button>
            </span>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <div className="tile">
        <div className="sec1">
          <img src={logo} />
          <p>Library Herald</p>

          <button
            style={{ marginLeft: "auto" }}
            onClick={() => {
              SetOption(!option);
            }}
          >
            <BsThreeDotsVertical />
          </button>
          {option && (
            <button
              className="option"
              onClick={() => {
                setSharepopup(!sharepopup);
                SetOption(false);
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginLeft: "25px",
                }}
              >
                <PiShareFatLight /> Share Post
              </span>
            </button>
          )}
        </div>

        <div
          className="sec2"
          onClick={() =>
            Navigate(
              `/article/?year=${year}&issue=${issue}&volume=${volume}&id=${_id}`
            )
          }
        >
          <p style={{ fontSize: "13px" }}>
            issue{props.issue} {props.year}
          </p>
          <p className="title">{title}</p>
          <p style={{ fontSize: "12.5px", marginTop: "2%" }}>
            Library Herald
            <br />
            First page : ({firstPage}) Last page : ({lastPage})<br />
            Print ISSN : {printISSN}. Online ISSN : {onlineISSN}.<br />
            Article DOI : {doi}
          </p>
        </div>
        <div id="hori-line" />
      </div>
    </>
  );
};

export default Tile;

// {authors}

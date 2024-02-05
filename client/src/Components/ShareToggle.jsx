import React, { useContext } from "react";
import { PiShareFatLight } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Context from "../context/StateContext";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";

const ShareToggle = () => {
  const {
    option,
    SetOption,
    sharepopup,
    setSharepopup,
    fbshare,
    twittershare,
    lkdshare,
    copyLink,
  } = useContext(Context);

  return (
    <>
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
    </>
  );
};

export default ShareToggle;

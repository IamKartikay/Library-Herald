import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  Children,
} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const fbshare = () => {
    // const link = window.location.href;
    const link = "https://www.libraryherald.dlaindia.in/archive-search";
    const msg = encodeURIComponent("Check this blog from Library Herald");
    window.open(`https://www.facebook.com/share.php?u=${link}`, "_blank");
  };
  const twittershare = () => {
    // const link = window.location.href;
    const link = "https://www.libraryherald.dlaindia.in/archive-search";
    const msg = encodeURIComponent("Check this blog from Library Herald");
    window.open(
      `https://www.twitter.com/share?url=${link}&text=${msg}`,
      "_blank"
    );
  };
  const lkdshare = () => {
    // const link = window.location.href;
    const link = "https://www.libraryherald.dlaindia.in/archive-search";
    const msg = encodeURIComponent("Check this blog from Library Herald");
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${link}`,
      "_blank"
    );
  };

  const copyLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    alert("Link Copied");
    setSharepopup(false);
  };

  const [option, SetOption] = useState(false);
  const [sharepopup, setSharepopup] = useState(false);
  const handleSharepopup = () => {
    setSharepopup(true);
    SetOption(false);
  };

  //contact us
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Context.Provider
      value={{
        fbshare,
        twittershare,
        lkdshare,
        option,
        SetOption,
        sharepopup,
        setSharepopup,
        copyLink,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,
        message,
        setMessage,
        handleFirstNameChange,
        handleLastNameChange,
        handleEmailChange,
        handlePhoneChange,
        handleMessageChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

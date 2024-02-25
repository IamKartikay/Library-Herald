import React, {useEffect, useState} from "react";
import book from "../assets/Lib.jpg";
import Button from "../Components/Button";
import HomeTabs from "../Components/HomeTabs";
import image from "../assets/image.jpg";
import image2 from "../assets/journalCropped.jpg";
import image3 from "../assets/image3.jpg";
import {
  jointEditors,
  associateEditors,
  advisoryBoard,
} from "../data/homePage";
import EditorLists from "../Components/editorLists";
import ContactUsForm from '../Components/ContactUsForm';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [latestJournalDetails ,setLatestJournalDetails] = useState("");

  const fetchLatestJournalDetails = async() =>{
    fetch('http://localhost:5000/', {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(details => setLatestJournalDetails(details))
    .catch(err => console.log(err))
  }

  const handleLatestJournalDetails = () => {
    navigate(`/articles/?year=${latestJournalDetails._id}&issue=${latestJournalDetails.issue}&volume=${latestJournalDetails.volume}`)
  }

  useEffect(()=>{
    fetchLatestJournalDetails();
  },[])

  return (
    <>
      <div className="hsection">
        <div className="s1">
          <img src={book} alt="lib herald" />
          <div className="s1-txt">
            <span className="title-txt">WELCOME TO LIBRARY HERALD</span>
            <p className="s1-p">
              Library Herald publishes peer-reviewed original contributions in
              the field of Library and Information Science. It also incorporates
              research reports and includes reviews of important Indian and
              foreign publications. Special issues on various aspects of Library
              and Information Science are also published from time to time. It
              is published quarterly in March, June, September and December
              every year.
            </p>
            <p id="ph">Current Issue</p>
            <button class="bg-blue w-40 h-11 rounded-lg hover:bg-red" style={{color:'white'}}  onClick={()=>handleLatestJournalDetails()}>{latestJournalDetails ? `Vol ${latestJournalDetails.volume} No. ${latestJournalDetails.issue} ${latestJournalDetails._id}` : '....'}</button>
          </div>
        </div>
      </div>
      <div className="hsection">
        <div className="s2" id="aboutAnchor">
          <span
            style={{
              fontSize: "40px",
              textAlign: "center",
              color: "#fde6aa",
              fontWeight: "500",
            }}
          >
            ABOUT THE JOURNAL
          </span>
          <span
            style={{
              textAlign: "justify",
              width: "55%",
              color: "white",
              lineHeight: "1.75em",
              fontSize: "18px",
            }}
          >
            Library Herald is a double blind peer reviewed scholarly research
            journal published quarterly by Delhi Library Association (DLA).
            Library Herald indexed in UGC-CARE List (No. 593). It began
            publication in 1958. The first issue had an article on Document,
            Documentation and Standardization by Dr. S.R. Ranganathan. Library
            Herald has a strong base with stalwarts like Prof. S Das Gupta,
            Prof. P N Kaula, Shri RS Goyal, Shri K S Pareek, Shri Jainath Kaul
            and Shri K S Dalal associated with the editorial initially. In 1961
            the editorial board was reconstituted and editorship was entrusted
            to Shri NK Goil assisted by Shri HC Jain and Ms. V Sundaram. After
            Shri Goil’s death the editorial board was again reconstituted in
            1980 with Prof. Krishan Kumar as editor and Prof. M M Kashyap and
            Prof. CP Vashishth as Associate Editors. In October 2005 the
            editorial board was once again reconstituted with Professor CP
            Vashishth as Editor and Dr. Sunil Kumar and Dr. RK Sharma as
            Associate Editors. After the demise of Prof. CP Vashishth in 2019,
            the editorship was entrusted to Prof. Jaideep Sharma with Prof. KP
            Singh and Ms. Renu Arora as Joint Editors. Currently Prof. R K Bhatt
            is the editor of Library Herald.
          </span>
        </div>
      </div>
      <div className="hsection">
        <div className="s3">
          <HomeTabs
            heading={"AIMS & SCOPE"}
            text={
              "Library Herald publishes original research in the field of Library and Information Science. It also incorporates research reports and includes reviews of important Indian and foreign publications. Special issues on various aspects of Library and Information Science are also published from time to time."
            }
          />
          <HomeTabs
            heading={"SUBSCRIPTION"}
            text={
              "Its annual subscription is Rs. 2,000 in India and the US $ 50 for subscribers abroad."
            }
          />
          <HomeTabs
            heading={"ACCESSIBILITY"}
            text={
              <span>
                Through Print & Online. <br /> It is one of the oldest journals
                in India (Start in 1958) in the field of Library and Information
                Science patronized by Dr. S R Ranganathan. Since 2010 the
                Library Herald is accessible online through the interface of
                IndianJournals.com
              </span>
            }
          />
        </div>
      </div>
      <div className="hsection">
        <div className="s4" id="editorialAnchor">
          <img src={image} style={{ width: "450px" }} />
          <span
            style={{
              fontSize: "72px",
              lineHeight: "1.25em",
              color: "#3a54b4",
              width: "30pc",
              fontWeight: "500",
            }}
          >
            EDITORIAL BOARD
          </span>
        </div>
      </div>
      <div className="hsection">
        <div className="s5">
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.75em",
              fontStyle: "italic",
            }}
          >
            Our Reputation Speaks for Itself
          </p>
          <p
            style={{
              fontSize: "40px",
              lineHeight: "1.35em",
              fontWeight: "500",
              color: "#3a54b4",
            }}
          >
            EDITOR
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
                lineHeight: "1.75em",
              }}
            >
              Dr. Rakesh Kumar Bhatt
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                lineHeight: "1.75em",
              }}
            >
              Professor, Department of Library and Information Science
              <br />
              North Campus. University of Delhi, Delhi
              <br />
              9711978544
            </p>
          </div>
        </div>
      </div>
      <div className="hsection">
        <div className="s6">
          <p
            style={{
              fontSize: "40px",
              lineHeight: "1.35em",
              fontWeight: "500",
              color: "#3a54b4",
              marginBottom: "60px",
            }}
          >
            JOINT EDITORS
          </p>
          <EditorLists data={jointEditors} />
        </div>
      </div>
      <div className="hsection">
        <div className="s7">
          <p
            style={{
              fontSize: "40px",
              lineHeight: "1.35em",
              fontWeight: "500",
              color: "#3a54b4",
              marginBottom: "60px",
            }}
          >
            ASSOCIATE EDITORS
          </p>
          <EditorLists data={associateEditors} />
        </div>
      </div>
      <div className="hsection">
        <div className="s8">
          <p
            style={{
              fontSize: "40px",
              lineHeight: "1.35em",
              fontWeight: "500",
              color: "#3a54b4",
              marginBottom: "60px",
            }}
          >
            ADVISORY BOARD
          </p>
          <EditorLists data={advisoryBoard} />
        </div>
      </div>
      <div className="hsection">
        <div className="s9">
          <p
            style={{
              fontSize: "40px",
              lineHeight: "1.35em",
              fontWeight: "500",
              color: "#3a54b4",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            MANAGING EDITORS
          </p>
          <p
            style={{ textAlign: "center", fontSize: "18px", lineHeight: "2em" }}
          >
            <b>
              Prof. Rakesh Kumar Bhatt
              <br />
              Dr. J N Singh
              <br />
              Dr. S K Bajpai
            </b>
          </p>
        </div>
      </div>

      <div className="hsection">
        <div className="s10">
          <img src={image2} style={{ borderRadius: "5px" }} />
          <p
            style={{
              fontSize: "40px",
              lineHeight: "1.35em",
              fontWeight: "500",
              color: "white",
              textShadow:
                "rgba(255, 255, 255, 0.6) 1px 1px 1px, rgba(0, 0, 0, 0.6) -1px -1px 1px;",
            }}
          >
            GET YOUR JOURNAL NOW!
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.75em",
              color: "white",
              textDecoration: "underline",
            }}
          >
            <b>On an annual subscription of Rs.2,000</b>
          </p>
          <Button buttonText="Subscribe" bgcolor={'#fff2d4'} textColor={'black'}/>
        </div>
      </div>

      <div className="hsection">
        <div className="s11">
          <div className="overlaping-div1">
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.41em",
                fontWeight: "bold",
                color: "#3a54b4",
              }}
            >
              ALL CORRESPONDENCE SHOULD BE ADDRESSED TO
            </p>
            <p>
              <b>Managing Editors</b>
              <br />
              Professor Rakesh Kumar Bhatt
              <br />
              Dr. JN Singh
              <br />
              Dr. SK Bajpai
            </p>
            <p>
              LIBRARY HERALD
              <br />
              Ranganathan Bhavan, 'C' Block,
              <br />
              Community Centre, Near CGHS Dispensary,
              <br />
              Naraina Vihar,
              <br />
              New Delhi-110028, India.
            </p>
            <p>
              E-mail:
              <a href="libraryherald@gmail.com">libraryherald@gmail.com</a>
              <br />
              Website:<a href="https://dlaindia.in/">dlaindia.in</a>
            </p>
          </div>
          <img id="overlaping-img" src={image3} />
        </div>
      </div>

      <div className="hsection">
        <div className="s12">
          <p
            style={{
              fontSize: "40px",
              lineHeight: "1.35em",
              fontWeight: "500",
              color: "#3a54b4",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            CONTACT US
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.35em",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Feel free to ask any queries
          </p>
          <div id="contactAnchor"><ContactUsForm /></div>
        </div>
      </div>
    </>
  );
};

export default Home;

//TODO MAKE BUTTON ACCORDINGLY TO COLOR

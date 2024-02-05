import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./archive.css";
import DropdownButton from "../Components/DropdownButton";

const Archive = () => {
  const [Journals, setJournals] = useState(null);
  const [currentJournals, setCurrentJournals] = useState(null);
  const [allYears, setAllYears] = useState(null);

  const handleFetchByYear = async (year) => {
    await fetch(`http://localhost:5000/searhByYear/?year=${year}`)
      .then((res) => res.json())
      .then((data) => {
        setJournals(data);
      })
      .catch((error) => console.log(error));
  };

  const fetchJournals = async () => {
    await fetch("http://localhost:5000/allJournals")
      .then((res) => res.json())
      .then((data) => {
        setJournals(data.allJournals);
        setCurrentJournals(data.currentJournal);
        setAllYears(data.years);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  return (
    <>
      {Journals ? (
        <div>
          <div className="arch-body">
            <div className="a1">
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.41em",
                  fontWeight: "bold",
                  color: "#3a54b4",
                }}
              >
                Library Herald Archive Search
              </p>
              <DropdownButton data={allYears} handleClick={handleFetchByYear} />

              <div className="flex-table">
                <div className="flex-item" id= 'header' style={{background:'#3a54b4', color:'white', position:'sticky', top: 0}}>
                  <p style={{ width:'50%', textAlign: "center" }}>ISSUE</p>
                  <p style={{ width:'50%', textAlign: "center" }}>YEAR</p>
                </div>
                {Journals.map((elem, i) => (
                  <div className="flex-item" key={i}>
                    <Link
                      to={`/articles/?year=${elem.year}&issue=${elem.issue}&volume=${elem.volume}`}
                      style={{ color: "#3a54b4", textAlign: "center", width:'50%' }}
                    >
                      Volume-{elem.volume}, Issue-{elem.issue} ({elem.month})
                    </Link>
                    <p style={{ color: "black", width:'50%', textAlign: "center" }}>{elem.year}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="a2">
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.41em",
                  fontWeight: "bold",
                  color: "#3a54b4",
                }}
              >
                Current Publication
              </p>
              <div className="flex-table">
                <div className="flex-item" id= 'header' style={{background:'#3a54b4', color:'white'}}>
                  <p style={{ width:'50%', textAlign: "center" }}>ISSUE</p>
                  <p style={{ width:'50%', textAlign: "center" }}>YEAR</p>
                </div>
                {currentJournals.map((elem, i) => (
                  <div className="flex-item" key={i}>
                    <Link
                      to={`/articles/?year=${elem.year}&issue=${elem.issue}`}
                      style={{ color: "#3a54b4", textAlign: "center", width:'50%' }}
                    >
                      Volume-{elem.volume}, Issue-{elem.issue} ({elem.month})
                    </Link>
                    <p style={{ color: "black", width:'50%', textAlign: "center" }}>{elem.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Archive;

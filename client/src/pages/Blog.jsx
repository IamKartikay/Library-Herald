import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import {Navigate} from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import "../pages/blog.css";

const Blog = () => {
  const [volume, setVolume] = useState("");
  const [issue, setIssue] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  const createNewJounal = async (ev) => {
    
    //formdata is an constructor to store the data submitted by form in form format rather than plain JSON
    //data.set(key, value)
    //data.set(key)
    const data = new FormData();
    data.set('volume', volume);
    data.set('issue', issue);
    data.set('year', year);
    data.set('month', month);
    data.set('content', new Blob([content], { type: 'text/html' }));

    ev.preventDefault();
    console.log(typeof content)
    console.log(data.get('content'));

    
    const response = await fetch("http://localhost:5000/post", {
        method: "POST",
        body: data,        
      });    
        
    if(response.ok)
    {
      setRedirect(true);
    }

  };

  if(redirect)
  {
    return <Navigate to={'/archieve'} /> 
  }

  return (
    <div className="w-full h-screen flex justify-center">
      <form className="max-w-4xl w-3/4 mt-40" onSubmit={createNewJounal}>
        <input
          type="volume"
          value={volume}
          placeholder={"Volume"}
          className="mt-5"
          onChange={(ev) => setVolume(ev.target.value)}
        />
        <input
          type="issue"
          value={issue}
          placeholder={"Issue"}
          className="mt-5"
          onChange={(ev) => setIssue(ev.target.value)}
        />
        <input
          type="year"
          value={year}
          placeholder={"Year"}
          className="mt-5"
          onChange={(ev) => setYear(ev.target.value)}
        />

        <input
          type="text"
          value={month}
          placeholder={"Month"}
          className="mt-5"
          onChange={(ev) => setMonth(ev.target.value)}
        />

        {/* <select type="month" placeholder={"Month"}  className="mt-5 border-2">
          <option value={month}>March</option>
          <option value={month}>June</option>
          <option value={month}>September</option>
          <option value={month}>December</option>
        </select> */}

        <input
          type="text"
          value={title}
          placeholder={"Title"}
          className="mt-5"
          onChange={(ev) => setTitle(ev.target.value)}
        />

        <div className="max-h-48 overflow-y-scroll mt-5">
          <ReactQuill value={content} onChange={(e) => setContent(e)} />
        </div>

        <button className="bg-black text-white mt-5 cursor-pointer ">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Blog;

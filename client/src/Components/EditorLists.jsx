import React from "react";

const EditorLists = ({data}) => {
  return (
    <div className="editors-grid">
      {data.map((e, i) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a href={e.link}>
            <b>{e.name}</b>
          </a>
          <p style={{ textAlign: "center", lineHeight:'1.875em', fontSize:"15px" }}>{e.address}</p>
          <p style={{ textAlign: "center", lineHeight:'1.875em', fontSize:'15px' }}>{e.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default EditorLists;

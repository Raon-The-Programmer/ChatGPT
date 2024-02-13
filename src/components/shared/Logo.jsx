import React from "react";
import { Link } from 'react-router-dom';
import { RiOpenaiFill } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <Link to={"/"}><RiOpenaiFill size={35} /></Link>
      <h1 className="fw-bold text-shadow" style={{ fontSize: "20px" }}>MERN</h1><p style={{fontSize:'20px'}}>- GPT</p>
    </div>
  );
};

export default Logo;

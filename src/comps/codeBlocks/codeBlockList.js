import React,  { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./codeBlockList.css";

const endpoint= 'http://localhost:4000';

function CodeBlockList(){
    const [codeBlocks, setCodeBlocks] = useState([]);

    useEffect( () => {
      const getList = async () => {
        const res = await fetch(endpoint)
        setCodeBlocks(await res.json());
      }
      getList();
    }, []);

    const navigate = useNavigate();
    
    return (
        //creating the list:
        <ul> {codeBlocks.map((item) => {
            const navigateTo = () => navigate(`/codeBlock/${item._id}`); //for each code block, navigate to the code block page
            return (
              <div className= "listVis" key = {item.title}>
                <h2 className= "titleVis">{item.title}</h2>
                <button className= "buttonVis" onClick={navigateTo}>click to see the code</button>
              </div>)})}</ul>
    );
  }
  
export default CodeBlockList;  
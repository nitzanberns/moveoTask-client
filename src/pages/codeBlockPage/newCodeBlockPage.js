import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './newCodeBlockPage.css';


const endpoint= 'http://localhost:4000';

function NewCodeBlockPage(){
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");

    //navigate to lobby page
    const navigate = useNavigate();
    const navigateToLobby = () => navigate('/');

    const onClick = async () => {    
        await fetch(`${endpoint}/newCodeBlock`, {method: 'POST', body: JSON.stringify({title, code}), headers: {'Content-Type': 'application/json',}});         
        navigateToLobby();
    }
        
    useEffect(() => {},[]);

    const onChangeTitle = (event) => {setTitle(event.target.value)};

    const onChangeCode = (event) => {setCode(event.target.value)};


    return( 
        <div>   
            <div className="header">
                <h2>Fill in the fields</h2>
            </div>
            <form>
                <label className="titVis">
                    <div className="codeVis">Title:</div>
                    <textarea onChange={onChangeTitle} type="text" />
                </label>
            </form>
            <form>
                <label className="titVis">
                    <div className="codeVis">Code:</div>
                    <textarea onChange={onChangeCode} type="text" />
                </label>
            </form>
            <button onClick={onClick}>
              <h4>save</h4>
            </button>
        </div>
    );
    
}

export default NewCodeBlockPage;

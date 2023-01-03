import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './codeBlockPage.css';

const endpoint= 'http://localhost:4000';

function CodeBlockPage(){
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [firstVisited, setFirstVisited] = useState(false);

    const {id} = useParams();
    useEffect( () => {
        const getList = async () => {
          const res = await fetch(`${endpoint}/codeBlock/${id}`);
          const res2 = await res.json();
          setTitle(res2.title);
          setCode(res2.code);
          setFirstVisited(res2.firstVisited);
        };
        getList();
      }, [id]);

    const onChange = (event) => { setCode(event.target.value) };

    //navigate to lobby page
    const navigate = useNavigate();
    const navigateToLobby = () => navigate('/');

    const onClick = async () => {    
        await fetch(`${endpoint}/codeBlock/${id}`, {method: 'PUT', body: JSON.stringify({title, code}), headers: {'Content-Type': 'application/json',}});         
        navigateToLobby();
    }

    return(
        <div> 
            <div className="header">
                <h2>{title}</h2>
            </div>
            <form>
                <label>Code: 
                    <textarea onChange={onChange} rows="4" cols="50" value={code}></textarea>
                </label>
            </form>
            { firstVisited && <div><button onClick={onClick}>
                            <h4>update</h4>
                          </button></div>}
        </div>
    ); 
}

export default CodeBlockPage;

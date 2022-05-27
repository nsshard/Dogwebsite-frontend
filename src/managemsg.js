import React, {useRef,useState, useEffect } from "react";
import axios from './axios';
import './App.css';
import useRefreshToken from "./hooks/useRefreshToken";
import useAxiosPrivate from "./hooks/useAxiosPrivate";

/**
 * Delete msg page
 * 
 */
function Managemsg() {
/**
 * Variables
 * 
 */
  const [success, setSuccess] = useState(false);
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [data, getData] = useState([]);
  const [id, setId] = useState("");
  const [commentmsg, setCommentmsg] = useState("");
  const URL = 'http://localhost:3000/comments';
  const refresh = useRefreshToken();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [id]);

/**
 * submit function, prevents default
 * 
 */
  const handleSubmit = async (e) => {
    e.preventDefault();
   
/**
 * delete a comment based on ID
 * 
 */
    try {
      const response = await axios.delete(
        URL,
        { data: { id } });

      setId("");
    
     
      setSuccess(true);

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      }
      errRef.current.focus();
    }
  };
/**
 * fetch comments from db
 * 
 */
  useEffect(() => {
      fetchData()
  }, [])


  const fetchData = () => {
      fetch(URL)
          .then((res) =>
              res.json())

          .then((response) => {
              console.log(response);
              getData(response);
          })

  }

  return (
<>
{success ? (
        <section>
          <br></br>
          <h1>Comment deleted!</h1>
        </section>
      ) : (
        <section>
 <div className="commentform">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="addcommenttext">
              <h1>Delete a comment</h1>
            </div>

          

            <form onSubmit={handleSubmit}>
              <div className="commentbox1">
                <label htmlFor="name">Comment ID:</label>
                <input
                  type="text"
                  id="id"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setId(e.target.value)}
                  value={id}
                  required
                  aria-describedby="uidnote"
                />
              </div>
           
           

              <div className="deletecommentbuttonin">
                <button onClick={() => refresh()}>Delete comment</button>
              </div>
            </form>
            <p>
              <span className="line"></span>
            </p>
          </div>

         

<div className="commentthingy">
<tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Comment</th>
         
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.commentmsg}</td>
            <td>{item.location}</td>
         
          </tr>
        ))}
      </tbody>

      </div>
         
        </section>
        
      )}
    </>
  );
}

export default Managemsg;
	
import React, {useRef,useState, useEffect } from "react";
import axios from './axios';
import './App.css';
/**
 * Comments page
 * 
 */
function Comments() {
/**
 * Variables 
 * 
 */
  const [success, setSuccess] = useState(false);
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [data, getData] = useState([]);
  const [name, setName] = useState("");
  const [commentmsg, setCommentmsg] = useState("");
  const URL = 'http://localhost:3000/comments';

  /**
 * Empty function for onClick in button use
 * 
 */
  const refresh = () => {}

  /**
 * Updates the fields
 * 
 */
  
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [name, commentmsg]);

/**
 * Submit function for the form, prevents default
 * 
 */
  const handleSubmit = async (e) => {
    e.preventDefault();
   
/**
 * Try to post a comment
 * 
 */
    try {
      const response = await axios.post(
        URL,
        JSON.stringify({ name, commentmsg}),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );

      setName("");
      setCommentmsg("");
     
      setSuccess(true);

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      }
      errRef.current.focus();
    }
  };
/**
 * The below functions retrieve list of comments
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
          <h1>Comment Created!</h1>
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
              <h1>Add a comment!</h1>
            </div>

          

            <form onSubmit={handleSubmit}>
              <div className="commentbox1">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  aria-describedby="uidnote"
                />
              </div>
              <div className="commentbox2">
                <label htmlFor="commentMsg">Comment:</label>
                <input
                  type="text"
                  id="commentmsg"
                  onChange={(e) => setCommentmsg(e.target.value)}
                  value={commentmsg}
                  required
                />
              </div>
           

              <div className="addcommentbut">
                <button onClick={() => refresh()}>Create comment!</button>
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

export default Comments;
	
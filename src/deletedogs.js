import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import axios from "./axios";
import ImageUploading from 'react-images-uploading';
const DOG_URL = "/dogs";
const DOG_IMG_URL = "http://localhost:3000/img/${item.img}.jpg";

/**
 * Delete dog page
 * 
 */
function Deletedogs() {
/**
 * Variables
 * 
 */
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [data, getData] = useState([]);
  const URL = "http://localhost:3000/dogs";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState([]);
  const [name2, setName2] = useState("");
  const [breed2, setBreed2] = useState("");
  const [location2, setLocation2] = useState("");
  const [img2, setImg2] = useState([]);
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    
   
  };

    
/**
 * Empty function for onClick on buttons
 * 
 */
  const refresh = () => {}
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [id]);

/**
 * Submit function, prevents default
 * 
 */
  const handleSubmit = async (e) => {
    e.preventDefault();
   /**
 * Try to delete a comment bsaed on ID
 * 
 */
    try {
      const response = await axios.delete(
        DOG_URL,
        { data: { id } });
       
      

      setId("");
      setName("");
      setSuccess(true);

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      }
      errRef.current.focus();
    }
  };

/**
 * Fetch dog data
 * 
 */

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };

  
  return (
    <>
    
      {success ? (
        <section>
          <br></br>
          <h1>Dog successfully deleted!</h1>
        </section>
      ) : (
        <section>







          <div className="loginstuffv5">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="textthingymod">
              <h1>Delete dogs</h1>
            </div>

            <div className="scrolldownrem">
              <h1>Scroll down to get a list of current dogs!</h1>
            </div>

            <form onSubmit={handleSubmit}>
            <div className="blacktext0">
                <label htmlFor="id">ID:</label>
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
             
        

              <div className="deletedogbutton">
                <button onClick={() => refresh()}>Delete dog</button>
              </div>
            </form>
            <p>
              <span className="line"></span>
            </p>
          </div>

          <div className="adddogimg">

    
  
     


<div className="admindogsdisplay">
<tbody>
        <tr>
          <th>Dog ID</th>
          <th>Name</th>
          <th>Breed</th>
          <th>Location</th>
          <th>img</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.breed}</td>
            <td>{item.location}</td>
            <div className='imagesinsidetable'>
            <td><img class="img3" src={`http://localhost:3000/img/${item.img}.jpg`}></img></td>
            </div>
          </tr>
        ))}
      </tbody>

      </div>
          </div>
        </section>
        
      )}
    </>
  );
}


export default Deletedogs;

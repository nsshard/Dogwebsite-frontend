import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import axios from "./axios";

import ImageUploading from 'react-images-uploading';
const DOG_URL = "/dogs";
const DOG_IMG_URL = "http://localhost:3000/img/${item.img}.jpg";

/**
 * Browse dog page
 * 
 */
function Browsedogs() {
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
/**
 * Update image if it's changed
 * 
 */
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    
   
  };


    


/**
 * These useeffect keeps the fields updated so they can be used in forms
 * 
 */
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [id, name, breed, location]);


/**
 * Handles submit, prevents default
 * 
 */
  const handleSubmit = async (e) => {
    e.preventDefault();
  };


/**
 * Get data using fetch, this is unrestricted 
 * 
 */
  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };


/**
 * Get dog by ID, searching function for the public
 * 
 */
  const getdogbyID = () => {
    fetch(URL+"/dogid/"+id)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      getData(response);
    });
};

/**
 * Get dog by name, searching function for the public
 * 
 */
const getdogbyName = () => {
    fetch(URL+"/dogname/"+name)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      getData(response);
    });
};

/**
 * Get dog by breed, searching function for the public
 * 
 */
const getdogbyBreed = () => {
    fetch(URL+"/dogbreed/"+breed)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      getData(response);
    });
};

/**
 * Get dog by location, searching function for the public
 * 
 */
const getdogbyLocation = () => {
    fetch(URL+"/doglocation/"+location)
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
          <h1>Server received response. Please check HTML response</h1>
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
              <h1>Dog browser</h1>
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
                  
                  aria-describedby="uidnote"
                />
                <div className="minibuttonset">
                <button onClick={() => getdogbyID()}>Find by ID</button>
              </div>
              </div>
              <div className="blacktext1">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  
                  aria-describedby="uidnote"
                />
                  <div className="minibuttonset">
                <button onClick={() => getdogbyName()}>Find by name</button>
              </div>
              </div>
              <div className="blacktext2">
                <label htmlFor="breed">Breed:</label>
                <input
                  type="text"
                  id="breed"
                  onChange={(e) => setBreed(e.target.value)}
                  value={breed}
                  
                />
                  <div className="minibuttonset">
                <button onClick={() => getdogbyBreed()}>Find by breed</button>
              </div>
              </div>
              <div className="blacktext5">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  autoComplete="off"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  
                  aria-describedby="uidnote"
                />
                 <div className="minibuttonset">
                <button onClick={() => getdogbyLocation()}>Find by location</button>
              </div>
              </div>
        

              <div className="findalldogs">
                <button onClick={() => fetchData()}>All dogs</button>
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


export default Browsedogs;

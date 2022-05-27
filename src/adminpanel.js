import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import axios from "./axios";

import ImageUploading from 'react-images-uploading';
const DOG_URL = "/dogs";
const DOG_IMG_URL = "http://localhost:3000/img/${item.img}.jpg";

/**
 * Main module enclosing everything
 * 
 */
function Adminpanel() {
  
/**
 * Variables. 
 * Name: Username
 * breed: Breed of pet
 * location: Location of pet store
 * Image: Image string of pet
 *
 */
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [data, getData] = useState([]);
  const URL = "http://localhost:3000/dogs";
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
 * Button stuff
 * 
 */
  const refresh = () => {
  }


  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [name, breed, location, img]);

 

  const handleSubmit = async (e) => {
    e.preventDefault();

   /**
 * Function to submit the form.
 * 
 */

    try {
      const response = await axios.post(
        DOG_URL,
        JSON.stringify({ name, breed, location, img }),
        {
          headers: { "Content-Type": "application/json",
          withCredentials: true,
          },
          
        }
      );

      setName("");
      setBreed("");
      setLocation("");
      setImg("");
      setSuccess(true);

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      }
      errRef.current.focus();
    }
  };

/**
 * Function to change image.
 * 
 */
  const onChangeImg = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      
      })
      ;
      alert("Image succesfully sent. Please copy "+ `${filename} ` + " (without space and .JPG)" + " into Image:");


      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

    
    } catch (err) {
      if (err.response.status === 500) {
        console.log("server error");
      } else {
        console.log("other error");
      }
    
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

/**
 * Fetches data and gets list of pets.
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

  
  return (
    <>
    
      {success ? (
        <section>
          <br></br>
          <h1>Server has returned response. Check HTTP response</h1>
        </section>
      ) : (
        <section>







          <div className="loginstuffv3">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="textthingy">
              <h1>Add dogs</h1>
            </div>

            <div className="scrolldownrem">
              <h1>Scroll down to get a list of current dogs!</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="blacktext1">
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
              <div className="blacktext2">
                <label htmlFor="breed">Breed:</label>
                <input
                  type="text"
                  id="breed"
                  onChange={(e) => setBreed(e.target.value)}
                  value={breed}
                  required
                />
              </div>
              <div className="blacktext5">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  autoComplete="off"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  required
                  aria-describedby="uidnote"
                />
              </div>
              <div className="imge">
                <label htmlFor="img">Image:</label>
                <input
                  type="text"
                  id="img"
                  autoComplete="off"
                
                  onChange={(e) => setImg(e.target.value)}
                  value={img}
                  aria-describedby="uidnote"
                />
              </div>

              <div className="adddog">
                <button onClick={() => refresh()}>Create dog</button>
              </div>
            </form>
            <p>
              <span className="line"></span>
            </p>
          </div>

          <div className="adddogimg">

          JPG only  
         
  
      <form onSubmit={onSubmit}>
        <div className='custom-file'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
           
            onChange={onChangeImg}
          />
          <label className='custom-file-label' htmlFor='customFile'>
          <img class="img3" src={`http://localhost:3000/img/${filename}`}></img>
          </label>
        </div>

        

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}

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


export default Adminpanel;

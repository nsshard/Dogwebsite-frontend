
import './App.css';
import './dogspage.css';
import React, {useState, useEffect } from "react";
import axios from './axios';



function Browsedogs() {
  const [data, getData] = useState([])
  const URL = 'http://localhost:3000/dogs';


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
       <div className='loginstuffv2'>
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

      </>
  );
}




export default Browsedogs;

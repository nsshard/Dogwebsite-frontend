import React from "react";
import "./App.css";
import axios from './axios';
export const Dogs = () => {


  const res = axios({
    method:'get',
    url: '/dogs',
responsetype: 'json',
headers: {
  'Content-Type':"application/json"
}

  })

  return (

    <>

      <div className="dog">
        {res.map((data, key) => {
          return (
            <div key={key}>
            {data.name + ' ,'+
            data.breed +
            ','+
            data.location}
            </div>
          );
        })}
      </div>
    
    </>

  );

};  
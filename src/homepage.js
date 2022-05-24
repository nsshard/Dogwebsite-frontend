import React, {useState, useEffect } from "react";
import axios from './axios';
import './App.css';

function Homepage() {
 



  return (
<>
  

<div className="homepagestuff">
<div>
<div className="floattext1">
WELCOME!
</div>

<div className="floattext2">
The Canine Shelter of Hong Kong was formed in 1999, and our mission is formed on the basis that animals should receive the best welfare from our society, that's why we formed THE CANINE SHELTER. Here, you can browse our aavilable dogs and learn the information of each animal, and in which they are up to adoption! 
</div>

<img src="indexdog.jpg"> 
</img>

</div>
</div>


</>
  );
}

export default Homepage;

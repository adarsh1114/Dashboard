import "./List.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
//import Dashbaord from "../Dashbaord";


function Car(props) {
    
    
    return <li><img src="https://pbblogassets.s3.amazonaws.com/uploads/2015/08/Audio-Waveforms-Featued-Image.jpg"></img> { props.brand }<button >Play </button></li>;
  }
  
  function RecentPlay() {
    const song = ['Lehra do| Pritam,Arijit Singh,Kausar Munir....', 'Tum Hi Ho Aashiqui2| Arijit Singh.... ', 'Jannat Ve| Darshan Raval | Nirmaan.... '];
    return (
      <>
        <h1>Recent Plays</h1>
        <ul>
          {song.map((song) => <Car brand={song} />)}
          

        </ul>
      </>
    );
  }
 export default RecentPlay;  
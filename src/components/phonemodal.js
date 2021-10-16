import React from 'react'
import {useState,useEffect} from 'react';
const axios = require('axios');

export default function PhoneModal() {
    let phoneSlug="apple_iphone_13_pro_max-11089";
    const [modal,setModal] = useState([]);
    useEffect(() => {
      axios.get(`https://api-mobilespecs.azharimm.site/v2/apple_iphone_12_pro_max-10237`)
              .then(function (response) {
                // handle success
                console.log(response.data.data);
                setModal(response.data.data);
              }
              )
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .then(function () {
                // always executed
              })
            }) 
    return (
            <div>
            <h1>Modal</h1>
            <div className="moadal" >
               <div className="card m-3">
               <div className="card-body">
                 <h5 className="card-title">{modal.phone_name}</h5>
               </div>
           </div>
           </div>
        </div>
    )
}

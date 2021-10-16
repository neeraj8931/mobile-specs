import React from 'react'
import {useState,useEffect} from 'react';
const axios = require('axios');

export default function BrandsModals() {
    let brandSlug="apple-phones-48";
    const [brandPhones, setBrandPhones] = useState([]);
    useEffect(() => {
      axios.get(`https://api-mobilespecs.azharimm.site/v2/brands/${brandSlug}`)
              .then(function (response) {
                // handle success
                console.log(response.data.data.phones);
                setBrandPhones(response.data.data.phones);
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
            const PhonesToShow = brandPhones.map((phone)=>{
                return <div className="phones" onClick={()=>{
                    
                 }}
                 >
                <div className="card m-3">
                <div className="card-body">
                  <h5 className="card-title">{phone.phone_name}</h5>
                </div>
            </div>
            </div>
              })  
    
    return (
        <div>
            <h1>phone modals</h1>
            {PhonesToShow}
        </div>
    )
}

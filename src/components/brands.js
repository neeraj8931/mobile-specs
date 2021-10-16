import React from 'react'
import {useState,useEffect} from 'react';
const axios = require('axios');


export default function Brands() {
  const [brandSlugLink, setBrandSlug] = useState({
    brandSlug:""
  });
    const[url, setUrl] = useState("https://api-mobilespecs.azharimm.site/v2/brands")
    const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios.get(url)
            .then(function (response) {
              // handle success
              console.log(typeof response.data.data);
              setPhones(response.data.data);
            }
            )
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            })
            
           
           
  }, [url]);
  const PhonesToShow = phones.map((phone)=>{
    return  <div className="brands">
    <div className="card m-3">
    <div className="card-body">
      <h5 className="card-title">{phone.brand_name}</h5>
      <p className="card-text">Number of  devices : {phone.device_count}</p>
    </div>
</div>
</div>
  })
  
    return (
    <div className="container text-center">
    <h1 className="">Phones</h1>
    <h5>total brands: {phones.length}</h5>
     {PhonesToShow}
    </div>
    )
}

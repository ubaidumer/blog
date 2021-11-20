import { Typography } from "@mui/material";
import React from "react";
import SimpleCard from "../atoms/simpleCard";
import axios from 'axios';

const CustomizedProduct = () => {

  let token = localStorage.getItem('token');
  const [products,setProducts] = React.useState([]);
  const [topRated,setTopRated] = React.useState([]);

 
  let getProducts = () =>{
    axios.get('http://localhost:5000/api/products', {headers:{'Authorization':token}})
    .then(function (response) {
      setProducts(response.data.data);
   
     var result = response.data.data.filter(function(event) {
      return  event.productCollection.name == 'Top Rated'; 
  });

  console.log(result);

      setTopRated(response.data.data.filter(product=> product.productCollection.name === 'Top Rated'))
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  React.useEffect(()=>{
    getProducts();

  },[])

 

  console.log('ogodgog',products[0]?.productCollection?.name)
  /*let array = [
    {
      type: "Premium OEM factories",
      image:
        "https://vlogmakelaarsstorage.blob.core.windows.net/test/66a44799-8e0a-43e6-a69b-fc599c2e2412.png?sv=2018-03-28&ss=b&srt=sco&sp=racwdl&st=2021-10-28T19%3A54%3A25Z&se=2021-10-28T20%3A09%3A25Z&spr=https%2Chttp&sig=suYMPNpOKeuyX4kTU485N434fVIpyJN5C3ncanPoynE%3D",
    },
    {
      type: "Premium OEM factories",
      image:
        "https://vlogmakelaarsstorage.blob.core.windows.net/test/66a44799-8e0a-43e6-a69b-fc599c2e2412.png?sv=2018-03-28&ss=b&srt=sco&sp=racwdl&st=2021-10-28T19%3A54%3A25Z&se=2021-10-28T20%3A09%3A25Z&spr=https%2Chttp&sig=suYMPNpOKeuyX4kTU485N434fVIpyJN5C3ncanPoynE%3D",
    },
    {
      type: "Premium OEM factories",
      image:
        "https://vlogmakelaarsstorage.blob.core.windows.net/test/66a44799-8e0a-43e6-a69b-fc599c2e2412.png?sv=2018-03-28&ss=b&srt=sco&sp=racwdl&st=2021-10-28T19%3A54%3A25Z&se=2021-10-28T20%3A09%3A25Z&spr=https%2Chttp&sig=suYMPNpOKeuyX4kTU485N434fVIpyJN5C3ncanPoynE%3D",
    },
  ];
  */
  return (
    <div>
        <Typography variant="h6">
        Customized products
        </Typography>
        <Typography variant="subtitle2">
        Partner with one of 60,000 experienced manufacturers with design & production capabilities and on-time delivery.
        </Typography>
   
    <div style={{display:'flex', marginTop: "20px", marginBottom: "20px" }}>
      {products.map(function (item, i) {
        return (
          <div style={{ marginTop: "10px",marginLeft:'5px' }}>
            <SimpleCard type={item?.category?.name || ''} image={`https://fyptest.blob.core.windows.net/images/${item.images[0]}`} />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default CustomizedProduct;

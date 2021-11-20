import React,{useState,useEffect} from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import SimpleCard from "../atoms/simpleCard";
import DetailCard from "../atoms/detailCard";
import axios from "axios";

const HomeListItems = () => {

  let [prod,setProd] = React.useState([]);
  let token = localStorage.getItem('token');

  let getProducts = () => {
      axios
        .get("http://localhost:5000/api/products", {
          headers: {
            Authorization:
              token,
          },
        })
        .then(function (response) {
          setProd(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };


  
  useEffect(()=>{
    getProducts();
  },[])

  console.log(prod)


  let array = [
    {
      type: "Chines Machinery Branch",
      price: 34,
      image:
        "https://assets.it22.nl/vlog-make-laars/admin/DummyHouseReviewPlaceholderImage.png",
    },
    {
      type: "Chines Machinery Branch",
      price: 34,
      image:
        "https://assets.it22.nl/vlog-make-laars/admin/DummyHouseReviewPlaceholderImage.png",
    },
    {
      type: "Chines Machinery Branch",
      price: 34,
      image:
        "https://assets.it22.nl/vlog-make-laars/admin/DummyHouseReviewPlaceholderImage.png",
    },
    {
      type: "Chines Machinery Branch",
      price: 34,
      image:
        "https://assets.it22.nl/vlog-make-laars/admin/DummyHouseReviewPlaceholderImage.png",
    },
  ];
  return (
    <Grid container>
    <Grid item md={12}>
        <br/>
    </Grid>
      <Grid item md={2} style={{ marginRight: 15 }}>
        <Typography variant="h5">Apparel</Typography>
        <br />
        <SimpleCard type="Chines Machinery branch chines" />
      </Grid>
      {prod.map(function (item, i) {
        return (
          <Grid item md={3} style={{ marginLeft: "10px" }}>
            <DetailCard
              type={item.name}
              image={`https://fyptest.blob.core.windows.net/images/${item.images[0]}`}
              price={item.price}
              desc={item.description}
              id={item._id}
             

            />
          </Grid>
        );
      })}
      <Grid item md={12}>
        <br />
      </Grid>
     {/* <Grid item md={3} style={{ marginRight: 15 }}>
        <Typography variant="h5">Packages and Printing</Typography>
        <br />
        <SimpleCard type="Chines Machinery branch chines" />
    </Grid> */}
      {/*array.map(function (item, i) {
        return (
          <Grid item md={2} style={{ marginLeft: "10px" }}>
            <DetailCard
              type={item.type}
              image={item.image}
              price={item.price}
            />
          </Grid>
        );
      })}
      <Grid item md={12}>
        <br />
      </Grid>
      <Grid item md={3} style={{ marginRight: 15 }}>
        <Typography variant="h5">Electronics</Typography>
        <br />
        <SimpleCard type="Chines Machinery branch chines" />
      </Grid>
      {array.map(function (item, i) {
        return (
          <Grid item md={2} style={{ marginLeft: "10px" }}>
            <DetailCard
              type={item.type}
              image={item.image}
              price={item.price}
            />
          </Grid>
        );
      })*/}
    </Grid>
  );
};

export default HomeListItems;

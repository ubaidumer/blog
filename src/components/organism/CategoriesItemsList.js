import { Grid, Typography } from "@mui/material";
import React from "react";
import Select from "../atoms/Select";
import DetailCard from '../atoms/detailCard'


const CategoriesItems = () => {

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
        <Typography variant="h4">Deals and Promotions</Typography>
      </Grid>
      <Grid item md={12}>
          <br/>
      </Grid>
      <Grid item md={12}>
        <Typography variant="subtitle1">
          Shop Today’s Deals, Lightning Deals, and limited-time discounts
        </Typography>
      </Grid>
      <Grid item md={9}></Grid>
      <Grid item md={3}>
          <div style={{display:'flex'}}>
        <label style={{marginRight:'20px'}}>Sort by:</label> 
        <Select />
        </div>
      </Grid>
      <Grid item md={12}>
          <br/>
          <br/>
      </Grid>
      <Grid item md={12}>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      {array.map(function (item, i) {
        return (
            <div style={{marginLeft:'20px',marginTop:'10px'}}>
            <DetailCard
              type={item.type}
              image={item.image}
              price={item.price}
            />
            </div>

        );
      })}
      </div>
      </Grid>
    </Grid>
  );
};

export default CategoriesItems;

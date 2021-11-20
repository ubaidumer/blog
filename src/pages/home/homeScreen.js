import { Button, Divider, Grid } from "@mui/material";
import React, { useState , useEffect} from "react";
import HomePageList from "../../components/molecules/HomepageOptionList";
import CustomizedProduct from "../../components/molecules/custominzedProduct";
import SideList from "../../components/molecules/sideList";
import Footer from "../../components/organism/Footer";
import MiniBar from "../../components/organism/MiniBar";
import NavBar from "../../components/organism/NavBar";
import coverImage from "../../assets/images/cover.jpg"
import HomeListItems from "../../components/organism/HomeListItems";
import ProductPage from "../ProductPage";
import axios from "axios";


const HomeScreen = () => {
  const [homeBool, setHomeBool] = useState(true);
  const [productBool, setProductBool] = useState(false);

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

  return (
   
    <Grid container>
       {homeBool && ( 
         <>
      <Grid container>
      <Grid item md={12}>
        <MiniBar />
        <NavBar />
      </Grid>

    {  /*  Categories Buttons   */}
      <Grid item md={1}></Grid>

      <Grid item md={10}>
        <HomePageList />

        <Divider />
      </Grid>

      <Grid item md={1}></Grid>

     { /* Below Image and SideList  */}

      <Grid item md={1}></Grid>

      <Grid item md={7}>
       <div >
           <img style={{width:'95%',height:'100%',paddingTop:'10px',borderRadius:'9px'}} src={coverImage} />
       </div>

      </Grid>
      <Grid item md={3}>
      <SideList style={{marginLeft:'20px'}}/>
      </Grid>

      <Grid item md={1}></Grid>

      <Grid item md={1}></Grid>
      <Grid item md={10}><Divider/></Grid>
      <Grid item md={1}></Grid>
  {    /*Customized Product Section */}

      <Grid item md={1}></Grid>

<Grid item md={5}>
 <CustomizedProduct/>
</Grid>
<Grid item md={5}>
<CustomizedProduct/>
</Grid>

<Grid item md={1}></Grid>

{/* Categories List Items */}
<Grid item md={1}></Grid>
 <Grid item md={10}>
  <HomeListItems />
 </Grid>
 <Grid item md={1}></Grid>
 </Grid>
</>
 )}
 { productBool && (
   <Grid container>
     <ProductPage/>
     </Grid>
 )}
      <Footer />
    </Grid>
     

  );
};

export default HomeScreen;

import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DeleteIcon from '@mui/icons-material/Delete';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { TextField, Button, Avatar } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Table from '@mui/material/Table';
import EditIcon from '@mui/icons-material/Edit';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from "@mui/material/Select";
import axios from "axios";
import { useSnackbar } from 'notistack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const EditProduct = (props) => {

    const [category, setCategory] = React.useState('');
    const [subCategory,setSubCategory] = React.useState('');
    const [name , setName] = React.useState('');
    const [shortDescription , setShortDescription] = React.useState('');
    const [collection, setCollection] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [description , setDescription] = React.useState('');
    const { enqueueSnackbar } = useSnackbar();
    const [stock , setStock] = React.useState('');
    const [price , setPrice] = React.useState('');
    const [open, setOpen] = React.useState(props.open);
    const [cate, setCate] = React.useState("");

    let token = localStorage.getItem('token')

    const handleChange = (event) => {
        setCate(event.target.value);
      };
    
      const handleChangeCategory = (event) => {
        setCategory(event.target.value);
      };
    
      const handleChangeName = (event) => {
        setName(event.target.value);
      };
    
      const handleChangeShortDescription = (event) => {
        setShortDescription(event.target.value);
      };
    
      const handleChangeDescription = (event) => {
        setDescription(event.target.value);
      };
    
      const handleChangeStock = (event) => {
        setStock(event.target.value);
      };
    
      const handleChangePrice = (event) => {
        setPrice(event.target.value);
      };
    
    
console.log(props.id)
    useEffect(()=>{
     console.log('re rednered',props)

     axios
     .get(`http://localhost:5000/api/products/${props.id}`, {
       headers: {
         Authorization:token
       },
     })
     .then(function (response) {
       let row = response.data.data;
       setName(row.name);
       setShortDescription(row.shortDescription);
       setDescription(row.description);
       setPrice(row.price);
       setStock(row.stock);
       setCategory(row.category.name);
       setCate(row.productCollection.name);
       console.log('asfaasfsafsafas',row.productCollection.name)
     })
     .catch(function (error) {
       console.log(error);
     });


    },[props.open])


  /*  const handleClickOpen = (row) => {
        setOpen(true);
        setName(row.name);
        setShortDescription(row.shortDescription);
        setDescription(row.description);
        setPrice(row.price);
        setStock(row.stock);
        setCategory(row.category.name);
        setCollection(row.productCollection.name);
    
      };
    */

      const handleClose = () => {
        props.setOpen(false);
      };
    
      let handleSubmit = (event) =>{
        console.log('submitted');
        let object = {
            name: name,
            chineseName: 'trash',
            shortDescription: shortDescription,
            description: description,
            category: category,
            productCollection: cate,
            price: price,
            stock: stock,
            subCategory:'123123213131',
            cover: 'Image cover',
            specs: ['empty','empty'],
            images: './images'
  
   
        }
        console.log(object);
  
        axios
        .patch(`http://localhost:5000/api/products/${props.id}`, object,  {
          headers: {
            'Authorization':token,
            'Content-Type': 'application/json',
          },
        })
        .then(function (response) {
          enqueueSnackbar('Product updated successfully!', {
            variant: 'success',
            autoHideDuration: 2000
          });
          setTimeout(function() {
            window.location.href = '/admin';
          }, 2000);
        })
        .catch(function (error) {
          console.log(error);
        });
  
    }

    




    return (
<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography paragraph>Edit Product</Typography>
        <br />
        <div style={{ display: "flex" }}>
          <FormControl fullWidth>
            <InputLabel id="Collection">{cate}</InputLabel>
            <Select
              labelId="Collection"
              id="Collection"
              value={cate}
              label="Collection"
              onChange={handleChange}
              key={Math.random() * (1000 - 9 + 1)}
            >
              {props.collection.map(function (item, i) {
                return (
                  <MenuItem key={i} value={item._id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        <div style={{ display: "flex", marginTop: 20 }}>
      
        <FormControl fullWidth >
            <InputLabel id="Category">{category}</InputLabel>
            <Select
              labelId="Category"
              id="Category"
              value={category}
              label="Category"
              onChange={handleChangeCategory}
            >
              {props.categories.map(function (item, i) {
                return (
                  <MenuItem key={i} value={item._id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>


        { /* <FormControl fullWidth>
            <InputLabel id="subCategory">Sub Category</InputLabel>
            <Select
              labelId="subCategory"
              id="subCategory"
              value={cate}
              label="Sub Category"
              onChange={handleChange}
            >
              {collection.map(function (item, i) {
                return (
                  <MenuItem key={i} value={item._id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
            </FormControl> */}


        </div>
        
        <form onSubmit={handleSubmit}>

        <div style={{ display: "flex", marginTop: 20 }}>
          <TextField
            fullWidth
            name="Name"
            id="Name"
            label="Product Name"
            value={name}
            onChange={handleChangeName}
            style={{ marginRight: "10px" }}
          />

          <TextField
            fullWidth
            name="shortDescription"
            id="shortDescription"
            label="Product Short Description"
            value={shortDescription}
            onChange={handleChangeShortDescription}
          />
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <TextField
            fullWidth
            name="Description"
            id="Description"
            label="Product Description"
            value={description}
            onChange={handleChangeDescription}
          />
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <TextField
            fullWidth
            name="Price"
            id="Price"
            label="Product Price ($)"
            style={{ marginRight: "10px" }}
            value={price}
            onChange={handleChangePrice}
          />

          <TextField
            fullWidth
            name="Collection"
            id="Collection"
            label="Product Stock"
            value={stock}
            onChange={handleChangeStock}
          />
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <div> IMG </div>

          <div style={{ marginLeft: 600 }}> COVER </div>
        </div>

        <div style={{marginTop:30}}>
        <Button onClick={handleSubmit}> Edit PRODUCT </Button>
        </div>

        </form>
     
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>

        </DialogActions>
      </Dialog>

      );
}
 
export default EditProduct;
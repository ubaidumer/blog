import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import MiniBar from '../components/organism/MiniBar';
import NavBar from '../components/organism/NavBar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Table from '@mui/material/Table';
import EditIcon from '@mui/icons-material/Edit';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import cover from '../assets/images/cover.jpg';
import axios from "axios";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProductPage = () => {

    const [product,setProduct] = useState();
    const [itemNo,setItemNo] = useState(1);
    
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    let token = localStorage.getItem('token');
    let adminToken = localStorage.getItem('adminToken');

    const plusItem = () =>{
      if(product?.stock > itemNo)
      setItemNo(itemNo+1);
    }

    const minusItem = () =>{
      if(itemNo != 0)
      {
        setItemNo(itemNo-1);
      }
     
    }

    let [array,setArray] = useState([])

    const [open, setOpen] = React.useState(false);
    const [openOrder, setOpenOrder] = React.useState(false);

    const handleClickOpen = (product) => {

      if(array.find(e=>e.name == product.name))
      {
        console.log('Duplicate Item')
      }
      else
      {
        setArray([...array,product])
      }
      
      setOpen(true);
      localStorage.setItem('cart',product)
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleOrder = () => {
      setOpen(false);
      setOpenOrder(true);
    };

      
    const handleCloseOrder = () => {
      setOpenOrder(false);
    };
 
    const handleSuccessOrder = () => {
      
      setOpenOrder(false);
    };

    let proceedPayment = () =>{
      let arr = {"items":[
        {
          productId: id,
          quantity: itemNo,
        }
      ]}
      axios.post(`http://localhost:5000/api/orders`,arr, {headers:{'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTkxNzhiMzYzM2VmMDNlODQ5NTU2ZDEiLCJpYXQiOjE2MzY5MjM1NzF9.6CCemSxOxazsZzp1PYw0ykTVLL8iRXkjo-J6dtRv6vg'}})
      .then(function (response) {
        console.log('payment success');
  
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    let getProduct = () =>{
        axios.get(`http://localhost:5000/api/products/${id}`, {headers:{'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThlNDE2Y2QxZTBhNTQyMWMzZTE0NzUiLCJpYXQiOjE2MzY3MTI4MTJ9.5u4vaI7IbzJmoXaGgheFN3eXd9FLTPidEf79i4UDHBk'}})
        .then(function (response) {
          setProduct(response.data.data);
    
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }
    
    React.useEffect(() => {
     getProduct();
    }, [])

console.log(product)
    return ( 
        <Grid container>
              <Grid item md={12}>
             <MiniBar/>
             <NavBar/>
         </Grid>
         <Grid item md={12}>
            <br/>
            <Grid container spacing={3}>
                <Grid item md={1}></Grid>
                <Grid item md={5}>
                    <div style={{width:'100%'}}>
                    <img style={{height:'300px',width:'100%'}} src={`https://fyptest.blob.core.windows.net/images/${product?.images[0]}`} />
                    <Button>Back to Home</Button>
                    </div>
                </Grid>
                <Grid item md={5}>
                    <div style={{marginLeft:'20px'}}>
                    <div>
                    <Typography>
                       Name: {product?.name}
                    </Typography>
                    <br/>
                    <Typography>
                       Category: {product?.category.name}
                    </Typography>
                    <br/>
                    <Typography>
                      Description: {product?.description}
                    </Typography>
                    <br/>
                    <Typography>
                       Price: {product?.price}
                    </Typography>
                    <br/>
                    <Typography>
                       Stock: {product?.stock}
                    </Typography>
                    </div>
                    <br/>
                    <br/>
                    
                    <Button disabled={product?.stock === 0 || product?.stock < 0} onClick={()=>handleClickOpen(product)} variant="outlined"> ADD TO CART </Button>

                    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Shopping Cart"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="center">Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        {array.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               {row.name} 
              </TableCell>
              <TableCell align="right">
              {row.price} 
              </TableCell>
              <TableCell align="right">
              {row.stock} 
              </TableCell>
              <TableCell align="center"><Button onClick={()=>plusItem(row?.stock)}>+</Button> &nbsp; {itemNo} &nbsp; <Button onClick={()=>minusItem(row?.stock)}> - </Button>
              </TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleOrder}>Agree</Button>
        </DialogActions>
      </Dialog>



      <Dialog
        open={openOrder}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseOrder}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Payment Method"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
         <Button onClick={proceedPayment}>CASH</Button>
         <br/>
         <Button>CARD</Button>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOrder}>Disagree</Button>
          <Button onClick={handleCloseOrder}>Agree</Button>
        </DialogActions>
      </Dialog>
                    </div>
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
         </Grid>
        </Grid>
     );
}
 
export default ProductPage;
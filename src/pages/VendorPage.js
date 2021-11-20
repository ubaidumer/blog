import * as React from "react";

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
import { useSnackbar } from 'notistack';
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
import EditProduct from "../components/organism/EditProduct";
import FilesDropzone from "../components/organism/filesDropZone";
import FileUpload from "../components/organism/fileUpload";
import jwtDecode from "jwt-decode";

const drawerWidth = 240;

function VendorPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [collection, setCollection] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [users,setUsers] = React.useState([]);
  const [subCategories, setSubCategories] = React.useState([]);

  const [category, setCategory] = React.useState('');
  const [subCategory,setSubCategory] = React.useState('');
  const [name , setName] = React.useState('');
  const [shortDescription , setShortDescription] = React.useState('');
  const [description , setDescription] = React.useState('');
  const [stock , setStock] = React.useState('');
  const [price , setPrice] = React.useState('');
  const [productBoolean,setProductBoolean] = React.useState(true);
  const [listProductBoolean, setListProductBoolean] = React.useState(false);
  const [listCategoriesBoolean, setListCategoriesBoolean] = React.useState(false);
  const [listUserBoolean, setListUserBoolean] = React.useState(false);
  const [newsBoolean, setNewsBoolean] = React.useState(false);
  const [newsBooleanList, setNewsBooleanList] = React.useState(false);
  const [ordersBoolean, setOrdersBoolean] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [editProduct,setEditProduct] = React.useState([]);
  const [image,setImage] = React.useState();
  const [img, setImg] = React.useState();
  const [listNews,setListNews] = React.useState([]);
  const [news, setNews] = React.useState('');
  const [newsDescription,setNewsDescription] = React.useState();
  const [newsCover,setNewsCover] = React.useState();
  const { enqueueSnackbar } = useSnackbar();
  const [listOrders,setListOrders] = React.useState();


  let handleChangeNews = (e) =>{
    setNews(e.target.value)
  }

  let handleChangeNewsDescription = (e) =>{
    setNewsDescription(e.target.value)
  }



  let uploadState = (e) => {
    setImg(e)
  }

  let uploadImage = (e) => {
    console.log(e.target.files);
  }


  let vendorToken = localStorage.getItem('vendorToken');
  let decode = jwtDecode(vendorToken);
  console.log(decode);
  let handleClickOpen = () =>{
      setOpen(true);
  }






  let handleProduct = () => {
      setProductBoolean(true);
      setListProductBoolean(false);
      setListCategoriesBoolean(false);
      setListUserBoolean(false);
      setNewsBoolean(false);
      setOrdersBoolean(false)
      setNewsBooleanList(false);
  }

  let handleListProduct = () => {
    setProductBoolean(false);
    setListProductBoolean(true);
    setListCategoriesBoolean(false);
    setListUserBoolean(false);
    setNewsBoolean(false);
    setNewsBooleanList(false);
    setOrdersBoolean(false)
}


let handleListCategories = () => {
    setProductBoolean(false);
    setListProductBoolean(false);
    setListCategoriesBoolean(true);
    setListUserBoolean(false);
    setNewsBoolean(false);
    setNewsBooleanList(false);
    setOrdersBoolean(false)
}


let handleListUser = () => {
    setProductBoolean(false);
    setListProductBoolean(false);
    setListCategoriesBoolean(false);
    setListUserBoolean(true);
    setNewsBoolean(false);
    setOrdersBoolean(false)
    setNewsBooleanList(false);
}

let handleNews = () => {
    setProductBoolean(false);
    setListProductBoolean(false);
    setListCategoriesBoolean(false);
    setListUserBoolean(false);
    setNewsBoolean(true);
    setOrdersBoolean(false)
    setNewsBooleanList(false);
}

let handleNewsList = () => {
  setProductBoolean(false);
  setListProductBoolean(false);
  setListCategoriesBoolean(false);
  setListUserBoolean(false);
  setNewsBoolean(false);
  setOrdersBoolean(false)
  setNewsBooleanList(true);
}


let handleOrders = () => {
    setProductBoolean(false);
    setListProductBoolean(false);
    setListCategoriesBoolean(false);
    setListUserBoolean(false);
    setNewsBoolean(false);
    setOrdersBoolean(true)
    setNewsBooleanList(false);
}

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [cate, setCate] = React.useState("");

  const handleChange = (event) => {
    setCate(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeSubCategory = (event) => {
    setSubCategory(event.target.value);
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

  let deleteProduct = (id) => {
    axios
    .delete(`http://localhost:5000/api/products/${id}`,  {
      headers: {
        'Authorization': vendorToken,
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      enqueueSnackbar('Product deleted successfully!', {
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

  let deleteUser = (id) => {
    axios
    .delete(`http://localhost:5000/api/users/${id}`,  {
      headers: {
        'Authorization': vendorToken,
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      enqueueSnackbar('User deleted successfully!', {
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
  

  let deleteCategory = (id) => {
    axios
    .delete(`http://localhost:5000/api/categories/${id}`,  {
      headers: {
        'Authorization': vendorToken,
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      enqueueSnackbar('Category deleted successfully!', {
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
          subCategory:subCategory,
          cover: 'Image cover',
          specs: ['empty','empty'],
          images: img,
          vendor: decode._id 


      }
      console.log(object);

      axios
      .post("http://localhost:5000/api/products", object,  {
        headers: {
          'Authorization': vendorToken,
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        enqueueSnackbar('Product added successfully!', {
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
      event.preventDefault();

  }


  let getNews = () => {
    axios
      .get("http://localhost:5000/api/news", {
        headers: {
          Authorization:
            vendorToken,
        },
      })
      .then(function (response) {
        setListNews(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  let getOrders = () => {
    axios
      .get("http://localhost:5000/api/orders", {
        headers: {
          Authorization:
            vendorToken,
        },
      })
      .then(function (response) {
        setListOrders(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  console.log('lsit all orders',listOrders)

  let getUsers = () => {
    axios
      .get("http://localhost:5000/api/users", {
        headers: {
          Authorization:
            vendorToken,
        },
      })
      .then(function (response) {
        setUsers(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  let getCollections = () => {
    axios
      .get("http://localhost:5000/api/collections", {
        headers: {
          Authorization:
          vendorToken,
        },
      })
      .then(function (response) {
        setCollection(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

console.log(collection);
  let getCategories = () => {
    axios
      .get("http://localhost:5000/api/categories", {
        headers: {
          Authorization:
            vendorToken
        },
      })
      .then(function (response) {
        setCategories(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let getProducts = () => {
    axios
      .get("http://localhost:5000/api/products", {
        headers: {
          Authorization:
            vendorToken,
        },
      })
      .then(function (response) {
        setProducts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  let getSubCategories = () => {
    axios
      .get("http://localhost:5000/api/subcategories", {
        headers: {
          Authorization:
            vendorToken,
        },
      })
      .then(function (response) {
        setSubCategories(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getCollections();
    getCategories();
    getSubCategories();
    getProducts();
    getUsers();
    getNews();
    getOrders();
  }, []);



  let submitNews =()=>{
    let obj ={
      title: news,
      description: newsDescription,
      cover: newsCover,
      author: "Anonymous"
    }
    axios
    .post("http://localhost:5000/api/news",obj, {
      headers: {
        Authorization:
          vendorToken,
      },
    })
    .then(function (response) {
      enqueueSnackbar('News added successfully!', {
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

 console.log(editProduct)
  const drawer = (
    <div>
    <div style={{marginLeft:50,marginTop:50}}>
    <Avatar style={{width:100, height:100}} />
    </div>
      <Toolbar />
      <Divider />
      <List onClick={handleProduct} >
          <ListItem >
            <ListItemIcon>
             Add Products
            </ListItemIcon>
            <ListItemText  />
          </ListItem>
      </List>
          <List onClick={handleListProduct}>
          <ListItem  >
            <ListItemIcon>
             List Products
            </ListItemIcon>
            <ListItemText  />
          </ListItem>
      </List>
          <List onClick={handleListCategories}>
          <ListItem  >
            <ListItemIcon>
             List Categories
            </ListItemIcon>
            <ListItemText  />
          </ListItem>
      </List>
          <List onClick={handleListUser}>
          <ListItem  >
            <ListItemIcon>
             List Users
            </ListItemIcon>
            <ListItemText />
          </ListItem>
      </List>
      <Divider />
      <List onClick={handleNews}>
          <ListItem>
            <ListItemIcon>
              Add News
            </ListItemIcon>
            <ListItemText  />
          </ListItem>
      
      </List>
      <List onClick={handleNewsList}>
          <ListItem>
            <ListItemIcon>
              List News
            </ListItemIcon>
            <ListItemText  />
          </ListItem>
      
      </List>
      <List onClick={handleOrders}>
          <ListItem>
            <ListItemIcon>
              List Orders
            </ListItemIcon>
            <ListItemText  />
          </ListItem>
      
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Vendor Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {
        productBoolean && (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

  
        <Typography paragraph>Add a Product</Typography>
        <br />
        <div style={{ display: "flex" }}>
          <FormControl fullWidth>
            <InputLabel id="Collection">Collection</InputLabel>
            <Select
              labelId="Collection"
              id="Collection"
              value={cate}
              label="Collection"
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
          </FormControl>
        </div>

        <div style={{ display: "flex", marginTop: 20 }}>
      
        <FormControl fullWidth >
            <InputLabel id="Category">Category</InputLabel>
            <Select
              labelId="Category"
              id="Category"
              value={category}
              label="Category"
              onChange={handleChangeCategory}
            >
              {categories.map(function (item, i) {
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

<FormControl fullWidth >
            <InputLabel id="subCategory">Subcategories</InputLabel>
            <Select
              labelId="subCategory"
              id="subCategory"
              value={subCategory}
              label="subCategory"
              onChange={handleChangeSubCategory}
            >
              {subCategories.map(function (item, i) {
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
    
                        <div>
                          <FileUpload
                            onChange={uploadImage}
                            file={image}
                            up={img}
                            setUp={setImg}
                            temp={image}
                           // success={success}
                          />
                     </div>

        
        </div>
      

        <div style={{marginTop:30}}>
        <Button type="submit"> ADD PRODUCT </Button>
        </div>

        </form>
     
      </Box>
           )}
    
    { listProductBoolean   && (
          <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><EditIcon  onClick={()=>handleClickOpen()}/> 
              {open ? <EditProduct id={row._id} open={open} collection={collection} categories={categories} setOpen={setOpen} /> : null }
              </TableCell>
              <TableCell align="right"><DeleteIcon onClick={()=>deleteProduct(row._id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </Box>
    )}

{ listCategoriesBoolean   && (
     <Box
     component="main"
     sx={{
       flexGrow: 1,
       p: 3,
       width: { sm: `calc(100% - ${drawerWidth}px)` },
     }}
   >
     <Toolbar />
     <TableContainer component={Paper}>
 <Table sx={{ minWidth: 650 }} aria-label="simple table">
   <TableHead>
     <TableRow>
       <TableCell>Category Name</TableCell>
       <TableCell align="right">Edit</TableCell>
       <TableCell align="right">Delete</TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
     {categories.map((row) => (
       <TableRow
         key={row.name}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       >
         <TableCell component="th" scope="row">
           {row.name}
         </TableCell>
         <TableCell align="right"><EditIcon /> </TableCell>
         <TableCell align="right"><DeleteIcon onClick={()=>deleteCategory(row._id)}/></TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>
    </Box>
        )}

{ listUserBoolean   && (
     <Box
     component="main"
     sx={{
       flexGrow: 1,
       p: 3,
       width: { sm: `calc(100% - ${drawerWidth}px)` },
     }}
   >
     <Toolbar />
     <TableContainer component={Paper}>
 <Table sx={{ minWidth: 650 }} aria-label="simple table">
   <TableHead>
     <TableRow>
       <TableCell>User Name</TableCell>
       <TableCell align="right">Delete</TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
     {users.map((row) => (
       <TableRow
         key={row.name}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       >
         <TableCell component="th" scope="row">
           {row.name}
         </TableCell>
         <TableCell align="right"><DeleteIcon onClick={()=>deleteUser(row._id)}/></TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>
    </Box>
        )}

{ listCategoriesBoolean   && (
     <Box
     component="main"
     sx={{
       flexGrow: 1,
       p: 3,
       width: { sm: `calc(100% - ${drawerWidth}px)` },
     }}
   >
     <Toolbar />
     <TableContainer component={Paper}>
 <Table sx={{ minWidth: 650 }} aria-label="simple table">
   <TableHead>
     <TableRow>
       <TableCell>Category Name</TableCell>
       <TableCell align="right">Edit</TableCell>
       <TableCell align="right">Delete</TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
     {categories.map((row) => (
       <TableRow
         key={row.name}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       >
         <TableCell component="th" scope="row">
           {row.name}
         </TableCell>
         <TableCell align="right"><EditIcon /> </TableCell>
         <TableCell align="right"><DeleteIcon onClick={()=>deleteCategory(row._id)}/></TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>
    </Box>
        )}

{ newsBoolean   && (
     <Box
     component="main"
     sx={{
       flexGrow: 1,
       p: 3,
       width: { sm: `calc(100% - ${drawerWidth}px)` },
     }}
   >
     <Toolbar />
     <TableContainer component={Paper}>
       <div style={{margin:20}}>
     <div style={{ display: "flex", marginTop: 20 }}>
          <TextField
            fullWidth
            name="News"
            id="News"
            label="News Title"
            value={news}
            onChange={handleChangeNews}
            
          />
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
        <TextField
            fullWidth
            name="newsDescription"
            id="newsDescription"
            label="News Description"
            value={newsDescription}
            onChange={handleChangeNewsDescription}
          />
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
    
    <div>
      <FileUpload
        up={img}
        setUp={setNewsCover}
        temp={newsCover}
       // success={success}
      />
 </div>
</div>
<Button variant="outlined" onClick={submitNews}>Add News</Button>
</div>
</TableContainer>
    </Box>
        )}

{ newsBooleanList   && (
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>News Title</TableCell>
        <TableCell align="right">Delete</TableCell>
        
      </TableRow>
    </TableHead>
    <TableBody>
      {listNews.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.title}
          </TableCell>
          <TableCell align="right"><DeleteIcon onClick={()=>deleteUser(row._id)}/></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
 </TableContainer>
     </Box>
         )}

{ ordersBoolean   && (
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      {console.log(listOrders)}
      <Toolbar />
      <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
      <TableCell align="left">UserID</TableCell>
        <TableCell align="left">User Name</TableCell>
        
        <TableCell align="left">OrderID</TableCell>

        
        <TableCell>Bill</TableCell>
     
        
      </TableRow>
    </TableHead>
    <TableBody>
      {listOrders.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.user._id}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.user.name}
          </TableCell>
          <TableCell component="th" scope="row">
            {row._id}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.amount}
          </TableCell>
    
        </TableRow>
      ))}
    </TableBody>
  </Table>
 </TableContainer>
     </Box>
         )}

 
 { listCategoriesBoolean   && (
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Category Name</TableCell>
        <TableCell align="right">Edit</TableCell>
        <TableCell align="right">Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {categories.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right"><EditIcon /> </TableCell>
          <TableCell align="right"><DeleteIcon onClick={()=>deleteCategory(row._id)}/></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
 </TableContainer>
     </Box>
     
        )}


{ listUserBoolean   && (
     <Box
     component="main"
     sx={{
       flexGrow: 1,
       p: 3,
       width: { sm: `calc(100% - ${drawerWidth}px)` },
     }}
   >
     <Toolbar />
     <TableContainer component={Paper}>
 <Table sx={{ minWidth: 650 }} aria-label="simple table">
   <TableHead>
     <TableRow>
       <TableCell>User Name</TableCell>
       <TableCell align="right">Delete</TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
     {users.map((row) => (
       <TableRow
         key={row.name}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       >
         <TableCell component="th" scope="row">
           {row.name}
         </TableCell>
         <TableCell align="right"><DeleteIcon onClick={()=>deleteUser(row._id)}/></TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>
    </Box>
        )}



    
    </Box>
  );
}

VendorPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default VendorPage;

import React from 'react';
import { Button, Link } from "@mui/material";
import DropDown from '../atoms/DropDown';

const HomePageList = () => {
    let list = [
        {title:'Categories'},
        {title:'Ready to ship'},
        {title:'Wishlist'},
        {title:'Services & Help'},
        {title:'Blogs'},
    ]
    return ( 
        <ul style={{display:'flex',listStyle:'none'}}>
        <li>
          <DropDown title={list[0].title} />
        </li>
        <li>
           <a style={{textDecoration:'none'}} href="/shipping"> <Button>Ready to ship</Button> </a>
        </li>
        <li>
            <Button>Wishlist</Button>
        </li>
        <li>
            <Button>Services & Help</Button>
        </li>
        <li>
            <Button>Blogs</Button>
        </li>
  
    </ul>
     );
}
 
export default HomePageList;
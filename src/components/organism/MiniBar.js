import { Grid, Link, Typography } from '@mui/material';
import React from 'react';


const MiniBar = () => {
    return ( 
      <Grid container>
          <Grid item md={12}>
              <div style={{display:'flex'}}>
              <Typography style={{marginLeft:'30px'}}>
                  Hi !
              </Typography>
              <Link style={{marginLeft:'30px'}}>
              Sign In/ Sign Up
              </Link>
              <Link style={{marginLeft:'30px'}}>
              Help & Contact
              </Link>
              <div style={{position:'absolute',right:50}}>
              <Link style={{marginLeft:'30px'}}>
              Ship To
              </Link>
              <Link style={{marginLeft:'30px'}}>
              My Account
              </Link>
              </div>
              </div>
          </Grid>
      </Grid>
     );
}
 
export default MiniBar;
import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import logo from "../../images/logo.png";
import kredey from "../../images/kredey.png";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className="h-14">
      <AppBar position="static" sx={{backgroundColor: "white" , color: "black"}}>
        <Toolbar>
          
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
           <img src={kredey} alt="" style={{height: "25px"}}/>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <img src={logo} alt="KREDEY" style={{height: "50px"}}/>
          </Typography>
          <Button  color="inherit" style={{borderRadius: "30px"}} sx={{border:{sm:1}}}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;
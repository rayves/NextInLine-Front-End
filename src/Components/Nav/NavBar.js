import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect } from 'react';
import Tooltip from "@mui/material/Tooltip";
import { useGlobalState } from "../../utils/stateContext"
import { useNavigate } from "react-router-dom";




import SortIcon from '@mui/icons-material/Sort';
const settings = ['Account','logout'];



function Appbar() {
  const {store, dispatch} = useGlobalState()
  const {loggedInUser} = store
  const pages = ["Products", "Pricing", "Blog"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }
console.log(loggedInUser)
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  const handleCloseUserMenu = () => {  
    setAnchorElUser(null);  
  }
  const logout = (e) => {
    e.preventDefault()
    sessionStorage.clear()
    dispatch({
        type: "setLoggedInUser",
        data: null 
    })
    dispatch({
        type: "setToken",
        data: null 
    })
    navigate('/')
    
}
  return (  
    <AppBar position="static">  
    <Container maxWidth="xl">  
      <Toolbar >  

        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            fontWeight: 400,
            letterSpacing: ".3rem",
            textDecoration: "none",
            mr: 2,
            display: { xs: "none", md: "flex" }
          }}
        >
          NEXT IN LINE
        </Typography>


        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            fontWeight: 500,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1
          }}
        >
          NEXT IN LINE
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white",fontWeight:'500', display: "block" }}
              href={`/${page}`}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <SortIcon
                sx={{ color: "white" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              />{" "}
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}

          >
              <MenuItem  onClick={handleCloseUserMenu} disableGutters='true' divider='true' >
              <Button 
              onClick={handleCloseNavMenu}
              sx={{ width:'100px', color: "black",fontWeight:'500', display: "block" }}
              href={loggedInUser?"/dashboard":"/login"}>
                {loggedInUser?"Dashboard":"Account"}
                 </Button>    
             </MenuItem>

             
              {loggedInUser&&<MenuItem  onClick={handleCloseUserMenu} disableGutters='true' divider='true' >
              <Button onClick={logout}sx={{ width:'100px', color: "black",fontWeight:'500', display: "block" }}>logout</Button>    
              </MenuItem> }
            
             
              
              
               

             





             
       
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Appbar


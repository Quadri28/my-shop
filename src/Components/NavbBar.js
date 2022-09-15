import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { BsCartFill } from "react-icons/bs";
import { Link } from "@mui/material";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const ResponsiveAppBar = (props) => {
  const location = useLocation()
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: "#c1ade4" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            LACOLLECTION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  href="/"
                  textAlign="center"
                  component="a"
                  sx={{ color: "#c1ade4", textDecoration: "none" }}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  href="/products"
                  textAlign="center"
                  component="a"
                  sx={{ color: "#c1ade4", textDecoration: "none" }}
                >
                  Products
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  href="#"
                  textAlign="center"
                  component="a"
                  sx={{ color: "#c1ade4", textDecoration: "none" }}
                >
                  About
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  href="#"
                  textAlign="center"
                  component="a"
                  sx={{ color: "#c1ade4", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  href="#"
                  textAlign="center"
                  component="a"
                  sx={{ color: "#c1ade4", textDecoration: "none" }}
                >
                  Login
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 300,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            LACOLLECTION
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="/"
                textAlign="center"
                component="a"
                variant="p"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="/products"
                textAlign="center"
                component="a"
                variant="p"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                Products
              </Link>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="#"
                textAlign="center"
                component="a"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                About
              </Link>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="#"
                textAlign="center"
                component="a"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                Contact
              </Link>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="#"
                textAlign="center"
                component="a"
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                Login
              </Link>
            </MenuItem>
          </Box>

          <Box>
            {(location.pathname ==='/cart') ?  '' :
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                border: "solid 1px #ddd",
                fontSize: "15px",
                textTransform: "capitalize",
              }}
              href="/cart"
            >
              <BsCartFill
                style={{ marginRight: "3px", fontSize: "15px" }}

              />
              Cart {props.productDetails.length}
            </Button> 
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
const mapStateToProps=(state)=>{
  return{
    productDetails: state.cart.cartItems
  }
}
export default connect(mapStateToProps)(ResponsiveAppBar);

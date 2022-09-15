import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { addToCart, removeItem } from "../Redux/Cart/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = (props) => {
  const dispatch = useDispatch();
  return (
    <Container margin="2rem 0">
      <Typography textAlign="center" marginTop="2rem">
        No items in your cart yet, <Link to="/products">add item </Link>
      </Typography>
      {props.cartItems.map((item) => {
        return (
          <Grid
            container
            display="flex"
            columns={{ md: 12, sm: 8, xs: 2 }}
            marginTop="2rem"
            sx={{ backgroundColor: "#c1ade4" }}
            key={item.id}
          >
            <Grid
              item
              xs={5}
              display="flex"
              justifyContent="center"
              paddingY={3}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "#ddd",
                }}
              />
            </Grid>
            <Grid item xs={6} sx={{ paddingX: "2rem", color: "#fff" }}>
              <Box>
                <Typography
                  component="h5"
                  variant="h5"
                  margin="1rem 0"
                  sx={{ width: { lg: "60%", sm: "80" } }}
                >
                  {item.title}
                </Typography>
                {item.cartQuantity > 0 ? (
                  <Typography mb="1rem">
                    {item.cartQuantity} * ${item.price} = $
                    {item.cartQuantity * item.price}
                  </Typography>
                ) : (
                  <Typography mb="1rem"> add the item?</Typography>
                )}
              </Box>
              <Box display="flex" gap={2} flexDirection="column">
                <Box display="flex" gap={2}>
                  <button
                    style={{
                      fontSize: "20px",
                      width: "40px",
                      height: "30px",
                      marginBottom: "2rem",
                    }}
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                  <button
                    style={{
                      fontSize: "20px",
                      width: "40px",
                      height: "30px",
                      marginBottom: "2rem",
                    }}
                    onClick={() => dispatch(removeItem(item))}
                  >
                    -
                  </button>
                </Box>
                <Box>
                  {item.cartQuantity > 0 ? (
                    <Link
                      to="/check-out"
                      style={{
                        backgroundColor: "#ddd",
                        width: "100px",
                        height: "30px",
                        color: "#000",
                        borderRadius: "5px",
                        border: "solid 1px #fff",
                        padding: "10px",
                      }}
                    >
                      Check Out
                    </Link>
                  ) : (
                    ""
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CartPage);

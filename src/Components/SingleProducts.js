import { Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { addToCart} from "../Redux/Cart/CartSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";


const SingleProducts = () => {
  const dispatch = useDispatch()
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${name}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [name,]);

  const Loading = () => {
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</h2>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <Grid
          container
          direction="row"
          columns={{ xs: 2, sm: 8, md: 12 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            paddingX="1em"
            mt={2}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "330px", height: "330px" }}
            />
          </Grid>
          <Grid item xs={6} paddingX="1em">
            <Typography
              variant="h4"
              component="h4"
              textTransform="upperCase"
              marginTop="3rem"
              fontSize="20px"
              color="gray"
              marginBottom="1.5rem"
            >
              {product.category}
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: { lg: "40px", xs: "20px" },
                fontWeight: "bold",
                lineHeight: { xs: "30px", lg: "50px" },
              }}
              marginBottom="10px"
            >
              {product.title}
            </Typography>
            <Typography variant="p">
              Rating {product.rating && product.rating.rate}
              <AiFillStar style={{ fontSize: "13px" }} />
            </Typography>
            <Typography
              margin="1rem 0"
              component="h3"
              variant="h3"
              fontWeight="bold"
              fontSize="30px"
            >
              ${product.price}
            </Typography>
            <Typography
              sx={{
                width: { lg: "80%", xs: "100%" },
                fontSize: { lg: "20px", xs: "15px" },
              }}
            >
              {product.description}
            </Typography>
            <Grid display="flex" margin="2rem 0" item gap={2}>
              <Button
                padding="10px"
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  paddingX: "10px",
                  color: "#c1ade4",
                }}
                onClick={() => dispatch (addToCart(product))}
              >
                Add to cart
              </Button>
              <NavLink
                to="/cart"
                style={{
                  textTransform: "capitalize",
                  textDecoration: "none",
                  color: "white",
                  borderRadius: "5px",
                  padding: "10px",
                  backgroundColor: "#c1ade4",
                }}
              >
                go to cart
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};




export default SingleProducts;

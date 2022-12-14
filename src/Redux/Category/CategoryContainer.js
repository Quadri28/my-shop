import { Grid, Typography, Container, Box, Button, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryContainer = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [componentMounted, setComponentMounted] = useState(true);
  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log('called')
      }
      return () => {
        setComponentMounted(!componentMounted);
      };
    };
    fetchCategory();
  },[componentMounted]);

  const filterProduct = (data) => {
    const updatedList = filter.filter((x) => x.category === data);
    setFilter(updatedList);
  };

  const Loading = () => {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  };
  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom={true}
        sx={{
          textAlign: "center",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        Latest products
      </Typography>
      <hr style={{ marginBottom: "3rem", color: "gray" }} />
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        marginBottom='2rem'
        flexDirection={{lg: 'row', sm:'column'}}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#c1ade4", textTransform: "capitalize", margin:'5px' }}
          onClick={() => setFilter(data)}
        >
          All
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#c1ade4", textTransform: "capitalize", margin:'5px' }}
          onClick={() => filterProduct("men's clothing")}
        >
          men's clothing
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#c1ade4", textTransform: "capitalize", margin:'5px' }}
          onClick={() => filterProduct("women's clothing")}
        >
          Women's clothing
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#c1ade4", textTransform: "capitalize", margin:'5px' }}
          onClick={() => filterProduct("jewelery")}
        >
          jewelery
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#c1ade4", textTransform: "capitalize", margin:'5px' }}
          onClick={() => filterProduct("electronics")}
        >
          electronics
        </Button>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        marginBottom="25px"
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {filter.map((categories) => {
          return (
            <Grid
              item
              key={categories.id}
              xs={2}
              justifyContent="center"
              marginY={2}
              marginX={3}
              minheight="300px"
              paddingX=".5rem"
              paddingY='.8rem'
            >
              <Card elevation={3}    
              >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={categories.image}
                  alt={categories.title}
                  style={{
                    maxWidth: "150px",
                    height: "180px",
                    textAlign: "center",
                    marginTop:'20px'
                  }}
                />
              </Box>

              <Typography
                variant="h6"
                component="p"
                textAlign="center"
                gutterBottom={true}
                fontSize="15px"
                marginY={2}
                color='#c1ade4'
              >
                {categories.title.substring(0, 15)}...
              </Typography>

              <Typography margin="1rem 0 0" textAlign="center" color='#c1ade4'>
                $ {categories.price}
              </Typography>
              <Box
                marginX="auto"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <NavLink to={`/category/${categories.id}`}>
                  <Button variant="outlined" sx={{ color: "#c1ade4", marginBottom:'1rem', borderColor:'#c1ade4' }}>
                    Buy now
                  </Button>
                </NavLink>
              </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CategoryContainer;

import * as React from "react";
import { Typography, Grid,  } from "@mui/material";
import Hero from "../assets/me.png";
import CategoryContainer from "../Redux/Category/CategoryContainer";


 function Home() {
  return (
    <>
    <Grid
      container
      spacing={5}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ddd"
      paddingTop={5}
      marginBottom= '3rem'
      columns={{xs:4, sm:8, md:12}}
    >
      <Grid item xs={8} display='flex' flexDirection='column' >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize:{lg: "50px", sm:'30px', xs:'25px'},
            fontWeight: "700",
            textTransform: "uppercase",
            color: "#fff",
           margin:'0 0 1rem ',
            textAlign:'center'
          }}
        >
          New season arrival
        </Typography>
        <Typography 
        component='h1'
        variant='h1'
          sx={{
            fontSize: {lg: "25px", sm:'18px', xs:'15px'},
            textTransform: "uppercase",
            color: "#fff",
            textAlign:'center'
          }}
        >
          Check out all the trends
        </Typography>
      </Grid>
      <Grid item xs={4} justifyContent='center'>
        <img src={Hero} alt="Hero" style={{maxWidth: '22rem', minHeight:'10rem'}}/>
      </Grid>
    </Grid>
    <CategoryContainer/>
    </>
  );
}


export default Home;
import { Container, Grid } from "@mui/material";
import React from "react";
import CalenderComp from "../CalenderComp/CalenderComp";
import bg from '../../../images/appointment-bg.png'
import photo from '../../../images/chair.png'

const style={
  background:`url(${bg})`,
  backgroundPosition:"center",
  backgroundRepeat:'no-repeat',
  height:'100%',
  backgroundSize:'cover',
  width:'100%',

}



const AppointmentHeader = ({date, setDate}) => {
  return (
    <Container style={style}>
      
      <Grid container sx={{p:5}}>
        <Grid sx={{p:5}} item xs={12} md={6}>
          <CalenderComp date={date} setDate={setDate}></CalenderComp>
        </Grid>
        <Grid sx={{p:5}} item xs={12} md={6}>
          <img style={{width:'100%',height:'360px'}} src={photo} alt="" />
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default AppointmentHeader;

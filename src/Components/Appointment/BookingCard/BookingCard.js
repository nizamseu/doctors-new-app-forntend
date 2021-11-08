import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const BookingCard = ({ booking, date }) => {
  const { id, name, time, space } = booking;
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          elevation={24}
        >
          <Typography sx={{ color: "#00bcd4" }} variant="h4">
            {name}
          </Typography>
          <Typography sx={{ fontWeight: "600" }} variant="h6">
            {time}
          </Typography>
          <Typography sx={{ color: "#9e9e9e" }}>
            {space} Space Available
          </Typography>
          <Button onClick={handleOpen} variant="contained" sx={{ my: 2 }}>
            Book Now
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openModal={openModal}
        handleClose={handleClose}
      ></BookingModal>
    </>
  );
};

export default BookingCard;

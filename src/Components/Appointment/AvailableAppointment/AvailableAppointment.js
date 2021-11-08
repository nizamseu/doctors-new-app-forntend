import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookings = [
  {
    id: 1,
    name: "Cavety Cleaning",
    time: "10:00 AM - 4:00 PM",
    space: 10,
  },
  {
    id: 2,
    name: "Cavety Cleaning",
    time: "10:00 AM - 4:00 PM",
    space: 10,
  },
  {
    id: 3,
    name: "Cavety Cleaning",
    time: "10:00 AM - 4:00 PM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavety Cleaning",
    time: "10:00 AM - 4:00 PM",
    space: 10,
  },
  {
    id: 5,
    name: "Cavety Cleaning",
    time: "10:00 AM - 4:00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Cavety Cleaning",
    time: "10:00 AM - 4:00 PM",
    space: 10,
  },
  {
    id: 7,
    name: "Cavety Cleaning",
    time: "10:00 AM - 4:00 PM",
    space: 10,
  },
];
const AvailableAppointment = ({ date }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 5, textAlign: "center" }}>
        Available Appointment {date.toDateString()}
      </Typography>
      <Grid container spacing={4}>
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            date={date}
            booking={booking}
          ></BookingCard>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;

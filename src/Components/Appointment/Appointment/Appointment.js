import React, { useState } from "react";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  console.log(date.toDateString());
  return (
    <div>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appointment;

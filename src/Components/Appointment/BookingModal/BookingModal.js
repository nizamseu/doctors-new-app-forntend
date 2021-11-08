import React ,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import './BookingModal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign:'center'
  };

const BookingModal = ({openModal,handleClose,booking,date}) => {
  const {name,time}= booking;

  const { register,reset, handleSubmit } = useForm();
  const onSubmit = data =>{
    data.date=date.toDateString();
    console.log(data);
    handleClose()
  };
 
useEffect(() => {
  reset(booking)
}, [reset]);

    return (
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography sx={{my:3}} variant='h4'>{name} </Typography>
          <Box >
          <form className="modal" onSubmit={handleSubmit(onSubmit)}>
          
          <input defaultValue= {time} disabled {...register("time")} /> <br />
          <input  {...register("name")} placeholder="Your name" /> <br />
          <input  {...register("email")} placeholder="Your Email" /> <br />
          <input  {...register("phone")} placeholder="Your Phone Number" /> <br />
          <input defaultValue={date.toDateString()} disabled {...register("date")} /> <br />

          <Button sx={{width:'100%'}} variant='contained' type="submit" >Submit</Button>
          </form>
          </Box>
        </Box>
      </Modal>
    );
};

export default BookingModal;
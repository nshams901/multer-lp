import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Dropdown from "./Dropdown";
const StyledInput = styled('input')(({ theme }) => ({
    display: "block",
    alignItems: 'flex-start',
    padding: '8px 6px',
    margin: '5px 0px',
    // Override media queries injected by theme.mixins.toolbar
  }));
const Form = () => {

  return (
    <Box
      bgcolor="#000"
      sx={{
        width: "400px",
        height: '500px',
        color: "#fff",
        margin: "auto",
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Typography textAlign={'center'} variant="h6">Schedule an appointement</Typography>
      <Typography variant="caption" textAlign={'center'}>
        Here, let visitors know what will happen when they complete your form.
      </Typography>
      <br />
      <StyledInput placeholder="First name*"></StyledInput>
      <StyledInput placeholder="Last name*"></StyledInput>
      <StyledInput placeholder="Email*"></StyledInput>
      <StyledInput placeholder="Phone number*"></StyledInput>
      
      <select style={{ padding: '8px 6px', margin: '5px 0px'}}>
        <option selected='true' >Type of appointement*</option>
      </select>
      <br />
      <Button variant="contained">Schedule now</Button>
    </Box>
  );
};

export default Form;

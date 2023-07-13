import { Grid } from "@mui/material";
import Benefit from "./Benefit";
import Form from "./Form";

const FormSection = () => {
  return (
    <Grid container spacing={2} sx={{ p: 3, }}>
      <Grid xs={12} md={6} sx={{ height: '300px', display: "flex", flexDirection: 'column',
       justifyContent: "space-between"}} >
        <Benefit />
        {/* <Item>xs=8</Item> */}
      </Grid>
      <Grid xs={12} md={6}>
        {/* <Item>xs=4</Itesm> */}
        <Form />
      </Grid>
    </Grid>
  );
};

export default FormSection;

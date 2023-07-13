import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";

export default function Info() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ margin: "90px 20px 20px 20px", gap: '20px', textAlign: 'center' }} maxWidth="lg">
        <Grid container spacing={2} gap={'2rem'} sx={{ justifyContent: 'space-between'}}>
          <Grid xs={12} md={6}>
            <Box>
              <Typography variant="h6">MULTOR</Typography>
              <Typography variant="body2">
                Schedule more virtual appointments, online classes, and video
                consultations with this high-converting lead capture template.
              </Typography>
              <Button sx={{ marginTop: "10px" }} variant="contained">
                Make it yours
              </Button>
            </Box>
            {/* <Item>xs=8</Item> */}
          </Grid>
          <Grid xs={12} md={4}>
            <Box>
              <Typography variant="h6">Category</Typography>
              <Typography variant="body2">
                Agency Lead | Generation | Consulting | Ecourse | Events |
                Featured | Health | Landing Pages | Lead Generation | Medical |
                Webinar s| WordPress
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

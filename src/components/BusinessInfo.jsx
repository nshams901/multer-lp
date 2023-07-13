import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react';
import person from '../assets/person.jpg'

const BusinessInfo = () => {
  return (
    <Grid container spacing={2} sx={{ p: 3 , minHeight: '350px', marginTop: '4rem', 
    justifyContent: 'center', gap: '10rem',}}>
    <Grid xs={12} md={4} sx={{ width: '100%', height: "350px"}}>
    <CardMedia
        sx={{ height: '100%', width: '100%' }}
        image={ person }
        title="green iguana"
      />
    </Grid>
    <Grid xs={12} md={4} >
      <Typography>About</Typography>
      <Typography sx={{ margin: '2rem 0px 0px 0px'}} variant='h5'>Some more information about your business</Typography>
      <Typography sx={{ marginTop: '12px'}} variant='body2'
      >Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.</Typography>
    </Grid>
  </Grid>
  )
}

export default BusinessInfo
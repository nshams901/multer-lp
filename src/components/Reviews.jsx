import { Box, Grid, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'

import React from 'react'

const Reviews = () => {
  return (
    <Box sx={{
        textAlign: 'center'
    }}>
    <Typography sx={{ margin: '4rem 0rem'}}>DON'T JUST TAKE OUR WORD FOR IT</Typography>

    <Grid container spacing={2} sx={{ p: 3 }}>
      <Grid xs={12} md={6} sx={{ paddingRight: '2rem'}}>
        <Typography> 
        {
            [1,2,3,4].map(() => <StarIcon/>)
        }
        </Typography>
        <Typography>Share a real testimonial that hits some of your benefits (but isn't too sales-y).</Typography>
        <Box sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src={user1} />
            <div>
                <Typography variant='h6'>Real name</Typography>
                <Typography variant='body2'>Location</Typography>
            </div>
        </Box>
      </Grid>
      <Grid xs={12} md={6} paddingLeft={'2rem'}>
      <Typography> 
        {
            [1,2,3,4].map(() => <StarIcon/>)
        }
        </Typography>
        <Typography>Share a real testimonial that hits some of your benefits (but isn't too sales-y).</Typography>
        <Box sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src={user2} />
            <div>
                <Typography variant='h6'>Real name</Typography>
                <Typography variant='body2'>Location</Typography>
            </div>
        </Box>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Reviews
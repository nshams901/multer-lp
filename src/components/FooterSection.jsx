import { Box, Typography } from '@mui/material'
import React from 'react'

const FooterSection = () => {
    const logo = 'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg'
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        bgcolor: '#152f2e',
        color: '#fff',
        height: '130px',
        alignItems: 'center',
        padding: '0px 30px'
    }}>
        <Typography sx={{ width: '150px'}}>
            <img src={logo} style={{ display: 'inline-block', width: '100%', filter: 'invert(100%)'}}  />
        </Typography>
        <Typography>© 2020 Insert Name Here. All rights reserved.</Typography>
    </Box>
  )
}

export default FooterSection
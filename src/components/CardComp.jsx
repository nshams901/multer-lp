import React from 'react'
import MediaCard from './Card';
import cardPic1 from '../assets/card-pic1.jpg';
import cardPic2 from '../assets/card-pic2.jpg'
import cardPic3 from '../assets/card-pic3.jpg'
import { Box } from '@mui/material';


const data = [
    ,
    {
        image: cardPic1,
        title: 'Feature 1',
        content: 'Talk about some of the details of your offer with a focus on the value people get back.'
    },
    {
        image: cardPic2,
        title: 'Feature 2',
        content: 'Is there a pain point that your service resolves? Tell visitors about it here'
    },
    {
        image: cardPic3,
        title: 'Feature 3',
        content: 'Alternatively, you could use this section to address some frequently asked questions'
    }
]
const CardComp = () => {
  return (
    <Box sx={{ display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom: '1rem',
        marginTop: '2rem'
    }}>
    {
        data.map((item) => {
            return (
                <MediaCard data= { item }/>
            )
        })
    }
    </Box>
  )
}

export default CardComp
import { Box, Typography } from "@mui/material";
import video from '../assets/pexels_videos_946147 (1080p).mp4'

const Advertise = () => {
  return <Box 
  sx={{
    textAlign: 'center',
    padding: '6rem',
    bgcolor: '#e8fbfb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Typography variant="h3">Show visitors what they're signing up for</Typography>
    <Typography variant="body1">Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).</Typography>
    <Box
     sx={{
        maxWidth: '800px',
        textAlign: 'center',
        marginTop: '2rem'
     }}>
   
      <video
      autoPlay
      controls
      style={{background: 'transparent', display: 'block', height: '100%', maxHeight: 'none', maxWidth: '800px',
      maxWidth: 'none', position: 'static', visibility: 'visible', width: '100%', objectFit: "contain"}} src={ video}/>
    </Box>
  </Box>;
};

export default Advertise;

import {
    Box,
    IconButton,
    ImageListItem,
    ImageListItemBar,
    Typography
  } from "@mui/material";
  import StarBorderIcon from "@mui/icons-material/StarBorder";
  
  const HeroSection = () => {
    const image =
      "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_100000000000000000001o.jpg";
    const cols = 1;
    const rows = 1;
    return (
      <Box>
        <ImageListItem
          sx={{ height: "100%" }}
          key={image}
          cols={cols}
          rows={rows}
        >
          <img src={image} alt={""} loading="lazy" />
          <ImageListItemBar
            sx={{
              height: "100%",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
            }}
            position="top"
            actionIcon={
              <Box
                sx={{
                  height: "100%",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: 'space-around'
                }}
              >
              <div>
                <img
                  width="100px"
                  src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
                />

              </div>
  
                <Typography variant={"h4"} width="100%" sx={{ maxWidth: '380px', marginTop: '1rem'}}>
                  Describe the value of booking an appointment
                </Typography>
                <Typography sx={{ maxWidth: {md: '400px', lg: '500px' }}}>
                  No need to get clever. Tell people exactly what you're offering,
                  then use this space to communicate your key value proposition.
                </Typography>
              </Box>
            }
            actionPosition="left"
          />
        </ImageListItem>
      </Box>
    );
  };
  
  export default HeroSection;
  
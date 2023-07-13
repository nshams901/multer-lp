import { Box, Typography } from "@mui/material";
import benefitIcon1 from "../assets/multor-benefit1-icon.svg";

const Benefit = () => {
  return (
    <>
      {[1, 2, 3].map((item) => {
        return (
          <Box sx={{ display: "flex", gap: 2 }}>
            <img src={benefitIcon1} />
            <div>
              <Typography> Benefit 1</Typography>
              <Typography>
                {" "}
                Highlight the benefits of signing up for an appointment, online
                class, or video consultation.
              </Typography>
            </div>
          </Box>
        );
      })}
    </>
  );
};

export default Benefit;

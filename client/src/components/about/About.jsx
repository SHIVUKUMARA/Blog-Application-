import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email, LinkedIn } from "@mui/icons-material";
import { deepOrange, red, grey } from "@mui/material/colors";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">My Applications</Typography>
        <Text variant="h5">
          <i>
            I'm a Software Engineer based in India. I've built websites and
            desktop applications.
          </i>
          <br />
          <i>
            If you are interested, you can view some of my favorite projects
            here
          </i>
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/SHIVUKUMARA"
              sx={{ color: grey[900] }}
              target="_blank"
            >
              {" "}
              <GitHub />
            </Link>
          </Box>
        </Text>
        <Text variant="h5">
          <i>
            Need something built or simply want to have chat? Reach out to me on
          </i>
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.instagram.com/shivukumara_patil/"
              sx={{ color: deepOrange[500] }}
              target="_blank"
            >
              {" "}
              <Instagram />
            </Link>{" "}
            <Link
              href="https://www.linkedin.com/in/shivukumara"
              color="primary"
              target="_blank"
            >
              {" "}
              <LinkedIn />{" "}
            </Link>
          </Box>
          <i>or send me an Email</i>
          <Link
            href="mailto:shivukumaraspatil01@gmail.com?Subject=This is a subject"
            target="_blank"
            sx={{ color: red[400] }}
          >
            {" "}
            <Email />
          </Link>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;


import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email, LinkedIn, WhatsApp } from "@mui/icons-material";
import { red, deepOrange, green } from "@mui/material/colors";


const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
      <Box>
        <Banner />
        <Wrapper>
          <Typography variant="h3">Getting in touch is easy!</Typography>
          <Text variant="h5">
            Reach out to me on
            <Link
              href="https://www.instagram.com/shivukumara_patil/"
              sx={{ color: deepOrange[500] }}
              target="_blank"
            >
              {" "}
              <Instagram />{" "}
            </Link>
            <Link
              href="https://www.instagram.com/shivukumara_patil/"
              target="_blank"
              color="primary"
            >
              {" "}
              <LinkedIn />{" "}
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=7204247286"
              rel="noreferrer"
              target="_blank"
              sx={{ color: green[900] }}
            >
              {" "}
              <WhatsApp />{" "}
            </Link>
            or send me an Email
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
}

export default Contact;
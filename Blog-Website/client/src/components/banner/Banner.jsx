
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
  width: 90%;
  background: url(https://img.freepik.com/premium-photo/dark-room-filled-with-glow-computer-screen-hacker-hard-work_124507-158225.jpg)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>My Application</SubHeading>
        </Image>
    )
}

export default Banner;
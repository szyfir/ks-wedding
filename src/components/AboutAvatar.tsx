import { Avatar, Paper, styled, Typography } from "@mui/material";
import { display, height } from "@mui/system";
import GoldenLine from "./common/GoldenLine";
import Wife from "../img/zona.jpg";

const Container = styled('div')(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "lightgrey"
}));

const Header = styled('div')(({ theme }) => ({
}));

const PersonalWrap = styled('div')(({ theme }) => ({
    display: "flex",
    width: "100%",

    "@media (max-width: 780px)": {
        flexDirection: "column",
    },
}));

const Personal = styled(Paper)(({ theme }) => ({
    margin: "2rem",
    padding: "1rem",
    display: "flex"
}));


const AboutAvatar: React.FC<any> = () => {
    return (
        <Container>
            <Typography variant="h4" m={1} p={1}>Coś o nas</Typography>
            <GoldenLine />
            <PersonalWrap>
                <Personal elevation={5}>
                    <Avatar
                        alt="Klaudia Barna"
                        src={Wife}
                        sx={{ width: 100, height: 100 }}
                    />
                    <Typography variant="h6" p={1} sx={{ fontSize: "0.75rem" }}>Klaudusia Barnusia bla bldskajdsua sdajasdhdy njdsaj sdajjsad sadja asjdas  asdsd  asdjsjdhs ajasdhahusd ashsad</Typography>
                </Personal>
                <Personal elevation={5}>
                    <Avatar
                        alt="Szymon Firlinger"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 100, height: 100 }}
                    />
                    <Typography variant="h6" p={1} sx={{ fontSize: "0.75rem" }}>Szymonek Kondonek bla bldskajdsua sdajasdhdy njdsaj sdajjsad sadja asjdas  asdsd  asdjsjdhs ajasdhahusd ashsad</Typography>
                </Personal>
            </PersonalWrap>
        </Container>
    )
}

export default AboutAvatar;
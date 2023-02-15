import { Avatar, Paper, styled, Typography } from "@mui/material";
import GoldenLine from "./common/GoldenLine";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Wife from "../img/zona.jpg";
import Husband from "../img/maz.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Container = styled('div')(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}));

const Details = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}));

const PersonalWrap = styled('div')(({ theme }) => ({
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
}));

const Personal = styled(Paper)(({ theme }) => ({
    margin: "0.75rem",
    padding: "1rem",
    display: "flex",
}));

const ContactFooter: React.FC<any> = () => {

    return (
        <Container>
            <Typography variant="h5" m={1} p={1} sx={{ fontFamily: "Merriweather" }}>Kontakt</Typography>
            <GoldenLine />
            <Typography variant="h6" m={1} p={1} sx={{ fontSize: "1.2rem", fontFamily: "Merriweather", textAlign: "center" }}>Prosimy o potwierdzenie obecności do <b>1 sierpnia 2023 r.</b></Typography>
            <PersonalWrap>
                <Personal elevation={5}>
                    <Avatar
                        alt="Pani Młoda"
                        src={Wife}
                        sx={{ width: 50, height: 50 }}
                    />
                    <Details>
                        <Typography variant="h6" m={1} sx={{ fontWeight: "bold", fontSize: "0.75rem", fontFamily: "Merriweather" }}>Pani Młoda</Typography>
                        <Typography variant="h6" m={1} sx={{ fontSize: "0.85rem", fontFamily: "Merriweather" }}>
                            <br />
                            <LocalPhoneIcon fontSize="inherit" sx={{ marginTop: "0.3rem", marginRight: "0.3rem", fontSize: "0.85rem", textAlign: "center", }} />
                            664 899 145
                        </Typography>
                    </Details>
                </Personal>
                <Personal elevation={5}>
                    <Avatar
                        alt="Pan Młody"
                        src={Husband}
                        sx={{ width: 50, height: 50 }}
                    />
                    <Details>
                        <Typography variant="h6" m={1} sx={{ fontWeight: "bold", fontSize: "0.75rem", fontFamily: "Merriweather" }} >Pan Młody</Typography>
                        <Typography variant="h6" m={1} sx={{ fontSize: "0.85rem", fontFamily: "Merriweather" }}>
                            <br />
                            <LocalPhoneIcon fontSize="inherit" sx={{ marginTop: "0.3rem", marginRight: "0.3rem", fontSize: "0.85rem", textAlign: "center" }} />
                            691 978 844
                        </Typography>
                    </Details>
                </Personal>
            </PersonalWrap>
        </Container >
    );
}

export default ContactFooter;
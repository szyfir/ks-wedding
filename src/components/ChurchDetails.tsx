import { Avatar, Paper, styled, Typography } from "@mui/material";
import GoldenLine from "./common/GoldenLine";
import Church from "../img/church.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",

    // "@media (max-width: 780px)": {
    // },
}));

const Map = styled("div")(({ theme }) => ({
    overflow: "hidden",
    background: "none",
    margin: "1rem",
    height: "40vh",
    width: "80%"
}));

const PaperWrap = styled(Paper)(({ theme }) => ({
    margin: "2rem",
    padding: "1rem",
    display: "flex"
}));

const ChurchDetails: React.FC<any> = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'linear',
            delay: 100,
        });
    }, [])

    return (
        <Container>
            <Typography variant="h5" m={1} p={1} sx={{ fontFamily: "Merriweather" }}>Jak dojechać do kościoła</Typography>
            <GoldenLine />
            <PaperWrap elevation={5} data-aos="fade-up">
                <Avatar
                    alt="Kościół"
                    src={Church}
                    sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h4" mt={1} p={1} sx={{ fontSize: "1rem", textAlign: "center" }}>Kościół Rzymskokatolicki pw. Wniebowstąpienia Pańskiego</Typography>
            </PaperWrap>
            <Typography variant="h4" mt={1} p={1} sx={{ fontSize: "1rem", textAlign: "center", fontWeight: "bold" }}>Rozpoczęcie uroczystości 16:00</Typography>
            <GoldenLine />
            <Map>
                <iframe width="100%" height="100%" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Jurija%20Gagarina%208,%2078-301%20%C5%9Awidwin&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
            </Map>
        </Container>
    )
};

export default ChurchDetails;
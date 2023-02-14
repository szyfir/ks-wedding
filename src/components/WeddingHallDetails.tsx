import { Avatar, Paper, styled, Typography } from "@mui/material";
import GoldenLine from "./common/GoldenLine";
import WeddingHall from "../img/WeddingHall.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey"
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

const WeddingHallDetails: React.FC<any> = () => {
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
            <Typography variant="h5" m={1} p={1}>Jak dojechać do sali</Typography>
            <GoldenLine />
            <PaperWrap elevation={5} data-aos="fade-up">
                <Avatar
                    alt="Sala"
                    src={WeddingHall}
                    sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h4" mt={3} p={1} sx={{ fontSize: "1rem", textAlign: "center" }}>Młyn nad Starą Regą - Tarnowo</Typography>
            </PaperWrap>
            <Typography variant="h4" mt={3} p={1} sx={{ fontSize: "1rem", textAlign: "center", fontWeight: "bold" }}>Po zabawie do białego rana - Poprawiny o 12:00</Typography>
            <GoldenLine />
            <Map>
                <iframe width="100%" height="100%" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=m%C5%82yn%20nad%20star%C4%85%20reg%C4%85%20tarnowo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
            </Map>
        </Container>
    )
}

export default WeddingHallDetails;
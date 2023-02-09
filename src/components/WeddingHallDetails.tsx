import { Avatar, Paper, styled, Typography } from "@mui/material";
import GoldenLine from "./common/GoldenLine";
import WeddingHall from "../img/WeddingHall.jpg";

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
    return (
        <Container>
            <Typography variant="h5" m={1} p={1}>Jak dojechać do sali</Typography>
            <GoldenLine />
            <PaperWrap elevation={5}>
                <Avatar
                    alt="Sala"
                    src={WeddingHall}
                    sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h4" mt={3} p={1} sx={{ fontSize: "1.25rem", textAlign: "center" }}>Młyn nad Starą Regą - Tarnowo</Typography>
            </PaperWrap>
            <GoldenLine />
            <Map>
                <iframe width="100%" height="100%" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Tarnowo%201,%2073-150%20%C5%81obez&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
            </Map>
        </Container>
    )
}

export default WeddingHallDetails;
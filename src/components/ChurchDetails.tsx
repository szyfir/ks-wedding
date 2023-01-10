import { Avatar, Paper, styled, Typography } from "@mui/material";
import GoldenLine from "./common/GoldenLine";
import Church from "../img/church.jpg";

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

const ChurchDetails: React.FC<any> = () => {
    return (
        <Container>
            <Typography variant="h4" m={1} p={1}>Jak dojechać do kościoła</Typography>
            <GoldenLine />
            <PaperWrap elevation={5}>
                <Avatar
                    alt="Kościół"
                    src={Church}
                    sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h4" mt={1} p={1} sx={{ fontSize: "1.25rem", textAlign: "center" }}>Kościół Rzymskokatolicki pw. Wniebowstąpienia Pańskiego</Typography>
            </PaperWrap>
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
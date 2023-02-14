import { styled, Typography } from "@mui/material";
import Present from "../img/presents.png";
import GoldenLine from "./common/GoldenLine";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    minHeight: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
}));

const Presents = styled("div")(({ theme }) => ({
    flex: 1,
    backgroundImage: `url(${Present})`,
    margin: "auto",
    backgroundSize: "70%",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    minHeight: "50vh",
    width: "100%",

    "@media (max-width: 780px)": {
        backgroundSize: "80%",
    },
}));

const PresentsDetails: React.FC<any> = () => {
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
            <Typography m={2} p={1} variant="h5" component="h5" sx={{ fontSize: "1.25rem", fontFamily: "Merriweather" }}>
                Na wesele przybywajcie o prezenty się nie martwcie,
                By nie składać ich na stercie niechaj zmieszczą się w kopercie.
            </Typography>
            <GoldenLine />
            <Presents data-aos="zoom-in"
            />
        </Container>
    )
}

export default PresentsDetails;
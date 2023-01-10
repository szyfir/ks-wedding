import { styled, Typography } from "@mui/material";
import Present from "../img/presents.png";
import GoldenLine from "./common/GoldenLine";

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    height: "100%",
    width: "100%",
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
}));

const Presents = styled("div")(({ theme }) => ({
    flex: 1,
    backgroundImage: `url(${Present})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    height: "40%",
    width: "40%"
}));

const PresentsDetails: React.FC<any> = () => {
    return (
        <Container>
            <Typography m={2} p={1} variant="h5" component="h5" sx={{ fontSize: "1.25rem" }}>
                Na wesele przybywajcie o prezenty się nie martwcie,
                By nie składać ich na stercie niechaj zmieszczą się w kopercie.
            </Typography>
            <GoldenLine />
            <Presents />
        </Container>
    )
}

export default PresentsDetails;
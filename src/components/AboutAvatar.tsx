import { Avatar, Paper, styled, Typography } from "@mui/material";
import { display, height } from "@mui/system";
import GoldenLine from "./common/GoldenLine";
import Wife from "../img/zona.jpg";
import Husband from "../img/maz.jpg";

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
            <Typography variant="h5" m={1} p={1} sx={{ fontFamily: "Merriweather" }}>Państwo Młodzi
            </Typography>
            <GoldenLine />
            <PersonalWrap>
                <Personal elevation={5}>
                    <Avatar
                        alt="Klaudia Barna"
                        src={Wife}
                        sx={{
                            width: 100, height: 100, fontFamily: "Merriweather",
                        }}
                    />
                    <Typography variant="h6" p={1} ml={3} sx={{ fontSize: "0.75rem", fontFamily: "Merriweather", }}>
                        Klaudia Barna - 26 letnia przyszła żona.<br />
                        Zakochałam się w jego niebieskich oczach<br /> i poczuciu humoru.
                    </Typography>
                </Personal>
                <Personal elevation={5}>
                    <Avatar
                        alt="Szymon Firlinger"
                        src={Husband}
                        sx={{ width: 100, height: 100, fontFamily: "Merriweather", }}
                    />
                    <Typography variant="h6" ml={3} p={1} sx={{ fontSize: "0.75rem", fontFamily: "Merriweather", }}>
                        Szymon Firlinger - 29 letni przyszły mąż.<br />
                        Ta cyganka zawróciła w głowie mi.<br />
                        Z tą cyganką chcę iść przez świat.
                    </Typography>
                </Personal>
            </PersonalWrap>
        </Container>
    )
}

export default AboutAvatar;
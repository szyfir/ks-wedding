import { Avatar, Paper, styled, Typography } from "@mui/material";
import GoldenLine from "./common/GoldenLine";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

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
            <Typography variant="h4" m={1} p={1}>Kontakt</Typography>
            <GoldenLine />
            <Typography variant="h6" m={1} p={1} sx={{ fontSize: "1.25rem" }}>Prosimy o potwierdzenie obecności do bla bla</Typography>
            <PersonalWrap>
                <Personal elevation={5}>
                    <Avatar
                        alt="Pani Młoda"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 50, height: 50 }}
                    />
                    <Details>
                        <Typography variant="h6" m={1} sx={{ fontWeight: "bold", fontSize: "0.75rem" }}>Pani Młoda</Typography>
                        <Typography variant="h6" m={1} sx={{ fontSize: "0.75rem" }}>
                            <LocalPhoneIcon fontSize="inherit" sx={{ marginTop: "0.25rem", marginRight: "0.3rem", fontSize: "0.75rem", textAlign: "center" }} />
                            664 899 145
                        </Typography>
                    </Details>
                </Personal>
                <Personal elevation={5}>
                    <Avatar
                        alt="Pan Młody"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 50, height: 50 }}
                    />
                    <Details>
                        <Typography variant="h6" m={1} sx={{ fontWeight: "bold", fontSize: "0.75rem" }} >Pan Młody</Typography>
                        <Typography variant="h6" m={1} sx={{ fontSize: "0.75rem" }}>
                            <LocalPhoneIcon fontSize="inherit" sx={{ marginTop: "0.25rem", marginRight: "0.3rem", fontSize: "0.75rem", textAlign: "center" }} />
                            691 978 844
                        </Typography>
                    </Details>
                </Personal>
            </PersonalWrap>
        </Container>
    );
}

export default ContactFooter;
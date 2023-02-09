import React from "react";
import "./App.css";
import { Grid, styled, Typography } from "@mui/material";
import Image from "./img/appPhoto.jpg"; // Import using relative path
import Card from "./img/weddingCard.png";
import CountDownTimer from "./components/CountDownTimer";
import AboutAvatar from "./components/AboutAvatar";
import PhotoGallery from "./components/PhotoGallery";
import GoldenLine from "./components/common/GoldenLine";
import ChurchDetails from "./components/ChurchDetails";
import PresentsDetails from "./components/PresentsDetails";
import WeddingHallDetails from "./components/WeddingHallDetails";
import ContactFooter from "./components/ContactFooter";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
  minHeight: "100vh",

  "@media (max-width: 780px)": {
    flexDirection: "column",
  },
}));

const HeaderPhoto = styled("div")(({ theme }) => ({
  flex: 1,
  order: 1,
  backgroundImage: `url(${Image})`,
  opacity: "90%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  minHeight: "60vh",

  "@media (max-width: 780px)": {
    flexDirection: "column",
  },

}));

const HeaderText = styled("div")(({ theme }) => ({
  flex: "0 0 55vw",
  order: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
  textAlign: "center",

  "@media (max-width: 780px)": {
    flex: "0 0 40vw",
    flexDirection: "column",
  },
}));

const RowContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  "@media (max-width: 780px)": {
    flex: 1,
    flexDirection: "column",
  },
}));

const SingleRow = styled("div")(({ theme }) => ({
  flex: 1,
}))

const RowColumnL = styled("div")(({ theme }) => ({
  flex: 1,
  order: 1,
}));

const RowColumnR = styled("div")(({ theme }) => ({
  flex: "0 0 50vw",
  order: 2,
}));



// const HeaderContainer = styled("section")(({ theme }) => ({
//   display: "flex",
//   width: "100%",
//   flexDirection: "row",
// }));

// const MainPhoto = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   backgroundSize: "contain",
//   alignItems: "center",
//   opacity: "80%",
//   height: "72vh",
//   backgroundImage: `url(${Image})`,
//   flexWrap: "wrap",
//   backgroundRepeat: "no-repeat",
//   objectFit: "contain",
// }));

// const SpaceHolder = styled("div")(({ theme }) => ({
//   flexDirection: "row",
//   flex: "0 0 25%",
// }));

// const RighHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexGrow: 1,
// }));

// const PhotoTitle = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexDirection: "row",
// }));

function App() {
  return (
    <Container>
      <Header>
        <HeaderPhoto>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "PinyonScript",
              fontWeight: 400,
              position: "absolute",
              width: "100%",
              top: "5%",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              fontSize: "3.25rem",
            }}
          >
            Klaudia & Szymon
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontFamily: "PinyonScript",
              fontWeight: 400,
              position: "absolute",
              bottom: "5%",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            23 września 2023
          </Typography>
        </HeaderPhoto>
        <HeaderText>
          <CountDownTimer targetDate={new Date("2023-09-23 16:00")} />
          <GoldenLine />
          <Typography
            variant="h6"
            component="h6"
            m={3}
            sx={{
              fontSize: "1rem",
              fontFamily: "Merriweather",
            }}
          >
            Zakochani i świadomi,
            że ich miłość to nie wiatr,
            mają zaszczyt zawiadomić,
            że chcą razem iść przez świat.
          </Typography>
        </HeaderText>
      </Header>
      <SingleRow>
        <AboutAvatar />
      </SingleRow>
      <RowContainer>
        <RowColumnL>
          <PhotoGallery />
        </RowColumnL>
        <RowColumnR>
          <PresentsDetails />
        </RowColumnR>
      </RowContainer>
      <RowContainer style={{ backgroundColor: "lightgrey" }}>
        <RowColumnL>
          <ChurchDetails />
        </RowColumnL>
        <RowColumnR>
          <WeddingHallDetails />
        </RowColumnR>
      </RowContainer>
      <SingleRow>
        <ContactFooter />
      </SingleRow>

      {/* <HeaderContainer
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <MainPhoto
        // sx={{
        //   flex: { xs: "100%", md: "35% 0" },
        // }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontFamily: "PinyonScript",
              fontWeight: 400,
            }}
          >
            Klaudia & Szymon
          </Typography>

          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontFamily: "PinyonScript",
              fontWeight: 400,
            }}
          >
            23 września 2023
          </Typography>
        </MainPhoto>
        <RighHeader>
          <h1>test</h1>
          <p>
            kdjsaj <br />
            dhsauidsabds
          </p>
        </RighHeader>
      </HeaderContainer>
      <div>
        <h2>ok2</h2>
      </div> */}

      {/* <Grid
        spacing={0}
        container
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        justifyContent="center"
      >
        <Grid item xs={6} md={5} lg={5} sx={{ height: "8vh" }}>
          <AppBarPhoto
            sx={{
              width: { xs: "100vw", s: "30vw", md: "30vw", lg: "30vw" },
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontFamily: "PinyonScript",
                fontWeight: 400,
              }}
            >
              Klaudia & Szymon
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontFamily: "PinyonScript",
                fontWeight: 400,
              }}
            >
              23 września 2023
            </Typography>
          </AppBarPhoto>
        </Grid>
        <Grid item xs={6} md={7} lg={7}>
          <div className="test">
            <h1>ksa</h1>
          </div>
        </Grid>
      </Grid> */}

      {/* 
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <div>
          <AppBarPhoto />
        </div>
        <div>
          Counter
        </div>
        <div>
          <div>sala</div>
          <div>kosciol</div>
        </div>
        <div>
          prezenty
        </div>
        <div>
          dane kontaktowe
        </div>
        <div>
          location
        </div>
        <div>
          footer
        </div>

      </Grid> */}
    </Container>
  );
}

export default App;

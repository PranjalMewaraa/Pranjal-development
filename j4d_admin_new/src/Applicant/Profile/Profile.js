import NavBar from "../../Components/NavBar/NavBar";
import SearchBar from "../../Shared/Search-Bar/SearchBar";
import jobsData from "../../Constants/jobsData.json";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import JobList from "../../Shared/Jobs/List";
import GridItem from "../../Shared/GridItem/GridItem";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import ProfileCard from "../../Shared/ProfileCard/ProfileCard";
import MainHeading from "../../Shared/Typography/MainHeading";
import SearchBarGBL from "../../Shared/Search-Bar/SearchBarGBL";
const Profile = () => {
  let searchBar = { backgroundColor: "white", marginBottom: "20px" };
  const darkTheme = createTheme({
    typography: {
      fontFamily: "Nunito",
    },
    palette: {
      mode: "dark",
      color: "white",
    },
  });
  return (
    <div className="landingPageContainer">
      <div className="navBarContainer">
        <NavBar />
      </div>
      <MainHeading
        title="Hey Developers,"
        subTitle="Welcome to"
        subTitle2="J4D"
      ></MainHeading>

      <section className="__light 100vh">
        <div className="container _bx--pd_20">
          <Box sx={{ flexGrow: 1 }} height="90vh">
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <Grid item xs={8}>
                <SearchBarGBL></SearchBarGBL>
                <ThemeProvider theme={darkTheme}>
                  <JobList jobsData={jobsData}></JobList>
                </ThemeProvider>
              </Grid>
              <Grid item xs={4}> 
                <ProfileCard></ProfileCard>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
    </div>
  );
};
export default Profile;

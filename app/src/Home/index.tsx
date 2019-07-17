import React from "react";
import styled from "styled-components";

import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import RestaurantBox from "./RestaurantBox";
import { Toolbar, AppBar } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: orange
  }
});

interface Restaurant {
  restaurantName: string;
  restaurantAddress: string;
  restaurantLogoUrl: string;
  restaurantCuisineKeysList: string[];
  distanceFromUser: number;
  restaurantId: number;
  reviewsRank: number;
  numOfReviews: number;
}

const restaurantsData = require("./resturants.json")
  .restaurantsList as Restaurant[];

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RestaurantContainer = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 16px;

  @media only screen and (max-width: 960px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 961px) {
    grid-template-columns: auto auto auto;
  }
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 33px;
`;

const CenteredToolbar = styled(Toolbar)`
  && {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    color: white;
    justify-content: center;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AppBar position="relative">
          <CenteredToolbar>
            <Title>Welcome to Foomo</Title>
          </CenteredToolbar>
        </AppBar>
        <RestaurantContainer>
          {restaurantsData.map(x => (
            <RestaurantBox
              key={x.restaurantId}
              logoUrl={x.restaurantLogoUrl}
              address={x.restaurantAddress}
              name={x.restaurantName}
              tags={x.restaurantCuisineKeysList}
              meterDistance={Math.floor(x.distanceFromUser)}
              reviewsRank={x.reviewsRank}
              numOfReviews={x.numOfReviews}
            />
          ))}
        </RestaurantContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;

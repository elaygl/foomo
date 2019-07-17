import React from 'react';
import styled from 'styled-components';
import ResturantBox from './ResturantBox';

interface Resturant {
  restaurantName: string;
  restaurantAddress: string;
  restaurantLogoUrl: string;
  restaurantCuisineKeysList: string[];
  distanceFromUser: number;
}

const resturantsData = require('./resturants.json').restaurantsList as Resturant[];

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RestaurantContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Title = styled.h1`
  font-size: 33px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to Foomo</Title>
      <RestaurantContainer>
        {resturantsData.map(x => (
          <ResturantBox
            key={x.restaurantName}
            logoUrl={x.restaurantLogoUrl}
            address={x.restaurantAddress}
            name={x.restaurantName}
            tags={x.restaurantCuisineKeysList}
            meterDistance={Math.floor(x.distanceFromUser)}
          />
        ))}
      </RestaurantContainer>
    </Container>
  );
};

export default App;

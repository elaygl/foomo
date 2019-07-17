import React from 'react';
import styled from 'styled-components';
import RestaurantBox from './RestaurantBox';

interface Restaurant {
  restaurantName: string;
  restaurantAddress: string;
  restaurantLogoUrl: string;
  restaurantCuisineKeysList: string[];
  distanceFromUser: number;
  restaurantId: number;
}

const restaurantsData = require('./resturants.json').restaurantsList as Restaurant[];

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
`;

const Title = styled.h1`
  font-size: 33px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to Foomo</Title>
      <RestaurantContainer>
        {restaurantsData.map(x => (
          <RestaurantBox
            key={x.restaurantId}
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

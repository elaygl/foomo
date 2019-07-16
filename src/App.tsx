import React from 'react';
import styled from 'styled-components';
import ResturantBox from './ResturantBox';

interface Resturant {
  restaurantName: string;
  restaurantAddress: string;
  restaurantLogoUrl: string;
  restaurantCuisineKeysList: string[];
}

const resturantsData = require('./resturants.json').restaurantsList as Resturant[];

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const ResturantLine = styled.span`
  font-size: 14px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to FoodMe</Title>
      {resturantsData.map(x => (
        <ResturantBox
          key={x.restaurantName}
          logoUrl={x.restaurantLogoUrl}
          address={x.restaurantAddress}
          name={x.restaurantName}
          tags={x.restaurantCuisineKeysList}
        />
      ))}
    </Container>
  );
};

export default App;

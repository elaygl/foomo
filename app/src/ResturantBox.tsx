import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 4px solid #DDD;
  border-radius: 8px;
  margin-bottom: 16px;
  margin-left: 2px;
  margin-right: 2px;
  align-items: center;
  padding: 16px;
  width: 300px;
  height: 120px;
  @media only screen and (min-width : 1200px) {
    width: 350px;
    height: 140px;
  }
  @media only screen and (min-width : 1600px) {
    width: 400px;
    height: 160px;
  };
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 15px;
  @media only screen and (min-width : 1200px) {
    font-size: 17px;
  }
  @media only screen and (min-width : 1600px) {
    font-size: 18px;
  };
`;

const Address = styled.span`
  margin-top: 8px;
  font-size: 13px;
  @media only screen and (min-width : 1200px) {
    font-size: 15px;
  }
  @media only screen and (min-width : 1600px) {
    font-size: 16px;
  };
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Tag = styled.span`
  background: lightgrey;
  border-radius: 4px;
  margin-left: 4px;
  margin-top: 3px;
  padding: 2px 6px;
  font-size: 9px;
  @media only screen and (min-width : 1200px) {
    font-size: 10px;
  }
  @media only screen and (min-width : 1600px) {
    font-size: 11px;
  };
`;

const Logo = styled.img`
  border-radius: 75px;
  border: 1px solid #696969;
  object-fit: cover;
  width: 100px;
  height: 100px;
  margin-left: 16px;
  @media only screen and (min-width : 1200px) {
    width: 125px;
    height: 125px;
  }
  @media only screen and (min-width : 1600px) {
    width: 150px;
    height: 150px;
  };
`;

interface Props {
  name: string;
  address: string;
  tags: string[];
  logoUrl: string;
}

const ResturantBox: React.FC<Props> = ({name, logoUrl, address, tags}) => {
  return (
    <Container>
      <Logo src={logoUrl} />
      <Column>
        <Name>{name}</Name>
        <Address>{address}</Address>
        <TagsContainer>
          {tags.map(x => (
            <Tag>{x}</Tag>
          ))}
        </TagsContainer>
      </Column>
    </Container>
  );
};

export default ResturantBox;

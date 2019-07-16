import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 16px;
  align-items: center;
  padding: 16px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Address = styled.span`
  margin-top: 8px;
`;

const TagsContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Tag = styled.span`
  background: lightgrey;
  border-radius: 4px;
  margin-left: 8px;
`;

const Logo = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
  margin-left: 16px;
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

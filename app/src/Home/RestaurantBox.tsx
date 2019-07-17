import React from "react";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import * as changeCase from "change-case";
import makeStyles from "@material-ui/styles/makeStyles";
import useTheme from "@material-ui/styles/useTheme";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex"
  },
  content: {
    flex: "1"
  },
  cover: {
    width: 151
  }
}));

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 15px;
  @media only screen and (min-width: 1200px) {
    font-size: 17px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 18px;
  }
`;

const Address = styled.a`
  margin-top: 8px;
  font-size: 13px;
  @media only screen and (min-width: 1200px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 16px;
  }
`;

const Distance = styled.span`
  color: #474a4f;
  margin-top: 3px;
  font-size: 9px;
  @media only screen and (min-width: 1200px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 13px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Tag = styled.span<{ color?: string }>`
  background: ${({ color = "lightgrey" }) => color};
  border-radius: 4px;
  margin-left: 4px;
  margin-top: 3px;
  padding: 2px 6px;
  font-size: 9px;
  @media only screen and (min-width: 1200px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 11px;
  }
`;

const NumOfReviews = styled.span`
  font-size: 9px;

  @media only screen and (min-width: 1200px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 11px;
  }
`;

interface Props {
  name: string;
  address: string;
  tags: string[];
  logoUrl: string;
  meterDistance: number;
  reviewsRank: number;
  numOfReviews: number;
}

const metersToMinutes = (meters: number) => {
  const leftOver = meters % 100;
  const number = meters / 100;

  if (leftOver < 30) return Math.floor(number);
  if (leftOver > 70) return Math.ceil(number);
  return Math.floor(number) + ".5";
};

const RestaurantBox: React.FC<Props> = ({
  name,
  logoUrl,
  address,
  tags,
  meterDistance,
  reviewsRank,
  numOfReviews
}) => {
  const classes = useStyles();
  const theme = useTheme<any>();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={logoUrl} title="Cover" />

      <CardContent className={classes.content}>
        <Column>
          <Row>
            <Name>{name}</Name>

            <div>
              <NumOfReviews>({numOfReviews})</NumOfReviews>
              <Tag color={theme.palette.primary[500]}>{reviewsRank}/10</Tag>
            </div>
          </Row>
          <Address
            href={`https://www.google.com/maps?saddr=רוטשילד+39+תל+אביב&daddr=${address}`}
            target="_blank"
          >
            {address.replace(", תל אביב יפו", "")}
          </Address>
          <Distance>{`מרחק: ${metersToMinutes(
            meterDistance
          )} דקות מהמשרד`}</Distance>
          <TagsContainer>
            {tags.map((tag: string) => (
              <Tag key={tag}>{changeCase.titleCase(tag)}</Tag>
            ))}
          </TagsContainer>
        </Column>
      </CardContent>
    </Card>
  );
};

export default RestaurantBox;

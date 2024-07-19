import React from "react";
import { CardMedia, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const NyTimesCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ cursor: "pointer", minHeight: "350px" }}
      onClick={() => navigate(`/details/${article?.id}`)}
      data-testid="article"
    >
      <CardMedia
        component="img"
        height="300"
        image={article?.media?.[0]?.["media-metadata"]?.[1]?.url}
        alt={article.title}
        data-testid="article"
      />
      <CardContent data-testid="article">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          data-testid="article"
        >
          {article.title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="black"
          gutterBottom
          data-testid="article"
        >
          {article.published_date}
        </Typography>
        <Typography variant="body2" color="black" data-testid="article">
          {article.byline}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NyTimesCard;

NyTimesCard.propTypes = {
  article: PropTypes.shape({
    byline: PropTypes.string,
    published_date: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
  }),
};

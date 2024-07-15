import React from "react";
import {
  Container,
  CardMedia,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router";

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
        height="140"
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

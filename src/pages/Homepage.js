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
import Header from "../components/Header";
import Loader from "../components/Loader";
import ErrorPage from "./ErrorPage";
import usePopularArticles from "../hooks/usePopularArticle";
import NyTimesCard from "../components/NyTimeCard";

const Homepage = () => {
  const navigate = useNavigate();

  const { data, error } = usePopularArticles();

  if (error) return <ErrorPage />;
  if (!data) return <Loader />;

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          New York Articles
        </Typography>
        <Grid container spacing={3}>
          {data?.results?.map((article) => {
            return (
              <Grid
                item
                key={article?.id}
                xs={12}
                sm={6}
                md={4}
                data-testid="article"
              >
                <NyTimesCard article={article} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;

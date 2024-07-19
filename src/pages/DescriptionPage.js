import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
} from "@mui/material";
import Header from "../components/Header";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Loader from "../components/Loader";
import ErrorPage from "./ErrorPage";
import usePopularArticles from "../hooks/usePopularArticle";

const DetailsPage = () => {
  const { id } = useParams();

  // NOTE: Logic to fetch the data on refresh, as we don't have any seprate endpoint to get the data based on the ID
  // We can also use other data persist techniques, like redux-persist or localstorage
  const [article, setArticle] = useState({});

  const { data, error } = usePopularArticles();

  useEffect(() => {
    if (id && data?.results) {
      const articleData = data?.results?.filter(
        (article) => article.id === parseInt(id)
      )[0];

      setArticle(articleData);
    }
  }, [id, data]);

  if (error || !article) return <ErrorPage />;
  if (!data) return <Loader />;

  return (
    <>
      <Header />
      <Container maxWidth="lg" data-testid="details-page">
        <Card>
          <CardMedia
            component="img"
            image={article?.media?.[0]?.["media-metadata"]?.[2]?.url}
            title={article?.title}
          />
          <CardContent>
            <Typography variant="h3" component="h2" gutterBottom>
              {article?.title}
            </Typography>
            <Typography variant="h6" component="h5" gutterBottom>
              {article?.abstract}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Published Date: {article?.published_date}
            </Typography>
            <Typography variant="body1" paragraph>
              {article?.byline}
            </Typography>
            <Typography variant="body1" paragraph>
              Section : {article?.section}
            </Typography>
            <Typography variant="body1" paragraph>
              Sub-section : {article?.subsection}
            </Typography>

            <Typography variant="h5">Postulates</Typography>
            <List>
              {article?.per_facet?.map((item) => {
                return (
                  <ListItem key={item}>
                    <ListItemIcon>
                      <RadioButtonCheckedIcon />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default DetailsPage;

/* eslint-disable react/prop-types */
// import React from 'react'

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumbsComp from "../components/breadcrumbs";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Rating,
  Slide,
  Typography,
} from "@mui/material";
import { updateRating } from "../features/movieSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DetailMovie = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const getMovies = useSelector((state) => state.movie.data);

  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const detail = useMemo(() => {
    const index = getMovies.findIndex((obj) => obj.id === parseInt(params.id));

    return getMovies[index];
  }, [params.id, getMovies]);

  useEffect(() => {
    // console.log("this data", detail);
    // console.log("cur params", params);
  }, []);

  return (
    <Container maxWidth="lg">
      <BreadCrumbsComp
        data={[
          {
            title: "Dashboard",
            underline: "hover",
            color: "inherit",
            href: "/",
          },
          {
            title: "Detail Movie",
            underline: "none",
            color: "inherit",
            href: `/${detail.id}`,
          },
          {
            title: detail.id,
            underline: "none",
            color: "inherit",
            href: `/${detail.id}`,
          },
        ]}
      />
      <Slide direction="right" in={true}>
        <Box>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                variant="h3"
                align="left"
                // sx={{ fontSize: 14, textAlign: 'left' }}
                // color="text.secondary"
                gutterBottom
              >
                {detail.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} align="left" color="text.secondary">
                {new Date(detail.date).toLocaleDateString("en-US", options)}
              </Typography>
              <Box sx={{ padding: "16px 0" }}>
                <LazyLoadImage
                  src={detail.thumbnail}
                  width={300}
                  // height={400}
                  style={{
                    maxHeight: 300,
                  }}
                  alt={detail.title}
                />
              </Box>
              <Typography variant="body2" align="left">
                {detail.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ p: 1 }}>
                <Rating
                  name="simple-controlled"
                  value={detail.rating}
                  onChange={(event, newValue) =>
                    dispatch(
                      updateRating({
                        id: detail.id,
                        rating: newValue,
                      })
                    )
                  }
                />
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Slide>
    </Container>
  );
};

export default DetailMovie;

// import React from 'react'
// import BreadCrumbsComp from './components/breadcrumbs'
// import Typography from '@mui/material/Typography'
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumbsComp from "../components/breadcrumbs";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Paginations from "../components/Paginations";

const Home = () => {
  const getMovies = useSelector((state) => state.movie.data);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const movies = useMemo(() => {
    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const currentItems = getMovies.slice(firstIndex, lastIndex);

    return currentItems;
  }, [getMovies, currentPage, perPage]);

  useEffect(() => {
    console.log("i'm rendered boys");
  }, []);

  const _renderItem = (item) => {
    return (
      <Card sx={{ width: "345px" }}>
        <CardActionArea onClick={() => console.log("masuk pak")}>
          <CardMedia
            component="img"
            height="150"
            // image="/src/img/panda-img.jpg"
            image={item.thumbnail}
            alt={item.title}
            // sx={{ maxWidth: '150px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <>
      <BreadCrumbsComp
        data={[
          {
            title: "Dashboard",
            underline: "none",
            color: "inherit",
            href: "/",
          },
        ]}
      />
      <Typography variant="h3" align="left" gutterBottom>
        Dashboard
      </Typography>

      {/* List Item */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {movies.map((e) => _renderItem(e))}
      </Box>

      {/* Pagination */}
      <Paginations
        totalItem={getMovies.length}
        perPage={perPage}
        currentPage={currentPage}
        setPage={(e) => setCurrentPage(e)}
        setCountPage={(e) => setPerPage(e)}
      />
    </>
  );
};

export default Home;

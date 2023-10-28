// import React from 'react'
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumbsComp from "../components/breadcrumbs";
import {
  Box,
  Container,
  Fade,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Paginations from "../components/Paginations";
import ListItems from "../components/ListItems";

const Home = () => {
  const getMovies = useSelector((state) => state.movie.data);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");

  const movies = useMemo(() => {
    let filteredMovies = getMovies.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchText.toLowerCase())
    );

    // Sorting
    if (sortBy !== "") {
      switch (sortBy) {
        case "rating":
          filteredMovies = filteredMovies.sort((a, b) => b.rating - a.rating);
          break;
        case "title":
          filteredMovies = filteredMovies.sort((a, b) => {
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
          break;
        case "date":
          filteredMovies = filteredMovies.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          break;
      }
    }

    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const currentItems = filteredMovies.slice(firstIndex, lastIndex);

    return currentItems;
  }, [getMovies, currentPage, perPage, searchText, sortBy]);

  useEffect(() => {
    console.log("i'm rendered boys", getMovies);
  }, [getMovies]);

  // const _renderItem = (item, index) => {
  //   const date = new Date(item.date);
  //   const options = {
  //     // weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   };

  //   return (
  //     <Card key={index} sx={{ width: "345px" }}>
  //       <CardActionArea onClick={() => navigate(`/${item.id}`)}>
  //         <CardMedia
  //           component="img"
  //           height="150"
  //           image={item.thumbnail}
  //           alt={item.title}
  //         />
  //         <CardContent>
  //           <Typography gutterBottom variant="h5" component="div">
  //             {item.title}
  //           </Typography>
  //           <Typography
  //             variant="body2"
  //             color="text.secondary"
  //             sx={{
  //               overflow: "hidden",
  //               display: "-webkit-box",
  //               WebkitLineClamp: 3,
  //               WebkitBoxOrient: "vertical",
  //             }}
  //           >
  //             {item.desc}
  //           </Typography>
  //           <Typography variant="caption" display="block" gutterBottom>
  //             {date.toLocaleDateString("en-US", options)}
  //           </Typography>
  //         </CardContent>
  //       </CardActionArea>
  //       <Box sx={{ p: 1 }}>
  //         <Rating
  //           name="simple-controlled"
  //           value={item.rating}
  //           onChange={(event, newValue) =>
  //             dispatch(
  //               updateRating({
  //                 id: item.id,
  //                 rating: newValue,
  //               })
  //             )
  //           }
  //         />
  //       </Box>
  //     </Card>
  //   );
  // };

  return (
    <Container maxWidth="lg">
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
      {/* Heading */}
      <Typography variant="h3" align="left" gutterBottom>
        Dashboard
      </Typography>

      {/* Sort and search */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: {
            xs: "start",
            sm: "center",
          },
          mb: 2,
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">
              Sort by
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              autoWidth
              label="Sort by"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="title">Title</MenuItem>
              <MenuItem value="date">Date</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ padding: "0 8px", flexGrow: 1, width: "100%" }}>
          <TextField
            id="search-bar"
            label="Search"
            variant="outlined"
            size="small"
            onChange={(e) => {
              setSearchText(e.target.value);
              setCurrentPage(1);
            }}
            sx={{
              width: "100%",
              // margin: "0 8px",
            }}
          />
        </Box>
      </Box>

      {/* List Item */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {movies.map((e, i) => _renderItem(e, i))}
      </Box> */}

      {/* New list item */}
      <Fade in={true}>
        <Box>
          <ListItems data={movies} />
        </Box>
      </Fade>

      {/* Pagination */}
      <Paginations
        totalItem={searchText === "" ? getMovies.length : movies.length}
        perPage={perPage}
        currentPage={currentPage}
        setPage={(e) => setCurrentPage(e)}
        setCountPage={(e) => setPerPage(e)}
      />
    </Container>
  );
};

export default Home;

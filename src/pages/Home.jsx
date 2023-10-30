// import React from 'react'
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumbsComp from "./../components/Breadcrumbs";
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
import Paginations from "./../components/Paginations";
import ListItems from "./../components/ListItems";

const Home = () => {
  const getMovies = useSelector((state) => state.movie.data);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortType, setSortType] = useState("");

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
          if (sortType === "ASC") {
            filteredMovies = filteredMovies.sort((a, b) => a.rating - b.rating);
          } else {
            filteredMovies = filteredMovies.sort((a, b) => b.rating - a.rating);
          }
          break;
        case "title":
          filteredMovies = filteredMovies.sort((a, b) => {
            const nameA =
              sortType === "DESC"
                ? b.title.toUpperCase()
                : a.title.toUpperCase(); // ignore upper and lowercase
            const nameB =
              sortType === "DESC"
                ? a.title.toUpperCase()
                : b.title.toUpperCase(); // ignore upper and lowercase
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
          if (sortType === "ASC") {
            filteredMovies = filteredMovies.sort(
              (a, b) => new Date(a.date) - new Date(b.date)
            );
          } else {
            filteredMovies = filteredMovies.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            );
          }
          break;
      }
    }

    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const currentItems = filteredMovies.slice(firstIndex, lastIndex);

    return currentItems;
  }, [getMovies, currentPage, perPage, searchText, sortBy, sortType]);

  useEffect(() => {
    console.log("i'm rendered boys", getMovies);
  }, [getMovies]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
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
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            textAlign: "left",
            width: {
              xs: '100%',
              sm: 'fit-content',
            },
            gap: 1,
          }}
        >
          <FormControl
            sx={{
              minWidth: 95,
              flex: {
                xs: 1,
                sm: 0,
              },
            }}
            size="small"
          >
            <InputLabel id="demo-simple-select-autowidth-label">
              Sort by
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                if (e.target.value === "") {
                  setSortType("");
                }
              }}
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
          <FormControl
            sx={{
              minWidth: 120,
              flex: {
                xs: 1,
                sm: 0,
              },
            }}
            size="small"
          >
            <InputLabel id="demo-simple-select-autowidth-label">
              Sort type
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-labelv"
              id="demo-simple-select-autowidthv"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              autoWidth
              label="Sort type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="ASC">Asc</MenuItem>
              <MenuItem value="DESC">Desc</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flexGrow: 1, width: "100%" }}>
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
            }}
          />
        </Box>
      </Box>

      {/* List item */}
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

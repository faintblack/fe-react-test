/* eslint-disable react/prop-types */
// import React from 'react'

import {
  Avatar,
  Box,
  // Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const ListItems = ({ data }) => {
  const navigate = useNavigate();

  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <List
      sx={{
        width: "100%",
        // maxWidth: 360,
        mt: 2,
        bgcolor: "background.paper",
      }}
    >
      {data.length > 0
        ? data.map((item, i) => {
            const date = new Date(item.date);

            return (
              <ListItemButton
                key={i + "cv"}
                sx={{
                  gap: 2,
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                }}
                onClick={() => navigate(`/${item.id}`)}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{ width: 84, height: 84 }}
                  >
                    <LazyLoadImage
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  </Avatar>
                </ListItemAvatar>
                <Box
                  sx={{
                    textAlign: {
                      xs: "center",
                      sm: "left",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    secondary={date.toLocaleDateString("id-ID", options)}
                  />
                  <Typography
                    variant="body2"
                    align="left"
                    sx={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                    gutterBottom
                  >
                    {item.desc}
                  </Typography>
                  <Rating
                    // name="simple-controlled"
                    name="read-only"
                    value={item.rating}
                    readOnly
                  />
                </Box>
              </ListItemButton>
            );
          })
        : ""}
      {/* <Divider variant="inset" component="li" /> */}
    </List>
  );
};

export default ListItems;

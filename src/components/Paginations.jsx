/* eslint-disable react/prop-types */
// import React from 'react'

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { useMemo } from "react";

const Paginations = ({
  totalItem,
  perPage,
  currentPage,
  setPage,
  setCountPage,
}) => {
  const totalPage = useMemo(
    () => Math.ceil(totalItem / perPage),
    [totalItem, perPage]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        margin: "15px",
      }}
    >
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">Items</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={perPage}
            onChange={(e) => {
              setCountPage(e.target.value);
              setPage(1);
            }}
            autoWidth
            label="Age"
          >
            {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Pagination
        count={totalPage}
        page={currentPage}
        sx={{ display: "flex", width: "fit-content" }}
        onChange={(e, i) => setPage(i)}
      />
    </Box>
  );
};

export default Paginations;

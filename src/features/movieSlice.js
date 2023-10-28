import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      title: "Test Title 1",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 2,
      title: "Test Title 2",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 5,
    },
    {
      id: 3,
      title: "Test Title 3",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 4,
      title: "Test Title 5",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: "10/30/2023",
      rating: 2,
    },
    {
      id: 5,
      title: "Test Title 4",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 6,
      title: "Test Title 6",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description 7",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 7,
      title: "Test Title 7",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 5,
    },
    {
      id: 8,
      title: "Test Title 8",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 9,
      title: "Test Title 9",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 10,
      title: "Test Title 10",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 11,
      title: "Test Title 11",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 12,
      title: "Test Title 12",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 13,
      title: "Test Title 13",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 14,
      title: "Test Title 14",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 3,
    },
    {
      id: 15,
      title: "Test Title 15",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 16,
      title: "Test Title 16",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
    {
      id: 17,
      title: "Test Title 17",
      thumbnail: "/src/img/panda-img.jpg",
      desc: "This is description",
      date: new Date().toLocaleDateString(),
      rating: 2,
    },
  ],
  counter: 0,
};

export const movieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    updateRating: (state, action) => {
      const getIndex = state.data.findIndex(
        (obj) => obj.id === action.payload.id
      );

      state.data[getIndex].rating = action.payload.rating;
    },
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addMovie,
  increment,
  decrement,
  incrementByAmount,
  updateRating,
} = movieReducer.actions;

export default movieReducer.reducer;

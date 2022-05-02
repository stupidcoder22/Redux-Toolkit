import { createReducer } from "@reduxjs/toolkit";

const initialstate = {
  c: 0,
};

export const customreducer = createReducer(initialstate, {
  increment: (state, action) => {
    state.c = state.c + 1;
  },
  incby25: (state, action) => {
    state.c = state.c + action.payload;
  },
  decrement: (state, action) => {
    state.c = state.c - 1;
  },
});

import { Like } from "@/types/like";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface LikesState {
  likes: Like[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LikesState = {
  likes: [],
  status: "idle",
  error: null,
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<Like>) => {
      state.likes.push(action.payload);
      
    },
    removeLike: (state, action: PayloadAction<number>) => {
      // state.likes = state.likes.filter((like) => like.id !== action.payload);
    },
    setLikes: (state, action: PayloadAction<Like[]>) => {
      state.likes = action.payload;
    },
    setStatus: (
      state,
      action: PayloadAction<"idle" | "loading" | "succeeded" | "failed">
    ) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addLike, removeLike, setLikes, setStatus, setError } =
  likesSlice.actions;

export const selectLikes = (state: { likes: LikesState }) => state.likes.likes;
export const selectStatus = (state: { likes: LikesState }) =>
  state.likes.status;
export const selectError = (state: { likes: LikesState }) => state.likes.error;

export default likesSlice.reducer;

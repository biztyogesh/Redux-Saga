import { createSlice } from "@reduxjs/toolkit";
import { setDataReducers, setLoadingReducers,setProductReducers,setAlbumsReducers,setPhotosReducers } from "./reducers";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    product:[],
    albums: [],
    photos: []
  },
  reducers: {
    setData: setDataReducers,
    setLoading: setLoadingReducers,
    setProduct: setProductReducers,
    setalbums: setAlbumsReducers,
    setphotos: setPhotosReducers
  }
});

export const { setData, setLoading,setProduct,setalbums,setphotos } = userSlice.actions;
export default userSlice.reducer;

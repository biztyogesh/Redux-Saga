import { createSlice } from "@reduxjs/toolkit";
import { setDataReducers, setLoadingReducers,setProductReducers,setAlbumsReducers,setPhotosReducers ,sendDataReducers} from "./reducers";

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
    setphotos: setPhotosReducers,
    sendData: sendDataReducers
  
  }
});

export const { setData, setLoading,setProduct,setalbums,setphotos,sendData } = userSlice.actions;
export default userSlice.reducer;

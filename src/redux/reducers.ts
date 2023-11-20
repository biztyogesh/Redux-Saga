export function setDataReducers(state:any ,action:any) {
  state.data = action.payload;
  state.isLoading = false;
}

export function setLoadingReducers(state:any):any {
  state.isLoading = true;

}

export function setProductReducers(state:any ,action:any) {
  state.product = action.payload;
  state.isLoading = false;
}

export function setAlbumsReducers(state:any ,action:any) {
  state.albums = action.payload;
  state.isLoading = false;
}

export function setPhotosReducers(state:any ,action:any) {
  state.photos = action.payload;
  state.isLoading = false;
}

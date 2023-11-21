import { call, put, takeEvery } from "redux-saga/effects";

const getData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

function* fetchData ():any {
  try {
    let data = yield call(getData);
    yield put({ type: "user/setData", payload: data });
  } catch (error) {
    yield put({ type: "user/setError" });
  }
}

const getProduct = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};

function* productData ():any {
  try {
    let data = yield call(getProduct);
    yield put({ type: "user/setProduct", payload: data });
  } catch (error) {
    yield put({ type: "user/setError" });
  }
}

const getAlbums = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/albums");
  return await response.json();
};

function* albumsData ():any {
  try {
    let data = yield call(getAlbums);
    yield put({ type: "user/setalbums", payload: data });
  } catch (error) {
    yield put({ type: "user/setError" });
  }
}


const getPhotos = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return await response.json();
};

const sendData = async (data: any) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: data
  });
  return await response.json();
};

function* photosData ():any {
  try {
    let data = yield call(getPhotos);
    yield put({ type: "user/setphotos", payload: data });
  } catch (error) {
    yield put({ type: "user/setError" });
  }
}


function* sendDataSaga({ payload }: any): any {
  try {
    let data: any = yield call(() => sendData(payload));
    console.log("sent data", data);

    yield put({ type: "user/sendData", payload: data });
  } catch (error) {
    yield put({ type: "user/setError" });
  }
}


function* rootSaga() {
  yield takeEvery("FETCH", fetchData);
  yield takeEvery("FETCH_PRODUCT", productData);
  yield takeEvery("FETCH_ALBUMS",albumsData);
  yield takeEvery("FETCH_PHOTOS",photosData)
  yield takeEvery("SEND_DATA",sendDataSaga)

}

export default rootSaga;

// import "./styles.css";
import "./App.css";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./redux/selector";
import { setLoading } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, data, product, albums,photos } = useSelector(getUserData);

  useEffect(() => {
    dispatch(setLoading());
    dispatch({ type: "FETCH" });
    dispatch({ type: "FETCH_PRODUCT" });
    dispatch({ type: "FETCH_ALBUMS" });
    dispatch({ type: "FETCH_PHOTOS" });
    dispatch ({ type: "SEND_DATA", payload: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    } });

  }, [dispatch]);
  console.log(data);

  if (isLoading) {
    return <div className="spin"></div>;
  } else if (!isLoading && data.length > 0) {
    return (
      <>
        <div className="App">
          {/* <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>User Name</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
            </thead>
            <tbody>
              {data.map((element: any, index: any) => (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.username}</td>
                  <td>{element.email}</td>
                  <td>{element.phone}</td>
                </tr>
              ))}
            </tbody>
          </table> */}


          {/* <div className="App">
            <table>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Title</td>
                  <td>Prize</td>
                  <td>description</td>
                </tr>
              </thead>
              <tbody>
                {product.map((element: any, index: any) => (
                  <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.title}</td>
                    <td>{element.price}</td>
                    <td>{element.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          {/* <div className="App">
            <table className="table-data">
              <thead>
                <tr>
                  <td>Uer ID</td>
                  <td>ID</td>
                  <td>Title</td>
                </tr>
              </thead>
              <tbody>
                {albums.slice(1,100).map((element: any, index: any) => (
                  <tr key={index}>
                    <td>{element.UserId}</td>
                    <td>{element.id}</td>
                    <td>{element.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          
          <div className="App">
            <table className="table-data">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>UserName</td>
                  <td>Website</td>
                </tr>
              </thead>
              <tbody>
                {data.map((element: any, index: any) => (
                  <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.username}</td>
                    <td>{element.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {/* <div className="App">
            <table className="table-data">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Title</td>
                </tr>
              </thead>
              <tbody>
                {albums.slice(1,100).map((element: any, index: any) => (
                  <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
      </>
    );
  }
  return undefined!;
}

export default App;

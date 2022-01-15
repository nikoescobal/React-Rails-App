import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPostsRequest } from "../redux/dataReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);
  const greeting = useSelector((state) => state.dataReducer.greeting);
  return <h1>Hello {greeting}</h1>;
};

export default App;

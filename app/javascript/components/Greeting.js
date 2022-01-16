import React from "react";
import { useSelector, useDispatch } from "react-redux";

const GET_RANDOM_MSG_REQUEST = "GET_RANDOM_MSG_REQUEST";
const GET_RANDOM_MSG_SUCCESS = "GET_RANDOM_MSG_SUCCESS";

const getRandomMsgSuccess = (json) => {
  console.log("GetRandomMsg() Action");
  return {
    type: GET_RANDOM_MSG_SUCCESS,
    json,
  };
};

const getRandomMsg = () => (dispatch) => {
  dispatch({ type: GET_RANDOM_MSG_REQUEST });
  return fetch("api/v1/messages_random")
    .then((response) => response.json())
    .then((json) => dispatch(getRandomMsgSuccess(json)))
    .catch((error) => console.log(error));
};

export default function Message(props) {
  const { msg } = props;
  const dispatch = useDispatch();
  const message = useSelector((state) => state.msg);
  return (
    <div>
      <h2>The Message from props is {msg}</h2>
      <button
        className='getMessageBtn'
        onClick={() => dispatch(getRandomMsg())}
      >
        {" "}
        Get Random Message
      </button>
      <h2>The Message from store is {message.text}.</h2>
    </div>
  );
}

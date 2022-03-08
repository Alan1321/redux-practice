import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { counterActions, authActions } from "../store/index";

const Page1 = () => {
  const counter = useSelector((state) => state.counter.counter);
  const isloggedin = useSelector((state) => state.auth.isloggedin);
  let loggedin = "true";

  if (isloggedin) loggedin = "true";
  else loggedin = "false";

  const dispatch = useDispatch();
  const clickHandler = (event) => {
    console.log(event.target.value);
    //dispatch({ type: "increment", amount: parseInt(event.target.value) });
    dispatch(counterActions.increment(parseInt(event.target.value)));
  };

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div>
      <div>Hey, You are in page 1. Counter is {counter}</div>
      <div>Hey, Loginvalue is {loggedin}</div>
      <button onClick={clickHandler} value={5}>
        Click Me to increase by 5
      </button>
      <button onClick={clickHandler} value={1}>
        Click Me to increase by 1
      </button>
      <button onClick={loginHandler}>Click to login</button>
      <button onClick={logoutHandler}>Click to logout</button>
      <br></br>
      <Link to="/second">
        <button>CLick to go to the next page</button>
      </Link>
    </div>
  );
};

export default Page1;

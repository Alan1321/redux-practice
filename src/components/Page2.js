import react from "react";
import { useSelector, useDispatch } from "react-redux";

const Page2 = () => {
  const counter = useSelector((state) => state.counter.counter);
  console.log("im in page2");
  return <div>Hey, You are in page 2. The counter is currently {counter}</div>;
};

export default Page2;

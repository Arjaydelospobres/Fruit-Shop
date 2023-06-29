import { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Fruititem from "../Component/Fruits/Fruitlist";

function Allfruits() {
  const [isloading, setIsloading] = useState(true);
  const [fruitdata, setFruitdata] = useState([]);

  // useEffect is a react hook that update only the data if there is new data the useEfftect will not triger
  useEffect(() => {
    setIsloading(true);
    axios
      .get("https://fruits-website-default-rtdb.firebaseio.com/fruit.json")
      .then((response) => {
        const data = response.data;
        // console.log(response.data);
        const fruits = [];
        for (const key in data) {
          // for in loop that make the response.data change the data into array object
          const newfruit = {
            id: key,
            ...data[key],
          };
          fruits.push(newfruit); // the value of fruits store the array object of newfruit into fruits
        }
        setFruitdata(fruits); // if the fruit data change store here
        setIsloading(false);
      });
  }, []);

  if (isloading) {
    return (
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          bgcolor: "background.paper",
        }}
      >
        <CircularProgress color="secondary" />
      </Stack>
    );
  }
  return (
    <section>
      <h1>All Fruits</h1>
      <Fruititem fruits={fruitdata} />
    </section>
  );
}

export default Allfruits;

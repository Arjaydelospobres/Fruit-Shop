import { useNavigate } from "react-router-dom";
import Addfruits from "../Component/Fruits/Addfruits";
import axios from "axios";
import Swal from "sweetalert2";

function Addfruit() {
  const navigate = useNavigate(); // react-router-dom that navigate to route from app.js

  async function handleSaveData(Fruit) {
    try {
      await axios.post(
        "https://fruits-website-default-rtdb.firebaseio.com/fruit.json", // rest api of real time firebase
        Fruit, // value of the input fruits
        {
          headers: {
            "Content-Type": "application/json", //request header type of api
          },
        }
      );

      Swal.fire("Successful!", `Data saved successfully!`, "success").then(
        () => {
          navigate("/"); // Navigates to the specified route ("/" in this case)
        }
      );

      // console.log("Data saved successfully!");
    } catch (error) {
      console.error("Error while saving data:", error);
    }
  }
  return (
    // custom attributes that call the handlesavedata
    <div>
      <Addfruits onAddFruit={handleSaveData} />
    </div>
  );
}

export default Addfruit;

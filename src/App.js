import { Route, Routes } from "react-router-dom";
import Deletefruits from "./Pages/Deletefruits";
import Newfruit from "./Pages/Newfruit";
import Allfruits from "./Pages/Allfruits";
import Addfruits from "./Pages/Addfruit";
import Addcart from "./Pages/Addcart";
import Layout from "./Component/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Allfruits />} />
        <Route path="/new-fruit" element={<Newfruit />} />
        <Route path="/add-fruit" element={<Addfruits />} />
        <Route path="/add-cart" element={<Addcart />} />
        {/* <Route path="/delete-fruit" element={<Deletefruits />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;

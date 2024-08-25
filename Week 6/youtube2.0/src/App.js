import { Routes, Route } from "react-router-dom";

import HomeFeed from "./Components/HomeFeed";
import Layout from "./Layout/Layout";

const App = () => (
  <Layout>
    <Routes>
      <Route exact path="/" element={<HomeFeed />} />
    </Routes>
  </Layout>
);

export default App;

import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import { HomeFeed, VideoDetail, ChannelDetail, SearchFeed } from "./Components";

const App = () => (
  <Layout>
    <Routes>
      <Route exact path="/" element={<HomeFeed />} />{" "}
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Layout>
);

export default App;

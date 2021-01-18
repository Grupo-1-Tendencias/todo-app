import { useState } from "react";
import Layout from "../../components/Layout";
import Search from "../../components/Search";
import Items from "../../components/Items";

function Home() {
  return <Layout children={[<Search />, <Items />]}></Layout>;
}

export default Home;

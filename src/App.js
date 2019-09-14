import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Card, Icon, Image } from 'semantic-ui-react'



export default function App() {
  return (
    <main>
      <Header />
      <Card><h1>My name is Stephen</h1></Card>
      {/* <TabNav /> */}
    </main>
  );
}

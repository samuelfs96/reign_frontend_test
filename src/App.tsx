import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";


function App() {

  const [tabValue, setTabValue] = useState('')

  return (
    <>
    
    <Header className="header">
        <p className="m-0">HACKER NEWS</p>
    </Header>

    <div className="container">
      <Tabs 
        className="tabs"
        value={tabValue}
        setValue={setTabValue}
      />
    </div>

    </>
  );
}

export default App;

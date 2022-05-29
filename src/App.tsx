import { useState } from "react";
import Header from "./components/Header";
import Select from "./components/Select";
import Tabs from "./components/Tabs";
import { useLocalStorage } from './hooks/useLocalStorage'


function App() {

  const [tabValue, setTabValue] = useState('')
  const [selectValue, setSelectValue] = useLocalStorage('selectValue', '')

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
      <div style={{marginTop: '45px'}}>
        <Select 
          className="dropdown"
          value={selectValue}
          setSelectValue={setSelectValue}
        />
      </div>
    </div>

    </>
  );
}

export default App;

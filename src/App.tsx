import { useState } from "react";
import Box from "./components/Box";
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
        <div className="wrap" style={{marginTop: '45px'}}>
          <Box 
            className="box"
            id="1"
            author='DeathArrow'
            title='Uber and Lyft’s new road: Fewer drivers, thrifty riders and jittery investors'
            url='https://www.wsj.com/articles/uber-and-lyfts-new-road-fewer-drivers-thrifty-riders-and-jittery-investors-11653651912?mod=hp_lead_pos6'
            created_at='2022-05-29T06:16:11.000Z'
          />
          <Box 
            className="box"
            id="2"
            author='DeathArrow'
            title='Uber and Lyft’s new road: Fewer drivers, thrifty riders and jittery investors'
            url='https://www.wsj.com/articles/uber-and-lyfts-new-road-fewer-drivers-thrifty-riders-and-jittery-investors-11653651912?mod=hp_lead_pos6'
            created_at='2022-05-29T06:16:11.000Z'
          />
          <Box 
            className="box"
            id="3"
            author='DeathArrow'
            title='Uber and Lyft’s new road: Fewer drivers, thrifty riders and jittery investors'
            url='https://www.wsj.com/articles/uber-and-lyfts-new-road-fewer-drivers-thrifty-riders-and-jittery-investors-11653651912?mod=hp_lead_pos6'
            created_at='2022-05-29T06:16:11.000Z'
          />
          <Box 
            className="box"
            id="4"
            author='DeathArrow'
            title='Uber and Lyft’s new road: Fewer drivers, thrifty riders and jittery investors'
            url='https://www.wsj.com/articles/uber-and-lyfts-new-road-fewer-drivers-thrifty-riders-and-jittery-investors-11653651912?mod=hp_lead_pos6'
            created_at='2022-05-29T06:16:11.000Z'
          />
        </div>
      </div>
    </div>

    </>
  );
}

export default App;

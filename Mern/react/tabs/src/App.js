import './App.css';
import React from 'react'
import { useState } from 'react'
import Tabs from './Components/Tabs'
import Content from './Components/Content'


function App() {
  const [tab, setTab] = useState([
    {
    label: 'Tab 1', content: 'Tab 1 shows content here!'
    },
    {
    label: 'Tab 2', content: 'Tab 2 shows content here!'
    },
    {
    label: 'Tab 3', content: 'Tab 3 shows content here!'
    }])
  const [content, setContent] = useState('')

  return (
    <div className="App">
        <Tabs tab={tab} setTab={setTab}  setContent={setContent}/>
        <Content content={content} />
    </div>
  );
}

export default App;

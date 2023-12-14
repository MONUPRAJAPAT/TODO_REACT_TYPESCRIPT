import './App.css'
import { AddToDo } from './components/AddToDo'
import { Navbar } from './components/Navbar';
import { Typography } from 'antd';

const { Title } = Typography;
function App() { 
  return (
    <>
      <main>
       <Title level={2}>Todo with React + TypeScript</Title>
        <AddToDo />
        <Navbar />
      </main>
      
    </>
  )
}

export default App

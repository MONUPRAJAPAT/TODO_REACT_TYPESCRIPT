import './App.css'
import { AddToDo } from './components/AddToDo'
import { Navbar } from './components/Navbar';
import { Typography } from 'antd';
import {CarryOutOutlined} from '@ant-design/icons';

const { Title } = Typography;
function App() { 
  return (
    <>
      <main>
       <Title level={2}>Todo with React + TypeScript <CarryOutOutlined /></Title>
        <AddToDo />
        <Navbar />
      </main>
      
    </>
  )
}

export default App

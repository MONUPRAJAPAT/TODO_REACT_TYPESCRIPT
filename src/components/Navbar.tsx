import { Tabs, TabsProps } from "antd";
import { Link} from "react-router-dom";
import { ShowTodo } from "./ShowTodo";

export const Navbar=()=>{
  const items: TabsProps['items'] = [
    {
      key: 'all',
      label: <Link to={'/'}>All</Link>,
      children: <ShowTodo/>,
    },
    {
      key: 'active',
      label: <Link to={'/?todos=active'}>Active</Link>,
      children:  <ShowTodo/>,
    },
    {
      key: 'completed',
      label: <Link to={'/?todos=completed'}>Completed</Link>,
      children: <ShowTodo/>,
    },
  ];
    return (
        <>
          <div style={{marginTop:'20px'}}>
          
          <Tabs size="large" type="card" defaultActiveKey="all" items={items}  />
          </div>
        </>
    )
}
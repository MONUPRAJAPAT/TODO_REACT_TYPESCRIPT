import { Tabs, TabsProps } from "antd"
import { useNavigate } from "react-router-dom"
import { ShowTodo } from "./ShowTodo";

export const Navbar=()=>{
  const navigate = useNavigate();
  const items: TabsProps['items'] = [
    {
      key: 'all',
      label: 'All',
      children: <ShowTodo/>,
    },
    {
      key: 'active',
      label: 'Active',
      children:  <ShowTodo/>,
    },
    {
      key: 'completed',
      label: 'Completed',
      children: <ShowTodo/>,
    },
  ];
  const onChange = (key: string) => {
    if(key === 'all'){
      navigate('/');
    }
    if (key === 'active'){
      navigate('/?todos=active');
    }
    if (key === 'completed') {
      navigate('/?todos=completed');
    }
  };

    return (
        <>
          <div style={{marginTop:'20px'}}>
          <Tabs size="large" type="card" defaultActiveKey="all" items={items} onChange={onChange} />
          </div>
        </>
    )
}
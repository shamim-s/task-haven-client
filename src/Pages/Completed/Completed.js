import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import TaskCard from "../../components/TaskCard";

const Completed = () => {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/completed/${user?.email}`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => console.error(err));
  }, [user?.email, todos]);

  let content;
  if(todos.length === 0){
    content = <h1 className="">no completed task</h1>
  }else{
    content = todos?.map((todo) => (<TaskCard todo={todo} key={todo._id} />))
  }
  return (
    <div>
      <h1 className="text-2xl text-black font-medium">Completed Tasks</h1>
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {content}
      </div>
    </div>
  );
};

export default Completed;

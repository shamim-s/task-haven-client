import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AddTodoCard from "../../components/AddTodoCard";
import TaskCard from "../../components/TaskCard";
import { AuthContext } from "../../Context/Context";
import { RotateLoader } from "react-spinners";

const AddNew = () => {
  const [todos, setTodos] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/task/${user?.email}`)
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email, todos]);

  let content;
  if(todos.length === 0){
    content = <h1 className="">no task added</h1>
  }else if (loading) {
    content = <RotateLoader color="#000" className="absolute top-[50%] left-[50%]"/>
  }
  else{
    content = todos?.map((todo) => (<TaskCard todo={todo} key={todo._id} />))
  }

  return (
    <div className="w-full">
      <AddTodoCard />
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {
            content
          }
      </div>
      
    </div>
  );
};

export default AddNew;

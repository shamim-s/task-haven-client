import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import axios from "axios";
import DeletedCard from "../../components/DeletedCard";

const Trash = () => {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/deleted/${user?.email}`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => console.error(err));
  }, [user?.email, todos]);

  let content;

  if(todos.length === 0){
    content = <h1 className="">no deleted task</h1>
  }else{
    content = todos?.map((todo) => (<DeletedCard todo={todo} key={todo._id} />))
  }

  return (
    <div>
      <h1 className="text-2xl text-black font-medium">Trash</h1>
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {content}
      </div>
    </div>
  );
};

export default Trash;

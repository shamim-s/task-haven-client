import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

const DeletedCard = ({ todo }) => {
    
  const handleDeleteTask = (todo) => {
    axios
      .delete(`http://localhost:5000/delete/task/${todo._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Task deleted");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card w-full bg-base-100 relative">
      <div className="card-body pl-16">
        <div className="card-actions justify-end"></div>
        <p
          className={`text-xl font-medium ${
            todo.completed && "line-through text-green-500"
          }`}
        >
          {todo.name}
        </p>
        <p className="">{todo.date}</p>
        <div className="tooltip absolute left-6 top-14 cursor-pointer"></div>
        <div className="flex gap-4 absolute bottom-6 right-6">
          <div data-tip="delete" className="tooltip">
            <FiTrash2
              onClick={() => handleDeleteTask(todo)}
              className="text-xl cursor-pointer hover:text-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletedCard;

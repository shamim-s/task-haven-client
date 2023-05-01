import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FiCircle, FiEdit, FiX, FiTrash2,FiCheckCircle } from "react-icons/fi";
import { AuthContext } from "../Context/Context";

const TaskCard = ({ todo }) => {
  const { edit, setEdit } = useContext(AuthContext);
  //Delete task
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
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

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:5000/remove/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Task Removed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

   const handleComplete = (todo) => {
    axios.put(`http://localhost:5000/task/complete`, todo)
    .then(res => {
      console.log(res.data);
      if (res.data.acknowledged) {
        toast.success("Task completed");
      }
    })
    .catch(err => console.log(err));
  // console.log(todo)
  }
  return (
    <div className="card w-full bg-base-100 relative">
      <div className="card-body pl-16">
        <div className="card-actions justify-end"></div>
        <p className={`text-xl font-medium ${todo.completed && "line-through text-green-500"}`}>{todo.name}</p>
        <p className="">{todo.date}</p>
        <div
          data-tip={todo.completed ? "Completed" : "click to complete"}
          className="tooltip absolute left-6 top-14 cursor-pointer"
        >
          {
            todo.completed ? <FiCheckCircle className="text-2xl text-green-500" /> : <FiCircle onClick={()=> handleComplete(todo)} className="text-2xl" />
          }
        </div>
        <div className="flex gap-4 absolute bottom-6 right-6">
          {
            todo.completed || <div
            data-tip={edit && edit._id === todo._id ? "cancel edit" : "edit"}
            className="tooltip"
          >
            {edit && edit._id === todo._id ? (
              <FiX
                onClick={() => setEdit({})}
                className="text-xl cursor-pointer hover:text-red-500"
              />
            ) : (
              <FiEdit
                onClick={() => setEdit(todo)}
                className="text-xl cursor-pointer"
              />
            )}
          </div>
          }
          <div data-tip="delete" className="tooltip">
            <FiTrash2
              onClick={todo.completed ? () => handleRemove(todo._id) : () => handleDelete(todo._id)}
              className="text-xl cursor-pointer hover:text-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

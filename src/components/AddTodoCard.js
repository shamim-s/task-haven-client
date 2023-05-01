import axios from "axios";
import { format } from "date-fns";
import React, { useContext } from "react";
import { HiPlus, FiRefreshCcw, HiRefresh} from "react-icons/hi";
import { AuthContext } from "../Context/Context";
import { toast } from "react-hot-toast";

const AddTodoCard = () => {
    const {user, edit, setEdit} = useContext(AuthContext);

    const date = format(new Date(), "PP");
    const handleAddTodo = (e) => {
        e.preventDefault();
        const name = e.target.task_name.value;

        const data = {
            name,
            date,
            user: user.email,
            completed: false
        }

        axios.post("http://localhost:5000/task/add",data )
        .then(res => {
            console.log(res.data);
            e.target.reset();
        })

    }

  const handleEdit = (e) => {
    e.preventDefault();
        const name = e.target.task_name.value;

        const data = {
            _id: edit._id,
            name,
            date,
            user: edit.user,
            completed: edit.completed
        }

        console.log(data, edit);

        axios.put(`http://localhost:5000/task/edit`, data)
        .then(res => {
          console.log(res.data);
          setEdit({});
          e.target.reset();
          toast.success("Task Updated");
        })
        .catch(err => console.log(err));
  }
  return (
    <div className="w-full bg-white p-8 rounded-xl">
      <h1 className="text-2xl font-semibold mb-4">Add Task</h1>
      <form onSubmit={edit && edit._id ? handleEdit : handleAddTodo} className="flex">
        <input
          type="text"
          name="task_name"
          required
          defaultValue={edit.name}
          placeholder="Type here"
          className="input input-bordered w-full rounded-tr-none rounded-br-none"
        />
        <button type="submit" className={`btn rounded-tl-none rounded-bl-none text-lg ${edit && edit._id && "bg-green-500"}`}>
          {edit && edit._id ? <><HiRefresh/>Update</> : <><HiPlus/>Add New</>}
        </button>
      </form>
    </div>
  );
};

export default AddTodoCard;

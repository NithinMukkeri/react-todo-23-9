//import logo from './logo.svg';
import { useState,useEffect } from "react";
import Bloges from "../Bloges/Bloges";
import Editcontact from '../Editcontact/Editcontact';
//import { FaTrash } from "react-icons/fa";
import { v4 } from "uuid";
import "./index.css";


function Main() {
  const [input, setInput] = useState("");
  const [newlist, setNewlist] = useState([]);
  const [editingItem, setEditingItem] = useState(null);


  useEffect(() => {
    const storedList = localStorage.getItem("todoList");
    if (storedList) {
      try {
        setNewlist(JSON.parse(storedList));  // Convert JSON string back to array
      } catch (error) {
        console.error("Error parsing localStorage data: ", error);
      }
    }
  }, []);

  // Save to localStorage whenever newlist changes
  useEffect(() => {
    if (newlist.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(newlist));  // Convert array to JSON string
    }
  }, [newlist]);
  const sub = (e) => {
    e.preventDefault();

    const newTask = {
      id: v4(),
      text: input,
      status: false,
    };
    setNewlist((prevList) => [...prevList, newTask]);
    setInput("");
    console.log(newTask);
  };


  const deleteItem = (id) => {
    console.log(id);
    const updatedList = newlist.filter((k) => k.id !== id);
    setNewlist(updatedList);
  };
  const toggleCheck  = (id) => {
    const updatedTasks = newlist.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    );
    setNewlist(updatedTasks);
  };
  const  handleEdit=(item)=>{
   setEditingItem(item)
 }

  
  const saveEdit = (updatedItem) => {
    const updatedList = newlist.map((task) =>
      task.id === updatedItem.id ? updatedItem : task
    );
    setNewlist(updatedList);
    setEditingItem(null);
}

    return (
        <div className="App">
          {editingItem ? (
         <Editcontact item={editingItem} saveEdit={saveEdit} />
          ) : (
            <>
              <form className="left" onSubmit={sub}>
                <input
                  type="text"
                  placeholder="Enter text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
    
              <ul>
                {newlist.map((item) => (
                  <Bloges
                    key={item.id}
                    item={item}
                    deleteItem={deleteItem}
                    toggleCheck={toggleCheck}
                    Faredit={handleEdit}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      );
    }
    
export default Main;
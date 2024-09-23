import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import React from "react";
import './Bloges.css'

const Bloges = (props) => {
  const { item, deleteItem,toggleCheck, Faredit } = props;
  //console.log(item);
  const { text, status, id } = item;
  //console.log(text)
  const checkestodo=status? "check":"";
  console.log(checkestodo)
const delet = ()=>{
    console.log(id)
    deleteItem(id)
}
 const check=()=>{
  toggleCheck(id)
 } 
const edit=()=>{
  Faredit(item)
  console.log("click")
}
  return (
    <div>
      <li className="list_item" key={id}>
        
        <label className={`${checkestodo}`} nani >
          <input type="checkbox" checked={status} onChange={check}  />
        
          {text}
          
          
          
            
        </label>
        <div>
        <FaTrash className="trash" onClick={delet}/>
        <FaEdit  className="edit"onClick={edit} />
        </div>
        
      </li>
      </div>
    
  );
};

export default Bloges;

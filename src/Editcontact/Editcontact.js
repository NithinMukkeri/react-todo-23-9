import React, { useState } from "react";

const Editcontact= ({ item, saveEdit }) => {
  const [editedText, setEditedText] = useState(item.text);

  const handleSave = () => {
    const updatedItem = { ...item, text: editedText };
    saveEdit(updatedItem);
  };

  return (
    <div>
   
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Editcontact;


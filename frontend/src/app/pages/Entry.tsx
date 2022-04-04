import React, { useState } from "react";
import ItemService from "../graphql/services/itemService";

const Entry = () => {
  const [name, setName] = useState("");
  const [information, setinformation] = useState("");
  const [category, setcategory] = useState("");
  const [img, setimg] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await ItemService.createItem({
        name,
        information,
        category,
        img,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="">Name</label>
        <input
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">Information</label>
        <input
          onChange={(e) => {
            e.preventDefault();
            setinformation(e.target.value);
          }}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">Category</label>
        <input
          onChange={(e) => {
            e.preventDefault();
            setcategory(e.target.value);
          }}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">Image</label>
        <input
          onChange={(e) => {
            e.preventDefault();
            setimg(e.target.value);
          }}
          type="text"
        />
      </div>
      <button color="red" type="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
};

export default Entry;

import axios from "axios";
import React, { useState, useEffect } from "react";

const CRUD = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [isHidden, setisHidden] = useState(true);

  const getTodo = async () => {
    const responce = await axios.get("http://localhost:3001/todo");
    setData(responce.data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const postTodo = async () => {
    await axios.post("http://localhost:3001/todo", { title: text });
    setData([...data, text]);
  };

  const deletTodo = async (id) => {
    await axios.delete(`http://localhost:3001/todo/${id}`);
    getTodo();
  };

  const editTodo = async () => {
    await axios.put("http://localhost:3001/todo");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Data"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={postTodo}>add todo</button>

      {data.map((item) => {
        return (
          <h1 key={item.id}>
            {item.title}
            <button onClick={() => deletTodo(item.id)}>delete</button>
            <button onClick={() => editTodo(item.id)}>Edit</button>
          </h1>
        );
      })}
      <input onChange={postTodo} type="text" />
       <h1>but hidden={isHidden}</h1>
      <button onClick={setisHidden}>update</button>
    </div>
  );
};
export default CRUD;

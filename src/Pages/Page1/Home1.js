import React, { useState } from "react";
import Todo from "../../Todo";
import Doing from "../../Doing";
import Done from "../../Done";

function Home1(props) {
  const [listTodoItems, setTodoListItems] = useState([]);
  const [listDoingItems, setDoingListItems] = useState([]);
  const [listDoneItems, setDoneListItems] = useState([]);
  const [count, setCount] = useState(0);
  return (
    <div className={`pt-[80px]`}>
      <h1 className="text-3xl font-bold text-black/70">Task Manager</h1>
      <div className="flex md:flex-row flex-col w-full gap-[1rem]  md:gap-[3rem] justify-center h-full p-4 items-top mt-4">
        <Todo
          count={count}
          setCount={setCount}
          listItems={listTodoItems}
          setListItems={setTodoListItems}
        />
        <Doing
          count={count}
          setCount={setCount}
          listItems={listDoingItems}
          setListItems={setDoingListItems}
        />
        <Done
          count={count}
          setCount={setCount}
          listItems={listDoneItems}
          setListItems={setDoneListItems}
        />
      </div>
    </div>
  );
}

export default Home1;

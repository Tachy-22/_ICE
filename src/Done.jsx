import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaEllipsisH } from "react-icons/fa";
import { ImImages } from "react-icons/im";
import { GrAdd } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

import ListItem from "./ListItem";

function Done({ listItems, setListItems, setCount, count }) {
  const [formVisiblity, setFormVisibility] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      <div className="py-6 px-4 rounded-lg bg-[#f1f2f4]    flex-col flex sm:w-[20rem] sm:grow-0 grow w-full h-full shadow-xl cursor-pointer gap-[0.5rem]  ">
        <div className="flex justify-between">
          <h2 id="header " className="font-semibold text-xl pl-4">
            Done
          </h2>
          <button className="p-2 hover:bg-black/10 rounded-md">
            <AiOutlineEllipsis className="w-6  text-xl  " />
          </button>
        </div>
        <div className="flex flex-col gap-3 w-full  ">
          {listItems.map((listItem, index) => {
            return (
              <ListItem
                key={index}
                index={listItem.id}
                listItem={listItem}
                setListItems={setListItems}
                listItems={listItems}
              />
            );
          })}
        </div>
        {!formVisiblity ? (
          <div className="flex items-center gap-2 ">
            <div
              onClick={() => {
                setFormVisibility((prev) => !prev);
              }}
              className="  flex items-center gap-2 grow  hover:bg-black/10 rounded-lg  p-2 "
            >
              <GrAdd className="w-5 text-md" />
              <p className="grow outline-none text-lg text-gray-900 ">
                Add a card
              </p>
            </div>
            <div className="p-2 hover:bg-black/10 rounded-md">
              <ImImages className="w-6 text-xl" />
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col items-center gap-2 "
          >
            <textarea
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              className="grow p-2 w-full outline-none text-lg resize-none text-gray-900 rounded-xl"
              autoFocus
            />

            <div className="flex items-center  w-full">
              <div className="  flex items-center gap-1 grow rounded-lg  p-2 ">
                <button
                  type="submit"
                  className="p-2 w-[6rem]  rounded-md bg-blue-700/80 text-white"
                  onClick={() => {
                    setFormVisibility((prev) => !prev);
                    setListItems([
                      ...listItems,
                      {
                        input: input,
                        id: Math.random() * 200,
                      },
                    ]);
                    setInput("");
                  }}
                >
                  Add item
                </button>
                <button
                  className="p-2 hover:bg-black/10 rounded-md"
                  onClick={() => {
                    setFormVisibility((prev) => !prev);
                  }}
                >
                  <AiOutlineClose className="w-5 text-2xl" />
                </button>
              </div>

              <button className="p-2 h-fit hover:bg-black/10 rounded-md">
                <FaEllipsisH className="w-5  text-xl  " />
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Done;

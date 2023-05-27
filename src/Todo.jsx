import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaEllipsisH } from "react-icons/fa";
import { ImImages } from "react-icons/im";
import { GrAdd } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react";

//import ListItem from "./ListItem";

function Todo({ listItems, setListItems, setCount, count }) {
  const [formVisiblity, setFormVisibility] = useState(false);
  const [input, setInput] = useState("");
  const [drag, setDrag] = useState(null);
  const [over, setOver] = useState(null);

  // statuses array

  // const statusesArr = [
  //   { container: "Todo" },
  //   { container: "Todo" },
  //   { container: "Doing" },
  // ];

  // {statusesArr.map((array,index) => {

  //   return (<></>)
  //  })}
  //save reference for dragItem and dragOverItem

  const dragItem = useRef();
  const dragOverItem = useRef();

  //handle Sorting of items
  const handleSort = () => {
    //duplicate the list of items
    let _listItems = [...listItems];
  //  console.log("_listItems", _listItems);
    //remove and save the dragged item content

    const draggedItemContent = _listItems.splice(dragItem.current, 1)[0];
    //// console.log(
    //   "draggedItemContent",
    //   draggedItemContent,
    //   "index",
    //   dragOverItem.current,
    //   dragItem.current,
    //   drag,
    //   over
    // );
    //switch position
    _listItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the list of items
    dragItem.current = null;
    dragOverItem.current = null;
    setListItems(_listItems);
  //  console.log("_listItems 2", _listItems);
  //  console.log("bottom", listItems, _listItems);
  };
  //console.log(listItems);
  return (
    <>
      <div className="py-6 px-4 rounded-lg bg-[#f1f2f4]    flex-col flex sm:w-[20rem] sm:grow-0 grow w-full h-full shadow-xl cursor-pointer gap-[0.5rem]  ">
        <div className="flex justify-between">
          <h2 id="header " className="font-semibold text-xl pl-4">
            Todo
          </h2>
          <button className="p-2 hover:bg-black/10 rounded-md">
            <AiOutlineEllipsis className="w-6  text-xl  " />
          </button>
        </div>
        <div className="flex flex-col gap-3 w-full  ">
          {listItems.map((item, index) => {
            return (
              // <ListItem
              //   key={index}
              //   index={index}
              //   item={item.input}
              //   setListItems={setListItems}
              //   listItems={listItems}
              // />
              <div
                // ref={drag ? dragItem : dragOverItem}
                onDragStart={(e) => {
                  // setDrag((prev) => !prev);
                  dragItem.current = index;
                  setDrag(index);
                //  console.log(index, "is being dragged", dragItem.current);
                }}
                onDragEnter={(e) => {
                  // setDrag((prev) => !prev);
                  setOver(index);
                  dragOverItem.current = index;
                //  console.log("drag entered", index, dragOverItem.current);
                }}
                onDragEnd={handleSort}
                onDragOver={(e, index) => {
                  e.preventDefault();
                  setOver(index);
                }}
                draggable
                id={`draggable_item_${index}`}
                key={index}
                className={`flex items-start border-[1px] cursor-move border-inherit shadow-lg  h-full  w-full break-words rounded-lg bg-white hover:bg-black/20 `}
              >
                <p className=" w-full h-full overflow-hidden    grow   border-black  text-ellipsis   break-words py-2 px-4 ">
                  {item.input}
                </p>

          
              </div>
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
                        id: count,
                        status: "Todo",
                      },
                    ]);
                    setCount((prev) => prev + 1);
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

export default Todo;

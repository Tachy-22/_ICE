import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function ListItem({ index, listItem, setListItems, listItems }) {
  // console.log(isDragging);
  return (
    <div
      id={`draggable_item_${index}`}
      key={index}
      className={`flex items-start border-[1px] border-inherit shadow-lg  h-full  w-full break-words rounded-lg bg-white hover:bg-black/20 `}
    >
      <p className=" w-full h-full overflow-hidden    grow   border-black  text-ellipsis   break-words py-2 px-4 ">
        {listItem.input}
      </p>

      <button
        className="p-2 w-fit  rounded-md"
        onClick={() => {
          const newList = listItems.filter((listItem) => listItem.id !== index);
          console.log(newList);
          setListItems(newList);
          //   setFormVisibility((prev) => !prev);
        }}
      >
        <AiOutlineClose className="w-4 text-xl " />
      </button>
    </div>
  );
}

export default ListItem;

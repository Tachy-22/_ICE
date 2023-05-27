import React, { useRef } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function ListItem({ index, item, setListItems, listItems }) {
  // //console.log(isDragging);
  const [drag, setDrag] = useState(null);
   const [over, setOver] = useState(null);
  //save reference for dragItem and dragOverItem

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  

  //handle Sorting of items
  const handleSort = () => {
    //duplicate the list of items
    let _listItems = [...listItems];
    //console.log("_listItems", _listItems);
    //remove and save the dragged item content

    const draggedItemContent = _listItems.splice(dragItem.current, 1)[0];
    //console.log(
    //   "draggedItemContent",
    //   draggedItemContent,
    //   "index",
    //   dragOverItem.current,
    //   dragItem.current,
    // );
    //switch position
    _listItems.splice(dragOverItem.current+1, 0, draggedItemContent);

    //reset the list of items
    dragItem.current = null;
    dragOverItem.current = null;
    setListItems(_listItems);
    //console.log("_listItems 2", _listItems);
    //console.log("bottom", listItems, _listItems);
  };
  return (
    <div
      // ref={drag ? dragItem : dragOverItem}
      onDragStart={(e) => {
        // setDrag((prev) => !prev);
        dragItem.current = index;
        setDrag(index)
        //console.log(index, "is being dragged", dragItem.current);
      }}
      onDragEnter={(e) => {
        // setDrag((prev) => !prev);
          setOver(index);
        dragOverItem.current = index;
        //console.log("drag entered", index, dragOverItem.current);
      }}
      onDragEnd={handleSort}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      draggable
      id={`draggable_item_${index}`}
      key={index}
      className={`flex items-start border-[1px] cursor-move border-inherit shadow-lg  h-full  w-full break-words rounded-lg bg-white hover:bg-black/20 `}
    >
      <p className=" w-full h-full overflow-hidden    grow   border-black  text-ellipsis   break-words py-2 px-4 ">
        {item}
      </p>

      <button
        className="p-2 w-fit  rounded-md"
        onClick={() => {
          const newList = listItems.filter((listItem) => listItem.id !== index);
          //console.log(newList);
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

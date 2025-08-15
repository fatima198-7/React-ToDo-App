import React, { useState } from 'react';

function MyList() {
  const [list, setList] = useState([
    { title: "Hit the gym", checked: false },
    { title: "Pay bills", checked: false },
    { title: "Meet George", checked: false },
    { title: "Buy eggs", checked: false },
    { title: "Read a book", checked: false },
    { title: "Organize office", checked: false }
  ]);

  const [inputValue, setInputValue] = useState("");

  // function to add new item
  const newElement = () => {
    if (inputValue.trim() === "") {
      alert("You must write something!");
      return;
    }
    const newList = [...list, { title: inputValue, checked: false }];
    setList(newList);
    setInputValue("");
  };

  // Checked toggle
  const toggleCheck = (index) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  };

  // Delete item
  const deleteElement = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className='h-[100vh]'>
      <div className="bg-white text-black w-[100%]">
        {/* Header */}
        <div id="myDIV" className="bg-green-600 text-white py-7">
          <h2 className='font-medium text-4xl text-center pb-3'>My To Do List</h2>
          <div className='w-[85%] mx-auto overflow-hidden'>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              className='bg-white text-black w-[75%] text-[19px] p-2 float-left m-0'
              placeholder="Title..."
            />
            <span
              onClick={newElement}
              className="text-gray-700 w-[25%] py-[9.5px] px-5 text-[17px] bg-gray-400 hover:bg-gray-500 float-left cursor-pointer duration-[0.3s]"
            >
              Add
            </span>
          </div>
        </div>

        {/* List */}
        <ul className='[&>li]:cursor-pointer [&>li]:p-3 [&>li]:px-12 [&>li]:relative [&>li]:font-medium [&>li]:duration-[0.3s]  [&>li]:hover:bg-gray-500'>
          {list.map((item, index) => (
            <li
              key={index} onClick={() => toggleCheck(index)} className={item.checked ? "line-through  text-white text-[21px] odd:bg-gray-400 even:bg-gray-400" : "" }>
              {item.title}
              <span onClick={(e) => {e.stopPropagation();  deleteElement(index);}}
                className="absolute right-0 top-0 px-4 py-3 hover:bg-red-500 hover:text-white cursor-pointer">
                ×
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyList;

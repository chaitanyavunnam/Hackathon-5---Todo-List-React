import { render } from "enzyme";
import React, {Component, useState} from "react";
import "./../styles/App.css";
import ListItem from "./ListItem";

function App()
{
	const [items,setItems]=useState([]);
	const [taskData,setTaskData]=useState("");

	const updateTaskData = (evnt) => {
		const val=evnt.target.value;
		setTaskData(val);
	}
	const addItemToList = () => {
		items.push(taskData);
		setItems([...items]);
		setTaskData("");
	}
	const editHandler = (updatedData,index) => {
		items[index]=updatedData;
		setItems([...items]);
	}
	const deleteHandler = (index) => {
		items.splice(index,1);
		setItems([...items]);
	}


	return (
	
	<div id="main">
	<textarea id="task" onChange={updateTaskData} placeholder="enter task" value={taskData}></textarea>
	<button id="btn" onClick={addItemToList} disabled={taskData.trim().length===0}>Add</button>
	<br/>
	{items.map((item,indx) => (
	<ListItem  item={item} indx={indx} key={`${item}_${indx}`} editHandler={editHandler} deleteHandler={deleteHandler}/>
	))}
	</div>
	);
}


export default App;

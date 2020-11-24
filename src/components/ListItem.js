import { render } from "enzyme";
import React, {Component, useState} from "react";

function ListItem(props) 
{
	const [renderTextArea,setrenderTextArea]=useState(false);
	const [textData,setTextData]=useState(props.item);
	const renderTextBox = () => {
		setrenderTextArea(true);
	}
	

	const updateTextData = (evnt) => {
		const val=evnt.target.value;
		setTextData(val);

	}

	const saveEditedItem = () => {
		setrenderTextArea(false);

		props.editHandler(textData,props.indx)
	}
	return (
		<div className="list">
			{renderTextArea ? (
			<>
			<textarea className="editTask" onChange={updateTextData} value={textData}></textarea>
			<button className="saveTask" onClick={saveEditedItem} disabled={textData.trim().length===0}>save</button>
			</>
		) : (
			<>
			{props.item}
			<button onClick={renderTextBox} className="edit">edit</button>
			<button onClick={() => props.deleteHandler(props.indx)} className="delete">delete</button>
		 </>
		)}
		</div>
		
	);
}


export default ListItem;
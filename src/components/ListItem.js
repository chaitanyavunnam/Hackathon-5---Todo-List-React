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
			<textarea onChange={updateTextData} value={textData}></textarea>
			<button onClick={saveEditedItem} disabled={textData.trim().length===0}>save</button>
			</>
		) : (
			<>
			{props.item}
			<button onClick={renderTextBox}>edit</button>
			<button onClick={() => props.deleteHandler(props.indx)}>delete</button>
		 </>
		)}
		</div>
		
	);
}


export default ListItem;
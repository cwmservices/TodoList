import '../App.css';

function Items(props){

	return(
		<div className="item-flex">
			<h3>{props.name}</h3>
			<button className="deleteButton" onClick={()=>props.deleteItem(props.id)}>-</button>
		</div>
	)
}

export default Items;
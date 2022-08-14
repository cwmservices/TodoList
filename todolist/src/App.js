import React,{useState} from 'react';
import './App.css';
import Items from './components/Items';

function App() {
  const [name,setName] = useState();
  const [items,setItems] = useState([
    {
     id:1,
     name:"Mango" 
    },
    {
      id:2,
      name:"Apple"
    },
  ]);
  
  function AddItem(){
    const date = new Date();
    const id = date.getSeconds();
    setName("");
    setItems((prevItems)=>{
      return [...prevItems,{id:id,name:name}]
    })
  }

  function deleteItem(id){
    const updatedArray = items.filter((item)=>{
      return item.id != id;
    })
    setItems(updatedArray);
  }

   return ( 
      <div className="container">
      <div className="input-div">
      <input placeholder="Enter Your Goal..." onChange={(e)=>setName(e.target.value)} value={name} id="search" type="text" className="searchbar" ></input> 
        <button className="addButton" onClick={AddItem}>+</button> 
      </div>
      <div className="items">
      {
        items.map((item)=>{
          return <div key={item.id}><Items name={item.name} id={item.id} deleteItem={deleteItem}/></div>  
        })  
        }
      </div>
        
        
      </div>
    )
}



export default App;
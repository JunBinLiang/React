import React, {Component} from 'react';
import "./TodoList.css"
var warning;
class TodoList extends Component{
	constructor(props){
		super(props);
		this.state={todoValue:[]};
		this.clickHandler=this.clickHandler.bind(this);
		this.inputHandler=this.inputHandler.bind(this);
		this.delete=this.delete.bind(this);
	}
	
	
	
	clickHandler(e){
		//console.log(document.querySelector(".myInput").value);
		if(document.querySelector(".myInput").value!=="")
		{
		  const newValue=document.querySelector(".myInput").value;
		  document.querySelector(".myInput").value="";
		  const newTodo=this.state.todoValue.map((val)=>{return val;});
			
		  if(newTodo.includes(newValue)){
			  warning=<h2 style={{color:'red',marginTop:'35px'}}>Dont Enter the Same ToDo !</h2>;
			  this.setState({todoValue:newTodo});
			  return;
		  }	
		  newTodo.push(newValue);
		  warning="";
		  this.setState({todoValue:newTodo});
		}
		
	}
	
	inputHandler(e){
		console.log(e.target.value);
	}
	
	delete(e){
		console.log(e.target.parentElement.getAttribute("name"));
		
		const newTodo=this.state.todoValue.filter((val,i)=>{
			
			return (i!=e.target.parentElement.getAttribute("name"));
														 
					 });
		 warning="";
		
		 this.setState({todoValue:newTodo});
	}
	
	render(){
		//const center={textAlign:'center'};
		const space="         ";
		const todoArray=this.state.todoValue.map((val,i)=>{
			return <p name={i} key={i} style={{textAlign:'center',color:'red'}}> {val} 
							<span onClick={this.delete} style={{color:'black',fontSize:"20px",marginLeft:"30px"}}>X</span>
				   </p>;
		});
		
		console.log("warning ",warning);
		
		return(
		<div style={{textAlign:'center'}}>
		  <h1>WelCome to ToDOList</h1>
		  {warning}
		  <input id="myInput" onChange={this.inputHandler} className="myInput"/>
			
			
		  <div className="idContainer" style={{textAlign:'center'}}>
		  <button onClick={this.clickHandler}>Confirm</button>
			
		  </div>
			
			<div style={{marginTop:'20px'}}>{todoArray}</div>
			
		</div>
		);
	}
}

export default TodoList;
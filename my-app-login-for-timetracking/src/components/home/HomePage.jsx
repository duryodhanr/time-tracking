import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          
        };
      }
      mySubmitHandler = (event) => {
        console.log(`${this.state.username}`)
        event.preventDefault()
      }
      myChangeHandler = (event) => {
        this.setState({
            username: event.target.value        
        });
      
      }
    render() {
        return (
        <div class="container">
         <form onSubmit={this.mySubmitHandler}>
            <div class="bg-primary text-black" >
               <h1>Time Tracker</h1>
                
             </div>
             <div> Add/Edit Tasks </div>
             <div> </div>
            <div> Task Name:</div>
            <div>
            <input type="text"  class="container"  value={this.state.username} onChange={this.myChangeHandler}/>
            </div>
            <div > Tag Name:</div>
            <button type="button" class="btn btn-outline-primary">Office </button>
                <button type="button" class="btn btn-outline-primary">Idea</button>
                <button type="button" class="btn btn-outline-primary">POC</button>
                <button type="button" class="btn btn-outline-primary">Design</button>
                <button type="button" class="btn btn-outline-primary">Thinking</button>
  
  
        <div>
         <h3>timer: {this.state.time}</h3>
         <button onClick={this.startTimer}>start</button>
         <button onClick={this.stopTimer}>stop</button>
         <button onClick={this.resetTimer}>reset</button>
       </div>
       <div> Status:</div>
       <input type="radio" value="Not Started" name="status" /> Not Started.
        <input type="radio" value=" Started" name="status" /> Started.   
        <input type="radio" value="In Progress" name="status" /> In Progress.
        <input type="radio" value="Completed" name="status" /> Completed.
        <div>
        <button type="submit" class="btn btn-primary"> submit</button>
        <button type="cancel"  class="btn btn-primary">Cancel</button>
        </div>
        
        </form>
      </div>
        )
    }
}

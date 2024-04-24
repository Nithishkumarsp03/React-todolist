import React from 'react'
import './styles.css'

export default function index() {

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          // Trigger button click event
          document.getElementById('submit').click();
        }
      };

    function AddTask(event){

        var input = document.getElementById("input")
        var tasks = input.value
        

        if(tasks === ""){
            alert("Please enter a task")
        }

        var ul = document.getElementById("tasks")
        var li = document.createElement("li")

        var textnode = document.createTextNode(tasks)
        li.appendChild(textnode)

        var editButton = document.createElement("button");
          editButton.innerHTML = "Edit";
          editButton.className = "edit-button";
          editButton.onclick = function() {
            var newText = prompt("Edit task:", tasks);
            if (newText !== null && newText !== "") {
              textnode.nodeValue = newText;
            }
          };
          li.appendChild(editButton);

          var deleteButton = document.createElement("button");
          deleteButton.innerHTML = "Delete";
          deleteButton.className = "delete-button";
          deleteButton.onclick = function() {
            ul.removeChild(li);
          };
          li.appendChild(deleteButton);

          var completeButton = document.createElement("button");
          completeButton.innerHTML = "Completed";
          completeButton.className = "complete-button";
          completeButton.onclick = function() {
          li.classList.toggle("completed");
          };
          li.appendChild(completeButton);

          ul.appendChild(li);

          input.value = "";
    }


  return (
    <div className='todolist'>
        <div className="header">
            <div className="head">
                <h1>To-Do-List (Using React)</h1>
            </div>
            
            <div className="input">
                <input className='text' type="text" placeholder='Enter the Tasks' id='input' onKeyDown= {handleKeyPress}/>
                <button type='submit' id='submit' onClick={()=>AddTask()}>Add</button>
            </div>


            <div className="tasks">
                <ul id='tasks'>
                    {/* <li>Hello</li> */}
                </ul>
            </div>
        </div>
        
        
    </div>
  )
}



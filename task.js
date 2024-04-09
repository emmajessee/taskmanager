//TASK MANAGER

//TASKS FOR TASK MANAGER
const menu = `TASK MANAGER;
What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// TASKS ARRAY (come back and personalize)
const tasks = `
Charge Macbook
Master JavaScript
`;

// DISPLAYS TASKS
let showTasks = ``;

// STORES NEW TASK VALUE
let newTask;

// STORING NUMBER OF TASKS TO BE REMOVED
let num;

// STORING VALUE OF REMOVED TASK
let removed;

//
let userInput;

while(userInput !== "CLOSE"){
    userInput = prompt(menu);

    if (userInput === "TASKS") {
        alert(tasks);
    }
    
    //fix broken alert
    if (userInput === "NEW") {
        let newTask = prompt(`ENTER YOUR NEW TASK'S NAME`);
        tasks.push(newTask); 
        alert(`Task "${newTask}" added successfully!`);
    }
    break;
}

alert('Thank you for using Task Manager!');


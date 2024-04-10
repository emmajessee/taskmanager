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
const tasks = ['Master JavaScript', 'Charge Macbook']

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
        alert(tasks.join('\n')); 
    }
    
    //fix broken alert DONE!
    if (userInput === "NEW") {
        let newTask = prompt(`ENTER YOUR NEW TASK'S NAME`);
        
        if (newTask !== null && newTask !== '') {
            tasks.push(newTask);
            alert(tasks.join('\n')); //figure out what this means after you googled it
        }
    }
    break; 
}
alert('Thank you for using Task Manager!');



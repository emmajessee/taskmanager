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
        if (userInput === '') {
            prompt('You cannot enter a blank task')
        }
    }
    if (userInput === "REMOVE") {
        let tasktoremove = prompt('Enter the name of the task you want to remove');
        let index = tasks.indexOf(tasktoremove);
        //this is the only way i could figure how to do it instead of usering num because the list wouldnt work on windows 
        if (index !== -1) {
            removed = tasks.splice(index, 1)
            alert(tasks.join('\n')); //WHY does it never work the ${} thing...
        } else {
            prompt('Please enter a valid task name')
        } 
        if (userInput === '') {
            prompt ('Enter a valid task name')
        }
    }
    

    break; 
}


}
alert('Thank you for using Task Manager!');



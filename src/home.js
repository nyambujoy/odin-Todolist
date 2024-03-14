function home() {

    const label = document.createElement("label");
    label.textContent = "Title ";
    label.className = "labelTitle"
    const title = document.createElement("h2")
    title.id = "titleName"
    // title.innerHTML = "Title"
    title.setAttribute("contentEditable", "true")





    const rightDiv = document.createElement("div")
    rightDiv.className = " rightDiv"

    // const leftDiv = document.createElement("div")
    // leftDiv.className = " leftDiv"

    const containerDiv = document.createElement("div")
    containerDiv.className = " containerDiv"

    const inputTitle = document.createElement("div")
    inputTitle.id = "Title"
    const label2 = document.createElement("label");
    label2.textContent = "Task descripton: ";

    const desc = document.createElement("div")
    desc.id = "desc"
    desc.innerHTML = "..."
    desc.setAttribute("contentEditable", "true")


    containerDiv.append(label, title, label2, desc)
    const content = document.querySelector(".content")
    content.textContent = ''
    content.append(containerDiv)
    // containerDiv.append(label)


    // Create an array of priority options
    let choices = ["high", "medium", "casual"]
    const prole = document.createElement("h5")
    prole.className = "prole"
    prole.innerHTML = "task priority"
    rightDiv.append(prole)

    for (let i = 0; i < choices.length; i++) {
        const proTitle = document.createElement("p")
        proTitle.innerHTML = choices[i]
        const radioChoice = document.createElement("input")
        radioChoice.type = "radio"
        radioChoice.name = "priorty"
        radioChoice.value = choices[i]
        rightDiv.append(proTitle, radioChoice)

    }

    const categories = ["personal", "school", "work", "fitness"]
    const catHeading = document.createElement("h5")
    catHeading.className = "catHeading"
    // catHeading.innerHTML = "task Category"
    // catHeading.id = "catHeading"
    // rightDiv.append(catHeading)


    catHeading.innerHTML = "Task Manager";
    rightDiv.appendChild(catHeading);

    const selectTaskManager = document.createElement("select");
    selectTaskManager.name = "taskManager";
    selectTaskManager.id = "taskManager";

    // Add options to the select dropdown
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.text = category;
        selectTaskManager.appendChild(option);
    });

    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    // console.log(`Current Date: `);




    const dueDateLabel = document.createElement("label")
    dueDateLabel.innerHTML = "Duedate"
    dueDateLabel.id = "dueDateLabel"
    const duedate = document.createElement("input")
    duedate.className = "duedate"
    duedate.setAttribute("contenteditable", "true")
    duedate.setAttribute("placeholder", `${day}/${month}/${year}`)


    const save = document.createElement("button")
    save.innerHTML = "save"
    save.className = "save"

    // const clear = document.createElement("button")
    // clear.innerHTML = "clear"
    // clear.className = "clear"

    rightDiv.append(selectTaskManager, dueDateLabel, duedate, save);
    content.append(rightDiv)

    document.querySelector('.save').addEventListener('click', saveTask);
    // save.addEventListener("click", () => {
    //     console.log("hello")
    // })


}
// Define a constructor function for Task
function Task(title, description, priority, category, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.category = category;
    this.dueDate = dueDate;
}

// Function to handle saving the task
function saveTask() {
    const title = document.getElementById('titleName').innerText;
    const description = document.getElementById('desc').innerText;
    const priorityRadio = document.querySelector('input[name="priority"]:checked');

    let priority = '';
    if (priorityRadio) {
        priority = priorityRadio.value;
    }

    const category = document.getElementById('taskManager').value;
    const dueDate = document.querySelector('.duedate').value;

    // Create a new Task object with the collected data
    const task = new Task(title, description, priority, category, dueDate);

    // Here, you can do whatever you want with the task object, such as adding it to a list, storing it in localStorage, etc.
    console.log(task); // For demonstration purposes, we are just logging the task object



    document.getElementById('titleName').innerText = '';
    document.getElementById('desc').innerText = '';
    // document.querySelector('input[name="priority"]:checked').checked;
    document.getElementById('taskManager').selectedIndex = 0;
    document.querySelector('.duedate').value = '';

    const tasksString = localStorage.getItem('tasks');
    const tasks = tasksString ? JSON.parse(tasksString) : [];
    return tasks;


}

// Call saveTask() when the save button is clicked
// document.querySelector('#save').addEventListener('click', saveTask);
// const saveBtn = document.querySelector(".save").addEventListener("click", () => {
//     console.log("hello")
// })











export { Task, saveTask }
export { home }
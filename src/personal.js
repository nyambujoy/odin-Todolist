// import { Task, saveTask } from "./home";



function Pask(title, description, priority, category, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.category = category;
    this.dueDate = dueDate;
}

// Function to handle saving the task
function personalTasks() {
    const title = document.getElementById('titleName').innerText;
    const description = document.getElementById('desc').innerText;

    const dueDate = document.querySelector('.duedate').value;

    // Create a new Task object with the collected data
    const task = new Pask(title, description, dueDate);

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

function personal() {

    const divContainer = document.createElement("div")
    divContainer.className = "divContainer"
    const divTitle = document.createElement("div")
    divTitle.className = "divTitle"


    const personSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    personSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    personSvg.setAttribute("viewBox", "0 0 24 24");
    personSvg.setAttribute("height", "50px"); // Set height
    personSvg.setAttribute("width", "50px"); // 
    personSvg.style.marginLeft = "5px";
    const svgperson = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgperson.textContent = "Hello Joy!";
    personSvg.appendChild(svgperson);

    const svgPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath2.setAttribute("d", "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z");
    personSvg.appendChild(svgPath2);



    const inputSearch = document.createElement("input")
    inputSearch.setAttribute("placeholder", "search for a  task")
    inputSearch.id = "inputSearch"
    // inputSearch.appendChild(searchSvg)


    divTitle.append(personSvg, inputSearch)

    const heading = document.createElement("h3")
    heading.textContent = "My projects"
    heading.id = "heading"

    const taskDiv = document.createElement("div")
    taskDiv.id = "taskDiv"

    const tasks = personalTasks()

    for (let i = 0; i < tasks.length; i++) {
        const topDiv = document.createElement("div")
        topDiv.id = "topDiv"

        const bottomDiv = document.createElement("div")
        bottomDiv.id = "bottomDiv"



        const checkboxInput = document.createElement("input");
        checkboxInput.setAttribute("type", "checkbox");
        checkboxInput.className = "checkbox-input";
        checkboxInput.id = "myCheckbox";

        // Create the label associated with the checkbox
        const label = document.createElement("label");
        label.setAttribute("for", "myCheckbox");
        label.className = "checkbox-label";

        const title = document.createElement("h2")
        title.id = "titleName"
        // title.innerHTML = "Title"
        title.setAttribute("contentEditable", "true")


        const redSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        redSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        redSvg.setAttribute("viewBox", "0 0 24 24");
        redSvg.setAttribute("height", "30px"); // Set height
        redSvg.setAttribute("width", "30px"); // 
        redSvg.style.marginLeft = "5px";
        redSvg.style.backgroundColor = "red";
        const svgwork = document.createElementNS("http://www.w3.org/2000/svg", "title");
        svgwork.textContent = "home";
        redSvg.appendChild(svgwork);

        // Create a path element within the SVG
        const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        svgPath.setAttribute("d", "M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z");
        redSvg.appendChild(svgPath);

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

        topDiv.append(title, redSvg, dueDateLabel, duedate)


        const desc = document.createElement("div")
        desc.id = "desc"
        desc.innerHTML = "..."
        desc.setAttribute("contentEditable", "true")

        bottomDiv.append(desc)

        divContainer.append(topDiv, bottomDiv)

    }






    // Append the taskDiv to the container
    divContainer.appendChild(taskDiv);


    divContainer.append(divTitle, heading)
    const content = document.querySelector(".content")
    content.textContent = ''
    content.append(divContainer)



}

// function Task(title, description, priority, category, dueDate) {
//     this.title = title;
//     this.description = description;
//     this.priority = priority;
//     this.category = category;
//     this.dueDate = dueDate;
// }

// // Function to handle saving the task
// function personalTasks() {
//     const title = document.getElementById('titleName').innerText;
//     const description = document.getElementById('desc').innerText;

//     const dueDate = document.querySelector('.duedate').value;

//     // Create a new Task object with the collected data
//     const task = new Task(title, description, dueDate);

//     // Here, you can do whatever you want with the task object, such as adding it to a list, storing it in localStorage, etc.
//     console.log(task); // For demonstration purposes, we are just logging the task object



//     document.getElementById('titleName').innerText = '';
//     document.getElementById('desc').innerText = '';
//     // document.querySelector('input[name="priority"]:checked').checked;
//     document.getElementById('taskManager').selectedIndex = 0;
//     document.querySelector('.duedate').value = '';

//     const tasksString = localStorage.getItem('tasks');
//     const tasks = tasksString ? JSON.parse(tasksString) : [];
//     return tasks;


// }

export { personal }
import './css/index.css'
// import homesvg from './home.svg'
import { home } from './home.js'
import './css/home.css'

function createButtons() {

    const personalBtn = document.createElement("button");
    personalBtn.innerHTML = "Personal";
    personalBtn.classList.add("navBtn");
    personalBtn.id = "personalBtn";

    const personSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    personSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    personSvg.setAttribute("viewBox", "0 0 24 24");
    personSvg.setAttribute("height", "30px"); // Set height
    personSvg.setAttribute("width", "30px"); // 
    personSvg.style.marginLeft = "5px";
    const svgperson = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgperson.textContent = "home";
    personSvg.appendChild(svgperson);

    // Create a path element within the SVG
    const svgPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath2.setAttribute("d", "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z");
    personSvg.appendChild(svgPath2);
    personalBtn.style.display = "flex"; // Use flexbox for layout
    personalBtn.style.alignItems = "center";
    personalBtn.append(personSvg)

    const schoolBtn = document.createElement("button");
    schoolBtn.innerHTML = "SCHOOL";
    schoolBtn.classList.add("navBtn");
    schoolBtn.id = "schoolBtn";

    const schoolSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    schoolSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    schoolSvg.setAttribute("viewBox", "0 0 24 24");
    schoolSvg.setAttribute("height", "30px"); // Set height
    schoolSvg.setAttribute("width", "30px"); // 
    schoolSvg.style.marginLeft = "5px";
    const svgschool = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgschool.textContent = "home";
    schoolSvg.appendChild(svgschool);

    // Create a path element within the SVG
    const svgPath3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath3.setAttribute("d", "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z");
    schoolSvg.appendChild(svgPath3);
    schoolBtn.style.display = "flex"; // Use flexbox for layout
    schoolBtn.style.alignItems = "center";
    schoolBtn.append(schoolSvg)

    const workBtn = document.createElement("button");
    workBtn.innerHTML = "WORK";
    workBtn.classList.add("navBtn");
    workBtn.id = "workBtn";

    const workSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    workSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    workSvg.setAttribute("viewBox", "0 0 24 24");
    workSvg.setAttribute("height", "30px"); // Set height
    workSvg.setAttribute("width", "30px"); // 
    workSvg.style.marginLeft = "5px";
    const svgwork = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgwork.textContent = "home";
    workSvg.appendChild(svgwork);

    // Create a path element within the SVG
    const svgPath4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath4.setAttribute("d", "M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z");
    workSvg.appendChild(svgPath4);
    workBtn.style.display = "flex"; // Use flexbox for layout
    workBtn.style.alignItems = "center";
    workBtn.append(workSvg)

    const fitnessBtn = document.createElement("button");
    fitnessBtn.innerHTML = "FITNESS";
    fitnessBtn.classList.add("navBtn");
    fitnessBtn.id = "fitnessBtn";

    const fitnessSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    fitnessSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    fitnessSvg.setAttribute("viewBox", "0 0 24 24");
    fitnessSvg.setAttribute("height", "30px"); // Set height
    fitnessSvg.setAttribute("width", "30px"); //
    fitnessSvg.style.marginLeft = "5px";
    fitnessSvg.style.color = "#cd2028"
    const svgfitness = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgfitness.textContent = "home";
    fitnessSvg.appendChild(svgfitness);

    // Create a path element within the SVG
    const svgPath5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath5.setAttribute("d", "M12 5C10.89 5 10 5.89 10 7S10.89 9 12 9 14 8.11 14 7 13.11 5 12 5M22 1V6H20V4H4V6H2V1H4V3H20V1H22M15 11.26V23H13V18H11V23H9V11.26C6.93 10.17 5.5 8 5.5 5.5L5.5 5H7.5L7.5 5.5C7.5 8 9.5 10 12 10S16.5 8 16.5 5.5L16.5 5H18.5L18.5 5.5C18.5 8 17.07 10.17 15 11.26Z");
    fitnessSvg.appendChild(svgPath5);
    fitnessBtn.style.display = "flex"; // Use flexbox for layout
    fitnessBtn.style.alignItems = "center";
    fitnessBtn.append(fitnessSvg)

    // const leftDiv = document.createElement("div");
    // leftDiv.className = "leftDiv"; // Corrected line to set class name

    // const title = document.createElement("h2")
    // title.innerHTML = "Just Do!"


    // const imageHome = document.createElement("img")
    // imageHome.src = homeSvg

    const homeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    homeSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    homeSvg.setAttribute("viewBox", "0 0 24 24");
    homeSvg.setAttribute("height", "30px"); // Set height
    homeSvg.setAttribute("width", "30px"); // 
    homeSvg.style.marginLeft = "5px";
    const svgTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgTitle.textContent = "home";
    homeSvg.appendChild(svgTitle);

    // Create a path element within the SVG
    const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath.setAttribute("d", "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z");
    homeSvg.appendChild(svgPath);

    // const svgContainer = document.createElement('span');
    // svgContainer.id = "svgContainer"
    // svgContainer.innerHTML = homesvg


    const homeBtn = document.createElement("button");
    homeBtn.innerHTML = "Home"; // Changed text to "Home"
    homeBtn.classList.add("navBtn");
    homeBtn.id = "homeBtn";
    homeBtn.style.display = "flex"; // Use flexbox for layout
    homeBtn.style.alignItems = "center";
    homeBtn.append(homeSvg)


    const searchBtn = document.createElement("button");
    searchBtn.innerHTML = "Search";
    searchBtn.classList.add("navBtn");



    const searchSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    searchSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    searchSvg.setAttribute("viewBox", "0 0 24 24");
    searchSvg.setAttribute("height", "30px"); // Set height
    searchSvg.setAttribute("width", "30px"); // 
    searchSvg.style.marginLeft = "5px";
    const svgsearch = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgsearch.textContent = "home";
    searchSvg.appendChild(svgsearch);

    // Create a path element within the SVG
    const svgPath6 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath6.setAttribute("d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z");
    searchSvg.appendChild(svgPath6);
    searchBtn.style.display = "flex"; // Use flexbox for layout
    searchBtn.style.alignItems = "center";
    searchBtn.append(searchSvg)





    // leftDiv.appendChild(svgContainer);

    const navbar = document.querySelector(".navbar");
    navbar.append(homeBtn, personalBtn, schoolBtn, workBtn, fitnessBtn, searchBtn);

    return homeBtn, personalBtn, schoolBtn, workBtn, fitnessBtn, searchBtn
}

createButtons();

const homeBtn = document.querySelector("#homeBtn")
console.log(homeBtn)

homeBtn.addEventListener("click", () => {
    console.log("hey")



    home()
})






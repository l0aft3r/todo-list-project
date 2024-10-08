import logoSVG from "../icons/heart-half-outline.svg";
import todaySVG from "../icons/calendar-number-outline.svg";
import upcomingSVG from "../icons/calendar-outline.svg";
import createSVG from "../icons/add-outline.svg";
import getStartedSVG from "../icons/undraw_experience_design_re_dmqq.svg";
import binSVG from "../icons/trash-outline.svg";

import { format } from "date-fns";

export default loadIcons
export {emptyMainInterface, getStarted, createProjectDialog, createToDoDialog, closeDialog, getValues, createProject, editProjectUI, removeProject, todoMainInterfaceSetup, unselect, editProjectDialog, editToDoDialog}

function loadIcons() {
    const logo = document.querySelector("#logo>img");
    logo.src = logoSVG;
    logo.classList.add("svg-logo");
    logo.alt = "Half filled heart icon";

    const todayIcon = document.querySelector("#today>img");
    todayIcon.src = todaySVG;
    todayIcon.classList.add("svg-logo-h2");
    todayIcon.alt = "Calendar displaying 31 icon";

    const upcomingIcon = document.querySelector("#upcoming>img");
    upcomingIcon.src = upcomingSVG;
    upcomingIcon.classList.add("svg-logo-h2");
    upcomingIcon.alt = "Calendar icon";

    const createIcon = document.querySelector("#create>button>img");
    createIcon.src = createSVG;
    createIcon.classList.add("svg-logo-h2");
    createIcon.classList.add("icon");
    createIcon.alt = "Plus symbol icon";
}

function emptyMainInterface() {
    const body = document.querySelector("body");
    let mainInterface = document.querySelector("#main-interface");
    mainInterface.remove();
    mainInterface = document.createElement("div");
    mainInterface.id = "main-interface";
    body.appendChild(mainInterface);
}

function unselect() {
    const selected = document.querySelector(".selected");
    if (selected) selected.classList.remove("selected");
}

function todoMainInterfaceSetup(project) {
    const form = document.querySelector("form");
    form.id = "createTodo";
    const mainInterface = document.querySelector("#main-interface");
    const todoInterface = document.createElement("div");
    todoInterface.id = "todo-interface"

    const h2 = document.createElement("h2");
    h2.textContent = project.title;
    const description = document.createElement("p");
    description.textContent = project.description;

    const p = document.createElement("p");
    p.textContent = `${project.todos.length} tasks`;
    if (project.todos.length === 1) {
        p.textContent = `${project.todos.length} task`;
    }

    const createBtn = document.createElement("input");
    createBtn.type = "button";
    createBtn.value = "Add task";
    createBtn.id = "createTodoBtn";

    todoInterface.append(h2, description, p);
    const todos = document.createElement("div");
    todos.id = "todos";
    for (const todo of project.todos) {
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");
        const todoTitle = document.createElement("h2");
        todoTitle.textContent = todo.title;
        const todoDescription = document.createElement("p");
        todoDescription.textContent = todo.description;
        const  dueDate = document.createElement("p");
        (todo.dueDate)?dueDate.textContent = `Due: ${todo.dueDate}`:dueDate.textContent = "No Due-Date Specified";
        const priority = document.createElement("p");
        priority.textContent = `Priority: ${todo.priority}`;
        const tickedBtn = document.createElement("button");
        tickedBtn.classList.add("tick-btn");
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-to-do-btn");
        editBtn.textContent = "Edit Task";

        todoContainer.append(todoTitle, todoDescription, dueDate, priority, tickedBtn, editBtn);
        todos.appendChild(todoContainer);
    }

    todoInterface.append(todos, createBtn);
    mainInterface.appendChild(todoInterface);
}

function getStarted() {
    const mainInterface = document.querySelector("#main-interface");
    const graphic = document.createElement("img");
    graphic.src = getStartedSVG;

    const quote = document.createElement("h2");
    quote.textContent = "Every journey starts with a single step.";
    quote.classList.add("quote1");
    const quote2 = document.createElement("h2");
    quote2.classList.add("quote2");
    quote2.textContent = "Get Started."

    mainInterface.append(graphic, quote, quote2);

}

function createProjectDialog() {
    const dialog = document.querySelector("dialog");
    const title = document.querySelector('form>h1');
    title.textContent = "Create Project";
    const priorityLabel = document.querySelector('label[for="priority"]');
    priorityLabel.style.display = "none";
    const priority = document.querySelector("#priority");
    priority.style.display = "none";
    const dueDate = document.querySelector("#project-date");
    dueDate.style.display = "none";
    const dueDateLabel = document.querySelector('label[for="project-date"]');
    dueDateLabel.style.display = "none";
    const form = document.querySelector("form");
    const description = document.querySelector("#project-description");
    description.display = "none";
    const descriptionLabel = document.querySelector('label[for="project-description"]');
    descriptionLabel.display = "none";
    const createProjectBtn = document.querySelector("#createProjectBtn");
    createProjectBtn.value = "Create";
    form.id = "createProject";
    dialog.showModal();
}

function createToDoDialog() {
    const dialog = document.querySelector("dialog");
    const title = document.querySelector('form>h1');
    title.textContent = "Add Task";
    const priorityLabel = document.querySelector('label[for="priority"]');
    priorityLabel.style.display = "inline";
    const priority = document.querySelector("#priority");
    priority.style.display = "block";
    const dueDateLabel = document.querySelector('label[for="project-date"]');
    dueDateLabel.style.display = "block";
    const dueDate = document.querySelector("#project-date");
    dueDate.style.display = "block";
    const description = document.querySelector("#project-description");
    description.display = "block";
    const descriptionLabel = document.querySelector('label[for="project-description"]');
    descriptionLabel.display = "block";
    const createProjectBtn = document.querySelector("#createProjectBtn");
    createProjectBtn.value = "Create";
    const form = document.querySelector("form");
    form.id = "createToDo";
    dialog.showModal();
}

function getValues() {
    const title = document.querySelector("#project-title").value;
    const description = document.querySelector("#project-description").value;
    const dueDate = document.querySelector("#project-date").value;
    const priority = document.querySelector("#priority").value;

    return {title, description, dueDate, priority};
}

function closeDialog() {
    const dialog = document.querySelector("dialog");
    dialog.close();
}

function createProject(project) {
    const projectsUi = document.querySelector("#projects");

    const div = document.createElement("div");
    div.classList.add("project");
    const h2 = document.createElement("h2");
    h2.textContent = project.title;
    const btn = document.createElement("button");
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit Project";
    editBtn.classList.add("edit-project-btn");
    const img = document.createElement("img");

    img.src = binSVG;
    img.alt = "Icon of trash can";

    btn.appendChild(img);
    div.appendChild(h2);
    div.appendChild(btn);
    div.appendChild(editBtn);
    projectsUi.appendChild(div);
}

function editProjectUI(projectElement, projectTitle) {
    projectElement.firstChild.textContent = projectTitle;
}

function removeProject(projectElement) {
    projectElement.remove();
}

function editProjectDialog(project) {
    createProjectDialog();
    
    const title = document.querySelector('form>h1');
    title.textContent = "Edit Project";
    const projectTitle = document.querySelector("#project-title");
    projectTitle.value = project.title;
    const projectDescription = document.querySelector("#project-description");
    projectDescription.value = project.description;
    const createProjectBtn = document.querySelector("#createProjectBtn");
    createProjectBtn.value = "Confirm";
    const form = document.querySelector("form");
    form.id = "editProject";
}

function editToDoDialog(toDo) {
    createToDoDialog();
    const title = document.querySelector('form>h1');
    title.textContent = "Edit Task";
    const projectTitle = document.querySelector("#project-title");
    projectTitle.value = toDo.title;
    const projectDescription = document.querySelector("#project-description");
    projectDescription.value = toDo.description;
    const projectDate = document.querySelector("#project-date");
    projectDate.value = format(Date(toDo.dueDate), ("yyyy-MM-dd"));
    const priority = document.querySelector("#priority");
    priority.value = toDo.priority;
    const createProjectBtn = document.querySelector("#createProjectBtn");
    createProjectBtn.value = "Confirm";
    const form = document.querySelector("form");
    form.id = "editToDo";
}
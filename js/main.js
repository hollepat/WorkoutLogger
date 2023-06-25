//import './statsWindow.js';

// exercises for options
const exercises = [
    "Benchpress",
    "Deadlift",
    "Squat",
    "Romanian deadlift",
    "Bulgraina split squat",
    "Biceps curls",
    "Hammer curls",
    "Triceps extension",
    "French press",
    "Hack squat",
    "Smith machine squat",
    "Push ups",
    "Pull ups",
    "Plank"
];


// create opitons for specific select
function createSelectOption(exercises, select) {

    // place holder option
    let o = document.createElement("option");
    o.innerText = "Select exercise"
    o.value = ""
    select.appendChild(o);

    exercises.sort();

    // create from list of options
    for (let e of exercises) {
        o = document.createElement("option")
        o.value = e
        o.innerText = e
        select.appendChild(o)
    }

}

// create options for all selects regarding choosing exercise
function createSelectOptions(exercises) {

    const selectEl = document.getElementsByClassName("exercises");
    for (const el of selectEl) {
        createSelectOption(exercises, el);
    }
}

// swithc current window
function toggleWindow(currentWindow, nextWindow) {
    var current = document.getElementById(currentWindow);
    var next = document.getElementById(nextWindow);

    current.classList.remove("active-window");
    next.classList.add("active-window");
}



// ---------- initialize components ----------

createSelectOptions(exercises);

// initialized data from local storage
const initRecords = JSON.parse(localStorage.getItem("records"));
let exerciseData = new ExerciseRecords( (initRecords === null || initRecords._exercises === undefined) ? [] : recreatePrototypes(initRecords._exercises));
createLogRecords(exerciseData.getExercises('all'));

// load from browser's localStorage data
const initWorkoutList = JSON.parse(localStorage.getItem("workouts"));
let workoutList = new WorkoutList( (initWorkoutList === null) ? [] : initWorkoutList._list);
createWorkouts(workoutList.getWorkoutList());




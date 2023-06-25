
routineList = [
    { 
        routineName: "Legs",
        exercises: [{exerciseName: "Bulgarian Split Squat", sets: 3, reps: 5, weight: 40 }]
    },
    { 
        routineName: "Back",
        exercises: [{exerciseName: "Pull Up", sets: 3, reps: 5, weight: 25 }]
    }
]

// navigation
const list = document.querySelectorAll('.nav-item');
function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) => item.addEventListener('click', activeLink))



// display window

function createWindow() {
    
}




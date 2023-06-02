
let cnt = 0


// create workout in Workout logger screen
function createWorkout(name, exercises) {
    
    // get container
    const container = document.getElementById("workout-container");

    // create workout
    const workoutEl = document.createElement('div');
    workoutEl.classList.add("workout");
    workoutEl.addEventListener('click', (e) => {
        toggleWorkoutContent(workoutEl);
    })

    // add workout name
    const nameEl = document.createElement('h3');
    nameEl.classList.add("workout-header");
    nameEl.innerText = name
    workoutEl.append(nameEl);

    // add content div
    const contentEl = document.createElement('div');
    contentEl.className = "workout-content"
    workoutEl.append(contentEl);

    // add exercises
    for (const e of exercises) {
        console.log(e)
        // exercise div
        const exerciseEl = document.createElement('div');
        exerciseEl.className = "workout-exercise"
        exerciseEl.innerText = e.exercise;
        
        // create sets-reps div
        const setsrepsEl = document.createElement('div');
        setsrepsEl.classList.add("sets-reps");
        setsrepsEl.innerText = "Sets: " + e.sets + ", Reps: " + e.reps
        exerciseEl.append(setsrepsEl);

        contentEl.appendChild(exerciseEl);

    }

    container.appendChild(workoutEl)
}

// workout session -- testing
let exerciseName1 = 'Legs';
let exercisesList1 = [
    {exercise: 'Squat', reps: 6, sets: 5},
    {exercise: 'Bulgarian Split Squat', reps: 6, sets: 5}
]

// workout session -- testing
let exerciseName2 = 'Arms';
let exercisesList2 = [
    {exercise: 'Biceps Curls', reps: 6, sets: 5},
    {exercise: 'Triceps Extension', reps: 6, sets: 5}
]

createWorkout(exerciseName1, exercisesList1);
createWorkout(exerciseName2, exercisesList2);

function toggleWorkoutContent(workout) {
    const content = workout.lastElementChild;
    content.style.display = (content.style.display === 'none') ? 'block' : 'none';
}
  
function addWorkoutRow() {
    var workoutContainer = document.getElementById('workout-container');
    var newWorkoutRow = document.createElement('div');
    newWorkoutRow.classList.add('workout-row');
    
    var newWorkoutHeader = document.createElement('div');
    newWorkoutHeader.classList.add('workout-header');
    newWorkoutHeader.innerText = 'New Workout';
    newWorkoutHeader.onclick = function() {
      toggleWorkoutContent(this);
    };
    
    var newWorkoutContent = document.createElement('div');
    newWorkoutContent.classList.add('workout-content');
    
    newWorkoutRow.appendChild(newWorkoutHeader);
    newWorkoutRow.appendChild(newWorkoutContent);
    workoutContainer.insertBefore(newWorkoutRow, document.getElementById('add-workout-row'));
}
  

let cnt = 0


// create workout in Workout logger screen
function createWorkouts(workoutList) {
    
    // get container
    const container = document.getElementById("workout-container");

    container.innerHTML = '';

    for (const w of workoutList) {
        // create workout
        const workoutEl = document.createElement('div');
        workoutEl.classList.add("workout");
        workoutEl.addEventListener('click', (e) => {
            toggleWorkoutContent(workoutEl);
        })

        // add workout name
        const nameEl = document.createElement('h3');
        nameEl.classList.add("workout-header");
        nameEl.innerText = w.nameW;
        workoutEl.append(nameEl);

        // add content div
        const contentEl = document.createElement('div');
        contentEl.className = "workout-content"
        workoutEl.append(contentEl);

        // add exercises
        for (const e of w.exercises) {
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

        contentEl.style.display = 'none'

        container.appendChild(workoutEl)
    }
}

// state of all workouts
const workoutsList = [
    {
        nameW: 'Legs',
        exercises : [
            {exercise: 'Squat', reps: 6, sets: 5},
            {exercise: 'Bulgarian Split Squat', reps: 6, sets: 5}
        ]
    },
    {
        nameW: 'Arms',
        exercises: [
            {exercise: 'Biceps Curls', reps: 6, sets: 5},
            {exercise: 'Triceps Extension', reps: 6, sets: 5}
        ]
    }
    
]

createWorkouts(workoutsList);


// display workout content when clicked on title
function toggleWorkoutContent(workout) {
    const content = workout.lastElementChild;
    content.style.display = (content.style.display === 'none') ? 'block' : 'none';
}
  

function togglePopUp() {
    const w = document.querySelector("#popup-container");
    // when .display property not initialized
    if (w.style.display == "") {
        w.style.display = 'none';
    }
    w.style.display = (w.style.display === 'none') ? 'block' : 'none';
}

function addExercise(event) {

    // prevent submission
    event.preventDefault();

    // Create a new exercise container
    const exercisesContainer = document.getElementById('exercisesContainer');
    const exerciseContainer = document.createElement('form');
    exerciseContainer.className = 'exercise-container';

    // Create exercise input element

    // exercise select
    const container1 = document.createElement('div');
    container1.classList.add("form-group-pop-up");
    const exerciseLabel1 = document.createElement('label');
    exerciseLabel1.innerText = 'Exercise:';
    const exerciseSelect = document.createElement('select');
    exerciseSelect.classList.add('exercises');
    exerciseSelect.name = "exercise[]"
    container1.appendChild(exerciseLabel1);
    container1.appendChild(exerciseSelect);

    // reps
    const container2 = document.createElement('div');
    container2.classList.add("form-group-pop-up");
    const exerciseLabel2 = document.createElement('label');
    exerciseLabel2.innerText = 'Reps:';
    const exerciseInput1 = document.createElement('input');
    exerciseInput1.type = "number"
    exerciseInput1.name = "reps[]"
    container2.appendChild(exerciseLabel2);
    container2.appendChild(exerciseInput1);

    // sets
    const container3 = document.createElement('div');
    container3.classList.add("form-group-pop-up");
    const exerciseLabel3 = document.createElement('label');
    exerciseLabel3.innerText = 'Sets:';
    const exerciseInput2 = document.createElement('input');
    exerciseInput2.type = "number"
    exerciseInput2.name = "sets[]"
    container3.appendChild(exerciseLabel3);
    container3.appendChild(exerciseInput2);

    // Append exercise elements to the container
    exerciseContainer.appendChild(document.createElement('hr'));
    exerciseContainer.appendChild(container1);
    exerciseContainer.appendChild(container2);
    exerciseContainer.appendChild(container3);
    exercisesContainer.appendChild(exerciseContainer);
    
    createSelectOptions(exercises);
  }

  function saveData() {
    // Get all exercise input values from the pop-up
    const nameInput = document.querySelector('input[name="workout-name"');
    const exerciseInputs = document.querySelectorAll('select[name="exercise[]"]');
    const repsInputs = document.querySelectorAll('input[name="reps[]"]');
    const setsInputs = document.querySelectorAll('input[name="sets[]"]');
    let exercises = [];
    let reps = [];
    let sets = [];

    // Collect the input values
    exerciseInputs.forEach(function(input) {
      exercises.push(input.value);
    });
    repsInputs.forEach(function(input) {
        reps.push(input.value);
    });
    setsInputs.forEach(function(input) {
        sets.push(input.value);
    });

    // at least name of exercise has to be filled
    exercises = exercises.filter((e) => {
        return e != ""
    })

    // at lest one exercise should be filled
    if (exercises.length === 0 || nameInput.value == "") { return; }

    const newExerciseList = [];
    for (let i = 0; i < exercises.length; i++) {
        const newExercise = { exercise: exercises[i], reps: reps[i], sets: sets[i] }
        newExerciseList.push(newExercise);
    }
    
    const newWorkout = {}
    newWorkout.nameW = nameInput.value;
    newWorkout.exercises = newExerciseList;
    workoutsList.push(newWorkout)
    createWorkouts(workoutsList);

    // Close the pop-up
    togglePopUp();
  }
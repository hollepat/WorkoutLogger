
let cnt = 0



// WorkoutList class using prototype
let WorkoutList = function(init) {
    this._list = init;
}

WorkoutList.prototype.getWorkoutList = function () {
    return this._list;
}

WorkoutList.prototype.addWorkout = function (workout) {
    this._list.push(workout);
}

WorkoutList.prototype.removeWorkout = function (workoutName) {
    let newWorkoutList = this._list.filter((el) => {
        if (el.nameW === workoutName) { return false }
        return true
    })
    this._list = newWorkoutList;
}


let workoutList = new WorkoutList(
    [
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
)

createWorkouts(workoutList.getWorkoutList());


// create workout in Workout logger screen
function createWorkouts(workouts) {
    
    // get container
    const container = document.getElementById("workout-container");

    container.innerHTML = '';

    for (const w of workouts) {
        // create workout
        const workoutEl = document.createElement('div');
        workoutEl.classList.add("workout");

        // add workout name
        const nameEl = document.createElement('h3');
        nameEl.classList.add("workout-header");
        nameEl.innerText = w.nameW;
        nameEl.addEventListener('click', (e) => {
            toggleWorkoutContent(workoutEl);
        })

        // delete button
        const deleteEl = document.createElement('span');
        deleteEl.classList.add('deleteButton');
        deleteEl.innerHTML = '<svg class="cross-icon" style="width: 1.8em; height: 1.8em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  /></svg>';
        deleteEl.addEventListener('click', (e) => {
            let workoutName = w.nameW;
            workoutList.removeWorkout(workoutName);
            console.log(workoutList);
            console.log(workoutName);
            createWorkouts(workoutList.getWorkoutList());
        });
        
        const headerEl = document.createElement('header');
        headerEl.append(nameEl);
        headerEl.append(deleteEl);
        workoutEl.append(headerEl);

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

    // Create exercise input elements
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
    workoutList.addWorkout(newWorkout);
    createWorkouts(workoutList.getWorkoutList());

    // Close the pop-up
    togglePopUp();
  }
class ExerciseRecords {
    _exercises;
    _filter;

    constructor(initExercises) {
        this._exercises = initExercises;
    }

    // arrow function declaration --> takt this from context, do not binf their own this
    addExercise = function (exercise) {
        this._exercises.push(exercise);
    };

    getExercises = function (filter) {
        this._filter = filter;
        return this._exercises.filter((exercise) => {
        if (this._filter == "all") {
            return true;
        } else {
            return this._filter == exercise.name;
        }
        });
    };
}

// take data from local storage and recreate Date prototype
function recreatePrototypes(data) {
    return data.map((item) => {
        return {
            name: item.name,
            date: new Date(item.date),
            weight: item.weight,
            sets: item.sets,
            reps: item.reps
        };
    });
}

function saveRecordsToLocalStorage() {
    localStorage.setItem("records", JSON.stringify(exerciseData));
}

// hide warning
function resetWarnings() {
    const elements = document.getElementsByClassName("warning");
    for (const e of elements) {
        e.remove();
    }
}

// show warning
function createWarningLabel(el, message) {
    
    if (el.nextSibling != null && el.nextSibling.className == "warning") {
        return;
    }
    
    const w = document.createElement("label");
    w.className = "warning";
    w.innerText = message;
    el.after(w);
}

function createLogRecords(records) {
    for (const r of records) {
        addRowToTable(r.name, r.reps, r.sets, r.weight)
    }
}

function addRowToTable(exercise, reps, sets, weight) {

    // new row
    const tableBody = document.getElementById("workoutTableBody");
    const newRow = tableBody.insertRow();

    // new cell for name
    const exerciseCell = newRow.insertCell();
    exerciseCell.textContent = exercise;

    // new cell for row
    const repsCell = newRow.insertCell();
    repsCell.textContent = reps;

    // new cell for set
    const setsCell = newRow.insertCell();
    setsCell.textContent = sets;

    // new cell for weight
    const weightCell = newRow.insertCell();
    weightCell.textContent = weight;
}

function deleteAllRecords() {
    exerciseData = new ExerciseRecords([])
    const tableBody = document.getElementById("workoutTableBody");
    tableBody.innerHTML = ""
    saveRecordsToLocalStorage()
}

// log workout
function logWorkout(event) {

    // prevent submission
    event.preventDefault();

    // reset warning of invalid input
    resetWarnings();

    // get form values and check validity
    const exerciseEl = document.getElementById("exercise");
    const exercise = exerciseEl.value;
    if (exercise == "") {
        createWarningLabel(exerciseEl, "Select exercise!")
        return;
    }
    const repsEl = document.getElementById("reps");
    const reps = document.getElementById("reps").value;
    if (reps <=0 ) {
        createWarningLabel(repsEl, "Choose number greater than 0!");
        return;
    }
    const setsEl = document.getElementById("sets");
    const sets = document.getElementById("sets").value;
    if (sets <=0 ) {
        createWarningLabel(setsEl, "Choose number greater than 0!");
        return;
    }
    const weightEl = document.getElementById("weight");
    const weight = document.getElementById("weight").value;
    if (weight <=0 ) {
        createWarningLabel(weightEl, "Choose number greater than 0!");
        return;
    }

    // add new row for table
    addRowToTable(exercise, reps, sets, weight)

    // store new exercise record
    const newExercise = {
        name: exercise,
        date: new Date(),
        weight: parseFloat(weight),
        sets: sets,
        reps: reps
    };
    exerciseData.addExercise(newExercise);

    // update records in local storage
    saveRecordsToLocalStorage();

    // update chart
    updateChart();
}

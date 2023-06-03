
// exercises for options
const exercises = [
    "Benchpress",
    "Deadlift",
    "Squat",
    "Romanian deadlift",
    "Bulgraina split squat",
    "Biceps curls",
    "Hammer curls"
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

createSelectOptions(exercises);

class State {
    #exercises;
    #filter;

    constructor(initExercises) {
        this.#exercises = initExercises;
    }

    // arrow function declaration --> takt this from context, do not binf their own this
    addExercise = function (exercise) {
        this.#exercises.push(exercise);
    };

    // define their own this depending on how they are called
    setFilter(filter) {
        this.#filter = filter;
    }

    getExercises = function (filter) {
        this.#filter = filter;
        return this.#exercises.filter((exercise) => {
        if (this.#filter == "all") {
            return true;
        } else {
            return this.#filter == exercise.name;
        }
        });
    };
}

const exerciseData = new State([
    { name: "Biceps curls", date: new Date(), weight: 11 },
    { name: "Benchpress", date: new Date(), weight: 12 },
    { name: "Benchpress", date: new Date(), weight: 13 },
    { name: "Biceps curls", date: new Date(), weight: 15 },
]);

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

    const newExercise = {
        name: exercise,
        date: new Date(),
        weight: parseFloat(weight),
    };

    exerciseData.addExercise(newExercise);

    updateChart();
}

// swithc current window
function toggleWindow(currentWindow, nextWindow) {
    var current = document.getElementById(currentWindow);
    var next = document.getElementById(nextWindow);

    current.classList.remove("active-window");
    next.classList.add("active-window");
}

// create chart
function updateChart() {
  // get window for charts
  const window = document.getElementById("statsWindow");

  // get chosen exercise
  const selectedExercise = document.getElementById("exerciseStats").value;
  const data = exerciseData.getExercises(selectedExercise);

  // remove old one if there is
  let oldChartContainer = document.getElementById("chartContainer");
  if (oldChartContainer != null) {
    oldChartContainer.remove();
  }

  // create new canvas
  let chartContainer = document.createElement("canvas");
  chartContainer.id = "chartContainer";
  chartContainer.style.width = "1vw";
  chartContainer.style.height = "1.2vh";
  window.appendChild(chartContainer);

  // no exercise selected
  if (data.length === 0) {
    chartContainer.style.display = "none";
    return;
  }

  chartContainer.style.display = "block";

  // create data for chart
  let labels = data.map((item) => item.date.toLocaleTimeString());
  let weights = data.map((item) => item.weight);

  // get 2d drawing context for canvas
  let ctx = chartContainer.getContext("2d");

  // create chart
  new Chart(ctx, {
        type: "line",
        data: {
        labels: labels,
        datasets: [
            {
            label: "Weight (kg)",
            data: weights,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 1,
            },
        ],
        },
        options: {
        scales: {
            y: {
            beginAtZero: true,
            },
        },
        },
    });
}

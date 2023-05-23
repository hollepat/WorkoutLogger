var exerciseData = {};

function logWorkout() {
  var exercise = document.getElementById("exercise").value;
  var reps = document.getElementById("reps").value;
  var sets = document.getElementById("sets").value;
  var weight = document.getElementById("weight").value;

  var tableBody = document.getElementById("workoutTableBody");
  var newRow = tableBody.insertRow();

  var exerciseCell = newRow.insertCell();
  exerciseCell.textContent = exercise;

  var repsCell = newRow.insertCell();
  repsCell.textContent = reps;

  var setsCell = newRow.insertCell();
  setsCell.textContent = sets;

  var weightCell = newRow.insertCell();
  weightCell.textContent = weight;

  if (!exerciseData[exercise]) {
    exerciseData[exercise] = [];
  }

  exerciseData[exercise].push({
    date: new Date(),
    weight: parseFloat(weight),
  });

  updateChart();
}

function createWorkout() {
  var workoutName = document.getElementById("workoutName").value;
  var exerciseName = document.getElementById("exerciseName").value;
  var exerciseSets = document.getElementById("exerciseSets").value;
  var exerciseReps = document.getElementById("exerciseReps").value;
  var exercisePR = document.getElementById("exercisePR").value;

  var tableBody = document.getElementById("workoutTableBody");
  var newRow = tableBody.insertRow();

  var workoutNameCell = newRow.insertCell();
  workoutNameCell.textContent = workoutName;

  var exerciseNameCell = newRow.insertCell();
  exerciseNameCell.textContent = exerciseName;

  var setsCell = newRow.insertCell();
  setsCell.textContent = exerciseSets;

  var repsCell = newRow.insertCell();
  repsCell.textContent = exerciseReps;

  var prCell = newRow.insertCell();
  prCell.textContent = exercisePR;
}

function toggleWindow(currentWindow, nextWindow) {
  var current = document.getElementById(currentWindow);
  var next = document.getElementById(nextWindow);

  current.classList.remove("active-window");
  next.classList.add("active-window");
}

function updateChart() {
  var selectedExercise = document.getElementById("exerciseStats").value;
  var data = exerciseData[selectedExercise] || [];
  var chartContainer = document.getElementById("chartContainer");

  if (data.length === 0) {
    chartContainer.style.display = "none";
    return;
  }

  chartContainer.style.display = "block";

  var labels = data.map((item) => item.date.toDateString());
  var weights = data.map((item) => item.weight);

  var ctx = chartContainer.getContext("2d");

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
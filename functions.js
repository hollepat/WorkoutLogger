function logWorkout() {

    // read informations
    var exercise = document.getElementById('exercise').value;
    var reps = document.getElementById('reps').value;
    var sets = document.getElementById('sets').value;
    var difficulty = document.getElementById('difficulty').value;
    
    // create a new record (row)
    var tableBody = document.getElementById('workoutTableBody');
    var newRow = tableBody.insertRow();
    
    // write in exercise
    var exerciseCell = newRow.insertCell();
    exerciseCell.textContent = exercise;
    
    // write in number of reps
    var repsCell = newRow.insertCell();
    repsCell.textContent = reps;
    
    // write in number of rows
    var setsCell = newRow.insertCell();
    setsCell.textContent = sets;
    
    // write in weight
    var weightCell = newRow.insertCell();
    weightCell.textContent = weight;
  }
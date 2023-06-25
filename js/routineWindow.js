function displayRoutineWindow() {

    // get window container
    const windowEl = document.querySelector('.window-container')
    windowEl.innerHTML = ''
    
    // Window for Routines content
    const sectionElWindow = document.createElement('section')
    sectionElWindow.classList.add('window')
    sectionElWindow.id = 'routines-window'

    // Heading
    const h2El = document.createElement('h2')
    h2El.innerText = "Your Routines!"

    // Container of Routines
    const routines_containerEl =  createRoutines()
    
    // append to html
    sectionElWindow.appendChild(h2El)
    sectionElWindow.appendChild(routines_containerEl)
    windowEl.appendChild(sectionElWindow)
}

function createRoutines() {

    // Container of Routines
    const container = document.createElement('div')
    container.id = "routines-container"

    // Routines
    for (const w of routineList) {

        // Create routine
        const routineEl = document.createElement('button');
        routineEl.classList.add("routine");
        routineEl.addEventListener('click', (e) => {
            // show routine in detail
        })

        // add workout name
        const routineNameEl = document.createElement('h3');
        routineNameEl.classList.add("routine-name");
        routineNameEl.innerText = w.routineName;
        routineEl.appendChild(routineNameEl)

        // // delete button
        // const deleteEl = document.createElement('span');
        // deleteEl.classList.add('deleteButton');
        // deleteEl.innerHTML = '<svg class="cross-icon" style="width: 1.8em; height: 1.8em;vertical-align: middle;fill: red;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  /></svg>';
        // deleteEl.addEventListener('click', (e) => {
        //     let workoutName = w.nameW;
        //     workoutList.removeWorkout(workoutName);
        //     createWorkouts(workoutList.getWorkoutList());
        // });
        
        // const headerEl = document.createElement('header');
        // headerEl.append(routineNameEl);
        // headerEl.append(deleteEl);
        // routineEl.append(headerEl);

        // // add content div
        // const contentEl = document.createElement('div');
        // contentEl.className = "workout-content"
        // routineEl.append(contentEl);

        // // add exercises
        // for (const e of w.exercises) {
        //     // exercise div
        //     const exerciseEl = document.createElement('div');
        //     exerciseEl.className = "workout-exercise"
        //     exerciseEl.innerText = e.exercise;

        //     // create sets-reps div
        //     const setsrepsEl = document.createElement('div');
        //     setsrepsEl.classList.add("sets-reps");
        //     setsrepsEl.innerText = "Sets: " + e.sets + ", Reps: " + e.reps
        //     exerciseEl.append(setsrepsEl);

        //     contentEl.appendChild(exerciseEl);

        // }

        container.appendChild(routineEl)

    }
    return container
}
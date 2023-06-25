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
    let labels = data.map((item) => item.date.toLocaleString());
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

// new

function displayStatsWindow() {
    // get window container
    const windowEl = document.querySelector('.window-container')
    windowEl.innerHTML = ''
    
    // Window for Routines content
    const sectionElWindow = document.createElement('section')
    sectionElWindow.classList.add('window')
    sectionElWindow.id = 'stats-window'

    // Heading
    const h2El = document.createElement('h2')
    h2El.innerText = "Check the progress, beast!"

    // append to html
    sectionElWindow.appendChild(h2El)
    windowEl.appendChild(sectionElWindow)
}
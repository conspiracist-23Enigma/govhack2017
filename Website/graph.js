function parseData(createGraph) {
	Papa.parse("../data/spanish-silver.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [{
			label: '# of Votes 1',
			data: [10, 19, 3, 5, 2, 3],
			backgroundColor: [
			  'rgba(255, 99, 132, 0.2)',
			  'rgba(255, 99, 132, 0.2)',
			  'rgba(255, 99, 132, 0.2)',
			  'rgba(255, 99, 132, 0.2)',
			  'rgba(255, 99, 132, 0.2)',
			  'rgba(255, 99, 132, 0.2)'
			],
			borderColor: [
			  'rgba(255,99,132,1)',
			  'rgba(255,99,132,1)',
			  'rgba(255,99,132,1)',
			  'rgba(255,99,132,1)',
			  'rgba(255,99,132,1)',
			  'rgba(255,99,132,1)'
			],
			borderWidth: 2
		  },
		  {
			label: '# of Votes 2',
			data: [15, 19, 3, 5, 2, 3],
			backgroundColor: [
			  'rgba(255, 159, 64, 0.2)',
			  'rgba(255, 159, 64, 0.2)',
			  'rgba(255, 159, 64, 0.2)',
			  'rgba(255, 159, 64, 0.2)',
			  'rgba(255, 159, 64, 0.2)',
			  'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
			  'rgba(255, 159, 64, 1)',
			  'rgba(255, 159, 64, 1)',
			  'rgba(255, 159, 64, 1)',
			  'rgba(255, 159, 64, 1)',
			  'rgba(255, 159, 64, 1)',
			  'rgba(255, 159, 64, 1)'
			],
			borderWidth: 2
		  }
		]
	  },
	  options: {
		scales: {
		  yAxes: [{
			stacked: true,
			ticks: {
			  beginAtZero: true
			}
		  }],
		  xAxes: [{
			stacked: true,
			ticks: {
			  beginAtZero: true
			}
		  }]

		}
	  }
	});

parseData(createGraph);
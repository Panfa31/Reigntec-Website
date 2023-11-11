// Your data for the graph (replace this with actual data)
const data = {
  labels: ["Jan 2022", "Feb 2022", "Mar 2022", "Apr 2022", "May 2022"],
  datasets: [
    {
      label: "Total Portfolio Value",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      data: [1000, 1500, 1200, 1800, 2000], // Replace with your actual portfolio values
    },
  ],
};

// Chart configuration
const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      x: {
        type: "category",
        labels: data.labels,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

// Create the chart
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, config);

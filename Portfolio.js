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

// Profit/Loss
const profitLoss = document.querySelector(".Porfit-loss");

// Function to calculate profit/loss
const calculateProfitLoss = (currentValue, previousValue) => {
  const difference = currentValue - previousValue;
  const percentage = ((difference / previousValue) * 100).toFixed(2);
  return { difference, percentage };
};

// Function to update profit/loss
const updateProfitLoss = () => {
  const currentAmounts = [2000, 1800, 1000]; // Replace with your actual current amounts
  const previousAmounts = [1900, 1700, 900]; // Replace with your actual previous amounts

  for (let i = 0; i < currentAmounts.length; i++) {
    const currentAmount = currentAmounts[i];
    const previousAmount = previousAmounts[i];
    const { difference, percentage } = calculateProfitLoss(
      currentAmount,
      previousAmount
    );

    const currentAmountElement =
      profitLoss.querySelectorAll(".current-amount")[i];
    const currentPercentageElement = profitLoss.querySelectorAll(
      ".current-percentage"
    )[i];

    currentAmountElement.textContent = `${currentAmount.toFixed(2)} ZAR`;

    if (difference > 0) {
      currentAmountElement.style.color = "green";
      currentPercentageElement.style.color = "green";
      currentPercentageElement.textContent = `+${percentage}%`;
    } else if (difference < 0) {
      currentAmountElement.style.color = "red";
      currentPercentageElement.style.color = "red";
      currentPercentageElement.textContent = `${percentage}%`;
    } else {
      currentAmountElement.style.color = "black";
      currentPercentageElement.style.color = "black";
      currentPercentageElement.textContent = `${percentage}%`;
    }
  }
};

updateProfitLoss();

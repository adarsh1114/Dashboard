import Chart from "@mindinventory/result-doughnut-chart";

export const apiData = {
  firstChartDataSetLabel: "%",
  secondChartDataSetLabel: "%",
  firstChart: [
    {
      name: "New",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      data: 30,
      secondChartData: [5, 15, 10],
      secondChartCenterText: "30%",
    },
    {
      name: "Bhojpuri",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      data: 15,
      secondChartData: [10, 2, 3],
      secondChartCenterText: "15%",
    },
    {
      name: "Punjabi",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      data: 35,
      secondChartData: [7, 18, 10],
      secondChartCenterText: "35%",
    },
    {
      name: "Old",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      data: 20,
      secondChartData: [2, 8, 10],
      secondChartCenterText: "20%",
    },
  ],
  secondChart: [
    {
      name: "Hindi Pop",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
    {
      name: "Sad",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
    },
    {
      name: "Mix",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
    },
  ],
  firstChartTipTitle: "Selected Grade:",
  secondChartTipTitle: "Result summary:",
  tipData: [
    {
      firstChartTip: "New",
      secondChartTip: "30% of people listen new songs.",
    },
    {
      firstChartTip: "Bhojpuri",
      secondChartTip: "15% of people listen Bhojpuri songs.",
    },
    {
      firstChartTip: "Punjabi",
      secondChartTip: "35% of people listen Punjabi songs.",
    },
    {
      firstChartTip: "old",
      secondChartTip: "20% of people listen old songs.",
    },
  ],
  labelExtraData: "Result",
  extraData: [
    {
      grade: "New",
      summary: "30% of people listen new songs.",
      date: "May 5, 2023", 
    },
    {
      grade: "Bhojpuri",
      summary: "15% of people listen Bhojpuri songs.",
      date:"May 5, 2023",
    },
    {
      grade: "Punjabi",
      summary: "35% of people listen punjabi songs.",
      date: "May 5, 2023",
    },
    {
      grade: "Old",
      summary: "20% of people listen old songs.",
      date: "May 5, 2023",
    },
  ],
};

const Total_play = () => {
  return <Chart data={apiData} />;
};

export default Total_play ;



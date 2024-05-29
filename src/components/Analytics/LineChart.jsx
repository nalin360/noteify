import React, { useEffect, useState } from 'react';
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend
);

export const options = {
 responsive: true,
 plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Number of Notes Created Over Time',
    },
 },
};
// This is a placeholder function. Replace it with your actual data fetching logic.
async function fetchNotesCount() {
    // Fetch data from Firestore and return an array of numbers representing the count of notes per month.
    // For example: [2, 5, 6, 1, 8, 9]
    return [2, 5, 6, 1, 8, 9]; // Placeholder data
   }
   
function LineChart() {
 const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Notes Created',
        data: [], // Initially empty, will be populated with fetched data
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
 });

 useEffect(() => {
    const fetchData = async () => {
      const notesCount = await fetchNotesCount(); // Fetch the data
      setChartData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          data: notesCount, // Update the data with the fetched count
        })),
      }));
    };

    fetchData();
 }, []); // Empty dependency array means this effect runs once on component mount

 return <Line options={options} data={chartData} />;
}

export default LineChart;

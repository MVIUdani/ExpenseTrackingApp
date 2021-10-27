import React,{useState,useEffect} from "react";
import {CanvasJSChart} from 'canvasjs-react-charts';
import Axios from "axios";

export default function Chart(){

	const [total, setTotal] = useState("");
	const [foods, setFoods] = useState("");
	const [movies, setMovies] = useState("");
	const [onlinesub, setOnlinesub] = useState("");
	const [travelling, setTravelling] = useState("");
	const [other, setOther] = useState("");

	useEffect(() => {
		Axios.get("http://localhost:8080/readTotal").then((response) => {
		  
			setTotal(response.data[0].Total_Sum);
		   
			});
	  }, []);

	  useEffect(() => {
		Axios.get("http://localhost:8080/readFoodexpense").then((response) => {
		  
			setFoods(response.data[0].Food_Expense);
		   
			});
	  }, []);

	  useEffect(() => {
		Axios.get("http://localhost:8080/readMovieexpense").then((response) => {
		  
			setMovies(response.data[0].Movie_Expense);
		   
			});
	  }, []);

	  useEffect(() => {
		Axios.get("http://localhost:8080/readOnlinesubexpense").then((response) => {
		  
			setOnlinesub(response.data[0].Onlinesub_Expense);
		   
			});
	  }, []);

	  useEffect(() => {
		Axios.get("http://localhost:8080/readTravellingexpense").then((response) => {
		  
			setTravelling(response.data[0].Travelling_Expense);
		   
			});
	  }, []);

	  useEffect(() => {
		Axios.get("http://localhost:8080/readOtherexpense").then((response) => {
		  
			setOther(response.data[0].Other_Expense);
		   
			});
	  }, []);
	
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Expense"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: Math.round(foods/total*100), label: "Foods" },
					{ y: Math.round(movies/total*100), label: "Movies" },
					{ y: Math.round(onlinesub/total*100), label: "Online Subscriptions" },
					{ y: Math.round(travelling/total*100), label: "Travelling" },
					{ y: Math.round(other/total*100), label: "Other" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			<br></br>
			<br></br>
			<br></br>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	
} 

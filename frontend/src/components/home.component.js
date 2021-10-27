import React,{useState,useEffect} from "react";
import Chart from "./chart.component";
import Axios from "axios";

export default function Home(){

const [total, setTotal] = useState("");

const [month, setMonth] = useState("");

const [income, setIncome] = useState("");

    useEffect(() => {
    Axios.get("http://localhost:8080/readTotal").then((response) => {
      
        setTotal(response.data[0].Total_Sum);
       
        });
  }, []); 

    useEffect(() => {
    Axios.get("http://localhost:8080/readMonth").then((response) => {
      
        setMonth(response.data[0].Month);
       
        });
  }, []);

    useEffect(() => {
    Axios.get("http://localhost:8080/readIncome").then((response) => {
      
        setIncome(response.data[0].income);
       
        });
  }, []);

return(
	<React.Fragment>
    {total >= income*0.9 ? 
    <div class="alert alert-warning" role="alert">
    <strong> Your total monthly expense is close to the limit...Remember about that😕 </strong>    
    </div>
    :
    <div class="alert alert-primary" role="alert">
    <strong> Your balance is remaining...You know you can buy anything😏 </strong>
    </div>
    }
  <div class="card text-white bg-secondary mb-3" style={{width: '18rem',margin: 'auto'}}>
  <div class="card-header">Month: {month}</div>
  <div class="card-body">
  <h4 class="card-title" style={{color:'black'}}>Monthly Income :</h4>
    <h5 class="card-text">Rs.{income}</h5>
    <h4 class="card-title" style={{color:'black'}}>Your Balance :</h4>
    <h5 class="card-text">Rs.{income-total}</h5>
    <h4 class="card-title" style={{color:'black'}}>Total Expense :</h4>
    <h5 class="card-text" >Rs.{total}</h5>
  </div>
</div>
<br></br>
<Chart />
</React.Fragment>

	);
}
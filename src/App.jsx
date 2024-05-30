
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {

//states for storing data

  const [principle,setPrinciple] = useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest]=useState(0)


  //for conditional rendering
  const[isPrinciple,setIsPrinciple]=useState(true)
  const[isRate,setIsRate]=useState(true)
  const[isYear,setIsYear]=useState(true)

  // console.log(principle);

  

  const validate=(e)=>{
    let value=e.target.value;
    let name=e.target.name
    console.log(e.target.value);
    console.log(e.target.name); //to identify the input field from which we get the data

    console.log(!!value.match(/^[0-9]*$/));

   if(!!value.match(/^[0-9]*$/)){
    
    if(name==='principle'){
      // console.log(name);
      setPrinciple(value)
      setIsPrinciple(true)
    }

    else if(name==='rate'){
      // console.log(name);
      setRate(value);
      setIsRate(true)
    }

    else{
      console.log(name);
      setYear(value)
      setIsYear(true)
    }
   }

   else{
    if(name==='principle'){
      // console.log(name);
      // setPrinciple(value)
      setIsPrinciple(false)
    }

    else if(name==='rate'){
      // console.log(name);
      // setRate(value);
      setIsRate(false)
    }

    else{
      // console.log(name);
      // setYear(value)
      setIsYear(false)
    }
   }



  }

  const handleReset=()=>{
      setPrinciple(0);
      setRate(0);
      setYear(0);
setInterest(0)
      setIsPrinciple(true);
      setIsRate(true);
      setIsYear(true);
  }

  // console.log(`principle:${principle},rate:${rate},year:${year}`);
const calculateValue=()=>{
  
  setInterest((principle*rate*year)/100);
  

}

  return (
    <>
     <div className="container text-center my-5  ">

<div className="row ">
  <div className="col-md-4"></div>

  <div style={{backgroundColor:'#ebecbe',borderRadius:'30px'}} className="col-md-4  p-2">
  <div className="si-calc mt-3 ">
        <h2>Simple Interest App</h2>
        <h6>Calculate your simple interest Easily</h6>

        <div style={{height:'240px'}} className="input  bg-warning mx-4 my-5 p-3 rounded shadow">
          <h1 className='mt-4'>₹{interest}</h1>
          <h5>Total Simple Interest</h5>
        </div>

        <div className="form m-3">
        <TextField id="outlined-basic" onChange={(e)=>{validate(e)}} value={principle || ""} className='my-2'  name='principle' label="₹ Principle Amount" variant="outlined" />

        {!isPrinciple && <p className='text-danger'>*Invalid Input</p>}

        <TextField id="outlined-basic" className='my-2' onChange={(e)=>{validate(e)}} name='rate' value={rate || ""}  label="Rate of Interest (p.a) %" variant="outlined" />

        {!isRate && <p className='text-danger'>*Invalid Input</p>}
        
        <TextField id="outlined-basic" className='my-2' name='year' onChange={(e)=>{validate(e)}} value={year || ""} label="Year (Yr)" variant="outlined" />

        {!isYear && <p className='text-danger'>*Invalid Input</p>}
          
        </div>

        <div className="button mb-3 ">

          <Button variant="contained" onClick={calculateValue} className='me-2' disabled={isPrinciple&&isRate&&isYear?false:true} color="success">
       Calculate
      </Button>
      <Button variant="outlined" onClick={handleReset} color="primary">
        Reset
      </Button>


        </div>
      </div>
  </div>

  <div className="col-md-4"></div>
</div>
    

     </div>
    </>
  )
}

export default App

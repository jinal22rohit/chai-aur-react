import {useEffect,UseState} from "react";

// we are creating custo hook means potano hook . to take input variable is compulsory
//data json format ma convert thay gayo // hve ene kaik hold karavisu // use usestate hook
// aa hook usestate thi direct value return karavi de che.  // regular variable use karisu toh problem thay jase 
function usecurrencyInfo(currency) 
{
   const[data,setData]=useState({})
   useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
    .then( (res)=> res.json()) // data json format ma convert thay gayo // hve ene kaik hold karavisu 
    .then((res) =>setData(res[currency]));     //res[currency] ---> (res)json format ni andar ni [currency] return karse. exchange rate j return karse
    console.log(data);
   },[currency])
   console.log(data);
   return data
   // compulsory return somethin in react  functions
    // aapde data return karaviye chiye etle aapde setdata ma value set nai kari sakta 
               // data ni value set karva  mate  export default usecurrencyinfo() lakhi su bcz aa function at the data return kare che so hu ya thi data lia laisa
}

export default usecurrencyInfo 
import React,{useState,useEffect} from 'react'
import axios from "axios"
const Demo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl =" https://syndigo.matsio.com/gilabs/api/?method=get";

//     // Fetch data from the API
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((responseData) => {
//         setData(responseData); 
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false); 
//       });
//   }, []);
        axios
        .get(apiUrl)
        .then((response) => {
        setData(response.data);
        setLoading(false);
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
        });
        }, []);




  return (
    <div className="Demo">
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h1>API Data</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )}
  </div>
  )
}

export default Demo

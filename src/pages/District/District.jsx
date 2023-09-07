import React, { useState, useEffect } from "react";
import { useLocation, Link ,useNavigate} from "react-router-dom";
import "../District/District.css";
import photo from "../../assets/pic.jpg";
import party from "../../assets/inc.svg";
import Card from "../../components/Card/Card";
import Popup from "../../components/Popup/Popup";
import Form from "../Form/Form";
import Login from "../Login/Login";

const District = (props) => {
  const [totalCount, setTotal] = useState(0);
  const [popper, setPopper] = useState(0);
  const [refresh,setRefresh]=useState(true)
  const [data, setData] = useState([]);

  const [buttonPopup,setPopup]=useState(false)
  const [loginPopup,setLogin]=useState(false)


  const [selectedDistrict, setSelectedDistrict] = useState("");
  const location = useLocation();
    const navigate =useNavigate()

   const refreshClick=()=>{
    setRefresh(true)
    window.location.reload();
  
   } 
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const district = queryParams.get("district");
    setSelectedDistrict(district);

    async function fetchData() {
      try {
        const response = await fetch(
          `https://syndigo.matsio.com/gilabs/api/?method=get`
        );
        const newRes = await response.json();
        const filteredData = newRes.filter((item) => item.district === district);
        console.log("data==",filteredData)
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [location.search]);


    
  const incrementTotal = () => {
    setTotal(totalCount + 1);
  };

  const decrementTotal = () => {
    setTotal(totalCount - 1);
  };

  const incrementPopper = () => {
    setPopper(3);
  };

  const incrementLogin = () => {
    setLogin(true);
  };


  

  return (
    <section className="district--section">
      <div className="dlink">
        <Link className="link--home" to="/">
          Home
        </Link>
        <span>&gt;</span>
        <Link to={`/district?district=${selectedDistrict}`} className="link--dis">
          {selectedDistrict}
        </Link>
      </div>

      <h1 className="district--name">{selectedDistrict}</h1>
      <div className="cards">
        {data.length === 0 ? (
          <h2 className="no-results">Nothing to display</h2>
        ) : (
          data.map((item) => (
            <Card
              key={item.id}
              photo={photo}
              name={item.name}
              party={party}
              voteCount={item.voteCount}
              desc={item.desc}
              incrementTotal={incrementTotal}
              decrementTotal={decrementTotal}
              incrementPopper={incrementPopper}
              incrementLogin={incrementLogin}
            />
          ))
        )}
      </div>

      <div className="btn-wrapper">
        <button className="nominee-btn" onClick={()=>{
          setPopup(true)
          setPopper(1)
        }}>
          Add Your Nominee
        </button>
      </div>

      {
      popper===1 ?(
        <Popup trigger={buttonPopup} setTrigger={setPopup}  refresh={refreshClick}>
          <Form />
        </Popup>
      ):" "}
  
  {
        popper===3?(
       
          <Popup trigger={loginPopup} setTrigger={setLogin} refresh={refreshClick}>
                 <Login />
        </Popup>
        ):" "
      
      }

    </section>
  );
};

export default District;


// <>
// {
//   popper===1?(
//     <Popup trigger={buttonPopup} setTrigger={setPopup}>
// <Form/>
// </Popup>
//   ):""}

// {
//   popper===3?(
 
//     <Popup trigger={loginPopup} setTrigger={setLogin}>
//            <Login/>
//   </Popup>
//   ):" "

// }
  
// </>

// </section>
// );
// };
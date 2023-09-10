import React, { useState, useEffect,useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import "../District/District.css";
import photo from "../../assets/pic.jpg";
import party from "../../assets/inc.svg";
import Card from "../../components/Card/Card";
import Popup from "../../components/Popup/Popup";
import Form from "../Form/Form";
import Login from "../Login/Login";
import axios from "axios";

const District = (props) => {
  const [totalCount, setTotal] = useState(0);
  const [popper, setPopper] = useState(0);
  const [data, setData] = useState([]);
  const [buttonPopup, setPopup] = useState(false);
  const [loginPopup, setLogin] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [maxVoteCount, setMaxVoteCount] = useState(0);
  const [isLoading, setLoading] = useState(true); // Add loading state
  const location = useLocation();

  const refreshClick = () => {
    window.location.reload();
  };

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
        const filteredData = newRes.filter((item) => item.district === selectedDistrict);
        setData(filteredData);
    console.log("Filtered Data",filteredData)
        // Calculate maxVoteCount by finding the max vote in the data
        const newMaxVoteCount = Math.max(
          ...filteredData.map((item) => item.voteCount)
        );
        setMaxVoteCount(newMaxVoteCount);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    }

    fetchData();

    // Only call the hook when the district changes
    const dependencyArray = [selectedDistrict, location.search];
  }, [selectedDistrict, location.search]);

  const calculateMaxVoteCount = () => {
    return data.reduce(
      (max, card) => (card.voteCount > max ? card.voteCount : max),
      0
    );
  };

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

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelected = (item) => {
    setSelectedItem(item);
  };

  const voteInc=()=>{
    console.log("hepp",selectedItem)

    const apiUrl = `https://syndigo.matsio.com/gilabs/api/?method=voteUpdate&id=${selectedItem.id}&voteCount=${++selectedItem.voteCount}`;
    axios
    .post(apiUrl)
    .then((response) => {

      console.log('API response:', response.data);

      setVoteCount(voteCount + 1);
    })
    .catch((error) => {
      console.error('API error:', error);
    });
};

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => b.voteCount - a.voteCount);
  }, [data]);

 
return (
  <section className="district--section">
    <div className="dlink">
      <Link className="link--home" to="/">
        Home
      </Link>
      <span>&gt;</span>
      <Link
        to={`/district?district=${selectedDistrict}`}
        className="link--dis"
      >
        {selectedDistrict}
      </Link>
    </div>

    <h1 className="district--name">{selectedDistrict}</h1>
    <div className="cards">
      {isLoading ? (
        <h2 className="no-results">Loading...</h2>
      ) : data.length === 0 ? (
        <h2 className="no-results">Nothing to display</h2>
      ) : (
        <>
    
          {sortedData.map((item) => {
  console.log("Logging props for Card component:", item);
  console.log("tittu",item.voteCount) 
  console.log("Maxu",maxVoteCount)// Add this console.log statement
  return (
    <Card
      key={item.id}
      photo={photo}
      name={item.name}
      party={item.party}
      voteCount={item.voteCount}
      desc={item.desc}
      incrementTotal={incrementTotal}
      decrementTotal={decrementTotal}
      incrementPopper={incrementPopper}
      incrementLogin={incrementLogin}
      item={item}
      handleSelected={handleSelected}
      maxVote={maxVoteCount}
    />
  );
})}

        </>
      )}
    </div>

    <div className="btn-wrapper">
      <button
        className="nominee-btn"
        onClick={() => {
          setPopup(true);
          setPopper(1);
        }}
      >
        Add Your Nominee
      </button>
    </div>

    {popper === 1 ? (
      <Popup
        trigger={buttonPopup}
        setTrigger={setPopup}
        refresh={refreshClick}
      >
        <Form />
      </Popup>
    ) : ""}

    {popper === 3 ? (
      <Popup
        trigger={loginPopup}
        setTrigger={setLogin}
        refresh={refreshClick}
      >
        <Login voteInc={voteInc} />
      </Popup>
    ) : ""}
  </section>
);

};
export default District
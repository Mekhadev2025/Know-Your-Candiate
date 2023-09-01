import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../District/District.css";
import photo from "../../assets/pic.jpg";
import party from "../../assets/inc.svg";
import Card from "../../components/Card/Card";
import Popup from "../../components/Popup/Popup";
import Form from "../Form/Form";
import Login from "../Login/Login";

const District = (props) => {
  const [totalCount, setTotal] = useState(0);
  const [popper, setPopper] = useState(false);
  const [data, setData] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const location = useLocation();

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

  const togglePopup = () => {
    setPopper(!popper);
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
              incrementPopper={togglePopup}
            />
          ))
        )}
      </div>

      <div className="btn-wrapper">
        <button className="nominee-btn" onClick={togglePopup}>
          Add Your Nominee
        </button>
      </div>

      {popper && (
        <Popup trigger={popper} setTrigger={togglePopup}>
          <Form />
        </Popup>
      )}

      {/* Your login popup logic can be implemented similarly */}
    </section>
  );
};

export default District;

/* eslint-disable */
import { useDispatch } from "react-redux";
import { bookRocket, cancelRocket } from "../Redux/rockets/rocket";

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  const bookIURocket = () => {
    dispatch(bookRocket(rocket.id));
  }
  const cancelUIROCket = () => {
    dispatch(cancelRocket(rocket.id));
  }
  return (
    <li className="rocket-item" key={rocket.id}>
      <div className="rocket-img"><img src={rocket.flickr_images} alt={rocket.name} /></div>
      <div className="rocket-description">
        <h2>{rocket.rocket_name}</h2>
        <p>
        {rocket.reserved && (<span className="success-rocket">Reserved</span>)}
        {rocket.description}
        </p>
        <div>
          {rocket.reserved === false || rocket.reserved === undefined ?
          <button type="button" className="available-button" onClick={bookIURocket}>Reserve Rocket</button> :
          <button type="button" className="reserved-button" onClick={cancelUIROCket}>Cancel Reservation</button>
          }
        </div>
      </div>
    </li>
  );
}

export default Rocket;
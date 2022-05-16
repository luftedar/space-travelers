import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMissions } from '../Redux/missions/missions';
import Mission from './Mission';
import '../styles/missions.scss';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 1) {
      dispatch(fetchAllMissions());
    }
  }, [dispatch]);
  return (
    <div className="missions">
      <table className="miss-table">
        <thead>
          <tr>
            <td className=" col-head">Mission</td>
            <td className=" col-head">Description</td>
            <td className=" col-head">Status</td>
            <td className=" col-head">Join</td>
          </tr>
        </thead>
        <tbody>
          {
          missions.map((mission) => (<Mission key={mission.mission_id} mission={mission} />))
        }
        </tbody>
      </table>
    </div>
  );
}

export default Missions;

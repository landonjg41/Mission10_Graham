import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler'; // bringing in the MarriottFood object to know what it is, to later map()

function BowlerList() {
  const [bowlerData, setData] = useState<Bowler[]>([]);

  // is only grabbing the data if it needs to
  useEffect(() => {
    const fetchData = async () => {
      const rsp = await fetch('https://localhost:7287/bowler/marlins-sharks'); //grabs data at this location
      const f = await rsp.json(); //stores data to 'f'
      setData(f);
    };
    fetchData();
  }, []); // other wise return an empty array

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowler Info</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerLastName}</td>
              <td>{b.team?.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;

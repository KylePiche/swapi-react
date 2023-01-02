import React from "react";

function PeopleCard({ value }) {
  return (
    <>
      <div className="card">
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td className="people--name">{value.name}</td>
            </tr>
            <tr>
              <th>Height:</th>
              <td className="people--height">{value.height} cm</td>
            </tr>
            <tr>
              <th>Mass:</th>
              <td className="people--mass">{value.mass}</td>
            </tr>
            <tr>
              <th>Hair Color:</th>
              <td className="people--hair">{value.hair_color}</td>
            </tr>
            <tr>
              <th>Eye Color:</th>
              <td className="people--eye">{value.eye_color}</td>
            </tr>
            <tr>
              <th>Birth Year:</th>
              <td className="people--birthyear">{value.birth_year}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PeopleCard;

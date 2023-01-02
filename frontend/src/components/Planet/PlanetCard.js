import React from "react";

function PlanetCard({ value }) {
  return (
    <div className="card">
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td className="planet--name">{value.name}</td>
          </tr>
          <tr>
            <th>Population:</th>
            <td className="planet--population">{value.population}</td>
          </tr>
          <tr>
            <th>Diameter:</th>
            <td className="planet--diameter">{value.diameter}</td>
          </tr>
          <tr>
            <th>Climate:</th>
            <td className="planet--climate">{value.climate}</td>
          </tr>
          <tr>
            <th>Gravity:</th>
            <td className="planet--gravity">{value.gravity}</td>
          </tr>
          <tr>
            <th>Terrain:</th>
            <td className="planet--terrain">{value.terrain}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PlanetCard;

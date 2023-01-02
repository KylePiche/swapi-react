import React from "react";

function StarshipCard({ value }) {
  return (
    <div className="card">
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td className="starship--name">{value.name}</td>
          </tr>
          <tr>
            <th>Model:</th>
            <td className="starship--model">{value.model}</td>
          </tr>
          <tr>
            <th>Manufacturer:</th>
            <td className="starship--manufacturer">{value.manufacturer}</td>
          </tr>
          <tr>
            <th>Starship Class:</th>
            <td className="starship--class">{value.starship_class}</td>
          </tr>
          <tr>
            <th>Crew Amount:</th>
            <td className="starship--crew">{value.crew}</td>
          </tr>
          <tr>
            <th>Passengers:</th>
            <td className="starship--passengers">{value.passengers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StarshipCard;

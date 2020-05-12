import React from "react";

const LigneEmploye = props => {
  return (
    <tr key={props.employe._id}>
      <td>{props.employe.nom}</td>
      <td>{props.employe.prenom}</td>
      <td>{props.employe.email}</td>
      <td>{props.employe.poste}</td>
      <td>{props.employe.numeroTelephone}</td>
      <td>{props.employe.pays}</td>
      <td>{props.employe.etatMarital}</td>
      <td>
        <button className="positive ui button">Modifier</button>
        <button class="negative ui button">Supprimer</button>
      </td>
    </tr>
  );
};
export default LigneEmploye;

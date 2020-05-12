import React from "react";
import LigneEmploye from "./LigneEmploye";

const ListeEmployes = props => {
  function remplissageTableau() {
    return props.employes.map(employe => (
      <LigneEmploye key={employe._id} employe={employe} />
    ));
  }

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
          <th>Poste</th>
          <th>Numéro de téléphone</th>
          <th>Pays d'origine</th>
          <th>Etat martial</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{remplissageTableau()}</tbody>
    </table>
  );
};

export default ListeEmployes;

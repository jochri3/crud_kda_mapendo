import React, { Component } from "react";
import axios from "axios";
import ListeEmployes from "./ListeEmployes";

class App extends Component {
  state = { employes: [] };
  componentDidMount() {
    axios
      .get(
        "https://kda-projects.kinshasadigital.com/api/employes?api_key=ozvcwxy"
      )
      .then(res => this.setState({ employes: res.data }))
      .catch(erreur => console.log(erreur));
  }

  render() {
    return <ListeEmployes employes={this.state.employes} />;
  }
}

export default App;

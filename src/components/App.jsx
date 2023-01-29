import { Searchbar } from "./Searchbar/Searchbar";
import { Component } from "react";
import { fetchImages } from 'services/apiServices';

export class App extends Component {

  state = {
    query: '',
    images: [],
  }

  componentDidUpdate(prevProps, prevState) {
    fetchImages(); 
  }

  handleSubmit =  (query) => {
    this.setState({ query });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}/>
      </> 
    )
  }
}

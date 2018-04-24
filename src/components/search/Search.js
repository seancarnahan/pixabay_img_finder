import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


class Search extends Component{
  constructor(props){
    super(props);

    this.state = {
      searchText: '',
      amount: 15,
      apiUrl: 'https://pixabay.com/api',
      apikey: '8773953-28221ef8eb4fb64073962e7bd',
      images: []
    };
  }

  render(){
    return(
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          float
        />
      </div>

    );
  }
}

export default Search;

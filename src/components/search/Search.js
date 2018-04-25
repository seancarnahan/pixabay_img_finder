import React, {Component} from 'react';
import TextField from 'material-ui/TextField'; //from material-ui
import SelectField from 'material-ui/SelectField'; //from material-ui
import MenuItem from 'material-ui/MenuItem'; //from material-ui
import axios from 'axios'; //used for calling the pixabay API
import ImageResults from '../image-results/ImageResults';


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

  //when the text changes in the search bar,
  //also passes in a callback function(a function immedietly executed after the previous code)
  //this callback is the API call using Axios
  //commented out &safesearch=true
  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios.get(`${this.state.apiUrl}/?key=${this.state.apikey}&q=${this.state.searchText
      }&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({images: res.data.hits}))
        .catch(err => console.log(err));
    });
  };

  onAmountChange = (e, index, value) => this.setState({amount: value});


  render(){
    console.log(this.state.images);
    return(
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images" //from material-ui
          fullWidth={true} //from material-ui
        />
        <br/>
        <SelectField
          name="amount"//all this SelectField and MenuItem info are from material-ui
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br/>
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
      </div>
      //enhanced for loop above
    );
  }
}

export default Search;

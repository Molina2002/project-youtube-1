import React from 'react';
import { Paper, TextField } from '@mui/material' 
class SearchBar extends React.Component{
    state ={
        searchText: '',
    }
    handleChange = (event) => this.setState({searchTerm: event.target.value})

    handleSubmit = (event) => {
        const { searchTerm } =  this.state;
        const { onFormSubmit } =  this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }
    render(){
        return(
            <Paper elevation ={6} style={{ padding: '15px', backgroundColor: 'hsl(244, 38%, 16%)',borderRadius: '5px'}}>
                <form onSubmit = {this.handleSubmit} style={{backgroundColor: 'hsl(244, 38%, 16%)',borderRadius: '2px' }}>
                    <TextField fullWidth label="Search your songs here..." onChange={this.handleChange} InputLabelProps={{style: {color: 'white'}}} style={{backgroundColor: 'hsl(244, 38%, 29%)',borderRadius: '2px'}}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;
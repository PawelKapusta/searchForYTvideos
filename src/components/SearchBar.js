import React from 'react';

class SearchBar extends React.Component {
    state = {myInput: ''};
    onInputChange = (event) => {
        this.setState({myInput: event.target.value});

    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.myInput);
    }

    render() {
        return (

                <div className="ui search-bar segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Videos search:</label>
                            <input type="text" value={this.state.myInput} onChange={this.onInputChange}/>
                        </div>
                    </form>
                </div>


        );
    }
}

export default SearchBar;
import React, { Component } from 'react';

// Class Basic Component
class SearchBar extends Component {

	constructor(props) {
		super(props);

		// State is a javascript object that contain in all class basic components
		this.state = { term : '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={ event => this.onInputChange(event.target.value) } 
					/>
			</div>
		)
	}
	
	onInputChange(term) {
		this.setState({term})
		this.props.onSearchTermChange(term)
	}
}

export default SearchBar;
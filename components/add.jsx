import React from 'react';

class Add extends React.Component {
	constructor(props) {
    super(props);
    this.state = {name: ""};
  }
	render(){
			return(
					<form className="form " onSubmit={this.addSchool}>
							<div className="form-group">
									<label className="control-label" htmlFor="name">User Storie:</label>
									<input type="text" className="form-control" id="name" name="name"  onChange={this.handleInputChange} placeholder="User Storie" />
							</div>
							<div className="form-group">
									<label className="control-label" htmlFor="tagline">Tagline:</label>
									<input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Tagline" />
							</div>
							<div className="form-group">
									<button className="btn" type="submit">Add</button>
							</div>
					</form>
			)
	}
}

Add.propTypes = {
  name: React.PropTypes.string,
};

export default Add;

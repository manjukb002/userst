import React from 'react';
var http = require("http");


class DisplayData extends React.Component {
	constructor(props) {
    super(props);
    this.state = {data: []};
  }
	componentDidMount(){
		let tmpl = this;
		http.get('http://localhost:3000/userstory', (res) => {
	const statusCode = res.statusCode;
	const contentType = res.headers['content-type'];

	let error;
	if (statusCode !== 200) {
		error = new Error(`Request Failed.\n` +
											`Status Code: ${statusCode}`);
	} else if (!/^application\/json/.test(contentType)) {
		error = new Error(`Invalid content-type.\n` +
											`Expected application/json but received ${contentType}`);
	}
	if (error) {
		console.log(error.message);
		// consume response data to free up memory
		res.resume();
		return;
	}

	res.setEncoding('utf8');
	let rawData = '';
	res.on('data', (chunk) => rawData += chunk);
	res.on('end', () => {
		try {
			let parsedData = JSON.parse(rawData);
			console.log(parsedData);
			tmpl.setState({data: parsedData});

		} catch (e) {
			console.log(e.message);
		}
	});
	}).on('error', (e) => {
	console.log(`Got error: ${e.message}`);
	});
	}
	render(){
			return(
					<div>
						{this.state.data.map(function(d, index) {
							return (<ChildData data={d} key={"child" + index}/> )
						})}
					</div>
			)
	}
}


class ChildData extends React.Component {
	render () {
		console.log(this.props);
		return (
			<div className="panel panel-default">
					<div className="panel-heading">
						{this.props.data.label}
					</div>
					<div className="panel-body">{this.props.value}</div>
			</div>
		)
	}
}

export default DisplayData;

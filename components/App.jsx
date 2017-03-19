import React from 'react';
import Add from './add.jsx';
import DisplayData from './data.jsx';

class App extends React.Component {
   render() {
      return (
				<div className="row">
				  <div className="col-md-2">
						<Add/>
					</div>
					<div className="col-md-6">
						<DisplayData/>
					</div>
				</div>
      );
   }
}

export default App;

import React, { Component } from 'react';

class Passinput extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>User Name:{this.props.name}</h1>

                <h2>age: {this.props.age}</h2>
                <h2>surename: {this.props.user.name}</h2>

                <label>Hobbies:</label>
                {
                    this.props.user.hobbies.map((data, i) => <li key={i}>{data}</li>)
                }
            </React.Fragment>
        );
    }
   
}
// Passinput.propTypes={
//     age :React.propTypes.string
// }
export default Passinput;
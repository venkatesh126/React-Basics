import React, { Component } from 'react';
class Table extends Component {
    state = {
        jobs: [
            {
                name: "venkat",
                active: true
            },
            {
                name: "venkat",
                active: true
            }, {
                name: "venkat",
                active: false
            }
        ]

    }

    render() {
       
        // console.log(activejobs, "acitve")
        return (
         
            <div className="container">
                <table className="table table-border table-condensed table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Venkat</td>
                            <td>tech M</td>
                        </tr>
                        <tr>
                            <td>Praveen</td>
                            <td>ORO Tech</td>
                        </tr>
                        <tr>
                            <td>Koti</td>
                            <td>Radiant digital</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Table;
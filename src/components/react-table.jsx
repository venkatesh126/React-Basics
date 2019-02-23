import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css"
import Spinner from './spinner';
 
class RcTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        }
        
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(data => {
            this.setState({ data: data });
            this.setState({ isLoading: false });
        })
     
    }
    removeRow(id) {
        // console.log(id)
        const { changeData } = this.state.data;
        const update = this.state.data.filter(c => c.id !== id)
        this.setState({ data: update })
    }
    render() {
        const { isLoading } = this.state;
        const columns = [
            {
                Header: "User Id",
                accessor: "userId",
                sortable: false,
                filterable: false,
                width: 100,
                minwidth: 100,
                maxwidth: 100
            }, {
                Header: "Id",
                accessor: "id", width: 100,
                minwidth: 100,
                maxwidth: 100
            }, {
                Header: "Title",
                accessor: "title"
            }, {
                Header: "Content",
                accessor: "body"
            },
            {
                Header: "Action",
                Cell: props => {
                    return (<button className="btn btn-sm btn-danger m-2" onClick={() => {
                        this.removeRow(props.original.id)
                    }}>Delete</button>)
                }
            }
        ]
        return (
            
            <div className="container">
            {isLoading && <Spinner />}
                <ReactTable columns={columns} data={this.state.data} filterable noDataText={"plese wait.."} showPagination={false} defaultPageSize={5}>

                </ReactTable>
            </div>
        );
    }
}

export default RcTable;
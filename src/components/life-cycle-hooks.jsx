import React, { Component } from 'react';

class Lifecycle extends Component {
    state = {
        data: [],
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

    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({ data: response })
            });
        
    }

    render() {
        const { data } = this.state.data;
        const { jobs } = this.state.jobs;

        // alert(data)
        // const resullt = data.map((entry, index) => {
        //     return <li key={index}>{entry}</li>
        // });
        const activejobs = jobs.filter(job => job.active);
        alert(activejobs)

        return (
            <ul>hi</ul>
        );
    }
}

export default Lifecycle;
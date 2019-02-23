import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/about';
import Navigation from './components/navigation'
import Passinput from './components/passinput';
class App extends Component {
    render() {
        var user =
        {
            name: "ram",
            hobbies: ["cricket", "writing blogs"]
        }
        return (
            // <BrowserRouter>
            //     <React.Fragment>
            //         <Navigation />
            //         <Switch>
            //             <Route path="/" component={Home} exact />
            //             <Route path="/about" component={About} />
            //         </Switch>
            //     </React.Fragment>
            // </BrowserRouter>
            <Passinput name={"venakt"} age={27} user={user} />
        );
    }
}

export default App;
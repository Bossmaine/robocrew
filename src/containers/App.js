import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from  '../components/SearchBox';
import Scroll from '../components/Scroll';
import Error from "./Error";
import './App.css';

class App extends Component { 
    constructor() {
        super()
        this.state = {
            robot: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robot: users}));
    
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render() {
        const {robot, searchfield} = this.state;
        const filterRobot = robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (robot.length === 0) {
            return <h1>LOADING</h1>
        } else {
            return (
                <div className="tc">
                    <h1>RoboCrew</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Error>
                            <CardList robot={filterRobot} />
                        </Error>
                    </Scroll>
                </div>
            );
        }
    }
}


export default App;
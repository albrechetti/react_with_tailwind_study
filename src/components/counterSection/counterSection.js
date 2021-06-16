import React, { Component } from 'react'

class CounterSection extends Component{
    state = {
        counter: 0,
   }

    componentDidMount() {
        this.counterID = setInterval(() => {
            console.log(this.counterTick());
            
        }, 1000);
    }
    counterTick() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    componentWillUnmount() {
        clearInterval(this.counterID);
    }
    
    render() {
        return (

            <div>
                <h1>{ this.state.counter }</h1>
            </div>
        );
    }
}

export default CounterSection;
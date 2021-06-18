import React, { Component } from 'react'

export class Button extends Component{
    render() {
        const { text, onClick } = this.props;
        return (
            <button className="btnMore px-6 py-3 bg-green-600 text-green-50  rounded-full" onClick={onClick}>{text}</button>
        );
    }
    
}
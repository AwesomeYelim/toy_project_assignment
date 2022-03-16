import React, { Component } from 'react';

class R010_Variable extends Component {
 
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    componentDidMount(){
        var varName = 'react';
        console.log(`varName1: ${varName}`);
        var varName = '200';  //
        console.log(`varName2: ${varName}`);


        let letName = 'react';
        console.log(`letName1: ${letName}`);
        // let letName = '200'; 
        letName = 'react200'; 
        console.log(`letName2: ${letName}`);


        const constName = 'react';
        console.log(`constName1: ${constName}`);
        // const constName = '200'; 
        // constName = 'react200'; 
    }


    render(){
        return (
            <h2>[THIS IS Variable]</h2>
        )
    }
}


export default R010_Variable;
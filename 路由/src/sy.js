import React from 'react';
export class A3 extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div>
                {this.props.match.params.name}：hsc-a
            </div>
        )
    }
}
import React from 'react';
export class A1 extends React.Component{
    constructor(props){
        super();
        this.state={name:props.location.query}
    }
    render(){
        return(
            <div>
                我的爱好：吃喝玩乐{this.state.name}
            </div>
        )
    }
}
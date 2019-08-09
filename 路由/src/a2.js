import React from 'react';
import {Aa1} from './aa1.js';
import {Aa2} from './aa2.js';
import {Route,Link} from 'react-router-dom'
export class A2 extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(<div>
                  <div>{this.props.location.state}</div>
                  <div>
                     <Route exact="true" path='/index/' component={Aa2}></Route>
                     <Route  path='/index/aa2' component={Aa1}></Route>
                  </div>
                  <ul>
                      <li><Link exact='true' to='/index/'>特长1</Link></li>
                      <li><Link  to='/index/aa2'>特长2</Link></li>
                  </ul>
              </div>
        )
    }
}
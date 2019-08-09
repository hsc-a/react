import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Link} from 'react-router-dom';
import {A1} from './a1.js';
import {A2} from './a2.js';
import {A3} from './sy.js';
ReactDOM.render(<div><HashRouter>
    <div>
        <Route exact="true" path='//:name' component={A3}></Route>
        <Route path='/about' component={A1}></Route>
        <Route path='/index' component={A2}></Route>
    </div>
    <ul>
      <li><Link exact='true' to='//你是最美的'>首页</Link></li>
      <li><Link to={{"pathname":'/about',query:"那就玩"}}>兴趣爱好</Link></li>
    <li><Link to={{pathname:'/index',state:"小妹那"}}>特长</Link></li>
      </ul>
</HashRouter>
  
</div>,document.getElementById("nav"))
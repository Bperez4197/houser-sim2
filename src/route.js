import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Wizard2 from './components/Wizard/Wizard2';
import Wizard3 from './components/Wizard/Wizard3';



export default <Switch>

    <Route exact path='/' render={() => <DashBoard />} />
    <Route path='/wizard' component={Wizard} />
    <Route path='/wizard2' component={Wizard2} />
    <Route path='/wizard3' component={Wizard3} />

</Switch>

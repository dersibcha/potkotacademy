import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Enrollment from '../Enrollment/Enrollment';
import Schedules from '../Schedules/Schedules';
import ContactUs from '../ContactUs/ContactUs';



class MainContentRouter extends Component {
    state = {  }
    render() { 
        return ( 
            <main>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/acercade" component={AboutUs} exact />
                    <Route path='/matricula' component={Enrollment} exact />
                    <Route path='/horarios' component={Schedules} exact />
                    <Route path="/contactenos" component={ContactUs} exact />
   
                </Switch>
            </main> 
        );
    }
}
 
export default MainContentRouter;
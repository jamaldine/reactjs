import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/home';
import News from './components/News/news';

class Routes extends React.Component {
    
    render(){

        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" exact component={News} />
                </Switch>
            </Layout>  
        );
    }

};


export default Routes;
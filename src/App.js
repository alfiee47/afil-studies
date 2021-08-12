
import './App.css';

import {  Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/navigation.';
import EducationService from './components/educationService';
import AdminComponent from './components/admin-site/adminComponent';


function App() {
  return (
  
     <>   
       <Navigation />       
          <Switch>  
          <Route path='/admin' component={AdminComponent}/>          
          <Route path='/education-Service' component={EducationService}/>              
          <Route path='/' component={Home}/>
                    
          </Switch>
    </>
    
  );
}

export default App;

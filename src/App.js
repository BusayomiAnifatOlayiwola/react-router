import './App.css';
import Home from './Home';
import Procedures from './Procedures';
import Procedure from './Procedure';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
//we get <Router />
function App() {
  return (
    
    <Router>
      <nav className='nav'>
        <Link to='/'>HOME</Link>
        <Link to='/procedures'>Procedures</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/procedures/cavity'>Cavity</Link>
      </nav>
      <>
      <Route exact path='/' component ={Home} />
      <Route exact path='/Procedures' component ={Procedures} />
      <Route path='/Procedures/:type' render={(props) =>{
        return <Procedure {...props}
      /> }} />
      <Route path='/Contact' render={() => <Contact dentist={'Dr.Drill'}/>} />
   </>
    </Router>
  );
}

export default App;

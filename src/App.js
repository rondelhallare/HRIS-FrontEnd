import Back from "./Components/LogIn/Back";
import Body from "./Components/Dashboard/Body";
import UserProf from "./Components/UserProfile/UserProf";
import NavBar from "./Components/Navigation/NavBar";
import { Switch, Route, Link, BrowserRouter as router } from 'react-router-dom'
import './App.css'
import TimeBody from "./Components/TimeLogs/TimeBody";
import Notice from "./Components/NoticeBoard/Notice";
import SupportBack from "./Components/Support/SupportBack";



function App() {
  return (
    <Switch>
      <NavBar />
      <Route path='/' component = {Back} />
      <Route path = '/Dashboard' component = {Body} />
      <Route path = '/UserProfile' component = {UserProf} />
      <Route path = '/TimeLogs' component = {TimeBody} />
      <Route path='/Support' component = {SupportBack} />
      <Route path='/NoticeBoard' component = {Notice} />
    </Switch>


  )

}

export default App;

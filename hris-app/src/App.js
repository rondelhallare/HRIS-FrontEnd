import Header from "./Components/LogIn/header";
import Form from "./Components/LogIn/form";
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path = "/LogIn">
            <Header />
            <Form />

       </Route>
    </Router>
  

  )
  
}

export default App;

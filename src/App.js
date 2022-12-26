import {BrowserRouter,Routes,Route} from "react-router-dom"


import SignUp from './components/Signup';
import Login from "./components/Login";
import Game from "./components/Game";
import LoginSuccess from "./components/LoginSuccess";




function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/signup" element={<SignUp/>}/>
    <Route exact path="/game" element={<Game/>}/>
    <Route exact path="/log" element={<LoginSuccess/>}/>
  </Routes>
  </BrowserRouter>
  );
  }
export default App
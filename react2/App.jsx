import "./App.css"
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";
import Userslist from "./components/Userslist.jsx";
import User from "./components/User.jsx";
//class component
//function component
function App(){
  //to create a component
  //contains states(optional) and  need to return react element(compulsory)
  //state
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-gray-100">
     <Userslist/>
     </div>
     <div>
      <Footer/>
     </div>
    </div>
  );
}
export default App;

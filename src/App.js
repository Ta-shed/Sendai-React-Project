import Navbar from './Components/Navbar';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter';
import PostDummyData from './PostDummyData';
import AuthChecker from './AuthChecker';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      <Navbar/>
 <CurrencyConverter />
 <PostDummyData />
 <AuthChecker/>
 <SignIn/>

    </div>
  );
}

export default App;

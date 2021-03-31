import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container-fluid">
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;

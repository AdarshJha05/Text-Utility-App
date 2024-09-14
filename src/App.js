import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar/>
      <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils"  />
      <div className="container my-3">
        <TextForm heading="Enter the text for analyze below"/>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;

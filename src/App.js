import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

const App = ()=>{
  return(
    <>
      <Navbar title="TextUtiles" />
      <div className="container mt-5">
        <div className="row">
          <TextForm heading="Enter Text Below"/>
        </div>
      </div>
    </>
  )
}

export default App
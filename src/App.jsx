import {Routes , Route} from "react-router-dom"
import { SignUp } from "./pages/SignUp"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
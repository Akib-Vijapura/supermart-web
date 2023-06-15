import {Link} from "react-router-dom"
import { Heading } from "@chakra-ui/react"
const Home = () => {
  return (
    <>
    <Heading>Welcome to Home 🏡</Heading>
    <Link to="/">SignIn</Link>
    </>
  )
}

export default Home
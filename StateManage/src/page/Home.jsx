import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container mx-auto">
    <h1 className="text-8xl font-bold">
    State Management Exercise
    </h1> 
    <ul className="text-3xl" >
        <Link className="text-blue-500 " to={'/usestate'}><li>UseState Example</li></Link>
    </ul>
    <ul className="text-3xl" >
        <Link className="text-blue-500 " to={'/usereducer'}><li>UseReducer Example</li></Link>
    </ul>
    </div>
  )
}

export default Home
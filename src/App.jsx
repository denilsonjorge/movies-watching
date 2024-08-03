import './App.css'
import Banner from './components/Banner'
import Container from './components/Container'
import Header from './components/Header'
import Trend from './components/Trend'
import { FaFire } from "react-icons/fa6";

function App() {

  return (
    <div className='w-full text-white h-screen'>
      <Header/>
      <Container>
        <Banner/>
        <div className="my-20 flex items-center gap-4">
        <h1 className="text-3xl w-auto flex-auto flex text-center flex items-center"><span className="mr-2"><FaFire /></span> Trending</h1>
        <div className="w-full flex-auto h-[0.5px] bg-zinc-800"></div>
        <p className="w-auto flex-auto text-nowrap text-zinc-500">See More </p>
      </div>
        <Trend/>

      </Container>
    </div>
  )
}

export default App

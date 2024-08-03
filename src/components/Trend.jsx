import Card from "./Card";
import trend1 from "./assets/Vector.png"
import trend2 from "./assets/Vector-19.png"
import trend3 from "./assets/Vector-11.png"
import trend4 from "./assets/Vector-23.png"
import trend5 from "./assets/Vector-2.png"
import trend6 from "./assets/Vector-1.png"
import trend7 from "./assets/Vector-17.png"
import trend8 from "./assets/Vector-21.png"
import trend9 from "./assets/Vector-25.png"
import trend10 from "./assets/Vector-13.png"
import trend11 from "./assets/Vector-5.png"
import trend12 from "./assets/Vector-9.png"

function Trend() {

  return ( 
    <div className="h-screen">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 place-items-center gap-5 ">
        <Card title="Guardians of the galaxy" img={trend1}/>
        <Card title="Shazam! Furyouse" img={trend2}/>
        <Card title="Medellin" img={trend3}/>
        <Card title="Dungeons & Dragrons" img={trend4}/>
        <Card title="Jhon Wick: Chapter" img={trend5}/>
        <Card title="Spider-Man: Acromatic" img={trend6}/>
        <Card title="Tyler Perry's Sister" img={trend7}/>
        <Card title="The Cube" img={trend8}/>
        <Card title="The Cube" img={trend9}/>
        <Card title="Rich in Love 2" img={trend10}/>
        <Card title="The Black Demon" img={trend11}/>
        <Card title="The Prank Panel" img={trend12}/>
      </div>
    </div>
   );
}




export default Trend;
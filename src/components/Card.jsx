import { FaCirclePlay } from "react-icons/fa6";
import "./Card.css"
function Card({title,img}) {


  
  return ( 
    <div className="w-48 flex flex-col gap-4 md:w-full overflow-hidden">
          <div className="relative cursor-pointer overflow-hidden flex items-center justify-center" id="div">
          <img className="w-full" src={img} alt="img" id="image"/>
          <span 
          className="absolute top-24 left-18 flex items-center justify-center text-4xl" id="iconplay"><FaCirclePlay /></span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl text-ellipsis whitespace-nowrap overflow-hidden">{title}</h4>
            <span className="text-zinc-500 text-xl flex gap-14"><p>2023</p><p className="before:">104m</p></span>
          </div>
        </div>
   );
}

export default Card;
import { FaCirclePlay } from "react-icons/fa6";
import image1 from "./assets/Vector.png";
import image2 from "./assets/Vector-1.png";
function Banner() {
  return (
    <div className="flex h-[80vh] justify-center items-center">
      <div className="px-10 flex-initial w-full">
        <h2 className="uppercase text-3xl">Find Movies</h2>
        <h1 className="uppercase text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00f] to-[#f00]">
          TV shows and more
        </h1>
        <p className="my-5 text-zinc-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid
          minima maiores tempore alias dolores sint numquam voluptate doloremque
          atque. Quod possimus sunt voluptatum at quaerat quae velit obcaecati.
          Ad.
        </p>
        <button className="justify-center items-center gap-2 flex px-5 py-2 rounded border hover:bg-white transition-all font-semibold hover:text-black">
          <FaCirclePlay /> Watch Tutorial
        </button>
      </div>
      <div className="relative flex-initial w-full h-full flex-">
        <img
          className="absolute top-0 right-20"
          src={image1}
          alt="imagem 1"
        />
        <span className="absolute bottom-0 right-60  min-w-[304px] h-auto">
          <img className="w-full h-full" src={image2} alt="imagem 2" />
          <span className="absolute text-5xl hover:scale-125 cursor-pointer transition-all top-2/4 left-2/4 -translate-x-y-2/4 ">
            <FaCirclePlay />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Banner;

import Cursor from "@/components/Cursor";
import SlidingMarquee from "@/components/SlidingMarquee";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Cursor />
      <h1 className="text-3xl font-bold text-center mt-10">Home</h1>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-10">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left p-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Hi There👋🏻, <br className="block sm:hidden" />
            <span className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-orange-600">Karan Panda</span> here
          </h1>

          {/* Image for small screens */}
          <div className="block lg:hidden my-6">
            <img src="/myImage.jpg" alt="Karan Panda" className="h-40 rounded-full mx-auto" />
          </div>

          <p className="text-xl sm:text-2xl lg:text-4xl mt-6">
            I'm a passionate{" "}
          </p>

          <span className="text-2xl sm:text-3xl lg:text-5xl mt-4">
            <TypeAnimation
              sequence={[
                "Software Developer", 
                3000,
                "Designer",
                3000,
                "Innovator",
                3000, 
              ]}
              wrapper="span"
              speed={45} // Typing speed
              repeat={Infinity} // Infinite loop
              className="text-orange-500"
            />
          </span>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex justify-start">
          <img src="/myImage.jpg" alt="Karan Panda" className="h-72 rounded-full" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 lg:mt-10">
        <SlidingMarquee />
      </div>
    </div>
  );
}

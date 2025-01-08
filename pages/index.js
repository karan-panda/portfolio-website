// Home page
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Cursor />
      <h1 className="text-3xl font-bold text-center mt-10">Home</h1>
      <div className="bg-gray-800 p-6 mt-3 rounded-lg shadow-lg flex justify-center items-center">
        <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&color=FFFFFF&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hi+There!+👋🏻;+I'm+Karan+Panda!⚡;" />  
        {/* <img src="/karan.png" loading="lazy" sizes="100vw" alt="" class="custom-image"></img> */}
      </div>
    </div>
  );
}
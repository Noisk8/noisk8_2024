import React from "react";
import {Input} from "@nextui-org/react";
import {Image} from "@nextui-org/react";



export default function App() {
 
  return (
    <div className="flex flex-col gap-4">
  <div className="w-full flex flex-col gap-4">
     
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input type="email" placeholder="Enter your email" />
          <Input type="password"  placeholder="Enter your pasword" />
        </div>
       
    </div>  

      <h1 className="text-2xl font-bold"> Marina Cantos</h1>
	<div  className="flex text-center justify-center	items-center	"> 
  
	  <Image
      isZoomed
      width={340}
      alt="NextUI Fruit Image with Zoom"
      src="https://nccjewels.com/wp-content/uploads/2019/02/marina.jpg"
    />


</div>

<section className="border-white/20  border-y">
<div className="text-white mx-auto">
  <div className="mx-auto overflow-hidden overflow-x-hidden py-2 relative">
	<div className="w-full justify-between grid">
	  <div
		className="absolute from-black inset-0 left-0 via-transparent w-44 z-10 bg-gradient-to-r">
	  </div>
	  <div
		className="absolute from-black inset-0 right-0 via-transparent w-44 z-10 bg-gradient-to-l ml-auto">
	  </div>
	</div>
	<div
	  className="flex items-center animate-marquee animate-bouned font-black font-display gap-4 relative tracking-widest uppercase whitespace-nowrap">
	  Actriz <span className="hidden lg:inline">✺</span>Bailarina <span
		className="hidden lg:inline">🍄 </span> Peli Roja <span className="hidden lg:inline">🫣</span> Teatro <span className="hidden lg:inline">🍄</span>Arte<span className="hidden lg:inline">🍄</span> Pivona <span className="hidden lg:inline">🫣</span> AMOR <span className="hidden lg:inline">🍄</span>PLATONICO <span className="hidden lg:inline">🍄</span> Mamasota <span className="hidden lg:inline">🍄</span> Guapa
	</div>
  </div>
</div>


</section>


</div>  

  );
}


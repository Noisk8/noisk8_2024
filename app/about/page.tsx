'use client'

import {Image} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button, User} from "@nextui-org/react";
import { UserTwitterCard } from "@/components/UserTwitterCard";
import {ScrollShadow} from "@nextui-org/react";
import {Content} from "@/components/contenido"

export default function App() {
 
  return (
    <div className="flex flex-col gap-4">
 

      <h1 className="text-2xl font-bold"> Juan Jaramillo</h1>
	  <h2 className="text-2xl font-bold"> Noisk8</h2>
	  <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <User   
          as="button"
          name="Noisk8"
          description="Creative Coder"
          className="transition-transform"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <UserTwitterCard />
      </PopoverContent>
    </Popover>
	<div  className="flex text-center justify-center	items-center	"> 
  
	  <Image
      isZoomed
      width={340}
      alt="NextUI Fruit Image with Zoom"
      src="https://nccjewels.com/wp-content/uploads/2019/02/marina.jpg"
    />


</div>


<div className=" flex  justify-center pb-10 pt-10">
<ScrollShadow 
      hideScrollBar 
      offset={100}
      orientation="horizontal" 
      className="max-w-[400px] max-h-[300px]"
    >
      <Content className="w-[800px] " />
    </ScrollShadow>
	</div>
<div>
<section className="border-white/20  border-y ">
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

</div>  

  );
}



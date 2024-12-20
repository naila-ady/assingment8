
    import Image from "next/image";

    export default function Home() {
      return (
        <div>
      <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-5">
      <div className="bg-purple-400 text-[36px] col-span-3  font-bold text-center content-center border-2 border-gray">Header</div>
      <div className="bg-yellow-100 lg:row-span-2 lg:col-span-1 md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-1 text-[36px] font-large text-center content-center border-2 border-gray">SIDEBAR</div>
       <div className="bg-gray-500 text-[36px] sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-2 lg:row-span-1 text-center border-4 border-gray content-center">CONTENT</div>
       <div className="bg-red-400 text-[36px] md:row-span-1 md:col-span-3 lg:col-span-1 sm:col-span-3 text-center border-4 border-gray content-center">IMAGE1</div>   
       <div className="bg-cyan-300 text-[36px] md:row-span-1 md:col-span-3 lg:col-span-1 sm:col-span-3 text-center border-4 border-gray content-center">IMAGE2</div> 
       <div className="col-span-3 bg-black text-white text-center font-bold border-4 border-gray content-center text-[36px]">FOOTER</div>
          </div>
    
          </div>
          
          
      );
    }
    
    
    
    



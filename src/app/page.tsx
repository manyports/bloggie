import Image from "next/image";

export default function Home() {
  return (
    <body>
      <div className="flex justify-center items-center mt-32">
      <div className="mx-[4vw]">
        <div>
          <p className="text-[40px] font-black text-[#0071A7]" >Read about stuff.</p>
          <p className="text-[27px] font-medium text-[#2877C0]">
            Completely free. <br/> 
            Totally honest. <br />
            Remarkably concise.</p>
        </div>
        <div className="flex mt-[2vw]">
          <a href="/discover" className="w-[120%]">
          <div className="bg-white border-2 border-[#0071A7] rounded-[45px]  " >
            <p className="font-black text-[#2877C0] text-[19px] text-center">
              Read blogs
            </p>
          </div>
          </a>
          <a href="/about" className="w-[120%] ml-[1vw]">
          <div className="bg-[#0071A7] border-2 border-[#0071A7] rounded-[45px] ">
            <p className="font-black text-[#FFFFFF] text-[19px] text-center">
              About us
            </p>
          </div>
          </a>
        </div>
      </div>
      <div className="sm:block hidden">
        <Image 
        src="../woman.svg"
        alt="Image of a young woman reading a book"
        width={400}
        height={400}
        />
      </div>
    </div>
    </body>
  );
}

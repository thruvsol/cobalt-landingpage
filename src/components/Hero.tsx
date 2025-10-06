import { ArrowDown } from "lucide-react";
import Image from "next/image";


export default function Hero() {
  return (
    <div className="mt-36">
      <div className="max-w-[50%] mx-auto">
        <h1 className="text-6xl text-center font-extrabold text-neutral-300 tracking-tight ">
          Unleash the power of intuitive finance
        </h1>
        <p className="mt-6 text-center text-neutral-400 text-lg">
          Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.
        </p>
        <div className="w-full flex items-center">
          <button className="relative mt-12 border-[0.5px] mx-auto border-neutral-50 py-2 px-4 text-neutral-400 rounded-4xl cursor-pointer hover:text-neutral-50 hover:shadow-2xl bg-neutral-900 transition">
            <span className="relative z-10">Join the waitlist</span>
            <div className="absolute h-px w-full -bottom-px bg-gradient-to-r from-transparent via-sky-600 to-transparent inset-x-0"></div>
          </button>
        </div>
        <div className="mt-12 w-full flex justify-center">
          <div className="flex  items-center cursor-pointer hover:text-neutral-50">
            <p className="text-neutral-400 transition hover:text-neutral-50 flex items-center flex-col gap-2">Learn more <br /><ArrowDown /></p>
          </div>
        </div>
        <Image 
          alt="App screenshot"  width="4200" height="2490" decoding="async" data-nimg="1" className="rounded-md lg:rounded-2xl mt-16" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw" src={'/dashboard.webp'}
        />
      </div>
    </div>
  )
}
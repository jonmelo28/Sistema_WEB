import Image from "next/image";

export default function Home() {
  return (
  <div  className="h-[100vh] flex flex-col items-center">
    <div>
      <Image src="/images/jm.png"
        width={250}
        height={250}
        className="bg-zinc-800 block mx-auto p-2 rounded-md"
        />
        
    </div>
    <p className="mt-8">Seja bem vindo Jonatha Melo</p>
  </div>
  );
  
}

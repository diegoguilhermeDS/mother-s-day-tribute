import Image from "next/image";
import mailIcon from "../../public/assets/Mark email unread.png";
import heartOne from "../../public/assets/image 3.png"
import heartTwo from "../../public/assets/image 4.png"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen  bg-gradient-to-br from-[#EA7A87] to-white to-70% overflow-hidden">
      <Image src={heartOne} alt="image heart" width={300} height={300} className="absolute bottom-0 lg:top-16 left-0 w-[120px] lg:w-[300px]"/>
      <Image src={heartTwo} alt="image heart" width={200} height={200} className="absolute -top-10 lg:top-16 right-0 w-[100px] lg:w-[300px]"/>
      <h1
        className="font-semibold text-2xl lg:text-4xl text-rose-800 mb-3 text-center"
      >
        Você tem uma nova mensagem!
      </h1>
      <p className="font-normal text-2xl lg:text-4xl text-rose-700">click para abrir</p>
      <Link href="/message" className="relative">
        <Image src={mailIcon} alt="email icon" width={500} height={500} className="w-[200px] lg:w-[500px]"/>
        <span className="absolute top-[16px] right-[16px] lg:top-10 lg:right-10 flex  w-[52px] h-[52px] lg:h-[130px] lg:w-[130px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA7A87] opacity-75"></span>
          <span className="relative inline-flex rounded-full w-[52px] h-[52px] lg:h-[130px] lg:w-[130px] bg-[#C31F3A]"></span>
        </span>
      </Link>
      <h2 className="font-[OFL Sorts Mill Goudy TT] font-medium text-2xl lg:text-4xl text-[#C31F3A]">Jeniffer Hayane</h2>
    </main>
  );
}

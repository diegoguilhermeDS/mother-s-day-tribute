import Image from "next/image";
import mailIcon from "../../public/assets/Mark email unread.png";
import heartOne from "../../public/assets/image 3.png"
import heartTwo from "../../public/assets/image 4.png"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <Image src={heartOne} alt="image heart" width={300} height={300} className="absolute top-16 left-0"/>
      <Image src={heartTwo} alt="image heart" width={200} height={200} className="absolute top-16 right-0"/>
      <h1
        className="font-semibold text-4xl text-[#EA7A87] mb-3
"
      >
        Você tem uma nova mensagem!
      </h1>
      <p className="font-normal text-4xl text-[#C31F3A]">click para abrir</p>
      <Link href="/message" className="relative">
        <Image src={mailIcon} alt="email icon" width={500} height={500} />
        <span className="absolute top-10 right-10 flex  h-[130px] w-[130px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA7A87] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-[130px] w-[130px] bg-[#C31F3A]"></span>
        </span>
      </Link>
      <h2 className="font-[OFL Sorts Mill Goudy TT] font-medium text-4xl text-[#C31F3A]">Jeniffer Hayane</h2>
    </main>
  );
}

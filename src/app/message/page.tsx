import Image from "next/image";
import React from "react";
import imgLove from "../../../public/assets/Mask group.png";
import heartImg from "../../../public/assets/heart-svgrepo-com.png";
import imgBgDetail from "../../../public/assets/image 5.png";
import Link from "next/link";

export default function Message() {
  return (
    <div className="h-screen bg-gradient-to-br from-[#EA7A87] to-white to-70%">
      <Image
          src={imgBgDetail}
          alt="Imagem de backgroud detail"
          width={320}
          height={320}
          className="absolute bottom-0 right-0"
        />
      <header className="flex justify-end p-2">
        <Link
          href={"/"}
          className="flex items-center gap-4 bg-[#EA7A87] rounded-md px-2 group hover:bg-[#d4679e] transition-colors ease-in-out duration-300"
        >
          <span className="text-white font-semibold group-hover:opacity-75">
            Voltar
          </span>
          <Image
            src={heartImg}
            alt="Image heart"
            className="group-hover:scale-150 transition-transform duration-300 ease-in-out"
            width={50}
          />
        </Link>
      </header>
      <main className="flex gap-10 items-center justify-center p-5">
        <Image
          src={imgLove}
          alt="Imagem do amor da minha vida"
          width={500}
          height={500}
          className="shadow-2xl shadow-[#EA7A87] bg-red-300 rounded-full"
        />
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-3xl text-[#C31F3A] w-[610px] text-justify">
            Obvio que não sou seu filho, mas eu não poderia deixar de
            parabenizar você neste dia. Uma das coisas mais linda que vi em você
            foi a mãe incrível que você é. por isso desejo a você de todo meu
            coração um feliz dia das mães. ass: Seu amor!
          </h2>
          <p
            className="font-normal text-xl text-[#EA7A87] relative max-w-max 
            before:content-['']
            before:absolute
            before:top-0
            before:right-0
            before:left-0
            before:bottom-0
            before:bg-[#FDEFF180]
            before:animate-typewrite

            after:content-['']
            after:absolute
            after:top-0
            after:right-0
            after:left-0
            after:bottom-0
            after:w-[0.125rem]
            after:bg-[#EA7A87]
            after:animate-cursor
          "
          >
            ao infinito e além...
          </p>
        </div>
      </main>
    </div>
  );
}

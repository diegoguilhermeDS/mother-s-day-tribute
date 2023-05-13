import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="font-semibold text-3xl text-[#C31F3A]">Ops!!! essa página não existe</h1>
      <Link href="/" className="font-normal text-xl text-white bg-[#EA7A87] px-2 rounded-sm hover:opacity-70">Voltar</Link>
    </main>
  );
}

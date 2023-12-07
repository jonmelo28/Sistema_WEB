import Link from "next/link";
import React from "react";

export default function LoginForm(){
  return <form className="mt-8 w-full">
          <label htmlFor="email" className="block text-white">Email</label>
          <input type="email" name="email" id="email" placeholder="Digite seu email" className="w-full p-2 rounded-md" />
          <label htmlFor="password" className="block text-white mt-2">Senha</label>
          <input type="email" name="password" id="password" placeholder="Digite seu email" className="w-full p-2 rounded-md" />
          <button className="bg-sky-500 hover:bg-sky-600 transition-all p-2 text-white disabled:bg-zinc-500 w-full rounded-md mt-5">
            Entrar
          </button>
          <Link href="/auth/forgot-password" className="block text-center mt-4 text-sky-500 hover:underline">Esqueceu a senha ?</Link>
  </form>;
}
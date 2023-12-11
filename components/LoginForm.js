'use client';

import Link from "next/link";
import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

     const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);

     signIn('credentials',{
          email: emailRef.current.value,
          password: passwordRef.current.value,
          redirect: false,
      }).then(res => {
        setIsLoading(false);

        if (res.status === 401){
          return setMessage("Email ou senha errado");
        } else  if(res.error){
          return setMessage("ALgo deu errado, temte novamente mais tarde");
        }

        if(res.error) return;

        router.push("/");
        //02:50
      }).catch(err => alert("erro"));
     };

  return <form  onSubmit={handleSubmit}  className="mt-8 w-full">
          <label htmlFor="email" className="block text-white">Email</label>
          <input type="email" name="email" id="email" placeholder="Digite seu email" className="w-full p-2 rounded-md" ref={emailRef} />
          <label htmlFor="password" className="block text-white mt-2">Senha</label>
          <input type="password" name="password" id="password" placeholder="Digite sua senha" className="w-full p-2 rounded-md" ref={passwordRef} />
          <button  disabled={isLoading} className="bg-sky-500 hover:bg-sky-600 transition-all p-2 text-white
           disabled:bg-zinc-500 w-full rounded-md mt-5">
            Entrar
          </button>
          {
            message && <p className="text-red-500 text-center mt-4">{message}</p>
          }
          <Link href="/auth/forgot-password" className="block text-center mt-4 text-sky-500 hover:underline">Esqueceu a senha ?</Link>
  </form>;
}
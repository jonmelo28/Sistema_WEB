'use client';

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function layout({children}){
    const {data:session} = useSession();

    if(session?.user.role !== 'admin'){
        return (
           <div className="flex items-center justify-center mt-8 pl-5">
            <div className="" >
              <Image src="/images/restricted.png"
                 width={250}
                 height={250}
                 className=" block mx-auto"
              />
            </div>
             <div className="text-center mt-1 px-5">
               <h1 className="font-bold text-7xl">OOPS!</h1>
               <h2 className="font-bold text-4xl">Acesso negado</h2>
               <p className="mt-4">Você não possui permissão para acessar essa pagina,</p>
               <p>por favor entre em contado com o Administrador do sistema</p>
          </div> 
          </div>
        );
    }
    return children;
}
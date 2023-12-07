import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { faCartShopping, faChevronDown, faMoneyBill, faTruckFast, faUsers, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";

export default function Sidebar(){
    return ( 
    <aside className="bg-zinc-900 text-white
         h-full p-4 w-[250px] fixed" >
         <Link href="/">
           <Image src="/images/jm.png"
             width={150}
               height={150}
               className="block mx-auto"
           />
         </Link>
         <nav className="mt-8">
           <ul>
            {items.map((item, i) => {
                return(
                    <SidebarItem item={item} />
                );
            })}
           </ul>
         </nav>
    </aside>
    );
}

const items = [
    {
        name: "Usuários",
        icon: faUsers,
        subMenus: [
            {
                name: "Criar Usuário",
                href: "/users/create",
            },
            {
                name: "Listar Usuários",
                href: "/users",
            },
        ],
    },
    {
        name: "Produtos",
        icon: faCartShopping,
        subMenus: [
            {
                name: "Cadastrar Produto",
                href: "/products/create",
            },
            {
                name: "Listar Produtos",
                href: "/products",
            },
        ],
    },
    {
        name: "Vendas",
        icon: faMoneyBill,
        subMenus: [
            {
                name: "Criar Vendas",
                href: "/sales/create",
            },
            {
                name: "Listar Vendas",
                href: "/sales",
            },
        ],
    },
    {
        name: "Fornecedores",
        icon: faTruckFast,
        subMenus: [
            {
                name: "Cadastrar Fornecedor",
                href: "/supplier/create",
            },
            {
                name: "Listar Fornecedores",
                href: "/supplier",
            },
        ],
    },
    {
        name: "Armázens",
        icon: faWarehouse,
        subMenus: [
            {
                name: "Cadastrar Armázem",
                href: "/warehouse/create",
            },
            {
                name: "Listar Armázens",
                href: "/warehouse",
            },
        ],
    },

];
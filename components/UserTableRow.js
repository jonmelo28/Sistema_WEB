import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UserTableRow({i}){
    return (
        <tr data-index={i % 2} className="bg-zinc-300 data-[index='0']:bg-zinc-100 ">
        <td>{i}</td>
        <td className="p-2">Jonatha</td>
        <td className=" font-normal">jonatha@email.com</td>
        <td className=" font-normal">Admin</td>
        <td className=" font-normal">31</td>
        <td className=" font-normal">M</td>
        <td className=" font-normal">+557999999-9999</td>
        <td className="flex gap-2 p-2">
            <Link href="/users/jonatha@email.com" 
            className="bg-sky-500 w-8 h-8 rounded-md text-zinc-900 hover:bg-sky-600 p-1 transition-all"> 
            <FontAwesomeIcon icon={faPencil} className="w-5" />
            </Link>
            <button 
            className="bg-red-500 w-8 h-8 rounded-md text-zinc-900 hover:bg-red-600 p-1 transition-all">
                <FontAwesomeIcon icon={faTrash} className="w-4" />
            </button>
        </td>
      </tr>
    );
}
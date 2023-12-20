import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UserTableRow({user,i}){
    const calculateAge = (birthday) => {
        const date = new Date();
        const birthdayDate = new Date(birthday);
        const age = Math.abs(date.getUTCFullYear() - birthdayDate.getUTCFullYear());
        return age;
    }
    return (
        <tr data-index={i % 2} className="bg-zinc-300 data-[index='0']:bg-zinc-100 ">
        <td>{i}</td>
        <td className="p-2">{user.firstName +" "+ user.lastName}</td>
        <td className=" font-normal">{user.email}</td>
        <td className=" font-normal">{user.role}</td>
        <td className=" font-normal">{calculateAge(user.birthday)}</td>
        <td className=" font-normal">{user.gender}</td>
        <td className=" font-normal">{user.phone}</td>
        <td className="flex gap-2 p-2">
            <Link href={"/users/"+ user.email }
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
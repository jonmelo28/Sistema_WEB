'use client';

import React, { useEffect, useState } from "react";
import UserTableRow from "@/components/UserTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function UsersTable(){

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);

    useEffect(() => {
        setIsLoadingUsers(true);
        fetch("/api/users").then((res) => res.json()).then((data) => {
            setUsers(data.users);
            setIsLoadingUsers(false);
        } ).catch((err) => {
                alert("Ocorreu um erro ao buscar usuários");
                setIsLoadingUsers(false);
                console.log(err);
            });
    },[]);

    const handleDeleteUser = (email, setIsDeleting) => {
      setIsDeleting(true);
      fetch("/api/users/"+ email, {
        method:"DELETE",
        
    }).then((res) => {
        if(!res.ok){
            throw new Error("Ocorreu um erro ao deletar o Usuário com email 1 "+ email);
        }else{
            return res;
        }
    }).then((data) => {
        alert("Usuário "+ email +" deletado com sucesso");
        setIsDeleting(false);
        const newUsers = users.filter((user) => user.email !== email);
        setUsers(newUsers);
    }).catch((err) => {
        alert("Ocorreu um erro ao deletar o Usuário 2 "+ email);
        setIsDeleting(false);
    });
    }

    return (<>

    <p className="mb-8">Usuários totais: {users.length}</p>
    <table className="w-full">
            <thead className="bg-zinc-700 text-white">
                <tr className="text-left">
                  <th>#</th>
                  <th className="p-2">Nome</th>
                  <th>Email</th>
                  <th>Função</th>
                  <th>Idade</th>
                  <th>Genêro</th>
                  <th>Telefone</th>
                  <th>Ações</th>
                  </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                    return <UserTableRow 
                    key={user._id} 
                    user={user} 
                    i={i+1} 
                    handleDeleteUser={handleDeleteUser} />
              })}
            </tbody>
        </table>
        {
            isLoadingUsers && (
               <p className="mt-16 text-center">
                 <FontAwesomeIcon icon={faCircleNotch} className=" animate-spin w-6" />
               </p>    
            )}
        </>);
}
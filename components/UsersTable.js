'use client';

import React, { useEffect, useState } from "react";
import UserTableRow from "@/components/UserTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function UsersTable(){

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("/api/users").then((res) => res.json()).then((data) => {
            setUsers(data.users);
            setIsLoading(false);
        } ).catch(err => {
                alert("Ocorreu um erro ao buscar usuários");
                setIsLoading(false);
                console.log(err);
            });
    },[]);
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
                    return <UserTableRow user={user} i={i+1} />
              })}
            </tbody>
        </table>
        {
            isLoading && (
               <p className="mt-16 text-center">
                 <FontAwesomeIcon icon={faCircleNotch} className=" animate-spin w-6" />
               </p>    
            )}
        </>);
}
'use client';

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import UserForm from "@/components/UserForm";
import { useRouter } from "next/navigation";

export default function page(){
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleCreateUser = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);

        const userData = {}
        for(const[key,value] of formData.entries()){
            userData[key] = value;
        }
        fetch('/api/users', {
            method:"POST",
            body: JSON.stringify(userData),
            //ficou no video 3 01:55:00
        }).then((res) => {
            if(!res.ok){
                throw new Error("Ocorreu um erro ao cadastrar Usuário");
            }else{
                return res.json();
            }
        }).then((data) => {
            alert("Usuário "+ userData.email +" cadastrado com sucesso");
            setIsLoading(false);
            router.push("/users");
        }).catch(err => {
            alert("Ocorreu um erro ao cadastrar o Usuário"+ userData.email);
            setIsLoading(false);
        });
    }

    return (<>
     <PageHeader title="Cadastrar Usuário"></PageHeader>
     <section className="mt-8">
        <UserForm onSubmit={handleCreateUser} isLoading={isLoading} />
     </section>


    </>
    );
}
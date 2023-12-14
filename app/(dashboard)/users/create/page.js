'use client';

import React from "react";
import PageHeader from "@/components/PageHeader";
import UserForm from "@/components/UserForm";

export default function page(){
    const handleCreateUser = (e) => {
        e.preventDefault();
        const formData = new FormData();
        fetch('/api/users', {
            method:"POST",
            //ficou no video 3 00:49:32
        });
    }

    return (<>
     <PageHeader title="Cadastrar Usuário"></PageHeader>
     <section className="mt-8">
        <UserForm onSubmit={handleCreateUser}/>
     </section>


    </>
    );
}
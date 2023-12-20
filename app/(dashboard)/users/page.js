import React from "react";
import PageHeader from "@/components/PageHeader";
import UsersTable from "@/components/UsersTable";


export default function page(){
    return <>
     <PageHeader title="Lista de Usuários">Lista todos os Usuários</PageHeader>
    <section className="mt-8">
       <UsersTable/>        
    </section>
    </>;
}
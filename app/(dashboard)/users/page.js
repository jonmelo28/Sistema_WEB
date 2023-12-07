import React from "react";
import UserTableRow from "@/components/UserTableRow";
import PageHeader from "@/components/PageHeader";


export default function page(){
    return <>
     <PageHeader title="Lista de Usuários">Lista todos os Usuários</PageHeader>
    <section className="mt-8">
        <p className="mb-8">Usuários totais: 8</p>
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
              <UserTableRow i={1} />
              <UserTableRow i={2} />
              <UserTableRow i={3} />
              <UserTableRow i={4} />
            </tbody>
        </table>
    </section>
    </>;
}
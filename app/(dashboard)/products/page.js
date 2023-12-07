import React from "react";
import ProductTableRow from "@/components/ProductTableRow";
import PageHeader from "@/components/PageHeader";


export default function page(){
    return <>
        
        <PageHeader title="Lista de Produtos"></PageHeader>
        <section className="mt-8">
        <p className="mb-8">Usuários totais: 8</p>
        <table className="w-full">
            <thead className="bg-zinc-700 text-white">
                <tr className="text-left">
                  <th>#</th>
                  <th className="p-2">Produto</th>
                  <th>Categoria</th>
                  <th>Qtd</th>
                  <th>Custo</th>
                  <th>Custo/Total</th>
                  <th>Preço</th>
                  <th>Ações</th>
                  </tr>
            </thead>
            <tbody>
              <ProductTableRow i={1} />
              <ProductTableRow i={2} />
              <ProductTableRow i={3} />
              <ProductTableRow i={4} />
            </tbody>
        </table>
      </section>
    </>;
}
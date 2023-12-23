"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ProductForm from "@/components/ProductFrom";
import { useRouter } from "next/navigation";

export default function page(){
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleCreateProduct = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);

        const productData = {}
              for(const[key,value] of formData.entries()){
            productData[key] = value;
        }
        fetch('/api/products', {
            method:"POST",
            body: JSON.stringify(productData),
                       
        }).then((res) => {
            if(!res.ok){
                throw new Error("Ocorreu um erro ao cadastrar o Produto");
            }else{
                return res.json();
            }
        }).then((data) => {
            alert("Produto "+ productData.product +" cadastrado com sucesso");
            setIsLoading(false);
            router.push("/products");
        }).catch(err => {
            alert("Ocorreu um erro ao cadastrar o Produto "+ productData.product );
            setIsLoading(false);
            console.log(err);
        });
        
    };

    return (<>
     <PageHeader title="Cadastrar Produto"></PageHeader>
     <section className="mt-8">
       <ProductForm onSubmit={handleCreateProduct} isLoading={isLoading} />
     </section>


    </>
    );
}
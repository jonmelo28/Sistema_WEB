import React from "react";

export default function ProductForm({onSubmit, isLoading}){
    return (
        <form className="max-w-md" onSubmit={onSubmit}>
        <div className="flex gap-4">
            <div className="form-group">
                <label htmlFor="product">Produto</label>
                <input type="text" name="product" id="product" required /> 
            </div>
             <div className="form-group">
                <label htmlFor="brand">Marca/Fabricante</label>
                <input type="text" name="brand" id="brand" required /> 
            </div>
            
        </div>
        
        <div className="flex gap-4">
            <div className="form-group">
                <label htmlFor="category">Categoria</label>
                <select  name="category" id="category" className="w-full cursor-pointer">
                    <option value="eletronic">Eletrônicos</option>
                    <option value="computing">Informática</option>
                    <option value="entertainment">Lazer e Entretenimento</option>
                    <option value="house">Casa</option>
                    <option value="fashion">Moda e Beleza</option>
                    <option value="sport">Esporte</option>
                    <option value="health">Saúde e Bem-estar</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantidade</label>
                <input type="number" name="quantity" id="quantity" required />
            </div>
            
        </div>
        <div className="flex gap-4">
            <div className="form-group">
                <label htmlFor="cost">Custo</label>
                <input type="number" name="cost" id="cost" required />
            </div>
            <div className="form-group">
                <label htmlFor="price">Preço</label>
                <input type="number" name="price" id="price" required />
            </div>                
        </div>
        <div className="form-group">
            <label htmlFor="description">Descrição</label>
            
            <textarea name="description" id="description" rows="5" className="w-full"></textarea>
        </div>
        <button disabled={isLoading} className="bg-sky-500 hover:bg-sky-600 transition-all p-2 text-white disabled:bg-zinc-500 w-full rounded">
            Cadastrar Produto
        </button>
    </form>
    );
}
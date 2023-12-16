import React from "react";

export default function UserForm({onSubmit, isLoading}){
    return (
        <form className="max-w-md" onSubmit={onSubmit}>
            <div className="flex gap-4">
                <div className="form-group">
                    <label htmlFor="firstName">Nome</label>
                    <input type="text" name="firstName" id="firstName" required /> 
                </div>
                 <div className="form-group">
                    <label htmlFor="lastName">Sobrenome</label>
                    <input type="text" name="lastName" id="lastName" required /> 
                </div>
                
            </div>
            <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email" required /> 
            </div>
            <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" required /> 
            </div>
            <div className="flex gap-4">
                <div className="form-group">
                    <label htmlFor="birthday">Data de Nascimento</label>
                    <input type="date" name="birthday" id="birthday" required /> 
                </div>
                 <div className="form-group">
                    <label>Genêro</label>
                    <div>
                        <label htmlFor="male">
                            M{" "}
                            <input type="radio" value="M" name="gender" id="male" required />
                        </label>
                        <label htmlFor="female" className="mx-4">
                            F{" "}
                            <input type="radio" value="F" name="gender" id="female" required />
                        </label>
                        <label htmlFor="anonymous">
                            X{" "}
                            <input type="radio" value="X" name="gender" id="anonymous" required />
                        </label>
                    </div>
                </div>
                
            </div>
            <div className="flex gap-4">
                <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="number" name="phone" id="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Função</label>
                    <select  name="role" id="role" className="w-full cursor-pointer">
                        <option value="user">Usuário</option>
                        <option value="admin">Administrador</option>
                    </select>
                </div>
            </div>
            <button
             disabled={isLoading}
             className="bg-sky-500 hover:bg-sky-600 transition-all p-2 text-white disabled:bg-zinc-500 w-full rounded">
                Cadastrar Usuário
            </button>
        </form>
    );
}
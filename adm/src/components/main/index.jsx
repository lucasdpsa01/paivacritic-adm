import { useState } from 'react';
import { supabase } from '../../services/supabase';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

export default function Main() {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [situacao, setSituacao] = useState("")
    const [nota, setNota] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();

        if (!nome || !descricao || !situacao || !nota) {
            alert("Preencha todos os campos!")
            return
        };

        const { data, error } = await supabase
        .from("jogos")
        .insert({
            nome,
            descricao,
            situacao,
            nota,
        })

        if (error) {
            console.error(error)
            alert("Erro ao enviar os dados!")
        } else {
            alert("Jogo adicionado com sucesso!")
            console.log(data)
            
            setNome("");
            setDescricao("");
            setSituacao("");
            setNota("");
        }
    }

    return (
        <div className='form-container'>
            <form className='form-main' onSubmit={handleSubmit}>
                <input
                    className='form-control form-control-sm'
                    aria-label=".form-control-sm example"
                    type="text"
                    placeholder="Nome do Jogo"
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                    required
                />
                <textarea
                    className='form-control form-control-sm'
                    id='floatingTextarea'
                    placeholder="Comente algo sobre o jogo"
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                    required
                ></textarea>
                <select className="form-select form-select-sm" 
                aria-label="Small select example"
                onChange={(e) => setSituacao(e.target.value)}
                value={situacao}
                >
                    <option value="" disabled hidden required>Status</option>
                    <option value="Zerei">Zerei</option>
                    <option value="Ainda estou jogando">Ainda estou jogando</option>
                    <option value="Dropei">Dropei</option>
                    <option value="Em breve">Em breve</option>
                </select>
                <input 
                type="number" 
                onChange={(e) => setNota(e.target.value)}
                value={nota}
                min={1}
                max={100}
                />

                <button type="submit" className='button'>Enviar</button>
            </form>
        </div>
    )
}
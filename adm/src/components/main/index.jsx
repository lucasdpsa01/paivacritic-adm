import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"

export default function Main() {

    return (
        <div className='form-container'>
            <form className='form-main'>
                <input
                    className='form-control form-control-sm'
                    aria-label=".form-control-sm example"
                    type="text"
                    placeholder="Nome do Jogo"
                    required
                />
                <textarea
                    className='form-control'
                    id='floatingTextarea'
                    placeholder="Comente algo sobre o jogo"
                    required
                ></textarea>
                <select className="form-select form-select-sm" aria-label="Small select example">
                    <option value="" disabled hidden required>Status</option>
                    <option value="1">Zerei</option>
                    <option value="2">Ainda estou jogando</option>
                    <option value="3">Dropei</option>
                    <option value="4">Em breve</option>
                </select>
                <select className="form-select form-select-sm" aria-label="Small select example">
                    <option value="" disabled hidden required>Avaliação</option>
                    <option value="1">Muito bom!</option>
                    <option value="2">Bom</option>
                    <option value="3">Médio</option>
                    <option value="4">Não gostei</option>
                </select>

                <button type="submit" className='button'>Enviar</button>
            </form>
        </div>
    )
}
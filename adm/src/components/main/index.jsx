import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {

    return (
        <form onSubmit={handleSubmit}>
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
                <option selected>Status</option>
                <option value="1">Zerei</option>
                <option value="2">Ainda estou jogando</option>
                <option value="3">Dropei</option>
                <option value="4">Em breve</option>
            </select>

            <button type="submit">Enviar</button>
        </form>
    )
}
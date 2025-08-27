@extends('layout.app')

@section('form')
<form method="POST" enctype="multipart/form-data">
    @csrf
    <div class="mb-3" id="divForm">
        <label for="inputName" class="form-label">Nome do Jogo</label>
        <input type="text" class="form-control" id="inputName">
    </div>
    <div class="mb-3" id="divForm">
        <label for="formFile" class="form-label">Imagem</label>
        <input class="form-control form-control" type="file" name="foto" id="formFile">
    </div>
    <div class="mb-3" id="divForm">
        <label class="form-label">Status</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>Selecione o status</option>
            <option value="1">Concluido</option>
            <option value="2">Jogando</option>
            <option value="3">Em breve</option>
        </select>
    </div>
    <div class="mb-3" id="divForm">
        <label class="form-label">Qual é sua nota?</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>Selecione o status</option>
            <option value="1">Muito bom</option>
            <option value="2">Mais ou Menos</option>
            <option value="3">Ruim</option>
        </select>
    </div>
    <div class="mb-3" id="divForm">
        <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
        <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary" id="btn">Adicionar Jogo</button>
</form>
@endsection
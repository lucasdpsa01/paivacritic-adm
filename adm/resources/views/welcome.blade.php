@extends('layout.app')

@section('form')
<form method="POST" enctype="multipart/form-data">
    @csrf
    <div class="mb-3">
        <label for="inputName" class="form-label">Nome do Jogo</label>
        <input type="text" class="form-control" id="inputName">
    </div>
    <div id="mb-3">
        <label for="formFile" class="form-label">Imagem</label>
        <input class="form-control" type="file" name="foto" id="formFile">
    </div>
    <div id="mb-3">
        <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">Concluido</option>
            <option value="2">Jogando</option>
            <option value="3">Em breve</option>
        </select>
    </div>
    
    <button type="submit" class="btn btn-primary">Adicionar Jogo</button>
</form>
@endsection
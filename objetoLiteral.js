const user = {
    nome: 'Ryan',
    email: 'r@r.com',
    nascimento: '2001-10-11',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
};
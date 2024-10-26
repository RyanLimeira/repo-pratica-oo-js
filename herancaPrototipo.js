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

const admin = {
    nome: 'Lucas',
    email: 'l@l.com',
    nascimento: '2001-10-11',
    role: 'admin',
    ativo: true,
    criarCurso: function() {
        console.log('Curso criado');
    }
}

Object.setPrototypeOf(admin, user)
admin.exibirInfos()
admin.criarCurso()
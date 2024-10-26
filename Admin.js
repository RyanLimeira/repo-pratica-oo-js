import User from './User.js'

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'Admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas){
        return `Curso ${nomeCurso} criado! Total de vagas: ${qtdVagas}.`
    }

    excluirCurso(nomeCurso){
        return `Curso de ${nomeCurso} deletado!`
    }

    desativarPerfil(nome, email){
        return `Perfil de ${nome}, email: ${email} desativado!`
    }
}

// const novoAdmin = new Admin('Ryan', 'r@r.com', '2024-01-01', 'Admin')
// console.log(novoAdmin.criarCurso('Ads', 20));
// console.log(novoAdmin.excluirCurso('Dados'));
// console.log(novoAdmin.desativarPerfil('Ryan', 'r@r.com'));
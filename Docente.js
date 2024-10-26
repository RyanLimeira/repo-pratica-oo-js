import User from './User.js'

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'Docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(nomeEstudante){
        return `Estudante ${nomeEstudante} aprovado!`
    }

    reprovarEstudante(nomeEstudante){
        return `Estudante ${nomeEstudante} reprovado!`
    }
}

// const novoDocente = new Docente('Ryan', 'r@r.com', '2024-01-01')
// console.log(novoDocente.aprovarEstudante('Luiza'));
// console.log(novoDocente.aprovarEstudante('Larissa'));
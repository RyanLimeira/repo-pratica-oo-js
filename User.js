export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, sobrenome, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    get nome() {
        return this.#nome
    }

    get sobrenome() {
        return this.#sobrenome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === ' ') {
            throw new Error('Formato não válido.')
        }
        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
    }

    criarPerfil(nome, email, nascimento, role, ativo){
        return `Perfil de ${nome} criado! Email: ${email}`
    }

    apagarPerfil(nome, email){
        return `Perfil de ${nome} deletado! Email: ${email}`
    }

    exibirInfos() {
        if (this.role === "estudante") {
          return `dados estudante: ${this.nome}`
        }
        if (this.role === "admin") {
          return `dados admin: ${this.nome}, ${this.role}`
        }
        if (this.role === "docente") {
          return `dados docente: ${this.nome}, ${this.email}`
        }
      }
      static exibirInfosGenericas(nome, email) {
        return `${nome}, ${email}`
      }

      exibirInfos(tipoInfo) {
        if (tipoInfo === "basic") {
          return `dados básicos: ${this.nome}`
        }
        if (tipoInfo === "complete") {
          return `dados completos: ${this.nome}, ${this.email}, ${this.nascimento}`
        }
      }
}

// const novoUser = new User('Ryan', 'r@r.com', '2024-01-01')
// console.log(novoUser.criarPerfil('Luana', 'l@l.com', '2024-01-01'))
// console.log(novoUser.apagarPerfil('Luana', 'l@l.com'))
// console.log(novoUser.exibirInfos())
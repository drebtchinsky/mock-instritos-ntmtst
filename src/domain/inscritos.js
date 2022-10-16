module.exports = class Inscritos {

    constructor({
        nome,
        email,
        telefone,
        inscritoRepository
    }) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.inscritoRepository = inscritoRepository
    }

    inscrever() {
        const {
            nome,
            email,
            telefone
        } = this;
        return this.inscritoRepository.cadastrar({
            nome,
            email,
            telefone
        })
    }

    listDeInscritos() {
        return this.inscritoRepository.lista()
    }

    validaNome() {
        return !this.nome
    }
    validaEmail() {
        return !this.email
    }
    validaTelefone() {
        return !this.telefone
    }
}
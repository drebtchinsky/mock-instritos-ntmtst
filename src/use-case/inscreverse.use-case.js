const Inscritos = require("../domain/inscritos");
const { inscritoRepository } = require("../repository");

module.exports = class InscreverseUseCase {
    execute(body) {
        const {
            nome,
            email,
            telefone,
        } = body;
        const inscrito = new Inscritos({
            nome,
            email,
            telefone,
            inscritoRepository
        });
        const isValid = [
            inscrito.validaEmail(),
            inscrito.validaNome(),
            inscrito.validaTelefone()
        ]

        for (const test of isValid) {
            if (!test) {
                throw Error('Informações invalidar')
            }
        }

        return inscrito.inscrever()
    }
}
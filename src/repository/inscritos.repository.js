module.exports = class InscritoRepository {
    constructor({ inscritoModel }) {
        this.inscritoModel = inscritoModel;
    }

    cadastrar({
        nome,
        email,
        telefone
    }) {
        return this.inscritoModel.save({
            nome,
            email,
            telefone
        })
    } 
    
    lista({
        id,
        nome,
        email,
        telefone
    }) {
        return this.inscritoModel.find({
            id,
            nome,
            email,
            telefone
        })
    }

}
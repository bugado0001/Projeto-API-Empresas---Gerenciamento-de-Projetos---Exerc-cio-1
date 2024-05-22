const Departamento = require("../models/Departamento")

async function buscarTodos(req, res){
    res.json(await Departamento.find())
}

async function DBbuscarPorID(req, res){ 
    const departamento = await Departamento.findById(req.params.id)
    if (departamento){ 
        res.json(departamento)
    }else{ 
        res.status(404).json({mensagem: "funcionario não encontrado"})
    }
}
async function DBcriar(req, res) {
    const departamento = new Departamento(req.body)
    const departamentoCriado = await departamento.save()
    res.status(201).json(departamentoCriado)
}

async function DBatualizar(req, res) {
    const departamentoAtualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (departamentoAtualizado) {
        res.json(
            {
                mensagem: "Funcionario atualizado com sucesso!",
                departamentoAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Funcionnrio não encontrado!" })
    }
}

async function DBexcluir(req, res) {
    const departamentoExcluido = await Departamento.findByIdAndDelete(req.params.id)
    if (departamentoExcluido) {
        res.json(
            {
                mensagem: "Pessoa excluido com sucesso!",
                departamentoExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Depatamento não encontrado!" })
    }
}


module.exports = {
    buscarTodos,
    DBbuscarPorID,
    DBcriar,
    DBatualizar,
    DBexcluir
}
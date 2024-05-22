const yup = require("yup")

const schema = yup.object().shape(
    {
        nome: yup.string("Campo nome precisa ser um texto").required("campo nome é obtigatorio"),
        descricao: yup.string("campo descrção precisa ser um texto"),
        
    }

)

function validarDepartamento(req, res, next) {
    schema.validate(req.body, { abortEarly: false })
       
    .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: "erros na validação",
            erro: err.errors

        })
        )
}


module.exports = {
    validarDepartamento
}
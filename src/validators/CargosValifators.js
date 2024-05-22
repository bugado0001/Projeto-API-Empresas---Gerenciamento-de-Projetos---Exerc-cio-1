const yup = require("yup")

const schema = yup.object().shape(
    {
        nome: yup.string("Campo nome precisa ser um texto").required("campo nome é obtigatorio"),
        descricao: yup.string("campo descrção precisa ser um texto"),
        salario: yup.number("Campo salario prexisa ser numerico").min(1412, "Campo salario preicisar ser maior que o salario minimo ").required("Campo salario é obrigatorio"),
    }

)

function validarCargo(req, res, next) {
    schema.validate(req.body, { abortEarly: false })
       
    .then(() => next())
        .catch(err => res.status(400).json({
            mensagem: "erros na validação",
            erro: err.errors

        })
        )
}


module.exports = {
    validarCargo
}
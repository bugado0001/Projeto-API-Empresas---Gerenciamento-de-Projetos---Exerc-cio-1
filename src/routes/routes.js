const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/CargoControle')
const DepartamentoController = require("../controllers/DepartamentoControle")
// validators
const { validarCargo } = require('../validators/CargosValifators')
const {validarDepartamento} = require("../validators/Departamento") 

// Cargo
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', CargoController.excluir)


// Funcionarios
router.get('/depatamento', DepartamentoController.buscarTodos)
router.get('/depatamento/:id', DepartamentoController.DBbuscarPorID)
router.post('/depatamento', validarDepartamento, DepartamentoController.DBcriar)
router.put('/depatamento/:id', validarDepartamento, DepartamentoController.DBatualizar)
router.delete('/depatamento/:id', DepartamentoController.DBexcluir)


// Departamentos







module.exports = router
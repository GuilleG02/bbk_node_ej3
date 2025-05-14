
const logplease = require("logplease");

const { esPar } = require("./numeros");

const logger = logplease.create("bbk_node_ej3");

const numeros = [2, 3, 101, 201, 202, 100];

numeros.forEach((numero) => {

    if (esPar(numero)) {

        logger.info(`El número ${numero} es par`);
        
    } else {

        logger.error(`El número ${numero} no es par`);
    }
});


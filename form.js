function checkNumDocumento(valor, tipo){
    let expression = /([0-9]){8,10}/;

    switch (tipo){
        case "CC":
            return expression.test(valor);
        case "TI":
            return expression.test(valor)
        case "TR":
            return expression.test(valor)
        case "PP":
            return expression.test(valor)
        default:
            return false;
    }
}

function  checkCorreo(valor) {
    let expression = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return expression.test(valor)
}

function  checkContrasena(valor){
    let expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return expression.test(valor)
}


module.exports = {checkNumDocumento,checkCorreo,checkContrasena}

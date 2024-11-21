const formatoMoeda = (valor, moeda, localeString) => {
    const options = { style: "moeda", moeda}
    return value.toLocaleString(localeString, options)
}

formatoMoeda(a, 'BRL', 'pt-BR');
function show(companies){
    companies.forEach(
        (elemento) => {
            /* elemento.name = 'abcde..........' */
            console.log(`${elemento.name.padEnd(15, '.')}${elemento.founded}`);
        }
    );
}

export default show;
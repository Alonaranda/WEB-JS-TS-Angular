const mostrarreloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr} : ${min} : ${seg}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abri', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie' ,'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDay();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}, ${fecha.getFullYear()}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
        return hora;
    }else{
        return hora;
    }
}

setInterval(mostrarreloj, 1000);
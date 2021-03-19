const personas = [];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
        console.log(texto);
        document.getElementById('personas').innerHTML = texto;
    }
}

function agregarPersona(){
    const forma = document.forms['forma'];
    console.log(forma);
    const nombre =forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' || apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }else{
        alert("Escribe tu nombre");
    }

}
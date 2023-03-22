function GuardarSession(){
    // Guardar un valor en sessionStorage
    sessionStorage.setItem('Nombre', document.getElementById("nombres").value);
    sessionStorage.setItem('Apellido', document.getElementById("apellidos").value);
}
function LimpiarSession(){
    // Borrar un valor en sessionStorage
    sessionStorage.removeItem('Nombre');
    sessionStorage.removeItem('Apellido');
}
function GuardarLocal(){
    // Guardar un valor en LocalStorage
    localStorage.setItem('Nombre', document.getElementById("nombrel").value);
    localStorage.setItem('Apellido', document.getElementById("apellidol").value);
}
function LimpiarLocal(){
    // Borrar un valor en LocalStorage
    localStorage.removeItem('Nombre');
    localStorage.removeItem('Apellido');
}
//Variables que verifican el presionamiento del boton
var boton = document.querySelector("#guardarS");
boton.onclick = GuardarSession;
var boton1 = document.querySelector("#guardarL");
boton1.onclick = GuardarLocal;
var boton3 = document.querySelector("#limpiarL");
boton3.onclick = LimpiarLocal; 
var boton3 = document.querySelector("#limpiarS");
boton3.onclick = LimpiarSession; 

//Declaracion de vectores donde se encuentran los datos a iterar
var ubicacion = [document.getElementById("session"), document.getElementById("local")]
var fuente = [sessionStorage, localStorage]

//Creacion de tabla e insersion de datos
for(var i=0; i<ubicacion.length; i++){
    var Fuente = fuente[i];
    //Manejo de DOM
    const rowSession = ubicacion[i];
    //Creacion de tabla
    const table = document.createElement('table');
    table.setAttribute('class', 'table table-dark table-striped-columns mt-3');
    rowSession.appendChild(table);
    //Creacion cabezales de la tabla
    const tread = document.createElement('thead');
    table.appendChild(tread);
    const tr = document.createElement('tr');
    tread.appendChild(tr);
    const th = document.createElement('th');
    tr.appendChild(th);
    th.innerText = "Nombre";
    const th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.innerText = "Apellido";
    //Creacion del cuerpo de la tabla
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    //Creacion de los compos para mostrar la informacion
    const trbody_tabla = document.createElement('tr');
    const tdbody_clave = document.createElement('td');
    const tdbody_atributo = document.createElement('td');
    tbody.appendChild(trbody_tabla);
    trbody_tabla.appendChild(tdbody_clave);
    trbody_tabla.appendChild(tdbody_atributo);
    //Clases
    tr.setAttribute('class', 'text-center');
    tdbody_atributo.setAttribute('class', 'text-center');
    tdbody_clave.setAttribute('class', 'text-center');
    console.log(Fuente[1] + " //");
    //Mostrar datos
    for(j=0; j<Fuente.length; j++){
        tdbody_clave.innerHTML = Fuente.getItem('Nombre',Fuente.key(j));
        tdbody_atributo.innerHTML = Fuente.getItem('Apellido',Fuente.key(j));
    }
}

//Segunda tabla


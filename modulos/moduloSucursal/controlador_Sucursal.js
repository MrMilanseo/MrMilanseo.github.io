/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let Sucursales = [];

const objSucursal = {
    id: 0,
    nombre_sucursal: '', 
    nombre_titular: '',
    rfc: '',
    colonia: '',
    calle: '',
    numero: '',
    ciudad: '',
    estado: '',
    codigo_postal: '',
    telefono: '',
    longitud: '',
    latitud: '',
    estatus: ''
};

let editando = false;

const formulario = document.querySelector('#formulario');
const nombre_sucursal_input = document.querySelector('#txtNombreSucursal');
const nombre_titular_input = document.querySelector('#txtNombreTitular');
const rfc_input = document.querySelector('#txtRFC');
const colonia_input = document.querySelector('#txtColonia');
const calle_input = document.querySelector('#txtCalle');
const numero_input = document.querySelector('#txtNum');
const ciudad_input = document.querySelector('#txtCiudad');
const estado_input = document.querySelector('#txtEstado');
const codigo_postal_input = document.querySelector('#txtCP');
const telefono_input = document.querySelector('#txtTel');
const longitud_input = document.querySelector('#txtLongitud');
const latitud_input = document.querySelector('#txtLatitud');
const botonAdd = document.querySelector('#btnAdd');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    
    if(nombre_sucursal_input.value === '' || nombre_titular_input.value === '' || rfc_input.value === '' || colonia_input.value === '' || calle_input.value === '' ||
            numero_input.value === '' || ciudad_input.value === '' || estado_input.value === '' || codigo_postal_input.value === '' || telefono_input.value === '' ||
            longitud_input.value === '' || latitud_input.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Campos vacios',
            text: 'Uno o varios campos estan vacios',
            footer: 'Porfavor verifique que todos los campos esten rellenos'
        });
        return ;
    }else{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Registro realizado con exito'
          })
    }
    
    if(editando){
        editarSucursal();
        editando = false;
    }else{
        objSucursal.id = Sucursales.length + 1;
        objSucursal.nombre_sucursal = nombre_sucursal_input.value;
        objSucursal.nombre_titular = nombre_titular_input.value;
        objSucursal.rfc = rfc_input.value;
        objSucursal.colonia = colonia_input.value;
        objSucursal.calle = calle_input.value;
        objSucursal.numero = numero_input.value;
        objSucursal.ciudad = ciudad_input.value;
        objSucursal.estado = estado_input.value;
        objSucursal.codigo_postal = codigo_postal_input.value;
        objSucursal.telefono = telefono_input.value;
        objSucursal.longitud = longitud_input.value;
        objSucursal.latitud = latitud_input.value;
        objSucursal.estatus = 'Activo';
        
        agregarSucursal();
    }
}

function agregarSucursal() {

    Sucursales.push({...objSucursal});

    mostrarSucursales();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    //objSucursal.id= 0;
    objSucursal.nombre_sucursal= ''; 
    objSucursal.nombre_titular= '';
    objSucursal.rfc= '';
    objSucursal.colonia= '';
    objSucursal.calle= '';
    objSucursal.numero= '';
    objSucursal.ciudad= '';
    objSucursal.estado= '';
    objSucursal.codigo_postal= '';
    objSucursal.telefono= '';
    objSucursal.longitud= '';
    objSucursal.latitud= '';
    objSucursal.estatus= '';
}

function  mostrarSucursales(){
//    let cuerpo = "";
    limpiarHTML();
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    
    Sucursales.forEach(sucursal => {
        const { id, nombre_sucursal, nombre_titular, rfc, colonia, calle, numero, ciudad, estado, codigo_postal, telefono, longitud, latitud, estatus} = sucursal;

        const trBody = document.createElement('tr');

        const tdId = document.createElement('td');
        const textTdId = document.createTextNode(id);
        tdId.appendChild(textTdId);

        const tdSucursal = document.createElement('td');
        const textTdSucursal = document.createTextNode(nombre_sucursal);
        tdSucursal.appendChild(textTdSucursal);

        const tdTitular = document.createElement('td');
        const textTdTitular = document.createTextNode(nombre_titular);
        tdTitular.appendChild(textTdTitular);
        
        const tdRFC = document.createElement('td');
        const textTdRFC = document.createTextNode(rfc);
        tdRFC.appendChild(textTdRFC);
        
        const tdColonia = document.createElement('td');
        const textTdColonia = document.createTextNode(colonia);
        tdColonia.appendChild(textTdColonia);
        
        const tdCalle = document.createElement('td');
        const textTdCalle = document.createTextNode(calle);
        tdCalle.appendChild(textTdCalle);
        
        const tdNumero = document.createElement('td');
        const textTdNumero = document.createTextNode(numero);
        tdNumero.appendChild(textTdNumero);
        
        const tdCiudad = document.createElement('td');
        const textTdCiudad = document.createTextNode(ciudad);
        tdCiudad.appendChild(textTdCiudad);
        
        const tdEstado = document.createElement('td');
        const textTdEstado = document.createTextNode(estado);
        tdEstado.appendChild(textTdEstado);
        
        const tdCP = document.createElement('td');
        const textTdCP = document.createTextNode(codigo_postal);
        tdCP.appendChild(textTdCP);
        
        const tdTelefono = document.createElement('td');
        const textTdTelefono = document.createTextNode(telefono);
        tdTelefono.appendChild(textTdTelefono);
        
        const tdLongitud = document.createElement('td');
        const textTdLongitud = document.createTextNode(longitud);
        tdLongitud.appendChild(textTdLongitud);
        
        const tdLatitud = document.createElement('td');
        const textTdLatitud = document.createTextNode(latitud);
        tdLatitud.appendChild(textTdLatitud);
        
        const tdEstatus = document.createElement('td');
        const textTdEstatus = document.createTextNode(estatus);
        tdEstatus.appendChild(textTdEstatus);

        const tdBotones = document.createElement('td');
        const editarBoton = document.createElement('button');
        editarBoton.setAttribute('id', 'id-btn-editar');
        editarBoton.onclick = () => cargarSucursal(sucursal);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn-editar');
        tdBotones.appendChild(editarBoton);

        let eliminarBoton = document.createElement('button');
        eliminarBoton.setAttribute('id', 'id-btn-eliminar');
        eliminarBoton.onclick = () => eliminarSucursal(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn-eliminar');
        tdBotones.appendChild(eliminarBoton);

        trBody.appendChild(tdId);
        trBody.appendChild(tdSucursal);
        trBody.appendChild(tdTitular);
        trBody.appendChild(tdRFC);
        trBody.appendChild(tdColonia);
        trBody.appendChild(tdCalle);
        trBody.appendChild(tdNumero);
        trBody.appendChild(tdCiudad);
        trBody.appendChild(tdEstado);
        trBody.appendChild(tdCP);
        trBody.appendChild(tdTelefono);
        trBody.appendChild(tdLongitud);
        trBody.appendChild(tdLatitud);
        trBody.appendChild(tdEstatus);
        trBody.appendChild(tdBotones);

        cuerpoTabla.appendChild(trBody);
        
//        cuerpo += cuerpoTabla;
    });
//    document.getElementById("cuerpoTabla").innerHTML = cuerpo;
}

//function json(){
//    fetch("../../modulos/moduloSucursal/jsonSucursal.json")
//        .then(function(response){
//            return response.json();
//        })
//        .then(function(jsondata){
//                Sucursales = jsondata;
//                console.log(Sucursales);
//                mostrarSucursales();
//            }            
//        );
//}
//
//json();


function limpiarHTML() {
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    while(cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
}

function cargarSucursal(sucursal) {
    const { id, nombre_sucursal, nombre_titular, rfc, colonia, calle, numero, ciudad, estado, codigo_postal, telefono, longitud, latitud, estatus} = sucursal;

    nombre_sucursal_input.value = nombre_sucursal;
    nombre_titular_input.value = nombre_titular;
    rfc_input.value = rfc;
    colonia_input.value = colonia;
    calle_input.value = calle;
    numero_input.value = numero;
    ciudad_input.value = ciudad;
    estado_input.value = estado;
    codigo_postal_input.value = codigo_postal;
    telefono_input.value = telefono;
    longitud_input.value = longitud;
    latitud_input.value = latitud;
    objSucursal.estatus = estatus;

    objSucursal.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarSucursal() {

    objSucursal.nombre_sucursal = nombre_sucursal_input.value;
    objSucursal.nombre_titular = nombre_titular_input.value;
    objSucursal.rfc = rfc_input.value;
    objSucursal.colonia = colonia_input.value;
    objSucursal.calle = calle_input.value;
    objSucursal.numero = numero_input.value;
    objSucursal.ciudad = ciudad_input.value;
    objSucursal.estado = estado_input.value;
    objSucursal.codigo_postal = codigo_postal_input.value;
    objSucursal.telefono = telefono_input.value;
    objSucursal.longitud = longitud_input.value;
    objSucursal.latitud = latitud_input.value;
    

    Sucursales.map(sucursal => {

        if(sucursal.id === objSucursal.id) {
            sucursal.id = objSucursal.id;
            sucursal.nombre_sucursal = objSucursal.nombre_sucursal;
            sucursal.nombre_titular = objSucursal.nombre_titular;
            sucursal.rfc = objSucursal.rfc;
            sucursal.colonia = objSucursal.colonia;
            sucursal.calle = objSucursal.calle;
            sucursal.numero = objSucursal.numero;
            sucursal.ciudad = objSucursal.ciudad;
            sucursal.estado = objSucursal.estado;
            sucursal.codigo_postal = objSucursal.codigo_postal;
            sucursal.telefono = objSucursal.telefono;
            sucursal.longitud = objSucursal.longitud;
            sucursal.latitud = objSucursal.latitud;
            sucursal.estatus = objSucursal.estatus;

        }

    });

    limpiarHTML();
    mostrarSucursales();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarSucursal(id) {

    const index = Sucursales.findIndex(sucursal => sucursal.id === id);

    if (index !== -1) {
        Sucursales[index].estatus = 'Inactivo';
    }

    limpiarHTML();
    mostrarSucursales();
}


function cargarDatosJSON() {
  fetch('../../modulos/moduloSucursal/Sucursal.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      Sucursales = jsondata;
      mostrarSucursales();
    });
}

cargarDatosJSON();

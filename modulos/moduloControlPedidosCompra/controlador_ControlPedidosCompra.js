/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let consultasPedidos = [];

const objConsultaPedido = {
    id: 0,
    fecha: '',
    nombre_sucursal: '',
    nombre_empleado: '',
    codigo_postal: '',
    ciudad: '',
    estado: '',
    estatus: ''
};

function mostrarConsultasPedidos() {
    const cuerpoTabla = document.querySelector('.cuerpoTabla');

    consultasPedidos.forEach(consultaPedido => {
        const {
            id,
            fecha,
            nombre_sucursal,
            nombre_empleado,
            codigo_postal,
            ciudad,
            estado,
            estatus
        } = consultaPedido;

        const trBody = document.createElement('tr');

        const tdId = document.createElement('td');
        const textTdId = document.createTextNode(id);
        tdId.appendChild(textTdId);

        const tdFecha = document.createElement('td');
        const textTdFecha = document.createTextNode(fecha);
        tdFecha.appendChild(textTdFecha);

        const tdNombreSucursal = document.createElement('td');
        const textTdNombreSucursal = document.createTextNode(nombre_sucursal);
        tdNombreSucursal.appendChild(textTdNombreSucursal);

        const tdNombreEmpleado = document.createElement('td');
        const textTdNombreEmpleado = document.createTextNode(nombre_empleado);
        tdNombreEmpleado.appendChild(textTdNombreEmpleado);

        const tdCodigoPostal = document.createElement('td');
        const textTdCodigoPostal = document.createTextNode(codigo_postal);
        tdCodigoPostal.appendChild(textTdCodigoPostal);

        const tdCiudad = document.createElement('td');
        const textTdCiudad = document.createTextNode(ciudad);
        tdCiudad.appendChild(textTdCiudad);

        const tdEstado = document.createElement('td');
        const textTdEstado = document.createTextNode(estado);
        tdEstado.appendChild(textTdEstado);

        const tdEstatus = document.createElement('td');
        const textTdEstatus = document.createTextNode(estatus);
        tdEstatus.appendChild(textTdEstatus);

        const tdAcciones = document.createElement('td');
       
       

        let eliminarBoton = document.createElement('button');
        eliminarBoton.setAttribute('id', 'id-btn-eliminar');
        eliminarBoton.onclick = () => eliminarConsultaPedido(id);
        eliminarBoton.textContent = 'Atender';
        eliminarBoton.classList.add('btn-eliminar');
        tdAcciones.appendChild(eliminarBoton);

        trBody.appendChild(tdId);
        trBody.appendChild(tdFecha);
        trBody.appendChild(tdNombreSucursal);
        trBody.appendChild(tdNombreEmpleado);
        trBody.appendChild(tdCodigoPostal);
        trBody.appendChild(tdCiudad);
        trBody.appendChild(tdEstado);
        trBody.appendChild(tdEstatus);
        trBody.appendChild(tdAcciones);

        cuerpoTabla.appendChild(trBody);
    });

}

function limpiarHTML() {
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    while(cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
}

function eliminarConsultaPedido(id) {

    const index = consultasPedidos.findIndex(Pedido => Pedido.id === id);
    
    if (index !== -1) {
        consultasPedidos[index].estatus = 'Atendido';
    }

    limpiarHTML();
    mostrarConsultasPedidos();
}

function cargarDatosJSON() {
    fetch('../../modulos/moduloControlPedidosCompra/ControlDePedidosCompra.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (jsondata) {
            consultasPedidos = jsondata;
            mostrarConsultasPedidos();
        });
}

cargarDatosJSON();
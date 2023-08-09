/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let Ventas = [];

const objVentas = {
    id: 0,
    idCliente: '', 
    fecha: '',
    hora: '',
    idEmpleado: '',
    idProducto: '',
    cantidad: '',
    precio_unitario: '',
    estatus: ''
};

let editando = false;

const formulario = document.querySelector('#formulario');
const idCliente_input = document.querySelector('#txtIdCliente');
const fecha_input = document.querySelector('#txtFecha');
const hora_input = document.querySelector('#txtHora');
const idEmpleado_input = document.querySelector('#txtIdEmpleado');
const idProducto_input = document.querySelector('#txtIdProducto');
const cantidad_input = document.querySelector('#txtCantidad');
const precio_unitario_input = document.querySelector('#txtPrecioUnitario');
const botonAdd = document.querySelector('#btnAdd');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    
    if(idCliente_input.value === '' || fecha_input.value === '' || hora_input.value === '' || idEmpleado_input.value === '' || idProducto_input.value === '' ||
            cantidad_input.value === '' || precio_unitario_input.value === ''){
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
        editarVenta();
        editando = false;
    }else{
        objVentas.id = Ventas.length + 1;
        objVentas.idCliente = idCliente_input.value;
        objVentas.fecha = fecha_input.value;
        objVentas.hora = hora_input.value;
        objVentas.idEmpleado = idEmpleado_input.value;
        objVentas.idProducto = idProducto_input.value;
        objVentas.cantidad = cantidad_input.value;
        objVentas.precio_unitario = precio_unitario_input.value;
        objVentas.estatus = 'Activo';
        
        agregarVenta();
    }
}

function agregarVenta() {

    Ventas.push({...objVentas});

    mostrarVentas();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    //objVentas.id= 0;
    objVentas.idCliente= ''; 
    objVentas.fecha= '';
    objVentas.hora= '';
    objVentas.idEmpleado= '';
    objVentas.idProducto= '';
    objVentas.cantidad= '';
    objVentas.precio_unitario= '';
    objVentas.estatus= '';
}

function  mostrarVentas(){
    limpiarHTML();
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    
    Ventas.forEach(venta => {
        const { id, idCliente, fecha, hora, idEmpleado, idProducto, cantidad, precio_unitario, estatus} = venta;

        const trBody = document.createElement('tr');

        const tdId = document.createElement('td');
        const textTdId = document.createTextNode(id);
        tdId.appendChild(textTdId);

        const tdventa = document.createElement('td');
        const textTdventa = document.createTextNode(idCliente);
        tdventa.appendChild(textTdventa);

        const tdTitular = document.createElement('td');
        const textTdTitular = document.createTextNode(fecha);
        tdTitular.appendChild(textTdTitular);
        
        const tdhora = document.createElement('td');
        const textTdhora = document.createTextNode(hora);
        tdhora.appendChild(textTdhora);
        
        const tdidEmpleado = document.createElement('td');
        const textTdidEmpleado = document.createTextNode(idEmpleado);
        tdidEmpleado.appendChild(textTdidEmpleado);
        
        const tdidProducto = document.createElement('td');
        const textTdidProducto = document.createTextNode(idProducto);
        tdidProducto.appendChild(textTdidProducto);
        
        const tdcantidad = document.createElement('td');
        const textTdcantidad = document.createTextNode(cantidad);
        tdcantidad.appendChild(textTdcantidad);
        
        const tdprecio_unitario = document.createElement('td');
        const textTdprecio_unitario = document.createTextNode(precio_unitario);
        tdprecio_unitario.appendChild(textTdprecio_unitario);
        
        const tdEstatus = document.createElement('td');
        const textTdEstatus = document.createTextNode(estatus);
        tdEstatus.appendChild(textTdEstatus);

        const tdBotones = document.createElement('td');
        const editarBoton = document.createElement('button');
        editarBoton.setAttribute('id', 'id-btn-editar');
        editarBoton.onclick = () => cargarVenta(venta);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn-editar');
        tdBotones.appendChild(editarBoton);

        let eliminarBoton = document.createElement('button');
        eliminarBoton.setAttribute('id', 'id-btn-eliminar');
        eliminarBoton.onclick = () => eliminarVenta(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn-eliminar');
        tdBotones.appendChild(eliminarBoton);

        trBody.appendChild(tdId);
        trBody.appendChild(tdventa);
        trBody.appendChild(tdTitular);
        trBody.appendChild(tdhora);
        trBody.appendChild(tdidEmpleado);
        trBody.appendChild(tdidProducto);
        trBody.appendChild(tdcantidad);
        trBody.appendChild(tdprecio_unitario);
        trBody.appendChild(tdEstatus);
        trBody.appendChild(tdBotones);

        cuerpoTabla.appendChild(trBody);
    });
}

function limpiarHTML() {
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    while(cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
}

function cargarVenta(venta) {
    const { id, idCliente, fecha, hora, idEmpleado, idProducto, cantidad, precio_unitario, estatus} = venta;

    idCliente_input.value = idCliente;
    fecha_input.value = fecha;
    hora_input.value = hora;
    idEmpleado_input.value = idEmpleado;
    idProducto_input.value = idProducto;
    cantidad_input.value = cantidad;
    precio_unitario_input.value = precio_unitario;
    objVentas.estatus = estatus;

    objVentas.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarVenta() {

    objVentas.idCliente = idCliente_input.value;
    objVentas.fecha = fecha_input.value;
    objVentas.hora = hora_input.value;
    objVentas.idEmpleado = idEmpleado_input.value;
    objVentas.idProducto = idProducto_input.value;
    objVentas.cantidad = cantidad_input.value;
    objVentas.precio_unitario = precio_unitario_input.value;
    

    Ventas.map(venta => {

        if(venta.id === objVentas.id) {
            venta.id = objVentas.id;
            venta.idCliente = objVentas.idCliente;
            venta.fecha = objVentas.fecha;
            venta.hora = objVentas.hora;
            venta.idEmpleado = objVentas.idEmpleado;
            venta.idProducto = objVentas.idProducto;
            venta.cantidad = objVentas.cantidad;
            venta.precio_unitario = objVentas.precio_unitario;
            venta.estatus = objVentas.estatus;

        }

    });

    limpiarHTML();
    mostrarVentas();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarVenta(id) {

    const index = Ventas.findIndex(venta => venta.id === id);

    if (index !== -1) {
        Ventas[index].estatus = 'Inactivo';
    }

    limpiarHTML();
    mostrarVentas();
}

function cargarDatosJSON() {
  fetch('../../modulos/moduloVentas/Ventas.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      Ventas = jsondata;
      mostrarVentas();
    });
}

cargarDatosJSON();


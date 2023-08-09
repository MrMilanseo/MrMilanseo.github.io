/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let Pedidos = [];

const objPedidos = {
    id: 0,
    idSucursal: '', 
    idEmpleado: '',
    fecha_hora: '',
    precio_compra: '',
    idProducto: '',
    cantidad: '',
    estatus: ''
};

let editando = false;

const formulario = document.querySelector('#formulario');
const idSucursal_input = document.querySelector('#txtIdSucursal');
const idEmpleado_input = document.querySelector('#txtIdEmpleado');
const fecha_hora_input = document.querySelector('#txtFechaHora');
const precio_compra_input = document.querySelector('#txtPrecioCompra');
const idProducto_input = document.querySelector('#txtIdProducto');
const cantidad_input = document.querySelector('#txtCantidad');
const botonAdd = document.querySelector('#btnAdd');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    
    if(idSucursal_input.value === '' || idEmpleado_input.value === '' || fecha_hora_input.value === '' || precio_compra_input.value === '' || idProducto_input.value === '' ||
            cantidad_input.value === ''){
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
        editarPedido();
        editando = false;
    }else{
        objPedidos.id = Pedidos.length + 1;
        objPedidos.idSucursal = idSucursal_input.value;
        objPedidos.idEmpleado = idEmpleado_input.value;
        objPedidos.fecha_hora = fecha_hora_input.value;
        objPedidos.precio_compra = precio_compra_input.value;
        objPedidos.idProducto = idProducto_input.value;
        objPedidos.cantidad = cantidad_input.value;
        objPedidos.estatus = 'Activo';
        
        agregarPedido();
    }
}

function agregarPedido() {

    Pedidos.push({...objPedidos});

    mostrarPedidos();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    //objPedidos.id= 0;
    objPedidos.idSucursal= ''; 
    objPedidos.idEmpleado= '';
    objPedidos.fecha_hora= '';
    objPedidos.precio_compra= '';
    objPedidos.idProducto= '';
    objPedidos.cantidad= '';
    objPedidos.estatus= '';
}

function  mostrarPedidos(){
    limpiarHTML();
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    
    Pedidos.forEach(pedido => {
        const { id, idSucursal, idEmpleado, fecha_hora, precio_compra, idProducto, cantidad, estatus} = pedido;

        const trBody = document.createElement('tr');

        const tdId = document.createElement('td');
        const textTdId = document.createTextNode(id);
        tdId.appendChild(textTdId);

        const tdpedido = document.createElement('td');
        const textTdpedido = document.createTextNode(idSucursal);
        tdpedido.appendChild(textTdpedido);

        const tdTitular = document.createElement('td');
        const textTdTitular = document.createTextNode(idEmpleado);
        tdTitular.appendChild(textTdTitular);
        
        const tdfecha_hora = document.createElement('td');
        const textTdfecha_hora = document.createTextNode(fecha_hora);
        tdfecha_hora.appendChild(textTdfecha_hora);
        
        const tdprecio_compra = document.createElement('td');
        const textTdprecio_compra = document.createTextNode(precio_compra);
        tdprecio_compra.appendChild(textTdprecio_compra);
        
        const tdidProducto = document.createElement('td');
        const textTdidProducto = document.createTextNode(idProducto);
        tdidProducto.appendChild(textTdidProducto);
        
        const tdcantidad = document.createElement('td');
        const textTdcantidad = document.createTextNode(cantidad);
        tdcantidad.appendChild(textTdcantidad);
        
        const tdEstatus = document.createElement('td');
        const textTdEstatus = document.createTextNode(estatus);
        tdEstatus.appendChild(textTdEstatus);

        const tdBotones = document.createElement('td');
        const editarBoton = document.createElement('button');
        editarBoton.setAttribute('id', 'id-btn-editar');
        editarBoton.onclick = () => cargarPedido(pedido);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn-editar');
        tdBotones.appendChild(editarBoton);

        let eliminarBoton = document.createElement('button');
        eliminarBoton.setAttribute('id', 'id-btn-eliminar');
        eliminarBoton.onclick = () => eliminarPedido(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn-eliminar');
        tdBotones.appendChild(eliminarBoton);

        trBody.appendChild(tdId);
        trBody.appendChild(tdpedido);
        trBody.appendChild(tdTitular);
        trBody.appendChild(tdfecha_hora);
        trBody.appendChild(tdprecio_compra);
        trBody.appendChild(tdidProducto);
        trBody.appendChild(tdcantidad);
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

function cargarPedido(pedido) {
    const { id, idSucursal, idEmpleado, fecha_hora, precio_compra, idProducto, cantidad, estatus} = pedido;

    idSucursal_input.value = idSucursal;
    idEmpleado_input.value = idEmpleado;
    fecha_hora_input.value = fecha_hora;
    precio_compra_input.value = precio_compra;
    idProducto_input.value = idProducto;
    cantidad_input.value = cantidad;
    objPedidos.estatus = estatus;

    objPedidos.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarPedido() {

    objPedidos.idSucursal = idSucursal_input.value;
    objPedidos.idEmpleado = idEmpleado_input.value;
    objPedidos.fecha_hora = fecha_hora_input.value;
    objPedidos.precio_compra = precio_compra_input.value;
    objPedidos.idProducto = idProducto_input.value;
    objPedidos.cantidad = cantidad_input.value;
    

    Pedidos.map(pedido => {

        if(pedido.id === objPedidos.id) {
            pedido.id = objPedidos.id;
            pedido.idSucursal = objPedidos.idSucursal;
            pedido.idEmpleado = objPedidos.idEmpleado;
            pedido.fecha_hora = objPedidos.fecha_hora;
            pedido.precio_compra = objPedidos.precio_compra;
            pedido.idProducto = objPedidos.idProducto;
            pedido.cantidad = objPedidos.cantidad;
            pedido.estatus = objPedidos.estatus;

        }

    });

    limpiarHTML();
    mostrarPedidos();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarPedido(id) {

    const index = Pedidos.findIndex(pedido => pedido.id === id);

    if (index !== -1) {
        Pedidos[index].estatus = 'Inactivo';
    }

    limpiarHTML();
    mostrarPedidos();
}

function cargarDatosJSON() {
  fetch('../../modulos/moduloPedidoCompra/PedidoCompra.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      Pedidos = jsondata;
      mostrarPedidos();
    });
}

cargarDatosJSON();
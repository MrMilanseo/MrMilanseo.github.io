/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let Productos = [];

const objProducto = {
    id: 0,
    nombre_producto: '', 
    nombre_generico: '',
    forma_farmaceutica: '',
    unidad_medida: '',
    presentacion: '',
    principal_indicacion: '',
    contraindicaciones: '',
    concentracion: '',
    unidades_envase: '',
    precio_unitario: '',
    foto: '',
    ruta_foto: '',
    codigo_barras: '',
    estatus: ''
};

let editando = false;

const formulario = document.querySelector('#formulario');
const nombre_producto_input = document.querySelector('#txtNombreProducto');
const nombre_generico_input = document.querySelector('#txtNombreGenerico');
const forma_farmaceutica_input = document.querySelector('#txtFormaFarmaceutica');
const unidad_medida_input = document.querySelector('#txtUnidadMedida');
const presentacion_input = document.querySelector('#txtPresentacion');
const principal_indicacion_input = document.querySelector('#txtPrincipalIndicacion');
const contraindicaciones_input = document.querySelector('#txtContraindicaciones');
const concentracion_input = document.querySelector('#txtConcentracion');
const unidades_envase_input = document.querySelector('#txtUnidadesEnvase');
const precio_unitario_input = document.querySelector('#txtPrecioUnitario');
const foto_input = document.querySelector('#txtFoto');
const ruta_foto_input = document.querySelector('#txtRutaFoto');
const codigo_barras_input = document.querySelector('#txtCodigoBarras');
const botonAdd = document.querySelector('#btnAdd');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    
    if(nombre_producto_input.value === '' || nombre_generico_input.value === '' || forma_farmaceutica_input.value === '' || unidad_medida_input.value === '' || presentacion_input.value === '' ||
            principal_indicacion_input.value === '' || contraindicaciones_input.value === '' || concentracion_input.value === '' || unidades_envase_input.value === '' || precio_unitario_input.value === '' ||
            foto_input.value === '' || ruta_foto_input.value === '' || codigo_barras_input.value === ''){
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
        editarProducto();
        editando = false;
    }else{
        objProducto.id = Productos.length + 1;
        objProducto.nombre_producto = nombre_producto_input.value;
        objProducto.nombre_generico = nombre_generico_input.value;
        objProducto.forma_farmaceutica = forma_farmaceutica_input.value;
        objProducto.unidad_medida = unidad_medida_input.value;
        objProducto.presentacion = presentacion_input.value;
        objProducto.principal_indicacion = principal_indicacion_input.value;
        objProducto.contraindicaciones = contraindicaciones_input.value;
        objProducto.concentracion = concentracion_input.value;
        objProducto.unidades_envase = unidades_envase_input.value;
        objProducto.precio_unitario = precio_unitario_input.value;
        objProducto.foto = foto_input.value;
        objProducto.ruta_foto = ruta_foto_input.value;
        objProducto.codigo_barras = codigo_barras_input.value;
        objProducto.estatus = 'Activo';
        
        agregarProductos();
    }
}

function agregarProductos() {

    Productos.push({...objProducto});

    mostrarProductos();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    //objProducto.id= 0;
    objProducto.nombre_producto= ''; 
    objProducto.nombre_generico= '';
    objProducto.forma_farmaceutica= '';
    objProducto.unidad_medida= '';
    objProducto.presentacion= '';
    objProducto.principal_indicacion= '';
    objProducto.contraindicaciones= '';
    objProducto.concentracion= '';
    objProducto.unidades_envase= '';
    objProducto.precio_unitario= '';
    objProducto.foto= '';
    objProducto.ruta_foto= '';
    objProducto.codigo_barras = '';
    objProducto.estatus= '';
}

function  mostrarProductos(){
    limpiarHTML();
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    
    Productos.forEach(producto => {
        const { id, nombre_producto, nombre_generico, forma_farmaceutica, unidad_medida, presentacion, principal_indicacion, contraindicaciones, concentracion, unidades_envase, precio_unitario, foto, ruta_foto, codigo_barras, estatus} = producto;

        const trBody = document.createElement('tr');

        const tdId = document.createElement('td');
        const textTdId = document.createTextNode(id);
        tdId.appendChild(textTdId);

        const tdproducto = document.createElement('td');
        const textTdproducto = document.createTextNode(nombre_producto);
        tdproducto.appendChild(textTdproducto);

        const tdTitular = document.createElement('td');
        const textTdTitular = document.createTextNode(nombre_generico);
        tdTitular.appendChild(textTdTitular);
        
        const tdforma_farmaceutica = document.createElement('td');
        const textTdforma_farmaceutica = document.createTextNode(forma_farmaceutica);
        tdforma_farmaceutica.appendChild(textTdforma_farmaceutica);
        
        const tdunidad_medida = document.createElement('td');
        const textTdunidad_medida = document.createTextNode(unidad_medida);
        tdunidad_medida.appendChild(textTdunidad_medida);
        
        const tdpresentacion = document.createElement('td');
        const textTdpresentacion = document.createTextNode(presentacion);
        tdpresentacion.appendChild(textTdpresentacion);
        
        const tdprincipal_indicacion = document.createElement('td');
        const textTdprincipal_indicacion = document.createTextNode(principal_indicacion);
        tdprincipal_indicacion.appendChild(textTdprincipal_indicacion);
        
        const tdcontraindicaciones = document.createElement('td');
        const textTdcontraindicaciones = document.createTextNode(contraindicaciones);
        tdcontraindicaciones.appendChild(textTdcontraindicaciones);
        
        const tdconcentracion = document.createElement('td');
        const textTdconcentracion = document.createTextNode(concentracion);
        tdconcentracion.appendChild(textTdconcentracion);
        
        const tdCP = document.createElement('td');
        const textTdCP = document.createTextNode(unidades_envase);
        tdCP.appendChild(textTdCP);
        
        const tdprecio_unitario = document.createElement('td');
        const textTdprecio_unitario = document.createTextNode(precio_unitario);
        tdprecio_unitario.appendChild(textTdprecio_unitario);
        
        const tdfoto = document.createElement('td');
        const textTdfoto = document.createTextNode(foto);
        tdfoto.appendChild(textTdfoto);
        
        const tdruta_foto = document.createElement('td');
        const textTdruta_foto = document.createTextNode(ruta_foto);
        tdruta_foto.appendChild(textTdruta_foto);
        
        const tdcodigo_barras = document.createElement('td');
        const textTdcodigo_barras = document.createTextNode(codigo_barras);
        tdcodigo_barras.appendChild(textTdcodigo_barras);
        
        const tdEstatus = document.createElement('td');
        const textTdEstatus = document.createTextNode(estatus);
        tdEstatus.appendChild(textTdEstatus);

        const tdBotones = document.createElement('td');
        const editarBoton = document.createElement('button');
        editarBoton.setAttribute('id', 'id-btn-editar');
        editarBoton.onclick = () => cargarProducto(producto);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn-editar');
        tdBotones.appendChild(editarBoton);

        let eliminarBoton = document.createElement('button');
        eliminarBoton.setAttribute('id', 'id-btn-eliminar');
        eliminarBoton.onclick = () => eliminarProducto(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn-eliminar');
        tdBotones.appendChild(eliminarBoton);

        trBody.appendChild(tdId);
        trBody.appendChild(tdproducto);
        trBody.appendChild(tdTitular);
        trBody.appendChild(tdforma_farmaceutica);
        trBody.appendChild(tdunidad_medida);
        trBody.appendChild(tdpresentacion);
        trBody.appendChild(tdprincipal_indicacion);
        trBody.appendChild(tdcontraindicaciones);
        trBody.appendChild(tdconcentracion);
        trBody.appendChild(tdCP);
        trBody.appendChild(tdprecio_unitario);
        trBody.appendChild(tdfoto);
        trBody.appendChild(tdruta_foto);
        trBody.appendChild(tdcodigo_barras);
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

function cargarProducto(producto) {
    const { id, nombre_producto, nombre_generico, forma_farmaceutica, unidad_medida, presentacion, principal_indicacion, contraindicaciones, concentracion, unidades_envase, precio_unitario, foto, ruta_foto, codigo_barras, estatus} = producto;

    nombre_producto_input.value = nombre_producto;
    nombre_generico_input.value = nombre_generico;
    forma_farmaceutica_input.value = forma_farmaceutica;
    unidad_medida_input.value = unidad_medida;
    presentacion_input.value = presentacion;
    principal_indicacion_input.value = principal_indicacion;
    contraindicaciones_input.value = contraindicaciones;
    concentracion_input.value = concentracion;
    unidades_envase_input.value = unidades_envase;
    precio_unitario_input.value = precio_unitario;
    foto_input.value = foto;
    ruta_foto_input.value = ruta_foto;
    codigo_barras_input.value = codigo_barras;
    objProducto.estatus = estatus;

    objProducto.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarProducto() {

    objProducto.nombre_producto = nombre_producto_input.value;
    objProducto.nombre_generico = nombre_generico_input.value;
    objProducto.forma_farmaceutica = forma_farmaceutica_input.value;
    objProducto.unidad_medida = unidad_medida_input.value;
    objProducto.presentacion = presentacion_input.value;
    objProducto.principal_indicacion = principal_indicacion_input.value;
    objProducto.contraindicaciones = contraindicaciones_input.value;
    objProducto.concentracion = concentracion_input.value;
    objProducto.unidades_envase = unidades_envase_input.value;
    objProducto.precio_unitario = precio_unitario_input.value;
    objProducto.foto = foto_input.value;
    objProducto.ruta_foto = ruta_foto_input.value;
    objProducto.codigo_barras = codigo_barras_input.value;
    

    Productos.map(producto => {

        if(producto.id === objProducto.id) {
            producto.id = objProducto.id;
            producto.nombre_producto = objProducto.nombre_producto;
            producto.nombre_generico = objProducto.nombre_generico;
            producto.forma_farmaceutica = objProducto.forma_farmaceutica;
            producto.unidad_medida = objProducto.unidad_medida;
            producto.presentacion = objProducto.presentacion;
            producto.principal_indicacion = objProducto.principal_indicacion;
            producto.contraindicaciones = objProducto.contraindicaciones;
            producto.concentracion = objProducto.concentracion;
            producto.unidades_envase = objProducto.unidades_envase;
            producto.precio_unitario = objProducto.precio_unitario;
            producto.foto = objProducto.foto;
            producto.ruta_foto = objProducto.ruta_foto;
            producto.codigo_barras = objProducto.codigo_barras;
            producto.estatus = objProducto.estatus;

        }

    });

    limpiarHTML();
    mostrarProductos();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarProducto(id) {

    const index = Productos.findIndex(producto => producto.id === id);

    if (index !== -1) {
        Productos[index].estatus = 'Inactivo';
    }

    limpiarHTML();
    mostrarProductos();
}

function cargarDatosJSON() {
  fetch('../../modulos/moduloProductos/Productos.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      Productos = jsondata;
      mostrarProductos();
    });
}

cargarDatosJSON();
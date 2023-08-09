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
    stock:'',
    estatus: ''
};

function  mostrarProductos(){
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    
    Productos.forEach(producto => {
        const { id, nombre_producto, nombre_generico, forma_farmaceutica, unidad_medida, presentacion, principal_indicacion, contraindicaciones, concentracion, unidades_envase, precio_unitario, foto, ruta_foto, codigo_barras, stock, estatus} = producto;

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
        
        const tdstock = document.createElement('td');
        const textTdstock = document.createTextNode(stock);
        tdstock.appendChild(textTdstock);
        
        const tdEstatus = document.createElement('td');
        const textTdEstatus = document.createTextNode(estatus);
        tdEstatus.appendChild(textTdEstatus);

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
        trBody.appendChild(tdstock);
        trBody.appendChild(tdEstatus);
        cuerpoTabla.appendChild(trBody);
    });

    
}

function cargarDatosJSON() {
  fetch('../../modulos/moduloConsultaProductos/ConsultaDeProductos.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      Productos = jsondata;
      mostrarProductos();
    });
}

cargarDatosJSON();
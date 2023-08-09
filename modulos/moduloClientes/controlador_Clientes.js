/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let Clientes = [];

const objClientes = {
    id: 0,
    nombre: '', 
    apellido_paterno: '',
    apellido_materno: '',
    genero: '',
    fecha_nacimiento: '',
    rfc: '',
    curp: '',
    foto: '',
    colonia: '',
    calle: '',
    numero: '',
    codigo_postal: '',
    ciudad: '',
    estado: '',
    telefono: '',
    fecha_registro: '',
    email: '',
    estatus: ''
};

let editando = false;

const formulario = document.querySelector('#formulario');
const nombre_input = document.querySelector('#txtNombre');
const apellido_paterno_input = document.querySelector('#txtApellidoPaterno');
const apellido_materno_input = document.querySelector('#txtApellidoMaterno');
const genero_input = document.querySelector('#txtGenero');
const fecha_nacimiento_input = document.querySelector('#txtFechaNac');
const rfc_input = document.querySelector('#txtRFC');
const curp_input = document.querySelector('#txtCURP');
const foto_input = document.querySelector('#txtFoto');
const colonia_input = document.querySelector('#txtColonia');
const calle_input = document.querySelector('#txtCalle');
const numero_input = document.querySelector('#txtNum');
const codigo_postal_input = document.querySelector('#txtCP');
const ciudad_input = document.querySelector('#txtCiudad');
const estado_input = document.querySelector('#txtEstado');
const telefono_input = document.querySelector('#txtTelefono');
const fecha_registro_input = document.querySelector('#txtFechaRegistro');
const email_input = document.querySelector('#txtEmail');
const botonAdd = document.querySelector('#btnAdd');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    
    if(nombre_input.value === '' || apellido_paterno_input.value === '' || apellido_materno_input.value === '' || genero_input.value === '' || fecha_nacimiento_input.value === '' ||
            rfc_input.value === '' || curp_input.value === '' || foto_input.value === '' || colonia_input.value === '' || calle_input.value === '' ||
            numero_input.value === '' || codigo_postal_input.value === '' || ciudad_input.value === '' || estado_input.value === '' || telefono_input.value === ''
            || fecha_registro_input.value === '' || email_input.value === ''){
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
        editarCliente();
        editando = false;
    }else{
        objClientes.id = Clientes.length + 1;
        objClientes.nombre = nombre_input.value;
        objClientes.apellido_paterno = apellido_paterno_input.value;
        objClientes.apellido_materno = apellido_materno_input.value;
        objClientes.genero = genero_input.value;
        objClientes.fecha_nacimiento = fecha_nacimiento_input.value;
        objClientes.rfc = rfc_input.value;
        objClientes.curp = curp_input.value;
        objClientes.foto = foto_input.value;
        objClientes.colonia = colonia_input.value;
        objClientes.calle = calle_input.value;
        objClientes.numero = numero_input.value;
        objClientes.codigo_postal = codigo_postal_input.value;
        objClientes.ciudad = ciudad_input.value;
        objClientes.estado = estado_input.value;
        objClientes.telefono = telefono_input.value;
        objClientes.fecha_registro = fecha_registro_input.value;
        objClientes.email = email_input.value;
        objClientes.estatus = 'Activo';
        
        agregarClientes();
    }
}

function agregarClientes() {

    Clientes.push({...objClientes});

    mostrarClientes();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    //objClientes.id= 0;
    objClientes.nombre= ''; 
    objClientes.apellido_paterno= '';
    objClientes.apellido_materno= '';
    objClientes.genero= '';
    objClientes.fecha_nacimiento= '';
    objClientes.rfc= '';
    objClientes.curp= '';
    objClientes.foto= '';
    objClientes.colonia= '';
    objClientes.calle= '';
    objClientes.numero= '';
    objClientes.codigo_postal= '';
    objClientes.ciudad= '';
    objClientes.estado= '';
    objClientes.telefono= '';
    objClientes.fecha_registro= '';
    objClientes.email= '';
    objClientes.estatus= '';
}

function  mostrarClientes(){
    limpiarHTML();
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    
    Clientes.forEach(cliente => {
        const { id, nombre, apellido_paterno, apellido_materno, genero, fecha_nacimiento, rfc, curp, foto, colonia, calle, numero, codigo_postal, ciudad, estado, telefono, fecha_registro, email, estatus} = cliente;

        const trBody = document.createElement('tr');

        const tdId = document.createElement('td');
        const textTdId = document.createTextNode(id);
        tdId.appendChild(textTdId);

        const tdcliente = document.createElement('td');
        const textTdcliente = document.createTextNode(nombre);
        tdcliente.appendChild(textTdcliente);

        const tdTitular = document.createElement('td');
        const textTdTitular = document.createTextNode(apellido_paterno);
        tdTitular.appendChild(textTdTitular);
        
        const tdapellido_materno = document.createElement('td');
        const textTdapellido_materno = document.createTextNode(apellido_materno);
        tdapellido_materno.appendChild(textTdapellido_materno);
        
        const tdgenero = document.createElement('td');
        const textTdgenero = document.createTextNode(genero);
        tdgenero.appendChild(textTdgenero);
        
        const tdfecha_nacimiento = document.createElement('td');
        const textTdfecha_nacimiento = document.createTextNode(fecha_nacimiento);
        tdfecha_nacimiento.appendChild(textTdfecha_nacimiento);
        
        const tdrfc = document.createElement('td');
        const textTdrfc = document.createTextNode(rfc);
        tdrfc.appendChild(textTdrfc);
        
        const tdcurp = document.createElement('td');
        const textTdcurp = document.createTextNode(curp);
        tdcurp.appendChild(textTdcurp);
        
        const tdfoto = document.createElement('td');
        const textTdfoto = document.createTextNode(foto);
        tdfoto.appendChild(textTdfoto);
        
        const tdCP = document.createElement('td');
        const textTdCP = document.createTextNode(colonia);
        tdCP.appendChild(textTdCP);
        
        const tdcalle = document.createElement('td');
        const textTdcalle = document.createTextNode(calle);
        tdcalle.appendChild(textTdcalle);
        
        const tdnumero = document.createElement('td');
        const textTdnumero = document.createTextNode(numero);
        tdnumero.appendChild(textTdnumero);
        
        const tdcodigo_postal = document.createElement('td');
        const textTdcodigo_postal = document.createTextNode(codigo_postal);
        tdcodigo_postal.appendChild(textTdcodigo_postal);
        
        const tdCiudad = document.createElement('td');
        const textTdCiudad = document.createTextNode(ciudad);
        tdCiudad.appendChild(textTdCiudad);
        
        const tdEstado = document.createElement('td');
        const textTdEstado = document.createTextNode(estado);
        tdEstado.appendChild(textTdEstado);
        
        const tdTelefono = document.createElement('td');
        const textTdTelefono = document.createTextNode(telefono);
        tdTelefono.appendChild(textTdTelefono);
        
        const tdFechaIngreso = document.createElement('td');
        const textTdFechaIngreso = document.createTextNode(fecha_registro);
        tdFechaIngreso.appendChild(textTdFechaIngreso);
        
        const tdEmail = document.createElement('td');
        const textTdEmail = document.createTextNode(email);
        tdEmail.appendChild(textTdEmail);
        
        const tdEstatus = document.createElement('td');
        const textTdEstatus = document.createTextNode(estatus);
        tdEstatus.appendChild(textTdEstatus);

        const tdBotones = document.createElement('td');
        const editarBoton = document.createElement('button');
        editarBoton.setAttribute('id', 'id-btn-editar');
        editarBoton.onclick = () => cargarCliente(cliente);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn-editar');
        tdBotones.appendChild(editarBoton);

        let eliminarBoton = document.createElement('button');
        eliminarBoton.setAttribute('id', 'id-btn-eliminar');
        eliminarBoton.onclick = () => eliminarCliente(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn-eliminar');
        tdBotones.appendChild(eliminarBoton);

        trBody.appendChild(tdId);
        trBody.appendChild(tdcliente);
        trBody.appendChild(tdTitular);
        trBody.appendChild(tdapellido_materno);
        trBody.appendChild(tdgenero);
        trBody.appendChild(tdfecha_nacimiento);
        trBody.appendChild(tdrfc);
        trBody.appendChild(tdcurp);
        trBody.appendChild(tdfoto);
        trBody.appendChild(tdCP);
        trBody.appendChild(tdcalle);
        trBody.appendChild(tdnumero);
        trBody.appendChild(tdcodigo_postal);
        trBody.appendChild(tdCiudad);
        trBody.appendChild(tdEstado);
        trBody.appendChild(tdTelefono);
        trBody.appendChild(tdFechaIngreso);
        trBody.appendChild(tdEmail);
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

function cargarCliente(cliente) {
    const { id, nombre, apellido_paterno, apellido_materno, genero, fecha_nacimiento, rfc, curp, foto, colonia, calle, numero, codigo_postal, ciudad, estado, telefono, fecha_registro, email, estatus} = cliente;

    nombre_input.value = nombre;
    apellido_paterno_input.value = apellido_paterno;
    apellido_materno_input.value = apellido_materno;
    genero_input.value = genero;
    fecha_nacimiento_input.value = fecha_nacimiento;
    rfc_input.value = rfc;
    curp_input.value = curp;
    foto_input.value = foto;
    colonia_input.value = colonia;
    calle_input.value = calle;
    numero_input.value = numero;
    codigo_postal_input.value = codigo_postal;
    ciudad_input.value = ciudad;
    estado_input.value = estado;
    telefono_input.value = telefono;
    fecha_registro_input.value = fecha_registro;
    email_input.value = email;    
    
    objClientes.estatus = estatus;

    objClientes.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarCliente() {

    objClientes.nombre = nombre_input.value;
    objClientes.apellido_paterno = apellido_paterno_input.value;
    objClientes.apellido_materno = apellido_materno_input.value;
    objClientes.genero = genero_input.value;
    objClientes.fecha_nacimiento = fecha_nacimiento_input.value;
    objClientes.rfc = rfc_input.value;
    objClientes.curp = curp_input.value;
    objClientes.foto = foto_input.value;
    objClientes.colonia = colonia_input.value;
    objClientes.calle = calle_input.value;
    objClientes.numero = numero_input.value;
    objClientes.codigo_postal = codigo_postal_input.value;
    objClientes.ciudad = ciudad_input.value;
    objClientes.estado = estado_input.value;
    objClientes.telefono = telefono_input.value;
    objClientes.fecha_registro = fecha_registro_input.value;
    objClientes.email = email_input.value;
    

    Clientes.map(cliente => {

        if(cliente.id === objClientes.id) {
            cliente.id = objClientes.id;
            cliente.nombre = objClientes.nombre;
            cliente.apellido_paterno = objClientes.apellido_paterno;
            cliente.apellido_materno = objClientes.apellido_materno;
            cliente.genero = objClientes.genero;
            cliente.fecha_nacimiento = objClientes.fecha_nacimiento;
            cliente.rfc = objClientes.rfc;
            cliente.curp = objClientes.curp;
            cliente.foto = objClientes.foto;
            cliente.colonia = objClientes.colonia;
            cliente.calle = objClientes.calle;
            cliente.numero = objClientes.numero;
            cliente.codigo_postal = objClientes.codigo_postal;
            cliente.ciudad = objClientes.ciudad;
            cliente.estado = objClientes.estado;
            cliente.telefono = objClientes.telefono;
            cliente.fecha_registro = objClientes.fecha_registro;
            cliente.email = objClientes.email;
            cliente.estatus = objClientes.estatus;

        }

    });

    limpiarHTML();
    mostrarClientes();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarCliente(id) {

    const index = Clientes.findIndex(cliente => cliente.id === id);

    if (index !== -1) {
        Clientes[index].estatus = 'Inactivo';
    }

    limpiarHTML();
    mostrarClientes();
}

function cargarDatosJSON() {
  fetch('../../modulos/moduloClientes/Clientes.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      Clientes = jsondata;
      mostrarClientes();
    });
}

cargarDatosJSON();

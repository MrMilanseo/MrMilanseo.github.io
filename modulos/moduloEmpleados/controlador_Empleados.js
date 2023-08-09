/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let Empleados = [];

const objEmpleados = {
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
    fecha_ingreso: '',
    puesto: '',
    salario: '',
    email: '',
    codEmpleado: '',
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
const fecha_ingreso_input = document.querySelector('#txtFechaIngreso');
const puesto_input = document.querySelector('#txtPuesto');
const salario_input = document.querySelector('#txtSalario');
const email_input = document.querySelector('#txtEmail');
const botonAdd = document.querySelector('#btnAdd');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    
    if(nombre_input.value === '' || apellido_paterno_input.value === '' || apellido_materno_input.value === '' || genero_input.value === '' || fecha_nacimiento_input.value === '' ||
            rfc_input.value === '' || curp_input.value === '' || foto_input.value === '' || colonia_input.value === '' || calle_input.value === '' ||
            numero_input.value === '' || codigo_postal_input.value === '' || ciudad_input.value === '' || estado_input.value === '' || telefono_input.value === ''
            || fecha_ingreso_input.value === '' || puesto_input.value === '' || salario_input.value === '' || email_input.value === ''){
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
          });

          Toast.fire({
            icon: 'success',
            title: 'Registro realizado con exito'
          })
    }
    
    if(editando){
        editarEmpleado();
        editando = false;
    }else{
        objEmpleados.id = Empleados.length + 1;
        objEmpleados.nombre = nombre_input.value;
        objEmpleados.apellido_paterno = apellido_paterno_input.value;
        objEmpleados.apellido_materno = apellido_materno_input.value;
        objEmpleados.genero = genero_input.value;
        objEmpleados.fecha_nacimiento = fecha_nacimiento_input.value;
        objEmpleados.rfc = rfc_input.value;
        objEmpleados.curp = curp_input.value;
        objEmpleados.foto = foto_input.value;
        objEmpleados.colonia = colonia_input.value;
        objEmpleados.calle = calle_input.value;
        objEmpleados.numero = numero_input.value;
        objEmpleados.codigo_postal = codigo_postal_input.value;
        objEmpleados.ciudad = ciudad_input.value;
        objEmpleados.estado = estado_input.value;
        objEmpleados.telefono = telefono_input.value;
        objEmpleados.fecha_ingreso = fecha_ingreso_input.value;
        objEmpleados.puesto = puesto_input.value;
        objEmpleados.salario = salario_input.value;
        objEmpleados.email = email_input.value;
        objEmpleados.codEmpleado = 'Indefinido';
        objEmpleados.estatus = 'Activo';
        
        agregarempleado();
    }
}

function agregarempleado() {

    Empleados.push({...objEmpleados});

    mostrarEmpleados();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    //objEmpleados.id= 0;
    objEmpleados.nombre= ''; 
    objEmpleados.apellido_paterno= '';
    objEmpleados.apellido_materno= '';
    objEmpleados.genero= '';
    objEmpleados.fecha_nacimiento= '';
    objEmpleados.rfc= '';
    objEmpleados.curp= '';
    objEmpleados.foto= '';
    objEmpleados.colonia= '';
    objEmpleados.calle= '';
    objEmpleados.numero= '';
    objEmpleados.codigo_postal= '';
    objEmpleados.ciudad= '';
    objEmpleados.estado= '';
    objEmpleados.telefono= '';
    objEmpleados.fecha_ingreso= '';
    objEmpleados.puesto= '';
    objEmpleados.salario= '';
    objEmpleados.email= '';
    objEmpleados.codEmpleado= '';
    objEmpleados.estatus= '';
}

function  mostrarEmpleados(){
    limpiarHTML();
    const cuerpoTabla = document.querySelector('.cuerpoTabla');
    
    Empleados.forEach(empleado => {
        const { id, nombre, apellido_paterno, apellido_materno, genero, fecha_nacimiento, rfc, curp, foto, colonia, calle, numero, codigo_postal, ciudad, estado, telefono, fecha_ingreso, puesto, salario, email, codEmpleado, estatus} = empleado;

        const trBody = document.createElement('tr');

        const tdId = document.createElement('td');
        const textTdId = document.createTextNode(id);
        tdId.appendChild(textTdId);

        const tdempleado = document.createElement('td');
        const textTdempleado = document.createTextNode(nombre);
        tdempleado.appendChild(textTdempleado);

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
        const textTdFechaIngreso = document.createTextNode(fecha_ingreso);
        tdFechaIngreso.appendChild(textTdFechaIngreso);
        
        const tdPuesto = document.createElement('td');
        const textTdPuesto = document.createTextNode(puesto);
        tdPuesto.appendChild(textTdPuesto);
        
        const tdSalario = document.createElement('td');
        const textTdSalario = document.createTextNode(salario);
        tdSalario.appendChild(textTdSalario);
        
        const tdEmail = document.createElement('td');
        const textTdEmail = document.createTextNode(email);
        tdEmail.appendChild(textTdEmail);
        
        const tdCodEmpleado = document.createElement('td');
        const textTdCodEmpleado = document.createTextNode(codEmpleado);
        tdCodEmpleado.appendChild(textTdCodEmpleado);
        
        const tdEstatus = document.createElement('td');
        const textTdEstatus = document.createTextNode(estatus);
        tdEstatus.appendChild(textTdEstatus);

        const tdBotones = document.createElement('td');
        const editarBoton = document.createElement('button');
        editarBoton.setAttribute('id', 'id-btn-editar');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn-editar');
        tdBotones.appendChild(editarBoton);

        let eliminarBoton = document.createElement('button');
        eliminarBoton.setAttribute('id', 'id-btn-eliminar');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn-eliminar');
        tdBotones.appendChild(eliminarBoton);

        trBody.appendChild(tdId);
        trBody.appendChild(tdempleado);
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
        trBody.appendChild(tdPuesto);
        trBody.appendChild(tdSalario);
        trBody.appendChild(tdEmail);
        trBody.appendChild(tdCodEmpleado);
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

function cargarEmpleado(empleado) {
    const { id, nombre, apellido_paterno, apellido_materno, genero, fecha_nacimiento, rfc, curp, foto, colonia, calle, numero, codigo_postal, ciudad, estado, telefono, fecha_ingreso, puesto, salario, email, codEmpleado, estatus} = empleado;

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
    fecha_ingreso_input.value = fecha_ingreso;
    puesto_input.value = puesto;
    salario_input.value = salario;
    email_input.value = email;    
    
    objEmpleados.codEmpleado  = codEmpleado;
    objEmpleados.estatus = estatus;

    objEmpleados.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarEmpleado() {

    objEmpleados.nombre = nombre_input.value;
    objEmpleados.apellido_paterno = apellido_paterno_input.value;
    objEmpleados.apellido_materno = apellido_materno_input.value;
    objEmpleados.genero = genero_input.value;
    objEmpleados.fecha_nacimiento = fecha_nacimiento_input.value;
    objEmpleados.rfc = rfc_input.value;
    objEmpleados.curp = curp_input.value;
    objEmpleados.foto = foto_input.value;
    objEmpleados.colonia = colonia_input.value;
    objEmpleados.calle = calle_input.value;
    objEmpleados.numero = numero_input.value;
    objEmpleados.codigo_postal = codigo_postal_input.value;
    objEmpleados.ciudad = ciudad_input.value;
    objEmpleados.estado = estado_input.value;
    objEmpleados.telefono = telefono_input.value;
    objEmpleados.fecha_ingreso = fecha_ingreso_input.value;
    objEmpleados.puesto = puesto_input.value;
    objEmpleados.salario = salario_input.value;
    objEmpleados.email = email_input.value;
    

    Empleados.map(empleado => {

        if(empleado.id === objEmpleados.id) {
            empleado.id = objEmpleados.id;
            empleado.nombre = objEmpleados.nombre;
            empleado.apellido_paterno = objEmpleados.apellido_paterno;
            empleado.apellido_materno = objEmpleados.apellido_materno;
            empleado.genero = objEmpleados.genero;
            empleado.fecha_nacimiento = objEmpleados.fecha_nacimiento;
            empleado.rfc = objEmpleados.rfc;
            empleado.curp = objEmpleados.curp;
            empleado.foto = objEmpleados.foto;
            empleado.colonia = objEmpleados.colonia;
            empleado.calle = objEmpleados.calle;
            empleado.numero = objEmpleados.numero;
            empleado.codigo_postal = objEmpleados.codigo_postal;
            empleado.ciudad = objEmpleados.ciudad;
            empleado.estado = objEmpleados.estado;
            empleado.telefono = objEmpleados.telefono;
            empleado.fecha_ingreso = objEmpleados.fecha_ingreso;
            empleado.puesto = objEmpleados.puesto;
            empleado.salario = objEmpleados.salario;
            empleado.email = objEmpleados.email;
            empleado.codEmpleado = objEmpleados.codEmpleado;
            empleado.estatus = objEmpleados.estatus;

        }

    });

    limpiarHTML();
    mostrarEmpleados();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarEmpleado(id) {

    const index = Empleados.findIndex(empleado => empleado.id === id);

    if (index !== -1) {
        Empleados[index].estatus = 'Inactivo';
    }

    limpiarHTML();
    mostrarEmpleados();
}

function cargarDatosJSON() {
  fetch('../../modulos/moduloEmpleados/Empleados.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      Empleados = jsondata;
      mostrarEmpleados();
    });
}

cargarDatosJSON();

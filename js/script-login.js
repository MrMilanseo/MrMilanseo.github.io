const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

const formularioSucursal = document.querySelector('#formSucursal');
const formularioCentral = document.querySelector('#formCentral');
const botonSucursal = document.querySelector('#btnSucursal');
const botonCentral = document.querySelector('#btnCentral');
const correoSucursal = document.querySelector('#correoSucursal');
const correoCentral = document.querySelector('#correoCentral');
const contraSucursal = document.querySelector('#contraSucursal');
const contraCentral = document.querySelector('#contraCentral');

formularioSucursal.addEventListener('submit', validarFormularioS);

formularioCentral.addEventListener('submit', validarFormularioC);

function validarFormularioS(e){
    e.preventDefault();
    
    if(correoSucursal.value === 'admin' && contraSucursal.value === 'admin'){
        validate();
        return ;
    }else if(correoSucursal.value === '' || contraSucursal.value === ''){
        Swal.fire({
    title: '<strong>Llene todos los campos</strong>',
    icon: 'warning',
    html:
      'Porfavor ingrese los datos de sus credenciales en todos los campos para ingresar',
    showCloseButton: true,
    focusConfirm: false,
  });
        return ;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Acceso denegado',
            text: 'El correo o el usuario son incorrectos',
            footer: 'Porfavor verifique que sean correctos sus datos'
});
        return ;
    }
    
}

function validarFormularioC(e){
    e.preventDefault();
    
    if(correoCentral.value === 'admin' && contraCentral.value === 'admin'){
        
        
        validate();
        return ;
    }else if(correoCentral.value === '' || contraCentral.value === ''){
        Swal.fire({
            title: '<strong>Llene todos los campos</strong>',
            icon: 'warning',
            html:
              'Porfavor ingrese los datos de sus credenciales en todos los campos para ingresar',
            showCloseButton: true,
            focusConfirm: false,
          });
        return ;
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Acceso denegado',
            text: 'El correo o el usuario son incorrectos',
            footer: 'Porfavor verifique que sean correctos sus datos'
});
        return ;
    }
    
}


function validate(){
    window.location="modulos/moduloHome/Inicio.html";
    
}




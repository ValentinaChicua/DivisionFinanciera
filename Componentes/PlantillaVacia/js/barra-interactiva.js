// Funcionalidad para la Barra Interactiva
document.addEventListener('DOMContentLoaded', function() {
  console.log('Inicializando Barra Interactiva...');
  
  // Obtener todos los elementos de la barra
  const barraItems = document.querySelectorAll('.barra-item');
  
  // Agregar event listeners para hover
  barraItems.forEach(item => {
    const titulo = item.querySelector('.barra-titulo');
    const menu = item.querySelector('.barra-menu');
    
    // Evento mouseenter
    item.addEventListener('mouseenter', function() {
      console.log('Mouse enter en:', titulo.textContent);
      
      // Cerrar todos los otros menús
      barraItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherMenu = otherItem.querySelector('.barra-menu');
          otherMenu.style.opacity = '0';
          otherMenu.style.visibility = 'hidden';
        }
      });
      
      // Mostrar el menú actual
      menu.style.opacity = '1';
      menu.style.visibility = 'visible';
    });
    
    // Evento mouseleave
    item.addEventListener('mouseleave', function() {
      console.log('Mouse leave de:', titulo.textContent);
      
      // Ocultar el menú después de un pequeño delay
      setTimeout(() => {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
      }, 200);
    });
    
    // Evento click en las opciones del menú
    const menuOpciones = menu.querySelectorAll('.menu-opcion');
    menuOpciones.forEach(opcion => {
      opcion.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Opción seleccionada:', opcion.textContent);
        
        // Aquí puedes agregar la lógica para cada opción
        // Por ejemplo, mostrar un modal, redirigir, etc.
        
        // Ejemplo: Mostrar un mensaje
        alert(`Has seleccionado: ${opcion.textContent}`);
      });
    });
  });
  
  // Agregar funcionalidad de teclado para accesibilidad
  barraItems.forEach(item => {
    const titulo = item.querySelector('.barra-titulo');
    const menu = item.querySelector('.barra-menu');
    
    titulo.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        
        // Alternar visibilidad del menú
        const isVisible = menu.style.visibility === 'visible';
        
        if (isVisible) {
          menu.style.opacity = '0';
          menu.style.visibility = 'hidden';
        } else {
          // Cerrar otros menús
          barraItems.forEach(otherItem => {
            if (otherItem !== item) {
              const otherMenu = otherItem.querySelector('.barra-menu');
              otherMenu.style.opacity = '0';
              otherMenu.style.visibility = 'hidden';
            }
          });
          
          // Mostrar este menú
          menu.style.opacity = '1';
          menu.style.visibility = 'visible';
        }
      }
    });
  });
  
  console.log('Barra Interactiva inicializada correctamente');
});

// Función para cerrar todos los menús (útil para cerrar al hacer clic fuera)
function cerrarTodosLosMenus() {
  const barraItems = document.querySelectorAll('.barra-item');
  barraItems.forEach(item => {
    const menu = item.querySelector('.barra-menu');
    menu.style.opacity = '0';
    menu.style.visibility = 'hidden';
  });
}

// Cerrar menús al hacer clic fuera de la barra
document.addEventListener('click', function(e) {
  if (!e.target.closest('.barra-interactiva')) {
    cerrarTodosLosMenus();
  }
}); 
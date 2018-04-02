$(document).ready(function() {
  // imprimir pagina
  let imp = $('#imprimir');
  $('#imprimir').on('click', function() {
    if (window.print !== null) { 
      window.print(); 
    } else { 
      alert('No tienes habilitada esta opción en el naveador.'); 
    } 
  });

  // SLIDER 
  $(function() { 
    /* $('.slider').slick({
      lazyLoad: 'ondemand',
      // slidesToShow: 4,
      slidesToScroll: 1
    }); */ 
    $('.slider').slick({
      // the magic
      responsive: [{
    
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          // infinite: true
        }
      }, {
    
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          // dots: true
        }
    
      }, {
    
        breakpoint: 300,
        settings: 'unslick' // destroys slick
    
      }]
    // autoplaySpeed: 2000,
    });
  });
 

  const dataLogo = [
    {
      url: 'https://btpucp.pucp.edu.pe/wp-content/uploads/2012/07/logo-oficial-412x120.png',
      banco: 'bcp'
    },
    {
      url: 'https://eisaf.es/wp-content/uploads/2018/03/bbva_foro-500x150.png',
      banco: 'bbva'
    },
    {
      url: 'https://btpucp.pucp.edu.pe/wp-content/uploads/2012/07/logo-oficial-412x120.png',
      banco: 'bcp'
    },
    {
      url: 'https://eisaf.es/wp-content/uploads/2018/03/bbva_foro-500x150.png',
      banco: 'bbva'
    }
  ];
  const datos = `
  <div class="item sli-item" >
      <img src=${dataLogo[0].url}  />
      <p>${dataLogo[0].banco}</p>
  </div>
`;

  function imagenes(dataLogo) {
    const contPadre = $('.slider');
    contPadre.append(datos);
  }
  imagenes();
  console.log(dataLogo);
/* et show = dataLogo[0].url;
console.log(show);*/
});

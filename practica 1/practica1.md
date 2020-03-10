# Práctica 1 (Usabilidad y accesibilidad)

## http://www.gobiernodecanarias.org/istac/api/

### Alguna línea de código HTML que se aplique:
          <div class="section">
          <div class="izq">   	 
          <img src="/istac/resources/imagenes/logo_istac.jpg" alt="">    
          </div>    
          <div class="der">   	 
          <img src="/istac/resources/imagenes/logo_edatos.jpg" alt="">    
          </div>
          </div>

### Alguna línea de código CSS que se aplique:
          .section {
          font-family: "Droid Sans",sans-serif;
          font-size: 15px;
          color: #000;
          max-width: 960px;
          margin: 0 auto;
          padding: 5px 0 0 0;
          clear: both;
          }

### Alguna línea de código JavaScript:
          La página no emplea ninguna línea de código JavaScript.

### ¿Qué idioma acepta?
          No se especifica ninguno en concreto.

### Qué IP tiene tiene el servidor
          La IP del servidor es 93.188.136.129.

### Qué DNS tiene el servidor:
          www.gobiernodecanarias.org

### ¿La página tiene alguna cookie?, ¿Cuáles?
          No tiene ninguna cookie.
          
### Qué peticiones desencadena la consulta.
          Peticiones de tipo GET.

### ¿Qué tipo de petición estás realizando?
          Peticiones de tipo GET.


## http://www3.gobiernodecanarias.org/sanidad/scs/gc/18/Cita_Previa/index.html

### Alguna línea de código HTML que se aplique:
          <div class="jumbotron" style="text-align: left;padding:20px;">
          <h1 style="font-size:32px;">Cita previa</h1>
          <p style="font-size:14px;">
          Este servicio ha cambiado de dirección. La nueva es 
          <ahref="http://www.gobiernodecanarias.org/citasalud">http://www.gobiernodecanarias.org/citasalud</a>.
          </p>
          <p style="font-size:14px;">Actualice sus marcadores, por favor.</p></div>


### Alguna línea de código CSS que se aplique:
          .container {
          	padding-right: 15px;
          	padding-left: 15px;
          	margin-right: auto;
          	margin-left: auto;
          }

### Alguna línea de código JavaScript:
          escape: function () {
               	var that = this
              	if (this.isShown && this.options.keyboard) {
               	this.$element.on('keyup.dismiss.modal', function ( e ) {
                 	          e.which == 27 && that.hide()
               	})
              	} else if (!this.isShown) {
                	this.$element.off('keyup.dismiss.modal')
              	}
          }

### ¿Qué idioma acepta?
           Específicamente inglés: <html lang="en">
 
### Qué IP tiene tiene el servidor:
          93.188.136.126

### Qué DNS tiene el servidor:
           www3.gobiernodecanarias.org

### ¿La página tiene alguna cookie?, ¿Cuáles?.
          No tiene

### Qué peticiones desencadena la consulta.
          Peticiones de tipo GET.

### ¿Qué tipo de petición estás realizando?
          Peticiones de tipo GET.



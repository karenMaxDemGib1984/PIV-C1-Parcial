Enunciado: 
Muchas pequeñas y medianas empresas (PyMEs) enfrentan dificultades para calcular rápidamente el margen de ganancia de sus productos 
tras aplicar impuestos y costos operativos. 
La falta de una herramienta centralizada y ágil provoca errores en la fijación de precios, afectando la rentabilidad.
Sector enfocado: Sector comercial, administrativo y financiero (PyMEs).


Nustro programa ayuda para hacer cálculos en base a distintas categorías fiscales.

preguntas:
o ¿Qué valor agregado tiene el uso de webcomponents a su proyecto?
Permite la reutilzación de código por medio del encapsulamiento ya que por ejemplo
se puede reutilizar la etiqueta <calculadora-precio> en cualquier parte del sitio 
en otros proyectos sin que haya lío con los nombres.



o ¿De qué forma manipularon los datos sin recargar la página?
Por medio del método event.prevenDefault() dentro del evento submit del formulario
para poder detener el comportamiento por defecto del formulario y permite procesar
la lógica con JS para actualizar el DOM.


o ¿De qué forma validaron las entradas de datos? Expliquen brevemente
Expliquen brevemente. Se implementó una validación lógica en JS mediante condicionales if. Se verificó que los campos de texto no estuvieran vacíos (.trim()), que los números fueran válidos (isNaN) y positivos, y que el usuario hubiera seleccionado una opción del select. Si hay errores, se muestran mensajes bajo cada campo.



o ¿Cómo manejaría la escalabilidad futura en su página?


• ¿De qué forma manipularon los datos sin recargar la página? Se utilizó el método event.preventDefault() dentro del evento submit del formulario. Esto detiene el comportamiento por defecto del navegador y nos permite procesar la lógica con JavaScript para actualizar el contenido del DOM (usando .innerHTML y .style.display) dinámicamente.
 Para escalar, implementaría Shadow DOM para aislar completamente el CSS del componente. Además, conectaría el componente a una API externa para guardar los productos en una base de datos y añadiría estados para manejar listas de múltiples productos administrados.

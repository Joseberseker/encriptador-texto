function encriptarMensaje() {
  let mensaje_encriptado,
    mensaje_encriptado_a,
    mensaje_encriptado_e,
    mensaje_encriptado_i,
    mensaje_encriptado_o,
    mensaje_encriptado_u;

  //Obteniendo el elemento textarea  
  let mostrar_mensaje_encriptado = document.getElementsByClassName(
    "seccion__derecha__seccion__contenido__texto__desencriptado"
  );

  let mensaje = document.getElementsByClassName(
    "seccion__izquierda__entrada__texto"
  );

  // obteniendo el valor del textarea
  let mensaje_a_encriptar = mensaje[0].value;

  //convirtiendo a minusculas la cadena
  let mensaje_a_encriptar_minuscula = mensaje_a_encriptar.toLowerCase();

  // reemplazando vocales en el mensaje por palabras encriptadas
  mensaje_encriptado_a = mensaje_a_encriptar_minuscula.replaceAll("a", "ai");
  mensaje_encriptado_e = mensaje_encriptado_a.replaceAll("e", "enter");
  mensaje_encriptado_i = mensaje_encriptado_e.replaceAll("i", "imes");
  mensaje_encriptado_o = mensaje_encriptado_i.replaceAll("o", "ober");
  mensaje_encriptado_u = mensaje_encriptado_o.replaceAll("u", "ufat");

  mensaje_encriptado = mensaje_encriptado_u;

  // mostrando en el textarea el texto encriptado
  mostrar_mensaje_encriptado[0].innerHTML = mensaje_encriptado
}

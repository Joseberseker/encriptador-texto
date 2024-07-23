function encriptarMensaje() {
  let mensaje_encriptado, mensaje_encriptado_a, mensaje_encriptado_e, mensaje_encriptado_i, mensaje_encriptado_o, mensaje_encriptado_u;


  let mensaje = document.getElementsByClassName(
    "seccion__izquierda__entrada__texto"
  );

  let mensaje_a_encriptar = mensaje[0].value;

  let mensaje_a_encriptar_minuscula = mensaje_a_encriptar.toLowerCase();

  mensaje_encriptado_a = mensaje_a_encriptar_minuscula.replaceAll("a", "ai");
  mensaje_encriptado_e = mensaje_encriptado_a.replaceAll("e", "enter");
  mensaje_encriptado_i = mensaje_encriptado_e.replaceAll("i", "imes");
  mensaje_encriptado_o = mensaje_encriptado_i.replaceAll("o", "ober");
  mensaje_encriptado_u = mensaje_encriptado_o.replaceAll("u", "ufat");
  
  mensaje_encriptado = mensaje_encriptado_u

  alert(mensaje_encriptado);
}

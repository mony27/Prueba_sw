<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "tu_correo@tudominio.com";
    $asunto = "Nuevo mensaje de contacto de $nombre";
    $cuerpoMensaje = "Nombre: $nombre\nCorreo: $correo\nMensaje: $mensaje";

    // Enviar el correo
    mail($destinatario, $asunto, $cuerpoMensaje);

    // Redirigir al usuario a una página de confirmación
    header("Location: confirmacion.html");
}
?>
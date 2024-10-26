import imaplib
import email
from email.header import decode_header
import re
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

# Configuraciones de conexión IMAP
IMAP_SERVER = "imap.gmail.com"
IMAP_PORT = 993


def check_email():
    username = os.getenv("USER")
    password = os.getenv("PASS")

    # Conectar al servidor IMAP
    with imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT) as mail:
        mail.login(username, password)

        # Seleccionar la bandeja de entrada
        mail.select("inbox")

        # Buscar correos sin leer
        status, messages = mail.search(None, 'UNSEEN')

        if status == "OK":
            for num in messages[0].split():
                # Obtener el correo
                status, msg_data = mail.fetch(num, '(RFC822)')
                for response_part in msg_data:
                    if isinstance(response_part, tuple):
                        msg = email.message_from_bytes(response_part[1])

                        # Decodificar el asunto
                        subject, encoding = decode_header(msg["Subject"])[0]
                        if isinstance(subject, bytes):
                            subject = subject.decode(encoding if encoding else "utf-8")
                        print("Asunto:", subject)

                        # Analizar el contenido del correo
                        if msg.is_multipart():
                            for part in msg.walk():
                                content_type = part.get_content_type()
                                content_disposition = str(part.get("Content-Disposition"))

                                # Solo analizar el cuerpo del mensaje
                                if content_type == "text/plain" and "attachment" not in content_disposition:
                                    body = part.get_payload(decode=True).decode()

                                    # Buscar signos de actividad sospechosa
                                    if re.search(r"idioma|enlace|link", body, re.IGNORECASE):
                                        print("Advertencia: Mensaje sospechoso encontrado.")
                                        # Lógica adicional para enviar una alerta o marcar el correo
                        else:
                            body = msg.get_payload(decode=True).decode()
                            if re.search(r"idioma|enlace|link", body, re.IGNORECASE):
                                print("Advertencia: Mensaje sospechoso encontrado.")


# Ejecutar la función
check_email()

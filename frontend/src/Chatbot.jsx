import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Verificar si el script ya está cargado
    if (!document.querySelector('script[src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"]')) {
      const script = document.createElement('script');
      script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
      />
      <df-messenger
        oauth-client-id="192179457056-pnp0e947vovbbp0dv83mb4jn05jj4j96.apps.googleusercontent.com"
        location="us"
        project-id="sage-groove-435820-q3"
        agent-id="c1fd888f-0434-4040-866c-b4bf57f39a04"
        language-code="en"
        max-query-length="-1">
        <df-messenger-chat-bubble
          chat-title="CiberAmigo">
        </df-messenger-chat-bubble>
      </df-messenger>

      <style>
        {`
          /* Personalizar el botón de chat */
          df-messenger-chat-bubble {
            background-color: #1976d2;
            color: #fff;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-image: url('https://path-to-your-robot-icon.png'); /* Reemplaza con la URL de tu icono */
            background-position: center;
            background-size: 50%;
            background-repeat: no-repeat;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          }

          /* Posición y z-index de la burbuja para que esté sobre todos los componentes */
          df-messenger {
            position: fixed;
            bottom: 16px;
            right: 16px;
            z-index: 9999; /* Asegura que esté sobre todos los elementos */
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;

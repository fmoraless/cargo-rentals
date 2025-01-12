import { Container, Title, Text } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import classes from "./Styles.module.css";

export const PrivacyLayout = () => {
  return (
    <Container size="md" py="xl">
      <Title order={1}>Política de Privacidad</Title>
      <Text mt="md">
        En <strong>[Nombre de tu Sitio]</strong>, nos comprometemos a proteger
        tu privacidad. Esta página describe cómo recopilamos, usamos y
        protegemos tu información personal al utilizar nuestro sitio web creado
        con Next.js y nuestra interfaz de usuario basada en Mantine.
      </Text>

      <Title order={2} mt="xl">
        Información que Recopilamos
      </Title>

      <Title order={3} mt="md">
        Información Proporcionada por el Usuario
      </Title>
      <Text>
        Podemos recopilar información que nos proporciones directamente,
        incluyendo:
      </Text>

      <Title order={3} mt="md">
        Información Automática
      </Title>
      <Text>Cuando navegas en nuestro sitio, recopilamos automáticamente:</Text>

      <Title order={3} mt="md">
        Datos de Ubicación
      </Title>
      <Text>
        Con tu consentimiento, podemos recopilar y procesar datos precisos de
        ubicación para ciertas funcionalidades del sitio.
      </Text>

      <Title order={2} mt="xl">
        Uso de la Información
      </Title>
      <Text>Utilizamos la información recopilada para:</Text>

      <Title order={2} mt="xl">
        Compartir Información
      </Title>
      <Text>
        No compartimos tu información personal con terceros, excepto en los
        siguientes casos:
      </Text>

      <Title order={2} mt="xl">
        Seguridad de la Información
      </Title>
      <Text>
        Implementamos medidas de seguridad adecuadas para proteger tu
        información contra accesos no autorizados, alteraciones, divulgaciones o
        destrucciones.
      </Text>

      <Title order={2} mt="xl">
        Tus Derechos
      </Title>
      <Text>Tienes derecho a:</Text>

      <Text>
        Para ejercer estos derechos, contáctanos a{" "}
        <strong>[correo electrónico de contacto]</strong>.
      </Text>

      <Title order={2} mt="xl">
        Cambios a esta Política de Privacidad
      </Title>
      <Text>
        Podemos actualizar esta política de vez en cuando. Notificaremos
        cualquier cambio importante a través de nuestro sitio o por otros medios
        adecuados.
      </Text>

      <Title order={2} mt="xl">
        Contacto
      </Title>
      <Text>
        Si tienes alguna pregunta sobre esta política de privacidad, puedes
        comunicarte con nosotros en:
      </Text>
    </Container>
  );
};

import { Container, Title, Text } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import classes from "./Styles.module.css";

export const ChildPrivacyLayout = () => {
  return (
    <Container size="md" py="xl">
      <Title order={1}>Política de Seguridad Infantil</Title>

      <Title order={2} mt="lg">
        Ámbito
      </Title>
      <Text mt="sm">
        Aplica a todo uso del sitio y aplicaciones relacionados con nuestra
        plataforma de alquileres cuando puedan estar involucrados menores de 18
        años, ya sea directa o indirectamente a través de sus madres, padres o
        tutores.
      </Text>

      <Title order={2} mt="lg">
        Recopilación de información
      </Title>
      <Text mt="sm">
        No recopilamos conscientemente datos personales de menores de 13 años
        sin el consentimiento verificable de sus madres, padres o tutores. Si
        descubrimos que se ha registrado información de un menor sin dicho
        consentimiento, la eliminaremos de forma diligente.
      </Text>
      <Text mt="sm">
        La información que podría recopilarse (siempre a través del adulto
        responsable) incluye nombre, edad aproximada, y datos estrictamente
        necesarios para la prestación del servicio y la seguridad operativa.
      </Text>

      <Title order={2} mt="lg">
        Uso de la información
      </Title>
      <Text mt="sm">
        Utilizamos la información solo para gestionar reservas, verificar
        requisitos de seguridad, cumplir obligaciones legales y mejorar la
        experiencia del servicio. No utilizamos información de menores con fines
        de marketing dirigido.
      </Text>

      <Title order={2} mt="lg">
        Consentimiento parental
      </Title>
      <Text mt="sm">
        Cuando corresponda, requerimos consentimiento verificable de madres,
        padres o tutores antes de recopilar, usar o divulgar información
        personal de menores. Podemos solicitar documentación o verificación
        adicional para confirmar la identidad del adulto responsable.
      </Text>

      <Title order={2} mt="lg">
        Derechos y opciones
      </Title>
      <Text mt="sm">
        Las madres, padres o tutores pueden solicitar acceso, corrección o
        eliminación de la información del menor bajo su responsabilidad, así
        como retirar el consentimiento en cualquier momento, sujeto a
        obligaciones legales y de retención aplicables.
      </Text>

      <Title order={2} mt="lg">
        Conservación y seguridad
      </Title>
      <Text mt="sm">
        Conservamos la información solo durante el tiempo necesario para los
        fines autorizados y según la ley. Implementamos medidas técnicas y
        organizativas razonables para proteger los datos contra acceso, uso o
        divulgación no autorizados.
      </Text>

      <Title order={2} mt="lg">
        Divulgación a terceros
      </Title>
      <Text mt="sm">
        No compartimos información de menores con terceros salvo que sea
        necesario para prestar el servicio, cumplir con la ley, proteger la
        seguridad de las personas o con el consentimiento del adulto
        responsable. Exigimos a nuestros proveedores medidas de seguridad
        equivalentes.
      </Text>

      <Title order={2} mt="lg">
        Contacto
      </Title>
      <Text mt="sm">
        Si crees que un menor nos ha proporcionado datos sin el consentimiento
        apropiado, o deseas ejercer derechos sobre la información de un menor,
        contáctanos a través de los canales publicados en nuestro sitio.
      </Text>

      <Text mt="lg">Última actualización: 25 de agosto de 2025</Text>
    </Container>
  );
};

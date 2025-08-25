import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Seguridad Infantil | Cargo Rentals',
  description: 'Consulta nuestra política de seguridad infantil conforme a los requisitos de Google Play. Información sobre protección de menores, moderación, controles parentales y contacto oficial.'
};

export default function SeguridadInfantilPoliciesPage() {
  return (
    <main className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>Política de Seguridad Infantil</h1>
      <section>
        <h2>Alcance y objetivo</h2>
        <p>
          Esta política establece los lineamientos para proteger a los menores de edad que interactúan con Cargo Rentals, conforme a los requisitos de Google Play y la legislación vigente.
        </p>
      </section>
      <section>
        <h2>Contenido prohibido y moderación</h2>
        <p>
          Está estrictamente prohibido publicar, compartir o solicitar contenido ilegal, violento, sexual, discriminatorio o que ponga en riesgo la integridad de menores. Todo el contenido es moderado y puede ser eliminado sin previo aviso.
        </p>
      </section>
      <section>
        <h2>Interacciones y reportes</h2>
        <p>
          Las interacciones entre usuarios están sujetas a monitoreo. Si detectas comportamientos sospechosos o inapropiados, puedes reportarlos mediante el correo <a href="mailto:fcomorales.sanchez@gmail.com">fcomorales.sanchez@gmail.com</a>.
        </p>
      </section>
      <section>
        <h2>Recolección y uso de datos de menores</h2>
        <p>
          No recopilamos datos personales de menores de edad sin el consentimiento verificable de sus padres o tutores. Toda información recolectada se utiliza exclusivamente para mejorar la experiencia y seguridad en la plataforma.
        </p>
      </section>
      <section>
        <h2>Controles parentales</h2>
        <p>
          Recomendamos a los padres y tutores supervisar el uso de la plataforma por parte de menores y utilizar controles parentales disponibles en sus dispositivos.
        </p>
      </section>
      <section>
        <h2>Procedimiento de denuncia y contacto</h2>
        <p>
          Para denunciar contenido o conductas que vulneren la seguridad infantil, escribe a <a href="mailto:fcomorales.sanchez@gmail.com">fcomorales.sanchez@gmail.com</a>. Atenderemos tu reporte con prioridad y confidencialidad.
        </p>
      </section>
      <section>
        <h2>Cumplimiento y actualización</h2>
        <p>
          Esta política se revisa y actualiza periódicamente para garantizar el cumplimiento de las normativas y la protección de los menores.
        </p>
      </section>
    </main>
  );
}

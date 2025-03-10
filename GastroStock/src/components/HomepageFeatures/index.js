import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'La primera TPV de nueva generación',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Servimos a tu negocio de la manera más sencilla para ti y tus empleados. Tu forma
        de trabajar será más eficiente y cómoda sin causarte cambios incómodos.
      </>
    ),
  },
  {
    title: 'Tu negocio, tus reglas',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Tus datos son solo tuyos y nos comprometemos a no venderlos ni transferirlos 
        a nadie fuera de tu negocio.
      </>
    ),
  },
  {
    title: 'Impulsado por la Inteligencia Artifical',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Haciendo uso de las últimas tecnologías te brindamos más información sobre
        el estado de tu negocio, notificaciones y recomendaciones para tus compras y ventas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

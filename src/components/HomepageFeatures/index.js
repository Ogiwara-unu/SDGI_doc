import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import catsaDescrip from '@site/static/img/catsa-descrip.jpg';
import catsaMision from '@site/static/img/catsa-mision.jpg';
import catsaVision from '@site/static/img/catsa-vision.jpg';

const FeatureList = [
  {
    title: 'Objetivo  General',
    image: catsaDescrip,
    description: (
      <>
        Gestionar los procesos que se llevan a cabo en el departamento de informática desde
        cualquier dispositivo (móvil o computadora).
      </>
    ),
  },
  {
    title: 'Visión',
    image: catsaVision,
    description: (
      <>
        Seremos la empresa líder en productividad y rentabilidad de la agroindustria azucarera nacional.
      </>
    ),
  },
  {
    title: 'Misión',
    image: catsaMision,
    description: (
      <>
        Somos una empresa agroindustrial que transforma la caña de azúcar de manera sostenible, 
        en productos que generan bienestar a las partes interesadas.
      </>
    ),
  },
  
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImg} alt={title} />
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

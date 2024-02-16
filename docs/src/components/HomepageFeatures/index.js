import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Industry Simulators',
    src: require('@site/static/img/simulators.png').default,
    description: (
      <>
        Various go-cli simulators that generate industry-specific data.
      </>
    ),
    type: 'img',
  },
  {
    title: 'Thin-edge.io',
    src: require('@site/static/img/thin-edge.svg').default,
    description: (
      <>
        Multiple Demos on how to use and extend thin-edge.io with Cumulocity IoT.
      </>
    ),
    type: 'svg',
  },
  {
    title: 'Device Protocols',
    src: require('@site/static/img/simulators.png').default,
    description: (
      <>
        Multiple Demos to demonstrate how various industry protocols are integrated and can be used with Cumulocity IoT.
      </>
    ),
    type: 'img',
  },
];

function FeatureSvg({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={link}>
            {title}
          </Link>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureImg({ img, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={link}>
            {title}
          </Link>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Feature({ src, title, description, type }) {
  if (type === 'svg') {
    return <FeatureSvg Svg={src} title={title} description={description} />;
  } else {
    return <FeatureImg img={src} title={title} description={description} />;
  }
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
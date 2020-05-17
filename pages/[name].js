import combos from '../combos';
import Home from './index';

export default function NamePage({name}) {
  return <Home name={name} />;
}

export function getStaticProps({params: {name}}) {
  return { props: {name} };
}

export function getStaticPaths() {
  return {
    paths: Object.keys(combos).map(name => `/${name}`),
    fallback: false,
  };
}
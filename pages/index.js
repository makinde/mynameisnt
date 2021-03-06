import combos from '../combos';

export default function Home({ name }) {
  const capitalizedName = name[0].toUpperCase() + name.slice(1);
  const facebookId = combos[name];

  return (
    <center>
      <h1 style={{fontFamily: 'Helvetica', margin: '30px 0'}}>My Name Isn't {capitalizedName}</h1>
      <a href={`https://www.facebook.com/${facebookId}`}>
        <img src={`//graph.facebook.com/${facebookId}/picture?type=large&access_token=74742160840|c90b3363a3c0835669a83e1735074db8`} />
      </a>
    </center>
  )
}

export function getServerSideProps(ctx) {
  const names = Object.keys(combos);
  const randomIndex = Math.floor(Math.random() * names.length);
  const name = names[randomIndex];

  return { props: { name } };
}

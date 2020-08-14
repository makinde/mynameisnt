import combos from '../combos';

export default function Home({ name }) {
  const capitalizedName = name[0].toUpperCase() + name.slice(1);
  const facebookId = combos[name.toLowerCase()];

  return (
    <center>
      <h1 style={{fontFamily: 'Helvetica', margin: '30px 0'}}>My Name Isn't {capitalizedName}</h1>
      <a href={`http://www.facebook.com/${facebookId}`}>
        <img src={`https://graph.facebook.com/${facebookId}/picture?type=large`} />
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

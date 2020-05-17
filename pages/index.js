import combos from '../combos';

export default function Home({ name }) {
  if (!name || !combos[name]) {
    const names = Object.keys(combos);
    const randomIndex = Math.floor(Math.random() * names.length);
    name = names[randomIndex];
  }

  const capitalizedName = name[0].toUpperCase() + name.slice(1);
  const facebookId = combos[name];

  return (
    <center>
      <h1 style={{fontFamily: 'Helvetica', margin: '30px 0'}}>My Name Isn't {capitalizedName}</h1>
      <a href={`http://www.facebook.com/${facebookId}`}>
        <img src={`http://graph.facebook.com/${facebookId}/picture?type=large`} />
      </a>
    </center>
  )
}

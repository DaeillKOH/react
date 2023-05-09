import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '대일';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1>Hekko!</h1>
      <h2>{name}</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;

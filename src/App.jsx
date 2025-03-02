import "./App.css";
import Card from "./components/Card";

function App() {
  const items = [
    "React",
    "React Native",
    "Next.js",
    "Gatsby",
    "Svelte",
    "Vue",
    "Angular",
    "SvelteKit",
    "Nuxt",
    "Flutter",
    "AngularDart",
    "Flutter Web",
    "SvelteKit",
    "SolidJS",
    "AngularJS",
  ];

  return (
    <section>
      <h1>Hola mundo</h1>
      <Card title="Card 1" description="This is a description" />
      <Card title="Card 2" description="This is a description" />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default App;

import './App.css';
import { LiveProvider, LiveEditor, LivePreview } from "react-live";


const code = `
<h3 style={{
  background: 'darkslateblue',
  color: 'white',
  padding: 8,
  borderRadius: 4
}}>
  Hello World! 👋
</h3>
`;

const App = () => {
  return (
    <div className="content">
      <LiveProvider code={code}>
        <div className="grid grid-cols-2 gap-4">
          <LiveEditor className="font-mono" />
          <LivePreview />
        </div>
      </LiveProvider>
    </div>
  );
};

export default App;

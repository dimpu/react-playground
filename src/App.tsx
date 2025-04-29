import './App.css';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';

const code = `
type Props = {
  label: string;
}
const Counter = (props: Props) => {
  const [count, setCount] =
    React.useState<number>(0)
  return (
    <div>
      <h3 style={{
        background: 'darkslateblue',
        color: 'white',
        padding: 8,
        borderRadius: 4
      }}>
        {props.label}: {count} 🧮
      </h3>
      <button
        style={{
          background: '#333',
          color: '#fff',
          borderRadius: 4,
          padding: 8,
          margin: 4
        }}
        onClick={() =>
          setCount(c => c + 1)
        }>
        Increment
      </button>
    </div>
  )
}
render(<Counter label="Counter" />)

`;

const App = () => {
  return (
    <div className="content h-screen">
      <LiveProvider code={code} noInline>
        <div className="flex">
          <LiveEditor className="font-mono flex-1 h-screen" />
          <div className="flex flex-col flex-1 h-screen p-4">
            <LivePreview />
            <LiveError className="text-red-800 bg-red-100 mt-2" />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
};

export default App;

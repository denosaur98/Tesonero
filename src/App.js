import Header from './components/header/Header.tsx'
import Main from './components/main/Main.tsx'
import SectionMain from './components/sectionMain/SectionMain.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <SectionMain/>
    </div>
  );
}

export default App;
import { Header } from './components/components/header/header';
import { Main } from './components/components/main/main';

function App() {
  return (
    <div className='container mx-auto px-2 pb-6 space-y-12 lg:space-y-24'>
      <Header />
      <Main />
    </div>
  );
}

export default App;

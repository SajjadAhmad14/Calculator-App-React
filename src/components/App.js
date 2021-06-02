import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <div className="main-app">
    <Display />
    <ButtonPanel />
    <calculate />
  </div>
);

export default App;

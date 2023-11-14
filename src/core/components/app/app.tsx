import './styles.scss';
import { Info } from '../../../components/info/info';
import { Actions } from '../../../components/actions/actions';
import { Keyboard } from '../../../components/keyboard/keyboard';

function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}

export default App;

import { Action } from '../../../components/action/action';
import { Actions } from '../../../components/actions/actions';
import { Info } from '../../../components/info/info';
import { Key } from '../../../components/key/key';
import { Keyboard } from '../../../components/keyboard/keyboard';

export default function App() {
  return (
    <div className="container">
      <Info></Info>
      <main className="phone">
        <Keyboard>
          <Key></Key>
        </Keyboard>
        <Actions>
          <Action></Action>
        </Actions>
      </main>
    </div>
  );
}

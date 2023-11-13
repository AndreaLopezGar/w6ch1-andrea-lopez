import { useContext } from 'react';
import { AppContext } from '../../context/app.context.provider';

export function Info() {
  const { callDisplay } = useContext(AppContext);

  return <span className={callDisplay ? 'message' : 'off'}>Calling...</span>;
}

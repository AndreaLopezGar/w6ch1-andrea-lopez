import { usePhone } from '../../hooks/app.hook';

export function Info() {
  const { phoneState } = usePhone();
  return <span className="message">{phoneState.loadState}</span>;
}

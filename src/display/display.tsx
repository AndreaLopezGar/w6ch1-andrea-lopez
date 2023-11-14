import { usePhone } from '../hooks/app.hook';

export function Display() {
  const { phoneState } = usePhone();
  return (
    <>
      <span className="number">{phoneState.phone}</span>
    </>
  );
}

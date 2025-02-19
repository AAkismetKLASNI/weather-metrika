import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  extra?: string;
}

export function Field(props: Props) {
  return (
    <input
      className={`w-full ${props.extra}`}
      {...props}
    ></input>
  );
}

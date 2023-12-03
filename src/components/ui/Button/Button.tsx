import { ButtonHTMLAttributes } from "react";

type Props = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({...props}: Props) => {
  return (
    <button {...props} className={"text-center p-4 bg-quaternary rounded-xl " + props.className}>
      <div className="text-white">{props.children}</div>
    </button>
  );
}
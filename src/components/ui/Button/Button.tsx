import { ButtonHTMLAttributes } from "react";

type Props = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({...props}: Props) => {
  return (
    <button {...props} className={"text-center p-4 bg-quaternary rounded-xl shadow-md hover:shadow-xl hover:scale-105 ease-out transition-all " + props.className}>
      <div className="text-white">{props.children}</div>
    </button>
  );
}
import { User } from "lucide-react";
import OptionsTab from "../optionsTab/OptionsTab";

export default function Header() {
  return (
    <header className="flex items-center">
      <div className="text-lg text-white">Ct</div>
      <div className="flex justify-center grow">
        <OptionsTab />
      </div>
      <a className="flex items-center justify-center w-8 h-8 transition duration-300 ease-out border cursor-pointer rounded-xl bg-neutral-900 border-neutral-800 text-neutral-500 hover:text-white">
        <User size={16} />
      </a>
    </header>
  );
}

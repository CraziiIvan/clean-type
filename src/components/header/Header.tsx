import { User } from "lucide-react";
import OptionsTab from "../optionsTab/OptionsTab";

export default function Header() {
  return (
    <header className="relative z-20 flex items-center w-full">
      <div className="flex justify-center grow">
        <OptionsTab />
      </div>
    </header>
  );
}

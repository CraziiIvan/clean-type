import { cn } from "@/utils/utils";
import { Clock, Text } from "lucide-react";

export default function Option() {
  return (
    <div className={cn("bg-neutral-900 px-4 py-1 border border-neutral-800 rounded-xl text-neutral-500")}>
        <div className={cn(" flex gap-x-4")}>
        <button className={cn(" flex items-center gap-x-1")}>
            <Clock size={16}/>
            <span>Timer</span>
        </button>
        <button className={cn(" flex items-center gap-x-1")}>
            <Text size={16}/>
            <span>Quote</span>
        </button>
        </div>
    </div>
  )
}

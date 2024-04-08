import Option from "./Option"
import { cn } from "@/utils/utils"

export default function OptionsTab() {

    return (
        <div className={cn("bg-neutral-950 rounded-full flex text-sm border border-neutral-900")}>
            <Option title="Quote" options={[ 10, 25, 50, 100]} />
            <Option title="Timer" options={[ 15, 30, 60, 120]} />
        </div>
    )
}
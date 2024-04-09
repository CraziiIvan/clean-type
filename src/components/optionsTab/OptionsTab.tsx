import QouteOption from "./QouteOption"
import TimerOption from "./TimerOption"
import { cn } from "@/utils/utils"

export default function OptionsTab() {

    return (
        <div className={cn("bg-neutral-950 rounded-full flex text-sm border border-neutral-900")}>
            <QouteOption title="Quote" options={[ 10, 25, 50, 100]} />
            <TimerOption title="Timer" options={[ 15, 30, 60, 120]} />
        </div>
    )
}
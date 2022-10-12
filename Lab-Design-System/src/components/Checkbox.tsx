import * as CheckboxPrimative from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"
export interface CheckboxProps { }

export function Checkbox({ }: CheckboxProps) {

    return (
        <CheckboxPrimative.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
            <CheckboxPrimative.Indicator asChild >
                <Check weight="bold" className="h-5 w-5 text-cyan-500" />
            </CheckboxPrimative.Indicator>
        </CheckboxPrimative.Root>

    )
}
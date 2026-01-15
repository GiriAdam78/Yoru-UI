import * as React from "react"
import { Button as BaseButton } from "@base-ui/react/button";
import { clsx } from "clsx";

export type ButtonProps = React.ComponentProps<typeof BaseButton>

export function Button({className, ...props}: ButtonProps){
    return (
        <BaseButton className={clsx(
            "inline-flex items-center justify-center rounded-md px-4 py-2", 
            "bg-black text-white hover:bg-black/90", 
            className)}
          {...props}
        />
    )
}
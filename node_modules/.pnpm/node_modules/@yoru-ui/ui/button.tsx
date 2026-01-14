import * as React from "react"
import { Button as BaseButton } from "@base-ui/react/button";

export function Button(props: any){
    return (
        <BaseButton className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white"
          {...props}
        />
    )
}
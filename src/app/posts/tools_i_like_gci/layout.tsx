import { BlogPostFrame } from "@/components/BlogPostFrame/BlogPostFrame";
import { PropsWithChildren } from "react";


export const metadata = {
    title: "hello"
}

export default function PageLayout(props: PropsWithChildren, ...rest) {

     console.log("gci", props, rest)


    return <div>

        TOOLS LAYOUT

        {JSON.stringify(props.params)}
      

            {props.children}
    </div>
}
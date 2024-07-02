import { BlogPostFrame } from "@/components/BlogPostFrame/BlogPostFrame";
import { PropsWithChildren } from "react";


export const metadata = {
    title: "hello"
}

export default function PageLayout(props: PropsWithChildren, ...rest) {

    console.log("page", props, rest)
    return <div>

        POSTS PAGE
      

            {props.children}
    </div>
}
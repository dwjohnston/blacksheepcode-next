import { BlogPostFrame } from "@/components/BlogPostFrame/BlogPostFrame";
import { PropsWithChildren } from "react";


export const metadata = {
    title: "hello"
}

export default function PageLayout(props: PropsWithChildren, ...rest) {

     console.log("layout", props, rest)


    return <div>

        POSTS LAYOUT
      

            {props.children}
    </div>
}
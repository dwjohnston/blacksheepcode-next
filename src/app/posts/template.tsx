import { BlogPostFrame } from "@/components/BlogPostFrame/BlogPostFrame";
import { PropsWithChildren } from "react";


export const metadata = {
    title: "hello"
}

export default function PageLayout(props: PropsWithChildren, ...rest) {

    console.log("tmeplate",props, rest);

    return <div>

        POSTS TEMPLATE
      

      {props.children}

    </div>
}
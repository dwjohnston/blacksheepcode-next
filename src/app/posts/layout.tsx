import { PropsWithChildren } from "react";

export default function PageLayout(props: PropsWithChildren){


    return <div>

        POSTS


        {props.children}
    </div>
}
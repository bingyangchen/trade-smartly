import React from "react";

import { asIcon } from "./IconLayout";

interface Props {}
interface State {}

class IconTrash extends React.Component<Props, State> {
    public state: State;

    public constructor(props: Props) {
        super(props);
        this.state = {};
    }

    public render(): React.ReactNode {
        return (
            <>
                <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
                <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
                <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
            </>
        );
    }
}

export default asIcon(IconTrash);

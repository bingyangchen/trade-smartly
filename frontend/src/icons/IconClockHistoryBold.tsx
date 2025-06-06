import React from "react";

import { asIcon } from "./IconLayout";

interface Props {}
interface State {}

class IconClockHistoryBold extends React.Component<Props, State> {
  public state: State;

  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactNode {
    return (
      <>
        <path d="M12,0A12.034,12.034,0,0,0,4.04,3.04L2.707,1.707A1,1,0,0,0,1,2.414V7A1,1,0,0,0,2,8H6.586a1,1,0,0,0,.707-1.707L6.158,5.158A9,9,0,0,1,21,12.26,9,9,0,0,1,3.1,13.316,1.51,1.51,0,0,0,1.613,12h0A1.489,1.489,0,0,0,.115,13.663,12.018,12.018,0,0,0,12.474,23.991,12.114,12.114,0,0,0,23.991,12.474,12.013,12.013,0,0,0,12,0Z" />
        <path d="M11.5,7h0A1.5,1.5,0,0,0,10,8.5v4.293a2,2,0,0,0,.586,1.414L12.379,16A1.5,1.5,0,0,0,14.5,13.879l-1.5-1.5V8.5A1.5,1.5,0,0,0,11.5,7Z" />
      </>
    );
  }
}

export default asIcon(IconClockHistoryBold);

import React from "react";

import { asIcon } from "./IconLayout";

interface Props {}
interface State {}

class IconBrandStrategyBold extends React.Component<Props, State> {
  public state: State;

  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactNode {
    return (
      <path d="m16 3.261v-1.761c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5v.525c-.165-.015-.331-.025-.5-.025h-2v-.5c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5v.5h-2c-.169 0-.335.01-.5.025v-.525c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5v1.761c-1.221 1.009-2 2.535-2 4.239v11c0 3.033 2.468 5.5 5.5 5.5h7c3.032 0 5.5-2.467 5.5-5.5v-11c0-1.704-.779-3.23-2-4.239zm-1 15.239c0 1.378-1.121 2.5-2.5 2.5h-7c-1.379 0-2.5-1.122-2.5-2.5v-11c0-1.378 1.121-2.5 2.5-2.5h7c1.379 0 2.5 1.122 2.5 2.5zm-8-.5c0 .552-.447 1-1 1s-1-.448-1-1c0-5.211 2.019-6.923 4.156-8.736.088-.075.179-.155.268-.231l-.693-.693c-.494-.494-.144-1.34.555-1.34h2.714c.552 0 1 .448 1 1v2.714c0 .699-.845 1.049-1.34.555l-.818-.818c-.131.112-.264.229-.392.338-2.003 1.699-3.45 2.926-3.45 7.211zm6.707-2.293-.793.793.793.793c.391.391.391 1.023 0 1.414s-1.023.391-1.414 0l-.793-.793-.793.793c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l.793-.793-.793-.793c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l.793.793.793-.793c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414zm-8.207-5.707c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm18.5-7.886v18.504c0 1-.397 1.96-1.105 2.667l-.588.588c-.17.17-.445.17-.615 0l-.588-.588c-.707-.707-1.105-1.667-1.105-2.667v-18.618c.001-1.173 1.01-2.109 2.207-1.99 1.041.104 1.794 1.058 1.794 2.104z" />
    );
  }
}

export default asIcon(IconBrandStrategyBold);

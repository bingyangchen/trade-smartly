import styles from "./StockList.module.scss";

import React from "react";
import { connect } from "react-redux";

import {
    Button,
    ColorBackground,
    DetailCard,
    StretchableButton,
} from "../../../components";
import { changeStockListPageSubpage } from "../../../redux/slices/MainPageSlice";
import type { AppDispatch, RootState } from "../../../redux/store";
import { IRouter, withRouter } from "../../../router";
import Env from "../../../utils/env";

function mapStateToProps(rootState: RootState) {
    const { stockWarehouse } = rootState.tradeRecord;
    const { favorites } = rootState.memo;
    const { stockListPageSubpageName: activeSubpageName } = rootState.mainPage;
    return { stockWarehouse, favorites, activeSubpageName };
}

interface Props extends IRouter, ReturnType<typeof mapStateToProps> {
    dispatch: AppDispatch;
}

interface State {
    numberToShow: number;
}

class StockList extends React.Component<Props, State> {
    public state: State;
    public constructor(props: Props) {
        super(props);
        this.state = {
            numberToShow: 15,
        };
    }
    public componentDidMount(): void {}
    public render(): React.ReactNode {
        return (
            <div className={styles.main}>
                <ColorBackground />
                <div className={styles.switch_button_container_outer}>
                    <div className={styles.switch_button_container}>
                        <Button
                            className={this.getSwitchButtonClass("holding")}
                            onClick={() =>
                                this.props.dispatch(
                                    changeStockListPageSubpage("holding")
                                )
                            }
                        >
                            持股
                        </Button>
                        <Button
                            className={this.getSwitchButtonClass("favorites")}
                            onClick={() =>
                                this.props.dispatch(
                                    changeStockListPageSubpage("favorites")
                                )
                            }
                        >
                            觀察
                        </Button>
                    </div>
                </div>
                <div className={styles.list}>
                    {(this.props.activeSubpageName === "holding"
                        ? Object.keys(this.props.stockWarehouse)
                        : this.props.favorites
                    ).map((sid, idx) => {
                        return (
                            <DetailCard
                                key={idx}
                                sid={sid}
                                includeWarehouseInfo={
                                    this.props.activeSubpageName === "holding"
                                }
                                onClick={() => {
                                    this.props.router.navigate(
                                        `${Env.frontendRootPath}details/${this.props.activeSubpageName}/${sid}`
                                    );
                                }}
                            />
                        );
                    })}
                </div>
                <StretchableButton />
            </div>
        );
    }
    private getSwitchButtonClass(name: "holding" | "favorites"): string {
        return this.props.activeSubpageName === name
            ? "white xs"
            : "transparent xs";
    }
}

export default connect(mapStateToProps)(withRouter(StockList));

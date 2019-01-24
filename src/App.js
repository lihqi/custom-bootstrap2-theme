import React, { Component } from "react";
import "./themeColors/black/index.less";
import "./themeColors/blue/index.less";
import "./themeColors/darkblue/index.less";
import "./themeColors/green/index.less";
import "./themeColors/purple/index.less";
import "./themeColors/red/index.less";
const themes = ["black", "blue", "darkblue", "green", "purple", "red"];
const themeMap = {
    black: "黑色",
    blue: "蓝色",
    darkblue: "深蓝",
    green: "绿色",
    purple: "紫色",
    red: "红色"
};
class App extends Component {
    constructor() {
        super();
        this.state = {
            theme: "black"
        };
    }
    handler = theme => {
        this.setState({
            theme
        });
    };
    render() {
        let { theme } = this.state;
        return (
            <div className={`App ${theme}`}>
                {themes.map(item => {
                    return (
                        <label
                            className="radio inline"
                            key={item}
                            onChange={() => {
                                this.handler(item);
                            }}
                        >
                            <input
                                type="radio"
                                name="optionsRadios"
                                id="optionsRadios1"
                                value={item}
                                defaultChecked={item === theme}
                            />
                            {themeMap[item]}
                        </label>
                    );
                })}
                <p className="muted">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
                </p>
                <p className="text-warning">
                    Etiam porta sem malesuada magna mollis euismod.
                </p>
                <p className="text-error">
                    Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p className="text-info">
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                    venenatis.
                </p>
                <p className="text-success">
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                </p>
                <p>
                    <button className="btn btn-large btn-primary" type="button">
                        Large button
                    </button>
                    <button className="btn btn-large" type="button">
                        Large button
                    </button>
                </p>
                <p>
                    <button className="btn btn-primary" type="button">
                        Default button
                    </button>
                    <button className="btn" type="button">
                        Default button
                    </button>
                </p>
                <p>
                    <button className="btn btn-small btn-primary" type="button">
                        Small button
                    </button>
                    <button className="btn btn-small" type="button">
                        Small button
                    </button>
                </p>
                <p>
                    <button className="btn btn-mini btn-primary" type="button">
                        Mini button
                    </button>
                    <button className="btn btn-mini" type="button">
                        Mini button
                    </button>
                </p>
            </div>
        );
    }
}

export default App;

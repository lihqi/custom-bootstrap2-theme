import React, { Component } from "react";

import { handleDevThemeColor } from "./utils";
function titleCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
}
let createAsyncColorComponent = color => {
    if (process.env.NODE_ENV === "development") {
        console.log(`./themeColors/${color}/${titleCase(
            color
        )}.less`)
        return import(/* webpackChunkName: "theme-color" */ `./themeColors/${color}/${titleCase(
            color
        )}.less`).then(res => {
            handleDevThemeColor(color);
        });
    }
};

export default class AsyncColorComponent extends Component {
    render() {
        let { color } = this.props;
        createAsyncColorComponent(color);
        return null;
    }
}

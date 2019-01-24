let colorReg = /theme-color/;
let map = Object.create(null);
const getElementByAttr = (tag, attr, value) => {
    var aElements = document.getElementsByTagName(tag);
    var aEle = [];
    for (var i = 0; i < aElements.length; i++) {
        if (aElements[i].getAttribute(attr) == value) aEle.push(aElements[i]);
    }
    return aEle[0];
};
const addDomAttribute = (dom, color) => {
    dom.setAttribute("theme-color", color);
    dom.nextSibling.setAttribute("theme-color-style", color);
    // dom.nextSibling.nextSibling.setAttribute("theme-antd-color-style", color);
    map[color] = true;
};
const handleDevThemeColor = color => {
    try {
        let headDom = document.getElementsByTagName("head")[0];
        if (map[color]) {
            let scriptEle = getElementByAttr("script", "theme-color", color);
            let styleEle = getElementByAttr(
                "style",
                "theme-color-style",
                color
            );
            // let antdStyleEle = getElementByAttr(
            //     "style",
            //     "theme-antd-color-style",
            //     color
            // );
            // headDom.removeChild(scriptEle);
            // headDom.removeChild(styleEle);
            // headDom.removeChild(antdStyleEle);
            headDom.appendChild(scriptEle);
            headDom.appendChild(styleEle);
            // headDom.appendChild(antdStyleEle);
        } else {
            let scriptDoms = headDom.getElementsByTagName("script");
            let scriptDomsArr = Array.from(scriptDoms);
            let tmp = [];
            scriptDomsArr.forEach(item => {
                if (colorReg.test(item.src)) {
                    tmp.push(item);
                }
            });
            if (tmp.length) {
                addDomAttribute(tmp[tmp.length - 1], color);
            }
        }
    } catch (e) {
        console.log(e);
    }
};
export { handleDevThemeColor };

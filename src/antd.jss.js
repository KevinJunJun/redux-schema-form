"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FullWidthInputs = "& .field.group,& .field.array,& .field.full-width";
var widgetHeight = 85;
var mobileMedia = "@media(max-width:768px)";
var clearfix = {
    "&:after": {
        content: "\" \"",
        display: "table",
        clear: "both"
    },
};
exports.stylesheet = (_a = {
        form: tslib_1.__assign({ position: "relative" }, clearfix, (_b = { "& *": {
                    boxSizing: "border-box",
                }, "& .btn-group": {}, "& .array-field-container": {
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    "& .array-field-child": {
                        padding: '10px 0',
                        margin: '10px',
                        borderTop: "1px solid " + "#47a8f3",
                        width: "calc(50% - 20px)",
                        "& .field": {
                            width: "100%"
                        }
                    },
                    "& .add-button": {
                        textAlign: "center",
                        marginBottom: 10,
                        width: "100%"
                    },
                    "& .delete-button": {
                        float: "right"
                    }
                }, "&>div:after": {
                    display: "table",
                    content: "",
                    clear: "both"
                }, "& .field": {
                    float: "left",
                    paddingRight: "10%",
                    paddingLeft: "10%",
                    width: "50%",
                    height: widgetHeight,
                    "&.hidden": {
                        display: "none"
                    },
                } }, _b[FullWidthInputs] = {
            width: "100%",
            height: "auto",
            minHeight: widgetHeight
        }, _b["& .schema-node"] = clearfix, _b["& div.children, & div.button"] = {
            textAlign: "center",
            float: "left",
            paddingRight: "initial",
            paddingLeft: "initial",
            height: "auto",
            width: "100%",
            margin: "20px 0 0",
            minHeight: "initial"
        }, _b["& fieldset .field:nth-child(2n)"] = {
            padding: " 0 5% 0 calc(10% + 15px)",
        }, _b["& fieldset .field:nth-child(2n+1)"] = {
            padding: " 0 calc(10% + 15px) 0 5%",
        }, _b["&>form>.schema-node>.field>fieldset"] = (_c = {
                "&>legend": {
                    position: "relative",
                    top: "11px",
                    marginLeft: " 5%",
                    borderBottom: "none",
                    display: "inline-block",
                    width: "auto",
                    borderTop: "1px solid " + "#47a8f3",
                },
                margin: " 40px calc(5% - 7.5px)",
                padding: " 0 7.5px",
                background: "#f9f9fa",
                border: "none"
            },
            _c[FullWidthInputs] = {
                padding: " 0 5%",
            },
            _c), _b))
    },
    _a[mobileMedia] = {
        "form": {
            "& .field, & .array-field-container .array-field-child": {
                width: "100%"
            }
        }
    },
    _a);
var _a, _b, _c;
//# sourceMappingURL=antd.jss.js.map
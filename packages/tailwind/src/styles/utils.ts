/* eslint-disable */
/* prettier-ignore */

/**
 * THIS FILE IS GENERATED BY `scripts/build-jss.ts`.
 * DO NOT EDIT THIS FILE DIRECTLY.
 */
const styles: any = {
  ".absolute-center": {
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform": "translate3d(-50%, -50%, 0)"
  },
  ".flex-center": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".brutal-shadow,\n    .brutal-shadow-sm": {
    "--brutal-shadow-height": "1px",
    "--brutal-shadow-color": "#000",
    "--brutal-shadow": "var(--brutal-shadow-height) var(--brutal-shadow-height) 0",
    "boxShadow": "var(--brutal-shadow-color) var(--brutal-shadow)"
  },
  ":where(html.dark) .brutal-shadow, :where(html.dark) .brutal-shadow-sm": {
    "--brutal-shadow-color": "#27272a"
  },
  ".brutal-shadow-sm": {
    "--brutal-shadow-height": "2px"
  },
  ".brutal-shadow-sm-active:active,\n      .brutal-shadow-sm.activable:active": {
    "--brutal-shadow-height": "1px",
    "transform": "translate3d(1px, 1px, 0px)"
  },
  ".brutal-shadow": {
    "--brutal-shadow-height": "4px"
  },
  ".brutal-shadow-active:active,\n      .brutal-shadow.activable:active": {
    "--brutal-shadow-height": "1px",
    "transform": "translate3d(3px, 3px, 0px)"
  },
  ".no-drag": {
    "WebkitUserDrag": "none",
    "KhtmlUserDrag": "none",
    "MozUserDrag": "none",
    "OUserDrag": "none",
    "msUserDrag": "none",
    "userDrag": "none"
  },
  ".no-select": {
    "WebkitUserSelect": "none",
    "KhtmlUserSelect": "none",
    "MozUserSelect": "none",
    "OUserSelect": "none",
    "msUserSelect": "none",
    "userSelect": "none"
  }
};

export default styles;

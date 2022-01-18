webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/styled.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/styled.tsx ***!
  \******************************************/
/*! exports provided: Container, Links, Link, Anchor, Index, Button, ContainerMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerMobile", function() { return ContainerMobile; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "styled__Container",
  componentId: "ltj9sc-0"
})(["@media (min-width:701px){height:50px;width:100%;padding-right:50px;}@media (max-width:700px){display:none;}position:fixed;top:0;z-index:0;display:flex;gap:16px;justify-content:flex-end;align-items:center;background:rgba(160,160,160,0.1);backdrop-filter:blur(5px);z-index:5;"]);
var Links = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ol.withConfig({
  displayName: "styled__Links",
  componentId: "ltj9sc-1"
})(["display:flex;justify-content:space-between;align-items:center;padding:0;margin:0;list-style:none;gap:20px;*{box-sizing:inherit;}"]);
var Link = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "styled__Link",
  componentId: "ltj9sc-2"
})(["display:list-item;"]);
var Anchor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "styled__Anchor",
  componentId: "ltj9sc-3"
})(["height:auto;width:auto;padding:6px;display:flex;justify-content:center;align-items:center;user-select:none;cursor:pointer;position:relative;transition:all 0.25s ease-in-out;background:none;border:0;box-sizing:border-box;vertical-align:middle;text-decoration:none;&::before,&::after{box-sizing:inherit;content:'';position:absolute;width:0;height:0;top:0;left:0;border:2px solid transparent;}&:hover{color:", ";}&:hover::before,&:hover::after{width:100%;height:100%;}&:hover::before{border-top-color:", ";border-right-color:", ";transition:width 0.15s ease-out,height 0.15s ease-out 0.15s;}&:hover::after{border-left-color:", ";border-bottom-color:", ";transition:height 0.15s ease-out,width 0.15s ease-out 0.15s;}"], function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
var Index = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].text.withConfig({
  displayName: "styled__Index",
  componentId: "ltj9sc-4"
})(["color:", ";display:flex;justify-content:center;align-self:center;"], function (props) {
  return props.theme.colors.primary;
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "styled__Button",
  componentId: "ltj9sc-5"
})(["width:auto;height:auto;padding:6px 8px 6px 8px;display:flex;justify-content:center;align-items:center;border:1.4px solid ", ";border-radius:4px;text-decoration:none;transition:all 0.15s ease-in-out;&:hover{background-color:rgba(0,208,255,0.3);}"], function (props) {
  return props.theme.colors.primary;
});
var ContainerMobile = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ContainerMobile",
  componentId: "ltj9sc-6"
})(["@media (min-width:701px){display:none;}@media (max-width:700px){display:flex;flex-wrap:wrap;width:100%;height:auto;padding-left:8px;position:fixed;top:0;display:flex;gap:8px;justify-content:space-evenly;align-items:center;background:rgba(160,160,160,0.1);backdrop-filter:blur(5px);z-index:5;}"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlZC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwibmF2IiwiTGlua3MiLCJvbCIsIkxpbmsiLCJsaSIsIkFuY2hvciIsImEiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIkluZGV4IiwidGV4dCIsIkJ1dHRvbiIsIkNvbnRhaW5lck1vYmlsZSIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlSQUFmO0FBNEJBLElBQU1DLEtBQUssR0FBR0YseURBQU0sQ0FBQ0csRUFBVjtBQUFBO0FBQUE7QUFBQSx3SUFBWDtBQWFBLElBQU1DLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSwwQkFBVjtBQU9BLElBQU1DLE1BQU0sR0FBR04seURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSxpdEJBNkJSLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FBOUI7QUFBQSxDQTdCUSxFQXFDRyxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE9BQTlCO0FBQUEsQ0FyQ0gsRUFzQ0ssVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBdENMLEVBNENJLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FBOUI7QUFBQSxDQTVDSixFQTZDTSxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE9BQTlCO0FBQUEsQ0E3Q04sQ0FBWjtBQWtEQSxJQUFNQyxLQUFLLEdBQUdaLHlEQUFNLENBQUNhLElBQVY7QUFBQTtBQUFBO0FBQUEsMEVBQ1IsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBRFEsQ0FBWDtBQU9BLElBQU1HLE1BQU0sR0FBR2QseURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSw2UEFPSSxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE9BQTlCO0FBQUEsQ0FQSixDQUFaO0FBZ0JBLElBQU1JLGVBQWUsR0FBR2YseURBQU0sQ0FBQ2dCLEdBQVY7QUFBQTtBQUFBO0FBQUEsNFNBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMxOTFjMTJiMWJhNDc3YWNmNGQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkge1xuXHRcdGhlaWdodDogNTBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuXHR9XG5cdEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdHotaW5kZXg6IDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMTZweDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0LyogYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNHB4IDE0cHg7ICovXG5cdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcblx0XHQ5MGRlZyxcblx0XHRyZ2JhKDAsIDIwOCwgMjU1LCAxKSAwJSxcblx0XHRyZ2JhKDAsIDEyOCwgMTU3LCAxKSA0OCUsXG5cdFx0cmdiYSgzNiwgNzgsIDEyNiwgMSkgMTAwJVxuXHQpOyAqL1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMSk7XG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuXHR6LWluZGV4OiA1O1xuYDtcblxuZXhwb3J0IGNvbnN0IExpbmtzID0gc3R5bGVkLm9sYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0Z2FwOiAyMHB4O1xuXHQqIHtcblx0XHRib3gtc2l6aW5nOiBpbmhlcml0O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5saWBcblx0ZGlzcGxheTogbGlzdC1pdGVtO1xuYDtcblxuaW50ZXJmYWNlIFByb3BzQW5jaG9yIHtcblx0Y2xpY2tlZD86IEJvb2xlYW47XG59XG5leHBvcnQgY29uc3QgQW5jaG9yID0gc3R5bGVkLmE8UHJvcHNBbmNob3I+YFxuXHRoZWlnaHQ6IGF1dG87XG5cdHdpZHRoOiBhdXRvO1xuXHRwYWRkaW5nOiA2cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Ym9yZGVyOiAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cblx0Jjo6YmVmb3JlLFxuXHQmOjphZnRlciB7XG5cdFx0Ym94LXNpemluZzogaW5oZXJpdDtcblx0XHRjb250ZW50OiAnJztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0d2lkdGg6IDA7XG5cdFx0aGVpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHR9XG5cdCY6aG92ZXIge1xuXHRcdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuXHR9XG5cdCY6aG92ZXI6OmJlZm9yZSxcblx0Jjpob3Zlcjo6YWZ0ZXIge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxuXHQmOmhvdmVyOjpiZWZvcmUge1xuXHRcdGJvcmRlci10b3AtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuXHRcdHRyYW5zaXRpb246IHdpZHRoIDAuMTVzIGVhc2Utb3V0LFxuXHRcdFx0Ly8gV2lkdGggZXhwYW5kcyBmaXJzdFxuXHRcdFx0aGVpZ2h0IDAuMTVzIGVhc2Utb3V0IDAuMTVzOyAvLyBBbmQgdGhlbiBoZWlnaHRcblx0fVxuXHQmOmhvdmVyOjphZnRlciB7XG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblx0XHR0cmFuc2l0aW9uOiBoZWlnaHQgMC4xNXMgZWFzZS1vdXQsIHdpZHRoIDAuMTVzIGVhc2Utb3V0IDAuMTVzO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5kZXggPSBzdHlsZWQudGV4dGBcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmFgXG5cdHdpZHRoOiBhdXRvO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBhZGRpbmc6IDZweCA4cHggNnB4IDhweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlcjogMS40cHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMDgsIDI1NSwgMC4zKTtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lck1vYmlsZSA9IHN0eWxlZC5kaXZgXG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0QG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdHBhZGRpbmctbGVmdDogOHB4O1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR0b3A6IDA7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRnYXA6IDhweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4xKTtcblx0XHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcblx0XHR6LWluZGV4OiA1O1xuXHR9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/styled.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/styled.tsx ***!
  \******************************************/
/*! exports provided: Container, Links, Link, Anchor, Index, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "styled__Container",
  componentId: "ltj9sc-0"
})(["width:100%;@media (min-width:701px){height:50px;}@media (max-width:700px){height:auto;}position:fixed;top:0;z-index:0;display:flex;flex-wrap:wrap;gap:16px;justify-content:flex-end;align-items:center;padding-right:50px;background:rgba(160,160,160,0.1);backdrop-filter:blur(5px);z-index:5;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlZC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwibmF2IiwiTGlua3MiLCJvbCIsIkxpbmsiLCJsaSIsIkFuY2hvciIsImEiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIkluZGV4IiwidGV4dCIsIkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1U0FBZjtBQTZCQSxJQUFNQyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEVBQVY7QUFBQTtBQUFBO0FBQUEsd0lBQVg7QUFhQSxJQUFNQyxJQUFJLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsMEJBQVY7QUFPQSxJQUFNQyxNQUFNLEdBQUdOLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsaXRCQTZCUixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE9BQTlCO0FBQUEsQ0E3QlEsRUFxQ0csVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBckNILEVBc0NLLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FBOUI7QUFBQSxDQXRDTCxFQTRDSSxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE9BQTlCO0FBQUEsQ0E1Q0osRUE2Q00sVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBN0NOLENBQVo7QUFrREEsSUFBTUMsS0FBSyxHQUFHWix5REFBTSxDQUFDYSxJQUFWO0FBQUE7QUFBQTtBQUFBLDBFQUNSLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FBOUI7QUFBQSxDQURRLENBQVg7QUFPQSxJQUFNRyxNQUFNLEdBQUdkLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsNlBBT0ksVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBUEosQ0FBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYjUxOTJlN2QxMTE1YTg5OTcxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQubmF2YFxuXHR3aWR0aDogMTAwJTtcblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSB7XG5cdFx0aGVpZ2h0OiA1MHB4O1xuXHR9XG5cdEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0ei1pbmRleDogMDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDE2cHg7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cdC8qIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTRweCAxNHB4OyAqL1xuXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0OTBkZWcsXG5cdFx0cmdiYSgwLCAyMDgsIDI1NSwgMSkgMCUsXG5cdFx0cmdiYSgwLCAxMjgsIDE1NywgMSkgNDglLFxuXHRcdHJnYmEoMzYsIDc4LCAxMjYsIDEpIDEwMCVcblx0KTsgKi9cblx0YmFja2dyb3VuZDogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjEpO1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcblx0ei1pbmRleDogNTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rcyA9IHN0eWxlZC5vbGBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGdhcDogMjBweDtcblx0KiB7XG5cdFx0Ym94LXNpemluZzogaW5oZXJpdDtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IExpbmsgPSBzdHlsZWQubGlgXG5cdGRpc3BsYXk6IGxpc3QtaXRlbTtcbmA7XG5cbmludGVyZmFjZSBQcm9wc0FuY2hvciB7XG5cdGNsaWNrZWQ/OiBCb29sZWFuO1xufVxuZXhwb3J0IGNvbnN0IEFuY2hvciA9IHN0eWxlZC5hPFByb3BzQW5jaG9yPmBcblx0aGVpZ2h0OiBhdXRvO1xuXHR3aWR0aDogYXV0bztcblx0cGFkZGluZzogNnB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGJvcmRlcjogMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG5cdCY6OmJlZm9yZSxcblx0Jjo6YWZ0ZXIge1xuXHRcdGJveC1zaXppbmc6IGluaGVyaXQ7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHdpZHRoOiAwO1xuXHRcdGhlaWdodDogMDtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0fVxuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblx0fVxuXHQmOmhvdmVyOjpiZWZvcmUsXG5cdCY6aG92ZXI6OmFmdGVyIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdH1cblx0Jjpob3Zlcjo6YmVmb3JlIHtcblx0XHRib3JkZXItdG9wLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuXHRcdGJvcmRlci1yaWdodC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblx0XHR0cmFuc2l0aW9uOiB3aWR0aCAwLjE1cyBlYXNlLW91dCxcblx0XHRcdC8vIFdpZHRoIGV4cGFuZHMgZmlyc3Rcblx0XHRcdGhlaWdodCAwLjE1cyBlYXNlLW91dCAwLjE1czsgLy8gQW5kIHRoZW4gaGVpZ2h0XG5cdH1cblx0Jjpob3Zlcjo6YWZ0ZXIge1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5cdFx0dHJhbnNpdGlvbjogaGVpZ2h0IDAuMTVzIGVhc2Utb3V0LCB3aWR0aCAwLjE1cyBlYXNlLW91dCAwLjE1cztcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IEluZGV4ID0gc3R5bGVkLnRleHRgXG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5hYFxuXHR3aWR0aDogYXV0bztcblx0aGVpZ2h0OiBhdXRvO1xuXHRwYWRkaW5nOiA2cHggOHB4IDZweCA4cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXI6IDEuNHB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjA4LCAyNTUsIDAuMyk7XG5cdH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9
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
})(["height:auto;width:auto;padding:6px;display:flex;justify-content:center;align-items:center;user-select:none;cursor:pointer;position:relative;transition:all 0.25s ease-in-out;background:none;border:0;box-sizing:border-box;vertical-align:middle;text-decoration:none;@media (max-width:700px){font-size:", ";}&::before,&::after{box-sizing:inherit;content:'';position:absolute;width:0;height:0;top:0;left:0;border:2px solid transparent;}&:hover{color:", ";}&:hover::before,&:hover::after{width:100%;height:100%;}&:hover::before{border-top-color:", ";border-right-color:", ";transition:width 0.15s ease-out,height 0.15s ease-out 0.15s;}&:hover::after{border-left-color:", ";border-bottom-color:", ";transition:height 0.15s ease-out,width 0.15s ease-out 0.15s;}"], function (props) {
  return props.theme.fontSizes.low;
}, function (props) {
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
})(["width:auto;height:auto;@media (max-width:700px){font-size:", ";}padding:6px 8px 6px 8px;display:flex;justify-content:center;align-items:center;border:1.4px solid ", ";border-radius:4px;text-decoration:none;transition:all 0.15s ease-in-out;&:hover{background-color:rgba(0,208,255,0.3);}"], function (props) {
  return props.theme.fontSizes.low;
}, function (props) {
  return props.theme.colors.primary;
});
var ContainerMobile = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__ContainerMobile",
  componentId: "ltj9sc-6"
})(["@media (min-width:701px){display:none;}@media (max-width:700px){display:flex;flex-wrap:wrap;width:100%;height:auto;padding-top:8px;padding-bottom:8px;padding-left:16px;padding-right:16px;position:fixed;top:0;display:flex;gap:8px;justify-content:space-evenly;align-items:center;background:rgba(160,160,160,0.1);backdrop-filter:blur(5px);z-index:5;}"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlZC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwibmF2IiwiTGlua3MiLCJvbCIsIkxpbmsiLCJsaSIsIkFuY2hvciIsImEiLCJwcm9wcyIsInRoZW1lIiwiZm9udFNpemVzIiwibG93IiwiY29sb3JzIiwicHJpbWFyeSIsIkluZGV4IiwidGV4dCIsIkJ1dHRvbiIsIkNvbnRhaW5lck1vYmlsZSIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlSQUFmO0FBNEJBLElBQU1DLEtBQUssR0FBR0YseURBQU0sQ0FBQ0csRUFBVjtBQUFBO0FBQUE7QUFBQSx3SUFBWDtBQWFBLElBQU1DLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSwwQkFBVjtBQU9BLElBQU1DLE1BQU0sR0FBR04seURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSwwdkJBaUJKLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkMsR0FBakM7QUFBQSxDQWpCSSxFQWdDUixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLE9BQTlCO0FBQUEsQ0FoQ1EsRUF3Q0csVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBeENILEVBeUNLLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsT0FBOUI7QUFBQSxDQXpDTCxFQStDSSxVQUFDTCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLE9BQTlCO0FBQUEsQ0EvQ0osRUFnRE0sVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBaEROLENBQVo7QUFxREEsSUFBTUMsS0FBSyxHQUFHZCx5REFBTSxDQUFDZSxJQUFWO0FBQUE7QUFBQTtBQUFBLDBFQUNSLFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsT0FBOUI7QUFBQSxDQURRLENBQVg7QUFPQSxJQUFNRyxNQUFNLEdBQUdoQix5REFBTSxDQUFDTyxDQUFWO0FBQUE7QUFBQTtBQUFBLHNTQUlKLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBWixDQUFzQkMsR0FBakM7QUFBQSxDQUpJLEVBVUksVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBVkosQ0FBWjtBQW1CQSxJQUFNSSxlQUFlLEdBQUdqQix5REFBTSxDQUFDa0IsR0FBVjtBQUFBO0FBQUE7QUFBQSxtV0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzA5ZTNlNmI5ZWYyMDdhM2I1NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm5hdmBcblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSB7XG5cdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cdH1cblx0QG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0ei1pbmRleDogMDtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxNnB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQvKiBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE0cHggMTRweDsgKi9cblx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdDkwZGVnLFxuXHRcdHJnYmEoMCwgMjA4LCAyNTUsIDEpIDAlLFxuXHRcdHJnYmEoMCwgMTI4LCAxNTcsIDEpIDQ4JSxcblx0XHRyZ2JhKDM2LCA3OCwgMTI2LCAxKSAxMDAlXG5cdCk7ICovXG5cdGJhY2tncm91bmQ6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4xKTtcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG5cdHotaW5kZXg6IDU7XG5gO1xuXG5leHBvcnQgY29uc3QgTGlua3MgPSBzdHlsZWQub2xgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRnYXA6IDIwcHg7XG5cdCoge1xuXHRcdGJveC1zaXppbmc6IGluaGVyaXQ7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLmxpYFxuXHRkaXNwbGF5OiBsaXN0LWl0ZW07XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHNBbmNob3Ige1xuXHRjbGlja2VkPzogQm9vbGVhbjtcbn1cbmV4cG9ydCBjb25zdCBBbmNob3IgPSBzdHlsZWQuYTxQcm9wc0FuY2hvcj5gXG5cdGhlaWdodDogYXV0bztcblx0d2lkdGg6IGF1dG87XG5cdHBhZGRpbmc6IDZweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRib3JkZXI6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0QG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG5cdFx0Zm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLmxvd307XG5cdH1cblxuXHQmOjpiZWZvcmUsXG5cdCY6OmFmdGVyIHtcblx0XHRib3gtc2l6aW5nOiBpbmhlcml0O1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR3aWR0aDogMDtcblx0XHRoZWlnaHQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdH1cblx0Jjpob3ZlciB7XG5cdFx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5cdH1cblx0Jjpob3Zlcjo6YmVmb3JlLFxuXHQmOmhvdmVyOjphZnRlciB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG5cdCY6aG92ZXI6OmJlZm9yZSB7XG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblx0XHRib3JkZXItcmlnaHQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5cdFx0dHJhbnNpdGlvbjogd2lkdGggMC4xNXMgZWFzZS1vdXQsXG5cdFx0XHQvLyBXaWR0aCBleHBhbmRzIGZpcnN0XG5cdFx0XHRoZWlnaHQgMC4xNXMgZWFzZS1vdXQgMC4xNXM7IC8vIEFuZCB0aGVuIGhlaWdodFxuXHR9XG5cdCY6aG92ZXI6OmFmdGVyIHtcblx0XHRib3JkZXItbGVmdC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuXHRcdHRyYW5zaXRpb246IGhlaWdodCAwLjE1cyBlYXNlLW91dCwgd2lkdGggMC4xNXMgZWFzZS1vdXQgMC4xNXM7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbmRleCA9IHN0eWxlZC50ZXh0YFxuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYWBcblx0d2lkdGg6IGF1dG87XG5cdGhlaWdodDogYXV0bztcblx0QG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG5cdFx0Zm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLmxvd307XG5cdH1cblx0cGFkZGluZzogNnB4IDhweCA2cHggOHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyOiAxLjRweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwOCwgMjU1LCAwLjMpO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyTW9iaWxlID0gc3R5bGVkLmRpdmBcblx0QG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHRAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0cGFkZGluZy10b3A6IDhweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogOHB4O1xuXHRcdHBhZGRpbmctbGVmdDogMTZweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR0b3A6IDA7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRnYXA6IDhweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4xKTtcblx0XHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcblx0XHR6LWluZGV4OiA1O1xuXHR9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
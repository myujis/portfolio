webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/pages/sections/About/styled.tsx":
/*!****************************************************!*\
  !*** ./src/styles/pages/sections/About/styled.tsx ***!
  \****************************************************/
/*! exports provided: Container, Index, Title, Row, PictureContainer, ProfilePicture, Column, Headline1, Headline2, Headline3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureContainer", function() { return PictureContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicture", function() { return ProfilePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headline1", function() { return Headline1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headline2", function() { return Headline2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headline3", function() { return Headline3; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1izg2pj-0"
})(["min-width:350px;width:auto;max-width:60vw;height:auto;min-height:60vh;padding-left:30px;padding-right:30px;display:flex;flex-direction:column;gap:30px;@media (max-width:720px){text-align:center;}@media (min-width:721px){text-align:left;}"]);
var Index = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styled__Index",
  componentId: "sc-1izg2pj-1"
})(["color:", ";@media (max-width:720px){font-size:", ";}@media (min-width:721px){font-size:", ";}"], function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.fontSizes.high;
}, function (props) {
  return props.theme.fontSizes.higher;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__Title",
  componentId: "sc-1izg2pj-2"
})(["width:100%;padding-top:5px;padding-bottom:5px;font-weight:700;@media (max-width:720px){font-size:", ";}@media (min-width:721px){font-size:", ";}"], function (props) {
  return props.theme.fontSizes.higher;
}, function (props) {
  return props.theme.fontSizes.extraHigher;
});
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__Row",
  componentId: "sc-1izg2pj-3"
})(["display:flex;align-items:flex-start;justify-content:flex-start;width:100%;height:auto;gap:30px;@media (max-width:720px){flex-direction:column;align-items:center;}@media (min-width:721px){flex-direction:row;}"]);
var PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__PictureContainer",
  componentId: "sc-1izg2pj-4"
})(["height:auto;width:140px;position:relative;border-radius:4px;display:flex;justify-content:center;align-items:center;&::before{z-index:-1;content:'';position:absolute;top:8px;left:6px;width:100%;height:100%;border:1px solid ", ";border-radius:inherit;transition:all 0.2s ease-in-out;}&:hover::before{top:3px;left:3px;}"], function (props) {
  return props.theme.colors.primary;
});
var ProfilePicture = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "styled__ProfilePicture",
  componentId: "sc-1izg2pj-5"
})(["max-height:100%;max-width:100%;min-height:100%;min-width:100%;border-radius:inherit;user-select:none;"]);
var Column = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__Column",
  componentId: "sc-1izg2pj-6"
})(["display:flex;flex-direction:column;width:50%;height:auto;gap:10px;@media (max-width:720px){text-align:center;}@media (min-width:721px){text-align:left;}"]);
var Headline1 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styled__Headline1",
  componentId: "sc-1izg2pj-7"
})(["color:", ";@media (max-width:720px){font-size:", ";}@media (min-width:721px){font-size:", ";}font-weight:bold;"], function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.fontSizes.higher;
}, function (props) {
  return props.theme.fontSizes.extraHigher;
});
var Headline2 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styled__Headline2",
  componentId: "sc-1izg2pj-8"
})(["color:", ";font-size:", ";font-weight:bold;"], function (props) {
  return props.theme.colors.hoverText;
}, function (props) {
  return props.theme.fontSizes.high;
});
var Headline3 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styled__Headline3",
  componentId: "sc-1izg2pj-9"
})(["font-size:", ";font-weight:normal;"], function (props) {
  return props.theme.fontSizes.low;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9zZWN0aW9ucy9BYm91dC9zdHlsZWQudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkluZGV4Iiwic3BhbiIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiZm9udFNpemVzIiwiaGlnaCIsImhpZ2hlciIsIlRpdGxlIiwiZXh0cmFIaWdoZXIiLCJSb3ciLCJQaWN0dXJlQ29udGFpbmVyIiwiUHJvZmlsZVBpY3R1cmUiLCJpbWciLCJDb2x1bW4iLCJIZWFkbGluZTEiLCJIZWFkbGluZTIiLCJob3ZlclRleHQiLCJIZWFkbGluZTMiLCJsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxUEFBZjtBQW1CQSxJQUFNQyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsc0dBQ1IsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBRFEsRUFHSCxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFNBQVosQ0FBc0JDLElBQWpDO0FBQUEsQ0FIRyxFQU1ILFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsU0FBWixDQUFzQkUsTUFBakM7QUFBQSxDQU5HLENBQVg7QUFVQSxJQUFNQyxLQUFLLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUpBTUgsVUFBQ0csS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxTQUFaLENBQXNCRSxNQUFqQztBQUFBLENBTkcsRUFTSCxVQUFDTixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFNBQVosQ0FBc0JJLFdBQWpDO0FBQUEsQ0FURyxDQUFYO0FBYUEsSUFBTUMsR0FBRyxHQUFHYix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVOQUFUO0FBZ0JBLElBQU1hLGdCQUFnQixHQUFHZCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFVQWdCUCxVQUFDRyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE9BQTlCO0FBQUEsQ0FoQk8sQ0FBdEI7QUEwQkEsSUFBTVEsY0FBYyxHQUFHZix5REFBTSxDQUFDZ0IsR0FBVjtBQUFBO0FBQUE7QUFBQSw2R0FBcEI7QUFTQSxJQUFNQyxNQUFNLEdBQUdqQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdLQUFaO0FBY0EsSUFBTWlCLFNBQVMsR0FBR2xCLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsdUhBQ1osVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxPQUE5QjtBQUFBLENBRFksRUFHUCxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFNBQVosQ0FBc0JFLE1BQWpDO0FBQUEsQ0FITyxFQU1QLFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsU0FBWixDQUFzQkksV0FBakM7QUFBQSxDQU5PLENBQWY7QUFVQSxJQUFNTyxTQUFTLEdBQUduQix5REFBTSxDQUFDRyxJQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUNaLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQmMsU0FBOUI7QUFBQSxDQURZLEVBRVIsVUFBQ2hCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsU0FBWixDQUFzQkMsSUFBakM7QUFBQSxDQUZRLENBQWY7QUFLQSxJQUFNWSxTQUFTLEdBQUdyQix5REFBTSxDQUFDRyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUNSLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsU0FBWixDQUFzQmMsR0FBakM7QUFBQSxDQURRLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzIyYTM5YjBkYjljNWVlMDM1NDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0bWluLXdpZHRoOiAzNTBweDtcblx0d2lkdGg6IGF1dG87XG5cdG1heC13aWR0aDogNjB2dztcblx0aGVpZ2h0OiBhdXRvO1xuXHRtaW4taGVpZ2h0OiA2MHZoO1xuXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMzBweDtcblx0QG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MjFweCkge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbmRleCA9IHN0eWxlZC5zcGFuYFxuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcblx0QG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG5cdFx0Zm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLmhpZ2h9O1xuXHR9XG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MjFweCkge1xuXHRcdGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRTaXplcy5oaWdoZXJ9O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZy10b3A6IDVweDtcblx0cGFkZGluZy1ib3R0b206IDVweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0QG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG5cdFx0Zm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLmhpZ2hlcn07XG5cdH1cblx0QG1lZGlhIChtaW4td2lkdGg6IDcyMXB4KSB7XG5cdFx0Zm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLmV4dHJhSGlnaGVyfTtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGdhcDogMzBweDtcblx0QG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MjFweCkge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQaWN0dXJlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0aGVpZ2h0OiBhdXRvO1xuXHR3aWR0aDogMTQwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Jjo6YmVmb3JlIHtcblx0XHR6LWluZGV4OiAtMTtcblx0XHRjb250ZW50OiAnJztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA4cHg7XG5cdFx0bGVmdDogNnB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuXHRcdGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5cdH1cblx0Jjpob3Zlcjo6YmVmb3JlIHtcblx0XHR0b3A6IDNweDtcblx0XHRsZWZ0OiAzcHg7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlUGljdHVyZSA9IHN0eWxlZC5pbWdgXG5cdG1heC1oZWlnaHQ6IDEwMCU7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWluLWhlaWdodDogMTAwJTtcblx0bWluLXdpZHRoOiAxMDAlO1xuXHRib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR3aWR0aDogNTAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGdhcDogMTBweDtcblx0QG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MjFweCkge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkbGluZTEgPSBzdHlsZWQuc3BhbmBcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5cdEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuXHRcdGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRTaXplcy5oaWdoZXJ9O1xuXHR9XG5cdEBtZWRpYSAobWluLXdpZHRoOiA3MjFweCkge1xuXHRcdGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRTaXplcy5leHRyYUhpZ2hlcn07XG5cdH1cblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuZXhwb3J0IGNvbnN0IEhlYWRsaW5lMiA9IHN0eWxlZC5zcGFuYFxuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ob3ZlclRleHR9O1xuXHRmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMuaGlnaH07XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcbmV4cG9ydCBjb25zdCBIZWFkbGluZTMgPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLmxvd307XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
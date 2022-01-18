webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/components/Header/styled.tsx");
/* harmony import */ var _service_mockup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/mockup */ "./src/service/mockup.tsx");



var _jsxFileName = "/home/matheusyuji/projects/portfolio/src/components/Header/index.tsx",
    _this = undefined;




var Header = function Header() {
  var items = Object(_service_mockup__WEBPACK_IMPORTED_MODULE_3__["headerService"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Links"], {
        children: [items.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
              href: "#" + items[index].link,
              clicked: true,
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 9
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 8
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          href: "https://google.com",
          target: "_blank",
          children: "Resume"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};
_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJpdGVtcyIsImhlYWRlclNlcnZpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaW5rIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS08sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUMzQixNQUFNQyxLQUFLLEdBQUdDLHFFQUFhLEVBQTNCO0FBRUEsc0JBQ0M7QUFBQSwyQkFDQyxxRUFBQyxpREFBRDtBQUFBLDZCQUNDLHFFQUFDLDZDQUFEO0FBQUEsbUJBQ0VELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQiw4QkFDQyxxRUFBQyw0Q0FBRDtBQUFBLG1DQUNDLHFFQUFDLDhDQUFEO0FBQVEsa0JBQUksRUFBRSxNQUFNSixLQUFLLENBQUNJLEtBQUQsQ0FBTCxDQUFhQyxJQUFqQztBQUF1QyxxQkFBTyxFQUFFLElBQWhEO0FBQUEsd0JBQ0VGLElBQUksQ0FBQ0c7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsYUFBV0YsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBT0EsU0FSQSxDQURGLGVBVUMscUVBQUMsOENBQUQ7QUFBUSxjQUFJLEVBQUMsb0JBQWI7QUFBa0MsZ0JBQU0sRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFvQkEsQ0F2Qk07S0FBTUwsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYmVjYzYzMGRiMDdlOThmNjQyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgQW5jaG9yLCBMaW5rLCBMaW5rcywgSW5kZXgsIEJ1dHRvbiB9IGZyb20gJy4vc3R5bGVkJztcbmltcG9ydCB7IGhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL21vY2t1cCc7XG5pbXBvcnQgTWVudSBmcm9tICcuLi8uLi9pY29ucy9tZW51JztcbmltcG9ydCBBcnJvd1VwIGZyb20gJy4uLy4uL2ljb25zL2Fycm93VXAnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGl0ZW1zID0gaGVhZGVyU2VydmljZSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxMaW5rcz5cblx0XHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PExpbmsga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0PEFuY2hvciBocmVmPXtgI2AgKyBpdGVtc1tpbmRleF0ubGlua30gY2xpY2tlZD17dHJ1ZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdDwvQW5jaG9yPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDxCdXR0b24gaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0UmVzdW1lXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvTGlua3M+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQ8Lz5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
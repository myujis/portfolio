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
              lineNumber: 28,
              columnNumber: 9
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 8
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          href: "https://google.com",
          target: "_blank",
          children: "Resume"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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

/***/ }),

/***/ "./src/icons/arrowUp.tsx":
false,

/***/ "./src/icons/menu.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJpdGVtcyIsImhlYWRlclNlcnZpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaW5rIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBO0FBS08sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUMzQixNQUFNQyxLQUFLLEdBQUdDLHFFQUFhLEVBQTNCO0FBRUEsc0JBQ0M7QUFBQSwyQkFDQyxxRUFBQyxpREFBRDtBQUFBLDZCQUNDLHFFQUFDLDZDQUFEO0FBQUEsbUJBQ0VELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQiw4QkFDQyxxRUFBQyw0Q0FBRDtBQUFBLG1DQUNDLHFFQUFDLDhDQUFEO0FBQVEsa0JBQUksRUFBRSxNQUFNSixLQUFLLENBQUNJLEtBQUQsQ0FBTCxDQUFhQyxJQUFqQztBQUF1QyxxQkFBTyxFQUFFLElBQWhEO0FBQUEsd0JBQ0VGLElBQUksQ0FBQ0c7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsYUFBV0YsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBT0EsU0FSQSxDQURGLGVBVUMscUVBQUMsOENBQUQ7QUFBUSxjQUFJLEVBQUMsb0JBQWI7QUFBa0MsZ0JBQU0sRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFvQkEsQ0F2Qk07S0FBTUwsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NDQ1YWQwYjYzODE0MGEzMzY2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdENvbnRhaW5lcixcblx0QW5jaG9yLFxuXHRMaW5rLFxuXHRMaW5rcyxcblx0SW5kZXgsXG5cdEJ1dHRvbixcblx0Q29udGFpbmVyTW9iaWxlLFxuXHRNZW51TW9iaWxlLFxuXHRBcnJvd0NvbnRhaW5lclxufSBmcm9tICcuL3N0eWxlZCc7XG5pbXBvcnQgeyBoZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9tb2NrdXAnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vaWNvbnMvbWVudSc7XG5pbXBvcnQgQXJyb3dVcCBmcm9tICcuLi8uLi9pY29ucy9hcnJvd1VwJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXHRjb25zdCBpdGVtcyA9IGhlYWRlclNlcnZpY2UoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8TGlua3M+XG5cdFx0XHRcdFx0e2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdDxBbmNob3IgaHJlZj17YCNgICsgaXRlbXNbaW5kZXhdLmxpbmt9IGNsaWNrZWQ9e3RydWV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ubmFtZX1cblx0XHRcdFx0XHRcdFx0XHQ8L0FuY2hvcj5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8QnV0dG9uIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFJlc3VtZVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0xpbmtzPlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0PC8+XG5cdCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
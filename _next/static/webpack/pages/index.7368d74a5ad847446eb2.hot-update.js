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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Links"], {
        children: [items.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
              href: "#" + items[index].link,
              clicked: true,
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 9
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 8
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          href: "https://google.com",
          target: "_blank",
          children: "Resume"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["ContainerMobile"], {
      children: [items.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
          href: "#" + items[index].link,
          clicked: true,
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        href: "https://google.com",
        target: "_blank",
        children: "Resume"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJpdGVtcyIsImhlYWRlclNlcnZpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaW5rIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUMzQixNQUFNQyxLQUFLLEdBQUdDLHFFQUFhLEVBQTNCO0FBRUEsc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxpREFBRDtBQUFBLDZCQUNDLHFFQUFDLDZDQUFEO0FBQUEsbUJBQ0VELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQiw4QkFDQyxxRUFBQyw0Q0FBRDtBQUFBLG1DQUNDLHFFQUFDLDhDQUFEO0FBQVEsa0JBQUksRUFBRSxNQUFNSixLQUFLLENBQUNJLEtBQUQsQ0FBTCxDQUFhQyxJQUFqQztBQUF1QyxxQkFBTyxFQUFFLElBQWhEO0FBQUEsd0JBQ0VGLElBQUksQ0FBQ0c7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsYUFBV0YsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBT0EsU0FSQSxDQURGLGVBVUMscUVBQUMsOENBQUQ7QUFBUSxjQUFJLEVBQUMsb0JBQWI7QUFBa0MsZ0JBQU0sRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFpQkMscUVBQUMsdURBQUQ7QUFBQSxpQkFDRUosS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNCLDRCQUNDLHFFQUFDLDhDQUFEO0FBQVEsY0FBSSxFQUFFLE1BQU1KLEtBQUssQ0FBQ0ksS0FBRCxDQUFMLENBQWFDLElBQWpDO0FBQXVDLGlCQUFPLEVBQUUsSUFBaEQ7QUFBQSxvQkFDRUYsSUFBSSxDQUFDRztBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFLQSxPQU5BLENBREYsZUFRQyxxRUFBQyw4Q0FBRDtBQUFRLFlBQUksRUFBQyxvQkFBYjtBQUFrQyxjQUFNLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkQ7QUFBQSxrQkFERDtBQWdDQSxDQW5DTTtLQUFNUCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjczNjhkNzRhNWFkODQ3NDQ2ZWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0Q29udGFpbmVyLFxuXHRBbmNob3IsXG5cdExpbmssXG5cdExpbmtzLFxuXHRJbmRleCxcblx0QnV0dG9uLFxuXHRDb250YWluZXJNb2JpbGVcbn0gZnJvbSAnLi9zdHlsZWQnO1xuaW1wb3J0IHsgaGVhZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvbW9ja3VwJztcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcblx0Y29uc3QgaXRlbXMgPSBoZWFkZXJTZXJ2aWNlKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PExpbmtzPlxuXHRcdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8TGluayBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdFx0XHQ8QW5jaG9yIGhyZWY9e2AjYCArIGl0ZW1zW2luZGV4XS5saW5rfSBjbGlja2VkPXt0cnVlfT5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0PC9BbmNob3I+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PEJ1dHRvbiBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHRSZXN1bWVcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rcz5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdFx0PENvbnRhaW5lck1vYmlsZT5cblx0XHRcdFx0e2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PEFuY2hvciBocmVmPXtgI2AgKyBpdGVtc1tpbmRleF0ubGlua30gY2xpY2tlZD17dHJ1ZX0+XG5cdFx0XHRcdFx0XHRcdHtpdGVtLm5hbWV9XG5cdFx0XHRcdFx0XHQ8L0FuY2hvcj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdFx0PEJ1dHRvbiBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0UmVzdW1lXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9Db250YWluZXJNb2JpbGU+XG5cdFx0PC8+XG5cdCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
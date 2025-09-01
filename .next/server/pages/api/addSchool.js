"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addSchool";
exports.ids = ["pages/api/addSchool"];
exports.modules = {

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FaddSchool&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CaddSchool.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FaddSchool&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CaddSchool.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_addSchool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\addSchool.js */ \"(api)/./pages/api/addSchool.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_addSchool_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_addSchool_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_addSchool_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_addSchool_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/addSchool\",\n        pathname: \"/api/addSchool\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_addSchool_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmFkZFNjaG9vbCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYWRkU2Nob29sLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3VEO0FBQ3ZEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxvREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsb0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Nob29sLWFwcC8/MTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGFkZFNjaG9vbC5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkZFNjaG9vbFwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkZFNjaG9vbFwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FaddSchool&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CaddSchool.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLE9BQU9ELGdFQUFnQixDQUFDO0lBQzVCRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87SUFDekJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTztJQUN6QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxXQUFXO0lBQ2pDQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLE9BQU87SUFDN0JDLG9CQUFvQjtJQUNwQkMsaUJBQWlCO0lBQ2pCQyxZQUFZO0FBQ2Q7QUFFQSxpRUFBZWQsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaG9vbC1hcHAvLi9saWIvZGIuanM/M2RjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG5jb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcbiAgY29ubmVjdGlvbkxpbWl0OiAxMCxcbiAgcXVldWVMaW1pdDogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvb2w7Il0sIm5hbWVzIjpbIm15c3FsIiwicG9vbCIsImNyZWF0ZVBvb2wiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJ3YWl0Rm9yQ29ubmVjdGlvbnMiLCJjb25uZWN0aW9uTGltaXQiLCJxdWV1ZUxpbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/addSchool.js":
/*!********************************!*\
  !*** ./pages/api/addSchool.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n// Ensure folder exists\nconst publicDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", \"schoolImages\");\nif (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(publicDir)) {\n    fs__WEBPACK_IMPORTED_MODULE_2___default().mkdirSync(publicDir, {\n        recursive: true\n    });\n}\nconst storage = multer__WEBPACK_IMPORTED_MODULE_1___default().diskStorage({\n    destination: function(req, file, cb) {\n        cb(null, publicDir);\n    },\n    filename: function(req, file, cb) {\n        const unique = Date.now() + \"-\" + Math.round(Math.random() * 1e9);\n        const ext = path__WEBPACK_IMPORTED_MODULE_3___default().extname(file.originalname || \".jpg\");\n        cb(null, unique + ext);\n    }\n});\nconst upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({\n    storage\n});\nconst apiRoute = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    onError (error, req, res) {\n        console.error(\"Upload error\", error);\n        res.status(500).json({\n            message: error.message || \"Unexpected error\"\n        });\n    },\n    onNoMatch (req, res) {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n});\napiRoute.use(upload.single(\"image\"));\napiRoute.post(async (req, res)=>{\n    try {\n        const { name, address, city, state, contact, email_id } = req.body || {};\n        if (!name || !address || !city || !state || !contact || !email_id || !req.file) {\n            return res.status(400).json({\n                message: \"All fields including image are required\"\n            });\n        }\n        // Basic server-side validation\n        const emailOk = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email_id);\n        const contactOk = /^[0-9]{10,15}$/.test(contact);\n        if (!emailOk) return res.status(400).json({\n            message: \"Invalid email\"\n        });\n        if (!contactOk) return res.status(400).json({\n            message: \"Invalid contact number\"\n        });\n        const imagePath = \"/schoolImages/\" + req.file.filename; // public path\n        const [result] = await _lib_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"].execute(`INSERT INTO schools (name, address, city, state, contact, image, email_id)\n       VALUES (?, ?, ?, ?, ?, ?, ?)`, [\n            name,\n            address,\n            city,\n            state,\n            contact,\n            imagePath,\n            email_id\n        ]);\n        return res.status(200).json({\n            id: result.insertId,\n            image: imagePath\n        });\n    } catch (e) {\n        console.error(e);\n        return res.status(500).json({\n            message: \"Server error\"\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiRoute);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkU2Nob29sLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDWDtBQUNSO0FBQ0k7QUFDTTtBQUV2QixNQUFNSyxTQUFTO0lBQ3BCQyxLQUFLO1FBQUVDLFlBQVk7SUFBTTtBQUMzQixFQUFFO0FBRUYsdUJBQXVCO0FBQ3ZCLE1BQU1DLFlBQVlMLGdEQUFTLENBQUNPLFFBQVFDLEdBQUcsSUFBSSxVQUFVO0FBQ3JELElBQUksQ0FBQ1Qsb0RBQWEsQ0FBQ00sWUFBWTtJQUM3Qk4sbURBQVksQ0FBQ00sV0FBVztRQUFFTSxXQUFXO0lBQUs7QUFDNUM7QUFFQSxNQUFNQyxVQUFVZCx5REFBa0IsQ0FBQztJQUNqQ2dCLGFBQWEsU0FBVUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEVBQUU7UUFDbENBLEdBQUcsTUFBTVo7SUFDWDtJQUNBYSxVQUFVLFNBQVVILEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxFQUFFO1FBQy9CLE1BQU1FLFNBQVNDLEtBQUtDLEdBQUcsS0FBSyxNQUFNQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztRQUM3RCxNQUFNQyxNQUFNekIsbURBQVksQ0FBQ2dCLEtBQUtXLFlBQVksSUFBSTtRQUM5Q1YsR0FBRyxNQUFNRSxTQUFTTTtJQUNwQjtBQUNGO0FBRUEsTUFBTUcsU0FBUzlCLDZDQUFNQSxDQUFDO0lBQUVjO0FBQVE7QUFFaEMsTUFBTWlCLFdBQVdoQyx3REFBV0EsQ0FBQztJQUMzQmlDLFNBQVFDLEtBQUssRUFBRWhCLEdBQUcsRUFBRWlCLEdBQUc7UUFDckJDLFFBQVFGLEtBQUssQ0FBQyxnQkFBZ0JBO1FBQzlCQyxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVNMLE1BQU1LLE9BQU8sSUFBSTtRQUFtQjtJQUN0RTtJQUNBQyxXQUFVdEIsR0FBRyxFQUFFaUIsR0FBRztRQUNoQkEsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQ3ZEO0FBQ0Y7QUFFQVAsU0FBU1MsR0FBRyxDQUFDVixPQUFPVyxNQUFNLENBQUM7QUFFM0JWLFNBQVNXLElBQUksQ0FBQyxPQUFPekIsS0FBS2lCO0lBQ3hCLElBQUk7UUFDRixNQUFNLEVBQUVTLElBQUksRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUUsR0FBRy9CLElBQUlnQyxJQUFJLElBQUksQ0FBQztRQUN2RSxJQUFJLENBQUNOLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDQyxRQUFRLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDQyxZQUFZLENBQUMvQixJQUFJQyxJQUFJLEVBQUU7WUFDOUUsT0FBT2dCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBMEM7UUFDbkY7UUFFQSwrQkFBK0I7UUFDL0IsTUFBTVksVUFBVSw2QkFBNkJDLElBQUksQ0FBQ0g7UUFDbEQsTUFBTUksWUFBWSxpQkFBaUJELElBQUksQ0FBQ0o7UUFDeEMsSUFBSSxDQUFDRyxTQUFTLE9BQU9oQixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBZ0I7UUFDckUsSUFBSSxDQUFDYyxXQUFXLE9BQU9sQixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBeUI7UUFFaEYsTUFBTWUsWUFBWSxtQkFBbUJwQyxJQUFJQyxJQUFJLENBQUNFLFFBQVEsRUFBRSxjQUFjO1FBRXRFLE1BQU0sQ0FBQ2tDLE9BQU8sR0FBRyxNQUFNbkQsdURBQVUsQ0FDL0IsQ0FBQzttQ0FDNEIsQ0FBQyxFQUM5QjtZQUFDd0M7WUFBTUM7WUFBU0M7WUFBTUM7WUFBT0M7WUFBU007WUFBV0w7U0FBUztRQUc1RCxPQUFPZCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVtQixJQUFJRixPQUFPRyxRQUFRO1lBQUVDLE9BQU9MO1FBQVU7SUFDdEUsRUFBRSxPQUFPTSxHQUFHO1FBQ1Z4QixRQUFRRixLQUFLLENBQUMwQjtRQUNkLE9BQU96QixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBZTtJQUN4RDtBQUNGO0FBRUEsaUVBQWVQLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtYXBwLy4vcGFnZXMvYXBpL2FkZFNjaG9vbC5qcz84MTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xuaW1wb3J0IG11bHRlciBmcm9tICdtdWx0ZXInO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGRiIGZyb20gJy4uLy4uL2xpYi9kYic7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaTogeyBib2R5UGFyc2VyOiBmYWxzZSB9XG59O1xuXG4vLyBFbnN1cmUgZm9sZGVyIGV4aXN0c1xuY29uc3QgcHVibGljRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCAnc2Nob29sSW1hZ2VzJyk7XG5pZiAoIWZzLmV4aXN0c1N5bmMocHVibGljRGlyKSkge1xuICBmcy5ta2RpclN5bmMocHVibGljRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbn1cblxuY29uc3Qgc3RvcmFnZSA9IG11bHRlci5kaXNrU3RvcmFnZSh7XG4gIGRlc3RpbmF0aW9uOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYikge1xuICAgIGNiKG51bGwsIHB1YmxpY0Rpcik7XG4gIH0sXG4gIGZpbGVuYW1lOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYikge1xuICAgIGNvbnN0IHVuaXF1ZSA9IERhdGUubm93KCkgKyAnLScgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTkpO1xuICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShmaWxlLm9yaWdpbmFsbmFtZSB8fCAnLmpwZycpO1xuICAgIGNiKG51bGwsIHVuaXF1ZSArIGV4dCk7XG4gIH1cbn0pO1xuXG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBzdG9yYWdlIH0pO1xuXG5jb25zdCBhcGlSb3V0ZSA9IG5leHRDb25uZWN0KHtcbiAgb25FcnJvcihlcnJvciwgcmVxLCByZXMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZXJyb3InLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8ICdVbmV4cGVjdGVkIGVycm9yJyB9KTtcbiAgfSxcbiAgb25Ob01hdGNoKHJlcSwgcmVzKSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcbiAgfSxcbn0pO1xuXG5hcGlSb3V0ZS51c2UodXBsb2FkLnNpbmdsZSgnaW1hZ2UnKSk7XG5cbmFwaVJvdXRlLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBuYW1lLCBhZGRyZXNzLCBjaXR5LCBzdGF0ZSwgY29udGFjdCwgZW1haWxfaWQgfSA9IHJlcS5ib2R5IHx8IHt9O1xuICAgIGlmICghbmFtZSB8fCAhYWRkcmVzcyB8fCAhY2l0eSB8fCAhc3RhdGUgfHwgIWNvbnRhY3QgfHwgIWVtYWlsX2lkIHx8ICFyZXEuZmlsZSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0FsbCBmaWVsZHMgaW5jbHVkaW5nIGltYWdlIGFyZSByZXF1aXJlZCcgfSk7XG4gICAgfVxuXG4gICAgLy8gQmFzaWMgc2VydmVyLXNpZGUgdmFsaWRhdGlvblxuICAgIGNvbnN0IGVtYWlsT2sgPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGVtYWlsX2lkKTtcbiAgICBjb25zdCBjb250YWN0T2sgPSAvXlswLTldezEwLDE1fSQvLnRlc3QoY29udGFjdCk7XG4gICAgaWYgKCFlbWFpbE9rKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCcgfSk7XG4gICAgaWYgKCFjb250YWN0T2spIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGNvbnRhY3QgbnVtYmVyJyB9KTtcblxuICAgIGNvbnN0IGltYWdlUGF0aCA9ICcvc2Nob29sSW1hZ2VzLycgKyByZXEuZmlsZS5maWxlbmFtZTsgLy8gcHVibGljIHBhdGhcblxuICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgZGIuZXhlY3V0ZShcbiAgICAgIGBJTlNFUlQgSU5UTyBzY2hvb2xzIChuYW1lLCBhZGRyZXNzLCBjaXR5LCBzdGF0ZSwgY29udGFjdCwgaW1hZ2UsIGVtYWlsX2lkKVxuICAgICAgIFZBTFVFUyAoPywgPywgPywgPywgPywgPywgPylgLFxuICAgICAgW25hbWUsIGFkZHJlc3MsIGNpdHksIHN0YXRlLCBjb250YWN0LCBpbWFnZVBhdGgsIGVtYWlsX2lkXVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBpZDogcmVzdWx0Lmluc2VydElkLCBpbWFnZTogaW1hZ2VQYXRoIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaVJvdXRlOyJdLCJuYW1lcyI6WyJuZXh0Q29ubmVjdCIsIm11bHRlciIsImZzIiwicGF0aCIsImRiIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInB1YmxpY0RpciIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsInN0b3JhZ2UiLCJkaXNrU3RvcmFnZSIsImRlc3RpbmF0aW9uIiwicmVxIiwiZmlsZSIsImNiIiwiZmlsZW5hbWUiLCJ1bmlxdWUiLCJEYXRlIiwibm93IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZXh0IiwiZXh0bmFtZSIsIm9yaWdpbmFsbmFtZSIsInVwbG9hZCIsImFwaVJvdXRlIiwib25FcnJvciIsImVycm9yIiwicmVzIiwiY29uc29sZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwib25Ob01hdGNoIiwidXNlIiwic2luZ2xlIiwicG9zdCIsIm5hbWUiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwiY29udGFjdCIsImVtYWlsX2lkIiwiYm9keSIsImVtYWlsT2siLCJ0ZXN0IiwiY29udGFjdE9rIiwiaW1hZ2VQYXRoIiwicmVzdWx0IiwiZXhlY3V0ZSIsImlkIiwiaW5zZXJ0SWQiLCJpbWFnZSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addSchool.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FaddSchool&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CaddSchool.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();
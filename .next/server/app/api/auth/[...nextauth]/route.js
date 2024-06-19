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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbikra%5CDownloads%5Canonymous-review-app-main%5Canonymous-review-app%5Canonymous-review-app-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbikra%5CDownloads%5Canonymous-review-app-main%5Canonymous-review-app%5Canonymous-review-app-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbikra%5CDownloads%5Canonymous-review-app-main%5Canonymous-review-app%5Canonymous-review-app-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbikra%5CDownloads%5Canonymous-review-app-main%5Canonymous-review-app%5Canonymous-review-app-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_bikra_Downloads_anonymous_review_app_main_anonymous_review_app_anonymous_review_app_main_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\bikra\\\\Downloads\\\\anonymous-review-app-main\\\\anonymous-review-app\\\\anonymous-review-app-main\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_bikra_Downloads_anonymous_review_app_main_anonymous_review_app_anonymous_review_app_main_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNiaWtyYSU1Q0Rvd25sb2FkcyU1Q2Fub255bW91cy1yZXZpZXctYXBwLW1haW4lNUNhbm9ueW1vdXMtcmV2aWV3LWFwcCU1Q2Fub255bW91cy1yZXZpZXctYXBwLW1haW4lNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2Jpa3JhJTVDRG93bmxvYWRzJTVDYW5vbnltb3VzLXJldmlldy1hcHAtbWFpbiU1Q2Fub255bW91cy1yZXZpZXctYXBwJTVDYW5vbnltb3VzLXJldmlldy1hcHAtbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxRztBQUNsTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub255bW91cy1yZXZpZXcvPzJmMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcYmlrcmFcXFxcRG93bmxvYWRzXFxcXGFub255bW91cy1yZXZpZXctYXBwLW1haW5cXFxcYW5vbnltb3VzLXJldmlldy1hcHBcXFxcYW5vbnltb3VzLXJldmlldy1hcHAtbWFpblxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcYmlrcmFcXFxcRG93bmxvYWRzXFxcXGFub255bW91cy1yZXZpZXctYXBwLW1haW5cXFxcYW5vbnltb3VzLXJldmlldy1hcHBcXFxcYW5vbnltb3VzLXJldmlldy1hcHAtbWFpblxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbikra%5CDownloads%5Canonymous-review-app-main%5Canonymous-review-app%5Canonymous-review-app-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbikra%5CDownloads%5Canonymous-review-app-main%5Canonymous-review-app%5Canonymous-review-app-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/options.ts":
/*!***************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/options.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOption: () => (/* binding */ authOption)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n\n\n\n\nconst authOption = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__.dbConnect)();\n                try {\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        $or: [\n                            {\n                                email: credentials.identifier\n                            },\n                            {\n                                username: credentials.identifier\n                            }\n                        ]\n                    });\n                    if (!user) {\n                        throw new Error(\"No User found with this email\");\n                    }\n                    // if (!user.isVerified) {\n                    //     throw new Error(\"Please verify your email first to login with this email\")\n                    // }\n                    const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                    if (isPasswordCorrect) {\n                        return user;\n                    } else {\n                        throw new Error(\"Incorrect password, please provide valid password\");\n                    }\n                } catch (error) {\n                    throw new Error(error);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token._id = user._id?.toString();\n                token.isVerified = user.isVerified;\n                token.isAcceptingMessages = user.isAcceptingMessages;\n                token.username = user.username;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user._id = token._id?.toString();\n                session.user.isVerified = token.isVerified;\n                session.user.isAcceptingMessages = token.isAcceptingMessages;\n                session.user.username = token.username;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/sign-in\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDdUU7QUFDdEM7QUFDZTtBQUNOO0FBRS9CLE1BQU1JLGFBQTZCO0lBQ3RDQyxXQUFVO1FBQ05MLDJFQUFtQkEsQ0FBQztZQUNoQk0sSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1RDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU07Z0JBQ3JDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBZTtnQkFDN0IsTUFBTU4seURBQVNBO2dCQUNmLElBQUk7b0JBQ0EsTUFBTVksT0FBTyxNQUFNWCxvREFBU0EsQ0FBQ1ksT0FBTyxDQUFDO3dCQUNqQ0MsS0FBSTs0QkFDQTtnQ0FBQ1AsT0FBT0QsWUFBWVMsVUFBVTs0QkFBQTs0QkFDOUI7Z0NBQUNDLFVBQVVWLFlBQVlTLFVBQVU7NEJBQUE7eUJBQ3BDO29CQUNMO29CQUVBLElBQUksQ0FBQ0gsTUFBTTt3QkFDUCxNQUFNLElBQUlLLE1BQU07b0JBQ3BCO29CQUNBLDBCQUEwQjtvQkFDMUIsaUZBQWlGO29CQUNqRixJQUFJO29CQUVKLE1BQU1DLG9CQUFvQixNQUFNbkIsdURBQWMsQ0FBQ08sWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO29CQUVsRixJQUFJUSxtQkFBbUI7d0JBQ25CLE9BQU9OO29CQUNYLE9BQU87d0JBQ0gsTUFBTSxJQUFJSyxNQUFNO29CQUNwQjtnQkFFSixFQUFFLE9BQU9HLE9BQVc7b0JBQ2hCLE1BQU0sSUFBSUgsTUFBTUc7Z0JBQ3BCO1lBQ0Y7UUFDTjtLQUNIO0lBRURDLFdBQVU7UUFDTixNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVgsSUFBSSxFQUFHO1lBRXRCLElBQUlBLE1BQU07Z0JBQ05XLE1BQU1DLEdBQUcsR0FBRVosS0FBS1ksR0FBRyxFQUFFQztnQkFDckJGLE1BQU1HLFVBQVUsR0FBR2QsS0FBS2MsVUFBVTtnQkFDbENILE1BQU1JLG1CQUFtQixHQUFHZixLQUFLZSxtQkFBbUI7Z0JBQ3BESixNQUFNUCxRQUFRLEdBQUVKLEtBQUtJLFFBQVE7WUFDakM7WUFFRixPQUFPTztRQUNUO1FBQ0EsTUFBTUssU0FBUSxFQUFFQSxPQUFPLEVBQUVMLEtBQUssRUFBRTtZQUU1QixJQUFJQSxPQUFPO2dCQUNQSyxRQUFRaEIsSUFBSSxDQUFDWSxHQUFHLEdBQUVELE1BQU1DLEdBQUcsRUFBRUM7Z0JBQzdCRyxRQUFRaEIsSUFBSSxDQUFDYyxVQUFVLEdBQUdILE1BQU1HLFVBQVU7Z0JBQzFDRSxRQUFRaEIsSUFBSSxDQUFDZSxtQkFBbUIsR0FBR0osTUFBTUksbUJBQW1CO2dCQUM1REMsUUFBUWhCLElBQUksQ0FBQ0ksUUFBUSxHQUFFTyxNQUFNUCxRQUFRO1lBQ3pDO1lBRUEsT0FBT1k7UUFDVDtJQUNOO0lBRUFDLE9BQU07UUFDRkMsUUFBTztJQUNYO0lBRUFGLFNBQVE7UUFDSkcsVUFBVTtJQUNkO0lBRUFDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUN2QyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vbnltb3VzLXJldmlldy8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9vcHRpb25zLnRzP2EyYzYiXSwic291cmNlc0NvbnRlbnQiOlsiICAgIGltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbiAgICBpbXBvcnQgIENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbiAgICBpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiXG4gICAgaW1wb3J0IHsgZGJDb25uZWN0IH0gZnJvbSBcIkAvbGliL2RiQ29ubmVjdFwiO1xuICAgIGltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjtcblxuICAgIGV4cG9ydCBjb25zdCBhdXRoT3B0aW9uOiBOZXh0QXV0aE9wdGlvbnM9IHtcbiAgICAgICAgcHJvdmlkZXJzOltcbiAgICAgICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgICAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcImVtYWlsXCIsIHR5cGU6IFwidGV4dFwifSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHM6YW55ICkgOiBQcm9taXNlPGFueT57XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcjpbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbWFpbDogY3JlZGVudGlhbHMuaWRlbnRpZmllcn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VybmFtZTogY3JlZGVudGlhbHMuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBVc2VyIGZvdW5kIHdpdGggdGhpcyBlbWFpbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCF1c2VyLmlzVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdmVyaWZ5IHlvdXIgZW1haWwgZmlyc3QgdG8gbG9naW4gd2l0aCB0aGlzIGVtYWlsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmRDb3JyZWN0ID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1Bhc3N3b3JkQ29ycmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBwYXNzd29yZCwgcGxlYXNlIHByb3ZpZGUgdmFsaWQgcGFzc3dvcmRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgXSxcblxuICAgICAgICBjYWxsYmFja3M6e1xuICAgICAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIH0pIHtcblxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuLl9pZCA9dXNlci5faWQ/LnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4uaXNWZXJpZmllZCA9IHVzZXIuaXNWZXJpZmllZDtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4uaXNBY2NlcHRpbmdNZXNzYWdlcyA9IHVzZXIuaXNBY2NlcHRpbmdNZXNzYWdlc1xuICAgICAgICAgICAgICAgICAgICB0b2tlbi51c2VybmFtZSA9dXNlci51c2VybmFtZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gdG9rZW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5faWQgPXRva2VuLl9pZD8udG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuaXNWZXJpZmllZCA9IHRva2VuLmlzVmVyaWZpZWQ7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5pc0FjY2VwdGluZ01lc3NhZ2VzID0gdG9rZW4uaXNBY2NlcHRpbmdNZXNzYWdlc1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPXRva2VuLnVzZXJuYW1lXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgfSxcblxuICAgICAgICBwYWdlczp7XG4gICAgICAgICAgICBzaWduSW46XCIvc2lnbi1pblwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2Vzc2lvbjp7XG4gICAgICAgICAgICBzdHJhdGVneTogXCJqd3RcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICAgIH0iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImRiQ29ubmVjdCIsIlVzZXJNb2RlbCIsImF1dGhPcHRpb24iLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZE9uZSIsIiRvciIsImlkZW50aWZpZXIiLCJ1c2VybmFtZSIsIkVycm9yIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsIl9pZCIsInRvU3RyaW5nIiwiaXNWZXJpZmllZCIsImlzQWNjZXB0aW5nTWVzc2FnZXMiLCJzZXNzaW9uIiwicGFnZXMiLCJzaWduSW4iLCJzdHJhdGVneSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/options.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"(rsc)/./src/app/api/auth/[...nextauth]/options.ts\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_options__WEBPACK_IMPORTED_MODULE_1__.authOption);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUNDO0FBRXZDLE1BQU1FLFVBQVVGLDBEQUFRQSxDQUFDQyxnREFBVUE7QUFFSyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub255bW91cy1yZXZpZXcvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuIFxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb24pXG5cbmV4cG9ydCB7aGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVH0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9uIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./src/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dbConnect: () => (/* binding */ dbConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        console.log(\"Database already connected\");\n        return;\n    }\n    try {\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI || \"\", {});\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"Databse connected successfully\");\n        console.log(\"database\", db);\n        console.log(\"database connection\", db.connection);\n    } catch (error) {\n        console.log(\"Falied to connect database\", error);\n        process.exit(1);\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFNaEMsTUFBTUMsYUFBK0IsQ0FBQztBQUV0QyxlQUFlQztJQUVYLElBQUlELFdBQVdFLFdBQVcsRUFBRTtRQUN4QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDSjtJQUVBLElBQUk7UUFDQSxNQUFNQyxLQUFLLE1BQU1OLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsSUFBSSxJQUFLLENBQUM7UUFFbkVULFdBQVdFLFdBQVcsR0FBR0csR0FBR0ssV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVTtRQUNyRFIsUUFBUUMsR0FBRyxDQUFDO1FBRVpELFFBQVFDLEdBQUcsQ0FBQyxZQUFZQztRQUN4QkYsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkMsR0FBR0wsVUFBVTtJQUVwRCxFQUFFLE9BQU9ZLE9BQU87UUFFWlQsUUFBUUMsR0FBRyxDQUFDLDhCQUE4QlE7UUFFMUNMLFFBQVFNLElBQUksQ0FBQztJQUVqQjtBQUVKO0FBQ2tCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vbnltb3VzLXJldmlldy8uL3NyYy9saWIvZGJDb25uZWN0LnRzPzYwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG50eXBlIGNvbm5lY3Rpb25PYmplY3QgPSB7XG4gICAgaXNDb25uZWN0ZWQ/OiBudW1iZXJcbn1cblxuY29uc3QgY29ubmVjdGlvbiA6IGNvbm5lY3Rpb25PYmplY3QgPXt9O1xuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKTpQcm9taXNlPHZvaWQ+IHtcblxuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgYWxyZWFkeSBjb25uZWN0ZWRcIik7ICBcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICcnICwge30pXG5cbiAgICAgICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGVcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYnNlIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHlcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhYmFzZVwiLCBkYilcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhYmFzZSBjb25uZWN0aW9uXCIsIGRiLmNvbm5lY3Rpb24pXG4gICAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJGYWxpZWQgdG8gY29ubmVjdCBkYXRhYmFzZVwiLCBlcnJvcik7XG4gICAgICAgIFxuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICAgICAgXG4gICAgfVxuICAgIFxufVxuZXhwb3J0IHtkYkNvbm5lY3R9Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImVycm9yIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MessageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    content: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        required: true,\n        default: Date.now\n    }\n});\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        unique: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        unique: true,\n        trim: true,\n        match: [\n            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,\n            \"Invalid email format\"\n        ],\n        required: [\n            true,\n            \"Email is required\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    },\n    verifyCode: {\n        type: String,\n        required: [\n            true,\n            \"verify code is required\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: true\n    },\n    expireVerifyCode: {\n        type: Date,\n        required: [\n            true,\n            \"expire verify code is required\"\n        ]\n    },\n    isAcceptingMessages: {\n        type: Boolean,\n        default: true\n    },\n    messages: [\n        MessageSchema\n    ]\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBT3RELE1BQU1FLGdCQUFpQyxJQUFJRCw0Q0FBTUEsQ0FBQztJQUNoREUsU0FBUztRQUNQQyxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNUSCxNQUFNSTtRQUNORixVQUFVO1FBQ1ZHLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRjtBQWFBLE1BQU1DLGFBQTJCLElBQUlWLDRDQUFNQSxDQUFDO0lBQzFDVyxVQUFVO1FBQ1JSLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO1FBQ3hDTyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUNBQyxPQUFPO1FBQ0xYLE1BQU1DO1FBQ05RLFFBQVE7UUFDUkMsTUFBTTtRQUNORSxPQUFPO1lBQ0w7WUFDQTtTQUNEO1FBQ0RWLFVBQVU7WUFBQztZQUFNO1NBQW9CO0lBQ3ZDO0lBQ0FXLFVBQVU7UUFDUmIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBdUI7SUFDMUM7SUFDQVksWUFBWTtRQUNWZCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUEwQjtJQUM3QztJQUNBYSxZQUFZO1FBQ1ZmLE1BQU1nQjtRQUNOWCxTQUFTO0lBQ1g7SUFDQVksa0JBQWtCO1FBQ2hCakIsTUFBTUk7UUFDTkYsVUFBVTtZQUFDO1lBQU07U0FBaUM7SUFDcEQ7SUFDQWdCLHFCQUFxQjtRQUNuQmxCLE1BQU1nQjtRQUNOWCxTQUFTO0lBQ1g7SUFDQWMsVUFBVTtRQUFDckI7S0FBYztBQUMzQjtBQUVBLE1BQU1zQixZQUNKLHdEQUFnQixDQUFDRSxJQUFJLElBQ3JCMUIscURBQWMsQ0FBTyxRQUFRVztBQUUvQixpRUFBZWEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub255bW91cy1yZXZpZXcvLi9zcmMvbW9kZWxzL1VzZXIudHM/MDk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2UgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xufVxuXG5jb25zdCBNZXNzYWdlU2NoZW1hOiBTY2hlbWE8TWVzc2FnZT4gPSBuZXcgU2NoZW1hKHtcbiAgY29udGVudDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgY3JlYXRlZEF0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW107IC8vIG9uZSB0byBtYW55IHJlbGF0aW9uc2hpcCB3aXRoIG1lc3NhZ2UgbW9kZWxcbiAgdmVyaWZ5Q29kZTogc3RyaW5nO1xuICBpc1ZlcmlmaWVkOiBib29sZWFuO1xuICBleHBpcmVWZXJpZnlDb2RlOiBEYXRlO1xuICBpc0FjY2VwdGluZ01lc3NhZ2VzOiBib29sZWFuO1xufVxuXG5jb25zdCBVc2VyU2NoZW1hOiBTY2hlbWE8VXNlcj4gPSBuZXcgU2NoZW1hKHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCJdLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICB0cmltOiB0cnVlLFxuICB9LFxuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB1bmlxdWU6IHRydWUsXG4gICAgdHJpbTogdHJ1ZSxcbiAgICBtYXRjaDogW1xuICAgICAgL15bYS16QS1aMC05Ll8lKy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsfSQvLFxuICAgICAgXCJJbnZhbGlkIGVtYWlsIGZvcm1hdFwiLFxuICAgIF0sXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkVtYWlsIGlzIHJlcXVpcmVkXCJdLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIl0sXG4gIH0sXG4gIHZlcmlmeUNvZGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcInZlcmlmeSBjb2RlIGlzIHJlcXVpcmVkXCJdLFxuICB9LFxuICBpc1ZlcmlmaWVkOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBleHBpcmVWZXJpZnlDb2RlOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiZXhwaXJlIHZlcmlmeSBjb2RlIGlzIHJlcXVpcmVkXCJdLFxuICB9LFxuICBpc0FjY2VwdGluZ01lc3NhZ2VzOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICBtZXNzYWdlczogW01lc3NhZ2VTY2hlbWFdLFxufSk7XG5cbmNvbnN0IFVzZXJNb2RlbCA9XG4gIChtb25nb29zZS5tb2RlbHMuVXNlciBhcyBtb25nb29zZS5Nb2RlbDxVc2VyPikgfHxcbiAgbW9uZ29vc2UubW9kZWw8VXNlcj4oXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWw7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJNZXNzYWdlU2NoZW1hIiwiY29udGVudCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiVXNlclNjaGVtYSIsInVzZXJuYW1lIiwidW5pcXVlIiwidHJpbSIsImVtYWlsIiwibWF0Y2giLCJwYXNzd29yZCIsInZlcmlmeUNvZGUiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImV4cGlyZVZlcmlmeUNvZGUiLCJpc0FjY2VwdGluZ01lc3NhZ2VzIiwibWVzc2FnZXMiLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbikra%5CDownloads%5Canonymous-review-app-main%5Canonymous-review-app%5Canonymous-review-app-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbikra%5CDownloads%5Canonymous-review-app-main%5Canonymous-review-app%5Canonymous-review-app-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
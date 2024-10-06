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
exports.id = "app/api/get-messages/route";
exports.ids = ["app/api/get-messages/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=C%3A%5CUsers%5Cbikra%5CDesktop%5CTruthLink%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbikra%5CDesktop%5CTruthLink&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=C%3A%5CUsers%5Cbikra%5CDesktop%5CTruthLink%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbikra%5CDesktop%5CTruthLink&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_bikra_Desktop_TruthLink_src_app_api_get_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/get-messages/route.ts */ \"(rsc)/./src/app/api/get-messages/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/get-messages/route\",\n        pathname: \"/api/get-messages\",\n        filename: \"route\",\n        bundlePath: \"app/api/get-messages/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\bikra\\\\Desktop\\\\TruthLink\\\\src\\\\app\\\\api\\\\get-messages\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_bikra_Desktop_TruthLink_src_app_api_get_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/get-messages/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZXQtbWVzc2FnZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdldC1tZXNzYWdlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdldC1tZXNzYWdlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNiaWtyYSU1Q0Rlc2t0b3AlNUNUcnV0aExpbmslNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2Jpa3JhJTVDRGVza3RvcCU1Q1RydXRoTGluayZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub255bW91cy1yZXZpZXcvPzY2MjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcYmlrcmFcXFxcRGVza3RvcFxcXFxUcnV0aExpbmtcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZ2V0LW1lc3NhZ2VzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZXQtbWVzc2FnZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZXQtbWVzc2FnZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dldC1tZXNzYWdlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGJpa3JhXFxcXERlc2t0b3BcXFxcVHJ1dGhMaW5rXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdldC1tZXNzYWdlc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9nZXQtbWVzc2FnZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=C%3A%5CUsers%5Cbikra%5CDesktop%5CTruthLink%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbikra%5CDesktop%5CTruthLink&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/options.ts":
/*!***************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/options.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOption: () => (/* binding */ authOption)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n\n\n\n\nconst authOption = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__.dbConnect)();\n                try {\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        $or: [\n                            {\n                                email: credentials.identifier\n                            },\n                            {\n                                username: credentials.identifier\n                            }\n                        ]\n                    });\n                    if (!user) {\n                        throw new Error(\"No User found with this email\");\n                    }\n                    // if (!user.isVerified) {\n                    //     throw new Error(\"Please verify your email first to login with this email\")\n                    // }\n                    const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                    if (isPasswordCorrect) {\n                        return user;\n                    } else {\n                        throw new Error(\"Incorrect password, please provide valid password\");\n                    }\n                } catch (error) {\n                    throw new Error(error);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token._id = user._id?.toString();\n                token.isVerified = user.isVerified;\n                token.isAcceptingMessages = user.isAcceptingMessages;\n                token.username = user.username;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user._id = token._id?.toString();\n                session.user.isVerified = token.isVerified;\n                session.user.isAcceptingMessages = token.isAcceptingMessages;\n                session.user.username = token.username;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/sign-in\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDdUU7QUFDdEM7QUFDZTtBQUNOO0FBRS9CLE1BQU1JLGFBQTZCO0lBQ3RDQyxXQUFVO1FBQ05MLDJFQUFtQkEsQ0FBQztZQUNoQk0sSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1RDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU07Z0JBQ3JDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBZTtnQkFDN0IsTUFBTU4seURBQVNBO2dCQUNmLElBQUk7b0JBQ0EsTUFBTVksT0FBTyxNQUFNWCxvREFBU0EsQ0FBQ1ksT0FBTyxDQUFDO3dCQUNqQ0MsS0FBSTs0QkFDQTtnQ0FBQ1AsT0FBT0QsWUFBWVMsVUFBVTs0QkFBQTs0QkFDOUI7Z0NBQUNDLFVBQVVWLFlBQVlTLFVBQVU7NEJBQUE7eUJBQ3BDO29CQUNMO29CQUVBLElBQUksQ0FBQ0gsTUFBTTt3QkFDUCxNQUFNLElBQUlLLE1BQU07b0JBQ3BCO29CQUNBLDBCQUEwQjtvQkFDMUIsaUZBQWlGO29CQUNqRixJQUFJO29CQUVKLE1BQU1DLG9CQUFvQixNQUFNbkIsdURBQWMsQ0FBQ08sWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO29CQUVsRixJQUFJUSxtQkFBbUI7d0JBQ25CLE9BQU9OO29CQUNYLE9BQU87d0JBQ0gsTUFBTSxJQUFJSyxNQUFNO29CQUNwQjtnQkFFSixFQUFFLE9BQU9HLE9BQVc7b0JBQ2hCLE1BQU0sSUFBSUgsTUFBTUc7Z0JBQ3BCO1lBQ0Y7UUFDTjtLQUNIO0lBRURDLFdBQVU7UUFDTixNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVgsSUFBSSxFQUFHO1lBRXRCLElBQUlBLE1BQU07Z0JBQ05XLE1BQU1DLEdBQUcsR0FBRVosS0FBS1ksR0FBRyxFQUFFQztnQkFDckJGLE1BQU1HLFVBQVUsR0FBR2QsS0FBS2MsVUFBVTtnQkFDbENILE1BQU1JLG1CQUFtQixHQUFHZixLQUFLZSxtQkFBbUI7Z0JBQ3BESixNQUFNUCxRQUFRLEdBQUVKLEtBQUtJLFFBQVE7WUFDakM7WUFFRixPQUFPTztRQUNUO1FBQ0EsTUFBTUssU0FBUSxFQUFFQSxPQUFPLEVBQUVMLEtBQUssRUFBRTtZQUU1QixJQUFJQSxPQUFPO2dCQUNQSyxRQUFRaEIsSUFBSSxDQUFDWSxHQUFHLEdBQUVELE1BQU1DLEdBQUcsRUFBRUM7Z0JBQzdCRyxRQUFRaEIsSUFBSSxDQUFDYyxVQUFVLEdBQUdILE1BQU1HLFVBQVU7Z0JBQzFDRSxRQUFRaEIsSUFBSSxDQUFDZSxtQkFBbUIsR0FBR0osTUFBTUksbUJBQW1CO2dCQUM1REMsUUFBUWhCLElBQUksQ0FBQ0ksUUFBUSxHQUFFTyxNQUFNUCxRQUFRO1lBQ3pDO1lBRUEsT0FBT1k7UUFDVDtJQUNOO0lBRUFDLE9BQU07UUFDRkMsUUFBTztJQUNYO0lBRUFGLFNBQVE7UUFDSkcsVUFBVTtJQUNkO0lBRUFDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUN2QyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vbnltb3VzLXJldmlldy8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9vcHRpb25zLnRzP2EyYzYiXSwic291cmNlc0NvbnRlbnQiOlsiICAgIGltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuICAgIGltcG9ydCAgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG4gICAgaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIlxyXG4gICAgaW1wb3J0IHsgZGJDb25uZWN0IH0gZnJvbSBcIkAvbGliL2RiQ29ubmVjdFwiO1xyXG4gICAgaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBhdXRoT3B0aW9uOiBOZXh0QXV0aE9wdGlvbnM9IHtcclxuICAgICAgICBwcm92aWRlcnM6W1xyXG4gICAgICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcImVtYWlsXCIsIHR5cGU6IFwidGV4dFwifSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHM6YW55ICkgOiBQcm9taXNlPGFueT57XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGJDb25uZWN0KClcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9yOltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1haWw6IGNyZWRlbnRpYWxzLmlkZW50aWZpZXJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VybmFtZTogY3JlZGVudGlhbHMuaWRlbnRpZmllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gVXNlciBmb3VuZCB3aXRoIHRoaXMgZW1haWxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIXVzZXIuaXNWZXJpZmllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsIGZpcnN0IHRvIGxvZ2luIHdpdGggdGhpcyBlbWFpbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkQ29ycmVjdCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUGFzc3dvcmRDb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IHBhc3N3b3JkLCBwbGVhc2UgcHJvdmlkZSB2YWxpZCBwYXNzd29yZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzOntcclxuICAgICAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIH0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuLl9pZCA9dXNlci5faWQ/LnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbi5pc1ZlcmlmaWVkID0gdXNlci5pc1ZlcmlmaWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuLmlzQWNjZXB0aW5nTWVzc2FnZXMgPSB1c2VyLmlzQWNjZXB0aW5nTWVzc2FnZXNcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbi51c2VybmFtZSA9dXNlci51c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuX2lkID10b2tlbi5faWQ/LnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuaXNWZXJpZmllZCA9IHRva2VuLmlzVmVyaWZpZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlzQWNjZXB0aW5nTWVzc2FnZXMgPSB0b2tlbi5pc0FjY2VwdGluZ01lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLnVzZXJuYW1lID10b2tlbi51c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYWdlczp7XHJcbiAgICAgICAgICAgIHNpZ25JbjpcIi9zaWduLWluXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXNzaW9uOntcclxuICAgICAgICAgICAgc3RyYXRlZ3k6IFwiand0XCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuICAgIH0iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImRiQ29ubmVjdCIsIlVzZXJNb2RlbCIsImF1dGhPcHRpb24iLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZE9uZSIsIiRvciIsImlkZW50aWZpZXIiLCJ1c2VybmFtZSIsIkVycm9yIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsIl9pZCIsInRvU3RyaW5nIiwiaXNWZXJpZmllZCIsImlzQWNjZXB0aW5nTWVzc2FnZXMiLCJzZXNzaW9uIiwicGFnZXMiLCJzaWduSW4iLCJzdHJhdGVneSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/options.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/get-messages/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/get-messages/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_nextauth_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/[...nextauth]/options */ \"(rsc)/./src/app/api/auth/[...nextauth]/options.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function GET(request) {\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__.dbConnect)();\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_auth_nextauth_options__WEBPACK_IMPORTED_MODULE_3__.authOption);\n    const _user = session?.user;\n    if (!session || !_user) {\n        return Response.json({\n            success: false,\n            message: \"Not authenticated\"\n        }, {\n            status: 401\n        });\n    }\n    const userId = new (mongoose__WEBPACK_IMPORTED_MODULE_4___default().Types).ObjectId(_user._id);\n    try {\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([\n            {\n                $match: {\n                    _id: userId\n                }\n            },\n            {\n                $unwind: \"$messages\"\n            },\n            {\n                $sort: {\n                    \"messages.createdAt\": -1\n                }\n            },\n            {\n                $group: {\n                    _id: \"$id\",\n                    messages: {\n                        $push: \"$messages\"\n                    }\n                }\n            }\n        ]);\n        if (!user) {\n            return Response.json({\n                success: false,\n                message: \"user not found\"\n            }, {\n                status: 402\n            });\n        }\n        return Response.json({\n            messages: user[0].messages\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.log(\"Internal server error while getting message\", error);\n        return Response.json({\n            success: false,\n            message: \"No message to display\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXQtbWVzc2FnZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTjtBQUNPO0FBQ2M7QUFFM0I7QUFFekIsZUFBZUssSUFBSUMsT0FBZTtJQUNyQyxNQUFNTix5REFBU0E7SUFFZixNQUFNTyxVQUFVLE1BQU1MLDJEQUFnQkEsQ0FBQ0MsOERBQVVBO0lBQ2pELE1BQU1LLFFBQWNELFNBQVNFO0lBRTdCLElBQUksQ0FBQ0YsV0FBVyxDQUFDQyxPQUFPO1FBQ3BCLE9BQU9FLFNBQVNDLElBQUksQ0FDaEI7WUFDSUMsU0FBUTtZQUNSQyxTQUFRO1FBQ1osR0FBRTtZQUFDQyxRQUFPO1FBQUc7SUFFckI7SUFFQSxNQUFNQyxTQUFTLElBQUlYLHVEQUFjLENBQUNhLFFBQVEsQ0FBQ1QsTUFBTVUsR0FBRztJQUVwRCxJQUFJO1FBRUEsTUFBTVQsT0FBTyxNQUFNUixvREFBU0EsQ0FBQ2tCLFNBQVMsQ0FBQztZQUNuQztnQkFDSUMsUUFBTztvQkFBQ0YsS0FBSUg7Z0JBQU07WUFDdEI7WUFDQTtnQkFDSU0sU0FBUTtZQUNaO1lBQ0E7Z0JBQ0lDLE9BQU07b0JBQUMsc0JBQXFCLENBQUM7Z0JBQUM7WUFDbEM7WUFDQTtnQkFDSUMsUUFBTztvQkFBQ0wsS0FBSTtvQkFBT00sVUFBUzt3QkFBQ0MsT0FBTTtvQkFBVztnQkFBQztZQUNuRDtTQUNIO1FBRUQsSUFBSSxDQUFDaEIsTUFBTTtZQUNQLE9BQU9DLFNBQVNDLElBQUksQ0FDaEI7Z0JBQ0lDLFNBQVE7Z0JBQ1JDLFNBQVE7WUFDWixHQUFFO2dCQUFDQyxRQUFPO1lBQUc7UUFFckI7UUFFQSxPQUFPSixTQUFTQyxJQUFJLENBQ2hCO1lBQUVhLFVBQVNmLElBQUksQ0FBQyxFQUFFLENBQUNlLFFBQVE7UUFBQyxHQUFFO1lBQUNWLFFBQU87UUFBRztJQUdqRCxFQUFFLE9BQU9ZLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDLCtDQUErQ0Y7UUFDM0QsT0FBT2hCLFNBQVNDLElBQUksQ0FDaEI7WUFDSUMsU0FBUTtZQUNSQyxTQUFRO1FBQ1osR0FBRTtZQUFDQyxRQUFPO1FBQUc7SUFFckI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub255bW91cy1yZXZpZXcvLi9zcmMvYXBwL2FwaS9nZXQtbWVzc2FnZXMvcm91dGUudHM/MzkzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYkNvbm5lY3QgfSBmcm9tIFwiQC9saWIvZGJDb25uZWN0XCI7XHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbiB9IGZyb20gXCIuLi9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9uc1wiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6UmVxdWVzdCkge1xyXG4gICAgYXdhaXQgZGJDb25uZWN0KClcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9uKVxyXG4gICAgY29uc3QgX3VzZXI6IFVzZXIgPSBzZXNzaW9uPy51c2VyIGFzIFVzZXJcclxuXHJcbiAgICBpZiAoIXNlc3Npb24gfHwgIV91c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOlwiTm90IGF1dGhlbnRpY2F0ZWRcIlxyXG4gICAgICAgICAgICB9LHtzdGF0dXM6NDAxfVxyXG4gICAgICAgICkgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlcklkID0gbmV3IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkKF91c2VyLl9pZCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICBcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmFnZ3JlZ2F0ZShbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICRtYXRjaDp7X2lkOnVzZXJJZH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJHVud2luZDpcIiRtZXNzYWdlc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICRzb3J0OnsnbWVzc2FnZXMuY3JlYXRlZEF0JzotMX1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJGdyb3VwOntfaWQ6JyRpZCcsIG1lc3NhZ2VzOnskcHVzaDonJG1lc3NhZ2VzJ319XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKSBcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOlwidXNlciBub3QgZm91bmRcIlxyXG4gICAgICAgICAgICAgICAgfSx7c3RhdHVzOjQwMn1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgIHsgbWVzc2FnZXM6dXNlclswXS5tZXNzYWdlcyB9LHtzdGF0dXM6MjAwfVxyXG4gICAgICAgIClcclxuICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3Igd2hpbGUgZ2V0dGluZyBtZXNzYWdlXCIsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpcIk5vIG1lc3NhZ2UgdG8gZGlzcGxheVwiXHJcbiAgICAgICAgICAgIH0se3N0YXR1czo1MDB9XHJcbiAgICAgICAgKSBcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiVXNlck1vZGVsIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb24iLCJtb25nb29zZSIsIkdFVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwiX3VzZXIiLCJ1c2VyIiwiUmVzcG9uc2UiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJ1c2VySWQiLCJUeXBlcyIsIk9iamVjdElkIiwiX2lkIiwiYWdncmVnYXRlIiwiJG1hdGNoIiwiJHVud2luZCIsIiRzb3J0IiwiJGdyb3VwIiwibWVzc2FnZXMiLCIkcHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/get-messages/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./src/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dbConnect: () => (/* binding */ dbConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        console.log(\"Database already connected\");\n        return;\n    }\n    try {\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI || \"\", {});\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"Databse connected successfully\");\n        console.log(\"database\", db);\n        console.log(\"database connection\", db.connection);\n    } catch (error) {\n        console.log(\"Falied to connect database\", error);\n        process.exit(1);\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFNaEMsTUFBTUMsYUFBK0IsQ0FBQztBQUV0QyxlQUFlQztJQUVYLElBQUlELFdBQVdFLFdBQVcsRUFBRTtRQUN4QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDSjtJQUVBLElBQUk7UUFDQSxNQUFNQyxLQUFLLE1BQU1OLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsSUFBSSxJQUFLLENBQUM7UUFFbkVULFdBQVdFLFdBQVcsR0FBR0csR0FBR0ssV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVTtRQUNyRFIsUUFBUUMsR0FBRyxDQUFDO1FBRVpELFFBQVFDLEdBQUcsQ0FBQyxZQUFZQztRQUN4QkYsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkMsR0FBR0wsVUFBVTtJQUVwRCxFQUFFLE9BQU9ZLE9BQU87UUFFWlQsUUFBUUMsR0FBRyxDQUFDLDhCQUE4QlE7UUFFMUNMLFFBQVFNLElBQUksQ0FBQztJQUVqQjtBQUVKO0FBQ2tCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vbnltb3VzLXJldmlldy8uL3NyYy9saWIvZGJDb25uZWN0LnRzPzYwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxudHlwZSBjb25uZWN0aW9uT2JqZWN0ID0ge1xyXG4gICAgaXNDb25uZWN0ZWQ/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgY29ubmVjdGlvbiA6IGNvbm5lY3Rpb25PYmplY3QgPXt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCk6UHJvbWlzZTx2b2lkPiB7XHJcblxyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGFscmVhZHkgY29ubmVjdGVkXCIpOyAgXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgJycgLCB7fSlcclxuXHJcbiAgICAgICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGVcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFic2UgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhYmFzZVwiLCBkYilcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFiYXNlIGNvbm5lY3Rpb25cIiwgZGIuY29ubmVjdGlvbilcclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFsaWVkIHRvIGNvbm5lY3QgZGF0YWJhc2VcIiwgZXJyb3IpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IHtkYkNvbm5lY3R9Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImVycm9yIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MessageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    content: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        required: true,\n        default: Date.now\n    }\n});\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        unique: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        unique: true,\n        trim: true,\n        match: [\n            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,\n            \"Invalid email format\"\n        ],\n        required: [\n            true,\n            \"Email is required\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    },\n    verifyCode: {\n        type: String,\n        required: [\n            true,\n            \"verify code is required\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: true\n    },\n    expireVerifyCode: {\n        type: Date,\n        required: [\n            true,\n            \"expire verify code is required\"\n        ]\n    },\n    isAcceptingMessages: {\n        type: Boolean,\n        default: true\n    },\n    messages: [\n        MessageSchema\n    ]\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBT3RELE1BQU1FLGdCQUFpQyxJQUFJRCw0Q0FBTUEsQ0FBQztJQUNoREUsU0FBUztRQUNQQyxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNUSCxNQUFNSTtRQUNORixVQUFVO1FBQ1ZHLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRjtBQWFBLE1BQU1DLGFBQTJCLElBQUlWLDRDQUFNQSxDQUFDO0lBQzFDVyxVQUFVO1FBQ1JSLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO1FBQ3hDTyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUNBQyxPQUFPO1FBQ0xYLE1BQU1DO1FBQ05RLFFBQVE7UUFDUkMsTUFBTTtRQUNORSxPQUFPO1lBQ0w7WUFDQTtTQUNEO1FBQ0RWLFVBQVU7WUFBQztZQUFNO1NBQW9CO0lBQ3ZDO0lBQ0FXLFVBQVU7UUFDUmIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBdUI7SUFDMUM7SUFDQVksWUFBWTtRQUNWZCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUEwQjtJQUM3QztJQUNBYSxZQUFZO1FBQ1ZmLE1BQU1nQjtRQUNOWCxTQUFTO0lBQ1g7SUFDQVksa0JBQWtCO1FBQ2hCakIsTUFBTUk7UUFDTkYsVUFBVTtZQUFDO1lBQU07U0FBaUM7SUFDcEQ7SUFDQWdCLHFCQUFxQjtRQUNuQmxCLE1BQU1nQjtRQUNOWCxTQUFTO0lBQ1g7SUFDQWMsVUFBVTtRQUFDckI7S0FBYztBQUMzQjtBQUVBLE1BQU1zQixZQUNKLHdEQUFnQixDQUFDRSxJQUFJLElBQ3JCMUIscURBQWMsQ0FBTyxRQUFRVztBQUUvQixpRUFBZWEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub255bW91cy1yZXZpZXcvLi9zcmMvbW9kZWxzL1VzZXIudHM/MDk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBjcmVhdGVkQXQ6IERhdGU7XHJcbn1cclxuXHJcbmNvbnN0IE1lc3NhZ2VTY2hlbWE6IFNjaGVtYTxNZXNzYWdlPiA9IG5ldyBTY2hlbWEoe1xyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgY3JlYXRlZEF0OiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciBleHRlbmRzIERvY3VtZW50IHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBtZXNzYWdlczogTWVzc2FnZVtdOyAvLyBvbmUgdG8gbWFueSByZWxhdGlvbnNoaXAgd2l0aCBtZXNzYWdlIG1vZGVsXHJcbiAgdmVyaWZ5Q29kZTogc3RyaW5nO1xyXG4gIGlzVmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgZXhwaXJlVmVyaWZ5Q29kZTogRGF0ZTtcclxuICBpc0FjY2VwdGluZ01lc3NhZ2VzOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hOiBTY2hlbWE8VXNlcj4gPSBuZXcgU2NoZW1hKHtcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCJdLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgdHJpbTogdHJ1ZSxcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gICAgbWF0Y2g6IFtcclxuICAgICAgL15bYS16QS1aMC05Ll8lKy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsfSQvLFxyXG4gICAgICBcIkludmFsaWQgZW1haWwgZm9ybWF0XCIsXHJcbiAgICBdLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkVtYWlsIGlzIHJlcXVpcmVkXCJdLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiXSxcclxuICB9LFxyXG4gIHZlcmlmeUNvZGU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJ2ZXJpZnkgY29kZSBpcyByZXF1aXJlZFwiXSxcclxuICB9LFxyXG4gIGlzVmVyaWZpZWQ6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gIH0sXHJcbiAgZXhwaXJlVmVyaWZ5Q29kZToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJleHBpcmUgdmVyaWZ5IGNvZGUgaXMgcmVxdWlyZWRcIl0sXHJcbiAgfSxcclxuICBpc0FjY2VwdGluZ01lc3NhZ2VzOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICB9LFxyXG4gIG1lc3NhZ2VzOiBbTWVzc2FnZVNjaGVtYV0sXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlck1vZGVsID1cclxuICAobW9uZ29vc2UubW9kZWxzLlVzZXIgYXMgbW9uZ29vc2UuTW9kZWw8VXNlcj4pIHx8XHJcbiAgbW9uZ29vc2UubW9kZWw8VXNlcj4oXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlck1vZGVsO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJNZXNzYWdlU2NoZW1hIiwiY29udGVudCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiVXNlclNjaGVtYSIsInVzZXJuYW1lIiwidW5pcXVlIiwidHJpbSIsImVtYWlsIiwibWF0Y2giLCJwYXNzd29yZCIsInZlcmlmeUNvZGUiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImV4cGlyZVZlcmlmeUNvZGUiLCJpc0FjY2VwdGluZ01lc3NhZ2VzIiwibWVzc2FnZXMiLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=C%3A%5CUsers%5Cbikra%5CDesktop%5CTruthLink%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbikra%5CDesktop%5CTruthLink&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
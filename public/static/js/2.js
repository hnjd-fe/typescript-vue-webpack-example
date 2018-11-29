webpackJsonp([2],{

/***/ "./static/components/home/home.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n    <Layout>\n        <Header>\n            <Menu mode=\"horizontal\" theme=\"dark\" active-name=\"1\">\n                <div class=\"layout-logo\"></div>\n                <div class=\"layout-nav\">\n                    <MenuItem name=\"1\">\n                        <Icon type=\"ios-navigate\"></Icon>\n                        Item 1\n                    </MenuItem>\n                    <MenuItem name=\"2\">\n                        <Icon type=\"ios-keypad\"></Icon>\n                        Item 2\n                    </MenuItem>\n                    <MenuItem name=\"3\">\n                        <Icon type=\"ios-analytics\"></Icon>\n                        Item 3\n                    </MenuItem>\n                    <MenuItem name=\"4\">\n                        <Icon type=\"ios-paper\"></Icon>\n                        Item 4\n                    </MenuItem>\n                </div>\n            </Menu>\n        </Header>\n        <Layout>\n            <Sider hide-trigger :style=\"{background: '#fff'}\">\n                <Menu active-name=\"1-2\" theme=\"light\" width=\"auto\" :open-names=\"['1']\">\n                    <Submenu name=\"1\">\n                        <template slot=\"title\">\n                            <Icon type=\"ios-navigate\"></Icon>\n                            Item 1\n                        </template>\n                        <MenuItem name=\"1-1\">Option 1</MenuItem>\n                        <MenuItem name=\"1-2\">Option 2</MenuItem>\n                        <MenuItem name=\"1-3\">Option 3</MenuItem>\n                    </Submenu>\n                    <Submenu name=\"2\">\n                        <template slot=\"title\">\n                            <Icon type=\"ios-keypad\"></Icon>\n                            Item 2\n                        </template>\n                        <MenuItem name=\"2-1\">Option 1</MenuItem>\n                        <MenuItem name=\"2-2\">Option 2</MenuItem>\n                    </Submenu>\n                    <Submenu name=\"3\">\n                        <template slot=\"title\">\n                            <Icon type=\"ios-analytics\"></Icon>\n                            Item 3\n                        </template>\n                        <MenuItem name=\"3-1\">Option 1</MenuItem>\n                        <MenuItem name=\"3-2\">Option 2</MenuItem>\n                    </Submenu>\n                </Menu>\n            </Sider>\n            <Layout :style=\"{padding: '0 24px 24px'}\">\n                <Breadcrumb :style=\"{margin: '24px 0'}\">\n                    <BreadcrumbItem>Home</BreadcrumbItem>\n                    <BreadcrumbItem>Components</BreadcrumbItem>\n                    <BreadcrumbItem>Layout</BreadcrumbItem>\n                </Breadcrumb>\n                <Content :style=\"{padding: '24px', minHeight: '280px', background: '#fff'}\">\n                    Content\n                </Content>\n            </Layout>\n        </Layout>\n    </Layout>\n</div>\n"

/***/ }),

/***/ "./static/components/home/home.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./static/components/home/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__ = __webpack_require__("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__less_test_less__ = __webpack_require__("./static/less/test.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__less_test_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__less_test_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_less__ = __webpack_require__("./static/components/home/home.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__home_less__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.package = 'vue-webpack-typescript';
        _this.repo = 'https://github.com/ducksoupdev/vue-webpack-typescript';
        _this.mode = "production";
        return _this;
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Component"])({
            template: __webpack_require__("./static/components/home/home.html"),
            components: {}
        })
    ], HomeComponent);
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_0_vue_property_decorator__["Vue"]));

console.log('at home', Date.now());


/***/ }),

/***/ "./static/less/test.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 5448:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 4101);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_tabs_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 6302)).then(m => m.HomePageModule)
            },
            {
                path: 'card',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_tabs_card_card_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/card.module */ 7292)).then(m => m.CardPageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 1901)).then(m => m.SettingsPageModule)
            },
            {
                path: 'transactions',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_transactions_transactions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transactions/transactions.module */ 9122)).then(m => m.TransactionsPageModule)
            },
        ],
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 5448);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 4101);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 4101:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 7867);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
    setCurrentTab() {
        this.selectedTab = this.tabs.getSelected();
        console.log(this.selectedTab);
    }
};
TabsPage.ctorParameters = () => [];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['tabs', { static: false },] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4436:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-tabs {\n  background: var(--ion-color-secondary);\n}\nion-tabs ion-tab-bar {\n  position: relative;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  border-radius: 30px;\n  padding-bottom: 0;\n  border: 1px solid rgba(2, 52, 54, 0.08);\n  overflow: hidden;\n  box-shadow: 0px -5px 10px rgba(3, 181, 170, 0.08);\n  height: 80px;\n  --background: var(--ion-color-light);\n}\nion-tabs ion-tab-bar ion-tab-button {\n  --background: var(--ion-color-light);\n  --color: #BEC2C6;\n}\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  font-size: 1.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElOR0UlMjA0XFxTRU0lMjAxXFxNT0JJTEUlMjBERVZFTE9QTUVOVFxcU2VtZXN0ZXJfUHJvamVjdFxcLWlzaTQtZGV2LW1vYmlsZS0tZ3A2LXRoZW1lMi1Nb25leU1hZXN0cm9cXE1vbmV5TWFlc3Ryb1xcc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNFUjtBRERRO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtBQ0daO0FERlk7RUFDSSxpQkFBQTtBQ0loQiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWJzIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgaW9uLXRhYi1iYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMiwgNTIsIDU0LCAwLjA4KTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggcmdiKDMgMTgxIDE3MCAvIDglKTtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjQkVDMkM2O1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi10YWJzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMiwgNTIsIDU0LCAwLjA4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTBweCByZ2JhKDMsIDE4MSwgMTcwLCAwLjA4KTtcbiAgaGVpZ2h0OiA4MHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1jb2xvcjogI0JFQzJDNjtcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjlyZW07XG59Il19 */";

/***/ }),

/***/ 7867:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs #tabs (ionTabsDidChange)=\"setCurrentTab()\">\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"home\">\r\n      <ion-icon [name]=\"selectedTab == 'home' ? 'home' : 'home-outline'\"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"transactions\">\r\n      <ion-icon [name]=\"selectedTab == 'transactions' ? 'pie-chart' : 'pie-chart-outline'\"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"card\">\r\n      <ion-icon [name]=\"selectedTab == 'card' ? 'card' : 'card-outline'\"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"settings\">\r\n      <ion-icon [name]=\"selectedTab == 'settings' ? 'settings' : 'settings-outline'\"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map
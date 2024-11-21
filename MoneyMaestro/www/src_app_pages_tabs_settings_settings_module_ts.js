"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_settings_settings_module_ts"],{

/***/ 4362:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 1019);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 1901:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 4362);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 1019);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 1019:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 6489);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 4741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SettingsPage = class SettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsPage.ctorParameters = () => [];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 4741:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-content div {\n  margin-top: 2rem;\n}\nion-content div ion-avatar {\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-tertiary);\n  height: 4.5rem;\n  width: 4.5rem;\n}\nion-content div ion-label {\n  display: block;\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n  margin-top: 0.6rem;\n}\nion-content ion-list {\n  background: transparent;\n  padding: 2rem 1.5rem 1rem 1.5rem;\n}\nion-content ion-list ion-item {\n  --background: transparent;\n  --border-style: dashed;\n  --border-color: var(--ion-color-tertiary);\n  --padding-bottom: 1rem;\n  --padding-top: 1rem;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-content ion-list ion-item ion-toggle {\n  margin-right: -0.6rem;\n}\nion-content ion-button {\n  margin-bottom: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSU5HRSUyMDRcXFNFTSUyMDFcXE1PQklMRSUyMERFVkVMT1BNRU5UXFxTZW1lc3Rlcl9Qcm9qZWN0XFwtaXNpNC1kZXYtbW9iaWxlLS1ncDYtdGhlbWUyLU1vbmV5TWFlc3Ryb1xcTW9uZXlNYWVzdHJvXFxzcmNcXGFwcFxccGFnZXNcXHRhYnNcXHNldHRpbmdzXFxzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDWjtBRENRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURHSTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7QUNEUjtBREVRO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBRENZO0VBQ0kscUJBQUE7QUNDaEI7QURJSTtFQUNJLG1CQUFBO0FDRlIiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogNC41cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogNC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtIDFyZW0gMS41cmVtO1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLS1ib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgaW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IGRpdiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5pb24tY29udGVudCBkaXYgaW9uLWF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIHdpZHRoOiA0LjVyZW07XG59XG5pb24tY29udGVudCBkaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAwLjZyZW07XG59XG5pb24tY29udGVudCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAycmVtIDEuNXJlbSAxcmVtIDEuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDFyZW07XG4gIC0tcGFkZGluZy10b3A6IDFyZW07XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi10b2dnbGUge1xuICBtYXJnaW4tcmlnaHQ6IC0wLjZyZW07XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn0iXX0= */";

/***/ }),

/***/ 6489:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-title color=\"primary\">Settings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"secondary\">\r\n\r\n  <div align=\"center\">\r\n    <ion-avatar>\r\n      <img src=\"assets/imgs/img.png\" />\r\n    </ion-avatar>\r\n    <ion-label color=\"primary\">Nikhil Agarwal</ion-label>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item lines=\"full\">\r\n      <ion-icon slot=\"start\" name=\"notifications-outline\"></ion-icon>\r\n      <ion-label>\r\n        Push Notifications\r\n      </ion-label>\r\n      <ion-toggle slot=\"end\" [checked]=\"true\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-icon slot=\"start\" name=\"finger-print-outline\"></ion-icon>\r\n      <ion-label>\r\n        Touch ID Lock\r\n      </ion-label>\r\n      <ion-toggle slot=\"end\" [checked]=\"true\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" detail>\r\n      <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\r\n      <ion-label>\r\n        Change Password\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" detail>\r\n      <ion-icon slot=\"start\" name=\"help-buoy-outline\"></ion-icon>\r\n      <ion-label>\r\n        Get Support\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n  </ion-list>\r\n\r\n  <ion-button fill=\"clear\" class=\"ion-margin\" color=\"danger\">\r\n    <ion-icon name=\"log-out\" slot=\"start\"></ion-icon> Logout\r\n  </ion-button>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_settings_settings_module_ts.js.map
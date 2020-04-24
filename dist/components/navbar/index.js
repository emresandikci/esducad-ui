"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_components=require("../../components");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var Logo=function(a){var b=a.src,c=a.alt,d=a.width,e=a.height,f=_objectWithoutProperties(a,["src","alt","width","height"]);return/*#__PURE__*/_react["default"].createElement(_components.Box,_extends({flex:1},f),/*#__PURE__*/_react["default"].createElement("img",{src:b,alt:c?c:"logo",width:d?d:"50px",height:e?e:"50px"}))},Menu=function(a){return/*#__PURE__*/_react["default"].createElement(_components.Box,_extends({display:"flex",justifyContent:"flex-end",flex:1},a),a.children)},BaseComponent=_react["default"].forwardRef(function(a,b){return/*#__PURE__*/_react["default"].createElement(_components.Card,_extends({boxShadow:"nav",borderRadius:"none",ref:b},a))});BaseComponent.displayName="Navbar";var Navbar=_objectSpread({},BaseComponent,{Logo:null,Menu:null});Navbar.Logo=Logo,Navbar.Menu=Menu,Navbar.Logo.displayName="Navbar.Logo",Navbar.Menu.displayName="Navbar.Menu",Navbar.defaultProps={display:"flex",alignItems:"center",height:"72px",bg:"white",px:"24px"};var _default=Navbar;exports["default"]=_default;
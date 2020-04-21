"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _styledComponents=_interopRequireDefault(require("styled-components")),_react=_interopRequireDefault(require("react")),_box=_interopRequireDefault(require("../box")),_card=_interopRequireDefault(require("../card")),_button=_interopRequireDefault(require("../button")),_overlay=_interopRequireDefault(require("../overlay")),_propTypes=_interopRequireDefault(require("prop-types")),_utils=require("../../utils"),_icons=require("../../icons");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _StyledBox=(0,_styledComponents["default"])(_box["default"]).withConfig({displayName:"modal___StyledBox",componentId:"sc-1g5eujp-0"})(["cursor:pointer;"]),Content=function(a){var b=a.width,c=a.onClose,d=a.exitIconColor,e=a.exitIconTop,f=a.exitIconRight,g=_objectWithoutProperties(a,["width","onClose","exitIconColor","exitIconTop","exitIconRight"]),h=_utils.defaultTheme.colors,i=d?_utils.get.color(d):h.danger;return/*#__PURE__*/_react["default"].createElement(_card["default"],_extends({position:"relative",width:b?b:["300px",1/2],m:"auto",boxShadow:"card"},g),/*#__PURE__*/_react["default"].createElement(_StyledBox,{position:"absolute",top:e?e:"1rem",right:f?f:"1rem",color:i,onClick:function handleOnClose(){return c(!1)}},/*#__PURE__*/_react["default"].createElement(_icons.IconClose,{fill:i})),g.children)},Header=function(a){return/*#__PURE__*/_react["default"].createElement(_box["default"],_extends({padding:3},a))},Body=function(a){return/*#__PURE__*/_react["default"].createElement(_box["default"],_extends({padding:3},a))},Footer=function(a){return/*#__PURE__*/_react["default"].createElement(_box["default"],_extends({padding:3},a))},BaseComponent=_react["default"].forwardRef(function(a,b){var c=a.pt,d=a.isActive;return window&&(document.body.style.overflow=d?"hidden":null),/*#__PURE__*/_react["default"].createElement(_overlay["default"],_extends({ref:b,pt:c?c:7,display:d?"block":"none"},a))});BaseComponent.displayName="Modal";var Modal=_objectSpread({},BaseComponent,{Content:null,Header:null,Body:null,Footer:null});Modal.Content=Content,Modal.Header=Header,Modal.Body=Body,Modal.Footer=Footer,Modal.Content.displayName="Modal.Content",Modal.Header.displayName="Modal.Header",Modal.Body.displayName="Modal.Body",Modal.Footer.displayName="Modal.Footer",Modal.propTypes=_objectSpread({},Modal.propTypes);var _default=Modal;exports["default"]=_default;
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_box=_interopRequireDefault(require("../box"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var Flex=function(a){var b=a.children,c=a.gutter,d=a.gutterX,e=a.gutterY,f=_objectWithoutProperties(a,["children","gutter","gutterX","gutterY"]);return/*#__PURE__*/_react["default"].createElement(_box["default"],_extends({display:"flex",flexWrap:"wrap"},f),function setGutter(){return b&&0===b.length?null:_react["default"].Children.map(b,function(a){var b=a.props.width;return/*#__PURE__*/_react["default"].createElement(_box["default"],{width:b?b:"100%",p:c?c:".5em",px:d,py:e},_react["default"].cloneElement(a,{m:"0 auto",width:"100%"}))})}())},_default=Flex;exports["default"]=_default;
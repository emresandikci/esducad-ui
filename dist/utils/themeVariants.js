"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _propTypes=_interopRequireDefault(require("@styled-system/prop-types")),_animations=_interopRequireDefault(require("./animations"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var buttonTypes={default:{bg:"lightGray"},primary:{variant:"buttons.default",color:"white",bg:"primary"},secondary:{variant:"buttons.default",color:"white",bg:"secondary"},danger:{variant:"buttons.default",bg:"danger",color:"white"},success:{variant:"buttons.default",bg:"success",color:"white"},warning:{variant:"buttons.default",bg:"warning",color:"white"},info:{variant:"buttons.default",bg:"info",color:"white"},outline:{bg:"white",boxShadow:"inset 0 0 2px"},text:{padding:0,bg:"transparent"}},buttonSizeTypes={small:{py:2,px:3},medium:{py:3,px:4},large:{py:4,px:6}},textTypes={p:{as:"p"},label:{as:"label"}},fadeIn=_animations["default"].fadeIn,fadeOut=_animations["default"].fadeOut,fadeInDown=_animations["default"].fadeInDown,fadeOutDown=_animations["default"].fadeOutDown,bounce=_animations["default"].bounce,animationVariants={fadeIn:{css:"\n      ".concat(fadeIn,"\n    ")},fadeOut:{css:"\n      ".concat(fadeOut,"\n    ")},fadeInDown:{css:"\n      ".concat(fadeInDown,"\n    ")},fadeOutDown:{css:"\n      ".concat(fadeOutDown,"\n    ")},bounce:{css:"\n      ".concat(bounce,"\n    ")}},defaultPropTypes=_objectSpread({},_propTypes["default"].space,{},_propTypes["default"].layout,{},_propTypes["default"].color,{},_propTypes["default"].typography,{},_propTypes["default"].flexbox),_default={buttonTypes:buttonTypes,buttonSizeTypes:buttonSizeTypes,textTypes:textTypes,animationVariants:animationVariants,defaultPropTypes:defaultPropTypes};exports["default"]=_default;
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useInterval=void 0;var _react=require("react"),useInterval=function(a,b){var c=(0,_react.useRef)();(0,_react.useEffect)(function(){c.current=a},[a]),(0,_react.useEffect)(function(){function a(){c.current()}if(null!==b){var d=setInterval(a,b);return function(){return clearInterval(d)}}},[b])};exports.useInterval=useInterval;
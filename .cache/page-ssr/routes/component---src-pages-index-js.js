"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 8826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/home/marula/Escritorio/ADA/gatsby-y-chakra/my-gatsby-site/node_modules/react/index.js"
var index_js_ = __webpack_require__(2107);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs
var chunk_QEVFQ4EU = __webpack_require__(5059);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs + 6 modules
var chunk_3LE6AY5Q = __webpack_require__(7785);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs
// src/flex.tsx


var Flex = (0,chunk_QEVFQ4EU/* forwardRef */.G)(function Flex2(props, ref) {
  const { direction, align, justify, wrap, basis, grow, shrink, ...rest } = props;
  const styles = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_3LE6AY5Q/* chakra.div */.m.div, { ref, __css: styles, ...rest });
});
Flex.displayName = "Flex";



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-FRFD4OXU.mjs
// src/use-button-type.tsx

function useButtonType(value) {
  const [isButton, setIsButton] = (0,index_js_.useState)(!value);
  const refCallback = (0,index_js_.useCallback)((node) => {
    if (!node)
      return;
    setIsButton(node.tagName === "BUTTON");
  }, []);
  const type = isButton ? "button" : void 0;
  return { ref: refCallback, type };
}



// EXTERNAL MODULE: ./node_modules/@chakra-ui/react-context/dist/index.mjs
var dist = __webpack_require__(5227);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-DGWZA2DU.mjs
// src/button-context.ts

var [ButtonGroupProvider, useButtonGroup] = (0,dist/* createContext */.k)({
  strict: false,
  name: "ButtonGroupContext"
});



// EXTERNAL MODULE: ./node_modules/@chakra-ui/shared-utils/dist/index.mjs
var shared_utils_dist = __webpack_require__(5432);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-HCASMTTF.mjs
// src/button-icon.tsx




function ButtonIcon(props) {
  const { children, className, ...rest } = props;
  const _children = (0,index_js_.isValidElement)(children) ? (0,index_js_.cloneElement)(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = (0,shared_utils_dist.cx)("chakra-button__icon", className);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    chunk_3LE6AY5Q/* chakra.span */.m.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
}
ButtonIcon.displayName = "ButtonIcon";



// EXTERNAL MODULE: ./node_modules/@chakra-ui/spinner/dist/chunk-NO6MRLPK.mjs
var chunk_NO6MRLPK = __webpack_require__(295);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-HNNHG6RU.mjs
// src/button-spinner.tsx





function ButtonSpinner(props) {
  const {
    label,
    placement,
    spacing = "0.5rem",
    children = /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_NO6MRLPK/* Spinner */.$, { color: "currentColor", width: "1em", height: "1em" }),
    className,
    __css,
    ...rest
  } = props;
  const _className = (0,shared_utils_dist.cx)("chakra-button__spinner", className);
  const marginProp = placement === "start" ? "marginEnd" : "marginStart";
  const spinnerStyles = (0,index_js_.useMemo)(
    () => ({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css
    }),
    [__css, label, marginProp, spacing]
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_3LE6AY5Q/* chakra.div */.m.div, { className: _className, ...rest, __css: spinnerStyles, children });
}
ButtonSpinner.displayName = "ButtonSpinner";



;// CONCATENATED MODULE: ./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs
// src/index.ts

function assignRef(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      assignRef(ref, node);
    });
  };
}
function useMergeRefs(...refs) {
  return (0,index_js_.useMemo)(() => mergeRefs(...refs), refs);
}


// EXTERNAL MODULE: ./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs + 2 modules
var chunk_T2VHL7RE = __webpack_require__(5490);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/styled-system/dist/index.mjs
var styled_system_dist = __webpack_require__(3179);
;// CONCATENATED MODULE: ./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs





// src/button.tsx





var Button = (0,chunk_QEVFQ4EU/* forwardRef */.G)((props, ref) => {
  const group = useButtonGroup();
  const styles = (0,chunk_T2VHL7RE/* useStyleConfig */.mq)("Button", { ...group, ...props });
  const {
    isDisabled = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as,
    ...rest
  } = (0,styled_system_dist/* omitThemingProps */.Lr)(props);
  const buttonStyles = (0,index_js_.useMemo)(() => {
    const _focus = { ...styles == null ? void 0 : styles["_focus"], zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...styles,
      ...!!group && { _focus }
    };
  }, [styles, group]);
  const { ref: _ref, type: defaultType } = useButtonType(as);
  const contentProps = { rightIcon, leftIcon, iconSpacing, children };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    chunk_3LE6AY5Q/* chakra.button */.m.button,
    {
      ref: useMergeRefs(ref, _ref),
      as,
      type: type != null ? type : defaultType,
      "data-active": (0,shared_utils_dist/* dataAttr */.PB)(isActive),
      "data-loading": (0,shared_utils_dist/* dataAttr */.PB)(isLoading),
      __css: buttonStyles,
      className: (0,shared_utils_dist.cx)("chakra-button", className),
      ...rest,
      disabled: isDisabled || isLoading,
      children: [
        isLoading && spinnerPlacement === "start" && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--start",
            label: loadingText,
            placement: "start",
            spacing: iconSpacing,
            children: spinner
          }
        ),
        isLoading ? loadingText || /* @__PURE__ */ (0,jsx_runtime.jsx)(chunk_3LE6AY5Q/* chakra.span */.m.span, { opacity: 0, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonContent, { ...contentProps }) }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonContent, { ...contentProps }),
        isLoading && spinnerPlacement === "end" && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--end",
            label: loadingText,
            placement: "end",
            spacing: iconSpacing,
            children: spinner
          }
        )
      ]
    }
  );
});
Button.displayName = "Button";
function ButtonContent(props) {
  const { leftIcon, rightIcon, children, iconSpacing } = props;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    leftIcon && /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonIcon, { marginEnd: iconSpacing, children: leftIcon }),
    children,
    rightIcon && /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonIcon, { marginStart: iconSpacing, children: rightIcon })
  ] });
}



;// CONCATENATED MODULE: ./src/pages/index.js
const Boton=()=>{return/*#__PURE__*/index_js_.createElement(Flex,{align:"center",justify:"center"},/*#__PURE__*/index_js_.createElement(Button,{m:2},"Todos"),/*#__PURE__*/index_js_.createElement(Button,{m:2},"Completas"),/*#__PURE__*/index_js_.createElement(Button,{m:2},"Incompletas"));};/* harmony default export */ const pages = (Boton);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map
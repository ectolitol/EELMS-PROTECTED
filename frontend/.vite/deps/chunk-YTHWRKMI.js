import {
  TableContext_default
} from "./chunk-VGVXP4I7.js";
import {
  memoTheme
} from "./chunk-KRGTNDB7.js";
import {
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  styled_default2 as styled_default,
  useDefaultProps
} from "./chunk-WJU3VP3C.js";
import {
  require_jsx_runtime
} from "./chunk-GGADGINT.js";
import {
  clsx_default
} from "./chunk-2KHBIA62.js";
import {
  require_prop_types
} from "./chunk-YBH2ELBD.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@mui/material/Table/Table.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/Table/tableClasses.js
function getTableUtilityClass(slot) {
  return generateUtilityClass("MuiTable", slot);
}
var tableClasses = generateUtilityClasses("MuiTable", ["root", "stickyHeader"]);
var tableClasses_default = tableClasses;

// node_modules/@mui/material/Table/Table.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ["root", stickyHeader && "stickyHeader"]
  };
  return composeClasses(slots, getTableUtilityClass, classes);
};
var TableRoot = styled_default("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
  }
})(memoTheme(({
  theme
}) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": {
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: (theme.vars || theme).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      borderCollapse: "separate"
    }
  }]
})));
var defaultComponent = "table";
var Table = React.forwardRef(function Table2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTable"
  });
  const {
    className,
    component = defaultComponent,
    padding = "normal",
    size = "medium",
    stickyHeader = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    padding,
    size,
    stickyHeader
  };
  const classes = useUtilityClasses(ownerState);
  const table = React.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return (0, import_jsx_runtime.jsx)(TableContext_default.Provider, {
    value: table,
    children: (0, import_jsx_runtime.jsx)(TableRoot, {
      as: component,
      role: component === defaultComponent ? null : "table",
      ref,
      className: clsx_default(classes.root, className),
      ownerState,
      ...other
    })
  });
});
true ? Table.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * Allows TableCells to inherit padding of the Table.
   * @default 'normal'
   */
  padding: import_prop_types.default.oneOf(["checkbox", "none", "normal"]),
  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["medium", "small"]), import_prop_types.default.string]),
  /**
   * Set the header sticky.
   * @default false
   */
  stickyHeader: import_prop_types.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Table_default = Table;

export {
  getTableUtilityClass,
  tableClasses_default,
  Table_default
};
//# sourceMappingURL=chunk-YTHWRKMI.js.map
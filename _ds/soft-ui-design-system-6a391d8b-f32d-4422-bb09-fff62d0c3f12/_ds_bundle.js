/* @ds-bundle: {"format":4,"namespace":"SoftUIDesignSystem_6a391d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"IconWell","sourcePath":"components/core/IconWell.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"418540ab1bb4","components/core/Button.jsx":"588b2f38f5fe","components/core/Card.jsx":"a04658538b7e","components/core/Icon.jsx":"26edfe4d9e9a","components/core/IconButton.jsx":"bc24fc09bf4f","components/core/IconWell.jsx":"6f32dd09febf","components/core/Tag.jsx":"bbf207572e5f","components/feedback/Dialog.jsx":"3e8a99fccad7","components/feedback/Progress.jsx":"62c1f3514a65","components/feedback/Toast.jsx":"54bab3d851b8","components/feedback/Tooltip.jsx":"b699a2e79e39","components/forms/Checkbox.jsx":"c0651db9bfa2","components/forms/Input.jsx":"feb0a9a1e6bb","components/forms/Radio.jsx":"393ae7711921","components/forms/Select.jsx":"ce618c540947","components/forms/Slider.jsx":"458ab04ba7cd","components/forms/Switch.jsx":"ac1e8f318be4","components/forms/Textarea.jsx":"b72a330156a4","components/navigation/NavItem.jsx":"bfb1843059a0","components/navigation/Tabs.jsx":"138431120211","ui_kits/app/AppShell.jsx":"fcb3fa5cbf9c","ui_kits/app/Dashboard.jsx":"f79202d565a7","ui_kits/app/SettingsScreen.jsx":"490b42ee3801","ui_kits/app/StudioScreen.jsx":"704676d068a3","ui_kits/marketing/Features.jsx":"36cac3a5db22","ui_kits/marketing/Hero.jsx":"056799959a43","ui_kits/marketing/Pricing.jsx":"74bdddf2b170","ui_kits/marketing/SiteHeader.jsx":"ec68c163b6b2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SoftUIDesignSystem_6a391d = window.SoftUIDesignSystem_6a391d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small extruded pill for counts and statuses. */
function Badge({
  tone = "neutral",
  depth = "raised",
  style,
  children,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--surface)",
      fg: "var(--text-muted)"
    },
    accent: {
      bg: "var(--accent)",
      fg: "var(--text-on-accent)"
    },
    secondary: {
      bg: "var(--accent-secondary)",
      fg: "#fff"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 24,
      height: 24,
      padding: "0 10px",
      borderRadius: "var(--radius-full)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.01em",
      boxShadow: depth === "inset" ? "var(--shadow-inset-sm)" : tone === "neutral" ? "var(--shadow-extruded-sm)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 40,
    padding: "0 18px",
    font: "var(--text-sm)",
    radius: "var(--radius-inner)"
  },
  md: {
    height: 48,
    padding: "0 26px",
    font: "var(--text-base)",
    radius: "var(--radius-base)"
  },
  lg: {
    height: 56,
    padding: "0 34px",
    font: "var(--text-lg)",
    radius: "var(--radius-base)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const isPrimary = variant === "primary";
  const isGhost = variant === "ghost";
  let shadow;
  if (isGhost) shadow = press ? "var(--shadow-inset-sm)" : hover ? "var(--shadow-extruded-sm)" : "none";else if (isPrimary) shadow = press ? "var(--shadow-inset-on-accent)" : hover ? "var(--shadow-extruded-hover)" : "var(--shadow-extruded)";else shadow = press ? "var(--shadow-inset-sm)" : hover ? "var(--shadow-extruded-hover)" : "var(--shadow-extruded)";
  const lift = disabled ? 0 : press ? "var(--press)" : hover ? "var(--lift-hover)" : "0px";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      width: fullWidth ? "100%" : "auto",
      minWidth: s.height,
      height: s.height,
      padding: s.padding,
      border: "none",
      borderRadius: s.radius,
      background: isPrimary ? "var(--accent)" : "var(--surface)",
      color: isPrimary ? "var(--text-on-accent)" : "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: s.font,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "0.01em",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      boxShadow: disabled ? "var(--shadow-extruded-sm)" : shadow,
      transform: `translateY(${lift})`,
      transition: "box-shadow var(--duration-base) ease-out, transform var(--duration-base) ease-out, background var(--duration-base) ease-out",
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The base surface. Extruded by default; `depth="inset"` carves a well out of the page. */
function Card({
  depth = "raised",
  padding = "var(--space-8)",
  radius = "var(--radius-container)",
  interactive = false,
  as = "div",
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const shadows = {
    raised: "var(--shadow-extruded)",
    flat: "var(--shadow-extruded-sm)",
    inset: "var(--shadow-inset)",
    "inset-deep": "var(--shadow-inset-deep)"
  };
  const base = shadows[depth] || shadows.raised;
  const lifted = depth === "inset" || depth === "inset-deep" ? base : "var(--shadow-extruded-hover)";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: "var(--surface-card)",
      borderRadius: radius,
      padding,
      boxShadow: interactive && hover ? lifted : base,
      transform: `translateY(${interactive && hover ? "var(--lift-card-hover)" : "0px"})`,
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Thin wrapper over the Lucide static icon set, tinted with currentColor via CSS mask. */
function Icon({
  name = "circle",
  size = 20,
  strokeColor,
  style,
  ...rest
}) {
  const url = `https://unpkg.com/lucide-static@0.454.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      background: strokeColor || "currentColor",
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 40,
  md: 48,
  lg: 56
};
function IconButton({
  icon = "plus",
  label,
  size = "md",
  variant = "raised",
  active = false,
  disabled = false,
  round = true,
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;
  const isWell = variant === "well";
  let shadow;
  if (isWell) shadow = press ? "var(--shadow-inset-deep)" : "var(--shadow-inset)";else if (active || press) shadow = "var(--shadow-inset-sm)";else shadow = hover ? "var(--shadow-extruded-hover)" : "var(--shadow-extruded-sm)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    "aria-pressed": active || undefined,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      border: "none",
      borderRadius: round ? "var(--radius-full)" : "var(--radius-base)",
      background: "var(--surface)",
      color: active ? "var(--accent)" : "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      boxShadow: shadow,
      transform: `translateY(${!isWell && hover && !press && !active ? "var(--lift-hover)" : "0px"})`,
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), children || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(dim * 0.42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/IconWell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A drilled-in well for icons — the signature nested-depth move. */
function IconWell({
  icon = "sparkles",
  size = 72,
  depth = "inset-deep",
  tone = "accent",
  iconSize,
  style,
  children,
  ...rest
}) {
  const colors = {
    accent: "var(--accent)",
    secondary: "var(--accent-secondary)",
    neutral: "var(--text-muted)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "none",
      borderRadius: size <= 48 ? "var(--radius-base)" : "var(--radius-md)",
      background: "var(--surface-well)",
      boxShadow: depth === "inset" ? "var(--shadow-inset)" : "var(--shadow-inset-deep)",
      color: colors[tone] || colors.accent,
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), children || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize || Math.round(size * 0.38)
  }));
}
Object.assign(__ds_scope, { IconWell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconWell.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Selectable label chip. Unselected chips sit in a shallow well; selected chips extrude. */
function Tag({
  selected = false,
  removable = false,
  onRemove,
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: onClick ? "button" : undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: 34,
      padding: "0 14px",
      borderRadius: "var(--radius-inner)",
      background: "var(--surface)",
      color: selected ? "var(--accent)" : "var(--text-muted)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: "var(--weight-medium)",
      cursor: onClick ? "pointer" : "default",
      boxShadow: selected ? "var(--shadow-inset-sm)" : hover ? "var(--shadow-extruded)" : "var(--shadow-extruded-sm)",
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: "inline-flex",
      cursor: "pointer",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal sheet: a heavily-extruded card floating over a soft scrim. */
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 480,
  children
}) {
  React.useEffect(() => {
    function esc(e) {
      if (e.key === "Escape" && onClose) onClose();
    }
    if (open) document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "rgba(163, 177, 198, 0.45)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative",
      width: "100%",
      maxWidth: width,
      padding: "var(--space-10)",
      borderRadius: "var(--radius-container)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-extruded-hover)"
    }
  }, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 20,
      right: 20,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      border: "none",
      borderRadius: "var(--radius-full)",
      background: "var(--surface)",
      color: "var(--text-muted)",
      cursor: "pointer",
      boxShadow: "var(--shadow-extruded-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 17
  })), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-2xl)",
      paddingRight: 48
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      color: "var(--text-muted)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end",
      marginTop: "var(--space-8)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Determinate progress. Carved track, accent fill; `variant="ring"` for compact stats. */
function Progress({
  value = 0,
  label,
  showValue = false,
  size = 12,
  variant = "bar",
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  if (variant === "ring") {
    const dim = size * 8;
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        position: "relative",
        width: dim,
        height: dim,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: "var(--radius-full)",
        background: "var(--surface)",
        boxShadow: "var(--shadow-inset)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: "var(--radius-full)",
        background: `conic-gradient(var(--accent) ${pct}%, transparent 0)`,
        opacity: 0.9,
        mask: "radial-gradient(circle, transparent 58%, #000 60%)",
        WebkitMask: "radial-gradient(circle, transparent 58%, #000 60%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: "22%",
        borderRadius: "var(--radius-full)",
        background: "var(--surface)",
        boxShadow: "var(--shadow-extruded-sm)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-bold)",
        fontSize: 14
      }
    }, showValue ? `${Math.round(pct)}%` : null));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "var(--space-2)",
      fontSize: "var(--text-sm)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-medium)"
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      height: size,
      borderRadius: "var(--radius-full)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-inset-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: "var(--radius-full)",
      background: "var(--accent)",
      opacity: 0.85,
      transition: "width var(--duration-slow) ease-out"
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Transient confirmation. Extruded pill-card; teal glyph for success, violet for info. */
function Toast({
  tone = "success",
  title,
  message,
  onDismiss,
  style,
  ...rest
}) {
  const map = {
    success: {
      icon: "check",
      tone: "secondary"
    },
    info: {
      icon: "info",
      tone: "accent"
    },
    warning: {
      icon: "triangle-alert",
      tone: "accent"
    }
  };
  const t = map[tone] || map.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      maxWidth: 420,
      padding: "var(--space-4) var(--space-5)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-extruded)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconWell, {
    icon: t.icon,
    size: 44,
    depth: "inset",
    tone: t.tone,
    iconSize: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-base)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      display: "inline-flex",
      width: 32,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "var(--radius-full)",
      background: "var(--surface)",
      color: "var(--text-muted)",
      cursor: "pointer",
      boxShadow: "var(--shadow-extruded-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover/focus label. Small extruded chip, 12px radius, appears above the trigger. */
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const offsets = {
    top: {
      bottom: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 10px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 10px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...offsets[placement],
      padding: "8px 14px",
      borderRadius: "var(--radius-inner)",
      background: "var(--surface-card)",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-extruded-sm)",
      opacity: open ? 1 : 0,
      visibility: open ? "visible" : "hidden",
      transition: "opacity var(--duration-base) ease-out",
      pointerEvents: "none",
      zIndex: 40
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked === undefined ? internal : checked;
  const [focus, setFocus] = React.useState(false);
  function toggle(e) {
    if (disabled) return;
    if (checked === undefined) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      minHeight: "var(--touch-min)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      flex: "none",
      borderRadius: "var(--radius-inner)",
      background: "var(--surface)",
      color: "var(--accent-secondary)",
      boxShadow: on ? "var(--shadow-extruded-sm)" : "var(--shadow-inset)",
      outline: focus ? "2px solid var(--focus-ring)" : "2px solid transparent",
      outlineOffset: 2,
      transition: "var(--transition-base)"
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 17
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  icon = null,
  type = "text",
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  invalid = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || `in-${Math.random().toString(36).slice(2, 8)}`, [id]);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: "var(--space-2)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: 52,
      padding: "0 20px",
      borderRadius: "var(--radius-base)",
      background: "var(--surface)",
      boxShadow: focus ? "var(--shadow-inset-deep)" : "var(--shadow-inset)",
      outline: focus ? "2px solid var(--focus-ring)" : invalid ? "2px solid var(--accent-secondary)" : "2px solid transparent",
      outlineOffset: 2,
      opacity: disabled ? 0.5 : 1,
      transition: "box-shadow var(--duration-base) ease-out, outline-color var(--duration-fast) ease-out"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      color: focus ? "var(--accent)" : "var(--text-muted)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)"
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked === undefined ? internal : checked;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      minHeight: "var(--touch-min)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: e => {
      if (checked === undefined) setInternal(true);
      onChange && onChange(e);
    },
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      flex: "none",
      borderRadius: "var(--radius-full)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-inset)",
      outline: focus ? "2px solid var(--focus-ring)" : "2px solid transparent",
      outlineOffset: 2,
      transition: "var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "var(--radius-full)",
      background: "var(--accent)",
      boxShadow: "var(--shadow-extruded-sm)",
      transform: `scale(${on ? 1 : 0})`,
      transition: "transform var(--duration-base) ease-out"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || `se-${Math.random().toString(36).slice(2, 8)}`, [id]);
  const items = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: "var(--space-2)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: 52,
      borderRadius: "var(--radius-base)",
      background: "var(--surface)",
      boxShadow: focus ? "var(--shadow-inset-deep)" : "var(--shadow-inset)",
      outline: focus ? "2px solid var(--focus-ring)" : "2px solid transparent",
      outlineOffset: 2,
      opacity: disabled ? 0.5 : 1,
      transition: "box-shadow var(--duration-base) ease-out"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      flex: 1,
      height: "100%",
      padding: "0 46px 0 20px",
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), items.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: "absolute",
      right: 18,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Range control: a carved track with an extruded knob. */
function Slider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = 50,
  onChange,
  showValue = true,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const v = value === undefined ? internal : value;
  const [focus, setFocus] = React.useState(false);
  const pct = (v - min) / (max - min) * 100;
  function handle(e) {
    const next = Number(e.target.value);
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "block",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "var(--space-3)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)"
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, v)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      display: "flex",
      alignItems: "center",
      outline: focus ? "2px solid var(--focus-ring)" : "2px solid transparent",
      outlineOffset: 6,
      borderRadius: "var(--radius-full)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 12,
      borderRadius: "var(--radius-full)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-inset-sm)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: `${pct}%`,
      height: 12,
      borderRadius: "var(--radius-full)",
      background: "var(--accent)",
      opacity: 0.85,
      transition: "width var(--duration-fast) linear"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - 14px)`,
      width: 28,
      height: 28,
      borderRadius: "var(--radius-full)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-extruded-sm)",
      transition: "left var(--duration-fast) linear",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "range",
    min: min,
    max: max,
    step: step,
    value: v,
    onChange: handle,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "relative",
      width: "100%",
      height: 28,
      margin: 0,
      opacity: 0,
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest))));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked === undefined ? internal : checked;
  const [focus, setFocus] = React.useState(false);
  function toggle() {
    if (disabled) return;
    const next = !on;
    if (checked === undefined) setInternal(next);
    onChange && onChange(next);
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      minHeight: "var(--touch-min)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    "aria-label": label,
    disabled: disabled,
    onClick: toggle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "relative",
      width: 64,
      height: 34,
      flex: "none",
      padding: 4,
      border: "none",
      borderRadius: "var(--radius-full)",
      background: "var(--surface)",
      cursor: "inherit",
      boxShadow: "var(--shadow-inset)",
      outline: focus ? "2px solid var(--focus-ring)" : "2px solid transparent",
      outlineOffset: 2,
      transition: "var(--transition-base)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      left: on ? 34 : 4,
      width: 26,
      height: 26,
      borderRadius: "var(--radius-full)",
      background: on ? "var(--accent)" : "var(--surface)",
      boxShadow: "var(--shadow-extruded-sm)",
      transition: "left var(--duration-base) ease-out, background var(--duration-base) ease-out"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  rows = 4,
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || `ta-${Math.random().toString(36).slice(2, 8)}`, [id]);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginBottom: "var(--space-2)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: "block",
      width: "100%",
      padding: "16px 20px",
      border: "none",
      borderRadius: "var(--radius-base)",
      background: "var(--surface)",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)",
      resize: "vertical",
      boxShadow: focus ? "var(--shadow-inset-deep)" : "var(--shadow-inset)",
      outline: focus ? "2px solid var(--focus-ring)" : "2px solid transparent",
      outlineOffset: 2,
      opacity: disabled ? 0.5 : 1,
      transition: "box-shadow var(--duration-base) ease-out"
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vertical nav row for app sidebars: active rows sit in a well with an accent glyph. */
function NavItem({
  icon = "circle",
  label,
  active = false,
  badge,
  collapsed = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-current": active ? "page" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      width: "100%",
      height: 52,
      padding: collapsed ? 0 : "0 18px",
      justifyContent: collapsed ? "center" : "flex-start",
      border: "none",
      borderRadius: "var(--radius-base)",
      background: "var(--surface)",
      color: active ? "var(--accent)" : "var(--text-muted)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      fontWeight: active ? "var(--weight-medium)" : "var(--weight-regular)",
      textAlign: "left",
      cursor: "pointer",
      boxShadow: active ? "var(--shadow-inset)" : hover ? "var(--shadow-extruded-sm)" : "none",
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), !collapsed && badge);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Segmented control: the whole strip is a well, the active tab extrudes out of it. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  fullWidth = false,
  style,
  ...rest
}) {
  const items = tabs.map(t => typeof t === "string" ? {
    value: t,
    label: t
  } : t);
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = value === undefined ? internal : value;
  function pick(v) {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      width: fullWidth ? "100%" : "auto",
      gap: "var(--space-2)",
      padding: 6,
      borderRadius: "var(--radius-base)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-inset)",
      ...style
    }
  }, rest), items.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(t.value),
      style: {
        flex: fullWidth ? 1 : "none",
        height: 40,
        padding: "0 20px",
        border: "none",
        borderRadius: "var(--radius-inner)",
        background: "var(--surface)",
        color: on ? "var(--accent)" : "var(--text-muted)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        cursor: "pointer",
        boxShadow: on ? "var(--shadow-extruded-sm)" : "none",
        transition: "var(--transition-base)"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
const DSA = () => window.SoftUIDesignSystem_6a391d;
const APP_NAV = [{
  icon: "layout-dashboard",
  label: "Overview",
  view: "overview"
}, {
  icon: "audio-lines",
  label: "Studio",
  view: "studio"
}, {
  icon: "inbox",
  label: "Inbox",
  view: "inbox",
  count: 4
}, {
  icon: "settings",
  label: "Settings",
  view: "settings"
}];
function AppSidebar({
  view,
  setView,
  collapsed,
  setCollapsed
}) {
  const {
    NavItem,
    Badge,
    IconButton,
    IconWell
  } = DSA();
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: collapsed ? 96 : 268,
      flex: "none",
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      transition: "width var(--duration-base) ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      justifyContent: collapsed ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement(IconWell, {
    icon: "box",
    size: 44,
    depth: "inset",
    iconSize: 20
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      fontSize: 19
    }
  }, "Soft UI")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, APP_NAV.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.view,
    icon: n.icon,
    label: n.label,
    collapsed: collapsed,
    active: view === n.view,
    onClick: () => setView(n.view),
    badge: n.count ? /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, n.count) : undefined
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      justifyContent: collapsed ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: collapsed ? "chevrons-right" : "chevrons-left",
    label: "Toggle sidebar",
    onClick: () => setCollapsed(!collapsed)
  })));
}
function AppTopbar({
  title,
  subtitle,
  onNew
}) {
  const {
    Input,
    IconButton,
    Button,
    Icon,
    Tooltip
  } = DSA();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      padding: "var(--space-8) var(--space-10) var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-4xl)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search surfaces",
    style: {
      width: 260
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Notifications",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications"
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: onNew,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 17
    })
  }, "New surface"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-full)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-extruded-sm)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, "AM"));
}
Object.assign(window, {
  AppSidebar,
  AppTopbar,
  APP_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
const DSD = () => window.SoftUIDesignSystem_6a391d;
const ROWS = [{
  name: "Hero surface",
  owner: "Ada M.",
  depth: "extruded",
  progress: 92,
  tone: "secondary"
}, {
  name: "Settings panel",
  owner: "Jae K.",
  depth: "inset-deep",
  progress: 64,
  tone: "accent"
}, {
  name: "Player controls",
  owner: "Ruth O.",
  depth: "extruded-sm",
  progress: 38,
  tone: "accent"
}, {
  name: "Onboarding sheet",
  owner: "Sam T.",
  depth: "inset",
  progress: 12,
  tone: "neutral"
}];
function Dashboard() {
  const {
    Card,
    IconWell,
    Progress,
    Badge,
    Tabs,
    Tag,
    Slider,
    Icon
  } = DSD();
  const [range, setRange] = React.useState("7 days");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-10) var(--space-10)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-6)"
    },
    className: "stat-grid"
  }, [{
    icon: "layers",
    label: "Surfaces",
    value: "128",
    delta: "+12"
  }, {
    icon: "waves",
    label: "Depth presets",
    value: "6",
    delta: "stable"
  }, {
    icon: "users",
    label: "Collaborators",
    value: "24",
    delta: "+3"
  }, {
    icon: "activity",
    label: "Renders today",
    value: "1,904",
    delta: "+18%"
  }].map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    interactive: true,
    padding: "var(--space-6)",
    radius: "var(--radius-md)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(IconWell, {
    icon: s.icon,
    size: 48,
    depth: "inset",
    iconSize: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, s.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-3xl)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, s.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, s.delta))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: "var(--space-8)",
      alignItems: "start"
    },
    className: "main-grid"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "Active surfaces"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["7 days", "30 days", "All"],
    value: range,
    onChange: setRange
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ROWS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 0.8fr 0.9fr 1fr",
      alignItems: "center",
      gap: 16,
      padding: "16px 20px",
      borderRadius: "var(--radius-base)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-inset-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconWell, {
    icon: "box",
    size: 34,
    depth: "inset",
    tone: "neutral",
    iconSize: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: "var(--text-sm)"
    }
  }, r.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, r.owner), /*#__PURE__*/React.createElement(Tag, {
    style: {
      justifySelf: "start"
    }
  }, r.depth), /*#__PURE__*/React.createElement(Progress, {
    value: r.progress,
    showValue: true,
    size: 10
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 72,
    variant: "ring",
    showValue: true,
    size: 12
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-lg)"
    }
  }, "Depth coverage"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "72% of components use tokenized shadows")), /*#__PURE__*/React.createElement(Badge, {
    tone: "secondary"
  }, "+6 this week")), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 18,
    style: {
      color: "var(--text-muted)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-lg)"
    }
  }, "Live shadow tuning")), /*#__PURE__*/React.createElement(Slider, {
    label: "Offset",
    min: 0,
    max: 24,
    defaultValue: 9
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Blur",
    min: 0,
    max: 40,
    defaultValue: 16
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Dark alpha",
    min: 0,
    max: 100,
    defaultValue: 60
  })))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/SettingsScreen.jsx
try { (() => {
const DSG = () => window.SoftUIDesignSystem_6a391d;
function SettingsScreen({
  onSaved
}) {
  const {
    Card,
    Input,
    Textarea,
    Select,
    Switch,
    Checkbox,
    Radio,
    Slider,
    Button,
    Tabs,
    IconWell,
    Icon
  } = DSG();
  const [tab, setTab] = React.useState("Profile");
  const [depth, setDepth] = React.useState("standard");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-10) var(--space-10)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Profile", "Surface", "Notifications"],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-8)",
      alignItems: "start"
    },
    className: "main-grid"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-10)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, tab === "Profile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "Profile"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    defaultValue: "Ada Marlowe",
    icon: "user"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    defaultValue: "ada@softui.studio",
    icon: "mail"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Role",
    options: ["Design engineer", "Product designer", "Front-end developer"]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Bio",
    rows: 3,
    defaultValue: "I mold interfaces out of cool grey."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Show my surfaces in the team gallery",
    defaultChecked: true
  })), tab === "Surface" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "Surface defaults"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [["shallow", "Shallow — 5px offset"], ["standard", "Standard — 9px offset"], ["deep", "Deep — 12px offset"]].map(([v, l]) => /*#__PURE__*/React.createElement(Radio, {
    key: v,
    name: "depth",
    label: l,
    checked: depth === v,
    onChange: () => setDepth(v)
  }))), /*#__PURE__*/React.createElement(Slider, {
    label: "Dark shadow alpha (%)",
    min: 0,
    max: 100,
    defaultValue: 60
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Light shadow alpha (%)",
    min: 0,
    max: 100,
    defaultValue: 50
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Snap radii to the 12 / 16 / 24 / 32 scale",
    defaultChecked: true
  })), tab === "Notifications" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "Notifications"), /*#__PURE__*/React.createElement(Switch, {
    label: "Nightly render summary",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Comment mentions",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Contrast regressions"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Digest cadence",
    options: ["Daily", "Weekly", "Never"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onSaved,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 17
    })
  }, "Save changes"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Discard"))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(IconWell, {
    icon: "eye",
    size: 48,
    depth: "inset",
    iconSize: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-lg)"
    }
  }, "Preview")), /*#__PURE__*/React.createElement(Card, {
    depth: "inset-deep",
    radius: "var(--radius-md)",
    padding: "var(--space-8)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: 62,
      borderRadius: "var(--radius-base)",
      background: "var(--surface)",
      boxShadow: depth === "shallow" ? "var(--shadow-extruded-sm)" : depth === "deep" ? "var(--shadow-extruded-hover)" : "var(--shadow-extruded)",
      transition: "var(--transition-base)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: 62,
      borderRadius: "var(--radius-base)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-inset)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, "Raised and carved treatments at the selected depth. Both use the same page color \u2014 only the shadows change."))));
}
Object.assign(window, {
  SettingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/StudioScreen.jsx
try { (() => {
const DSS = () => window.SoftUIDesignSystem_6a391d;
function StudioScreen() {
  const {
    Card,
    IconButton,
    Slider,
    Switch,
    Tag,
    IconWell,
    Progress,
    Tooltip,
    Badge
  } = DSS();
  const [playing, setPlaying] = React.useState(true);
  const [preset, setPreset] = React.useState("Ceramic");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-10) var(--space-10)",
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: "var(--space-8)",
      alignItems: "start"
    },
    className: "main-grid"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-10)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "Shadow pass \xB7 Hero surface"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, "Two opposing lights, 16px blur, 0.6 / 0.5 alpha")), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Rendering")), /*#__PURE__*/React.createElement(Card, {
    depth: "inset-deep",
    radius: "var(--radius-md)",
    padding: "var(--space-12)",
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 220,
      borderRadius: "50%",
      background: "var(--surface)",
      boxShadow: "var(--shadow-extruded)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      animation: playing ? "float 3s ease-in-out infinite" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      height: 150,
      borderRadius: "50%",
      boxShadow: "var(--shadow-inset-deep)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 66,
      height: 66,
      borderRadius: "50%",
      boxShadow: "var(--shadow-extruded-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "var(--accent)",
      boxShadow: "var(--shadow-extruded-sm)"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      marginTop: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Previous pass"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "skip-back",
    label: "Previous pass"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: playing ? "pause" : "play",
    label: playing ? "Pause" : "Play",
    size: "lg",
    onClick: () => setPlaying(!playing)
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Next pass"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "skip-forward",
    label: "Next pass"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Loop"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "repeat",
    label: "Loop",
    active: true
  })), /*#__PURE__*/React.createElement(Progress, {
    value: playing ? 46 : 46,
    style: {
      flex: 1,
      minWidth: 200
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "01:12 / 02:36"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-lg)"
    }
  }, "Material preset"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, ["Ceramic", "Matte", "Cool clay"].map(p => /*#__PURE__*/React.createElement(Tag, {
    key: p,
    selected: preset === p,
    onClick: () => setPreset(p)
  }, p))), /*#__PURE__*/React.createElement(Slider, {
    label: "Light angle",
    min: 0,
    max: 360,
    defaultValue: 315
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Softness",
    min: 0,
    max: 40,
    defaultValue: 16
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Mirror highlight",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Ambient float",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IconWell, {
    icon: "shield-check",
    size: 56,
    tone: "secondary",
    iconSize: 24
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-base)"
    }
  }, "Contrast check passed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "Body 7.5:1 \xB7 muted 4.6:1")))));
}
function InboxScreen() {
  const {
    Card,
    IconWell,
    Badge,
    Tabs,
    Button,
    Icon,
    Checkbox
  } = DSS();
  const [filter, setFilter] = React.useState("Unread");
  const items = [{
    from: "Jae K.",
    subject: "Depth review on Settings panel",
    time: "9:04",
    unread: true
  }, {
    from: "Ruth O.",
    subject: "Player knob feels 1px too proud",
    time: "8:21",
    unread: true
  }, {
    from: "Render bot",
    subject: "Nightly shadow pass complete",
    time: "Yest.",
    unread: false
  }, {
    from: "Sam T.",
    subject: "Onboarding sheet — inset or raised?",
    time: "Yest.",
    unread: false
  }];
  const shown = filter === "Unread" ? items.filter(i => i.unread) : items;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-10) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "Inbox"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Unread", "All"],
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, shown.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.subject,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 20px",
      borderRadius: "var(--radius-base)",
      background: "var(--surface)",
      boxShadow: i.unread ? "var(--shadow-extruded-sm)" : "var(--shadow-inset-sm)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, null), /*#__PURE__*/React.createElement(IconWell, {
    icon: "mail",
    size: 38,
    depth: "inset",
    tone: i.unread ? "accent" : "neutral",
    iconSize: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: i.unread ? 500 : 400
    }
  }, i.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, i.from)), i.unread && /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "new"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      width: 48,
      textAlign: "right"
    }
  }, i.time)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "archive",
      size: 17
    })
  }, "Archive read"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Mark all read"))));
}
Object.assign(window, {
  StudioScreen,
  InboxScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/StudioScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Features.jsx
try { (() => {
const DSF = () => window.SoftUIDesignSystem_6a391d;
const FEATURES = [{
  icon: "layers",
  title: "Same-material depth",
  body: "Cards, wells and knobs share the page color. Depth comes from two opposing shadows, never from a fill."
}, {
  icon: "sliders-horizontal",
  title: "Physical controls",
  body: "Sliders sit in carved tracks, toggles ride on raised knobs, buttons press 0.5px into the surface."
}, {
  icon: "shield-check",
  title: "Accessible by default",
  body: "7.5:1 body text, 4.6:1 muted text, mandatory 2px accent focus rings, 44px touch targets."
}];
function Features() {
  const {
    Card,
    IconWell
  } = DSF();
  return /*#__PURE__*/React.createElement("section", {
    id: "depth",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-20) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "feat-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-12)"
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.title,
    interactive: true,
    padding: "var(--space-10)"
  }, /*#__PURE__*/React.createElement(IconWell, {
    icon: f.icon,
    size: 76,
    iconSize: 30
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-2xl)",
      marginTop: "var(--space-6)"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, f.body)))));
}
function Showcase() {
  const {
    Card,
    Tabs,
    Switch,
    Slider,
    Input,
    Progress,
    Badge,
    IconButton,
    Tooltip
  } = DSF();
  const [view, setView] = React.useState("Controls");
  return /*#__PURE__*/React.createElement("section", {
    id: "components",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-12) var(--space-6) var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-12)",
    radius: "var(--radius-container)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)"
    }
  }, "Every state is a depth"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      color: "var(--text-muted)",
      maxWidth: "52ch",
      lineHeight: "var(--leading-relaxed)"
    }
  }, "Selection, focus and pressure are communicated by how far an element sits above or below the page \u2014 color stays out of it.")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Controls", "Inputs", "Feedback"],
    value: view,
    onChange: setView
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "var(--space-8)"
    }
  }, view === "Controls" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    depth: "inset",
    radius: "var(--radius-md)",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Shadow depth",
    min: 0,
    max: 24,
    defaultValue: 9
  })), /*#__PURE__*/React.createElement(Card, {
    depth: "inset",
    radius: "var(--radius-md)",
    padding: "var(--space-8)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Ambient float",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Reduced motion"
  })), /*#__PURE__*/React.createElement(Card, {
    depth: "inset",
    radius: "var(--radius-md)",
    padding: "var(--space-8)",
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Previous"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "skip-back",
    label: "Previous"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "play",
    label: "Play",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Next"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "skip-forward",
    label: "Next"
  })))), view === "Inputs" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    depth: "inset",
    radius: "var(--radius-md)",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    icon: "mail",
    placeholder: "you@studio.com"
  })), /*#__PURE__*/React.createElement(Card, {
    depth: "inset",
    radius: "var(--radius-md)",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Search",
    icon: "search",
    placeholder: "Find a token"
  })), /*#__PURE__*/React.createElement(Card, {
    depth: "inset",
    radius: "var(--radius-md)",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Depth preset",
    icon: "layers",
    defaultValue: "inset-deep"
  }))), view === "Feedback" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    depth: "inset",
    radius: "var(--radius-md)",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 68,
    label: "Storage",
    showValue: true
  })), /*#__PURE__*/React.createElement(Card, {
    depth: "inset",
    radius: "var(--radius-md)",
    padding: "var(--space-8)",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: 72,
    variant: "ring",
    showValue: true,
    size: 10
  })), /*#__PURE__*/React.createElement(Card, {
    depth: "inset",
    radius: "var(--radius-md)",
    padding: "var(--space-8)",
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "New"), /*#__PURE__*/React.createElement(Badge, {
    tone: "secondary"
  }, "Synced"), /*#__PURE__*/React.createElement(Badge, null, "12"))))));
}
Object.assign(window, {
  Features,
  Showcase
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
const DSH = () => window.SoftUIDesignSystem_6a391d;
function DepthOrb() {
  const [hover, setHover] = React.useState(false);
  const ring = (size, shadow, extra) => ({
    width: size,
    height: size,
    borderRadius: "50%",
    background: "var(--surface)",
    boxShadow: shadow,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform var(--duration-slow) ease-out, box-shadow var(--duration-slow) ease-out",
    ...extra
  });
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: ring(360, "var(--shadow-extruded)", {
      transform: hover ? "scale(1.03)" : "scale(1)",
      animation: "float 3s ease-in-out infinite"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: ring(258, "var(--shadow-inset-deep)")
  }, /*#__PURE__*/React.createElement("div", {
    style: ring(170, "var(--shadow-extruded-sm)", {
      transform: hover ? "rotate(180deg)" : "rotate(0deg)"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: ring(76, "var(--shadow-inset)")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "var(--accent)",
      boxShadow: "var(--shadow-extruded-sm)"
    }
  })))));
}
function Hero({
  onCta
}) {
  const {
    Button,
    Icon,
    Tag
  } = DSH();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "v2.0 \xB7 cool grey"), /*#__PURE__*/React.createElement(Tag, null, "WCAG AA")), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title",
    style: {
      fontSize: "var(--text-7xl)"
    }
  }, "Molded from", /*#__PURE__*/React.createElement("br", null), "one surface."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)",
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      maxWidth: "44ch"
    }
  }, "A tactile interface system where nothing floats. Every control is raised out of the page or pressed into it \u2014 shadows do the work color usually does."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginTop: "var(--space-10)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Start molding"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "book-open",
      size: 18
    })
  }, "Read the docs")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      marginTop: "var(--space-12)"
    }
  }, [["20", "components"], ["93", "tokens"], ["6", "shadow depths"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-3xl)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(DepthOrb, null))));
}
Object.assign(window, {
  Hero,
  DepthOrb
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
const DSP = () => window.SoftUIDesignSystem_6a391d;
const PLANS = [{
  name: "Solo",
  monthly: 0,
  yearly: 0,
  note: "For one designer, one surface.",
  features: ["20 components", "All depth tokens", "Community support"]
}, {
  name: "Studio",
  monthly: 24,
  yearly: 19,
  note: "For teams shipping tactile product.",
  features: ["Everything in Solo", "Figma library sync", "Depth preset editor", "Priority support"],
  featured: true
}, {
  name: "Foundry",
  monthly: 72,
  yearly: 58,
  note: "For orgs with many surfaces.",
  features: ["Everything in Studio", "Custom shadow physics", "Brand token pipelines", "Design review hours"]
}];
function Pricing({
  onCta
}) {
  const {
    Card,
    Button,
    Tabs,
    Icon,
    Badge,
    IconWell
  } = DSP();
  const [cycle, setCycle] = React.useState("Yearly");
  const yearly = cycle === "Yearly";
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-20) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 620,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-5xl)"
    }
  }, "Priced by surface area"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      color: "var(--text-muted)",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, "Every plan ships the full depth system. You pay for how many surfaces you mold."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Monthly", "Yearly"],
    value: cycle,
    onChange: setCycle
  }))), /*#__PURE__*/React.createElement("div", {
    className: "feat-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-12)",
      marginTop: "var(--space-16)",
      alignItems: "start"
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    padding: "var(--space-10)",
    style: p.featured ? {
      boxShadow: "var(--shadow-extruded-hover)"
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, p.name), p.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Popular")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-2)",
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, p.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-5xl)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, "$", yearly ? p.yearly : p.monthly), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, "/ seat / month")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, p.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement(IconWell, {
    icon: "check",
    size: 30,
    depth: "inset",
    tone: "secondary",
    iconSize: 14
  }), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: p.featured ? "primary" : "secondary",
    onClick: onCta,
    style: {
      marginTop: "var(--space-8)"
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, p.monthly === 0 ? "Start free" : "Choose " + p.name)))));
}
function CtaBand({
  onCta
}) {
  const {
    Card,
    Button,
    Input,
    Icon
  } = DSP();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-12) var(--space-6) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-16)",
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    },
    className: "cta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)"
    }
  }, "Get the depth tokens"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-3)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-relaxed)",
      maxWidth: "42ch"
    }
  }, "One CSS file, six shadow depths, two fonts. Drop it in and the whole page starts feeling like an object.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    icon: "mail",
    placeholder: "you@studio.com",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    }),
    style: {
      height: 52
    }
  }, "Send"))));
}
function SiteFooter() {
  const {
    Icon
  } = DSP();
  const cols = [["System", ["Depth", "Color", "Type", "Motion"]], ["Components", ["Core", "Forms", "Navigation", "Feedback"]], ["Resources", ["Docs", "Figma library", "Changelog", "Support"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "none",
      padding: "var(--space-16) var(--space-6) var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: "var(--space-12)"
    },
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Wordmark, null), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      maxWidth: "30ch",
      lineHeight: "var(--leading-relaxed)"
    }
  }, "A soft-UI system in cool grey. Raised, pressed, never flat."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: "var(--space-6)"
    }
  }, ["github", "twitter", "rss"].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "var(--radius-full)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-extruded-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 17
  }))))), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-4)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: "var(--text-body)",
      fontSize: "var(--text-sm)"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--space-12) auto 0",
      paddingTop: "var(--space-6)",
      boxShadow: "inset 0 1px 2px rgba(163,177,198,.5)",
      fontSize: 13,
      color: "var(--text-muted)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Soft UI. Sample content for the design system."), /*#__PURE__*/React.createElement("span", null, "Cool grey #E0E5EC")));
}
Object.assign(window, {
  Pricing,
  CtaBand,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteHeader.jsx
try { (() => {
const DS = () => window.SoftUIDesignSystem_6a391d;
function Wordmark({
  size = 22
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 11,
      background: "var(--surface)",
      boxShadow: "var(--shadow-inset-deep)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      fontSize: size
    }
  }, "Soft UI"));
}
function SiteHeader({
  onCta
}) {
  const {
    Button,
    IconButton
  } = DS();
  const [open, setOpen] = React.useState(false);
  const links = ["Depth", "Components", "Pricing", "Docs"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(224,229,236,0.78)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px var(--space-6)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    className: "desk-nav",
    style: {
      display: "flex",
      gap: 4,
      marginLeft: "auto"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.toLowerCase(),
    style: {
      padding: "10px 16px",
      borderRadius: "var(--radius-inner)",
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "desk-nav",
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onCta
  }, "Get started")), /*#__PURE__*/React.createElement("span", {
    className: "mob-nav",
    style: {
      display: "none",
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: open ? "x" : "menu",
    label: "Menu",
    onClick: () => setOpen(!open)
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "mob-nav",
    style: {
      display: "block",
      margin: "0 var(--space-6) var(--space-4)",
      padding: "var(--space-4)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-extruded)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.toLowerCase(),
    onClick: () => setOpen(false),
    style: {
      display: "block",
      padding: "14px 12px",
      color: "var(--text-body)",
      fontWeight: 500
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "sm",
    onClick: onCta
  }, "Get started"))));
}
Object.assign(window, {
  SiteHeader,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.IconWell = __ds_scope.IconWell;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

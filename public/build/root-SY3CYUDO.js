import {
  BsCalendarWeekFill,
  FaCalendarDay,
  FaCalendarDays,
  FaHome,
  MdAddBox,
  SiLivejournal
} from "/build/_shared/chunk-4SKMFLK6.js";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-LXLRMHZ5.js";
import "/build/_shared/chunk-56LDNGDG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZPJWMHOQ.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import "/build/_shared/chunk-2Q7FBYOG.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header.tsx"
  );
  import.meta.hot.lastModified = "1748455408028.455";
}
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-col items-center gap-2 pt-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "leading text-6xl font-extrabold bg-linear-[90deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48] text-transparent bg-clip-text", children: "Habitualize" }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-lg text-gray-700 dark:text-gray-300", children: "Track your habits at a colourful glance!" }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1748455391200.4583";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "sticky bottom-0 w-full bg-linear-[270deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "flex items-center justify-center gap-4 p-6 dark:border-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-none flex items-center gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FaHome, {}, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 34,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/log", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SiLivejournal, {}, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 39,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/day", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FaCalendarDay, {}, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 44,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/week", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsCalendarWeekFill, {}, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 49,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/month", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FaCalendarDays, {}, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 54,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/add", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MdAddBox, {}, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c3 = Layout;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_c22 = App;
var _c3;
var _c22;
$RefreshReg$(_c3, "Layout");
$RefreshReg$(_c22, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  App as default,
  links
};
//# sourceMappingURL=/build/root-SY3CYUDO.js.map

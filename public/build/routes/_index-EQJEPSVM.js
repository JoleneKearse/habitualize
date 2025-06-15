import {
  BsCalendarWeekFill,
  FaCalendarDay,
  FaCalendarDays,
  MdAddBox,
  SiLivejournal
} from "/build/_shared/chunk-4SKMFLK6.js";
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

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1748456625624.1084";
}
var meta = () => {
  return [{
    title: "Habitualize"
  }, {
    name: "description",
    content: "Track your habits at a colourful glance!"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center gap-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-col items-center justify-center gap-4 px-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-4 text-3xl font-bold bg-linear-[90deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48] text-transparent bg-clip-text opacity-85", children: "How does it work?" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "list-none space-y-10 text-green-700 dark:text-green-300 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2 opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "Add" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MdAddBox, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 43,
          columnNumber: 54
        }, this),
        " your habit and pick a pretty color."
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2 opacity-80", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "Mark down" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiLivejournal, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 47,
          columnNumber: 60
        }, this),
        " ",
        "which habits you complete."
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2 flex-wrap", children: [
        "View all your awesome habitualized habits in colourful",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "daily" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaCalendarDay, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this),
        ", ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "weekly" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 53,
          columnNumber: 34
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsCalendarWeekFill, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        ", or",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "monthly" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaCalendarDays, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        " views."
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-EQJEPSVM.js.map

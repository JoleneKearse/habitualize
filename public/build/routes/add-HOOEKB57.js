import {
  Form
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

// app/routes/add.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/add.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/add.tsx"
  );
  import.meta.hot.lastModified = "1748465540133.624";
}
function AddHabit() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-col items-center justify-center gap-2 px-2 h-screen -mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-4 text-3xl font-bold bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626] text-transparent bg-clip-text opacity-85", children: "Add a habit" }, void 0, false, {
      fileName: "app/routes/add.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "add-form", method: "post", className: "flex flex-col items-center justify-center gap-8 text-blue-500 font-bold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "newHabit", children: "Habit" }, void 0, false, {
        fileName: "app/routes/add.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "newHabit", id: "newHabit", className: "bg-gray-200 dark:bg-gray-700 p-2 rounded-md" }, void 0, false, {
        fileName: "app/routes/add.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "color", children: "Color" }, void 0, false, {
        fileName: "app/routes/add.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "color", name: "color", id: "color", className: "rounded-3xl border-0" }, void 0, false, {
        fileName: "app/routes/add.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "px-6 py-2 bg-linear-[90deg,#dc2626,#ea580c,#eab308,#16a34a,#0284c7,#7c3aed,#c026d3,#e11d48] text-gray-50 text-4xl rounded-2xl hover:bg-linear-[90deg,#e11d48,#c026d3,#7c3aed,#0284c7,#16a34a,#eab308,#ea580c,#dc2626]", children: "Habitualize!" }, void 0, false, {
        fileName: "app/routes/add.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/add.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/add.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c = AddHabit;
var _c;
$RefreshReg$(_c, "AddHabit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddHabit as default
};
//# sourceMappingURL=/build/routes/add-HOOEKB57.js.map

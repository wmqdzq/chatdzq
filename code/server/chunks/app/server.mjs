import { version, ref, h, getCurrentInstance, inject, onUnmounted, shallowRef, computed, defineComponent, unref, Suspense, nextTick, Transition, provide, reactive, createElementBlock, useSSRContext, resolveComponent, isReadonly, watch, Fragment as Fragment$1, withCtx, openBlock, createBlock, renderSlot, createCommentVNode, createVNode, mergeProps, toDisplayString as toDisplayString$1, createTextVNode, withDirectives, vModelText, renderList, vModelCheckbox, createApp, effectScope, markRaw, isRef, isReactive, toRaw, toRef, defineAsyncComponent, onErrorCaptured, onServerPrefetch, getCurrentScope, onScopeDispose, toRefs, Text } from 'vue';
import { $fetch } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import destr from 'destr';
import { hasProtocol, isEqual as isEqual$1, parseURL, joinURL } from 'ufo';
import { createError as createError$1, appendHeader, sendRedirect } from 'h3';
import { useHead as useHead$1, createHead as createHead$1 } from '@unhead/vue';
import { renderDOMHead, debouncedRenderDOMHead } from '@unhead/dom';
import { renderSSRHead } from '@unhead/ssr';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, useRouter as useRouter$1 } from 'vue-router';
import { parse as parse$1, serialize } from 'cookie-es';
import { isEqual } from 'ohash';
import { CompileErrorCodes, createCompileError } from '@intlify/message-compiler';
import ipkg from 'view-ui-plus';
import axios$1 from 'axios';
import CryptoJs from 'crypto-js';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import vant from 'vant';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSuspense } from 'vue/server-renderer';
import { defu } from 'defu';
import QrcodeVue from 'qrcode.vue';
import { u as useRuntimeConfig$1 } from '../nitro/config.mjs';
import 'scule';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const isVue2 = false;
/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject$1(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign: assign$2 } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign$2(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$2($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign$2({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$2({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign$2(store, setupStore);
    assign$2(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign$2($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign$2(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || currentInstance && inject(piniaSymbol, null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestHeaders(include) {
  var _a;
  const headers = ((_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event.node.req.headers) ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function setResponseStatus(code2, message) {
  const event = useRequestEvent();
  if (event) {
    event.node.res.statusCode = code2;
    if (message) {
      event.node.res.statusMessage = message;
    }
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      if (isProcessingMiddleware() && !isExternal) {
        setResponseStatus((options == null ? void 0 : options.redirectCode) || 302);
        return to;
      }
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function createHead(initHeadObject) {
  const unhead = createHead$1();
  const legacyHead = {
    unhead,
    install(app) {
      if (version.startsWith("3")) {
        app.config.globalProperties.$head = unhead;
        app.provide("usehead", unhead);
      }
    },
    use(plugin) {
      unhead.use(plugin);
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options) {
      return unhead.push(input, options);
    },
    addEntry(input, options) {
      return unhead.push(input, options);
    },
    addHeadObjs(input, options) {
      return unhead.push(input, options);
    },
    addReactiveEntry(input, options) {
      const api = useHead$1(input, options);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document2, force) {
      if (force)
        renderDOMHead(unhead, { document: document2 });
      else
        debouncedRenderDOMHead(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document: document2 });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}
version.startsWith("2.");
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse$1(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$2 = defineNuxtLink({ componentName: "NuxtLink" });
function isObject$1(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject$1(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject$1(value) && isObject$1(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const inlineConfig = {};
defuFn(inlineConfig);
const plugin_vue3_A0OWXRrUgq = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const components = {};
const components_plugin_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [{ "type": "text/javascript", "src": "https://gosspublic.alicdn.com/aliyun-oss-sdk-6.18.0.min.js" }, { "type": "text/javascript", "src": "https://hz-oss.chatdzq.com/file/common/static-web/68d4bfff-7b72-497a-924b-7e4d91def2cd.js" }, { "type": "text/javascript", "src": "https://res2.wx.qq.com/open/js/jweixin-1.6.0.js" }], "noscript": [], "title": "" };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const vueuse_head_plugin_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.push(appHead);
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = useHead$1;
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const meta = await renderSSRHead(head.unhead);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        // resolves naming difference with NuxtMeta and @vueuse/head
        bodyScripts: meta.bodyTags
      };
    };
  }
});
const __nuxt_page_meta$1a = {
  layout: "workbench"
};
const __nuxt_page_meta$19 = {
  layout: "workbench"
};
const __nuxt_page_meta$18 = {
  layout: "workbench"
};
const __nuxt_page_meta$17 = {
  layout: "workbench"
};
const __nuxt_page_meta$16 = {
  layout: "workbench"
};
const __nuxt_page_meta$15 = {
  layout: "workbench"
};
const __nuxt_page_meta$14 = {
  layout: "login"
};
const __nuxt_page_meta$13 = {
  layout: "workbench"
};
const __nuxt_page_meta$12 = {};
const __nuxt_page_meta$11 = {};
const __nuxt_page_meta$10 = {
  layout: "detail",
  title: "AI写作"
};
const __nuxt_page_meta$$ = {
  layout: "workbench"
};
const __nuxt_page_meta$_ = {
  layout: "workbench"
};
const __nuxt_page_meta$Z = {};
const __nuxt_page_meta$Y = {
  layout: "workbench"
};
const __nuxt_page_meta$X = {
  layout: "workbench"
};
const __nuxt_page_meta$W = {
  layout: "detail",
  title: "智能体对话"
};
const __nuxt_page_meta$V = {
  layout: "backstage"
};
const __nuxt_page_meta$U = {
  layout: "backstage"
};
const __nuxt_page_meta$T = {
  layout: "backstage"
};
const __nuxt_page_meta$S = {
  layout: "backstage"
};
const __nuxt_page_meta$R = {
  layout: "backstage"
};
const __nuxt_page_meta$Q = {
  layout: "backstage"
};
const __nuxt_page_meta$P = {
  layout: "login"
};
const __nuxt_page_meta$O = {
  layout: "backstage"
};
const __nuxt_page_meta$N = {
  layout: "login"
};
const __nuxt_page_meta$M = {};
const __nuxt_page_meta$L = {};
const __nuxt_page_meta$K = {
  layout: "login"
};
const __nuxt_page_meta$J = {
  layout: "workbench"
};
const __nuxt_page_meta$I = {
  layout: "workbench"
};
const __nuxt_page_meta$H = {
  layout: "workbench"
};
const __nuxt_page_meta$G = {};
const __nuxt_page_meta$F = {};
const __nuxt_page_meta$E = {};
const __nuxt_page_meta$D = {};
const __nuxt_page_meta$C = {};
const __nuxt_page_meta$B = {};
const __nuxt_page_meta$A = {
  layout: "workbench"
};
const __nuxt_page_meta$z = {
  layout: "brain"
};
const __nuxt_page_meta$y = {};
const __nuxt_page_meta$x = {};
const __nuxt_page_meta$w = {};
const __nuxt_page_meta$v = {};
const __nuxt_page_meta$u = {};
const __nuxt_page_meta$t = {
  layout: "workbench"
};
const __nuxt_page_meta$s = {
  layout: "workbench"
};
const __nuxt_page_meta$r = {
  layout: "workbench"
};
const __nuxt_page_meta$q = {
  layout: "workbench"
};
const __nuxt_page_meta$p = {
  layout: "workbench"
};
const __nuxt_page_meta$o = {};
const __nuxt_page_meta$n = {};
const __nuxt_page_meta$m = {};
const __nuxt_page_meta$l = {
  layout: "login"
};
const __nuxt_page_meta$k = {
  layout: "login"
};
const __nuxt_page_meta$j = {
  layout: "login"
};
const __nuxt_page_meta$i = {
  layout: "login"
};
const __nuxt_page_meta$h = {
  layout: "login"
};
const __nuxt_page_meta$g = {};
const __nuxt_page_meta$f = {};
const __nuxt_page_meta$e = {};
const __nuxt_page_meta$d = {};
const __nuxt_page_meta$c = {};
const __nuxt_page_meta$b = {
  layout: "login"
};
const __nuxt_page_meta$a = {
  layout: "login"
};
const __nuxt_page_meta$9 = {};
const __nuxt_page_meta$8 = {};
const __nuxt_page_meta$7 = {};
const __nuxt_page_meta$6 = {
  layout: "login"
};
const __nuxt_page_meta$5 = {
  layout: "login"
};
const __nuxt_page_meta$4 = {
  layout: "login"
};
const __nuxt_page_meta$3 = {
  layout: "qrcode"
};
const __nuxt_page_meta$2 = {
  layout: "login"
};
const __nuxt_page_meta$1 = {};
const __nuxt_page_meta = {};
const _routes = [
  {
    name: (__nuxt_page_meta$1a == null ? void 0 : __nuxt_page_meta$1a.name) ?? "ai-agent-addAgent",
    path: (__nuxt_page_meta$1a == null ? void 0 : __nuxt_page_meta$1a.path) ?? "/ai/agent/addAgent",
    children: [],
    meta: __nuxt_page_meta$1a,
    alias: (__nuxt_page_meta$1a == null ? void 0 : __nuxt_page_meta$1a.alias) || [],
    redirect: (__nuxt_page_meta$1a == null ? void 0 : __nuxt_page_meta$1a.redirect) || void 0,
    component: () => import('./_nuxt/addAgent-9e4c0934.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$19 == null ? void 0 : __nuxt_page_meta$19.name) ?? "ai-agent",
    path: (__nuxt_page_meta$19 == null ? void 0 : __nuxt_page_meta$19.path) ?? "/ai/agent",
    children: [],
    meta: __nuxt_page_meta$19,
    alias: (__nuxt_page_meta$19 == null ? void 0 : __nuxt_page_meta$19.alias) || [],
    redirect: (__nuxt_page_meta$19 == null ? void 0 : __nuxt_page_meta$19.redirect) || void 0,
    component: () => import('./_nuxt/index-8187387f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$18 == null ? void 0 : __nuxt_page_meta$18.name) ?? "ai-agent-indexOld",
    path: (__nuxt_page_meta$18 == null ? void 0 : __nuxt_page_meta$18.path) ?? "/ai/agent/indexOld",
    children: [],
    meta: __nuxt_page_meta$18,
    alias: (__nuxt_page_meta$18 == null ? void 0 : __nuxt_page_meta$18.alias) || [],
    redirect: (__nuxt_page_meta$18 == null ? void 0 : __nuxt_page_meta$18.redirect) || void 0,
    component: () => import('./_nuxt/indexOld-5c4f0100.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$17 == null ? void 0 : __nuxt_page_meta$17.name) ?? "ai-app-hr",
    path: (__nuxt_page_meta$17 == null ? void 0 : __nuxt_page_meta$17.path) ?? "/ai/app/hr",
    children: [],
    meta: __nuxt_page_meta$17,
    alias: (__nuxt_page_meta$17 == null ? void 0 : __nuxt_page_meta$17.alias) || [],
    redirect: (__nuxt_page_meta$17 == null ? void 0 : __nuxt_page_meta$17.redirect) || void 0,
    component: () => import('./_nuxt/hr-08961b89.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$16 == null ? void 0 : __nuxt_page_meta$16.name) ?? "ai-app-often",
    path: (__nuxt_page_meta$16 == null ? void 0 : __nuxt_page_meta$16.path) ?? "/ai/app/often",
    children: [],
    meta: __nuxt_page_meta$16,
    alias: (__nuxt_page_meta$16 == null ? void 0 : __nuxt_page_meta$16.alias) || [],
    redirect: (__nuxt_page_meta$16 == null ? void 0 : __nuxt_page_meta$16.redirect) || void 0,
    component: () => import('./_nuxt/often-bc043a59.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$15 == null ? void 0 : __nuxt_page_meta$15.name) ?? "ai-app-tool",
    path: (__nuxt_page_meta$15 == null ? void 0 : __nuxt_page_meta$15.path) ?? "/ai/app/tool",
    children: [],
    meta: __nuxt_page_meta$15,
    alias: (__nuxt_page_meta$15 == null ? void 0 : __nuxt_page_meta$15.alias) || [],
    redirect: (__nuxt_page_meta$15 == null ? void 0 : __nuxt_page_meta$15.redirect) || void 0,
    component: () => import('./_nuxt/tool-51452fcf.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$14 == null ? void 0 : __nuxt_page_meta$14.name) ?? "ai-chat-creative",
    path: (__nuxt_page_meta$14 == null ? void 0 : __nuxt_page_meta$14.path) ?? "/ai/chat/creative",
    children: [],
    meta: __nuxt_page_meta$14,
    alias: (__nuxt_page_meta$14 == null ? void 0 : __nuxt_page_meta$14.alias) || [],
    redirect: (__nuxt_page_meta$14 == null ? void 0 : __nuxt_page_meta$14.redirect) || void 0,
    component: () => import('./_nuxt/creative-429c62db.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$13 == null ? void 0 : __nuxt_page_meta$13.name) ?? "ai-chat",
    path: (__nuxt_page_meta$13 == null ? void 0 : __nuxt_page_meta$13.path) ?? "/ai/chat",
    children: [],
    meta: __nuxt_page_meta$13,
    alias: (__nuxt_page_meta$13 == null ? void 0 : __nuxt_page_meta$13.alias) || [],
    redirect: (__nuxt_page_meta$13 == null ? void 0 : __nuxt_page_meta$13.redirect) || void 0,
    component: () => import('./_nuxt/index-d3493fb8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$12 == null ? void 0 : __nuxt_page_meta$12.name) ?? "ai-creative-components-highLevelWriting",
    path: (__nuxt_page_meta$12 == null ? void 0 : __nuxt_page_meta$12.path) ?? "/ai/creative/components/highLevelWriting",
    children: [],
    meta: __nuxt_page_meta$12,
    alias: (__nuxt_page_meta$12 == null ? void 0 : __nuxt_page_meta$12.alias) || [],
    redirect: (__nuxt_page_meta$12 == null ? void 0 : __nuxt_page_meta$12.redirect) || void 0,
    component: () => import('./_nuxt/highLevelWriting-bb7a7b5c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$11 == null ? void 0 : __nuxt_page_meta$11.name) ?? "ai-creative-components-templateCenter",
    path: (__nuxt_page_meta$11 == null ? void 0 : __nuxt_page_meta$11.path) ?? "/ai/creative/components/templateCenter",
    children: [],
    meta: __nuxt_page_meta$11,
    alias: (__nuxt_page_meta$11 == null ? void 0 : __nuxt_page_meta$11.alias) || [],
    redirect: (__nuxt_page_meta$11 == null ? void 0 : __nuxt_page_meta$11.redirect) || void 0,
    component: () => import('./_nuxt/templateCenter-00f815a7.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$10 == null ? void 0 : __nuxt_page_meta$10.name) ?? "ai-creative-detail",
    path: (__nuxt_page_meta$10 == null ? void 0 : __nuxt_page_meta$10.path) ?? "/ai/creative/detail",
    children: [],
    meta: __nuxt_page_meta$10,
    alias: (__nuxt_page_meta$10 == null ? void 0 : __nuxt_page_meta$10.alias) || [],
    redirect: (__nuxt_page_meta$10 == null ? void 0 : __nuxt_page_meta$10.redirect) || void 0,
    component: () => import('./_nuxt/detail-4383c2ea.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$$ == null ? void 0 : __nuxt_page_meta$$.name) ?? "ai-creative",
    path: (__nuxt_page_meta$$ == null ? void 0 : __nuxt_page_meta$$.path) ?? "/ai/creative",
    children: [],
    meta: __nuxt_page_meta$$,
    alias: (__nuxt_page_meta$$ == null ? void 0 : __nuxt_page_meta$$.alias) || [],
    redirect: (__nuxt_page_meta$$ == null ? void 0 : __nuxt_page_meta$$.redirect) || void 0,
    component: () => import('./_nuxt/index-07a7e40b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$_ == null ? void 0 : __nuxt_page_meta$_.name) ?? "ai-creative-index0805",
    path: (__nuxt_page_meta$_ == null ? void 0 : __nuxt_page_meta$_.path) ?? "/ai/creative/index0805",
    children: [],
    meta: __nuxt_page_meta$_,
    alias: (__nuxt_page_meta$_ == null ? void 0 : __nuxt_page_meta$_.alias) || [],
    redirect: (__nuxt_page_meta$_ == null ? void 0 : __nuxt_page_meta$_.redirect) || void 0,
    component: () => import('./_nuxt/index0805-ba4a99c1.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$Z == null ? void 0 : __nuxt_page_meta$Z.name) ?? "ai-creative-modal-upload",
    path: (__nuxt_page_meta$Z == null ? void 0 : __nuxt_page_meta$Z.path) ?? "/ai/creative/modal/upload",
    children: [],
    meta: __nuxt_page_meta$Z,
    alias: (__nuxt_page_meta$Z == null ? void 0 : __nuxt_page_meta$Z.alias) || [],
    redirect: (__nuxt_page_meta$Z == null ? void 0 : __nuxt_page_meta$Z.redirect) || void 0,
    component: () => import('./_nuxt/upload-3800cded.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$Y == null ? void 0 : __nuxt_page_meta$Y.name) ?? "ai-creative-record",
    path: (__nuxt_page_meta$Y == null ? void 0 : __nuxt_page_meta$Y.path) ?? "/ai/creative/record",
    children: [],
    meta: __nuxt_page_meta$Y,
    alias: (__nuxt_page_meta$Y == null ? void 0 : __nuxt_page_meta$Y.alias) || [],
    redirect: (__nuxt_page_meta$Y == null ? void 0 : __nuxt_page_meta$Y.redirect) || void 0,
    component: () => import('./_nuxt/record-e0e10ba4.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$X == null ? void 0 : __nuxt_page_meta$X.name) ?? "ai-employee",
    path: (__nuxt_page_meta$X == null ? void 0 : __nuxt_page_meta$X.path) ?? "/ai/employee",
    children: [],
    meta: __nuxt_page_meta$X,
    alias: (__nuxt_page_meta$X == null ? void 0 : __nuxt_page_meta$X.alias) || [],
    redirect: (__nuxt_page_meta$X == null ? void 0 : __nuxt_page_meta$X.redirect) || void 0,
    component: () => import('./_nuxt/index-1580c68f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$W == null ? void 0 : __nuxt_page_meta$W.name) ?? "ai-employee-info",
    path: (__nuxt_page_meta$W == null ? void 0 : __nuxt_page_meta$W.path) ?? "/ai/employee/info",
    children: [],
    meta: __nuxt_page_meta$W,
    alias: (__nuxt_page_meta$W == null ? void 0 : __nuxt_page_meta$W.alias) || [],
    redirect: (__nuxt_page_meta$W == null ? void 0 : __nuxt_page_meta$W.redirect) || void 0,
    component: () => import('./_nuxt/info-4d6fea00.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$V == null ? void 0 : __nuxt_page_meta$V.name) ?? "ai-enterprise-build-config",
    path: (__nuxt_page_meta$V == null ? void 0 : __nuxt_page_meta$V.path) ?? "/ai/enterprise/build/config",
    children: [],
    meta: __nuxt_page_meta$V,
    alias: (__nuxt_page_meta$V == null ? void 0 : __nuxt_page_meta$V.alias) || [],
    redirect: (__nuxt_page_meta$V == null ? void 0 : __nuxt_page_meta$V.redirect) || void 0,
    component: () => import('./_nuxt/index-e9f305a1.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$U == null ? void 0 : __nuxt_page_meta$U.name) ?? "ai-enterprise-build-domain",
    path: (__nuxt_page_meta$U == null ? void 0 : __nuxt_page_meta$U.path) ?? "/ai/enterprise/build/domain",
    children: [],
    meta: __nuxt_page_meta$U,
    alias: (__nuxt_page_meta$U == null ? void 0 : __nuxt_page_meta$U.alias) || [],
    redirect: (__nuxt_page_meta$U == null ? void 0 : __nuxt_page_meta$U.redirect) || void 0,
    component: () => import('./_nuxt/index-60eee77c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$T == null ? void 0 : __nuxt_page_meta$T.name) ?? "ai-enterprise-build-navigation",
    path: (__nuxt_page_meta$T == null ? void 0 : __nuxt_page_meta$T.path) ?? "/ai/enterprise/build/navigation",
    children: [],
    meta: __nuxt_page_meta$T,
    alias: (__nuxt_page_meta$T == null ? void 0 : __nuxt_page_meta$T.alias) || [],
    redirect: (__nuxt_page_meta$T == null ? void 0 : __nuxt_page_meta$T.redirect) || void 0,
    component: () => import('./_nuxt/index-bb39a5b0.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$S == null ? void 0 : __nuxt_page_meta$S.name) ?? "ai-enterprise-build-recommend",
    path: (__nuxt_page_meta$S == null ? void 0 : __nuxt_page_meta$S.path) ?? "/ai/enterprise/build/recommend",
    children: [],
    meta: __nuxt_page_meta$S,
    alias: (__nuxt_page_meta$S == null ? void 0 : __nuxt_page_meta$S.alias) || [],
    redirect: (__nuxt_page_meta$S == null ? void 0 : __nuxt_page_meta$S.redirect) || void 0,
    component: () => import('./_nuxt/index-bfefc2b3.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$R == null ? void 0 : __nuxt_page_meta$R.name) ?? "ai-enterprise-build-template",
    path: (__nuxt_page_meta$R == null ? void 0 : __nuxt_page_meta$R.path) ?? "/ai/enterprise/build/template",
    children: [],
    meta: __nuxt_page_meta$R,
    alias: (__nuxt_page_meta$R == null ? void 0 : __nuxt_page_meta$R.alias) || [],
    redirect: (__nuxt_page_meta$R == null ? void 0 : __nuxt_page_meta$R.redirect) || void 0,
    component: () => import('./_nuxt/index-620c7b81.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$Q == null ? void 0 : __nuxt_page_meta$Q.name) ?? "ai-enterprise-build-workbench-app",
    path: (__nuxt_page_meta$Q == null ? void 0 : __nuxt_page_meta$Q.path) ?? "/ai/enterprise/build/workbench/app",
    children: [],
    meta: __nuxt_page_meta$Q,
    alias: (__nuxt_page_meta$Q == null ? void 0 : __nuxt_page_meta$Q.alias) || [],
    redirect: (__nuxt_page_meta$Q == null ? void 0 : __nuxt_page_meta$Q.redirect) || void 0,
    component: () => import('./_nuxt/app-00852ae8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$P == null ? void 0 : __nuxt_page_meta$P.name) ?? "ai-enterprise-build-workbench-deploy",
    path: (__nuxt_page_meta$P == null ? void 0 : __nuxt_page_meta$P.path) ?? "/ai/enterprise/build/workbench/deploy",
    children: [],
    meta: __nuxt_page_meta$P,
    alias: (__nuxt_page_meta$P == null ? void 0 : __nuxt_page_meta$P.alias) || [],
    redirect: (__nuxt_page_meta$P == null ? void 0 : __nuxt_page_meta$P.redirect) || void 0,
    component: () => import('./_nuxt/deploy-e9157246.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$O == null ? void 0 : __nuxt_page_meta$O.name) ?? "ai-enterprise-build-workbench",
    path: (__nuxt_page_meta$O == null ? void 0 : __nuxt_page_meta$O.path) ?? "/ai/enterprise/build/workbench",
    children: [],
    meta: __nuxt_page_meta$O,
    alias: (__nuxt_page_meta$O == null ? void 0 : __nuxt_page_meta$O.alias) || [],
    redirect: (__nuxt_page_meta$O == null ? void 0 : __nuxt_page_meta$O.redirect) || void 0,
    component: () => import('./_nuxt/index-d359b972.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$N == null ? void 0 : __nuxt_page_meta$N.name) ?? "ai-enterprise-build-workbench-list",
    path: (__nuxt_page_meta$N == null ? void 0 : __nuxt_page_meta$N.path) ?? "/ai/enterprise/build/workbench/list",
    children: [],
    meta: __nuxt_page_meta$N,
    alias: (__nuxt_page_meta$N == null ? void 0 : __nuxt_page_meta$N.alias) || [],
    redirect: (__nuxt_page_meta$N == null ? void 0 : __nuxt_page_meta$N.redirect) || void 0,
    component: () => import('./_nuxt/list-3dd6187f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$M == null ? void 0 : __nuxt_page_meta$M.name) ?? "ai-enterprise-build-workbench-modal-searchRobot",
    path: (__nuxt_page_meta$M == null ? void 0 : __nuxt_page_meta$M.path) ?? "/ai/enterprise/build/workbench/modal/searchRobot",
    children: [],
    meta: __nuxt_page_meta$M,
    alias: (__nuxt_page_meta$M == null ? void 0 : __nuxt_page_meta$M.alias) || [],
    redirect: (__nuxt_page_meta$M == null ? void 0 : __nuxt_page_meta$M.redirect) || void 0,
    component: () => import('./_nuxt/searchRobot-b628c2cd.mjs').then(function(n) {
      return n.a;
    }).then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$L == null ? void 0 : __nuxt_page_meta$L.name) ?? "ai-enterprise-modal-robot-editType",
    path: (__nuxt_page_meta$L == null ? void 0 : __nuxt_page_meta$L.path) ?? "/ai/enterprise/modal/robot/editType",
    children: [],
    meta: __nuxt_page_meta$L,
    alias: (__nuxt_page_meta$L == null ? void 0 : __nuxt_page_meta$L.alias) || [],
    redirect: (__nuxt_page_meta$L == null ? void 0 : __nuxt_page_meta$L.redirect) || void 0,
    component: () => import('./_nuxt/editType-20485b1e.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$K == null ? void 0 : __nuxt_page_meta$K.name) ?? "ai-enterprise-train-talk",
    path: (__nuxt_page_meta$K == null ? void 0 : __nuxt_page_meta$K.path) ?? "/ai/enterprise/train/talk",
    children: [],
    meta: __nuxt_page_meta$K,
    alias: (__nuxt_page_meta$K == null ? void 0 : __nuxt_page_meta$K.alias) || [],
    redirect: (__nuxt_page_meta$K == null ? void 0 : __nuxt_page_meta$K.redirect) || void 0,
    component: () => import('./_nuxt/talk-ace1aeed.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$J == null ? void 0 : __nuxt_page_meta$J.name) ?? "ai-hr-analyze",
    path: (__nuxt_page_meta$J == null ? void 0 : __nuxt_page_meta$J.path) ?? "/ai/hr/analyze",
    children: [],
    meta: __nuxt_page_meta$J,
    alias: (__nuxt_page_meta$J == null ? void 0 : __nuxt_page_meta$J.alias) || [],
    redirect: (__nuxt_page_meta$J == null ? void 0 : __nuxt_page_meta$J.redirect) || void 0,
    component: () => import('./_nuxt/analyze-1dc879c8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$I == null ? void 0 : __nuxt_page_meta$I.name) ?? "ai-hr-create",
    path: (__nuxt_page_meta$I == null ? void 0 : __nuxt_page_meta$I.path) ?? "/ai/hr/create",
    children: [],
    meta: __nuxt_page_meta$I,
    alias: (__nuxt_page_meta$I == null ? void 0 : __nuxt_page_meta$I.alias) || [],
    redirect: (__nuxt_page_meta$I == null ? void 0 : __nuxt_page_meta$I.redirect) || void 0,
    component: () => import('./_nuxt/create-19b85d63.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.name) ?? "ai-hr",
    path: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.path) ?? "/ai/hr",
    children: [],
    meta: __nuxt_page_meta$H,
    alias: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.alias) || [],
    redirect: (__nuxt_page_meta$H == null ? void 0 : __nuxt_page_meta$H.redirect) || void 0,
    component: () => import('./_nuxt/index-baa6ac08.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.name) ?? "ai-hr-modal-associate",
    path: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.path) ?? "/ai/hr/modal/associate",
    children: [],
    meta: __nuxt_page_meta$G,
    alias: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.alias) || [],
    redirect: (__nuxt_page_meta$G == null ? void 0 : __nuxt_page_meta$G.redirect) || void 0,
    component: () => import('./_nuxt/associate-75692ed7.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.name) ?? "ai-hr-modal-choosePosition",
    path: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.path) ?? "/ai/hr/modal/choosePosition",
    children: [],
    meta: __nuxt_page_meta$F,
    alias: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.alias) || [],
    redirect: (__nuxt_page_meta$F == null ? void 0 : __nuxt_page_meta$F.redirect) || void 0,
    component: () => import('./_nuxt/choosePosition-ea85243e.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.name) ?? "ai-hr-modal-positions",
    path: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.path) ?? "/ai/hr/modal/positions",
    children: [],
    meta: __nuxt_page_meta$E,
    alias: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.alias) || [],
    redirect: (__nuxt_page_meta$E == null ? void 0 : __nuxt_page_meta$E.redirect) || void 0,
    component: () => import('./_nuxt/positions-f3ee7fa8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.name) ?? "ai-hr-modal-uploadVitae",
    path: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.path) ?? "/ai/hr/modal/uploadVitae",
    children: [],
    meta: __nuxt_page_meta$D,
    alias: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.alias) || [],
    redirect: (__nuxt_page_meta$D == null ? void 0 : __nuxt_page_meta$D.redirect) || void 0,
    component: () => import('./_nuxt/uploadVitae-579dce57.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.name) ?? "ai-hr-modal-vitae",
    path: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.path) ?? "/ai/hr/modal/vitae",
    children: [],
    meta: __nuxt_page_meta$C,
    alias: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.alias) || [],
    redirect: (__nuxt_page_meta$C == null ? void 0 : __nuxt_page_meta$C.redirect) || void 0,
    component: () => import('./_nuxt/vitae-8fb2bafa.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.name) ?? "ai-hr-modal-vitaePreview",
    path: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.path) ?? "/ai/hr/modal/vitaePreview",
    children: [],
    meta: __nuxt_page_meta$B,
    alias: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.alias) || [],
    redirect: (__nuxt_page_meta$B == null ? void 0 : __nuxt_page_meta$B.redirect) || void 0,
    component: () => import('./_nuxt/vitaePreview-b79bfe8e.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.name) ?? "ai-hr-positionDetail",
    path: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.path) ?? "/ai/hr/positionDetail",
    children: [],
    meta: __nuxt_page_meta$A,
    alias: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.alias) || [],
    redirect: (__nuxt_page_meta$A == null ? void 0 : __nuxt_page_meta$A.redirect) || void 0,
    component: () => import('./_nuxt/positionDetail-ed5198ab.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.name) ?? "ai-hr-result",
    path: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.path) ?? "/ai/hr/result",
    children: [],
    meta: __nuxt_page_meta$z,
    alias: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.alias) || [],
    redirect: (__nuxt_page_meta$z == null ? void 0 : __nuxt_page_meta$z.redirect) || void 0,
    component: () => import('./_nuxt/result-ec190af1.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.name) ?? "ai-modal-associate",
    path: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.path) ?? "/ai/modal/associate",
    children: [],
    meta: __nuxt_page_meta$y,
    alias: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.alias) || [],
    redirect: (__nuxt_page_meta$y == null ? void 0 : __nuxt_page_meta$y.redirect) || void 0,
    component: () => import('./_nuxt/associate-9948283a.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.name) ?? "ai-modal-lexicon",
    path: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.path) ?? "/ai/modal/lexicon",
    children: [],
    meta: __nuxt_page_meta$x,
    alias: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.alias) || [],
    redirect: (__nuxt_page_meta$x == null ? void 0 : __nuxt_page_meta$x.redirect) || void 0,
    component: () => import('./_nuxt/lexicon-e66d0362.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.name) ?? "ai-modal-picEdit",
    path: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.path) ?? "/ai/modal/picEdit",
    children: [],
    meta: __nuxt_page_meta$w,
    alias: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.alias) || [],
    redirect: (__nuxt_page_meta$w == null ? void 0 : __nuxt_page_meta$w.redirect) || void 0,
    component: () => import('./_nuxt/picEdit-05adee17.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.name) ?? "ai-modal-prompt",
    path: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.path) ?? "/ai/modal/prompt",
    children: [],
    meta: __nuxt_page_meta$v,
    alias: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.alias) || [],
    redirect: (__nuxt_page_meta$v == null ? void 0 : __nuxt_page_meta$v.redirect) || void 0,
    component: () => import('./_nuxt/prompt-28939876.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.name) ?? "ai-modal-train",
    path: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.path) ?? "/ai/modal/train",
    children: [],
    meta: __nuxt_page_meta$u,
    alias: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.alias) || [],
    redirect: (__nuxt_page_meta$u == null ? void 0 : __nuxt_page_meta$u.redirect) || void 0,
    component: () => import('./_nuxt/train-a37bc917.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.name) ?? "ai-ppt",
    path: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.path) ?? "/ai/ppt",
    children: [],
    meta: __nuxt_page_meta$t,
    alias: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.alias) || [],
    redirect: (__nuxt_page_meta$t == null ? void 0 : __nuxt_page_meta$t.redirect) || void 0,
    component: () => import('./_nuxt/index-dc2d5968.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.name) ?? "ai-robot",
    path: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.path) ?? "/ai/robot",
    children: [],
    meta: __nuxt_page_meta$s,
    alias: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.alias) || [],
    redirect: (__nuxt_page_meta$s == null ? void 0 : __nuxt_page_meta$s.redirect) || void 0,
    component: () => import('./_nuxt/robot-af0f1875.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.name) ?? "ai-search-detail",
    path: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.path) ?? "/ai/search/detail",
    children: [],
    meta: __nuxt_page_meta$r,
    alias: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.alias) || [],
    redirect: (__nuxt_page_meta$r == null ? void 0 : __nuxt_page_meta$r.redirect) || void 0,
    component: () => import('./_nuxt/detail-31a81d2f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.name) ?? "ai-search",
    path: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.path) ?? "/ai/search",
    children: [],
    meta: __nuxt_page_meta$q,
    alias: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.alias) || [],
    redirect: (__nuxt_page_meta$q == null ? void 0 : __nuxt_page_meta$q.redirect) || void 0,
    component: () => import('./_nuxt/index-ff1c97cb.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.name) ?? "ai-testUpload",
    path: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.path) ?? "/ai/testUpload",
    children: [],
    meta: __nuxt_page_meta$p,
    alias: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.alias) || [],
    redirect: (__nuxt_page_meta$p == null ? void 0 : __nuxt_page_meta$p.redirect) || void 0,
    component: () => import('./_nuxt/testUpload-c8eab592.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.name) ?? "index",
    path: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.path) ?? "/",
    children: [],
    meta: __nuxt_page_meta$o,
    alias: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.alias) || [],
    redirect: (__nuxt_page_meta$o == null ? void 0 : __nuxt_page_meta$o.redirect) || void 0,
    component: () => import('./_nuxt/index-ad3eb646.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.name) ?? "login-components-imageCode",
    path: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.path) ?? "/login/components/imageCode",
    children: [],
    meta: __nuxt_page_meta$n,
    alias: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.alias) || [],
    redirect: (__nuxt_page_meta$n == null ? void 0 : __nuxt_page_meta$n.redirect) || void 0,
    component: () => import('./_nuxt/imageCode-2cad61fa.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.name) ?? "login-components-weixinScan",
    path: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.path) ?? "/login/components/weixinScan",
    children: [],
    meta: __nuxt_page_meta$m,
    alias: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.alias) || [],
    redirect: (__nuxt_page_meta$m == null ? void 0 : __nuxt_page_meta$m.redirect) || void 0,
    component: () => import('./_nuxt/weixinScan-738fcb21.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.name) ?? "login-forget",
    path: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.path) ?? "/login/forget",
    children: [],
    meta: __nuxt_page_meta$l,
    alias: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.alias) || [],
    redirect: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.redirect) || void 0,
    component: () => import('./_nuxt/forget-4569115b.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.name) ?? "login",
    path: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.path) ?? "/login",
    children: [],
    meta: __nuxt_page_meta$k,
    alias: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.alias) || [],
    redirect: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.redirect) || void 0,
    component: () => import('./_nuxt/index-a67afc8e.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.name) ?? "login-privacy",
    path: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.path) ?? "/login/privacy",
    children: [],
    meta: __nuxt_page_meta$j,
    alias: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.alias) || [],
    redirect: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.redirect) || void 0,
    component: () => import('./_nuxt/privacy-dab42f51.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.name) ?? "login-register",
    path: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.path) ?? "/login/register",
    children: [],
    meta: __nuxt_page_meta$i,
    alias: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.alias) || [],
    redirect: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.redirect) || void 0,
    component: () => import('./_nuxt/register-814d3a0a.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.name) ?? "login-userAgreement",
    path: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.path) ?? "/login/userAgreement",
    children: [],
    meta: __nuxt_page_meta$h,
    alias: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.alias) || [],
    redirect: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.redirect) || void 0,
    component: () => import('./_nuxt/userAgreement-7a76d3fc.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.name) ?? "manage-modal-accountModel",
    path: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.path) ?? "/manage/modal/accountModel",
    children: [],
    meta: __nuxt_page_meta$g,
    alias: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.alias) || [],
    redirect: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.redirect) || void 0,
    component: () => import('./_nuxt/accountModel-09657c44.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.name) ?? "manage-modal-nickname",
    path: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.path) ?? "/manage/modal/nickname",
    children: [],
    meta: __nuxt_page_meta$f,
    alias: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.alias) || [],
    redirect: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.redirect) || void 0,
    component: () => import('./_nuxt/nickname-667f2327.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.name) ?? "manage-modal-phone",
    path: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.path) ?? "/manage/modal/phone",
    children: [],
    meta: __nuxt_page_meta$e,
    alias: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.alias) || [],
    redirect: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect) || void 0,
    component: () => import('./_nuxt/phone-61ab024f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.name) ?? "manage-modal-pwd",
    path: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.path) ?? "/manage/modal/pwd",
    children: [],
    meta: __nuxt_page_meta$d,
    alias: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.alias) || [],
    redirect: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect) || void 0,
    component: () => import('./_nuxt/pwd-50980682.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.name) ?? "manage-modal-role",
    path: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.path) ?? "/manage/modal/role",
    children: [],
    meta: __nuxt_page_meta$c,
    alias: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.alias) || [],
    redirect: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect) || void 0,
    component: () => import('./_nuxt/role-e128529d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.name) ?? "share-id",
    path: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.path) ?? "/share/:id",
    children: [],
    meta: __nuxt_page_meta$b,
    alias: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.alias) || [],
    redirect: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect) || void 0,
    component: () => import('./_nuxt/_id_-92a3fe7f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.name) ?? "share-answer-code",
    path: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.path) ?? "/share/answer/:code",
    children: [],
    meta: __nuxt_page_meta$a,
    alias: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.alias) || [],
    redirect: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect) || void 0,
    component: () => import('./_nuxt/_code_-dcc70d2c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.name) ?? "share-answer-components-PC",
    path: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.path) ?? "/share/answer/components/PC",
    children: [],
    meta: __nuxt_page_meta$9,
    alias: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.alias) || [],
    redirect: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect) || void 0,
    component: () => import('./_nuxt/PC-987433f8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.name) ?? "share-answer-components-mobile",
    path: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.path) ?? "/share/answer/components/mobile",
    children: [],
    meta: __nuxt_page_meta$8,
    alias: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.alias) || [],
    redirect: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect) || void 0,
    component: () => import('./_nuxt/mobile-3f4dcb5e.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.name) ?? "share-answer-components-verify",
    path: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.path) ?? "/share/answer/components/verify",
    children: [],
    meta: __nuxt_page_meta$7,
    alias: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.alias) || [],
    redirect: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect) || void 0,
    component: () => import('./_nuxt/verify-2d661fe4.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.name) ?? "share-chat-id",
    path: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.path) ?? "/share/chat/:id",
    children: [],
    meta: __nuxt_page_meta$6,
    alias: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.alias) || [],
    redirect: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect) || void 0,
    component: () => import('./_nuxt/_id_-1c72ad54.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) ?? "share-chatInfo-code",
    path: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) ?? "/share/chatInfo/:code",
    children: [],
    meta: __nuxt_page_meta$5,
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect) || void 0,
    component: () => import('./_nuxt/_code_-afa87dad.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) ?? "share-pk-code",
    path: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) ?? "/share/pk/:code",
    children: [],
    meta: __nuxt_page_meta$4,
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect) || void 0,
    component: () => import('./_nuxt/_code_-e4aee11f.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) ?? "share-qr-code",
    path: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) ?? "/share/qr/:code",
    children: [],
    meta: __nuxt_page_meta$3,
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect) || void 0,
    component: () => import('./_nuxt/_code_-8c64e253.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) ?? "share-search-code",
    path: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) ?? "/share/search/:code",
    children: [],
    meta: __nuxt_page_meta$2,
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect) || void 0,
    component: () => import('./_nuxt/_code_-e22a804a.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "teamIndex",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/teamIndex",
    children: [],
    meta: __nuxt_page_meta$1,
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./_nuxt/teamIndex-282a5b09.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "userIndex",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/userIndex",
    children: [],
    meta: __nuxt_page_meta,
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/userIndex-d5eabae0.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  return result;
});
const homeLogoPng = "" + __buildAssetsURL("home.f8c19ced.svg");
const logo = "" + __buildAssetsURL("logo.0609181a.svg");
const faviconPng = "" + __buildAssetsURL("favicon.1de76888.ico");
const loginLogo = "" + __buildAssetsURL("login-logo.05f4d23e.png");
const wechatQrPic = "" + __buildAssetsURL("code.32208a41.jpg");
const disposition = {
  video: "https://oss-app-hz-cdn.chatdzq.com/default/1805940843924967425/default/20240626/resource1805940844004048897",
  companyShortName: "爱晚亭",
  //公司简称
  companyShortNameEn: "ChatDZQ",
  //公司英文简称
  favicon: faviconPng,
  //网页ico
  logo,
  loginLogo,
  //登录页logo
  homeLogo: homeLogoPng,
  //首页logo
  userServiceLink: "https://wxvkb05dzp2.feishu.cn/docx/FcucdDMMOo2Fm3xoE8Rc5NurnCl#UGoMd9lZjonb1MxF4sgcHXzLnQc",
  //用户服务协议
  privacyPolicy: "https://wxvkb05dzp2.feishu.cn/docx/FcucdDMMOo2Fm3xoE8Rc5NurnCl#B40ndwENyolrgIxFDaFcFA3hnqf",
  //隐私政策
  productIntroductionLink: "https://wxvkb05dzp2.feishu.cn/docx/E5tzdPlUQohyPexojjPcwXzdn7d",
  //产品介绍
  videoIntroductionlLink: "https://wxvkb05dzp2.feishu.cn/docx/DrK7dH513oih97xByzucIR2snWh?from=from_copylink",
  //视频介绍
  questionsLink: "https://wxvkb05dzp2.feishu.cn/docx/N5bAdSxCCowXjdxaEJBc8jZDngh?from=from_copylink",
  //常见问答
  feedbackLink: "https://wxvkb05dzp2.feishu.cn/share/base/form/shrcnmMLTDWniRJx4ncd20zLkpc",
  //意见反馈
  aboutUsLink: "https://wxvkb05dzp2.feishu.cn/docx/FcucdDMMOo2Fm3xoE8Rc5NurnCl",
  //关于我们
  topUpLink: "https://wxvkb05dzp2.feishu.cn/docx/FcucdDMMOo2Fm3xoE8Rc5NurnCl#EnYtdrmZTowcW5xT9IBc5R13nDO",
  //充值服务协议
  viewLink: "https://wxvkb05dzp2.feishu.cn/docx/Fr21dZHfHonkUoxZQ4Tck8sPnog",
  //查看操作指引
  subscriptionAgreement: "https://wxvkb05dzp2.feishu.cn/docx/FcucdDMMOo2Fm3xoE8Rc5NurnCl#Jo2wdHuMooQiraxkS3EcOcgfnoe",
  //订购协议
  joinNowLink: "https://wxvkb05dzp2.feishu.cn/share/base/form/shrcnZdOkxq2nOs9L4vfCf28ehg",
  //立即加入
  aboutUs: "ChatDZQ (爱晚亭) ，致力于成为打造全球一流的AI智能服务商!我们专业为企业和商家提供“数字化、协同化以及智能化”的AI智能+数智化解决方案，为企业和商家获得AI智能赋能，帮助用户便捷使用AI智能来解决生产、经营和生活的问题，提升效率，实现企业降本增效的实用价值。技术支持团队 (点石科技)经过几年的努力和大量的海内外项目实践，成功搭建了整套聚合多款LLM大语言模型，集业务、数据(向量数据库)、AI智能和算法等协同的点石中台SaaS+GPT应用的智能系统。\n\nChatDZQ (爱晚亭)不做大模型，我们做大模型的AI应用，为企业或个人AI应用提供中间键服务。ChatDZQ是基于先进的自然语言模型聚合开发的AI智能助手产品，主要围绕 CVP提供AI智能+向量训练+个性微调的服务。(C 是指以ChatGPT，百度文心一言，讯飞星火为代表的大模型，Vector Database 向量数据库，Prompt即提示词).ChatDZQ目前可提供程序设计Prompt指令 机器人栏目) ，协助用户友好地和这些大模型交流，获得更精准答案;为用户私有化部署向量数据库 (知识库栏目)，训练修正自有数据知识，打造企业AI向量知识库，获得精准行业知识体系结合微信、钉钉、飞书等终端输出 (AI应用栏目) ，项目可赋能各种行业场景(解决方案)，如智能客服、咨询、法律、金融等。",
  //关于我们
  wechatQrPic,
  companyContactInformation: "福建点石网络科技有限公司↵杭州爱晚亭数字科技有限公司↵地址：厦门市思明区厦禾路189号银行中心805室↵电话：400-8856-200↵咨询建议：wmq@dzq.com"
};
var source = null;
const getRouting = defineStore("layoutName", {
  state: () => ({
    name: "default",
    path: "/",
    selectId: 0,
    robotCode: "",
    robotList: [],
    robotModalState: false,
    robotInfo: {},
    prompt: "",
    electric: 0,
    fullPath: "",
    nickName: "",
    userLogo: "",
    img: "",
    appInfo: {},
    clientType: "",
    permList: [],
    addUserNum: 0,
    isShowFirmModal: false,
    teanList: [],
    currentTean: "",
    firmParams: "",
    approvalNum: 0,
    chatLogo: "",
    chatUserInfo: {},
    historyList: [],
    leftRobotLoading: false,
    hadAuthorizedLogin: false,
    internetData: {
      isAgent: true,
      fileList: []
    },
    chatMsg: "",
    msgId: "",
    source: null,
    isShowMessage: true,
    applySelectColumnId: "",
    isDenied: false,
    shouldAbort: true,
    chatMessages: [],
    isoncompleted: false,
    groupId: "",
    robotId: "",
    isRecharge: false,
    isAccident: false,
    isLoad: false,
    showTagView: "此内容由点石科技AI生成，仅供参考，请谨慎使用。",
    leftWatermark: "?x-oss-process=image/auto-orient,1/quality,q_90/watermark,image_d2F0ZXJtYXJrL2RzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_sw,x_10,y_10",
    rightWatermark: "?x-oss-process=image/auto-orient,1/quality,q_100/watermark,text_Y2hhdGR6cQ,size_50,t_60,x_10,y_10",
    flowNodes: [],
    flowEdges: [],
    hisList: [],
    selectPlacard: {},
    reader: null,
    abortCtrl: null,
    topNavList: [],
    readerList: {},
    abortCtrlList: {},
    isChatLoad: false,
    configuration: {
      logo: "",
      homeLogo: "",
      //首页logo
      favicon: "",
      //网页ico
      userServiceLink: "",
      //用户服务协议
      privacyPolicy: "",
      //隐私政策
      productIntroductionLink: "",
      //产品介绍
      videoIntroductionlLink: "",
      //视频介绍
      questionsLink: "",
      //常见问答
      feedbackLink: "",
      //意见反馈
      aboutUsLink: "",
      //关于我们
      topUpLink: "",
      //充值服务协议
      viewLink: "",
      //查看操作指引
      subscriptionAgreement: "",
      //订购协议
      joinNowLink: "",
      //立即加入
      companyShortName: "",
      //公司简称
      companyShortNameEn: "",
      //公司英文简称
      aboutUs: "",
      //关于我们
      loginLogo: "",
      //登录页logo
      video: "",
      //首页视频
      bannerList: [],
      copyRight: "",
      //底部版权声明
      recordNumber: "",
      //备案号
      moduleShow: [],
      //模版列表
      videoModule: false,
      //视频
      techDevelopmentModule: false,
      //技术研发
      laboratoryModule: false,
      //实验室研发
      solutionModule: false,
      //解决方案
      industryInformationModule: false,
      //行业咨询
      channelCooperationModule: false,
      //渠道合作
      bottomNavigationBar: false,
      //底部导航
      customerServiceQrPic: "",
      //客服二维码
      aboutUsPic: "",
      //关于我们图
      wechatQrPic: "",
      //公众号二维码
      companyContactInformation: ""
      //公司联系方式
    },
    pagesData: {},
    //页面临时存储
    isShowHis: false,
    //是否展示历史记录
    defJumpUrl: "/ai/chat",
    edition: "new",
    //版本信息,
    temporaryData: null,
    streams: {},
    partnerFlag: false
    //是否代理商
  }),
  getters: {
    getChatMsg: (state) => {
      return state.chatMsg;
    }
  },
  actions: {
    // 流式返回
    // 存储当前流
    setStream(groupId, reader, abortCtrl) {
      this.streams = { ...this.streams, [groupId]: { reader, abortCtrl } };
    },
    // 获取流
    getStream(groupId) {
      return this.streams[groupId];
    },
    // 停止流
    stopStream(groupId) {
      if (this.streams[groupId]) {
        this.streams[groupId].reader.cancel();
        this.streams[groupId].abortCtrl.abort();
        delete this.streams[groupId];
      }
    },
    // 清空流
    resetStream() {
      if (Object.keys(this.streams).length > 0) {
        Object.keys(this.streams).forEach((groupId) => {
          this.stopStream(groupId);
        });
        this.setIsLoad(false);
        this.streams = {};
      }
    },
    // 流式返回 End
    setTemporaryData(data) {
      this.temporaryData = data;
    },
    setPagesData(data) {
      this.pagesData = data;
    },
    setReader(data) {
      this.readerList = data;
    },
    setAbortCtrl(data) {
      this.abortCtrlList = data;
    },
    setflowNodes(data) {
      this.flowNodes = data;
    },
    setflowEdges(data) {
      this.flowEdges = data;
    },
    setRoutingName(name) {
      this.name = name;
    },
    setRoutingPath(path) {
      this.path = path;
    },
    setSelectId(id) {
      this.selectId = id;
    },
    setRobotCode(code2) {
      this.robotCode = code2;
    },
    setRobotList(list) {
      this.robotList = list;
    },
    setRobotState(state) {
      this.robotModalState = state;
    },
    setRobotInfo(item) {
      this.robotInfo = item;
    },
    setPrompt(item) {
      this.prompt = item;
    },
    setElectric(item) {
      this.electric = item;
    },
    setFullPath(item) {
      if (item.indexOf("?secretKey=") != -1) {
        this.fullPath = "/";
      } else {
        this.fullPath = item;
      }
    },
    setImg(item) {
      this.img = item;
    },
    setAppInfo(item) {
      this.appInfo = item;
    },
    setIsShowFirm(item) {
      this.isShowFirmModal = item;
    },
    setFirmParams(item) {
      this.firmParams = item;
    },
    setLeftRobotLoading(item) {
      this.leftRobotLoading = item;
    },
    setApprovalNum(proxy2) {
      let data = {
        pageNo: 1,
        pageSize: 100,
        reviewStatus: "UNAUDITED"
      };
      proxy2 == null ? void 0 : proxy2.$api.reviewQueryReviewPageList(data).then((res) => {
        this.approvalNum = res.totalCount;
      });
    },
    setTeanList(item) {
      this.teanList = item;
      this.currentTean = {};
      this.teanList.forEach((item2) => {
        if (item2.currentUserFlag) {
          this.currentTean = item2;
        }
      });
    },
    setIsShowMessage(item) {
      this.isShowMessage = item;
    },
    setApplySelectColumnId(item) {
      this.applySelectColumnId = item;
    },
    setGroupId(item) {
      this.groupId = item;
    },
    setRobotId(item) {
      this.robotId = item;
    },
    setIsRecharge(item) {
      this.isRecharge = item;
    },
    setIsAccident(item) {
      this.isAccident = item;
    },
    setIsoncompleted(item) {
      this.isoncompleted = item;
    },
    setHisList(item) {
      this.hisList = item;
    },
    setSelectPlacard(item) {
      this.selectPlacard = item;
    },
    //顶部导航
    setTopNavList(proxy2) {
      let data = {
        bizType: "OFFICE_WEB_SITE",
        viewType: "SITE"
      };
      proxy2.$api.querySiteSetup().then((res) => {
        if (res && res.data) {
          this.configuration.aboutUs = res.data.aboutUs ? res.data.aboutUs : disposition.aboutUs;
          this.configuration.loginLogo = res.data.loginLogo ? res.data.loginLogo : disposition.loginLogo;
          this.configuration.logo = res.data.logo ? res.data.logo : disposition.logo;
          this.configuration.companyShortName = res.data.name ? res.data.name : disposition.companyShortName;
          this.configuration.homeLogo = res.data.navbarLogo ? res.data.navbarLogo : disposition.homeLogo;
          this.configuration.privacyPolicy = res.data.privacyPolicy ? res.data.privacyPolicy : disposition.privacyPolicy;
          this.configuration.userServiceLink = res.data.userAgreement ? res.data.userAgreement : disposition.userServiceLink;
          this.configuration.video = res.data.video ? res.data.video : disposition.video;
          this.configuration.favicon = res.data.logo ? res.data.logo : disposition.favicon;
          this.configuration.topUpLink = res.data.rechargeAgreement ? res.data.rechargeAgreement : disposition.topUpLink;
          this.configuration.subscriptionAgreement = res.data.orderAgreement ? res.data.orderAgreement : disposition.subscriptionAgreement;
          this.configuration.bannerList = res.data.bannerList ? res.data.bannerList : [];
          this.configuration.copyRight = res.data.copyRight ? res.data.copyRight : "";
          this.configuration.recordNumber = res.data.recordNumber ? res.data.recordNumber : "";
          this.configuration.moduleShow = res.data.moduleShow ? JSON.parse(res.data.moduleShow) : [];
          this.configuration.customerServiceQrPic = res.data.customerServiceQrPic ? res.data.customerServiceQrPic : "";
          this.configuration.wechatQrPic = res.data.wechatQrPic ? res.data.wechatQrPic : "";
          this.configuration.companyContactInformation = res.data.companyContactInformation ? res.data.companyContactInformation : "";
          this.configuration.moduleShow.forEach((item) => {
            if (item.showKey == "videoModule") {
              this.configuration.videoModule = item.showFlag;
            }
            if (item.showKey == "techDevelopmentModule") {
              this.configuration.techDevelopmentModule = item.showFlag;
            }
            if (item.showKey == "laboratoryModule") {
              this.configuration.laboratoryModule = item.showFlag;
            }
            if (item.showKey == "solutionModule") {
              this.configuration.solutionModule = item.showFlag;
            }
            if (item.showKey == "industryInformationModule") {
              this.configuration.industryInformationModule = item.showFlag;
            }
            if (item.showKey == "channelCooperationModule") {
              this.configuration.channelCooperationModule = item.showFlag;
            }
            if (item.showKey == "bottomNavigationBar") {
              this.configuration.bottomNavigationBar = item.showFlag;
            }
          });
          this.configuration.aboutUsPic = res.data.aboutUsPic ? res.data.aboutUsPic : "";
          this.configuration.productIntroductionLink = disposition.productIntroductionLink;
          this.configuration.videoIntroductionlLink = disposition.videoIntroductionlLink;
          this.configuration.questionsLink = disposition.questionsLink;
          this.configuration.feedbackLink = disposition.feedbackLink;
          this.configuration.aboutUsLink = disposition.aboutUsLink;
          this.configuration.viewLink = disposition.viewLink;
          this.configuration.joinNowLink = disposition.joinNowLink;
          this.configuration.companyShortNameEn = disposition.companyShortNameEn;
          useHead({
            link: [
              { rel: "icon", type: "image/x-icon", href: this.configuration.favicon }
            ]
          });
        } else {
          this.getDisposition();
        }
      }).catch(() => {
        this.getDisposition();
      });
      setTimeout(() => {
        if (useCookie("authtoken").value) {
          {
            proxy2.$api.queryViewMenu(data).then((res) => {
              if (res.data && res.data.length > 0) {
                this.topNavList = res.data;
              } else {
                this.topNavList = [];
              }
            });
          }
        }
      }, 200);
    },
    setIsShowHis(item) {
      this.isShowHis = item;
    },
    getChatLogo(proxy2) {
      var _a;
      let data = {
        code: (_a = useCookie("authtoken").value) == null ? void 0 : _a.loginCode
      };
      proxy2 == null ? void 0 : proxy2.$api.getLoginAccount(data).then((res) => {
        if (res.data.avatar) {
          this.chatUserInfo = res.data;
          this.chatLogo = res.data.avatar;
        } else {
          this.chatUserInfo = {};
          this.chatLogo = "https://hz-oss.chatdzq.com/file/common/static-web/d638965e-dd7b-4fe9-b03b-3f39c3342d1a.png";
        }
      });
    },
    getUserPoints(proxy2) {
      proxy2 == null ? void 0 : proxy2.$api.getUserAccountInfo().then((res) => {
        this.electric = res.data.electricQuantity;
        this.nickName = res.data.nickName;
        this.userLogo = res.data.headPortrait;
        this.clientType = res.data.clientType;
        this.addUserNum = res.data.addUserNum;
        this.hadAuthorizedLogin = res.data.hadAuthorizedLogin ? res.data.hadAuthorizedLogin : false;
      });
    },
    //清除信息
    clearuUser() {
      this.nickName = "";
      this.currentTean = {};
    },
    getUserPoints2(proxy2) {
      proxy2 == null ? void 0 : proxy2.$api.getUserAccountInfo().then((res) => {
        this.electric = res.data.electricQuantity;
        this.nickName = res.data.nickName;
        this.userLogo = res.data.headPortrait;
        this.clientType = res.data.clientType;
        this.addUserNum = res.data.addUserNum;
        this.hadAuthorizedLogin = res.data.hadAuthorizedLogin ? res.data.hadAuthorizedLogin : false;
        this.partnerFlag = res.data.partnerFlag;
        if (this.clientType == "TEAM") {
          this.setPermList(proxy2);
        }
      });
    },
    setPermList(proxy2) {
      proxy2 == null ? void 0 : proxy2.$api.getUserAccountInfo().then((res1) => {
        if (res1.data && res1.data.clientType) {
          this.clientType = res1.data.clientType;
          this.partnerFlag = res1.data.partnerFlag;
          if (this.clientType == "TEAM") {
            proxy2 == null ? void 0 : proxy2.$api.getUserPermission().then((res) => {
              this.permList = res.data;
            });
          }
        }
      });
    },
    setHistoryList(item) {
      this.historyList = item;
    },
    setInternetData(item) {
      this.internetData = item;
    },
    setChat(proxy2, data) {
      if (source) {
        source.close();
      }
      proxy2 == null ? void 0 : proxy2.$api.ai_getSimpleChatId(data).then((res) => {
        this.msgId = res.data;
        this.getUserPoints(proxy2);
        this.setStreamChat();
      });
    },
    setStreamChat() {
      var _this = this;
      const url = location.protocol + "//" + location.host + `/space/ai/simplechat?id=${this.msgId}&stream=true`;
      source = new EventSource(url);
      source.addEventListener("chat-event", function(event) {
        var data = JSON.parse(event.data);
        if (data.content == "[ONCOMPLETED]") {
          source.close();
        } else if (data.content == "[ERROR]") {
          source.close();
        } else if (data.content == "WAIT")
          ;
        else {
          _this.chatMsg = data;
        }
      }, false);
      source.addEventListener("error", function(event) {
        source.close();
        console.log(event);
        console.log("Reconnecting...");
      }, false);
    },
    //版本信息更改
    setEdition(type) {
      this.edition = type;
    },
    setIsDeniedTrue() {
      this.isDenied = false;
      setTimeout(() => {
        this.isDenied = true;
      });
    },
    setIsDeniedFalse() {
      this.isDenied = false;
    },
    setIsLoad(item) {
      this.isLoad = item;
    },
    setIsChatLoad(item) {
      this.isChatLoad = item;
    },
    // setHisRoute(item){//存储历史路由
    // 	// if(false){
    // 	// 	if(localStorage.getItem('hisRoute')){//存在历史
    // 	// 	}else{
    // 	// 	}
    // 	// }
    // },
    getDisposition() {
      this.configuration.logo = disposition.logo;
      this.configuration.homeLogo = disposition.homeLogo;
      this.configuration.favicon = disposition.favicon;
      this.configuration.userServiceLink = disposition.userServiceLink;
      this.configuration.privacyPolicy = disposition.privacyPolicy;
      this.configuration.productIntroductionLink = disposition.productIntroductionLink;
      this.configuration.videoIntroductionlLink = disposition.videoIntroductionlLink;
      this.configuration.questionsLink = disposition.questionsLink;
      this.configuration.feedbackLink = disposition.feedbackLink;
      this.configuration.aboutUsLink = disposition.aboutUsLink;
      this.configuration.topUpLink = disposition.topUpLink;
      this.configuration.viewLink = disposition.viewLink;
      this.configuration.subscriptionAgreement = disposition.subscriptionAgreement;
      this.configuration.joinNowLink = disposition.joinNowLink;
      this.configuration.companyShortName = disposition.companyShortName;
      this.configuration.companyShortNameEn = disposition.companyShortNameEn;
      this.configuration.aboutUs = disposition.aboutUs;
      this.configuration.video = disposition.video;
      this.configuration.loginLogo = disposition.loginLogo;
      useHead({
        link: [
          { rel: "icon", type: "image/x-icon", href: this.configuration.favicon }
        ]
      });
    },
    // 新流式返回接口
    async setAiChat(proxy2, params, type) {
      let _this = this;
      if (!params.lastAiRecordCode || params.lastAiRecordCode.length == 0) {
        this.setIsChatLoad(true);
      }
      var source2 = "";
      const headers = useRequestHeaders();
      {
        source2 = headers == null ? void 0 : headers.host;
      }
      _this.setGroupId(params.groupId);
      _this.setRobotId(params.robotCode);
      let paramsData = {
        "tntInstId": gettoken$2("tntInstId"),
        "requestToken": "",
        "tntBizId": gettoken$2("tntBizId"),
        //登录后获取
        "reqParam": params,
        "extendParams": {},
        "assertToken": gettoken$2("assertToken"),
        //租户
        "sourceVersion": "1.0.0",
        "operatorId": params && params.operatorId ? params.operatorId : "",
        //登录后获取
        "userToken": gettoken$2("userToken"),
        //消费者
        "systemCurrentTime": new Date().getTime(),
        //时间戳
        "pageNo": params && params.pageNo ? params.pageNo : 1,
        "pageSize": params && params.pageSize ? params.pageSize : 20,
        "currentPageMaxId": params && params.currentPageMaxId ? params.currentPageMaxId : 0,
        "source": source2,
        "channel": "WEB",
        "msgSource": params && params.msgSource ? params.msgSource : ""
      };
      _this.setIsoncompleted(false);
      _this.shouldAbort = false;
      _this.abortCtrl = new AbortController();
      const signal = _this.abortCtrl.signal;
      let apiUrl = "/space/ai/newChat";
      if (type == "DrawBatch") {
        apiUrl = "/space/ai/drawBatchChat";
      }
      if (type == "web") {
        apiUrl = "/space/teamDataset/syncWebsiteData";
      }
      const response = await fetch(location.protocol + "//" + location.host + apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(paramsData),
        signal
        // 将signal传递给fetch
      });
      if (response.body == null)
        throw new Error("Response body is null");
      if (response.status != 200) {
        this.setIsAccident(false);
        setTimeout(() => {
          this.setIsAccident(true);
        }, 100);
      }
      _this.reader = response.body.getReader();
      let decoder = new TextDecoder();
      let buffer = "";
      async function processText({ done, value }) {
        if (done || _this.shouldAbort) {
          _this.setIsLoad(false);
          if (_this.shouldAbort) {
            _this.reader.cancel();
            _this.abortCtrl.abort();
            setTimeout(() => {
              _this.getUserPoints(proxy2);
            }, 2e3);
            throw new Error("Stream reading has been aborted");
          }
          return;
        }
        _this.setIsLoad(true);
        buffer += decoder.decode(value, { stream: true });
        let boundary = buffer.indexOf("\n");
        while (boundary !== -1) {
          const line = buffer.slice(0, boundary);
          buffer = buffer.slice(boundary + 1);
          _this.processLine(proxy2, line, params);
          boundary = buffer.indexOf("\n");
        }
        return _this.reader.read().then(processText);
      }
      return _this.reader.read().then(processText).catch((e) => console.error("Error:", e.message));
    },
    processLine(proxy2, line, params) {
      let _this = this;
      const routing = getRouting();
      if (line.length > 0) {
        const jsonData = JSON.parse(line.substring(5)).data;
        jsonData.request = params.content;
        _this.setIsoncompleted(false);
        if (jsonData.type != "MODEL_WAIT") {
          routing.setIsChatLoad(false);
        }
        if (jsonData.content === "[ONCOMPLETED]") {
          this.getUserPoints(proxy2);
          _this.setIsoncompleted(true);
          _this.setIsLoad(false);
          return;
        }
        if (jsonData.type === "ERROR") {
          _this.setIsLoad(false);
          let code2 = jsonData.errorCode;
          let codeList = [770301, 770302, 770303];
          let codeList2 = [770304, 770305];
          const router = useRouter();
          if (codeList.indexOf(code2) == -1 && codeList2.indexOf(code2) == -1) {
            proxy2.$Message.error(jsonData.content);
          }
          if (codeList.indexOf(code2) != -1) {
            let str = jsonData.content.split("@");
            proxy2.$Message.error(str[0]);
            let flag = false;
            routing.permList.forEach((item, i) => {
              if (item.tempCode == "33143") {
                flag = true;
              }
              if (i == Number(routing.permList.length - 1)) {
                if (flag) {
                  routing.setIsRecharge(false);
                  setTimeout(() => {
                    routing.setIsRecharge(true);
                  }, 100);
                }
              }
            });
          }
          if (codeList2.indexOf(code2) != -1) {
            let str = jsonData.content.split("@");
            proxy2.$Message.error(str[0]);
            router.push("/member");
          }
          if (code2 == 10011) {
            router.push("/login");
          }
        }
        jsonData.groupId = _this.groupId;
        jsonData.robotCode = _this.robotId;
        const buffers = [];
        buffers.push(jsonData);
        setInterval(() => {
          if (buffers.length > 0) {
            _this.chatMsg = buffers.shift();
          }
        }, 1);
      }
    },
    // 调用此方法以中止流式读取
    abortReadingStream() {
      const routing = getRouting();
      if (this.reader) {
        this.reader.cancel();
        this.abortCtrl.abort();
      }
      routing.setIsChatLoad(false);
      this.shouldAbort = true;
      this.setIsLoad(false);
    }
    // 新流式返回接口 End
  },
  persist: false
});
function gettoken$2(item) {
  let authtoken = useCookie("authtoken").value;
  if (authtoken !== void 0) {
    return authtoken[item];
  } else {
    return "0000";
  }
}
const route_45global = defineNuxtRouteMiddleware((to, from) => {
  const routing = getRouting();
  if (to.path.indexOf("/login") == -1) {
    routing.setFullPath(to.fullPath);
  }
});
const globalMiddleware = [
  validate,
  route_45global
];
const namedMiddleware = {};
const router_Pg0DINazwm = defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b;
  let __temp, __restore;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
  const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c, _d;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
      to.meta.layout = initialLayout.value;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          await callWithNuxt(nuxtApp, showError, [error2]);
          return false;
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      await callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual$1(currentURL, initialURL)) {
        const event = await callWithNuxt(nuxtApp, useRequestEvent);
        const options = { redirectCode: event.node.res.statusCode !== 200 ? event.node.res.statusCode || 302 : 302 };
        await callWithNuxt(nuxtApp, navigateTo, [currentURL, options]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        // #4920, #$4982
        force: true
      });
    } catch (error2) {
      await callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = false;
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source2) => friendlyJSONstringify({ l: locale, k: key, s: source2 });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject = (val) => (
  // eslint-disable-line
  val !== null && typeof val === "object"
);
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const pathStateMachine = [];
pathStateMachine[
  0
  /* BEFORE_PATH */
] = {
  [
    "w"
    /* WORKSPACE */
  ]: [
    0
    /* BEFORE_PATH */
  ],
  [
    "i"
    /* IDENT */
  ]: [
    3,
    0
    /* APPEND */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4
    /* IN_SUB_PATH */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: [
    7
    /* AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* IN_PATH */
] = {
  [
    "w"
    /* WORKSPACE */
  ]: [
    1
    /* IN_PATH */
  ],
  [
    "."
    /* DOT */
  ]: [
    2
    /* BEFORE_IDENT */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4
    /* IN_SUB_PATH */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: [
    7
    /* AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* BEFORE_IDENT */
] = {
  [
    "w"
    /* WORKSPACE */
  ]: [
    2
    /* BEFORE_IDENT */
  ],
  [
    "i"
    /* IDENT */
  ]: [
    3,
    0
    /* APPEND */
  ],
  [
    "0"
    /* ZERO */
  ]: [
    3,
    0
    /* APPEND */
  ]
};
pathStateMachine[
  3
  /* IN_IDENT */
] = {
  [
    "i"
    /* IDENT */
  ]: [
    3,
    0
    /* APPEND */
  ],
  [
    "0"
    /* ZERO */
  ]: [
    3,
    0
    /* APPEND */
  ],
  [
    "w"
    /* WORKSPACE */
  ]: [
    1,
    1
    /* PUSH */
  ],
  [
    "."
    /* DOT */
  ]: [
    2,
    1
    /* PUSH */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4,
    1
    /* PUSH */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: [
    7,
    1
    /* PUSH */
  ]
};
pathStateMachine[
  4
  /* IN_SUB_PATH */
] = {
  [
    "'"
    /* SINGLE_QUOTE */
  ]: [
    5,
    0
    /* APPEND */
  ],
  [
    '"'
    /* DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* APPEND */
  ],
  [
    "["
    /* LEFT_BRACKET */
  ]: [
    4,
    2
    /* INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* RIGHT_BRACKET */
  ]: [
    1,
    3
    /* PUSH_SUB_PATH */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* ELSE */
  ]: [
    4,
    0
    /* APPEND */
  ]
};
pathStateMachine[
  5
  /* IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* SINGLE_QUOTE */
  ]: [
    4,
    0
    /* APPEND */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* ELSE */
  ]: [
    5,
    0
    /* APPEND */
  ]
};
pathStateMachine[
  6
  /* IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* APPEND */
  ],
  [
    "o"
    /* END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* ELSE */
  ]: [
    6,
    0
    /* APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index2 = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* APPEND */
  ] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[
    1
    /* PUSH */
  ] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[
    2
    /* INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[
          1
          /* PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index2 + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index2++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index2++;
    c = path[index2];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      "l"
      /* ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index2 = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index2 : index2;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages2) => {
    return messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index2) => _list[index2];
  const _named = options.named || {};
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction(options.messages) ? options.messages(key) : isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type2 = arg2 || type2;
      }
    }
    let msg = message(key)(ctx);
    if (type2 === "vnode" && isArray(msg) && modifier) {
      msg = msg[0];
    }
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    [
      "list"
      /* LIST */
    ]: list,
    [
      "named"
      /* NAMED */
    ]: named,
    [
      "plural"
      /* PLURAL */
    ]: plural,
    [
      "linked"
      /* LINKED */
    ]: linked,
    [
      "message"
      /* MESSAGE */
    ]: message,
    [
      "type"
      /* TYPE */
    ]: type,
    [
      "interpolate"
      /* INTERPOLATE */
    ]: interpolate,
    [
      "normalize"
      /* NORMALIZE */
    ]: normalize
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version2, meta) {
  devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString(defaults) ? [defaults] : defaults;
    if (isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale = block[i];
    if (isString(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.2.2";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const version2 = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages2 = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const internalOptions = options;
  const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages: messages2,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  if (__INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version2, __meta);
  }
  return context;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
let code$2 = CompileErrorCodes.__EXTEND_POINT__;
const inc$2 = () => ++code$2;
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$2,
  INVALID_DATE_ARGUMENT: inc$2(),
  INVALID_ISO_DATE_ARGUMENT: inc$2(),
  __EXTEND_POINT__: inc$2()
  // 18
};
function createCoreError(code2) {
  return createCompileError(code2, null, void 0);
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages: messages2 } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages2[locale] || {}
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages: messages2, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format2 = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    message = messages2[targetLocale] || {};
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString(format2) || isFunction(format2))
      break;
    const missingRet = handleMissing(
      context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      key,
      targetLocale,
      missingWarn,
      type
    );
    if (missingRet !== key) {
      format2 = missingRet;
    }
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source2, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        throw err;
      }
    },
    onCacheKey: (source3) => generateFormatCacheKey(locale, key, source3)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key) => {
    let val = resolveValue2(message, key);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key);
    }
    if (isString(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.2.2";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: code,
  // legacy module errors
  INVALID_ARGUMENT: inc(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  // directive module errors
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  // unexpected error
  UNEXPECTED_ERROR: inc(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  // for enhancement
  __EXTEND_POINT__: inc()
  // 29
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TransrateVNodeSymbol = /* @__PURE__ */ makeSymbol("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOption = /* @__PURE__ */ makeSymbol("__injectWithOption");
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages: messages2, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages2) ? messages2 : isArray(__i18n) ? {} : { [locale]: {} };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages2 = isObject(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages2 = getLocaleMessages(globalThis.locale.value, {
      messages: messages2,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages2);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages2[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages2 = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      try {
        setAdditionalMeta(getMetaInfo());
        if (!_isGlobal) {
          _context.fallbackContext = __root ? getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
    } else {
      ret = fn(_context);
    }
    if (isNumber(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[TransrateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => isArray(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[NumberPartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[DatetimePartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = isString(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages3 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages3 = messageValue;
        break;
      }
    }
    return messages3;
  }
  function tm(key) {
    const messages3 = resolveMessages(key);
    return messages3 != null ? messages3 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages: messages2,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TransrateVNodeSymbol] = transrateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
function convertComposerOptions(options) {
  const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = isFunction(options.missing) ? options.missing : void 0;
  const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
  const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = isBoolean(options.sync) ? options.sync : true;
  let messages2 = options.messages;
  if (isPlainObject(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages2 = locales.reduce((messages3, locale2) => {
      const message = messages3[locale2] || (messages3[locale2] = {});
      assign(message, sharedMessages[locale2]);
      return messages3;
    }, messages2 || {});
  }
  const { __i18n, __root, __injectWithOption } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale,
    fallbackLocale,
    messages: messages2,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
function createVueI18n(options = {}, VueI18nLegacy) {
  {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      // id
      id: composer.id,
      // locale
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      // fallbackLocale
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      // messages
      get messages() {
        return composer.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return composer.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return composer.availableLocales;
      },
      // formatter
      get formatter() {
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
      },
      // missing
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      // modifiers
      get modifiers() {
        return composer.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      // postTranslation
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      // sync
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return true;
      },
      set preserveDirectiveContent(val) {
      },
      // pluralizationRules
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      // for internal
      __composer: composer,
      // t
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      rt(...args) {
        return Reflect.apply(composer.rt, composer, [...args]);
      },
      // tc
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      // te
      te(key, locale) {
        return composer.te(key, locale);
      },
      // tm
      tm(key) {
        return composer.tm(key);
      },
      // getLocaleMessage
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      // setLocaleMessage
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      // d
      d(...args) {
        return Reflect.apply(composer.d, composer, [...args]);
      },
      // getDateTimeFormat
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      // setDateTimeFormat
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      // n
      n(...args) {
        return Reflect.apply(composer.n, composer, [...args]);
      },
      // getNumberFormat
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      // setNumberFormat
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      // mergeNumberFormat
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(choice, choicesLength) {
        return -1;
      },
      // for internal
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    return vueI18n;
  }
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponetI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return slot = [
        ...slot,
        ...isArray(current.children) ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment$1;
}
const Translation = (
  /* defineComponent */
  {
    /* eslint-disable */
    name: "i18n-t",
    props: assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validator: (val) => isNumber(val) || !isNaN(val)
      }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
      const { slots, attrs } = context;
      const i18n = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      return () => {
        const keys = Object.keys(slots).filter((key) => key !== "_");
        const options = {};
        if (props.locale) {
          options.locale = props.locale;
        }
        if (props.plural !== void 0) {
          options.plural = isString(props.plural) ? +props.plural : props.plural;
        }
        const arg = getInterpolateArg(context, keys);
        const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
        const assignedAttrs = assign({}, attrs);
        const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
        return h(tag, assignedAttrs, children);
      };
    }
  }
);
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index2) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index: index2, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index2}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormat = (
  /* defineComponent */
  {
    /* eslint-disable */
    name: "i18n-n",
    props: assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
      const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[NumberPartsSymbol](...args)
      ));
    }
  }
);
const DatetimeFormat = (
  /*defineComponent */
  {
    /* eslint-disable */
    name: "i18n-d",
    props: assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
      const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[DatetimePartsSymbol](...args)
      ));
    }
  }
);
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
function defineMixin(vuei18n, composer, i18n) {
  return {
    beforeCreate() {
      const instance = getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          this.$i18n = createVueI18n(optionsI18n);
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, options);
        } else {
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __root: composer
          });
        }
      } else {
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      vuei18n.__onComponentInstanceCreated(this.$i18n);
      i18n.__setInstance(instance, this.$i18n);
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key, locale) => this.$i18n.te(key, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = (key) => this.$i18n.tm(key);
    },
    mounted() {
    },
    unmounted() {
      const instance = getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      delete this.$t;
      delete this.$rt;
      delete this.$tc;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      i18n.__deleteInstance(instance);
      delete this.$i18n;
    }
  };
}
function mergeToRoot(root, options) {
  root.locale = options.locale || root.locale;
  root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
  root.missing = options.missing || root.missing;
  root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
  root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
  root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
  root.postTranslation = options.postTranslation || root.postTranslation;
  root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
  root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
  root.sync = options.sync || root.sync;
  root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
  const messages2 = getLocaleMessages(root.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages2).forEach((locale) => root.mergeLocaleMessage(locale, messages2[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return root;
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = __legacyMode ? !!options.allowComposition : true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options, __legacyMode);
  const symbol = makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      // mode
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return __allowComposition;
      },
      // install plugin
      async install(app, ...options2) {
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n));
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          i18n.dispose();
          unmountApp();
        };
      },
      // global accessor
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      // @internal
      __instances,
      // @internal
      __getInstance,
      // @internal
      __setInstance,
      // @internal
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  {
    if (i18n.mode === "legacy" && !options.__useComponent) {
      if (!i18n.allowComposition) {
        throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
      }
      return useI18nForLegacy(instance, scope, global2, options);
    }
  }
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
          if (useComponent && composer && !composer[InejctWithOption]) {
            composer = null;
          }
        }
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  {
    onUnmounted(() => {
      i18n.__deleteInstance(target);
    }, target);
  }
}
function useI18nForLegacy(instance, scope, root, options = {}) {
  const isLocale = scope === "local";
  const _composer = shallowRef(null);
  if (isLocale && instance.proxy && !(instance.proxy.$options.i18n || instance.proxy.$options.__i18n)) {
    throw createI18nError(I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  }
  const _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    // prettier-ignore
    isLocale && _inheritLocale ? root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = ref(
    // prettier-ignore
    isLocale && _inheritLocale ? root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  const _missingWarn = isLocale ? root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const _fallbackWarn = isLocale ? root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const _fallbackRoot = isLocale ? root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const _fallbackFormat = !!options.fallbackFormat;
  const _missing = isFunction(options.missing) ? options.missing : null;
  const _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const _warnHtmlMessage = isLocale ? root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const _escapeParameter = !!options.escapeParameter;
  const _modifiers = isLocale ? root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  const _pluralRules = options.pluralRules || isLocale && root.pluralRules;
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => {
      return _composer.value ? _composer.value.locale.value : _locale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.locale.value = val;
      }
      _locale.value = val;
    }
  });
  const fallbackLocale = computed({
    get: () => {
      return _composer.value ? _composer.value.fallbackLocale.value : _fallbackLocale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.fallbackLocale.value = val;
      }
      _fallbackLocale.value = val;
    }
  });
  const messages2 = computed(() => {
    if (_composer.value) {
      return _composer.value.messages.value;
    } else {
      return _messages.value;
    }
  });
  const datetimeFormats = computed(() => _datetimeFormats.value);
  const numberFormats = computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return _composer.value ? _composer.value.getPostTranslationHandler() : _postTranslation;
  }
  function setPostTranslationHandler(handler) {
    if (_composer.value) {
      _composer.value.setPostTranslationHandler(handler);
    }
  }
  function getMissingHandler() {
    return _composer.value ? _composer.value.getMissingHandler() : _missing;
  }
  function setMissingHandler(handler) {
    if (_composer.value) {
      _composer.value.setMissingHandler(handler);
    }
  }
  function warpWithDeps(fn) {
    trackReactivityValues();
    return fn();
  }
  function t(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.t, null, [...args])) : warpWithDeps(() => "");
  }
  function rt(...args) {
    return _composer.value ? Reflect.apply(_composer.value.rt, null, [...args]) : "";
  }
  function d(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.d, null, [...args])) : warpWithDeps(() => "");
  }
  function n(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.n, null, [...args])) : warpWithDeps(() => "");
  }
  function tm(key) {
    return _composer.value ? _composer.value.tm(key) : {};
  }
  function te(key, locale2) {
    return _composer.value ? _composer.value.te(key, locale2) : false;
  }
  function getLocaleMessage(locale2) {
    return _composer.value ? _composer.value.getLocaleMessage(locale2) : {};
  }
  function setLocaleMessage(locale2, message) {
    if (_composer.value) {
      _composer.value.setLocaleMessage(locale2, message);
      _messages.value[locale2] = message;
    }
  }
  function mergeLocaleMessage(locale2, message) {
    if (_composer.value) {
      _composer.value.mergeLocaleMessage(locale2, message);
    }
  }
  function getDateTimeFormat(locale2) {
    return _composer.value ? _composer.value.getDateTimeFormat(locale2) : {};
  }
  function setDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setDateTimeFormat(locale2, format2);
      _datetimeFormats.value[locale2] = format2;
    }
  }
  function mergeDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeDateTimeFormat(locale2, format2);
    }
  }
  function getNumberFormat(locale2) {
    return _composer.value ? _composer.value.getNumberFormat(locale2) : {};
  }
  function setNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setNumberFormat(locale2, format2);
      _numberFormats.value[locale2] = format2;
    }
  }
  function mergeNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeNumberFormat(locale2, format2);
    }
  }
  const wrapper = {
    get id() {
      return _composer.value ? _composer.value.id : -1;
    },
    locale,
    fallbackLocale,
    messages: messages2,
    datetimeFormats,
    numberFormats,
    get inheritLocale() {
      return _composer.value ? _composer.value.inheritLocale : _inheritLocale;
    },
    set inheritLocale(val) {
      if (_composer.value) {
        _composer.value.inheritLocale = val;
      }
    },
    get availableLocales() {
      return _composer.value ? _composer.value.availableLocales : Object.keys(_messages.value);
    },
    get modifiers() {
      return _composer.value ? _composer.value.modifiers : _modifiers;
    },
    get pluralRules() {
      return _composer.value ? _composer.value.pluralRules : _pluralRules;
    },
    get isGlobal() {
      return _composer.value ? _composer.value.isGlobal : false;
    },
    get missingWarn() {
      return _composer.value ? _composer.value.missingWarn : _missingWarn;
    },
    set missingWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackWarn() {
      return _composer.value ? _composer.value.fallbackWarn : _fallbackWarn;
    },
    set fallbackWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackRoot() {
      return _composer.value ? _composer.value.fallbackRoot : _fallbackRoot;
    },
    set fallbackRoot(val) {
      if (_composer.value) {
        _composer.value.fallbackRoot = val;
      }
    },
    get fallbackFormat() {
      return _composer.value ? _composer.value.fallbackFormat : _fallbackFormat;
    },
    set fallbackFormat(val) {
      if (_composer.value) {
        _composer.value.fallbackFormat = val;
      }
    },
    get warnHtmlMessage() {
      return _composer.value ? _composer.value.warnHtmlMessage : _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      if (_composer.value) {
        _composer.value.warnHtmlMessage = val;
      }
    },
    get escapeParameter() {
      return _composer.value ? _composer.value.escapeParameter : _escapeParameter;
    },
    set escapeParameter(val) {
      if (_composer.value) {
        _composer.value.escapeParameter = val;
      }
    },
    t,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    rt,
    d,
    n,
    tm,
    te,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getDateTimeFormat,
    setDateTimeFormat,
    mergeDateTimeFormat,
    getNumberFormat,
    setNumberFormat,
    mergeNumberFormat
  };
  return wrapper;
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  initFeatureFlags();
}
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const optionsLoader = () => Promise.resolve({ "locale": "en", "fallbackLocale": "zh", "availableLocales": ["en", "zh"], "sync": true });
const locale_en = {
  "i": {
    "select": {
      "placeholder": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Select"]);
      },
      "noMatch": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["No matching data"]);
      },
      "loading": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Loading"]);
      }
    },
    "table": {
      "noDataText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["No Data"]);
      },
      "noFilteredDataText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["No filter data"]);
      },
      "confirmFilter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Confirm"]);
      },
      "resetFilter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Reset"]);
      },
      "clearFilter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["All"]);
      },
      "sumText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Sum"]);
      }
    },
    "datepicker": {
      "selectDate": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Select date"]);
      },
      "selectTime": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Select time"]);
      },
      "startTime": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Start Time"]);
      },
      "endTime": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["End Time"]);
      },
      "clear": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Clear"]);
      },
      "ok": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["OK"]);
      },
      "datePanelLabel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["[mmmm] [yyyy]"]);
      },
      "month": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Month"]);
      },
      "month1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["January"]);
      },
      "month2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["February"]);
      },
      "month3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["March"]);
      },
      "month4": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["April"]);
      },
      "month5": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["May"]);
      },
      "month6": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["June"]);
      },
      "month7": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["July"]);
      },
      "month8": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["August"]);
      },
      "month9": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["September"]);
      },
      "month10": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["October"]);
      },
      "month11": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["November"]);
      },
      "month12": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["December"]);
      },
      "year": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Year"]);
      },
      "weekStartDay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["0"]);
      },
      "weeks": {
        "sun": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sun"]);
        },
        "mon": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mon"]);
        },
        "tue": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Tue"]);
        },
        "wed": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Wed"]);
        },
        "thu": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Thu"]);
        },
        "fri": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fri"]);
        },
        "sat": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sat"]);
        }
      },
      "months": {
        "m1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Jan"]);
        },
        "m2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Feb"]);
        },
        "m3": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mar"]);
        },
        "m4": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Apr"]);
        },
        "m5": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["May"]);
        },
        "m6": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Jun"]);
        },
        "m7": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Jul"]);
        },
        "m8": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Aug"]);
        },
        "m9": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sep"]);
        },
        "m10": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Oct"]);
        },
        "m11": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nov"]);
        },
        "m12": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Dec"]);
        }
      }
    },
    "transfer": {
      "titles": {
        "source": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Source"]);
        },
        "target": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Target"]);
        }
      },
      "filterPlaceholder": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Search here"]);
      },
      "notFoundText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Not Found"]);
      }
    },
    "modal": {
      "okText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["OK"]);
      },
      "cancelText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cancel"]);
      }
    },
    "poptip": {
      "okText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["OK"]);
      },
      "cancelText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cancel"]);
      }
    },
    "page": {
      "prev": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Previous Page"]);
      },
      "next": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Next Page"]);
      },
      "total": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Total"]);
      },
      "item": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["item"]);
      },
      "items": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["items"]);
      },
      "prev5": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Previous 5 Pages"]);
      },
      "next5": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Next 5 Pages"]);
      },
      "page": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["/page"]);
      },
      "goto": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Goto"]);
      },
      "p": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([]);
      }
    },
    "rate": {
      "star": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Star"]);
      },
      "stars": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Stars"]);
      }
    },
    "time": {
      "before": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" ago"]);
      },
      "after": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" after"]);
      },
      "just": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["just now"]);
      },
      "seconds": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" seconds"]);
      },
      "minutes": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" minutes"]);
      },
      "hours": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" hours"]);
      },
      "days": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" days"]);
      }
    },
    "tree": {
      "emptyText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["No Data"]);
      }
    },
    "image": {
      "zoomIn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Zoom In"]);
      },
      "zoomOut": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Zoom Out"]);
      },
      "rotateLeft": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Rotate Left"]);
      },
      "rotateRight": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Rotate Right"]);
      },
      "fail": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["failed"]);
      },
      "preview": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["preview"]);
      }
    }
  },
  "public": {
    "返回": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Return"]);
    },
    "取消": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cancel"]);
    },
    "删除": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Delete"]);
    },
    "编辑": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Edit"]);
    },
    "添加": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Add"]);
    },
    "下载": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Download"]);
    },
    "保存": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Save"]);
    },
    "复制": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Copy"]);
    },
    "关闭": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Close"]);
    },
    "替换": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Replace"]);
    },
    "插入": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Insert"]);
    },
    "确认": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Confirm"]);
    },
    "确定": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["OK"]);
    },
    "配置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Configure"]);
    },
    "操作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Operate"]);
    },
    "搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Search"]);
    },
    "全选": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select All"]);
    },
    "选择": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select"]);
    },
    "分享": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Share"]);
    },
    "导出": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Export"]);
    },
    "收起": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Collapse"]);
    },
    "展开": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Expand"]);
    },
    "生成": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["generate"]);
    },
    "查看详情": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["View Details"]);
    },
    "历史记录": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["History"]);
    },
    "新建搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["New Search"]);
    }
  },
  "publicMsg": {
    "已删除": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Deleted"]);
    },
    "已保存": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Saved"]);
    },
    "请输入": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Please Enter"]);
    },
    "请生成": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Please Generate"]);
    },
    "请选择": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Please Select"]);
    },
    "已选择": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Selected"]);
    },
    "已下载": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Downloaded"]);
    }
  },
  "home": {
    "AI海报": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI poster"]);
    },
    "输入需求": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Instantly generate personalized posters based on your requirement, editable and free."]);
    },
    "联网查询": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Online Inquiry"]);
    },
    "即时访问": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Real-time browsing with universal knowledge and instant answers at your fingertips."]);
    },
    "智能HR": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Intelligent HR"]);
    },
    "自动化简历匹配": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Automated resume matching for swift candidate potential identification."]);
    },
    "文件解读": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["File Interpretation"]);
    },
    "AI助手": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI assistant with precise document analysis."]);
    },
    "创建机器人": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Create Robot"]);
    },
    "取名字传照片": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Name and upload photo, match requirements, create your own robot assistant."]);
    },
    "知识库训练": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Knowledge Base Training"]);
    },
    "上传文件": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Upload files, build private knowledge and data, organize shared knowledge assets."]);
    },
    "对话与调试": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Conversation and Debugging"]);
    },
    "匹配相似度": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Match similarity, adjust robot questions and answers, provide accurate responses."]);
    },
    "发布与输出": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publish and Output"]);
    },
    "输出分享": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Output and share, supports Enterprise WeChat, mini programs, API interfaces."]);
    },
    "立即体验": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Experience Now"]);
    },
    "口算批改": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Oral Calculation Correction"]);
    },
    "皮肤检测": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Skin Detection"]);
    },
    "思维导图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mind Map"]);
    },
    "作文改写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Essay Rewriting"]);
    },
    "AI作画": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Drawing"]);
    },
    "AI角色": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Characters"]);
    },
    "AI创作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Creation"]);
    },
    "AI工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Tools"]);
    },
    "AIGC实验室": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AIGC Lab"]);
    },
    "我今天能帮你做什么": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["How can I help you today"]);
    },
    "提示词": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Prompts"]);
    },
    "你可以这样问我": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["You can ask me, e.g., write a weekly report for backend development."]);
    },
    "请遵守": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Please comply"]);
    },
    "用户服务协议": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["User Service Agreement"]);
    },
    "Ai结果由各大模型输出": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI results are generated by various models, content is for reference only, and does not represent our views or attitudes."]);
    },
    "我的AI无所不能": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["My AI can do anything."]);
    },
    "魔法咒语": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Magic Spells, prompt commands generated with one click, real-time prompt interaction, thousands of usage scenarios, AI empowerment."]);
    },
    "更多": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["More"]);
    },
    "创作相似": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Similar Creations"]);
    },
    "人在使用": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["People are using"]);
    },
    "探索无限": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Lab, open source modeling tools, explore unlimited!"]);
    },
    "创造价值": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Experience popular, interesting, and practical AI tools at home and abroad, create value."]);
    },
    "视频演示": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Video Presentation Opportunities Challenges"]);
    },
    "技术研发": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Technology R&D Create Value"]);
    },
    "模块化可扩展": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modular and Scalable"]);
    },
    "支持模块化的架构": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Supports modular architecture, flexible and scalable, enabling enterprises to easily expand and customize systems to meet rapidly changing business needs."]);
    },
    "数据驱动决策": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Data-Driven Decision Making"]);
    },
    "系统侧重于数据的收集": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["System focuses on data collection, analysis, and application, helping enterprises better understand their business and customers, using data-driven decisions to respond to changes."]);
    },
    "多行业多场景": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Multi-Industry Multi-Scenario"]);
    },
    "系统支持多种业务场景": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["System supports various business scenarios, including e-commerce, education, law, finance, and more, meeting different industry and business needs."]);
    },
    "生态系统支持": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ecosystem Support"]);
    },
    "丰富的开发者资源和工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Rich developer resources and tools to help enterprises build and deploy dedicated AI middleware systems and GPT applications. Fast, short cycles, low cost."]);
    },
    "定制服务": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Solutions Customized Services"]);
    },
    "最新动态": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Industry News The Latest News"]);
    }
  },
  "heder": {
    "关于我们": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["About us"]);
    },
    "新闻资讯": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["News"]);
    },
    "开通服务": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activate Services"]);
    },
    "注册登录": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sign Up & Log In"]);
    },
    "工作台": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Workspace"]);
    },
    "智能体": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Agent"]);
    },
    "创建机器人": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Create Bot"]);
    },
    "知识库训练": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Knowledge Base Training"]);
    },
    "对话与调试": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Conversation & Debugging"]);
    },
    "发布与输出": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publish & Output"]);
    },
    "机器人设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Bot Settings"]);
    },
    "对话记录": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Conversation Records"]);
    },
    "机器人": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Bot"]);
    },
    "AI对话": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Conversation"]);
    },
    "AI画画": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Drawing"]);
    },
    "AI工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Tools"]);
    },
    "超级AI": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Super AI"]);
    },
    "角色聊天": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Role Chat"]);
    },
    "创作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Creation"]);
    },
    "我的收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["My Favorites"]);
    },
    "AI应用": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Applications"]);
    },
    "创建应用": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Create Application"]);
    },
    "栏目管理": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Column Management"]);
    },
    "导航管理": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Navigation Management"]);
    },
    "应用发布": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Application Publish"]);
    },
    "应用信息": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Application Info"]);
    },
    "会员": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Membership"]);
    },
    "全部用户": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["All Users"]);
    },
    "会员权益": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Membership Benefits"]);
    },
    "积分权益": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Points Benefits"]);
    },
    "用户反馈": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["User Feedback"]);
    },
    "会员设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Membership Settings"]);
    },
    "订单": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Orders"]);
    },
    "全部订单": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["All Orders"]);
    },
    "数据": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Data"]);
    },
    "全部数据": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["All Data"]);
    },
    "分销": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Distribution"]);
    },
    "分销推广": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Distribution Promotion"]);
    },
    "支付": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Payment"]);
    },
    "支付配置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Payment Configuration"]);
    },
    "流量主": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Traffic Owner"]);
    },
    "广告配置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ad Configuration"]);
    },
    "实验室": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Lab"]);
    },
    "解决方案": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Solutions"]);
    },
    "请选择您要管理的机器人": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Please select the bot you want to manage"]);
    },
    "此能力仅团队": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["This capability is only available to team/enterprise members"]);
    }
  },
  "aiChat": {
    "创建新对话": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Create New Dialog"]);
    },
    "是否删除该数据": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Do you want to delete this data"]);
    },
    "是否删除该常用语": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Do you want to delete this common phrase"]);
    },
    "模型设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Model Settings"]);
    },
    "模型": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Model"]);
    },
    "电量": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Battery"]);
    },
    "生成多样性": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Generation Diversity"]);
    },
    "精准": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Precision"]);
    },
    "多样性": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Diversity"]);
    },
    "技能": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Skills"]);
    },
    "AI绘画": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Drawing"]);
    },
    "AI联网搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Internet Search"]);
    },
    "智能联想": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Smart Association"]);
    },
    "InputSuggestions3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Automatically provide 3 user input suggestions after model response"]);
    },
    "InputSuggestions": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Automatically recommend more suitable agents for responding to this question"]);
    },
    "智能体推荐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Agent Recommendations"]);
    },
    "保存设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Save Settings"]);
    },
    "找找灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Find Inspiration"]);
    },
    "message": {
      "已删除": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Deleted"]);
      },
      "修改成功": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Modification Successful"]);
      },
      "删除成功": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Deletion Successful"]);
      }
    },
    "checkBox": {
      "全选": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Select All"]);
      },
      "确定": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Confirm"]);
      }
    }
  },
  "aiApp": {
    "personalTips": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Configure a personalized workspace based on your needs"]);
    },
    "manageTips": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["You are an administrator and can configure this module"]);
    },
    "配置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Configure"]);
    },
    "最近常用": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Recently Used"]);
    }
  },
  "aiEnterprise": {
    "workbench": {
      "最多可添加20个页面": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Up to 20 pages can be added"]);
      },
      "创建页面": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Create Page"]);
      },
      "是否确认删除": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Are you sure you want to delete"]);
      },
      "工作台页面": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Workbench Page"]);
      },
      "可见范围": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Visibility Range"]);
      },
      "可进行拖动修改排序": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Can be dragged to modify the order"]);
      },
      "应用名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Application Name"]);
      },
      "是否显示": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Whether to Show"]);
      },
      "全站": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Entire Site"]);
      },
      "下级": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Subordinate"]);
      },
      "单工作台模式": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Single table mode"]);
      },
      "默认取第一个自定义可删除的工作台": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["By default, the first custom removable workbench is selected"]);
      }
    },
    "deploy": {
      "工作台页面": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Workspace Page"]);
      },
      "页面配置": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Page Configuration"]);
      },
      "分类配置": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Category Configuration"]);
      },
      "保存并发布": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Save and Publish"]);
      },
      "工作台名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Workspace Name"]);
      },
      "请输入": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Please enter"]);
      },
      "可见范围": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Visibility Range"]);
      },
      "公司全员": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["All Company Employees"]);
      },
      "个人可见": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Personal Visibility"]);
      },
      "全站可见": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Visible to All"]);
      },
      "全站": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Entire Site"]);
      },
      "不显示图片": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Do Not Display Image"]);
      },
      "修改图片": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Modify Image"]);
      },
      "隐藏图片": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Hide Image"]);
      },
      "显示图片": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Show Image"]);
      },
      "自定义添加": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Custom Add"]);
      },
      "支持智能体": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Supports Agents, Tool Applications, etc."]);
      },
      "智能匹配": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Intelligent Matching"]);
      },
      "根据智能": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Automatically match based on intelligence and industry"]);
      },
      "最多可添加": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Up to add"]);
      },
      "个分类可进行": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["categories can be"]);
      },
      "拖动修改": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Drag to Modify"]);
      },
      "排序": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Sort"]);
      },
      "编辑名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Edit Name"]);
      },
      "创建分类": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Create Category"]);
      },
      "请输入分类名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Please enter category name"]);
      },
      "常用": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Commonly Used"]);
      },
      "分类名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Category Name"]);
      },
      "已添加应用": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Applications Added"]);
      },
      "是否显示": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Should it be displayed"]);
      },
      "操作": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Operation"]);
      },
      "是否确认删除该分类": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Do you confirm to delete this category"]);
      },
      "该分类下的应用也会同步进行移除": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Applications under this category will also be removed"]);
      }
    }
  },
  "aiCreative": {
    "推荐尝试": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Recommended Try"]);
    },
    "找灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Find Inspiration"]);
    },
    "AI写作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Writing"]);
    },
    "写作从未如此高效": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Writing has never been so efficient"]);
    },
    "快速获取写作灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Quickly Get Writing Inspiration"]);
    },
    "写作灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Writing Inspiration"]);
    },
    "我的收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["My Favorites"]);
    },
    "创作结果": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Creation Results"]);
    },
    "成功收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Successfully Added to Favorites"]);
    },
    "取消收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Remove from Favorites"]);
    },
    "搜索栏目名称": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Search Column Name"]);
    },
    "cCreate": {
      "不知道写什么": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Don't Know What to Write"]);
      },
      "试试示例": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Try Example"]);
      },
      "共消耗": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Total Consumed"]);
      },
      "添加题目类型": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Add Question Type"]);
      },
      "立即生成": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Generate Now"]);
      }
    },
    "创建新文档": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Create New Document"]);
    },
    "新建文档": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["New Document"]);
    },
    "训练": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Training"]);
    },
    "全文翻译": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Full Text Translation"]);
    },
    "选择翻译语言": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select Translation Language"]);
    },
    "立即翻译": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Translate Now"]);
    },
    "插入正文": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Insert Text"]);
    },
    "字数": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Word Count"]);
    },
    "语气修改": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tone Modification"]);
    },
    "选择语气": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select Tone"]);
    },
    "立即修改": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modify Now"]);
    },
    "AI灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Inspiration"]);
    },
    "网页热榜": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Web Page Hot"]);
    },
    "微信热榜": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["WeChat Hot"]);
    },
    "头条热榜": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Headlines Hot"]);
    },
    "抖音热榜": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Douyin Hot"]);
    },
    "浏览器版本过低": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Browser Version Too Low, Please Update"]);
    },
    "是否删除该记录": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Delete This Record"]);
    },
    "重新生成": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Regenerate"]);
    },
    "修改语气": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modify Tone"]);
    },
    "AI要点提炼": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Key Points Extraction"]);
    },
    "结合该热点": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Combine With This Hotspot to Generate Topics"]);
    },
    "已为您生成以下话题": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Generated the Following Topics for You"]);
    },
    "写成文章": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Write as Article"]);
    },
    "智能配图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Mapping"]);
    },
    "智能配图phd": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enter a Sentence or Phrase, Words, Describe Your Idea"]);
    },
    "开始配图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Start Mapping"]);
    },
    "以下为配图结果": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Here Are the Mapping Results"]);
    },
    "一键续写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["One-Click Continue"]);
    },
    "全文润色": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Article Polishing"]);
    },
    "总结摘要": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Summary"]);
    },
    "全文扩写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Article Expansion"]);
    },
    "点击此按钮进行": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Click this Button to Proceed"]);
    },
    "以下是内容": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Here is the Content"]);
    },
    "重新续写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Re-Continue"]);
    },
    "重新润色": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Re-Polish"]);
    },
    "重新总结": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Re-Summarize"]);
    },
    "帮你写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Write for You"]);
    },
    "高级写作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Advanced Writing"]);
    },
    "模版中心": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Template Center"]);
    },
    "AI配图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Mapping"]);
    },
    "message": {
      "请输入创意": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Please Enter Your Idea"]);
      }
    },
    "点击输入内容": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Click to enter content"]);
    }
  },
  "aiDrawList": {
    "AI画画工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Drawing Tool"]);
    },
    "AI作画": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Painting"]);
    },
    "文字生成创意图片": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Text to Creative Images, Illustrations, Wallpapers"]);
    },
    "AI海报": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Poster"]);
    },
    "生成企业营销海报": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Generate Business Marketing Posters"]);
    },
    "AI抠图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Background Removal"]);
    },
    "一键去除背景": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["One-click Background Removal"]);
    },
    "AI背景替换": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Background Replacement"]);
    },
    "一键替换图片背景": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["One-click Background Replacement"]);
    },
    "艺术字": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Art Text"]);
    },
    "生成艺术字": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enter text to generate Art Text"]);
    },
    "AI模特图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Model Images"]);
    },
    "选择模特类型": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Choose Model Type to Generate"]);
    },
    "近期作品": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Recent Works"]);
    },
    "作画作品": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Painting Works"]);
    },
    "海报作品": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Poster Works"]);
    },
    "灵感推荐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inspiration Recommendations"]);
    },
    "我的收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["My Collection"]);
    },
    "画同款": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Draw it"]);
    }
  },
  "aiSearch": {
    "请遵守": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Please comply with"]);
    },
    "用户服务协议": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["User Service Agreement"]);
    },
    "agreementTip": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI results are generated by various models and are for reference only. They do not represent our views and attitudes."]);
    },
    "AI搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Search"]);
    },
    "AI智能搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI Intelligent Search, Search Faster"]);
    },
    "点击输入想要了解的问题": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Click to enter the query you want to learn about"]);
    },
    "搜索范围": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Search Range"]);
    },
    "高级设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Advanced Settings"]);
    },
    "延伸阅读": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Extended Reading"]);
    },
    "输出语言": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Output Language"]);
    },
    "简洁": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Simple"]);
    },
    "深度研究": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["In-depth"]);
    },
    "学术研究": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Academic"]);
    },
    "全网": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Entire Web"]);
    },
    "学术": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Academic"]);
    },
    "播客": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Podcast"]);
    },
    "新搜索任务": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["New Search Task"]);
    },
    "追问": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Follow Up"]);
    },
    "导出中": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Exporting"]);
    },
    "大纲": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Outline"]);
    },
    "脑图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mind Map"]);
    },
    "大纲生成中": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Generating Outline"]);
    },
    "相关事件": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Related Events"]);
    },
    "事件概述": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Event Overview"]);
    },
    "相关组织": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Related Organizations"]);
    },
    "组织名称": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Organization Name"]);
    },
    "事件名称": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Event Name"]);
    },
    "概述": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Overview"]);
    },
    "相关人物": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Related People"]);
    },
    "人物名称": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Person Name"]);
    },
    "参考文献": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["References"]);
    },
    "资料搜索中": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Searching Data"]);
    }
  },
  "audio": {
    "AI音频工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI audio tools"]);
    },
    "AI音乐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI music"]);
    },
    "自由创作随心所欲": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Free to create as you please"]);
    },
    "文件转写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["File transfer"]);
    },
    "上传本地音视频": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Upload local audio and video, import knowledge base files, intelligent summary points, one-click export"]);
    },
    "灵感推荐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inspiration Recommendation"]);
    },
    "推荐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Recommended"]);
    },
    "创作同款": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Creation of the same"]);
    }
  }
};
const locale_zh = {
  "i": {
    "select": {
      "placeholder": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["请选择"]);
      },
      "noMatch": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["无匹配数据"]);
      },
      "loading": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["加载中"]);
      }
    },
    "table": {
      "noDataText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["暂无数据"]);
      },
      "noFilteredDataText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["暂无筛选结果"]);
      },
      "confirmFilter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["筛选"]);
      },
      "resetFilter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["重置"]);
      },
      "clearFilter": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["全部"]);
      },
      "sumText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["合计"]);
      }
    },
    "datepicker": {
      "selectDate": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["选择日期"]);
      },
      "selectTime": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["选择时间"]);
      },
      "startTime": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["开始时间"]);
      },
      "endTime": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["结束时间"]);
      },
      "clear": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["清空"]);
      },
      "ok": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["确定"]);
      },
      "datePanelLabel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["[yyyy年] [m月]"]);
      },
      "month": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["月"]);
      },
      "month1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["1 月"]);
      },
      "month2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["2 月"]);
      },
      "month3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["3 月"]);
      },
      "month4": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["4 月"]);
      },
      "month5": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["5 月"]);
      },
      "month6": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["6 月"]);
      },
      "month7": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["7 月"]);
      },
      "month8": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["8 月"]);
      },
      "month9": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["9 月"]);
      },
      "month10": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["10 月"]);
      },
      "month11": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["11 月"]);
      },
      "month12": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["12 月"]);
      },
      "year": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["年"]);
      },
      "weekStartDay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["0"]);
      },
      "weeks": {
        "sun": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["日"]);
        },
        "mon": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["一"]);
        },
        "tue": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["二"]);
        },
        "wed": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["三"]);
        },
        "thu": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["四"]);
        },
        "fri": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["五"]);
        },
        "sat": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["六"]);
        }
      },
      "months": {
        "m1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["1月"]);
        },
        "m2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["2月"]);
        },
        "m3": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["3月"]);
        },
        "m4": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["4月"]);
        },
        "m5": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["5月"]);
        },
        "m6": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["6月"]);
        },
        "m7": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["7月"]);
        },
        "m8": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["8月"]);
        },
        "m9": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["9月"]);
        },
        "m10": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["10月"]);
        },
        "m11": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["11月"]);
        },
        "m12": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["12月"]);
        }
      }
    },
    "transfer": {
      "titles": {
        "source": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["源列表"]);
        },
        "target": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["目的列表"]);
        }
      },
      "filterPlaceholder": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["请输入搜索内容"]);
      },
      "notFoundText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["列表为空"]);
      }
    },
    "modal": {
      "okText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["确定"]);
      },
      "cancelText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["取消"]);
      }
    },
    "poptip": {
      "okText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["确定"]);
      },
      "cancelText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["取消"]);
      }
    },
    "page": {
      "prev": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["上一页"]);
      },
      "next": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["下一页"]);
      },
      "total": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["共"]);
      },
      "item": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["条"]);
      },
      "items": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["条"]);
      },
      "prev5": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["向前 5 页"]);
      },
      "next5": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["向后 5 页"]);
      },
      "page": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["条/页"]);
      },
      "goto": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["跳至"]);
      },
      "p": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["页"]);
      }
    },
    "rate": {
      "star": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["星"]);
      },
      "stars": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["星"]);
      }
    },
    "time": {
      "before": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["前"]);
      },
      "after": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["后"]);
      },
      "just": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["刚刚"]);
      },
      "seconds": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["秒"]);
      },
      "minutes": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["分钟"]);
      },
      "hours": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["小时"]);
      },
      "days": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["天"]);
      }
    },
    "tree": {
      "emptyText": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["暂无数据"]);
      }
    },
    "image": {
      "zoomIn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["放大"]);
      },
      "zoomOut": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["缩小"]);
      },
      "rotateLeft": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["左旋转"]);
      },
      "rotateRight": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["右旋转"]);
      },
      "fail": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["失败"]);
      },
      "preview": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["预览"]);
      }
    }
  },
  "public": {
    "返回": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["返回"]);
    },
    "取消": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["取消"]);
    },
    "删除": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["删除"]);
    },
    "编辑": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["编辑"]);
    },
    "添加": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["添加"]);
    },
    "下载": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["下载"]);
    },
    "保存": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["保存"]);
    },
    "复制": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["复制"]);
    },
    "关闭": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["关闭"]);
    },
    "替换": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["替换"]);
    },
    "插入": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["插入"]);
    },
    "确认": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["确认"]);
    },
    "确定": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["确定"]);
    },
    "配置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["配置"]);
    },
    "操作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["操作"]);
    },
    "搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["搜索"]);
    },
    "全选": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["全选"]);
    },
    "选择": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["选择"]);
    },
    "分享": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["分享"]);
    },
    "导出": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["导出"]);
    },
    "收起": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["收起"]);
    },
    "展开": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["展开"]);
    },
    "生成": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["生成"]);
    },
    "查看详情": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["查看详情"]);
    },
    "历史记录": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["历史记录"]);
    },
    "新建搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["新建搜索"]);
    }
  },
  "publicMsg": {
    "已删除": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["已删除"]);
    },
    "已保存": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["已保存"]);
    },
    "请输入": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["请输入"]);
    },
    "请生成": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["请生成"]);
    },
    "请选择": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["请选择"]);
    },
    "已选择": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["已选择"]);
    },
    "已下载": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["已下载"]);
    }
  },
  "home": {
    "AI海报": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI海报"]);
    },
    "输入需求": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["输入需求，即刻生成个性化海报，支持编辑，免费下载。"]);
    },
    "联网查询": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["联网查询"]);
    },
    "即时访问": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["即时访问，快速解答，让知识触手可及。"]);
    },
    "智能HR": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["智能HR"]);
    },
    "自动化简历匹配": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["自动化简历匹配，快速识别候选人潜力。"]);
    },
    "文件解读": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["文件解读"]);
    },
    "AI助手": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI助手，精准解读文件，信息支持。"]);
    },
    "创建机器人": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["创建机器人"]);
    },
    "取名字传照片": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["取名字传照片，匹配需求，创建自己专属机器人助手"]);
    },
    "知识库训练": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["知识库训练"]);
    },
    "上传文件": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["上传文件，构建私有知识和数据，组织共享知识资产"]);
    },
    "对话与调试": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["对话与调试"]);
    },
    "匹配相似度": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["匹配相似度，调整机器人问题和回答，精准回答问题"]);
    },
    "发布与输出": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["发布与输出"]);
    },
    "输出分享": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["输出分享，支持企业微信、小程序、API接口等接口"]);
    },
    "立即体验": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["立即体验"]);
    },
    "口算批改": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["口算批改"]);
    },
    "皮肤检测": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["皮肤检测"]);
    },
    "思维导图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["思维导图"]);
    },
    "作文改写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["作文改写"]);
    },
    "AI作画": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI作画"]);
    },
    "AI角色": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI角色"]);
    },
    "AI创作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI创作"]);
    },
    "AI工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI工具"]);
    },
    "AIGC实验室": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AIGC实验室"]);
    },
    "我今天能帮你做什么": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["我今天能帮你做什么？"]);
    },
    "提示词": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["提示词"]);
    },
    "你可以这样问我": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["你可以这样问我，如：写一份后端开发的周报"]);
    },
    "请遵守": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["请遵守"]);
    },
    "用户服务协议": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["用户服务协议"]);
    },
    "Ai结果由各大模型输出": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ai结果由各大模型输出，其内容仅供参考，不代表我们的观点和态度。"]);
    },
    "我的AI无所不能": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["机器人，我的AI无所不能"]);
    },
    "魔法咒语": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["魔法咒语，prompt指令一键生成，提示词实时交互，上千种使用场景，AI赋能。"]);
    },
    "更多": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["更多"]);
    },
    "创作相似": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["创作相似"]);
    },
    "人在使用": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["人在使用"]);
    },
    "探索无限": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["实验室，开源模型工具，探索无限！"]);
    },
    "创造价值": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["体验国内外热门、有趣、实用的AI工具，创造价值。"]);
    },
    "视频演示": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["视频演示 机遇挑战"]);
    },
    "技术研发": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["技术研发 创造价值"]);
    },
    "模块化可扩展": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["模块化可扩展"]);
    },
    "支持模块化的架构": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["支持模块化的架构，具备弹性和可扩展性，企业能够轻松扩展和定制系统，以满足不同业务快速变化需求。"]);
    },
    "数据驱动决策": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["数据驱动决策"]);
    },
    "系统侧重于数据的收集": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["系统侧重于数据的收集、分析和应用，有助于企业更好地了解其业务和客户，用数据驱动决策应对变革。"]);
    },
    "多行业多场景": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["多行业多场景"]);
    },
    "系统支持多种业务场景": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["系统支持多种业务场景，包括电子商务、教育、法律、金融等，能够满足不同行业不同业务的场景需求。"]);
    },
    "生态系统支持": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["生态系统支持"]);
    },
    "丰富的开发者资源和工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["丰富的开发者资源和工具，帮助企业构建和部署专属AI中台系统和GPT应用。速度快、周期短、成本低。"]);
    },
    "定制服务": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["解决方案 定制服务"]);
    },
    "最新动态": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["行业资讯 最新动态"]);
    }
  },
  "heder": {
    "关于我们": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["关于我们"]);
    },
    "新闻资讯": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["新闻资讯"]);
    },
    "开通服务": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["开通服务"]);
    },
    "注册登录": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["注册&登录"]);
    },
    "工作台": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["工作台"]);
    },
    "智能体": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["智能体"]);
    },
    "创建机器人": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["创建机器人"]);
    },
    "知识库训练": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["知识库训练"]);
    },
    "对话与调试": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["对话与调试"]);
    },
    "发布与输出": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["发布与输出"]);
    },
    "机器人设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["机器人设置"]);
    },
    "对话记录": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["对话记录"]);
    },
    "机器人": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["机器人"]);
    },
    "AI对话": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI对话"]);
    },
    "AI画画": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI画画"]);
    },
    "AI工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI工具"]);
    },
    "超级AI": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["超级AI"]);
    },
    "角色聊天": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["角色聊天"]);
    },
    "创作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["创作"]);
    },
    "我的收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["我的收藏"]);
    },
    "AI应用": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI应用"]);
    },
    "创建应用": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["创建应用"]);
    },
    "栏目管理": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["栏目管理"]);
    },
    "导航管理": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["导航管理"]);
    },
    "应用发布": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["应用发布"]);
    },
    "应用信息": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["应用信息"]);
    },
    "会员": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["会员"]);
    },
    "全部用户": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["全部用户"]);
    },
    "会员权益": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["会员权益"]);
    },
    "积分权益": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["积分权益"]);
    },
    "用户反馈": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["用户反馈"]);
    },
    "会员设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["会员设置"]);
    },
    "订单": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["订单"]);
    },
    "全部订单": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["全部订单"]);
    },
    "数据": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["数据"]);
    },
    "全部数据": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["全部数据"]);
    },
    "分销": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["分销"]);
    },
    "分销推广": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["分销推广"]);
    },
    "支付": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["支付"]);
    },
    "支付配置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["支付配置"]);
    },
    "流量主": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["流量主"]);
    },
    "广告配置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["广告配置"]);
    },
    "实验室": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["实验室"]);
    },
    "解决方案": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["解决方案"]);
    },
    "请选择您要管理的机器人": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["请选择您要管理的机器人"]);
    },
    "此能力仅团队": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["此能力仅团队/企业成员可用"]);
    }
  },
  "aiChat": {
    "创建新对话": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["创建新对话"]);
    },
    "是否删除该数据": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["是否删除该数据"]);
    },
    "是否删除该常用语": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["是否删除该常用语"]);
    },
    "模型设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["模型设置"]);
    },
    "模型": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["模型"]);
    },
    "电量": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["电量"]);
    },
    "生成多样性": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["生成多样性"]);
    },
    "精准": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["精准"]);
    },
    "多样性": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["多样性"]);
    },
    "技能": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["技能"]);
    },
    "AI绘画": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI绘画"]);
    },
    "AI联网搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI联网搜索"]);
    },
    "智能联想": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["智能联想"]);
    },
    "InputSuggestions3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["在模型回复后，自动提供 3 条用户输入建议"]);
    },
    "InputSuggestions": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["在模型回复后，自动推荐更适合回复该问题的智能体"]);
    },
    "智能体推荐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["智能体推荐"]);
    },
    "保存设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["保存设置"]);
    },
    "找找灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["找找灵感"]);
    },
    "message": {
      "已删除": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["已删除"]);
      },
      "修改成功": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["修改成功"]);
      },
      "删除成功": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["删除成功"]);
      }
    },
    "checkBox": {
      "全选": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["全选"]);
      },
      "确定": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["确定"]);
      }
    }
  },
  "aiApp": {
    "personalTips": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["根据您的需求配置专属工作台"]);
    },
    "manageTips": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["您是管理员，可配置该模块"]);
    },
    "配置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["配置"]);
    },
    "最近常用": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["最近常用"]);
    }
  },
  "aiEnterprise": {
    "workbench": {
      "最多可添加20个页面": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["最多可添加20个页面"]);
      },
      "创建页面": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["创建页面"]);
      },
      "是否确认删除": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["是否确认删除"]);
      },
      "工作台页面": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["工作台页面"]);
      },
      "可见范围": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["可见范围"]);
      },
      "可进行拖动修改排序": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["可进行拖动修改排序"]);
      },
      "应用名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["应用名称"]);
      },
      "是否显示": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["是否显示"]);
      },
      "全站": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["全站"]);
      },
      "下级": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["下级"]);
      },
      "单工作台模式": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["单工作台模式"]);
      },
      "默认取第一个自定义可删除的工作台": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["默认取第一个自定义可删除的工作台"]);
      }
    },
    "deploy": {
      "工作台页面": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["工作台页面"]);
      },
      "页面配置": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["页面配置"]);
      },
      "分类配置": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["分类配置"]);
      },
      "保存并发布": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["保存并发布"]);
      },
      "工作台名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["工作台名称"]);
      },
      "请输入": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["请输入"]);
      },
      "可见范围": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["可见范围"]);
      },
      "公司全员": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["公司全员"]);
      },
      "个人可见": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["个人可见"]);
      },
      "全站可见": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["全站可见"]);
      },
      "全站": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["全站"]);
      },
      "不显示图片": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["不显示图片"]);
      },
      "修改图片": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["修改图片"]);
      },
      "隐藏图片": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["隐藏图片"]);
      },
      "显示图片": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["显示图片"]);
      },
      "自定义添加": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["自定义添加"]);
      },
      "支持智能体": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["支持智能体，工具应用等"]);
      },
      "智能匹配": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["智能匹配"]);
      },
      "根据智能": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["根据智能，行业自动匹配"]);
      },
      "最多可添加": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["最多可添加"]);
      },
      "个分类可进行": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["个分类，可进行"]);
      },
      "拖动修改": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["拖动修改"]);
      },
      "排序": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["排序"]);
      },
      "编辑名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["编辑名称"]);
      },
      "创建分类": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["创建分类"]);
      },
      "请输入分类名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["请输入分类名称"]);
      },
      "常用": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["常用"]);
      },
      "分类名称": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["分类名称"]);
      },
      "已添加应用": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["已添加应用"]);
      },
      "是否显示": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["是否显示"]);
      },
      "操作": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["操作"]);
      },
      "是否确认删除该分类": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["是否确认删除该分类"]);
      },
      "该分类下的应用也会同步进行移除": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["该分类下的应用也会同步进行移除"]);
      }
    }
  },
  "aiCreative": {
    "推荐尝试": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["推荐尝试"]);
    },
    "找灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["找灵感"]);
    },
    "AI写作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI写作"]);
    },
    "写作从未如此高效": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["写作从未如此高效"]);
    },
    "快速获取写作灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["快速获取写作灵感"]);
    },
    "写作灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["写作灵感"]);
    },
    "我的收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["我的收藏"]);
    },
    "创作结果": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["创作结果"]);
    },
    "成功收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["成功收藏"]);
    },
    "取消收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["取消收藏"]);
    },
    "搜索栏目名称": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["搜索栏目名称"]);
    },
    "cCreate": {
      "不知道写什么": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["不知道写什么"]);
      },
      "试试示例": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["试试示例"]);
      },
      "共消耗": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["共消耗"]);
      },
      "添加题目类型": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["添加题目类型"]);
      },
      "立即生成": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["立即生成"]);
      }
    },
    "创建新文档": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["创建新文档"]);
    },
    "新建文档": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["新建文档"]);
    },
    "训练": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["训练"]);
    },
    "全文翻译": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["全文翻译"]);
    },
    "选择翻译语言": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["选择翻译语言"]);
    },
    "立即翻译": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["立即翻译"]);
    },
    "插入正文": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["插入正文"]);
    },
    "字数": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["字数"]);
    },
    "语气修改": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["语气修改"]);
    },
    "选择语气": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["选择语气"]);
    },
    "立即修改": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["立即修改"]);
    },
    "AI灵感": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI灵感"]);
    },
    "网页热榜": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["网页热榜"]);
    },
    "微信热榜": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["微信热榜"]);
    },
    "头条热榜": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["头条热榜"]);
    },
    "抖音热榜": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["抖音热榜"]);
    },
    "浏览器版本过低": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["浏览器版本过低，请更新版本"]);
    },
    "是否删除该记录": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["是否删除该记录"]);
    },
    "重新生成": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["重新生成"]);
    },
    "修改语气": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["修改语气"]);
    },
    "AI要点提炼": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI要点提炼"]);
    },
    "结合该热点": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["结合该热点，生成话题"]);
    },
    "已为您生成以下话题": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["已为您生成以下话题"]);
    },
    "写成文章": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["写成文章"]);
    },
    "智能配图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["智能配图"]);
    },
    "智能配图phd": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["输入一段话或短语，词汇，描述您的创意"]);
    },
    "开始配图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["开始配图"]);
    },
    "以下为配图结果": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["以下为配图结果"]);
    },
    "一键续写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["一键续写"]);
    },
    "全文润色": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["全文润色"]);
    },
    "总结摘要": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["总结摘要"]);
    },
    "全文扩写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["全文扩写"]);
    },
    "点击此按钮进行": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["点击此按钮进行"]);
    },
    "以下是内容": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["以下是内容"]);
    },
    "重新续写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["重新续写"]);
    },
    "重新润色": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["重新润色"]);
    },
    "重新总结": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["重新总结"]);
    },
    "帮你写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["帮你写"]);
    },
    "高级写作": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["高级写作"]);
    },
    "模版中心": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["模版中心"]);
    },
    "AI配图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI配图"]);
    },
    "message": {
      "请输入创意": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["请输入创意"]);
      }
    },
    "点击输入内容": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["点击输入内容"]);
    }
  },
  "aiDrawList": {
    "AI画画工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI画画工具"]);
    },
    "AI作画": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI作画"]);
    },
    "文字生成创意图片": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["文字生成创意图片、插画、壁纸"]);
    },
    "AI海报": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI海报"]);
    },
    "生成企业营销海报": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["生成企业营销海报"]);
    },
    "AI抠图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI抠图"]);
    },
    "一键去除背景": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["一键去除背景"]);
    },
    "AI背景替换": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI背景替换"]);
    },
    "一键替换图片背景": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["一键替换图片背景"]);
    },
    "艺术字": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["艺术字"]);
    },
    "生成艺术字": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["输入文字，生成艺术字"]);
    },
    "AI模特图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI模特图"]);
    },
    "选择模特类型": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["选择模特类型，帮你生成"]);
    },
    "近期作品": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["近期作品"]);
    },
    "作画作品": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["作画作品"]);
    },
    "海报作品": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["海报作品"]);
    },
    "灵感推荐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["灵感推荐"]);
    },
    "我的收藏": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["我的收藏"]);
    },
    "画同款": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["画同款"]);
    }
  },
  "aiSearch": {
    "请遵守": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["请遵守"]);
    },
    "用户服务协议": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["用户服务协议"]);
    },
    "agreementTip": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ai结果由各大模型输出，其内容仅供参考，不代表我们的观点和态度。"]);
    },
    "AI搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI 搜索"]);
    },
    "AI智能搜索": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI智能搜索，搜索快人一步"]);
    },
    "点击输入想要了解的问题": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["点击输入想要了解的问题"]);
    },
    "搜索范围": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["搜索范围"]);
    },
    "高级设置": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["高级设置"]);
    },
    "延伸阅读": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["延伸阅读"]);
    },
    "输出语言": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["输出语言"]);
    },
    "简洁": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["简洁"]);
    },
    "深度研究": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["深度研究"]);
    },
    "学术研究": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["学术研究"]);
    },
    "全网": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["全网"]);
    },
    "学术": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["学术"]);
    },
    "播客": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["播客"]);
    },
    "新搜索任务": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["新搜索任务"]);
    },
    "追问": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["追问"]);
    },
    "导出中": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["导出中"]);
    },
    "大纲": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["大纲"]);
    },
    "脑图": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["脑图"]);
    },
    "大纲生成中": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["大纲生成中"]);
    },
    "相关事件": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["相关事件"]);
    },
    "事件概述": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["事件概述"]);
    },
    "相关组织": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["相关组织"]);
    },
    "组织名称": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["组织名称"]);
    },
    "事件名称": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["事件名称"]);
    },
    "概述": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["概述"]);
    },
    "相关人物": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["相关人物"]);
    },
    "人物名称": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["人物名称"]);
    },
    "参考文献": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["参考文献"]);
    },
    "资料搜索中": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["资料搜索中"]);
    }
  },
  "audio": {
    "AI音频工具": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI音频工具"]);
    },
    "AI音乐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["AI音乐"]);
    },
    "自由创作随心所欲": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["自由创作随心所欲"]);
    },
    "文件转写": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["文件转写"]);
    },
    "上传本地音视频": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["上传本地音视频、导入知识库文件，智能总结要点，一键导出"]);
    },
    "灵感推荐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["灵感推荐"]);
    },
    "推荐": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["推荐"]);
    },
    "创作同款": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["创作同款"]);
    }
  }
};
const messages = { "en": locale_en, "zh": locale_zh };
const isEmpty = (obj) => Object.keys(obj).length === 0;
const plugin_FRmGFsEaPh = defineNuxtPlugin(async (nuxt) => {
  const { vueApp: app } = nuxt;
  const loadedOptions = await optionsLoader();
  if (!isEmpty(messages)) {
    loadedOptions.messages = messages;
  }
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    ...loadedOptions
  });
  app.use(i18n);
});
const routeDictionary = [
  { name: "大模型选择", label: "大模型选择", value: "BIG_MODEL_SELECT", businessType: "BIG_MODEL_SELECT", url: "/" },
  { name: "智能PPT", label: "智能PPT", value: "INTELLIGENT_PPT", businessType: "INTELLIGENT_PPT", url: "/robot/tool/ppt", parentType: ["FUNCTION_RECOMMEND"] },
  { name: "联网查询", label: "联网查询", value: "AGENT_BODY", businessType: "AGENT_BODY", url: "/robot/brain/agency", parentType: ["FUNCTION_RECOMMEND"] },
  { name: "文件解读", label: "文件解读", value: "NETWORK_FILE_ANALYSIS", businessType: "NETWORK_FILE_ANALYSIS", url: "/robot/brain/networking", parentType: ["FUNCTION_RECOMMEND"] },
  { name: "AI海报", label: "AI海报", value: "AI_ROBOT_POSTER", businessType: "AI_ROBOT_POSTER", url: "/robot/draw/list?type=placard", parentType: ["ROBOT_MENU"] },
  { name: "图片识别分析", label: "图片识别分析", value: "IMAGE_RECOGNITION_ANALYSIS", businessType: "IMAGE_RECOGNITION_ANALYSIS", url: "/robot/tool/identify", parentType: ["FUNCTION_RECOMMEND"] },
  { name: "思维导图分析", label: "思维导图分析", value: "MIND_MAP_ANALYSIS", businessType: "MIND_MAP_ANALYSIS", url: "/robot/tool/thinking", parentType: ["FUNCTION_RECOMMEND"] },
  { name: "AI创作", label: "AI创作", value: "AI_CREATION", businessType: "AI_CREATION", url: "/ai/creative", parentType: ["ROBOT_MENU"] },
  { name: "AI智能体", label: "AI智能体", value: "AI_ROLE", businessType: "AI_ROLE", url: "/robot/chat/role", parentType: ["ROBOT_MENU"] },
  { name: "AI画画", label: "AI画画", value: "AI_DRAW", businessType: "AI_DRAW", url: "/robot/draw/list", parentType: ["ROBOT_MENU"] },
  { name: "AI工具", label: "AI工具", value: "AI_TOOLS", businessType: "AI_TOOLS", url: "/robot/tool/thinking", parentType: ["ROBOT_MENU"] },
  { name: "AI对话", label: "AI对话", value: "AI_CHAT", businessType: "AI_CHAT", url: "/ai/chat", parentType: ["ROBOT_MENU"] },
  { name: "AI音乐", label: "AI音乐", value: "AI_MUSIC", businessType: "AI_MUSIC", url: "/robot/brain/music", parentType: ["ROBOT_MENU"] },
  { name: "实验室", label: "实验室", value: "LAB_MENU", businessType: "LAB_MENU", url: "/laboratory" },
  { name: "关于我们", label: "关于我们", value: "ABOUT_US", businessType: "ABOUT_US", url: "/about" },
  { name: "AI音频", label: "AI音频", value: "AI_AUDIO", businessType: "AI_AUDIO", url: "/ai/audio" }
];
const routeDictionaryList = [
  { name: "大模型选择", type: "BIG_MODEL_SELECT", url: "/" },
  { name: "智能PPT", type: "INTELLIGENT_PPT", url: "/robot/tool/ppt" },
  { name: "联网查询", type: "AGENT_BODY", url: "/ai/agency" },
  { name: "文件解读", type: "NETWORK_FILE_ANALYSIS", url: "/robot/brain/networking" },
  { name: "AI海报", type: "AI_ROBOT_POSTER", url: "/robot/draw/list?type=placard" },
  { name: "图片识别分析", type: "IMAGE_RECOGNITION_ANALYSIS", url: "/robot/tool/identify" },
  { name: "思维导图分析", type: "MIND_MAP_ANALYSIS", url: "/robot/tool/thinking" },
  { name: "AI写作", type: "AI_CREATION", url: "/ai/creative" },
  { name: "AI写作", type: "AI_WRITING", url: "/ai/creative" },
  { name: "操作辅助", type: "OPERATION_HELP", url: "" },
  { name: "AI智能体", type: "AI_ROLE", url: "/ai/agent" },
  { name: "AI智能体", type: "AI_INTELLIGENT_AGENT", url: "/ai/agent" },
  { name: "AI画画", type: "AI_DRAW", url: "/ai/draw/list" },
  { name: "AI工具", type: "AI_TOOLS", url: "/ai/tool" },
  { name: "AI工具", type: "AI_TOOL", url: "/ai/tool" },
  { name: "AI对话", type: "AI_CHAT", url: "/ai/chat" },
  { name: "全能对话机器人", type: "ALMIGHTY_CHAT_ROBOT", url: "/ai/chat" },
  { name: "AI音乐", type: "AI_MUSIC", url: "/robot/brain/music" },
  { name: "AI音乐", type: "MUSIC", url: "/robot/brain/music" },
  { name: "实验室", type: "LAB_MENU", url: "/ai/laboratory" },
  { name: "关于我们", type: "ABOUT_US", url: "/about" },
  { name: "AI角色", type: "ROLE", url: "/ai/chat" },
  { name: "AI创作", type: "QUESTION_BANK", url: "/ai/chat" },
  { name: "对话", type: "CHAT", url: "/ai/chat" },
  { name: "对话", type: "AI_ASSISTANT", url: "/ai/chat" },
  { name: "绘画", type: "DRAW", url: "/ai/draw" },
  { name: "海报", type: "POSTER_ROBOT", url: "/ai/placard/list" },
  { name: "海报", type: "POSTER_TEMPLATE_ROBOT", url: "/ai/placard/list" },
  { name: "抠图", type: "IMAGE_CUTOUT", url: "/ai/draw/cutout" },
  { name: "背景替换", type: "BACKGROUND_ROBOT", url: "/ai/draw/background" },
  { name: "AI搜索机器人", type: "AI_SEARCH", url: "/ai/search" },
  { name: "多模型", type: "MULTIPLE_MODELS_CHAT", url: "/ai/chat" },
  { name: "ppt", type: "PPT_ROBOT", url: "/ai/ppt" },
  { name: "文件解读", type: "FILE_ANALYSIS_ROBOT", url: "/robot/brain/networking" },
  { name: "思维导图", type: "MIND_MAPPING", url: "/robot/tool/thinking" },
  { name: "图片识别分析", type: "SYSTEM_IMAGE_RECOGNITION_CHAT", url: "/robot/tool/identify" },
  { name: "皮肤检测", type: "SKIN_DETECTION", url: "/robot/tool/skin" },
  { name: "智能HR", type: "HR", url: "/robot/brain/hr" },
  { name: "面部特性分析", type: "FACE_ANALYSIS", url: "/robot/tool/face" },
  { name: "作文改写", type: "ESSAY_CORRECTION", url: "/robot/tool/rewrite" },
  { name: "口算批改", type: "ARITHMETIC_CORRECTION_ROBOT", url: "/robot/tool/compute" },
  { name: "联网查询", type: "SUPER", url: "/ai/agency" },
  { name: "多模型比较", type: "MULTI_MODEL_BATTLES", url: "/ai/pk" },
  { name: "艺术字", type: "WORDART_CHAT_ROBOT", url: "/ai/draw/wordart" },
  { name: "AI音频", type: "AI_AUDIO", url: "/ai/audio" }
];
const { Message: Message$2 } = ipkg;
axios$1.defaults.timeout = 1e6;
axios$1.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios$1.interceptors.request.use((config) => {
  let authtoken = useCookie("authtoken").value;
  if (authtoken !== void 0) {
    if (config.headers["x-auth-token"] !== gettoken$1()) {
      config.headers["x-auth-token"] = gettoken$1();
    }
  }
  if (config.url === "/api/comm/pic-upload-util") {
    return config;
  } else {
    config.data = JSON.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
axios$1.interceptors.response.use((res) => {
  return res;
}, (error) => {
  if (error.message === "Network Error")
    error = "您当前网络不稳定，请重试";
  return Promise.reject(error);
});
function gettoken$1() {
  let authtoken = useCookie("authtoken").value;
  if (authtoken !== void 0) {
    return authtoken.userToken;
  } else {
    return "";
  }
}
function fetchget(url, params = {}) {
  if ($stringify(params).length > 0) {
    url = url + "?" + $stringify(params);
  }
  if (url != "") {
    url = url.replace(/dictAll/g, "");
  }
  var timeStampStr = new Date().getTime();
  var source2 = "";
  const headers = useRequestHeaders();
  {
    source2 = headers == null ? void 0 : headers.host;
  }
  if (url.indexOf("?") >= 0) {
    url = url + "&timeStampStr=" + timeStampStr + "&source=" + source2;
    let sendata = parseQueryString(url);
    let data = objKeySort(sendata);
    const configEnv = useRuntimeConfig();
    let key = configEnv.public.VITE_AAPP_KEY;
    let sign = CryptoJs.HmacSHA256(data, key).toString();
    let wordArray = CryptoJs.enc.Hex.parse(sign);
    let base64 = CryptoJs.enc.Base64.stringify(wordArray);
    url = url + "&sign=" + encodeURIComponent(base64);
  }
  return new Promise((resolve, reject2) => {
    axios$1.get(url).then(
      (response) => {
        if (response.data.resultCode == 1) {
          resolve(response.data);
        } else {
          let codeList = [770301, 770302, 770303, 770304, 770305];
          if (codeList.indexOf(response.data.resultCode) == -1) {
            Message$2.error(response.data.resultMsg);
          }
          tokenerror$1(response.data);
          reject2(response.data);
        }
      },
      (err) => {
        reject2(err);
      }
    ).catch((error) => {
      reject2(error);
    });
  });
}
function fetchpost$1(url, params = {}) {
  var base64 = "";
  var source2 = "";
  const headers = useRequestHeaders();
  {
    source2 = headers == null ? void 0 : headers.host;
  }
  Object.assign(params, {
    timeStampStr: new Date().getTime(),
    source: source2
  });
  const configEnv = useRuntimeConfig();
  let data = JSON.stringify(params);
  let key = configEnv.public.VITE_AAPP_KEY;
  let sign = CryptoJs.HmacSHA256(data, key).toString();
  let wordArray = CryptoJs.enc.Hex.parse(sign);
  base64 = CryptoJs.enc.Base64.stringify(wordArray);
  return new Promise((resolve, reject2) => {
    axios$1.post(url, params, {
      headers: {
        "X-DZQ-Signature": base64.toString()
      }
    }).then(
      (response) => {
        if (response.data.resultCode == 1) {
          resolve(response.data);
        } else {
          let codeList = [770301, 770302, 770303, 770304, 770305];
          if (codeList.indexOf(response.data.resultCode) == -1) {
            Message$2.error(response.data.resultMsg);
          }
          tokenerror$1(response.data);
          reject2(response.data);
        }
      },
      (err) => {
        reject2(err);
      }
    ).catch((error) => {
      reject2(error);
    });
  });
}
function fetchpostImg(url, params = {}) {
  var base64 = "";
  Object.assign(params, {
    timeStampStr: new Date().getTime()
  });
  const configEnv = useRuntimeConfig();
  let data = JSON.stringify(params);
  let key = configEnv.public.VITE_AAPP_KEY;
  let sign = CryptoJs.HmacSHA256(data, key).toString();
  let wordArray = CryptoJs.enc.Hex.parse(sign);
  base64 = CryptoJs.enc.Base64.stringify(wordArray);
  return new Promise((resolve, reject2) => {
    axios$1.post(url, params, {
      headers: {
        "X-DZQ-Signature": base64.toString(),
        "Content-Type": "multipart/form-data"
      }
    }).then(
      (response) => {
        if (response.data.resultCode == 1) {
          resolve(response.data);
        } else {
          tokenerror$1(response.data);
          reject2(response.data);
        }
      },
      (err) => {
        reject2(err);
      }
    ).catch((error) => {
      reject2(error);
    });
  });
}
function $stringify(item) {
  if (item === "" || item === null || item === void 0)
    return "";
  let urldata = "";
  for (var key in item) {
    let str = typeof item[key] == "string" ? item[key].replace(/(^\s*)|(\s*$)/g, "") : item[key];
    urldata += key + "=" + str + "&";
  }
  return urldata.substring(0, urldata.length - 1);
}
function objKeySort(obj) {
  var item = Object.keys(obj).sort();
  let urldata = "";
  var val;
  for (var key in item) {
    val = obj[item[key]];
    if (item[key] == "redirectUrl") {
      val = decodeURIComponent(val);
    }
    if (item[key] == "sign") {
      continue;
    }
    if (val.length == 0) {
      continue;
    }
    urldata += item[key] + "=" + val + "&";
  }
  return urldata.substring(0, urldata.length - 1);
}
function parseQueryString(url) {
  var str = url.split("?")[1], items = str.split("&");
  var arr, name, value, newobj = {};
  for (var i = 0; i < items.length; i++) {
    arr = items[i].split("=");
    name = arr[0];
    value = arr[1];
    newobj[name] = value;
  }
  return newobj;
}
const tokenerror$1 = (res) => {
  if (res.resultCode === 1101 || res.resultCode === 1100 || res.resultCode === 1108) {
    const router = useRouter();
    useCookie("authtoken").value = null;
    router.push({
      path: "/login"
    });
  } else {
    const router = useRouter();
    let codeList = [770301, 770302, 770303];
    let codeList2 = [770304, 770305];
    if (codeList.indexOf(res.resultCode) != -1) {
      let str = res.resultMsg.split("@");
      Message$2.error(str[0]);
      const routing = getRouting();
      let flag = false;
      routing.permList.forEach((item, i) => {
        if (item.tempCode == "33143") {
          flag = true;
        }
        if (i == Number(routing.permList.length - 1)) {
          if (flag) {
            routing.setIsRecharge(false);
            setTimeout(() => {
              routing.setIsRecharge(true);
            }, 100);
          }
        }
      });
    }
    if (codeList2.indexOf(res.resultCode) != -1) {
      let str = res.resultMsg.split("@");
      Message$2.error(str[0]);
      router.push("/member");
    }
  }
};
const axios1 = {
  //上传图片
  picUploadUtil(data) {
    return fetchpostImg("/api/comm/pic-upload-util", data);
  },
  // 查询机器人分类列表-[API-OFFICE-ROBOT001]
  robot_listCategory(data) {
    return fetchget("/api/office/robot/list-category", data);
  },
  // 随机查询提示词分类-[API-OFFICE-PROMPT-CATEGORY001]
  robot_randomPromptCategory(data) {
    return fetchget("/api/office/prompt/cateogry/list-random-prompt-category", data);
  },
  // 分页查询分类机器人列表-[API-OFFICE-ROBOT001]
  robot_robotList(data) {
    return fetchget("/api/office/robot/list-robot", data);
  },
  // 获取题库页面信息[API-OFFICE-ROBOT003]
  robot_columnPage(data) {
    return fetchget("/api/office/robot/get-column-page", data);
  },
  //请求ChatGPT聊天补全接口-[API-OFFICE-REQ-CHAT001]
  submitChatCompletions(data) {
    return fetchpost$1("/api/office/black/chat/submit-chat-completions", data);
  },
  //请求ChatGPT聊天补全接口-[API-OFFICE-REQ-CHAT001]
  submitChatCompletionsStream(data) {
    return fetchpost$1("/api/office/black/chat/submit-chat-completions-stream", data);
  },
  //分页查询对话记录列表-[API-OFFICE-BLACK-GROUP001]
  robot_groupList(data) {
    return fetchget("/api/office/black/group/list-by-page", data);
  },
  // 分页查询对话明细数据列表-[API-OFFICE-BLACK-GROUP002]
  robot_groupLogList(data) {
    return fetchget("/api/office/black/group/list-req-log-by-page", data);
  },
  // 根据机器人分类获取机器人详情信息[API-OFFICE-ROBOT005]
  robot_robotId(data) {
    return fetchget("/api/office/robot/get-robot-by-cate", data);
  },
  // 识别图片内容[API-CUST-OCR001]
  getImageContent(data) {
    return fetchget("/api/cust/ocr/get-image-content", data);
  },
  get_log_detail(data) {
    return fetchget("/api/office/black/reqlog/get-log-detail", data);
  },
  //添加收藏机器人[API-OFFICE-ROBOT-FAVORITE001]
  addRobotFavorite(data) {
    return fetchpost$1("/api/office/robot/favorite/add-robot-favorite", data);
  },
  //取消收藏机器人[API-OFFICE-ROBOT-FAVORITE002]
  cancelRobotFavorite(data) {
    return fetchpost$1(" /api/office/robot/favorite/cancel-robot-favorite", data);
  },
  //通过拷贝方式创建机构应用-[API-OFFICE-ORG-APP001]
  addOrgAppCopy(data) {
    return fetchpost$1("/api/office/org/app/add-org-app-copy", data);
  },
  //分页查询应用管理列表-[API-OFFICE-ORG-APP002]
  app_appList(data) {
    return fetchget("/api/office/org/app/list-by-page", data);
  },
  //查询提示词分类列表-[API-OFFICE-PROMPT-CATEGORY002]
  prompt_cateogryList(data) {
    return fetchget("/api/office/prompt/cateogry/list-prompt-category", data);
  },
  //分页查询聊天记录列表-[API-OFFICE-REQ-LOG001]
  reqlogListPage(data) {
    return fetchget("/api/office/black/reqlog/list-by-page", data);
  },
  //应用详情[ API-OFFICE-ORG-APP003]
  getAppDetail(data) {
    return fetchget("/api/office/org/app/get-app-detail", data);
  },
  //分页查询商户/消费者登录账号信息[API-OFFICE-LOGACCT001]
  listLoginAccountByPage(data) {
    return fetchget("/api/office/system/user/list-login-account-by-page", data);
  },
  //分页查询商户/消费者登录账号信息[API-OFFICE-LOGACCT001]
  robot_favoriteList(data) {
    return fetchget("/api/office/robot/favorite/list-by-page", data);
  },
  //  查询收藏记录[API-OFFICE-BLACK-FAVORITE001]
  favoriteListPage(data) {
    return fetchget("/api/office/black/user/favorite/list-by-page", data);
  },
  //  获取机器人详情信息[API-OFFICE-ROBOT004]
  robot_robotDetail(data) {
    return fetchget("/api/office/robot/get-robot-detail", data);
  },
  // 查询提示词列表-[API-OFFICE-PROMPT001]
  robot_promptList(data) {
    return fetchget("/api/office/robot/prompt/list-prompt", data);
  },
  // 创建新会话组
  chat_addChatSession(data) {
    return fetchpost$1("/api/office/black/chat/add-chat-session", data);
  },
  // 添加操作收藏[API-OFFICE-BLACK-FAVORITE003]
  add_favoriteInfo(data) {
    return fetchpost$1("/api/office/black/user/favorite/add-favorite-info", data);
  },
  // 查询推荐首页机器人列表-[API-OFFICE-ROBOT007]
  home_recommendRobotList(data) {
    return fetchget("/api/office/robot/list-recommend-robot", data);
  },
  // 查询栏目分类列表[API-APP-CATEGORY-TYPE007]
  categoryList(data) {
    return fetchget("/api/office/black/category/type/list-category-type", data);
  },
  // 新增栏目分类[API-APP-CATEGORY-TYPE002]
  addCategoryType(data) {
    return fetchpost$1("/api/office/black/category/type/add-category-type", data);
  },
  // 编辑栏目分类[API-APP-CATEGORY-TYPE003]
  editCategoryType(data) {
    return fetchpost$1("/api/office/black/category/type/edit-category-type", data);
  },
  //删除栏目分类信息[API-APP-CATEGORY-TYPE005]
  delCategoryType(data) {
    return fetchpost$1("/api/office/black/category/type/delete-by-id", data);
  },
  // 删除栏目信息[API-APP-CATEGORY005]
  delCategory(data) {
    return fetchpost$1("/api/office/black/category/delete-by-id", data);
  },
  // 获取题库页面信息[API-OFFICE-ROBOT003]
  robotColumnPage(data) {
    return fetchget("/api/office/robot/get-column-page", data);
  },
  // 添加栏目[API-APP-CATEGORY002]
  addCategory(data) {
    return fetchpost$1("/api/office/black/category/add-category", data);
  },
  // 编辑栏目[API-APP-CATEGORY003]
  modifyCategory(data) {
    return fetchpost$1("/api/office/black/category/modify-category", data);
  },
  //获取导航信息
  get_column_info(data) {
    return fetchget("/api/office/black/column/get-column-info", data);
  },
  //添加导航信息
  add_column_info(data) {
    return fetchpost$1("/api/office/black/column/add-column", data);
  },
  //编辑导航信息
  modify_column_info(data) {
    return fetchpost$1("/api/office/black/column/modify-column", data);
  },
  //会员权益列表
  goods_list_by_page(data) {
    return fetchget("/api/office/member/service/goods/list-by-page", data);
  },
  //添加会员权益
  add_member_goods(data) {
    return fetchpost$1("/api/office/member/service/goods/add-member-goods", data);
  },
  //编辑会员权益
  goods_mod_member_goods(data) {
    return fetchpost$1("/api/office/member/service/goods/mod-member-goods", data);
  },
  //会员权益详情
  goods_list_page(data) {
    return fetchget("/api/office/member/service/goods/list-page", data);
  },
  //删除会员权益
  goods_del_member_goods(data) {
    return fetchpost$1("/api/office/member/service/goods/del-member-goods", data);
  },
  //关闭或开启会员权益
  goods_change_member_state(data) {
    return fetchpost$1("/api/office/member/service/goods/change-member-state", data);
  },
  //禁用账户
  user_disable_login_account(data) {
    return fetchpost$1("/api/office/system/user/disable-login-account", data);
  },
  //启用账户
  user_enable_login_account(data) {
    return fetchpost$1("/api/office/system/user/enable-login-account", data);
  },
  //用户详情
  user_get_login_account(data) {
    return fetchget("/api/office/system/user/get-login-account", data);
  },
  //积分权益
  config_get_point_benefit_config(data) {
    return fetchget("/api/office/point/benefit/config/get-point-benefit-config", data);
  },
  //积分权益编辑
  add_point_benefit_config(data) {
    return fetchpost$1("/api/office/point/benefit/config/add-point-benefit-config", data);
  },
  //编辑应用
  app_update_org(data) {
    return fetchpost$1("/api/office/org/app/update-org", data);
  },
  //查询首页行业咨询文章信息列表[API-PORTAL-ARTICLE-INFO004]
  home_articleList(data) {
    return fetchget("/api/article/info/list-home-info", data);
  },
  //获取新闻资讯类别信息列表[API-PORTAL-ARTICLE-INFO003]
  articleListCategory(data) {
    return fetchget("/api/article/info/list-article-category", data);
  },
  //分页查询新闻资讯信息列表[API-PORTAL-ARTICLE-INFO001]
  articleList(data) {
    return fetchget("/api/article/info/list-info-by-page", data);
  },
  //获取文章详情信息[API-PORTAL-ARTICLE-INFO007]
  articleInfo(data) {
    return fetchget("/api/article/info/get-article-info", data);
  },
  //获取问答栏目信息[API-OFFICE-CATEGORY009
  getCategoryQa(data) {
    return fetchget("/api/office/black/category/get-category-qa", data);
  },
  //根据机器人分类获取机器人详情信息[API-OFFICE-ROBOT008]
  robot_cateListTool(data) {
    return fetchget("/api/office/robot/get-robot-by-cate-list", data);
  },
  //反馈列表
  list_feedback_by_page(data) {
    return fetchget("/api/office/feedback/list-feedback-by-page", data);
  },
  //反馈详情
  get_feedback_by_id(data) {
    return fetchget("/api/office/feedback/get-feedback-by-id", data);
  },
  //删除反馈
  delete_feedback_by_id(data) {
    return fetchpost$1("/api/office/feedback/delete-feedback-by-id", data);
  },
  //修改用户信息
  update_user_service_acct(data) {
    return fetchpost$1("/api/office/system/user/update-user-service-acct", data);
  },
  //用户积分明细
  item_list_by_page(data) {
    return fetchget("/api/office/user/service/item/list-by-page", data);
  },
  //栏目统计
  get_category_statistics(data) {
    return fetchget("/api/office/black/category/get-category-statistics", data);
  },
  //分销用户
  account_list_by_page(data) {
    return fetchget("/api/office/black/dist/account/list-by-page", data);
  },
  //分销申请
  apply_list_by_page(data) {
    return fetchget("/api/office/black/dist/apply/list-by-page", data);
  },
  //删除分销申请
  apply_delete_by_id(data) {
    return fetchpost$1("/api/office/black/dist/apply/delete-by-id", data);
  },
  //审核分销申请
  apply_change_apply_state(data) {
    return fetchpost$1("/api/office/black/dist/apply/change-apply-state", data);
  },
  //佣金明细
  brokerage_item_list_by_page(data) {
    return fetchget("/api/office/black/dist/account/item/list-by-page", data);
  },
  //分销推广订单
  order_list_by_page(data) {
    return fetchget("/api/office/black/dist/order/list-by-page", data);
  },
  //获取分销设置
  setup_get_dist_setup(data) {
    return fetchget("/api/office/black/dist/setup/get-dist-setup", data);
  },
  //保存分销设置
  setup_update_dist_setup(data) {
    return fetchpost$1("/api/office/black/dist/setup/update-dist-setup", data);
  },
  //提现记录
  withdraw_get_dist_withdraw_info(data) {
    return fetchget("/api/office/black/dist/withdraw/get-dist-withdraw-info", data);
  },
  //提现审核
  withdraw_change_state(data) {
    return fetchpost$1("/api/office/black/dist/withdraw/change-state", data);
  },
  //分页提现记录
  withdraw_list_by_page(data) {
    return fetchget("/api/office/black/dist/withdraw/list-by-page", data);
  },
  //推广明细
  invite_user_list_by_page(data) {
    return fetchget("/api/office/black/dist/invite/user/list-by-page", data);
  },
  //获取会员设置
  config_get_org_user_config(data) {
    return fetchget("/api/office/org/user/config/get-org-user-config", data);
  },
  //会员设置
  config_setup_org_user_config(data) {
    return fetchpost$1("/api/office/org/user/config/setup-org-user-config", data);
  },
  //订单列表
  member_order_list_by_page(data) {
    return fetchget("/api/office/member/order/list-by-page", data);
  },
  //订单详情
  get_member_order_detail(data) {
    return fetchget("/api/office/member/order/get-member-order-detail", data);
  },
  //删除订单
  order_del_platform_order(data) {
    return fetchpost$1("/api/office/member/order/del-platform-order", data);
  },
  //会员手机号列表
  list_org_user_phone_by_page(data) {
    return fetchget("/api/office/org/user/config/list-org-user-phone-by-page", data);
  },
  //添加会员手机号
  setup_org_user_phone_config(data) {
    return fetchpost$1("/api/office/org/user/config/setup-org-user-phone-config", data);
  },
  //删除会员手机号
  del_org_user_phone(data) {
    return fetchpost$1("/api/office/org/user/config/del-org-user-phone", data);
  },
  //广告列表
  list_advert_third_party(data) {
    return fetchget("/api/office/advert/list-advert-third-party", data);
  },
  //编辑广告
  update_advert_third_party(data) {
    return fetchpost$1("/api/office/advert/update-advert-third-party", data);
  },
  //更新广告状态
  update_advert_third_party_state(data) {
    return fetchpost$1("/api/office/advert/update-advert-third-party-state", data);
  },
  //支付方式
  office_list_pay_method(data) {
    return fetchget("/api/checkstand/office/list-pay-method", data);
  },
  //支付配置
  office_get_pay_channel_rel(data) {
    return fetchget("/api/checkstand/office/get-pay-channel-rel", data);
  },
  //配置支付方式
  office_config_pay_channel(data) {
    return fetchpost$1("/api/checkstand/office/config-pay-channel", data);
  },
  //独立支付标识
  office_get_pay_indepent_pay_flag(data) {
    return fetchget("/api/checkstand/office/get-pay-indepent-pay-flag", data);
  },
  //设置独立支付状态
  office_enable_pay_indepent_pay_flag(data) {
    return fetchpost$1("/api/checkstand/office/enable-pay-indepent-pay-flag", data);
  },
  //查询收银台支持的支付方式列表
  office_list_pay_channel(data) {
    return fetchget("/api/checkstand/channel/office/list-pay-channel", data);
  },
  //查询支付配置信息
  office_get_pay_channel(data) {
    return fetchget("/api/checkstand/channel/office/get-pay-channel", data);
  },
  //配置支付方式信息
  channel_office_config_pay_channel(data) {
    return fetchpost$1("/api/checkstand/channel/office/config-pay-channel", data);
  },
  //开启/关闭支付配置
  channel_office_enable_pay_channel(data) {
    return fetchpost$1("/api/checkstand/channel/office/enable-pay-channel", data);
  },
  //查询独立支付标识
  channel_office_get_pay_indepent_pay_flag(data) {
    return fetchget("/api/checkstand/channel/office/get-pay-indepent-pay-flag", data);
  },
  //开启/关闭独立支付方式
  channel_office_enable_pay_indepent_pay_flag(data) {
    return fetchpost$1("/api/checkstand/channel/office/enable-pay-indepent-pay-flag", data);
  },
  //数据报表
  report_get_ai_app_data(data) {
    return fetchget("/api/office/report/get-ai-app-data", data);
  },
  //报表数据
  report_get_app_data_day(data) {
    return fetchget("/api/office/report/get-app-data-day", data);
  },
  // 获取小程序详情信息[API-APP-MINIAPP001]
  chat_app_miniapp_mini_info(data) {
    return fetchget("/api/office/black/miniapp/get-mini-info", data);
  },
  // 新增微信小程序注册信息[API-APP-MINIAPP-APPLY001]
  chat_app_miniapp_apply_add(data) {
    return fetchpost$1("/api/office/black/miniapp/apply/add-miniapp-apply", data);
  },
  // 编辑微信小程序注册信息[API-APP-MINIAPP-APPLY003]
  chat_app_miniapp_apply_update(data) {
    return fetchpost$1("/api/office/black/miniapp/apply/update-miniapp-apply", data);
  },
  // 获取小程序注册信息[API-APP-MINIAPP-APPLY002]
  chat_app_miniapp_apply_info(data) {
    return fetchget("/api/office/black/miniapp/apply/get-miniapp-apply", data);
  },
  // 获取个人认证二维码[API-APP-MINIAPP-APPLY005]
  chat_app_miniapp_authorize_url(data) {
    return fetchget("/api/office/black/miniapp/apply/get-authorize-url", data);
  },
  // 生成小程序授权二维码地址[API-APP-MINIAPP-APPLY004]
  chat_app_miniapp_authorization_url(data) {
    return fetchget("/api/office/black/miniapp/apply/get-mini-authorization", data);
  },
  // 判断是否可以开通小程序[API-OFFICE-MINIAPP-APPLY006]
  chat_app_check_can_add_mini_apply(data) {
    return fetchpost$1("/api/office/black/miniapp/apply/check-can-add-mini-apply", data);
  },
  // 提交应用订单信息[API-OFFICE-APP-ORDER001]
  chat_app_submit_app_order(data) {
    return fetchpost$1("/api/office/app/order/submit-app-order", data);
  },
  // 加载订单预支付交易的相关数据[API-OFFICE-PAY001]
  chat_app_load_prepare_payment(data) {
    return fetchpost$1("/api/office/payment/load-prepare-payment-data", data);
  },
  // 提交支付订单进行支付[API-OFFICE-PAY002]
  chat_app_submit_payment(data) {
    return fetchpost$1("/api/office/payment/submit-payment", data);
  },
  // 查询订单支付状态信息[API-OFFICE-PAY003]
  chat_app_query_payment_status(data) {
    return fetchpost$1("/api/office/payment/query-payment-status", data);
  },
  /** 小程序管理
  */
  miniapp_list(data) {
    return fetchget("/api/office/black/miniapp/list-by-page", data);
  },
  get_mini_info(data) {
    return fetchget("/api/office/black/miniapp/get-mini-info", data);
  },
  // 获取小程序可修改次数
  get_mini_modify_info(data) {
    return fetchget("/api/office/black/miniapp/get-mini-modify-info", data);
  },
  // 获取小程序码
  miniapp_invite_qr_code(data) {
    return fetchget("/api/office/black/miniapp/invite-qr-code", data);
  },
  // 查询小程序列表
  miniapp_list_miniapp(data) {
    return fetchget("/api/office/black/miniapp/list-miniapp", data);
  },
  // 发布 更新
  miniapp_publish_app(data) {
    return fetchpost$1("/api/office/black/miniapp/publish-app", data);
  },
  // 更新记录
  miniapp_record(data) {
    return fetchget("/api/office/black/miniapp/release/record/list-by-page", data);
  },
  // 提交审核
  miniapp_submit_examine(data) {
    return fetchpost$1("/api/office/black/miniapp/submit-examine", data);
  },
  // 修改小程序头像
  miniapp_update_app_avatar_url(data) {
    return fetchpost$1("/api/office/black/miniapp/update-app-avatar-url", data);
  },
  // 获取设置类目列表
  miniapp_get_list_category(data) {
    return fetchget("/api/office/black/miniapp/category/list-category-by-app", data);
  },
  // 修改小程序类目
  miniapp_update_app_category(data) {
    return fetchpost$1("/api/office/black/miniapp/update-app-category", data);
  },
  // 【微信基础数据】获取可设置类目
  miniapp_list_category(data) {
    return fetchget("/api/office/black/miniapp/category/list-category", data);
  },
  // 删除 类目
  miniapp_del_category(data) {
    return fetchpost$1("/api/office/black/miniapp/category/del-category", data);
  },
  miniapp_update_app_name(data) {
    return fetchpost$1("/api/office/black/miniapp/update-app-name", data);
  },
  // 设置小程序功能介绍
  miniapp_update_app_remarks(data) {
    return fetchpost$1("/api/office/black/miniapp/update-app-remarks", data);
  },
  // 获取AI应用数据报表[API-APP-REPORT-SUMMARY001]
  get_ai_app_data(data) {
    return fetchget("/api/office/report/get-ai-app-data", data);
  },
  /** 小程序模板管理 End*/
  // [API-COMM-ADVERT001]-获取广告详情列表
  banner_list_photo(data) {
    return fetchget("/api/comm/board/list-photo", data);
  },
  // 查询应用模板列表-[API-OFFICE-APP-APPTEMPLATE001]
  template_list_app(data) {
    return fetchget("/api/app/template/list-by-page", data);
  },
  // 注销应用信息[API-OFFICE-ORG-APP005]
  logout_org(data) {
    return fetchpost$1("/api/office/org/app/logout-org", data);
  }
};
const { Message: Message$1 } = ipkg;
axios$1.defaults.timeout = 1e6;
axios$1.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios$1.defaults.headers.get["Content-Type"] = "application/json;charset=UTF-8";
axios$1.interceptors.request.use(
  (config) => {
    if (config.method === "post")
      ;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios$1.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    let objMsg = {
      resultMsg: ""
    };
    if (error.message === "Network Error") {
      objMsg.resultMsg = "您当前网络不稳定，请重试" ;
    } else {
      objMsg = error;
    }
    return Promise.reject(objMsg);
  }
);
function gettoken(item) {
  let authtoken = useCookie("authtoken").value;
  if (authtoken !== void 0) {
    return authtoken[item];
  } else {
    return "0000";
  }
}
function fetchpost(url, params) {
  var source2 = "";
  const headers = useRequestHeaders();
  {
    source2 = headers == null ? void 0 : headers.host;
  }
  let paramsData = {
    "tntInstId": gettoken("tntInstId"),
    "requestToken": "",
    "tntBizId": gettoken("tntBizId"),
    //登录后获取
    "reqParam": {},
    "extendParams": {},
    "assertToken": gettoken("assertToken"),
    //租户
    "sourceVersion": "1.0.0",
    "operatorId": params && params.operatorId ? params.operatorId : "",
    //登录后获取
    "userToken": gettoken("userToken"),
    //消费者
    "systemCurrentTime": new Date().getTime(),
    //时间戳
    "pageNo": params && params.pageNo ? params.pageNo : 1,
    "pageSize": params && params.pageSize ? params.pageSize : 20,
    "currentPageMaxId": params && params.currentPageMaxId ? params.currentPageMaxId : 0,
    "source": source2,
    "channel": "WEB",
    "msgSource": params && params.msgSource ? params.msgSource : ""
  };
  if (params != void 0) {
    paramsData.reqParam = params;
    let data = JSON.stringify(params);
    const config = useRuntimeConfig();
    let key = config.public.VITE_AAPP_KEY;
    let sign = CryptoJs.HmacSHA256(data, key).toString();
    let wordArray = CryptoJs.enc.Hex.parse(sign);
    CryptoJs.enc.Base64.stringify(wordArray);
  }
  return new Promise((resolve, reject2) => {
    axios$1.post(url, paramsData, {
      headers: {
        "Content-Type": "application/json;"
      }
    }).then(
      (response) => {
        if (response.data.code == 200) {
          if (url == "/space/airecord/queryAiRecordGroupPageList" || url == "/space/airecord/queryNewAiRecordPageList") {
            if (response.data.data.length > 0) {
              response.data.data.forEach((item) => {
                if (item.content && item.content.indexOf("泽东") != -1) {
                  item.content = item.content.replace(/泽东/g, "**");
                }
                if (item.content && item.content.indexOf("澤東") != -1) {
                  item.content = item.content.replace(/澤東/g, "**");
                }
                if (item.request && item.request.indexOf("泽东") != -1) {
                  item.request = item.request.replace(/泽东/g, "**");
                }
                if (item.request && item.request.indexOf("澤東") != -1) {
                  item.request = item.request.replace(/澤東/g, "**");
                }
              });
            }
          }
          if (url == "/space/robot/queryAiModelList" && source2 == "cn.chatdzq.com") {
            response.data.data = response.data.data.filter((item) => item.code !== "124" && item.code !== "20240517001" && item.code !== "137" && item.code !== "1798243673220240625" && item.code !== "1798243673269820601");
          }
          resolve(response.data);
        } else {
          if (response.data.code == 10008) {
            reject2(response.data);
          } else {
            const router = useRouter();
            let urlWhiteList = ["/space/trade/getUserAccountInfo", "/space/team/getTenantInfo"];
            if (urlWhiteList.indexOf(url) == -1) {
              tokenerror(response.data);
              Message$1.error(response.data.message);
            }
            reject2(response.data);
            let code2 = response.data.code;
            let codeList = [770301, 770302, 770303];
            if (codeList.indexOf(code2) != -1) {
              const routing = getRouting();
              let flag = false;
              routing.permList.forEach((item, i2) => {
                if (item.tempCode == "33143") {
                  flag = true;
                }
                if (i2 == Number(routing.permList.length - 1)) {
                  if (flag) {
                    routing.setIsRecharge(false);
                    setTimeout(() => {
                      routing.setIsRecharge(true);
                    }, 100);
                  }
                }
              });
            }
            if (code2 == 770304) {
              router.push("/member");
            }
          }
        }
      },
      (err) => {
        reject2(err);
      }
    ).catch((error) => {
      reject2(error);
    });
  });
}
function getWaptoken(item) {
  let authtoken = useCookie("authtokenWap").value;
  if (authtoken !== void 0) {
    return authtoken[item];
  } else {
    return "0000";
  }
}
function fetchpostWap(url, params) {
  var source2 = "";
  const headers = useRequestHeaders();
  {
    source2 = headers == null ? void 0 : headers.host;
  }
  let paramsData = {
    "tntInstId": getWaptoken("tntInstId"),
    "requestToken": "",
    "tntBizId": getWaptoken("tntBizId"),
    //登录后获取
    "reqParam": {},
    "extendParams": {},
    "assertToken": getWaptoken("assertToken"),
    //租户
    "sourceVersion": "1.0.0",
    "operatorId": params && params.operatorId ? params.operatorId : "",
    //登录后获取
    "userToken": getWaptoken("userToken"),
    //消费者
    "systemCurrentTime": new Date().getTime(),
    //时间戳
    "pageNo": params && params.pageNo ? params.pageNo : 1,
    "pageSize": params && params.pageSize ? params.pageSize : 20,
    "currentPageMaxId": params && params.currentPageMaxId ? params.currentPageMaxId : 0,
    "source": source2,
    "channel": "WEB",
    "msgSource": params && params.msgSource ? params.msgSource : ""
  };
  if (params != void 0) {
    paramsData.reqParam = params;
    let data = JSON.stringify(params);
    const config = useRuntimeConfig();
    let key = config.public.VITE_AAPP_KEY;
    let sign = CryptoJs.HmacSHA256(data, key).toString();
    let wordArray = CryptoJs.enc.Hex.parse(sign);
    CryptoJs.enc.Base64.stringify(wordArray);
  }
  return new Promise((resolve, reject2) => {
    axios$1.post(url, paramsData, {
      headers: {
        "Content-Type": "application/json;"
      }
    }).then(
      (response) => {
        if (response.data.code == 200) {
          resolve(response.data);
        } else {
          Message$1.error(response.data.message);
          reject2(response.data);
        }
      },
      (err) => {
        reject2(err);
      }
    ).catch((error) => {
      reject2(error);
    });
  });
}
function fetchPostPy(url, params = {}) {
  let source2 = "";
  const headers = useRequestHeaders();
  {
    source2 = headers == null ? void 0 : headers.host;
  }
  let urls = "";
  if (source2 == "test.zhygpt.net") {
    urls = "https://test.zhygpt.net" + url;
  } else {
    urls = "https://www.chatdzq.com" + url;
  }
  params.source = source2;
  params.userToken = gettoken("userToken");
  params.assertToken = gettoken("assertToken");
  params.tntInstId = gettoken("tntInstId");
  params.tntBizId = gettoken("tntBizId");
  let paramsData = params;
  if (params != void 0) {
    let data = JSON.stringify(params);
    const config = useRuntimeConfig();
    let key = config.public.VITE_AAPP_KEY;
    let sign = CryptoJs.HmacSHA256(data, key).toString();
    let wordArray = CryptoJs.enc.Hex.parse(sign);
    CryptoJs.enc.Base64.stringify(wordArray);
  }
  return new Promise((resolve, reject2) => {
    axios$1.post(urls, paramsData, {
      headers: {
        "Content-Type": "application/json;"
      }
    }).then(
      (response) => {
        if (response.data.code == 200) {
          resolve(response.data);
        } else {
          tokenerror(response.data);
          Message$1.error(response.data.message);
          reject2(response.data);
        }
      },
      (err) => {
        reject2(err);
      }
    ).catch((error) => {
      reject2(error);
    });
  });
}
function fetchStreamPost(url, params) {
  var base64 = "";
  const headers = useRequestHeaders();
  {
    headers == null ? void 0 : headers.host;
  }
  let paramsData = params;
  if (params != void 0) {
    let data = JSON.stringify(params);
    const config = useRuntimeConfig();
    let key = config.public.VITE_AAPP_KEY;
    let sign = CryptoJs.HmacSHA256(data, key).toString();
    let wordArray = CryptoJs.enc.Hex.parse(sign);
    base64 = CryptoJs.enc.Base64.stringify(wordArray);
  }
  axios$1.post(url, paramsData, {
    headers: {
      "X-DZQ-Signature": base64.toString()
    }
  }).then(
    (response) => {
      console.log("11111111111");
    },
    (err) => {
      console.log("222222");
      reject(err);
    }
  ).catch((error) => {
    reject(error);
  });
}
const tokenerror = (res) => {
  if (res.code === 10011) {
    const router = useRouter();
    useCookie("authtoken").value = null;
    router.push({
      path: "/login"
    });
  }
};
const axios = {
  // 租户登录
  tenant_tenantLogin(data) {
    return fetchpost("/space/loginAccount/login", data);
  },
  // 注册
  tenant_register(data) {
    return fetchpost("/space/loginAccount/register", data);
  },
  // 发送验证码
  tenant_sendRegisterCode(data) {
    return fetchpost("/space/loginAccount/sendRegisterCode", data);
  },
  //获取微信登录二维码
  getLoginQrcode(data) {
    return fetchpost("/space/thirdParty/getLoginQrcode", data);
  },
  //查询二维码状态
  longPollingForScanQrCode(data) {
    return fetchpost("/space/common/longPollingForScanQrCode", data);
  },
  // 创建临时账号
  createTemporaryAccount(data) {
    return fetchpost("/space/common/buildResourceInfo", data);
  },
  //创建临时账号(企业)
  buildDatasetResourceInfo(data) {
    return fetchpost("/space/common/buildDatasetResourceInfo", data);
  },
  // 导入向量
  importVector(data) {
    return fetchpost("/space/chat/importVector", data);
  },
  // 生成会话组id
  ai_bulidChatGroupId(data) {
    return fetchpost("/space/ai/bulidChatGroupId", data);
  },
  // 开始对话
  chatdzq(data) {
    return fetchpost("/space/ai/chatdzq", data);
  },
  // 网页爬虫
  data_dataCrawler(data) {
    return fetchpost("/space/data/dataCrawler", data);
  },
  // 网页爬虫
  resource_ossUrlTextFilter(data) {
    return fetchpost("/space/resource/ossUrlTextFilter", data);
  },
  // 预生成对话
  ai_getSimpleChatId(data) {
    return fetchpost("/space/ai/bulidChat", data);
  },
  //知识库导入
  ai_addKnowledgeBase(data) {
    return fetchpost("/space/ai/addKnowledgeBase", data);
  },
  //机器人列表
  space_robotQuery(data) {
    return fetchpost("/space/robot/queryRobotInfoList", data);
  },
  //机器人类型
  space_robotTemplateQueryRobotTemplateList(data) {
    return fetchpost("/space/robotTemplate/queryRobotTemplateList", data);
  },
  //删除机器人
  space_robotDel(data) {
    return fetchpost("/space/robot/delRobotInfo", data);
  },
  //新增机器人
  space_robotAdd(data) {
    return fetchpost("/space/robot/addRobotInfo", data);
  },
  //机器人详情
  space_robotGetRobotInfo(data) {
    return fetchpost("/space/robot/getRobotInfo", data);
  },
  //编辑机器人
  space_robotModify(data) {
    return fetchpost("/space/robot/modifyRobotInfo", data);
  },
  //指令
  tagInfo_tagInfoQueryTagInfo(data) {
    return fetchpost("/space/tagInfo/queryTagInfoPageList", data);
  },
  //模板详情
  space_robotTemplateGetRobotTemplateInfo(data) {
    return fetchpost("/space/robotTemplate/getRobotTemplateInfo", data);
  },
  //知识库列表
  space_KnowledgeBasePageList(data) {
    return fetchpost("/space/knowledgeBase/queryKnowledgeBasePageList", data);
  },
  //知识库详情
  space_getKnowledgeBase(data) {
    return fetchpost("/space/knowledgeBase/getKnowledgeBase", data);
  },
  //修改知识库详情
  space_editKnowledgeBase(data) {
    return fetchpost("/space/knowledgeBase/editKnowledgeBase", data);
  },
  //删除知识库
  space_deleteKnowledgeBase(data) {
    return fetchpost("/space/knowledgeBase/deleteKnowledgeBase", data);
  },
  //对话模板
  space_robotQueryAiModelList(data) {
    return fetchpost("/space/robot/queryAiModelList", data);
  },
  //网站嵌入
  robot_EmbeddedWebsite(data) {
    return fetchpost("/space/robot/embeddedWebsite", data);
  },
  //分页查询ai消息记录列表
  airecord_queryAiRecordPageList(data) {
    return fetchpost("/space/airecord/queryAiRecordPageList", data);
  },
  //查询消息记录信息详情
  airecord_getAiRecordInfo(data) {
    return fetchpost("/space/airecord/queryAiRecordInfoList", data);
  },
  //查询知识库引用
  queryKnowledgeBaseList(data) {
    return fetchpost("/space/knowledgeBase/queryKnowledgeBaseList", data);
  },
  //知识库问答导入
  knowled_addKnowledgeBase(data) {
    return fetchpost("/space/knowledgeBase/addKnowledgeBase", data);
  },
  //知识库统计
  knowled_baseStatisticsNum(data) {
    return fetchpost("/space/knowledgeBase/getKnowledgeBaseStatisticsNum", data);
  },
  //机器人标签提示词
  tagInfo_queryRobotToTagInfoList(data) {
    return fetchpost("/space/tagInfo/queryRobotToTagInfoList", data);
  },
  //刷新机器人sk
  robot_refreshRobotExtent(data) {
    return fetchpost("/space/robot/refreshRobotExtent", data);
  },
  //校验机器人是否可用
  robot_checkRobotInfoByEncryCode(data) {
    return fetchpost("/space/robot/checkRobotInfoByEncryCode", data);
  },
  //套餐列表
  queryGoodsSkuAndEquityList(data) {
    return fetchpost("/space/trade/queryGoodsSkuAndEquityList", data);
  },
  //预支付
  advancePayment(data) {
    return fetchpost("/space/trade/advancePayment", data);
  },
  //支付查询
  orderQueryOrder(data) {
    return fetchpost("/space/order/queryOrder", data);
  },
  //金额换算电量
  amountConversionElectric(data) {
    return fetchpost("/space/trade/amountConversionElectric", data);
  },
  //用户信息获取
  getUserAccountInfo(data) {
    return fetchpost("/space/trade/getUserAccountInfo", data);
  },
  //重置密码
  resettingPassword(data) {
    return fetchpost("/space/loginAccount/resettingPassword", data);
  },
  //查询电量明细
  queryAccountLogPageList(data) {
    return fetchpost("/space/account/queryAccountLogPageList", data);
  },
  // 查询我的商品信息列表
  queryUserGoodsList(data) {
    return fetchpost("/space/trade/queryUserGoodsList", data);
  },
  //绑定手机号
  loginBindphone(data) {
    return fetchpost("/space/loginAccount/bindPhone", data);
  },
  //获取账号
  getLoginAccount(data) {
    return fetchpost("/space/loginAccount/getLoginAccount", data);
  },
  //编辑账号
  editLoginAccount(data) {
    return fetchpost("/space/loginAccount/editLoginAccount", data);
  },
  //订单列表
  queryOrderPageList(data) {
    return fetchpost("/space/order/queryOrderPageList", data);
  },
  //校验重置密码验证码
  checkResettingPasswordCode(data) {
    return fetchpost("/space/loginAccount/checkResettingPasswordCode", data);
  },
  //创建提示词
  createRobotPrompt(data) {
    return fetchpost("/space/robot/createRobotPrompt", data);
  },
  // 开始对话
  aiChatdzq(data) {
    return fetchStreamPost("/portal/ai/chat", data);
  },
  // 查询解决方案标签集合
  queryTagInfoList(data) {
    return fetchpost("/space/tagInfo/queryTagInfoList", data);
  },
  Drea_mShaperXL(data) {
    return fetchPostPy("/py/sd/DreamShaperXL", data);
  },
  Drea_3DiconSDXL(data) {
    return fetchPostPy("/py/sd/3DiconSDXL", data);
  },
  Drea_AerialViewOfTheBuilding(data) {
    return fetchPostPy("/py/sd/AerialViewOfTheBuilding", data);
  },
  Drea_Nationalwind(data) {
    return fetchPostPy("/py/sd/Nationalwind", data);
  },
  Drea_DarkPizzaSDXL(data) {
    return fetchPostPy("/py/sd/DarkPizzaSDXL", data);
  },
  Drea_ipDESIGN(data) {
    return fetchPostPy("/py/sd/ipDESIGN", data);
  },
  Drea_sdxl(data) {
    return fetchPostPy("/py/sd/sdxl", data);
  },
  Drea_Moyoumademan(data) {
    return fetchPostPy("/py/sd/Moyoumademan", data);
  },
  Drea_InteriorDesign(data) {
    return fetchPostPy("/py/sd/InteriorDesign", data);
  },
  Drea_mixProV4(data) {
    return fetchPostPy("/py/sd/mixProV4", data);
  },
  Drea_dall3(data) {
    return fetchPostPy("/py/openai/dall3", data);
  },
  gpt4_vision(data) {
    return fetchPostPy("/py/openai/gpt4-vision-url", data);
  },
  py_oneapi(data) {
    return fetchPostPy("/py/oneapi", data);
  },
  py_oneapi_model_list(data) {
    return fetchPostPy("/py/oneapi-model-list", data);
  },
  py_oneapi_chatlog(data) {
    return fetchPostPy("/py/oneapi-chatlog", data);
  },
  py_dall3_example_list(data) {
    return fetchPostPy("/py/dall3-example-list", data);
  },
  py_gpt4_vision_example(data) {
    return fetchPostPy("/py/gpt4-vision-example", data);
  },
  py_azure_openai(data) {
    return fetchPostPy("/py/azure-openai", data);
  },
  py_ai_role(data) {
    return fetchPostPy("/py/ai-role", data);
  },
  py_ai_app(data) {
    return fetchPostPy("/py/aiapp", data);
  },
  py_aiapp_token(data) {
    return fetchPostPy("/py/aiapp-token", data);
  },
  py_suno_example(data) {
    return fetchPostPy("/py/suno-example", data);
  },
  pyx_flow_data(data) {
    return fetchPostPy("/pyx/flow/data", data);
  },
  pyx_flow_datas(data) {
    return fetchPostPy("/pyx/flow/datas", data);
  },
  pyx_aisearch_example(data) {
    return fetchPostPy("/pyx/aisearch-example", data);
  },
  chat_tts_api(data) {
    return fetchPostPy("/py/chat-tts-api", data);
  },
  //皮肤检测
  pyx_example_mbfx(data) {
    return fetchPostPy("/pyx/example-mbfx", data);
  },
  //面部特征分析
  pyx_example_lksb(data) {
    return fetchPostPy("/pyx/example-lksb", data);
  },
  //图片PK
  pyx_common_sd_api_s(data) {
    return fetchPostPy("/pyx/common-sd-api-s", data);
  },
  //图片PK 模型列表
  pyx_sd_model_list(data) {
    return fetchPostPy("/pyx/sd-model-list", data);
  },
  //o1 流式返回
  pyx_llm_openai_o1(data) {
    return fetchPostPy("/pyx/llm_openai_o1", data);
  },
  //AI 试衣
  pyx_dashscope_aitryon(data) {
    return fetchPostPy("/pyx/dashscope-aitryon", data);
  },
  //电量扣减
  pyx_ele_list(data) {
    return fetchPostPy("/pyx/ele-list", data);
  },
  //画画生图
  pyx_dashscope_wanx_sketch(data) {
    return fetchPostPy("/pyx/dashscope_wanx_sketch_to_image_lite_api", data);
  },
  //角色列表
  queryRolePageList(data) {
    return fetchpost("/space/role/queryRolePageList", data);
  },
  //角色信息
  roleGetRoleInfo(data) {
    return fetchpost("/space/role/getRoleInfo", data);
  },
  //删除角色
  roleDeleteRole(data) {
    return fetchpost("/space/role/deleteRole", data);
  },
  //审批列表
  reviewQueryReviewPageList(data) {
    return fetchpost("/space/review/queryReviewPageList", data);
  },
  //获取企业知识库
  getKnowledgeInfo(data) {
    return fetchpost("/space/teamKnowledge/getKnowledgeInfo", data);
  },
  //新增企业知识库
  saveOrUpdateTeamKnowledge(data) {
    return fetchpost("/space/teamKnowledge/saveOrUpdateTeamKnowledge", data);
  },
  //编辑企业知识库
  updateTeamKnowledge(data) {
    return fetchpost("/space/teamKnowledge/updateTeamKnowledge", data);
  },
  //关联或取消关联知识库
  operateKnowledgeRelation(data) {
    return fetchpost("/space/teamKnowledge/operateKnowledgeRelation", data);
  },
  //获取已关联或未关联知识库
  getKnowledgeList(data) {
    return fetchpost("/space/teamKnowledge/getKnowledgeList", data);
  },
  //企业用户列表
  teamGetUserList(data) {
    return fetchpost("/space/team/getUserList", data);
  },
  //创建团队
  teamAddTenant(data) {
    return fetchpost("/space/team/addTenant", data);
  },
  //团队列表
  teamGetBizList(data) {
    return fetchpost("/space/team/getBizList", data);
  },
  //添加团队下级
  teamAddTeamBiz(data) {
    return fetchpost("/space/team/addTeamBiz", data);
  },
  //编辑部门
  updateTeamBiz(data) {
    return fetchpost("/space/team/updateTeamBiz", data);
  },
  //当前用户团队列表
  teamQueryTenant(data) {
    return fetchpost("/space/team/queryTenant", data);
  },
  //切换团队
  teamSwitchingTenants(data) {
    return fetchpost("/space/team/switchingTenants", data);
  },
  //团队添加用户
  teamAddTeamUser(data) {
    return fetchpost("/space/team/addTeamUser", data);
  },
  //获取团队用户详情
  teamGetTeamUser(data) {
    return fetchpost("/space/team/getTeamUser", data);
  },
  //删除团队用户
  teamDeleteTeamUser(data) {
    return fetchpost("/space/team/deleteTeamUser", data);
  },
  //刷新邀请链接
  teamRefreshInviteUrl(data) {
    return fetchpost("/space/team/refreshInviteUrl", data);
  },
  //生成邀请链接
  teamGenerateInviteUrl(data) {
    return fetchpost("/space/team/generateInviteUrl", data);
  },
  //添加角色
  roleSaveRoleInfo(data) {
    return fetchpost("/space/role/saveRoleInfo", data);
  },
  //编辑角色
  updateRoleInfo(data) {
    return fetchpost("/space/role/updateRoleInfo", data);
  },
  teamGetBizUserList(data) {
    return fetchpost("/space/team/getBizUserList", data);
  },
  //删除审批
  reviewDeleteReview(data) {
    return fetchpost("/space/review/deleteReview", data);
  },
  //拒绝审批
  reviewRejectReview(data) {
    return fetchpost("/space/review/rejectReview", data);
  },
  //同意审批
  reviewAgreeReview(data) {
    return fetchpost("/space/review/agreeReview", data);
  },
  //获取用户下的角色的所有权限
  getUserPermission(data) {
    return fetchpost("/space/team/getUserPermission", data);
  },
  //加入团队
  aggregatedAddTeamUser(data) {
    return fetchpost("/space/loginAccount/aggregatedAddTeamUser", data);
  },
  //删除部门
  deleteTeamBiz(data) {
    return fetchpost("/space/team/deleteTeamBiz", data);
  },
  //数据集列表
  getDatasetPageList(data) {
    return fetchpost("/space/teamDataset/getDatasetPageList", data);
  },
  //数据集新增
  saveOrUpdateTeamDataset(data) {
    return fetchpost("/space/teamDataset/saveOrUpdateTeamDataset", data);
  },
  //数据集编辑
  updateTeamDataset(data) {
    return fetchpost("/space/teamDataset/updateTeamDataset", data);
  },
  //获取数据集
  getDatasetInfo(data) {
    return fetchpost("/space/teamDataset/getDatasetInfo", data);
  },
  //删除数据集
  deleteDatasetDoc(data) {
    return fetchpost("/space/teamDataset/deleteDatasetDoc", data);
  },
  //数据集详情列表
  getDatasetDetailPageList(data) {
    return fetchpost("/space/teamDataset/getDatasetDetailPageList", data);
  },
  //数据集上传文件类型
  uploadCallback(data) {
    return fetchpost("/space/teamDataset/uploadCallback", data);
  },
  //删除企业信息
  deleteDatasetInfo(data) {
    return fetchpost("/space/teamDataset/deleteDatasetInfo", data);
  },
  //  查询标签模板集合
  queryTagTemplateList(data) {
    return fetchpost("/space/tagInfo/queryTagTemplateList", data);
  },
  //获取企业信息
  getTenantInfo(data) {
    return fetchpost("/space/team/getTenantInfo", data);
  },
  //编辑企业信息
  saveTenantInfo(data) {
    return fetchpost("/space/team/saveTenantInfo", data);
  },
  //查询官网端展示机器人
  queryCategoryRobotList(data) {
    if (useCookie("authtoken").value) {
      return fetchpost("/space/robot/queryCategoryRobotList", data);
    } else {
      return fetchpost("/space/robot/queryCategoryRobotListNotLogin", data);
    }
  },
  //收藏机器人
  collectRobot(data) {
    return fetchpost("/space/collectRobot/collectRobot", data);
  },
  //取消收藏
  deleteCategoryRobot(data) {
    return fetchpost("/space/collectRobot/deleteCategoryRobot", data);
  },
  //查询我的收藏
  queryCollectRobotList(data) {
    return fetchpost("/space/collectRobot/queryCollectRobotList", data);
  },
  //编辑企业用户信息
  editTeamUser(data) {
    return fetchpost("/space/team/editTeamUser", data);
  },
  //获取团队权益信息
  getTeamEquityInfo(data) {
    return fetchpost("/space/team/getTeamEquityInfo", data);
  },
  //查询系统机器人对话记录集合
  querySystemRobotAiRecordInfoList(data) {
    return fetchpost("/space/airecord/querySystemRobotAiRecordInfoList", data);
  },
  //角色查询用户
  queryRoleInstancePageList(data) {
    return fetchpost("/space/role/queryRoleInstancePageList", data);
  },
  //添加角色成员
  addTeamRoleUser(data) {
    return fetchpost("/space/team/addTeamRoleUser", data);
  },
  //专属机器人新增更新分类
  saveOrUpdateCategory(data) {
    return fetchpost("/space/teamRobot/saveOrUpdateCategory", data);
  },
  //获取机器人模板列表
  getRobotTemplateList(data) {
    return fetchpost("/space/teamRobot/getRobotTemplateList", data);
  },
  //获取分类列表
  getCategoryList(data) {
    return fetchpost("/space/teamRobot/getExclusiveCategoryList", data);
  },
  //主页分类机器人列表
  getCategoryRobotList(data) {
    return fetchpost("/space/teamRobot/getCategoryRobotList", data);
  },
  //获取分类信息
  getCategoryInfo(data) {
    return fetchpost("/space/teamRobot/getCategoryInfo", data);
  },
  //删除分类信息
  deleteCategoryInfo(data) {
    return fetchpost("/space/teamRobot/deleteCategoryInfo", data);
  },
  //批量添加机器人
  addBatchCategoryRobot(data) {
    return fetchpost("/space/teamRobot/addBatchCategoryRobot", data);
  },
  //删除分类机器人
  teamRobotDeleteCategoryRobot(data) {
    return fetchpost("/space/teamRobot/deleteExclusiveCategoryRobot", data);
  },
  //通过模板type获取分类机器人信息列表
  getRobotListByTemplateType(data) {
    return fetchpost("/space/teamRobot/getRobotListByTemplateType", data);
  },
  //获取部门与用户列表
  queryBizUserList(data) {
    return fetchpost("/space/team/queryBizUserList", data);
  },
  //查询我收藏的行业解决方案
  queryCollectSolutionList(data) {
    return fetchpost("/space/collectRobot/queryCollectSolutionList", data);
  },
  //收藏行业解决方案
  collectSolution(data) {
    return fetchpost("/space/collectRobot/collectSolution", data);
  },
  //取消收藏解决方案
  deleteBatchCategoryRobot(data) {
    return fetchpost("/space/collectRobot/deleteBatchCategoryRobot", data);
  },
  //资源上传成功回调
  resourceUploadCallback(data) {
    return fetchpost("/space/common/resourceUploadCallback", data);
  },
  //资源上传成功回调(企业)
  buildKnowledgeResourceInfo(data) {
    return fetchpost("/space/common/buildKnowledgeResourceInfo", data);
  },
  //资源上传成功回调
  getDatasetStatisticInfo(data) {
    return fetchpost("/space/teamDataset/getDatasetStatisticInfo", data);
  },
  //热门提问
  queryRandomTagTemplateList(data) {
    return fetchpost("/space/tagInfo/queryRandomTagTemplateList", data);
  },
  //消息记录
  querySystemRobotAiRecordPageList(data) {
    return fetchpost("/space/airecord/querySystemRobotAiRecordPageList", data);
  },
  //消息记录点赞
  aiRecordLike(data) {
    return fetchpost("/space/airecord/aiRecordLike", data);
  },
  //企业知识库统计
  getKnowledgeStaticsInfo(data) {
    return fetchpost("/space/teamKnowledge/getKnowledgeStaticsInfo", data);
  },
  //知识库文件夹
  queryKnowledgeBaseFilePageList(data) {
    return fetchpost("/space/knowledgeBase/queryKnowledgeBaseFilePageList", data);
  },
  //知识库数据
  queryKnowledgeBasePageList(data) {
    return fetchpost("/space/knowledgeBase/queryKnowledgeBasePageList", data);
  },
  //知识库删除文件夹
  deleteKnowledgeBaseFile(data) {
    return fetchpost("/space/knowledgeBase/deleteKnowledgeBaseFile", data);
  },
  //删除历史对话记录
  airecordDelAiRecord(data) {
    return fetchpost("/space/airecord/delAiRecord", data);
  },
  //重命名文件夹名
  editKnowledgeBaseFile(data) {
    return fetchpost("/space/knowledgeBase/editKnowledgeBaseFile", data);
  },
  //查询官网机器人
  queryCategoryRobotListNotLogin(data) {
    return fetchpost("/space/robot/queryCategoryRobotListNotLogin", data);
  },
  //获取三方授权
  getAuthLoginUrl(data) {
    return fetchpost("/space/thirdParty/getAuthLoginUrl", data);
  },
  //新增客服机器人
  addTeamCustomerService(data) {
    return fetchpost("/space/teamCustomerService/addTeamCustomerService", data);
  },
  //客服机器人列表
  queryTeamCustomerServiceListByPage(data) {
    return fetchpost("/space/teamCustomerService/queryTeamCustomerServiceListByPage", data);
  },
  //客服机器人详情
  getTeamCustomerService(data) {
    return fetchpost("/space/teamCustomerService/getTeamCustomerService", data);
  },
  //查询客服列表
  queryUserChannelList(data) {
    return fetchpost("/space/teamCustomerService/queryUserChannelList", data);
  },
  //聊天列表
  chatInfoList(data) {
    return fetchpost("/space/teamCustomerServiceChat/chatInfoList", data);
  },
  //聊天记录
  chatRecordList(data) {
    return fetchpost("/space/teamCustomerServiceChat/chatRecordList", data);
  },
  //切换客服接待模式
  changeServiceMode(data) {
    return fetchpost("/space/teamCustomerServiceChat/changeServiceMode", data);
  },
  //编辑客服机器人
  editTeamCustomerService(data) {
    return fetchpost("/space/teamCustomerService/editTeamCustomerService", data);
  },
  //删除客服机器人
  delTeamCustomerService(data) {
    return fetchpost("/space/teamCustomerService/delTeamCustomerService", data);
  },
  //权益列表
  getUserGoodsList(data) {
    return fetchpost("/space/trade/getUserGoodsList", data);
  },
  //客户注册
  customRegister(data) {
    return fetchpostWap("/space/loginAccount/customRegister", data);
  },
  //聊天记录
  chatRecordListWap(data) {
    return fetchpostWap("/space/teamCustomerServiceChat/chatRecordList", data);
  },
  //套餐列表
  queryGoodsTagInfoList(data) {
    return fetchpost("/space/trade/queryGoodsTagInfoList", data);
  },
  //结束会话
  shutDownChat(data) {
    return fetchpost("/space/teamCustomerServiceChat/shutDownChat", data);
  },
  //创作记录收藏
  collectRecord(data) {
    return fetchpost("/space/collectRobot/collectRecord", data);
  },
  //取消创作记录收藏
  deleteCategoryRecord(data) {
    return fetchpost("/space/collectRobot/deleteCategoryRecord", data);
  },
  //创作记录收藏列表
  queryCollectRobotAiRecordPageList(data) {
    return fetchpost("/space/collectRobot/queryCollectRobotAiRecordPageList", data);
  },
  //删除创作记录
  delCollectAiRecord(data) {
    return fetchpost("/space/airecord/delCollectAiRecord", data);
  },
  //取消订单
  cancellOrderInfo(data) {
    return fetchpost("/space/order/cancellOrderInfo", data);
  },
  //删除订单
  deleteOrderInfo(data) {
    return fetchpost("/space/order/deleteOrderInfo", data);
  },
  //校验订单
  checkOrderCanPay(data) {
    return fetchpost("/space/order/checkOrderCanPay", data);
  },
  //修改机器人开关状态
  editRobotUrlLinkStatus(data) {
    return fetchpost("/space/robot/editRobotUrlLinkStatus", data);
  },
  //获取团队数据统计
  getDataStaticsInfo(data) {
    return fetchpost("/space/dataStatics/getDataStaticsInfo", data);
  },
  //获取团队数据统计
  queryDataSummaryInfo(data) {
    return fetchpost("/space/dataStatics/queryDataSummaryInfo", data);
  },
  //获取团队数据统计
  queryDataSummaryDetail(data) {
    return fetchpost("/space/dataStatics/queryDataSummaryDetail ", data);
  },
  //新增虚拟文件
  addVirtuallyKnowledge(data) {
    return fetchpost("/space/knowledgeBase/addVirtuallyKnowledge", data);
  },
  //网页批量爬虫
  dataCrawlerBatch(data) {
    return fetchpost("/space/data/dataCrawlerBatch", data);
  },
  //csv提取
  ossUrlCsvTextFilter(data) {
    return fetchpost("/space/resource/ossUrlCsvTextFilter", data);
  },
  //知识库删除
  delKnowledgeInfo(data) {
    return fetchpost("/space/teamKnowledge/delKnowledgeInfo", data);
  },
  //测试记录
  queryKnowledgeCorpusRecordList(data) {
    return fetchpost("/space/knowledgeCorpusRecord/queryKnowledgeCorpusRecordList", data);
  },
  //测试结果
  queryCorpusResultContentList(data) {
    return fetchpost("/space/knowledgeCorpusRecord/queryCorpusResultContentList", data);
  },
  //测试文本
  addKnowledgeCorpusRecord(data) {
    return fetchpost("/space/knowledgeCorpusRecord/addKnowledgeCorpusRecord", data);
  },
  //csv下载地址
  queryFileDownloadList(data) {
    return fetchpost("/space/system/queryFileDownloadList", data);
  },
  //文件内导入信息
  addKnowledge(data) {
    return fetchpost("/space/knowledgeBase/addKnowledge", data);
  },
  //csv导入
  addQaKnowledgeBase(data) {
    return fetchpost("/space/ai/addQaKnowledgeBase", data);
  },
  // oss文件复制并返回地址
  ossUrlCopyFile(data) {
    return fetchpost("/space/resource/ossUrlCopyFile", data);
  },
  //获取邀请信息
  getInviteInfo(data) {
    return fetchpost("/space/team/getInviteInfo", data);
  },
  //分类获取机器人模板
  getRobotTemplateListByCategoryType(data) {
    return fetchpost("/space/teamRobot/getRobotTemplateListByCategoryType", data);
  },
  //实验室列表
  queryLaboratoryTagInfoList(data) {
    return fetchpost("/space/tagInfo/queryLaboratoryTagInfoList", data);
  },
  //训练中心列表
  queryTrainRobotInfoList(data) {
    return fetchpost("/space/robot/queryTrainRobotInfoList", data);
  },
  //添加训练中心机器人
  addTrainRobotInfo(data) {
    return fetchpost("/space/robot/addTrainRobotInfo", data);
  },
  //编辑训练中心机器人
  modifyTrainRobotInfo(data) {
    return fetchpost("/space/robot/modifyTrainRobotInfo", data);
  },
  //删除训练中心机器人
  delTrainRobotInfo(data) {
    return fetchpost("/space/robot/delTrainRobotInfo", data);
  },
  //训练中心机器人详情
  getTrainRobotInfo(data) {
    return fetchpost("/space/robot/getTrainRobotInfo", data);
  },
  //专属机器人列表
  getExclusiveCategoryRobotList(data) {
    return fetchpost("/space/teamRobot/getExclusiveCategoryRobotList", data);
  },
  //获取多模型机器人详情
  getMultiModelRobotInfo(data) {
    return fetchpost("/space/robot/getMultiModelRobotInfo", data);
  },
  //编辑机器人多模型保存
  editMultiModelRobotLlmModel(data) {
    return fetchpost("/space/robot/editMultiModelRobotLlmModel", data);
  },
  //文本拆分
  segmentContent(data) {
    return fetchpost("/space/robot/segmentContent", data);
  },
  //多模型历史记录
  queryAiRecordPageList(data) {
    return fetchpost("/space/airecord/queryAiRecordPageList", data);
  },
  //设计师列表
  queryDesignerList(data) {
    return fetchpost("/space/robot/draw/queryDesignerList", data);
  },
  //查询词库分类
  queryWordLibTagTemplateList(data) {
    return fetchpost("/space/robot/draw/queryWordLibTagTemplateList", data);
  },
  //查询词库
  queryWordLibTagList(data) {
    return fetchpost("/space/robot/draw/queryWordLibTagList", data);
  },
  //画画消息记录
  queryDrawAiRecordInfoList(data) {
    return fetchpost("/space/airecord/queryDrawAiRecordInfoList", data);
  },
  //prompt分类
  queryDrawTemplateList(data) {
    return fetchpost("/space/robot/draw/queryDrawTemplateList", data);
  },
  //prompt分类详情
  queryRecommendDrawRecordPageList(data) {
    return fetchpost("/space/robot/draw/queryRecommendDrawRecordPageList", data);
  },
  //prompt分类详情收藏
  collectRecommendDrawRecord(data) {
    return fetchpost("/space/robot/draw/collectRecommendDrawRecord", data);
  },
  //prompt分类详情取消收藏
  delCollectRecommendDrawRecord(data) {
    return fetchpost("/space/robot/draw/delCollectRecommendDrawRecord", data);
  },
  //prompt分类详情我的收藏列表
  queryCollectRecommendDrawPageList(data) {
    return fetchpost("/space/robot/draw/queryCollectRecommendDrawPageList", data);
  },
  //ai音乐历史记录
  queryAiMusicRecordPageList(data) {
    return fetchpost("/space/airecord/queryAiMusicRecordPageList", data);
  },
  //保存海报
  editAiRecordGroup(data) {
    return fetchpost("/space/robot/draw/editAiRecordGroup", data);
  },
  //海报场景详情
  getPosterSceneTagTemplate(data) {
    return fetchpost("/space/robot/draw/getPosterSceneTagTemplate", data);
  },
  //热门创作详情
  getAiRecordGroup(data) {
    return fetchpost("/space/robot/draw/getAiRecordGroup", data);
  },
  //获取智能客服数量
  countTeamCustomerService(data) {
    return fetchpost("/space/teamCustomerServiceChat/countTeamCustomerService", data);
  },
  //prompt画同款埋点
  addDrawMatrixPointActionRecord(data) {
    return fetchpost("/space/robot/draw/addDrawMatrixPointActionRecord", data);
  },
  //ai数字员工
  queryDigitalUserList(data) {
    return fetchpost("/space/teamDigitalEmployee/queryDigitalUserList", data);
  },
  //ai数字员工配置机器人
  addUserBusinessRelation(data) {
    return fetchpost("/space/teamDigitalEmployee/addUserBusinessRelation", data);
  },
  //ai数字员工修改机器人
  updateUserBusinessRelation(data) {
    return fetchpost("/space/teamDigitalEmployee/updateUserBusinessRelation", data);
  },
  //分享获取详情
  getMsgShareDetail(data) {
    return fetchpost("/space/robot/draw/getMsgShareDetail", data);
  },
  //获取公众号信息
  getWechatOfficeAccountConfig(data) {
    return fetchpost("/space/teamDigitalEmployee/getWechatOfficeAccountConfig", data);
  },
  //修改公众号信息
  updateWechatOfficeAccountConfig(data) {
    return fetchpost("/space/teamDigitalEmployee/updateWechatOfficeAccountConfig", data);
  },
  //获取钉钉配置
  getDingTalkConfig(data) {
    return fetchpost("/space/teamDigitalEmployee/getDingTalkConfig", data);
  },
  //修改钉钉配置
  updateDingTalkConfig(data) {
    return fetchpost("/space/teamDigitalEmployee/updateDingTalkConfig", data);
  },
  //获取企业微信配置
  getCorpWechatConfig(data) {
    return fetchpost("/space/teamDigitalEmployee/getCorpWechatConfig", data);
  },
  //更新企业微信配置
  updateCorpWechatConfig(data) {
    return fetchpost("/space/teamDigitalEmployee/updateCorpWechatConfig", data);
  },
  //新增用户聊天组
  addUserChatGroup(data) {
    return fetchpost("/space/teamDigitalEmployee/addUserChatGroup", data);
  },
  //分页查询用户聊天组
  queryUserChatGroupList(data) {
    return fetchpost("/space/teamDigitalEmployee/queryUserChatGroupList", data);
  },
  //删除用户聊天组
  deleteUserChatGroup(data) {
    return fetchpost("/space/teamDigitalEmployee/deleteUserChatGroup", data);
  },
  //获取h5和网站嵌套
  getWebShareConfig(data) {
    return fetchpost("/space/teamDigitalEmployee/getWebShareConfig", data);
  },
  //首页机器人
  queryFrontRobotList(data) {
    return fetchpost("/space/robot/queryFrontRobotList", data);
  },
  //获取客服详情通过sk
  getTeamCustomerServiceBySk(data) {
    return fetchpost("/space/teamCustomerService/getTeamCustomerServiceBySk", data);
  },
  //历史记录
  queryAiRecordGroupPageList(data) {
    return fetchpost("/space/airecord/queryAiRecordGroupPageList", data);
  },
  //0201历史记录详情
  queryNewAiRecordPageList(data) {
    return fetchpost("/space/airecord/queryNewAiRecordPageList", data);
  },
  //0201历史记录批量删除
  deleteBatchAiRecordGroup(data) {
    return fetchpost("/space/airecord/deleteBatchAiRecordGroup", data);
  },
  //获取海报场景随机提示词
  getPosterSceneRandomPrompt(data) {
    return fetchpost("/space/robot/draw/getPosterSceneRandomPrompt", data);
  },
  //获取行业列表
  getIndustryList(data) {
    return fetchpost("/space/dataAsset/getIndustryList", data);
  },
  //系统知识库分类
  getKnowledgeCategoryList(data) {
    return fetchpost("/space/dataAsset/getKnowledgeCategoryList", data);
  },
  //系统知识库列表
  getAssetKnowledgeList(data) {
    return fetchpost("/space/dataAsset/getAssetKnowledgeList", data);
  },
  //0229通过code获取机器人详情
  getRobotInfoByCode(data) {
    return fetchpost("/space/robot/getRobotInfoByCode", data);
  },
  //获取抖音配置信息
  getDouYinConfig(data) {
    return fetchpost("/space/teamDigitalEmployee/getDouYinConfig", data);
  },
  //修改抖音配置信息
  updateDouYinConfig(data) {
    return fetchpost("/space/teamDigitalEmployee/updateDouYinConfig", data);
  },
  //扣除机器人电量
  deductRobotElectricity(data) {
    return fetchpost("/space/robot/deductRobotElectricity", data);
  },
  //新增或更新企业数据集数据同步配置信息
  addDatasetSyncSetup(data) {
    return fetchpost("/space/teamDataset/addDatasetSyncSetup", data);
  },
  //获取ppt权限编码
  getGenerateAiPptCode(data) {
    return fetchpost("/space/thirdParty/getGenerateAiPptCode", data);
  },
  //获取专属机器人分类信息列表
  queryExclusiveCategoryList(data) {
    return fetchpost("/space/teamRobot/queryExclusiveCategoryList", data);
  },
  //通过tagCode获取专属机器人列表
  queryExclusiveRobotList(data) {
    return fetchpost("/space/teamRobot/queryExclusiveRobotList", data);
  },
  //通过categoryCode获取专属机器人列表
  queryExclusiveCategoryRobotList(data) {
    return fetchpost("/space/teamRobot/queryExclusiveCategoryRobotList", data);
  },
  //获取用户所在部门以及一级子部门
  getUserBizAndSubBizList(data) {
    return fetchpost("/space/team/getUserBizAndSubBizList", data);
  },
  //通过groundID获取海报详情
  getPosterDetailList(data) {
    return fetchpost("/space/robot/draw/getPosterDetailList", data);
  },
  //修改定时任务消息为已读
  updateTaskMsgToRead(data) {
    return fetchpost("/space/teamDataset/updateTaskMsgToRead", data);
  },
  //回收站列表
  queryRecycleByPage(data) {
    return fetchpost("/space/teamRecycleBinController/queryRecycleByPage", data);
  },
  //清除回收站
  cleanRecycleBin(data) {
    return fetchpost("/space/teamRecycleBinController/cleanRecycleBin", data);
  },
  //回收站还原
  restoreRecycleBin(data) {
    return fetchpost("/space/teamRecycleBinController/restoreRecycleBin", data);
  },
  //添加到回收站
  addRecycleBin(data) {
    return fetchpost("/space/teamRecycleBinController/addRecycleBin", data);
  },
  //电量说明
  queryElectricityUseList(data) {
    return fetchpost("/space/tagInfo/queryElectricityUseList", data);
  },
  //实验室面试生成题目接口
  interviewQuestions(data) {
    return fetchpost("/space/laboratory/generate/interview/questions", data);
  },
  //实验室面试评分接口
  interviewAnswer(data) {
    return fetchpost("/space/laboratory/generate/interview/answer", data);
  },
  //客户管理列表
  customerList(data) {
    return fetchpost("/space/teamCustomerManage/customerList", data);
  },
  //客户删除
  customerDelete(data) {
    return fetchpost("/space/teamCustomerManage/customerDelete", data);
  },
  //客户详情
  customerDetail(data) {
    return fetchpost("/space/teamCustomerManage/customerDetail", data);
  },
  //编辑客户资料
  customerSave(data) {
    return fetchpost("/space/teamCustomerManage/customerSave", data);
  },
  //客户对话记录
  customerChatInfo(data) {
    return fetchpost("/space/teamCustomerManage/customerChatInfo", data);
  },
  //客户来源
  robotCustomerList(data) {
    return fetchpost("/space/teamCustomerManage/robotCustomerList", data);
  },
  //客户管理内容导出
  customerExport(data) {
    return fetchpost("/space/teamCustomerManage/customerExport", data);
  },
  //角色类型列表
  queryCategoryRobotTypeList(data) {
    if (useCookie("authtoken").value) {
      return fetchpost("/space/robot/queryCategoryRobotTypeList", data);
    } else {
      return fetchpost("/space/robot/queryCategoryRobotTypeListNotLogin", data);
    }
  },
  //查询角色机器人
  queryCategoryRobotTypeDetailList(data) {
    if (useCookie("authtoken").value) {
      return fetchpost("/space/robot/queryCategoryRobotTypeDetailList", data);
    } else {
      return fetchpost("/space/robot/queryCategoryRobotTypeDetailListNotLogin", data);
    }
  },
  //知识库列表
  queryCateKnowledgeList(data) {
    return fetchpost("/space/teamKnowledge/queryCateKnowledgeList", data);
  },
  //获取工作流详情
  generateComponentsInfo(data) {
    return fetchpost("/space/component/generateComponentsInfo", data);
  },
  //获取工作流列表
  queryComponentTemplateList(data) {
    return fetchpost("/space/component/queryComponentTemplateList", data);
  },
  // 判断子件之间能否连接关系
  judgeConnected(data) {
    return fetchpost("/space/component/judgeConnected", data);
  },
  //知识库分类列表
  queryKnowledgeCateList(data) {
    return fetchpost("/space/teamKnowledge/queryKnowledgeCateList", data);
  },
  //获取高级编排初始化或详情数据
  loadFlowData(data) {
    return fetchpost("/space/component/loadFlowData", data);
  },
  // 保存组件内容信息
  saveArrangement(data) {
    return fetchpost("/space/component/saveArrangement", data);
  },
  //查询数据集分类
  queryDatasetCateList(data) {
    return fetchpost("/space/teamDataset/queryDatasetCateList", data);
  },
  //数据集列表
  queryCateDatasetList(data) {
    return fetchpost("/space/teamDataset/queryCateDatasetList", data);
  },
  //文件生成问题
  anaysisQuestions(data) {
    return fetchpost("/space/laboratory/generate/file/analysis/questions", data);
  },
  //查询系统随机设置标签模板集合
  querySystemRandomTagTemplateList(data) {
    return fetchpost("/space/tagInfo/querySystemRandomTagTemplateList", data);
  },
  //一键生成机器信息
  generateAiRobotInfo(data) {
    return fetchpost("/space/robot/generateAiRobotInfo", data);
  },
  //数据集系统数据集
  getAssetDatasetList(data) {
    return fetchpost("/space/dataAsset/getAssetDatasetList", data);
  },
  // 查询聊天记录组件头部信息
  queryAiRecordRaComponentList(data) {
    return fetchpost("/space/component/queryAiRecordRaComponentList", data);
  },
  // 查询聊天记录组件详情信息
  queryAiRecordRaComponentDetailList(data) {
    return fetchpost("/space/component/queryAiRecordRaComponentDetailList", data);
  },
  //职位列表
  queryPositionList(data) {
    return fetchpost("/space/hr/queryPositionList", data);
  },
  //新增职位
  addPosition(data) {
    return fetchpost("/space/hr/addPosition", data);
  },
  //删除职位
  deletePosition(data) {
    return fetchpost("/space/hr/deletePosition", data);
  },
  //职位详情
  getPosition(data) {
    return fetchpost("/space/hr/getPosition", data);
  },
  //编辑职位
  editPosition(data) {
    return fetchpost("/space/hr/editPosition", data);
  },
  //简历列表
  queryResumePageList(data) {
    return fetchpost("/space/hr/queryResumePageList", data);
  },
  //删除简历
  deleteResume(data) {
    return fetchpost("/space/hr/deleteResume", data);
  },
  //修改简历
  editResume(data) {
    return fetchpost("/space/hr/editResume", data);
  },
  //新增简历
  addResume(data) {
    return fetchpost("/space/hr/addResume", data);
  },
  //简历详情
  getResumeInfo(data) {
    return fetchpost("/space/hr/getResumeInfo", data);
  },
  //再次生成题目
  generateQuestion(data) {
    return fetchpost("/space/hr/generateQuestion", data);
  },
  //保存题目
  addExamInstance(data) {
    return fetchpost("/space/hr/addExamInstance", data);
  },
  //提交答案
  sumbitExamAnswer(data) {
    return fetchpost("/space/hr/sumbitExamAnswer", data);
  },
  //简历信息
  getReviewInfo(data) {
    return fetchpost("/space/hr/getReviewInfo", data);
  },
  //电量获取
  queryElectricity(data) {
    return fetchpost("/space/robot/queryElectricity", data);
  },
  //探索机器人列表
  queryExclusiveRobotTagList(data) {
    return fetchpost("/space/teamRobot/queryExclusiveRobotTagList", data);
  },
  //模板列表
  queryTemplateList(data) {
    return fetchpost("/space/template/queryTemplateList", data);
  },
  //模板使用
  enableTeamTemplate(data) {
    return fetchpost("/space/template/enableTeamTemplate", data);
  },
  //导航设置列表
  queryAreaAndChunkView(data) {
    return fetchpost("/space/view/queryAreaAndChunkView", data);
  },
  //顶部获取导航
  queryViewMenu(data) {
    return fetchpost("/space/view/queryViewMenu", data);
  },
  //一级导航编辑
  editFirstView(data) {
    return fetchpost("/space/view/editView", data);
  },
  //二级导航删除
  deleteSecondView(data) {
    return fetchpost("/space/view/deleteView", data);
  },
  //二级导航编辑
  configSecondView(data) {
    return fetchpost("/space/view/configView", data);
  },
  //查询AI员工机器人列表
  queryDigitalRobotInfoList(data) {
    return fetchpost("/space/robot/queryDigitalRobotInfoList", data);
  },
  querySiteSetup(data) {
    return fetchpost("/space/view/querySiteSetup", data);
  },
  //知识库最近列表
  queryCateKnowledgeRecentList(data) {
    return fetchpost("/space/teamKnowledge/queryCateKnowledgeRecentList", data);
  },
  //获取excel文件表头
  getKnowFileFieldName(data) {
    return fetchpost("/space/knowledgeBase/getKnowFileFieldName", data);
  },
  //获取创作机器人上次创作记录
  getQuestionBankRobotHistory(data) {
    return fetchpost("/space/matrix/getQuestionBankRobotHistory", data);
  },
  //AI抠图默认图片列表
  queryDefaultImage(data) {
    return fetchpost("/space/cutoutImage/queryDefaultImage", data);
  },
  //AI抠图获取背景色
  getBackGroundRgbHexCode(data) {
    return fetchpost("/space/cutoutImage/getBackGroundRgbHexCode", data);
  },
  //AI抠图生成图片
  cutoutGenerationImage(data) {
    return fetchpost("/space/cutoutImage/cutoutGenerationImage", data);
  },
  //AI抠图编辑图片
  editCutoutComposition(data) {
    return fetchpost("/space/cutoutImage/editCutoutComposition", data);
  },
  //AI抠图删除
  deleteCutoutComposition(data) {
    return fetchpost("/space/cutoutImage/deleteCutoutComposition", data);
  },
  //获取商品图集合
  getGoodsImgList(data) {
    return fetchpost("/space/robot/draw/getGoodsImgList", data);
  },
  //获取背景图集合
  getBackgroundImgList(data) {
    return fetchpost("/space/robot/draw/getBackgroundImgList", data);
  },
  //获取随机背景提示词
  getPromptRandomList(data) {
    return fetchpost("/space/robot/draw/getPromptRandomList", data);
  },
  //Ai抠图列表
  getMyCutOutImageComposition(data) {
    return fetchpost("/space/cutoutImage/getMyCutOutImageComposition", data);
  },
  //设置简易模式
  updateSimpleMode(data) {
    return fetchpost("/space/robot/updateSimpleMode", data);
  },
  //AI搜索分享获取详情
  getAiSearchRecordDetail(data) {
    return fetchpost("/space/airecord/getAiSearchRecordDetail", data);
  },
  //获取AI搜索记录详情转成对应的文件
  getAiSearchRecordConvertFile(data) {
    return fetchpost("/space/airecord/getAiSearchRecordConvertFile", data);
  },
  //工作台列表
  queryWorkbenchList(data) {
    return fetchpost("/space/view/queryWorkbenchList", data);
  },
  //配置工作台
  editWorkbench(data) {
    return fetchpost("/space/view/editWorkbench", data);
  },
  //新增工作台
  addWorkbench(data) {
    return fetchpost("/space/view/addWorkbench", data);
  },
  //获取工作台
  getWorkbenchInfo(data) {
    return fetchpost("/space/view/getWorkbenchInfo", data);
  },
  //保存发布工作台
  saveWorkbench(data) {
    return fetchpost("/space/view/saveWorkbench", data);
  },
  //前台查询工作台页面接口-权限问题
  queryWorkbenchPermissionList(data) {
    return fetchpost("/space/view/queryWorkbenchPermissionList", data);
  },
  // 获取智能体分类信息
  queryIntelligentAgentCategory(data) {
    return fetchpost("/space/robot/queryIntelligentAgentCategory", data);
  },
  // 通过智能体分类获取机器人标签
  queryIntelligentAgentRobotLabel(data) {
    return fetchpost("/space/robot/queryIntelligentAgentRobotLabel", data);
  },
  // 通过智能体分类\机器人标签 获取机器人列表
  queryIntelligentAgentRobot(data) {
    return fetchpost("/space/robot/queryIntelligentAgentRobot", data);
  },
  //通过类型获取模板分类
  queryTagTemplateRobot(data) {
    return fetchpost("/space/robot/queryTagTemplateRobot", data);
  },
  //根据类型获取电量
  calcElectricity(data) {
    return fetchpost("/space/robot/calcElectricity", data);
  },
  //获取用户最常用的4个机器人
  queryCommonlyUsedRobotList(data) {
    return fetchpost("/space/robot/queryCommonlyUsedRobotList", data);
  },
  //飞书在线文档获取
  getOnlineFileContent(data) {
    return fetchpost("/space/onlinefile/getOnlineFileContent", data);
  },
  //保存站点配置
  saveSiteSetup(data) {
    return fetchpost("/space/view/saveSiteSetup", data);
  },
  //编辑对话记录
  editAiRecord(data) {
    return fetchpost("/space/airecord/editAiRecord", data);
  },
  //生成艺术字
  generationWordart(data) {
    return fetchpost("/space/wordart/generationWordart", data);
  },
  //分享聊天记录
  shareAiRecord(data) {
    return fetchpost("/space/airecord/shareAiRecord", data);
  },
  //获取分享聊天记录
  queryShareAiRecordDetail(data) {
    return fetchpost("/space/airecord/queryShareAiRecordDetail", data);
  },
  //查询标签模板集合-带埋点数
  queryTagTemplateListFusion(data) {
    return fetchpost("/space/tagInfo/queryTagTemplateListFusion", data);
  },
  //标签使用埋点
  tagMatrixPointRecord(data) {
    return fetchpost("/space/tagInfo/tagMatrixPointRecord", data);
  },
  //获取随机提示词
  getRandomPrompt(data) {
    return fetchpost("/space/wordart/getRandomPrompt", data);
  },
  //获取艺术字详情
  getMyWordartComposition(data) {
    return fetchpost("/space/wordart/getMyWordartComposition", data);
  },
  //艺术字删除
  deleteWordartComposition(data) {
    return fetchpost("/space/wordart/deleteWordartComposition", data);
  },
  //艺术字示例
  getDefaultWordart(data) {
    return fetchpost("/space/wordart/getDefaultWordart", data);
  },
  //随机返回某个类型下的标签
  queryRandomTagInfoList(data) {
    return fetchpost("/space/tagInfo/queryRandomTagInfoList", data);
  },
  //AI模型PK胜利使用埋点
  aiModelPkVictoryMatrixPointRecord(data) {
    return fetchpost("/space/robot/aiModelPkVictoryMatrixPointRecord", data);
  },
  //AI模型排行榜
  queryAiModelPkRankingList(data) {
    return fetchpost("/space/ai/queryAiModelPkRankingList", data);
  },
  //查询AI模型PK聊天记录接口
  queryAiModelPkRecordList(data) {
    return fetchpost("/space/airecord/queryAiModelPkRecordList", data);
  },
  //新闻热榜
  queryNewsList(data) {
    return fetchpost("/space/thirdParty/queryNewsList", data);
  },
  //随机获取AIpK点赞的信息
  queryRandomPkLikeChatRecordList(data) {
    return fetchpost("/space/airecord/queryRandomPkLikeChatRecordList", data);
  },
  //获取AI模型PK分享聊天记录详情
  queryShareAiModelPkRecordDetail(data) {
    return fetchpost("/space/airecord/queryShareAiModelPkRecordDetail", data);
  },
  //创作历史
  queryAiDocumentRecordPageList(data) {
    return fetchpost("/space/documentrecord/queryAiDocumentRecordPageList", data);
  },
  //新增创作
  saveDocumentRecord(data) {
    return fetchpost("/space/documentrecord/saveDocumentRecord", data);
  },
  //修改创作
  editDocumentRecord(data) {
    return fetchpost("/space/documentrecord/editDocumentRecord", data);
  },
  //删除创作
  deleteDocumentRecord(data) {
    return fetchpost("/space/documentrecord/deleteDocumentRecord", data);
  },
  // 获取提示词
  getPrompt(data) {
    return fetchpost("/space/prompt/getPrompt", data);
  },
  // 获取实例图
  queryExampleImage(data) {
    return fetchpost("/space/exampleImage/queryExampleImage", data);
  },
  // 获取随机提示词
  getRandomPromptByType(data) {
    return fetchpost("/space/prompt/getRandomPromptByType", data);
  },
  //配置完成度
  getReferenceImagCompletionDegreee(data) {
    return fetchpost("/space/teamResourceController/getReferenceImagCompletionDegreee", data);
  },
  //保存参考图
  saveReferenceImage(data) {
    return fetchpost("/space/teamResourceController/saveReferenceImage", data);
  },
  //查询参考图
  queryReferenceImageTagInfo(data) {
    return fetchpost("/space/teamResourceController/queryReferenceImageTagInfo", data);
  },
  //首页统计
  indexDataStatics(data) {
    return fetchpost("/space/dataStatics/indexDataStatics", data);
  },
  //首页按类型统计
  indexDataTypeStatics(data) {
    return fetchpost("/space/dataStatics/indexDataTypeStatics", data);
  },
  //查询标签模板集合-带权限
  queryTagTemplatePermission(data) {
    return fetchpost("/space/tagInfo/queryTagTemplatePermission", data);
  },
  //编辑标签
  editTagTemplate(data) {
    return fetchpost("/space/tagInfo/editTagTemplate", data);
  },
  //添加权限
  operateEquityPermission(data) {
    return fetchpost("/space/permission/operateEquityPermission", data);
  },
  //ai应用列表无权限
  queryAiApplyList(data) {
    return fetchpost("/space/view/queryAiApplyList", data);
  },
  //ai应用列表带权限
  queryAiApplyListPermission(data) {
    return fetchpost("/space/view/queryAiApplyListPermission", data);
  },
  //编辑AI应用
  editAiApply(data) {
    return fetchpost("/space/view/editAiApply", data);
  },
  //推荐应用排序
  sortAiApplyList(data) {
    return fetchpost("/space/view/sortAiApplyList", data);
  },
  //常用语分类
  queryCommonPhrasesCategory(data) {
    return fetchpost("/space/teamTagController/queryCommonPhrasesCategory", data);
  },
  //常用语埋点
  commonPhrasesUseMatrixPointRecord(data) {
    return fetchpost("/space/teamTagController/commonPhrasesUseMatrixPointRecord", data);
  },
  //新增常用语分类
  addCommonPhrasesCategory(data) {
    return fetchpost("/space/teamTagController/addCommonPhrasesCategory", data);
  },
  //删除常用语
  delCommonPhrases(data) {
    return fetchpost("/space/teamTagController/delCommonPhrases", data);
  },
  //删除常用语分类
  delCommonPhrasesCategory(data) {
    return fetchpost("/space/teamTagController/delCommonPhrasesCategory", data);
  },
  //新增常用语
  addCommonPhrases(data) {
    return fetchpost("/space/teamTagController/addCommonPhrases", data);
  },
  //获取数字员工机器人列表
  queryRecommendDigitalEmployeesRobotList(data) {
    return fetchpost("/space/robot/queryRecommendDigitalEmployeesRobotList", data);
  },
  //应用数据列表
  getApplyDataList(data) {
    return fetchpost("/space/apply/data/getApplyDataList", data);
  },
  //自动训练保存
  saveTrainApplyData(data) {
    return fetchpost("/space/apply/data/saveTrainApplyData", data);
  },
  //应用类型列表
  getApplyTypeList(data) {
    return fetchpost("/space/apply/data/getApplyTypeList", data);
  },
  //应用名称列表
  getApplyNameList(data) {
    return fetchpost("/space/apply/data/getApplyNameList", data);
  },
  //应用数据来源
  getApplySourceList(data) {
    return fetchpost("/space/apply/data/getApplySourceList", data);
  },
  //应用数据类型来源
  getApplyDataTypeList(data) {
    return fetchpost("/space/apply/data/getApplyDataTypeList", data);
  },
  //应用数据详情
  getApplyDataDetailList(data) {
    return fetchpost("/space/apply/data/getApplyDataDetailList", data);
  },
  //内容信息转成pdf文件
  convertContentToPdf(data) {
    return fetchpost("/space/thirdParty/convertContentToPdf", data);
  },
  //修改系统配置
  updateSystemConfig(data) {
    return fetchpost("/space/systemconfig/updateSystemConfig", data);
  },
  //关键词查询常用语接口
  queryKeyWordCommonPhrases(data) {
    return fetchpost("/space/teamTagController/queryKeyWordCommonPhrases", data);
  },
  //编辑常用语
  editCommonPhrases(data) {
    return fetchpost("/space/teamTagController/editCommonPhrases", data);
  },
  //应用数据批量下载
  batchDataDownloadRecord(data) {
    return fetchpost("/space/apply/data/batchDataDownloadRecord", data);
  },
  //应用数据单条下载
  dataDownloadRecord(data) {
    return fetchpost("/space/apply/data/dataDownloadRecord", data);
  },
  //应用数据删除
  deleteApplyData(data) {
    return fetchpost("/space/apply/data/deleteApplyData", data);
  },
  //应用详情获取训练内容
  getTrainApplyDataChatContent(data) {
    return fetchpost("/space/apply/data/getTrainApplyDataChatContent", data);
  },
  //应用详情聊天记录详情
  getApplyDataChatContent(data) {
    return fetchpost("/space/apply/data/getApplyDataChatContent", data);
  },
  //应用数据详情删除
  deleteApplyDetailData(data) {
    return fetchpost("/space/apply/data/deleteApplyDetailData", data);
  },
  //获取下载记录
  getApplyDataDownloadRecord(data) {
    return fetchpost("/space/apply/data/getApplyDataDownloadRecord", data);
  },
  //新增知识库分类接口（新）
  addKnowledgeCategory(data) {
    return fetchpost("/space/teamKnowledge/addKnowledgeCategory", data);
  },
  //编辑知识库分类接口（新）
  editKnowledgeCategory(data) {
    return fetchpost("/space/teamKnowledge/editKnowledgeCategory", data);
  },
  //删除知识库分类接口（新）
  delKnowledgeCategory(data) {
    return fetchpost("/space/teamKnowledge/delKnowledgeCategory", data);
  },
  //分页查询知识库接口（新）
  queryKnowledgePage(data) {
    return fetchpost("/space/teamKnowledge/queryKnowledgePage", data);
  },
  //删除知识库内容（新）
  delKnowledgeData(data) {
    return fetchpost("/space/teamKnowledge/delKnowledgeData", data);
  },
  //新增知识库接口（新）
  addKnowledgeNews(data) {
    return fetchpost("/space/teamKnowledge/addKnowledge", data);
  },
  //获取知识库接口（新）
  getKnowledgeNews(data) {
    return fetchpost("/space/teamKnowledge/getKnowledge", data);
  },
  ///编辑知识库接口（新）
  editKnowledgeNews(data) {
    return fetchpost("/space/teamKnowledge/editKnowledge", data);
  },
  ///编辑知识库状态接口（新）
  editKnowledgeState(data) {
    return fetchpost("/space/teamKnowledge/editKnowledgeState", data);
  },
  //分页查询知识库文件接口（新）
  queryKnowledgeFilePage(data) {
    return fetchpost("/space/teamKnowledge/queryKnowledgeFilePage", data);
  },
  //获取知识库文件接口
  getKnowledgeFile(data) {
    return fetchpost("/space/teamKnowledge/getKnowledgeFile", data);
  },
  //编辑知识库文件名称
  editKnowledgeFileName(data) {
    return fetchpost("/space/teamKnowledge/editKnowledgeFileName", data);
  },
  //分页查询知识库文件内容信息
  queryKnowledgeDataPage(data) {
    return fetchpost("/space/teamKnowledge/queryKnowledgeDataPage", data);
  },
  //新增知识库信息（新）
  addKnowledgeData(data) {
    return fetchpost("/space/teamKnowledge/addKnowledgeData", data);
  },
  //文本拆分（新）
  newSegmentContent(data) {
    return fetchpost("/space/teamKnowledge/newSegmentContent", data);
  },
  //获取分段长度最大值
  getEmbeddingRuleMaxToken(data) {
    return fetchpost("/space/teamKnowledge/getEmbeddingRuleMaxToken", data);
  },
  //获取埋点历史创作记录
  queryMatrixRecordList(data) {
    return fetchpost("/space/matrix/queryMatrixRecordList", data);
  },
  //删除埋点历史数据记录
  deleteMatrixRecord(data) {
    return fetchpost("/space/matrix/deleteMatrixRecord", data);
  },
  //查询智能体分类列表
  queryRobotCategoryList(data) {
    return fetchpost("/space/robot/queryRobotCategoryList", data);
  },
  //新增智能体分类接口
  addTagTemplate(data) {
    return fetchpost("/space/robot/addTagTemplate", data);
  },
  //编辑智能体分类接口
  editAgentTagTemplate(data) {
    return fetchpost("/space/robot/editTagTemplate", data);
  },
  //删除智能体分类接口
  delTagTemplate(data) {
    return fetchpost("/space/robot/delTagTemplate", data);
  },
  //智能体分类排序
  sortTagTemplateList(data) {
    return fetchpost("/space/robot/sortTagTemplateList", data);
  },
  //分页查询智能体列表(平台数据)
  queryRobotPageList(data) {
    return fetchpost("/space/robot/queryRobotPageList", data);
  },
  //查询前台智能体列表(团队数据)
  queryFrontTrainRobotInfoList(data) {
    return fetchpost("/space/robot/queryFrontTrainRobotInfoList", data);
  },
  //图片打标
  teamKnowledgeAddKnowledgeBase(data) {
    return fetchpost("/space/teamKnowledge/addKnowledgeBase", data);
  },
  //获取表格的sheetName
  querySheetNames(data) {
    return fetchpost("/space/teamKnowledge/querySheetNames", data);
  },
  //获取表结构及内容
  getTableStructure(data) {
    return fetchpost("/space/teamKnowledge/getTableStructure", data);
  },
  //训练成功后获取表内容详情
  queryDataListByPage(data) {
    return fetchpost("/space/teamKnowledge/queryDataListByPage", data);
  },
  //修改训练表格记录
  updateTableData(data) {
    return fetchpost("/space/teamKnowledge/updateTableData", data);
  },
  //删除表格数据
  delTableData(data) {
    return fetchpost("/space/teamKnowledge/delTableData", data);
  },
  //新增知识库表格信息
  addKnowledgeTableData(data) {
    return fetchpost("/space/teamKnowledge/addKnowledgeTableData", data);
  },
  // 连接测试
  dbComponentConnectTest(data) {
    return fetchpost("/space/component/dbComponentConnectTest", data);
  },
  //技能列表
  querySkillInfoList(data) {
    return fetchpost("/space/robot/querySkillInfoList", data);
  },
  //技能分类
  querySkillCategoryList(data) {
    return fetchpost("/space/robot/querySkillCategoryList", data);
  },
  //通过文件提取txt以及图片
  ossUrlTextImgFilter(data) {
    return fetchpost("/space/resource/ossUrlTextImgFilter", data);
  },
  //技能详情
  querySkillInfoDetail(data) {
    return fetchpost("/space/robot/querySkillInfoDetail", data);
  },
  //语音转写
  audioFileConvertToText(data) {
    return fetchpost("/space/scene/audioFileConvertToText", data);
  },
  //音频文件时长换算电量
  audioFileTimeConvertElectricity(data) {
    return fetchpost("/space/scene/audioFileTimeConvertElectricity", data);
  },
  //获取音频详情
  getAudioFileTextInfo(data) {
    return fetchpost("/space/scene/getAudioFileTextInfo", data);
  },
  //编辑音频内容接口
  saveAudioFileTextInfo(data) {
    return fetchpost("/space/scene/saveAudioFileTextInfo", data);
  },
  //文档记录列表
  getDocumentRecordList(data) {
    return fetchpost("/space/systemconfig/getDocumentRecordList", data);
  },
  //获取验证码图片（登录）
  captchaImage(data) {
    return fetchpost("/space/common/captcha/captchaImage", data);
  }
};
const { Message, Modal } = ipkg;
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
const plugins_gZVkQZouNK = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$isEmpty = (v) => {
    if (v instanceof Array && v.length === 0)
      return true;
    if (v instanceof Object && Object.keys(v).length === 0 && !(v instanceof Date))
      return true;
    if (v === "" || v === null || v === void 0)
      return true;
    return false;
  };
  nuxtApp.vueApp.config.globalProperties.$dateFormat = function(date1, fmt) {
    if (date1 === "" || date1 === null || date1 === void 0) {
      return "--";
    }
    const date = new Date(date1);
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
    return fmt;
  }, // 整数校验
  nuxtApp.vueApp.config.globalProperties.$replace = (obj, type) => {
    return obj.replace(/[^\d]/g, "");
  }, nuxtApp.vueApp.config.globalProperties.$isLogin = (v) => {
    const authtoken = useCookie("authtoken").value;
    if (authtoken != void 0 || authtoken != null) {
      return true;
    } else {
      return false;
    }
  }, nuxtApp.vueApp.config.globalProperties.$isWapLogin = (v) => {
    const authtoken = useCookie("authtokenWap").value;
    if (authtoken != void 0 || authtoken != null) {
      return true;
    } else {
      return false;
    }
  }, // 动态获取文件夹对应logo
  nuxtApp.vueApp.config.globalProperties.$loadFileImages = (data) => {
    if (data.length > 0) {
      const extension = data.split(".")[1];
      return window.location.origin + "/image/fileIcon/" + extension + ".png";
    }
    return "";
  }, //手机号验证
  nuxtApp.vueApp.config.globalProperties.$checkModbile = (text) => {
    var re = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
    var result = re.test(text);
    if (!result) {
      return false;
    }
    return true;
  }, // 复制文本
  nuxtApp.vueApp.config.globalProperties.$CopyTex = (text, text2) => {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.readOnly = "readOnly";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    Message.success(text2 ? text2 : "已复制");
    textarea.remove();
  }, // 删除弹窗
  nuxtApp.vueApp.config.globalProperties.$confirmItem = (txtList, api, param, callBack, txt) => {
    Modal.confirm({
      okText: "确定",
      cancelText: "取消",
      render: (h2) => {
        return h2(
          "div",
          [
            txtList.map((item) => {
              return h2("p", item);
            })
          ]
        );
      },
      onOk: () => {
        if (axios1[api]) {
          axios1[api](param).then((res) => {
            Message.success(res.resultMsg);
            callBack ? callBack() : "";
          });
        }
        if (axios[api]) {
          axios[api](param).then((res) => {
            Message.success(res.message);
            callBack ? callBack() : "";
          });
        }
      }
    });
  }, //团队判断
  nuxtApp.vueApp.config.globalProperties.$isFirm = () => {
    const routing = getRouting();
    if (routing.clientType == "TEAM") {
      routing.setIsShowFirm(false);
      return true;
    } else if (routing.clientType == "PERSONAL") {
      routing.setIsShowFirm(true);
      return false;
    } else {
      routing.setIsShowFirm(false);
      return true;
    }
  }, //权限校验
  nuxtApp.vueApp.config.globalProperties.$isPerm = (str, isPageJump, isOper = true) => {
    const routing = getRouting();
    if (routing.clientType == "TEAM") {
      let flag = false;
      routing.permList.some((item) => {
        if (item.tempCode == str) {
          flag = true;
        }
      });
      if (!flag && isOper) {
        const router = useRouter();
        if (!isPageJump) {
          routing.setIsDeniedTrue();
        } else {
          console.log(router.currentRoute.value.path);
          if (router.currentRoute.value.path.indexOf("/ai/") != -1) {
            router.push({
              path: "/ai/enterprise/denied"
            });
          } else {
            router.push({
              path: "/enterprise/denied"
            });
          }
        }
      }
      return flag;
    } else {
      return true;
    }
  };
  nuxtApp.vueApp.config.globalProperties.$checkDevice = () => {
  }, //判断是否安卓
  nuxtApp.vueApp.config.globalProperties.$onSystemInfo = () => {
  };
  nuxtApp.vueApp.config.globalProperties.$isWeixin = () => {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  }, // 防抖函数
  nuxtApp.vueApp.config.globalProperties.$debounce = (fn, delay) => {
    let timer = null;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }, //状态过滤
  nuxtApp.vueApp.config.globalProperties.$filterStatus = (value, list) => {
    if (list != void 0) {
      for (let index2 = 0; index2 < list.length; index2++) {
        if (list[index2].key == value) {
          return list[index2].value;
        }
      }
    }
  }, // 根据某个字段进行分组
  nuxtApp.vueApp.config.globalProperties.$filterTypeGrouped = (list, type = "type") => {
    let listData = list.reduce((acc, item) => {
      if (!acc[item[type]]) {
        acc[item[type]] = [];
      }
      acc[item[type]].push(item);
      return acc;
    }, {});
    return listData;
  }, // 根据类型获取对应路由
  nuxtApp.vueApp.config.globalProperties.$getTypeRoute = (type) => {
    for (let i = 0; i < routeDictionaryList.length; i++) {
      if (routeDictionaryList[i].type === type) {
        return routeDictionaryList[i].url;
      }
    }
    return "";
  };
  nuxtApp.vueApp.config.globalProperties.$formatNumberWithCommasOldSchool = (num) => {
    if (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return 0;
    }
  };
  nuxtApp.vueApp.config.globalProperties.$setAiChat = async (proxy2, params, type, callback) => {
    const routing = getRouting();
    let source2 = "";
    const headers = useRequestHeaders();
    {
      source2 = headers == null ? void 0 : headers.host;
    }
    if (!params.lastAiRecordCode || params.lastAiRecordCode.length == 0) {
      routing.setIsChatLoad(true);
    }
    routing.setIsoncompleted(false);
    var shouldAbort = false;
    routing.setGroupId(params.groupId);
    routing.setRobotId(params.robotCode);
    let apiUrl = "/space/ai/newChat";
    if (type === "DrawBatch") {
      apiUrl = "/space/ai/drawBatchChat";
    } else if (type === "web") {
      apiUrl = "/space/teamDataset/syncWebsiteData";
    }
    const abortCtrl = new AbortController();
    const signal = abortCtrl.signal;
    try {
      const response = await fetch(`${location.protocol}//${location.host}${apiUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createParamsData(params)),
        signal
      });
      if (response.status != 200) {
        routing.setIsAccident(false);
        setTimeout(() => {
          routing.setIsAccident(true);
        }, 100);
      }
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const reader = response.body.getReader();
      routing.setStream(params.groupId, reader, abortCtrl);
      await readStream(reader, routing, proxy2, callback, abortCtrl, params.groupId);
    } catch (error) {
      console.error("Fetch error:", error.message);
      if (!abortCtrl.signal.aborted) {
        abortCtrl.abort();
      }
    }
    function createParamsData(params2) {
      return {
        tntInstId: getToken("tntInstId"),
        requestToken: "",
        tntBizId: getToken("tntBizId"),
        reqParam: params2,
        extendParams: {},
        assertToken: getToken("assertToken"),
        sourceVersion: "1.0.0",
        operatorId: params2.operatorId || "",
        userToken: getToken("userToken"),
        systemCurrentTime: Date.now(),
        pageNo: params2.pageNo || 1,
        pageSize: params2.pageSize || 20,
        currentPageMaxId: params2.currentPageMaxId || 0,
        source: source2,
        channel: "WEB",
        msgSource: params2.msgSource || ""
      };
    }
    async function readStream(reader, routing2, proxy3, callback2, abortCtrl2, groupId) {
      const decoder = new TextDecoder();
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done)
            break;
          if (done || shouldAbort) {
            routing2.setIsLoad(false);
            if (shouldAbort)
              ;
            break;
          }
          routing2.setIsLoad(true);
          buffer += decoder.decode(value, { stream: true });
          let boundary = buffer.indexOf("\n");
          while (boundary !== -1) {
            const line = buffer.slice(0, boundary);
            buffer = buffer.slice(boundary + 1);
            processMessage(line.trim(), routing2, proxy3, callback2);
            boundary = buffer.indexOf("\n");
          }
        }
      } finally {
        reader.releaseLock();
      }
    }
    function processMessage(line, routing2, proxy3, callback2) {
      if (line.length === 0)
        return;
      const jsonData = JSON.parse(line.substring(5)).data;
      handleJsonData(jsonData, routing2, proxy3, callback2);
    }
    function getToken(key) {
      const authToken = useCookie("authtoken").value;
      return authToken ? authToken[key] : "0000";
    }
    function handleJsonData(jsonData, routing2, proxy3, callback2) {
      routing2.setIsoncompleted(false);
      if (jsonData.type != "MODEL_WAIT") {
        routing2.setIsChatLoad(false);
      }
      if (jsonData.content === "[ONCOMPLETED]") {
        routing2.getUserPoints(proxy3);
        routing2.setIsoncompleted(true);
        routing2.setIsLoad(false);
        jsonData.content = "";
        jsonData.type = "[ONCOMPLETED]";
      }
      if (jsonData.type === "ERROR") {
        routing2.setIsLoad(false);
        let code2 = jsonData.errorCode;
        let codeList = [770301, 770302, 770303];
        let codeList2 = [770304, 770305];
        const router = useRouter();
        if (codeList.indexOf(code2) == -1 && codeList2.indexOf(code2) == -1) {
          proxy3.$Message.error(jsonData.content);
        }
        if (codeList.indexOf(code2) != -1) {
          let str = jsonData.content.split("@");
          proxy3.$Message.error(str[0]);
          const routing3 = getRouting();
          let flag = false;
          routing3.permList.forEach((item, i) => {
            if (item.tempCode == "33143") {
              flag = true;
            }
            if (i == Number(routing3.permList.length - 1)) {
              if (flag) {
                routing3.setIsRecharge(false);
                setTimeout(() => {
                  routing3.setIsRecharge(true);
                }, 100);
              }
            }
          });
        }
        if (codeList2.indexOf(code2) != -1) {
          let str = jsonData.content.split("@");
          proxy3.$Message.error(str[0]);
          router.push("/member");
        }
      }
      jsonData.groupId = routing2.groupId;
      jsonData.robotCode = routing2.robotId;
      callback2(jsonData);
    }
  };
  nuxtApp.vueApp.config.globalProperties.$processChatData = (chatList, jsonData, isName = false) => {
    let flag = false, chatIndex = 0;
    if (jsonData.content == "[ONCOMPLETED]" || jsonData.type == "ERROR") {
      return chatList;
    }
    chatList.forEach((item, index2) => {
      if (item.recordCode == jsonData.code) {
        flag = true;
        chatIndex = index2;
      }
    });
    let content = jsonData.content;
    let chatType = jsonData.type;
    if (jsonData.type == "INTELLIGENT_CONTACT" || jsonData.type == "WAIT" || jsonData.type == "MESSAGE" || jsonData.type == "URL" || jsonData.type == "SUGGEST_ROBOT" || jsonData.type == "INTELLIGENT_AGENT_RECOMMENDATION") {
      chatType = chatList[chatIndex].chatType;
      content = "";
    }
    if (flag) {
      if (jsonData.type == "POSTER_TEMPLATE_ROBOT" && !chatList[chatIndex].list) {
        chatList[chatIndex].list = [];
      }
      chatList[chatIndex].code = (jsonData == null ? void 0 : jsonData.code) ?? "";
      chatList[chatIndex].chatType = chatType;
      chatList[chatIndex].recordCode = (jsonData == null ? void 0 : jsonData.code) ?? "";
      chatList[chatIndex].content += jsonData.type == "POSTER_TEMPLATE_ROBOT" ? "" : content;
      chatList[chatIndex].robotCode = (jsonData == null ? void 0 : jsonData.robotCode) ?? "";
      chatList[chatIndex].intentionalAnalysisType = (jsonData == null ? void 0 : jsonData.intentionalAnalysisType) ?? "";
      chatList[chatIndex].intentionalAnalysisLabel = (jsonData == null ? void 0 : jsonData.intentionalAnalysisLabel) ?? "";
      chatList[chatIndex].intentionalAnalysisCode = (jsonData == null ? void 0 : jsonData.intentionalAnalysisCode) ?? "";
      chatList[chatIndex].intentionalAnalysisName = (jsonData == null ? void 0 : jsonData.intentionalAnalysisName) ?? "";
      chatList[chatIndex].intentionalAnalysisLog = (jsonData == null ? void 0 : jsonData.intentionalAnalysisLog) ?? "";
      chatList[chatIndex].intentionalAnalysisFlag = (jsonData == null ? void 0 : jsonData.intentionalAnalysisFlag) ?? "";
      chatList[chatIndex].intentionalAnalysisLabelCode = (jsonData == null ? void 0 : jsonData.intentionalAnalysisLabelCode) ?? "";
      if (jsonData.type == "POSTER_TEMPLATE_ROBOT") {
        if (JSON.parse(jsonData.content) && JSON.parse(jsonData.content).url) {
          chatList[chatIndex].list.push({
            url: JSON.parse(jsonData.content).url,
            code: JSON.parse(jsonData.content).code
          });
        }
      }
      if (jsonData.type == "WAIT" || jsonData.type == "MESSAGE" || jsonData.type == "URL") {
        chatList[chatIndex].urlList.push({
          content: jsonData.content,
          chatType: (jsonData == null ? void 0 : jsonData.type) ?? "CHAT",
          type: "SYSTEM"
        });
      }
      if (jsonData.type == "SUGGEST_ROBOT" || jsonData.type == "INTELLIGENT_AGENT_RECOMMENDATION") {
        chatList[chatIndex].robotInfo = JSON.parse(jsonData.content);
      }
      if (jsonData.type == "INTELLIGENT_CONTACT") {
        chatList[chatIndex].promptList = JSON.parse(jsonData.content);
      }
    } else {
      chatList.push({
        content,
        type: "SYSTEM",
        request: (jsonData == null ? void 0 : jsonData.request) ?? "",
        chatType: (jsonData == null ? void 0 : jsonData.type) ?? "CHAT",
        code: (jsonData == null ? void 0 : jsonData.code) ?? "",
        robotLog: (jsonData == null ? void 0 : jsonData.log) ?? "",
        log: (jsonData == null ? void 0 : jsonData.intentionalAnalysisLog) ? jsonData == null ? void 0 : jsonData.intentionalAnalysisLog : (jsonData == null ? void 0 : jsonData.log) ?? "",
        name: jsonData.name ? jsonData.name : jsonData.robotName ? jsonData.robotName : "",
        quoteNum: (jsonData == null ? void 0 : jsonData.quoteNum) ?? "",
        recordCode: (jsonData == null ? void 0 : jsonData.code) ?? "",
        groupId: (jsonData == null ? void 0 : jsonData.groupId) ?? "",
        robotCode: (jsonData == null ? void 0 : jsonData.robotCode) ?? "",
        robotInfo: jsonData.type == "SUGGEST_ROBOT" || jsonData.type == "INTELLIGENT_AGENT_RECOMMENDATION" ? JSON.parse(jsonData.content) : null,
        intentionalAnalysisType: (jsonData == null ? void 0 : jsonData.intentionalAnalysisType) ?? "",
        intentionalAnalysisLabel: (jsonData == null ? void 0 : jsonData.intentionalAnalysisLabel) ?? "",
        intentionalAnalysisCode: (jsonData == null ? void 0 : jsonData.intentionalAnalysisCode) ?? "",
        intentionalAnalysisName: (jsonData == null ? void 0 : jsonData.intentionalAnalysisName) ?? "",
        intentionalAnalysisLog: (jsonData == null ? void 0 : jsonData.intentionalAnalysisLog) ?? "",
        intentionalAnalysisFlag: (jsonData == null ? void 0 : jsonData.intentionalAnalysisFlag) ?? false,
        intentionalAnalysisLabelCode: (jsonData == null ? void 0 : jsonData.intentionalAnalysisLabelCode) ?? "",
        promptList: jsonData.type == "INTELLIGENT_CONTACT" ? JSON.parse(jsonData.content) : null,
        urlList: jsonData.type == "WAIT" || jsonData.type == "MESSAGE" || jsonData.type == "URL" ? [{
          content: jsonData.content,
          chatType: (jsonData == null ? void 0 : jsonData.type) ?? "CHAT",
          type: "SYSTEM"
        }] : []
        // robotInfo: jsonData.type == 'SUGGEST_ROBOT'?JSON.parse(jsonData. ):null
      });
    }
    return chatList;
  }, nuxtApp.vueApp.config.globalProperties.$processInitChatData = (chatList) => {
    const imageExtensions = /* @__PURE__ */ new Set(["JPG", "JPEG", "PNG", "GIF", "BMP", "WEBP"]);
    chatList.forEach((item) => {
      if (!proxy.$isEmpty(item.attachmentList)) {
        item.imgList = item.imgList || [];
        item.fileList = item.fileList || [];
        item.attachmentList.forEach((data) => {
          const attachment = {
            url: data.sourceUrl,
            code: data.code
          };
          if (imageExtensions.has(data.format.toUpperCase())) {
            item.imgList.push(attachment);
          } else {
            item.fileList.push({
              name: data.fileName,
              url: data.sourceUrl,
              size: data.fileSize ?? 1
            });
          }
        });
      }
    });
    return chatList;
  }, //版本检测
  nuxtApp.vueApp.config.globalProperties.$versionCheck = async () => {
    useRuntimeConfig();
  }, //监听a标签
  nuxtApp.vueApp.config.globalProperties.$toMonitorA = () => {
  }, //移除监听
  // nuxtApp.vueApp.config.globalProperties.$removeToMonitorA=()=>{
  // 	// if(false){
  // 	// }
  // },
  //判断sorce
  nuxtApp.vueApp.config.globalProperties.$judgmentSorce = () => {
  }, // 生成cURL命令
  // 创建请求配置对象  对象结构
  // const config = {
  // 	method: 'post',
  // 	url: 'https://example.com/api/data',
  // 	headers: {
  // 	  'Authorization': 'Bearer yourToken',
  // 	  'Content-Type': 'application/json'
  // 	},
  // 	data: {
  // 	  key1: 'value1',
  // 	  key2: 'value2'
  // 	}
  //   };
  nuxtApp.vueApp.config.globalProperties.$createCurlCommand = (config) => {
    let command = "curl -X " + config.method.toUpperCase() + " '" + config.url + "'";
    if (config.headers) {
      for (const [header, value] of Object.entries(config.headers)) {
        command += " -H '" + header + ": " + value + "'";
      }
    }
    if (config.data) {
      command += " -d '" + JSON.stringify(config.data) + "'";
    }
    return command;
  };
  nuxtApp.vueApp.config.globalProperties.$parseCurlCommand = (curlCmd) => {
    const lines = curlCmd.split("\\\n").map((line) => line.trim());
    let method = "GET";
    let url = "";
    let headers = [];
    let body = "";
    let data = [];
    lines.forEach((line, index2) => {
      if (line.startsWith("curl")) {
        const matchesMethod = line.match(/curl\s--location\s--request\s(\w+)\s'(.*?)'/);
        const matchesSimple = line.match(/curl\s'(.*?)'/);
        if (matchesMethod) {
          method = matchesMethod[1];
          url = matchesMethod[2];
        } else if (matchesSimple) {
          url = matchesSimple[1];
          method = curlCmd.includes("--data") || curlCmd.includes("--data-binary") ? "POST" : "GET";
        }
      } else if (line.startsWith("--header")) {
        const matches = line.match(/--header\s'(.*?)'/);
        if (matches) {
          const [key, value] = matches[1].split(": ").map((str) => str.trim());
          headers.push({ key, value });
        }
      } else if (line.startsWith("-H")) {
        const matches = line.match(/-H\s'(.*?)'/);
        if (matches) {
          const [key, value] = matches[1].split(": ").map((str) => str.trim());
          headers.push({ key, value });
        }
      } else if (line.startsWith("--data-binary")) {
        const matches = line.match(/--data-binary\s'(.*?)'/);
        if (matches) {
          body = matches[1];
        }
      } else if (line.startsWith("--data-raw")) {
        const matches = line.match(/--data-raw\s'([^]*)/);
        if (matches) {
          let rawData = [matches[1]];
          while (++index2 < lines.length && !lines[index2].startsWith("--") && !lines[index2].startsWith("-H")) {
            rawData.push(lines[index2]);
          }
          body = rawData.join("\n").replace(/'$/, "");
        }
      } else if (line.startsWith("--data")) {
        const matches = line.match(/--data\s'(.*?)'/);
        if (matches) {
          body = matches[1];
        }
      }
    });
    if (method === "GET" || method === "POST") {
      const [baseUrl, queryParams] = url.split("?");
      url = baseUrl;
      if (queryParams) {
        queryParams.split("&").forEach((param) => {
          const [key, value] = param.split("=");
          data.push({ key: decodeURIComponent(key), value: decodeURIComponent(value) });
        });
      }
    }
    if (data.length <= 0) {
      data = [{ key: "", value: "" }];
    }
    if (headers.length <= 0) {
      headers = [{ key: "", value: "" }];
    }
    return {
      data,
      headers,
      url,
      method,
      body
    };
  };
});
const v_load_5pZNWn7tjA = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("load", {
    mounted(el, binding) {
      const spinner = document.createElement("div");
      spinner.className = "spinnerCom center";
      el.spinner = spinner;
      if (binding.value) {
        el.classList.add("spinnerMask");
        el.appendChild(spinner);
      }
      el.style.position = "relative";
    },
    updated(el, binding) {
      if (binding.value) {
        if (!el.contains(el.spinner)) {
          el.appendChild(el.spinner);
        }
        el.classList.add("spinnerMask");
      } else {
        if (el.contains(el.spinner)) {
          el.removeChild(el.spinner);
        }
        el.classList.remove("spinnerMask");
      }
    }
  });
});
const iview_gAnyFwhY5g = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ipkg);
});
const axios_QMFgzss1s4 = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$api = axios;
  nuxtApp.vueApp.config.globalProperties.$api1 = axios1;
});
const pinia_48xmdi2HHl = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(piniaPluginPersistedstate);
});
const vant_ixkf0x0Irp = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vant);
});
const _plugins = [
  plugin_vue3_A0OWXRrUgq,
  components_plugin_KR1HBZs4kY,
  vueuse_head_plugin_D7WGfuP1A0,
  router_Pg0DINazwm,
  plugin_FRmGFsEaPh,
  plugins_gZVkQZouNK,
  v_load_5pZNWn7tjA,
  iview_gAnyFwhY5g,
  axios_QMFgzss1s4,
  pinia_48xmdi2HHl,
  vant_ixkf0x0Irp
];
const Fragment = defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const layouts = {
  aiapp: () => import('./_nuxt/aiapp-186e65af.mjs').then((m) => m.default || m),
  backstage: () => import('./_nuxt/backstage-1e1b0588.mjs').then((m) => m.default || m),
  brain: () => import('./_nuxt/brain-9d2c73cc.mjs').then((m) => m.default || m),
  cbeautys: () => import('./_nuxt/cbeautys-84a893a8.mjs').then((m) => m.default || m),
  default: () => import('./_nuxt/default-5e086564.mjs').then((m) => m.default || m),
  detail: () => import('./_nuxt/detail-20437c9c.mjs').then((m) => m.default || m),
  enterprise: () => import('./_nuxt/enterprise-e31bba7b.mjs').then((m) => m.default || m),
  firm: () => import('./_nuxt/firm-20e0bdd7.mjs').then((m) => m.default || m),
  home: () => import('./_nuxt/home-58d83c0c.mjs').then((m) => m.default || m),
  index: () => import('./_nuxt/index-8bb201d4.mjs').then((m) => m.default || m),
  knowledge: () => import('./_nuxt/knowledge-0d0f2d86.mjs').then((m) => m.default || m),
  login: () => import('./_nuxt/login-a0472863.mjs').then((m) => m.default || m),
  mobile: () => import('./_nuxt/mobile-dd2396b2.mjs').then((m) => m.default || m),
  noleft: () => import('./_nuxt/noleft-15fc951d.mjs').then((m) => m.default || m),
  qrcode: () => import('./_nuxt/qrcode-f9870d3a.mjs').then((m) => m.default || m),
  robot: () => import('./_nuxt/robot-a2a356c4.mjs').then((m) => m.default || m),
  workbench: () => import('./_nuxt/workbench-4d478df7.mjs').then((m) => m.default || m)
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    ...{}
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, context.attrs, context.slots);
    };
  }
});
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props.name) ?? route.meta.layout ?? "default");
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && {
          key: layout.value,
          name: layout.value,
          ...{},
          ...context.attrs
        }, context.slots).default()
      }).default();
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source2 = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source2 === "function" ? source2(routeProps.route) : source2;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const __nuxt_component_1$2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const __nuxt_component_1$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "cModal",
  __ssrInlineRender: true,
  props: {
    modalSlot: {
      type: String,
      default: "header"
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    closable: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    sticky: {
      type: Boolean,
      default: false
    },
    stickyDistance: {
      type: Number,
      default: 10
    },
    resetDragPosition: {
      type: Boolean,
      default: false
    },
    okText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    footerHide: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    class: {
      type: String,
      default: null
    },
    zIndex: {
      type: Number,
      default: 1e3
    },
    transitionNames: {
      type: Array,
      default: ["ease", "fade"]
    },
    transfer: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function
    },
    size: {
      type: String,
      default: "default"
    },
    modalWidth: {
      type: Number,
      default: 0
    }
  },
  emits: ["on-ok", "on-cancel", "on-visible-change", "update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const modalShow = ref(false);
    const windoWidth = ref(480);
    const onOk = () => {
      emits("update:modelValue", false);
      emits("on-ok");
    };
    const onCancel = () => {
      emits("update:modelValue", false);
      emits("on-cancel");
    };
    const onVisibleChange = (e) => {
      emits("on-visible-change", e);
    };
    const judgeSize = () => {
      if (props.modalWidth > 0) {
        windoWidth.value = props.modalWidth;
      } else {
        if (props.size == "default") {
          windoWidth.value = 480;
        }
        if (props.size == "large") {
          windoWidth.value = 788;
        }
      }
    };
    watch(() => props.modelValue, (state) => {
      modalShow.value = state;
    }, { deep: true, immediate: true });
    watch(() => props.size, () => {
      judgeSize();
    }, { deep: true, immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Modal = resolveComponent("Modal");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Modal, {
              "model-value": props.modelValue,
              title: props.title,
              closable: props.closable,
              "mask-closable": props.maskClosable,
              mask: props.mask,
              loading: props.loading,
              scrollable: props.scrollable,
              fullscreen: props.fullscreen,
              draggable: props.draggable,
              "sticky-distance": props.stickyDistance,
              "reset-drag-position": props.resetDragPosition,
              "ok-text": props.okText,
              "footer-hide": props.footerHide,
              styles: props.styles,
              "class-name": props.size == "large" ? "customTop " + props.className : props.className ? props.className : props.class,
              "z-index": props.zIndex,
              "transition-names": props.transitionNames,
              transfer: props.transfer,
              "lock-scroll": props.lockScroll,
              "before-close": props.beforeClose,
              onOnOk: onOk,
              onOnCancel: onCancel,
              onOnVisibleChange: onVisibleChange,
              width: windoWidth.value
            }, {
              [props.modalSlot]: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!props.title) {
                    _push3(`<div class="${ssrRenderClass(props.size == "large" ? "header" : "")}" data-v-21c93761${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "header", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !props.title ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: props.size == "large" ? "header" : ""
                    }, [
                      renderSlot(_ctx.$slots, "header", {}, void 0, true)
                    ], 2)) : createCommentVNode("", true)
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="cModal-content" data-v-21c93761${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "cModal-content" }, [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Modal, {
                "model-value": props.modelValue,
                title: props.title,
                closable: props.closable,
                "mask-closable": props.maskClosable,
                mask: props.mask,
                loading: props.loading,
                scrollable: props.scrollable,
                fullscreen: props.fullscreen,
                draggable: props.draggable,
                "sticky-distance": props.stickyDistance,
                "reset-drag-position": props.resetDragPosition,
                "ok-text": props.okText,
                "footer-hide": props.footerHide,
                styles: props.styles,
                "class-name": props.size == "large" ? "customTop " + props.className : props.className ? props.className : props.class,
                "z-index": props.zIndex,
                "transition-names": props.transitionNames,
                transfer: props.transfer,
                "lock-scroll": props.lockScroll,
                "before-close": props.beforeClose,
                onOnOk: onOk,
                onOnCancel: onCancel,
                onOnVisibleChange: onVisibleChange,
                width: windoWidth.value
              }, {
                [props.modalSlot]: withCtx(() => [
                  !props.title ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: props.size == "large" ? "header" : ""
                  }, [
                    renderSlot(_ctx.$slots, "header", {}, void 0, true)
                  ], 2)) : createCommentVNode("", true)
                ]),
                footer: withCtx(() => [
                  renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "cModal-content" }, [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ])
                ]),
                _: 2
              }, 1032, ["model-value", "title", "closable", "mask-closable", "mask", "loading", "scrollable", "fullscreen", "draggable", "sticky-distance", "reset-drag-position", "ok-text", "footer-hide", "styles", "class-name", "z-index", "transition-names", "transfer", "lock-scroll", "before-close", "width"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cModal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-21c93761"]]);
const _imports_0$1 = "" + __buildAssetsURL("paySuccess.9b70bab8.png");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["toClose"],
  setup(__props, { expose: __expose, emit: emits }) {
    const router = useRouter$1();
    const routing = getRouting();
    const { proxy: proxy2 } = getCurrentInstance();
    const modalShow = ref(false);
    const params = ref({
      title: "支付成功",
      name: "感谢您购买了AI功能"
    });
    const showFn = (title, name) => {
      if (!proxy2.$isEmpty(title)) {
        params.value.title = title;
      }
      if (!proxy2.$isEmpty(name)) {
        params.value.name = name;
      }
      modalShow.value = true;
    };
    __expose({
      showFn
    });
    const toConfirm = () => {
      modalShow.value = false;
      if (routing.clientType == "TEAM") {
        router.push(routing.defJumpUrl);
      }
      routing.getUserPoints(proxy2);
      emits("toClose");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      _push(ssrRenderComponent(_component_cModal, mergeProps({
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        "class-name": "cPaySuccessMain",
        closable: false,
        "footer-hide": true,
        "mask-closable": false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cPaySuccess" data-v-66c9bf36${_scopeId}><img class="successIco"${ssrRenderAttr("src", _imports_0$1)} data-v-66c9bf36${_scopeId}><div class="title" data-v-66c9bf36${_scopeId}>${ssrInterpolate(params.value.title)}</div><div class="name" data-v-66c9bf36${_scopeId}>${ssrInterpolate(params.value.name)}</div><div class="bottom" data-v-66c9bf36${_scopeId}><div class="btn" data-v-66c9bf36${_scopeId}>确定</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "cPaySuccess" }, [
                createVNode("img", {
                  class: "successIco",
                  src: _imports_0$1
                }),
                createVNode("div", { class: "title" }, toDisplayString$1(params.value.title), 1),
                createVNode("div", { class: "name" }, toDisplayString$1(params.value.name), 1),
                createVNode("div", { class: "bottom" }, [
                  createVNode("div", {
                    class: "btn",
                    onClick: toConfirm
                  }, "确定")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cPaySuccess/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-66c9bf36"]]);
const _imports_0 = "" + __buildAssetsURL("banner.b18c1aba.png");
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAexJREFUaEPtl9FNwzAQhs/tSx/zEslRXzJC2QA26AZ0BEagEzACYgOYgG5AR+hTYikP8FqplZFRglBIYt+dT6jCeU3i+7/7z+ezggt/1IXrhwTw1w4mB5IDzAykEmImkP17coCdQuYC/9eBPM9X8/n8wxhzYCYRsizLFovFCgAO2PVIDhRF8QYALiBYazfGmCcqhNa6VEq9AkDpAKy1NxgINIDW+roN+K2ZCtET/7WetXZrjLkPTQgaoCzL7Hg8vvcDYCGGxFMcRQO4IFrrjVLqkQoxIR6VfRefBMCBiCmeBUCBiC2eDYCBkBAfBSAEQkp8NAAPxFYpddv2+Z+tF71hh1oreRMPLTbWnQa6VRTxUR3oRPogsAeV70CL6kAXrCiKOwB4GAj+Utf12icK8z46wNiG7URhT2wfTFQAn3gJiGgAE+KfAeBX2cRyIgqAr89zZ6epMmID+MT7uhPXCRZAqHhJCDIAVrwUBAmAKl4CAg3Q3sjcndjdYcmzzcTGdnfina//d+/RACN3YtJsMwSBHTXQAH0HsAH7me1DnE6nq6Zp9mIOtKOzK5/NbDbbV1XlDirWs1wuV+fz2R12O0z5iEyjLBLCz+gSIsQQ/SUBiKY3YPHkQECSRD9JDoimN2Dx5EBAkkQ/uXgHPgGtjFtAMULHzwAAAABJRU5ErkJggg==";
const _imports_2$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABWVJREFUaEPlm3+IVFUUxz9ndsUlKrbIXCFoRSr/sBBEVFjbGag/opYS/1lKd6boj6SgQgUtiq2kDVrJP4r6I3DGrIyEFjKCIp5R0IL9MNw/yth2syUXDN1yixVzT56ZN+7bcdw3c9+bddQL+8+++z33fN89795zz/2OEHNTr7sRBldCQxvoEoRFQCtwtf9nI44DY8AIKj+DDoB8C/RLKjsRp0sSh7ECqV87EVkL3BUgUq35cZQvQfdAYm8cZCMRVC/TAvoEwuNAc7VsQvqPIbzNpGyXVHbU1bYTQfUyzTC5BZEngSbXwSvETSC8xaRsdZnRqgmq13UfIm8CN1XoYFzdRpHEU9K+84NqDFZMUL1ME6JGLFPNADXom0VlQ6WzWRFB9TKtiH4MLKmBwy4mD6KyRlLZ4TBwKEH1MosR/fwihGSY78Oo3COp7E8zdZyRoE/OA1rCRrtIz0dRSc1E8oIE/bA0crZJ13OzZGH1hcK1LEF/QfkGWFrPzAK+DaCyvNzCU57g/vTOOlgtq323WUnmHi4FnUdQvUwnou9Xa70u+qt2SGrXvqAv0wj6oTlUx4tK2Hu07/F2SWUtkc+3EoJdO/z0K8xQ/T4Xtkl77rnzCOYTZ1GbvVrnlrV+OROoLCwm6OdmUL10L8LGWo8+o/251xcenzoezY3ALOYJ+t/e0RoceSp39MYVcEsa/joMAzsqx5XvOYYunCep7v98gl3rEHknqlUnfGJOgVhL2xT8lxz8YTlGhKa6XlK7dvsE0/sQ7o1gzh0qDbD0GbjWKht+OzMB378A/1pQObc+SebWiB+exyKUGZw9OAdsugGWvQiNV03Z+nsQDr4MesbV/ji68DojmEQ0Yjy4+hDAWYje9uh0Q0MfwpFP3I3r5GpRL70J4VVnK3OugZs7nOHTgC3t0DB36l82ezaLNpsuTWSLqNeVRSTtgs9jLLxW9DrDQ4H/jBS+x8nToV3LdNhtBPsRWeGCnhWCNsjIZzD4nouL/aL7079HOq3XegaLtA5th+OHqiU5agRPRlpBG5pgwZ3VDlx9/1Mn4NiBanHjRlCrRV1K/a8IgtFC1DbnYJpVq+mNEKKWD7lXzWZrkfnxFRibsUJY7tWOXBrbxFEPDudcYqPfMpndCA+5oGdlH7SE+7vnHTd6yVouugXRHmeC9g22PuAMnwac3zY94bbs5YeXYPyIm31hk6i3vg1JfOVmIUZUuWT7tz4Y7nMfJJFInj1HdDciQycibfbuLhSQtlAt7wE7/BabJdi2sLjloGZlHJV5xRN9HyL3R/XTCW8H3js2Q/PiKbiROrAVJv50MumD9kky11EfJYtbH4H5q6bIxFGyENZJe+5dn2A+TO1UH/c9e+UzYEWnRQ/CyaGYik6ywO4qgmXDbQjPVu5RDXpa2dDC87QlVxGa0Cvtuc1mIUDwMi/8Glv10hd/FiNMXB4qskPas08XzZRevjQjaqfK2VZQRKVVxNuNr5Xtz6mlylyf5WUiJji49JokOktlJpfRBahkJZkNvwAtfIt5TYzVB+pFNhIWTSYrWVXxFbZP0rQxlqPW+/dochJTWpTVzFy5MpJiTPhamU/rUE5i19V3RxICBUhauH5UR7ISk410xCLlCpCsEzGeZFHiFeMFlzBfZvJapEJV2JpY/vkIqhtKZSJhpkLFeOUM5LeRBD2oPjYLooUJlO0gvUF5SBixsqlapaBA2LaQ0I0odrEX91HLJM2vMylvzLqkufRFFGZU16J0AskI5Q8rM3wB7IHWvSYiqPall/Z3CtGZBs2ThZUkdBkqS84q6K0WYcmCzbD9tMCa/azA/oZRBkEG4MzXsKg/DlJB//4HcE7lPKO+HP4AAAAASUVORK5CYII=";
const _imports_3 = "" + __buildAssetsURL("electric.23752c49.png");
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABzJJREFUeF7VW81W20YUvneE0p9NyRPU9JwG001h2YOTQGNzsivpCwB9gUBfINAXCOkLYJ4A3FWDc44dcJolXiWiXdh5AsiqbmTp9ox+bEvWSDOyZEA7H43u3Pvdn7k/Y4QpPMW3KwUw9RVAKgDDr4Gg4G6LBQDqDlhA6IJNH2xibdKo+89yvZ03e5jHBoXGyuwXM/oGIawj0SIhzqbch4PTBMBmz/xU6642r1LSEX6WKQDFs/IKID4DgJWsGfXoVYHo0Lj/qpkV/UwAKJ5WNoEBF9wz7azYE9LhVlE1SieHk+40EQCexg+mKHhY3iaY2pax+ucwjigikgoA18dnDghxXXG/fJYj7hrLJ3tpiCsDcAO0LpKzC6a2qmoNSgAs/FV5Sjbsp0F6Gt8QwBXZuPX3g5Nj2f2kASi+WXsGRLuyhK91nYJLSAFwq4T3kZcEIRGAWym8BwIB27kovYx12VgAbrPwAxckWo1LnIQA3DtdW2eMjq7VlzPYnAdGNLUl0ekQCUCx8bgAutW4xgQnA9GHJAigfVGqL0URjQbgtFIFBhuZcnHNxBBw/33pZCfMxhgAXl7P09u0T5cIakR2k+lWu9eDK7+K4xnkl3f0gm3BolMwMXg4TSuzEJbCJfY4AK1KJx1T1ASCPdVKbcqFVNMo1VdHNRsAIGXU7wLRlqrgYfOaGhChUyEIgKr2bTjsWeZ2Vo0KHnxJt44QHBfJ6wlYwQAAZd+34dB4UN/Mg8ti3kF4xAqGAChpn5pG6VXAl7IGYr5VOc/NEhCqxnJ9i/PsAPBto7Ko6XAuKYSw7HRMeMbadgj3tX1R8sFPg8/v3HkKQAXbwlpU9cZpod4/J0jdTxSKw5Oj/0xzjruuA8D82aN9RPZUCgAiHukjq8Ji0IrGIq5PP2ziPdO8GxVHimflXa/HKMWa0iIbtowH9aoLQKt8joBygcfU5qI062WP/Aj1n65Rqs9FMVVsrXW49v13Ueczf+d0nvSZTh5WAJ4bYATjMaaDtYvSibANFtBYjKV896ayaBPwOqMACcE0r4DI3eCiVL+L904frTPGpIoeAtq5KL3KrSPEByjY13+yAeaQwVfuAIV4RMmnza6Zc6jkZwmlpZIPjiz2juANZ4jC8BhtaFtkf5jRmNPttW2aBeJTpIzTZxu2cP6sfISy3d2MAfDc78DRskIandkAhmgPi60KL3ulTIwhW3+3/LKWVtOj3xXfrm2ABbsE9ou0bjVx+oxQxXBEjhMuqxjgNVueMxOevFudbAA6Se+CAGvcAniUkXtGMii5D8ZXDfJ9U3ui2sMX7ZkeBGoqATCaQaUG4LRSJUbttGYvBMEdzHJ3ln4QoK0EgEM55nxP2tlLuY/ECVKlQQCzqOG+8cP44JPHK+c94nHUKEwpo3XrAHUAkpqMcSC4SQ02oqa6o/mIn6QEgmZIw0apPtbMcWoMXb9MUsTwveMCwbRU8mNhnh8LQKvS6ZnmUlTe7zHPC7JClJUlvff3VTnVANIDwPerGiW3pJR53Lxeb7wXdGdlaMisUXIDfgwqJULjHFR7prkj0xFyI3X/IO8+wkKrvE2Az2XA4paGSohFUxVWfQEfvoEA8MQOlVthIRB4JJUxa9+HRSeAlMYkFqkolJfhSuVw5P6hY5EDagNeMYu1w4kOD7g981NkEJSQTWpJqCkj/GZQDvMVKU8Ch7jfzIjKy5HoihAHd/2cag/ghaijJCVhzCKvSJJKhngazHsb6i2xIAPOTAAQpS9KZZFNijCQ1b77PW7yfMQBQAW50c09DStfghTN6SaxAOWhjtfaG2RTC63yZS69N5FUGm5GpbtpQHBLa6rKfzts6w/nAnl2YAWcydzgSBIq3cUt1/wdR/A3yLUDGy9FFUxtL01prNLPHLBA0DHu17/xfwdng9dgBR4jXQI8RpO9UAEiXewaaj9gAfzHNVrBiIKgDQSvGUCHCD76LwhhERG+99p3A6tRil0h7Y8B4J0I+U1jkhxa7X0XEKtkW3elp1re0Rc4yaL2zHUwqSZklqsjq9fIO0J8ckNEjakei1mKGqZF0IG+9mNUfBFek5s/LW8jkywr82Q+A9rMhCVR9zn2oqRKZZUBn/mQSOhhJl+VVRic5CPBBFQlGriJAPCj8TNdb+R2W2MC+WI/lRA+8hiMIuo1M/gEWWqElpdM0nQlhZcGwN/4FsQEAqLfVPoNiS4QRv2mng5IdEkAP6veV1QGwMkWb9Zlaj5bb4I584tKHRFZDEn7mLfQu1zBL1VP6/+CQRYJOjbhryr/EQrLmMoCRok41qBZu1O8XU5OJwrg916/vy8zk4hT7MQA+MS9e33rBMiv2+VhEY6pI2Ht3755OKngmbiACFmnTifkf6ed5Dq8d2+BeHn8B/8TtWqAk3HpzCxACEbjccHWzEVEtsLreQKaRff2Z9BKeMGCdAWIbbLwI4H1+pNlNbPStIi//wG4RbXgDgcuWAAAAABJRU5ErkJggg==";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "batteryPay",
  __ssrInlineRender: true,
  emits: ["init"],
  setup(__props, { expose: __expose, emit: emits }) {
    const cPaySuccessRef = ref();
    const routing = getRouting();
    const modalShow = ref(false);
    const params = ref({});
    const payUrl = ref("");
    const paymentCode = ref();
    const { proxy: proxy2 } = getCurrentInstance();
    const time = ref(null);
    const loading = ref(false);
    const electricQuantityValue = ref(0);
    clearInterval(time.value);
    const showFn = (record) => {
      clearInterval(time.value);
      payUrl.value = "";
      params.value = record;
      electricQuantityValue.value = record.electricQuantityValue;
      modalShow.value = true;
      proxy2.$api.advancePayment({
        goodsCode: record.code,
        rechargeAmount: record.rechargeAmount ? record.rechargeAmount : 0,
        // goodType:record.goodType ? record.goodType:record.type,
        relatedNum: 1,
        payWay: "WX_NATIVE",
        // title:record.name,
        title: "电量充值"
      }).then((res) => {
        payUrl.value = res.data.orderInfo;
        paymentCode.value = res.data.orderCode;
        time.value = setInterval(() => {
          proxy2.$api.orderQueryOrder({
            code: res.data.orderCode
          }).then((res2) => {
            if (res2.data.orderStatus == "COMPLETED") {
              clearInterval(time.value);
              modalShow.value = false;
              loading.value = false;
              cPaySuccessRef.value.showFn("充值成功", "感谢您充值了" + electricQuantityValue.value + "电量");
              setTimeout(() => {
                emits("init");
              }, 2e3);
            }
          });
        }, 5e3);
      });
    };
    const toConfirm = () => {
      loading.value = true;
      proxy2.$api.orderQueryOrder({
        code: paymentCode.value
      }).then((res) => {
        if (res.data.orderStatus == "COMPLETED") {
          clearInterval(time.value);
          modalShow.value = false;
          loading.value = false;
          cPaySuccessRef.value.showFn("充值成功", "感谢您充值了" + electricQuantityValue.value + "电量");
          routing.getUserPoints(proxy2);
          setTimeout(() => {
            emits("init");
          }, 2e3);
        } else {
          loading.value = false;
          proxy2.$Message.error("支付未完成或支付失败");
        }
      }).catch(() => {
        loading.value = false;
      });
    };
    __expose({
      showFn
    });
    onUnmounted(() => {
      clearInterval(time.value);
    });
    const toClose = () => {
      modalShow.value = false;
    };
    watch(() => modalShow.value, () => {
      if (modalShow.value == false) {
        clearInterval(time.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_Spin = resolveComponent("Spin");
      const _component_Button = resolveComponent("Button");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        size: "large",
        "class-name": "modalMain",
        closable: false,
        "footer-hide": true,
        "mask-closable": false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalMain-top" data-v-93276178${_scopeId}><img${ssrRenderAttr("src", _imports_0)} data-v-93276178${_scopeId}><div class="title" data-v-93276178${_scopeId}><div data-v-93276178${_scopeId}>充值</div><img class="close"${ssrRenderAttr("src", _imports_1)} data-v-93276178${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "modalMain-top" }, [
                createVNode("img", { src: _imports_0 }),
                createVNode("div", { class: "title" }, [
                  createVNode("div", null, "充值"),
                  createVNode("img", {
                    class: "close",
                    onClick: ($event) => modalShow.value = false,
                    src: _imports_1
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalMain-content" data-v-93276178${_scopeId}><div class="modalMain-content-item" data-v-93276178${_scopeId}><div class="item-title" data-v-93276178${_scopeId}>支付方式</div></div><div class="modalMain-content-pay" data-v-93276178${_scopeId}><div class="payQrcode" data-v-93276178${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Spin, {
              fix: "",
              show: payUrl.value ? false : true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`加载中...`);
                } else {
                  return [
                    createTextVNode("加载中...")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(QrcodeVue, {
              value: payUrl.value,
              size: 150,
              level: "H",
              "render-as": "svg"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="payContent" data-v-93276178${_scopeId}><div class="pay1" data-v-93276178${_scopeId}>支付金额： <span data-v-93276178${_scopeId}><span class="price" data-v-93276178${_scopeId}>${ssrInterpolate(params.value.price)}</span><span class="unit" data-v-93276178${_scopeId}>元</span></span></div><div class="pay2" data-v-93276178${_scopeId}><span data-v-93276178${_scopeId}>使用</span><span data-v-93276178${_scopeId}><img class="weixin"${ssrRenderAttr("src", _imports_2)} data-v-93276178${_scopeId}></span><span data-v-93276178${_scopeId}>微信扫码支付</span></div></div></div><div class="modalMain-content-submit" data-v-93276178${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              class: "btn",
              onClick: ($event) => modalShow.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`取消`);
                } else {
                  return [
                    createTextVNode("取消")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              class: "btn2",
              type: "primary",
              onClick: toConfirm,
              loading: loading.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`完成付款`);
                } else {
                  return [
                    createTextVNode("完成付款")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "modalMain-content" }, [
                createVNode("div", { class: "modalMain-content-item" }, [
                  createVNode("div", { class: "item-title" }, "支付方式")
                ]),
                createVNode("div", { class: "modalMain-content-pay" }, [
                  createVNode("div", { class: "payQrcode" }, [
                    createVNode(_component_Spin, {
                      fix: "",
                      show: payUrl.value ? false : true
                    }, {
                      default: withCtx(() => [
                        createTextVNode("加载中...")
                      ]),
                      _: 1
                    }, 8, ["show"]),
                    createVNode(QrcodeVue, {
                      value: payUrl.value,
                      size: 150,
                      level: "H",
                      "render-as": "svg"
                    }, null, 8, ["value"])
                  ]),
                  createVNode("div", { class: "payContent" }, [
                    createVNode("div", { class: "pay1" }, [
                      createTextVNode("支付金额： "),
                      createVNode("span", null, [
                        createVNode("span", { class: "price" }, toDisplayString$1(params.value.price), 1),
                        createVNode("span", { class: "unit" }, "元")
                      ])
                    ]),
                    createVNode("div", { class: "pay2" }, [
                      createVNode("span", null, "使用"),
                      createVNode("span", null, [
                        createVNode("img", {
                          class: "weixin",
                          src: _imports_2
                        })
                      ]),
                      createVNode("span", null, "微信扫码支付")
                    ])
                  ])
                ]),
                createVNode("div", { class: "modalMain-content-submit" }, [
                  createVNode(_component_Button, {
                    class: "btn",
                    onClick: ($event) => modalShow.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("取消")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_Button, {
                    class: "btn2",
                    type: "primary",
                    onClick: toConfirm,
                    loading: loading.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("完成付款")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(__nuxt_component_1, {
        ref_key: "cPaySuccessRef",
        ref: cPaySuccessRef,
        onToClose: toClose
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/batteryPay.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const batteryPay = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-93276178"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { proxy: proxy2 } = getCurrentInstance();
    const routing = getRouting();
    const batteryList = ref([]);
    const minRechargeAmount = ref(0);
    const electriList = ref([]);
    const init = () => {
      let data = {
        goodsType: routing.clientType == "TEAM" ? "TEAM_BATTERY" : "BATTERY"
      };
      proxy2.$api.queryGoodsSkuAndEquityList(data).then((res) => {
        batteryList.value = res.data.queryGoodsSkuAndEquityResVOList;
        minRechargeAmount.value = res.data.minRechargeAmount;
        batteryList.value.forEach((item) => {
          if (item.queryEquityInfoResVOS && item.queryEquityInfoResVOS[0]) {
            item.points = item.queryEquityInfoResVOS[0].equityValue;
            item.giftPoints = Number(item.queryEquityInfoResVOS[0].extent) - Number(item.queryEquityInfoResVOS[0].equityValue);
            item.giftPoints = item.giftPoints.toFixed(0);
          }
        });
      });
      proxy2.$api.queryElectricityUseList().then((res) => {
        electriList.value = res.data;
      });
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cBattery" }, _attrs))} data-v-07dccd23><div class="area" data-v-07dccd23><h3 data-v-07dccd23>电量介绍</h3><p data-v-07dccd23>1.电量是${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}平台为您提供的数字化商品，用于${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}机器人对话、图片生成等服务以及其他增值服务等。</p><p data-v-07dccd23>2.您可以在${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}平台内通过电量充值购买、会员购买等途径获取电量；</p><p data-v-07dccd23>3.在使用${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}的过程中，部分功能及服务需要消耗电量。</p></div><div class="area" data-v-07dccd23><h3 data-v-07dccd23>电量获取方式</h3><p data-v-07dccd23>当前存在服务套餐购买和充电服务两种渠道获取电量：</p><p data-v-07dccd23>1.服务版本：购买${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}会员服务，将获得对应电量赠送；</p><p data-v-07dccd23>2.电量充值： 电量充值是${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}为用户提供的一次性购买一定数额电量的服务。 您可通过${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}平台进行支付购买。</p></div><div class="area" data-v-07dccd23><h3 data-v-07dccd23>电量类型</h3><p data-v-07dccd23>电量区分为服务版本赠送和电量充值，二者区别如下：</p><table data-v-07dccd23><thead data-v-07dccd23><th data-v-07dccd23>电量类型</th><th data-v-07dccd23>电量介绍</th><th data-v-07dccd23>有效期</th><th data-v-07dccd23>使用范围</th></thead><tbody data-v-07dccd23><tr data-v-07dccd23><td data-v-07dccd23>服务版本</td><td data-v-07dccd23>开通会员赠送的福利电量。</td><td data-v-07dccd23>在版本服务履约周期内有效。具体会员履约周期相关细则详情可参考会员常见问题。</td><td data-v-07dccd23>AI机器人、AI应用、AI实验室、知识库等功能下提供的AI生成服务。</td></tr><tr data-v-07dccd23><td data-v-07dccd23>电量充值</td><td data-v-07dccd23>通过付费渠道（如充电服务）购买获得的电量。</td><td data-v-07dccd23>用完截止</td><td data-v-07dccd23>AI机器人、AI应用、AI实验室、知识库等功能下提供的AI生成服务。</td></tr></tbody></table></div><div class="area" data-v-07dccd23><h3 data-v-07dccd23>电量充值标准：</h3><p data-v-07dccd23>我们的价格策略将灵活适应市场变化，以确保我们的模型服务始终与当前成本和市场需求保持一致。因此，我们保留对模型价格进行适时调整的权利。</p><table data-v-07dccd23><thead data-v-07dccd23><th data-v-07dccd23>充值金额</th><th data-v-07dccd23>赠送电量</th><th data-v-07dccd23>到账电量</th><th data-v-07dccd23>区间单价（预计）</th></thead><tbody data-v-07dccd23><!--[-->`);
      ssrRenderList(unref(batteryList), (item, i) => {
        _push(`<tr data-v-07dccd23><td data-v-07dccd23>${ssrInterpolate(item.price)}元</td><td data-v-07dccd23>${ssrInterpolate(item.giftPoints)}点</td><td data-v-07dccd23>到账电量${ssrInterpolate(item.points)}+${ssrInterpolate(item.giftPoints)}点</td><td data-v-07dccd23>`);
        if (unref(batteryList)[i + 1]) {
          _push(`<!--[-->(${ssrInterpolate(unref(batteryList)[i].price)}元-${ssrInterpolate(unref(batteryList)[i + 1].price)}元)<!--]-->`);
        } else {
          _push(`<!--[-->(大于${ssrInterpolate(unref(batteryList)[i].price)}元)<!--]-->`);
        }
        _push(` /${ssrInterpolate(unref(batteryList)[i].countPrice)}元/次对话 </td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div style="${ssrRenderStyle({ "color": "#FF1F1F", "margin-bottom": "20px" })}" data-v-07dccd23>最低充值金额：${ssrInterpolate(unref(minRechargeAmount))}元</div><div class="area" data-v-07dccd23><h3 data-v-07dccd23>电量使用标准</h3><p data-v-07dccd23>电量可用于${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}机器人对话、AI绘画、思维导图等服务等场景。</p><table data-v-07dccd23><thead data-v-07dccd23><th data-v-07dccd23>服务内容</th><th data-v-07dccd23>模型</th><th data-v-07dccd23>功能描述</th><th data-v-07dccd23>消耗电量</th></thead><tbody data-v-07dccd23><!--[-->`);
      ssrRenderList(unref(electriList), (item) => {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(item.modelList, (iten, j) => {
          _push(`<tr data-v-07dccd23>`);
          if (j == 0) {
            _push(`<!--[--><td${ssrRenderAttr("rowspan", item.modelList.length)} data-v-07dccd23>${ssrInterpolate(item.appScene)}</td><td data-v-07dccd23>${ssrInterpolate(iten.serviceContent)}</td><td data-v-07dccd23>${ssrInterpolate(iten.modelDescription)}</td><td data-v-07dccd23>${ssrInterpolate(iten.electricityDesp)}</td><!--]-->`);
          } else {
            _push(`<!--[--><td data-v-07dccd23>${ssrInterpolate(iten.serviceContent)}</td><td data-v-07dccd23>${ssrInterpolate(iten.modelDescription)}</td><td data-v-07dccd23>${ssrInterpolate(iten.electricityDesp)}</td><!--]-->`);
          }
          _push(`</tr>`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]--></tbody></table><div class="area mt-20" data-v-07dccd23><h3 data-v-07dccd23>补充说明：</h3><p data-v-07dccd23>1.用户消耗电量，使用本平台AI功能服务，允许个人和企业使用和合法合规范围内商用用途；</p><p data-v-07dccd23>2.${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}官网的电量将根据外界AI环境和市场变化而调整，不再另行通知；</p><p data-v-07dccd23>3.${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}对电量使用及相关活动规则具有最终解释权；</p></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cBattery/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const cBattery = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-07dccd23"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "topUp",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    useRouter$1();
    const { proxy: proxy2 } = getCurrentInstance();
    const modalShow = ref(false);
    const isShow = ref(false);
    const batteryPayRef = ref();
    const goodsCode = ref("");
    const batteryList = ref([]);
    const num = ref();
    const electricQuantityValue = ref(0);
    const single = ref(false);
    const goodType = ref("");
    const routing = getRouting();
    const minRechargeAmount = ref(0);
    const wxData = ref({
      appId: "",
      timeStamp: "",
      nonceStr: "",
      package: "",
      signType: "",
      paySign: ""
    });
    const time = ref(null);
    const wxmsg = ref("");
    const cPaySuccessRef = ref();
    const showFn = () => {
      num.value = "";
      goodsCode.value = "";
      electricQuantityValue.value = 0;
      single.value = false;
      proxy2.$api.queryGoodsSkuAndEquityList({
        goodsType: routing.clientType == "TEAM" ? "TEAM_BATTERY" : "BATTERY"
      }).then((res) => {
        minRechargeAmount.value = res.data.minRechargeAmount;
        batteryList.value = res.data.queryGoodsSkuAndEquityResVOList;
        handleData();
        if (res.data && res.data[0]) {
          goodsCode.value = res.data[0].code;
          goodType.value = res.data[0].type;
          num.value = res.data[0].price;
          searchElectricity(goodsCode.value);
        }
      });
      if (proxy2.$checkDevice()) {
        if (!routing.hadAuthorizedLogin) {
          let data = {
            redirectUrl: window.location.href,
            channelType: "WECHAT"
          };
          proxy2.$api.getAuthLoginUrl(data).then((res) => {
            window.location.href = res.data.loginCallbackUrl;
          });
        } else {
          modalShow.value = true;
          num.value = "";
          goodsCode.value = "";
          electricQuantityValue.value = 0;
          single.value = false;
          proxy2.$api.queryGoodsSkuAndEquityList({
            goodsType: routing.clientType == "TEAM" ? "TEAM_BATTERY" : "BATTERY"
          }).then((res) => {
            minRechargeAmount.value = res.data.minRechargeAmount;
            batteryList.value = res.data.queryGoodsSkuAndEquityResVOList;
            handleData();
            if (res.data && res.data[0]) {
              goodsCode.value = res.data[0].code;
              goodType.value = res.data[0].type;
              num.value = res.data[0].price;
              searchElectricity(goodsCode.value);
            }
          });
        }
      } else {
        modalShow.value = true;
        num.value = "";
        goodsCode.value = "";
        electricQuantityValue.value = 0;
        single.value = false;
        proxy2.$api.queryGoodsSkuAndEquityList({
          goodsType: routing.clientType == "TEAM" ? "TEAM_BATTERY" : "BATTERY"
        }).then((res) => {
          batteryList.value = res.data.queryGoodsSkuAndEquityResVOList;
          handleData();
          if (res.data && res.data[0]) {
            goodsCode.value = res.data[0].code;
            goodType.value = res.data[0].type;
            num.value = res.data[0].price;
            searchElectricity(goodsCode.value);
          }
        });
      }
    };
    const handleData = () => {
      batteryList.value.forEach((item) => {
        if (item.queryEquityInfoResVOS && item.queryEquityInfoResVOS[0]) {
          item.points = item.queryEquityInfoResVOS[0].equityValue;
          item.giftPoints = Number(item.queryEquityInfoResVOS[0].extent) - Number(item.queryEquityInfoResVOS[0].equityValue);
          item.giftPoints = item.giftPoints.toFixed(0);
        }
      });
    };
    __expose({
      showFn
    });
    const chooseBattery = (record) => {
      goodsCode.value = record.code;
      num.value = record.price;
      goodType.value = record.type;
      searchElectricity(goodsCode.value);
    };
    const topUp = () => {
      if (num.value < Number(minRechargeAmount.value)) {
        return;
      }
      if (batteryList.value == 0) {
        if (proxy2.$isEmpty(num.value)) {
          proxy2.$Message.error("请输入");
          return;
        } else {
          toShow({
            rechargeAmount: num.value,
            code: goodsCode.value,
            name: "充值" + num.value,
            price: num.value
          });
        }
      } else {
        let flag = false;
        batteryList.value.forEach((item, i) => {
          if (item.code == goodsCode.value) {
            toShow(item);
            flag = true;
          }
          if (i == Number(batteryList.value.length - 1)) {
            if (!flag) {
              toShow({
                rechargeAmount: num.value,
                code: goodsCode.value,
                name: "充值" + num.value,
                price: num.value
              });
            }
          }
        });
      }
    };
    const toShow = (record) => {
      if (!single.value) {
        proxy2.$Message.error("请先阅读并同意订购协议");
        return;
      }
      if (proxy2.$checkDevice()) {
        if (proxy2.$isWeixin()) {
          let data = {
            goodsCode: record.code,
            rechargeAmount: record.rechargeAmount ? record.rechargeAmount : 0,
            relatedNum: 1,
            payWay: "WX_JSAPI",
            title: "电量充值"
          };
          proxy2.$api.advancePayment(data).then((res) => {
            onWechatPay(res);
          });
        } else {
          let data = {
            goodsCode: record.code,
            rechargeAmount: record.rechargeAmount ? record.rechargeAmount : 0,
            payWay: "WX_H5",
            relatedNum: 1,
            title: record.name,
            osType: proxy2.$onSystemInfo(),
            redirectUrl: window.location.href
          };
          proxy2.$api.advancePayment(data).then((res) => {
            window.location.href = res.data.orderInfo;
          });
        }
      } else {
        record.goodType = goodType.value;
        record.electricQuantityValue = electricQuantityValue.value;
        batteryPayRef.value.showFn(record);
      }
    };
    const onWechatPay = (res) => {
      var data = JSON.parse(res.data.orderInfo);
      wxData.value.appId = data.appId;
      wxData.value.timeStamp = data.timeStamp;
      wxData.value.nonceStr = data.nonceStr;
      wxData.value.package = data.package;
      wxData.value.paySign = data.paySign;
      wxData.value.signType = data.signType;
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener("WeixinJSBridgeReady", onBridgeReady(), false);
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", onBridgeReady());
          document.attachEvent("onWeixinJSBridgeReady", onBridgeReady());
        } else {
          onBridgeReady();
        }
      } else {
        onBridgeReady();
      }
    };
    const onBridgeReady = () => {
      WeixinJSBridge.invoke("getBrandWCPayRequest", wxData.value, function(res) {
        wxmsg.value = res;
        if (res.err_msg == "get_brand_wcpay_request:ok") {
          cPaySuccessRef.value.showFn("充值成功", "感谢您充值了" + electricQuantityValue.value + "电量");
        } else if (res.err_msg == "stopMonitoringBeacons:ok")
          ;
        else if (res.err_msg == "get_brand_wcpay_request:fail")
          ;
        else if (res.err_msg == "get_brand_wcpay_request:cancel") {
          return;
        } else if (res.err_msg == "get_brand_wcpay_request:fail_invalid appid") {
          return;
        } else {
          return;
        }
      });
    };
    const numberInput = proxy2.$debounce(() => {
      goodsCode.value = "";
      if (batteryList.value.length > 0) {
        batteryList.value.forEach((item, i) => {
          if (item.price == num.value) {
            goodsCode.value = item.code;
          }
          if (i == Number(batteryList.value.length - 1)) {
            searchElectricity("");
          }
        });
      } else {
        searchElectricity("");
      }
    }, 500);
    const searchElectricity = (code2) => {
      if (num.value) {
        proxy2.$api.amountConversionElectric({
          amount: Number(num.value)
        }).then((res) => {
          goodsCode.value = code2 ? code2 : res.data.goodsCode;
          electricQuantityValue.value = res.data.electricQuantityValue;
          goodType.value = res.data.goodsType;
        });
      }
    };
    onUnmounted(() => {
      clearInterval(time.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_cModal = __nuxt_component_0;
      const _component_cPaySuccess = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: modalShow.value,
        "onUpdate:modelValue": ($event) => modalShow.value = $event,
        size: "large",
        modalSlot: "topUps",
        "class-name": "modalMain topUpModal",
        closable: false,
        "footer-hide": true,
        "mask-closable": false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modalMain-top" data-v-5a59c4ba${_scopeId}><img${ssrRenderAttr("src", _imports_0)} data-v-5a59c4ba${_scopeId}><div class="title" data-v-5a59c4ba${_scopeId}><div data-v-5a59c4ba${_scopeId}>充值</div><img class="close"${ssrRenderAttr("src", _imports_1)} data-v-5a59c4ba${_scopeId}></div></div><div class="modalMain-content" data-v-5a59c4ba${_scopeId}><div class="modalMain-content-item" data-v-5a59c4ba${_scopeId}><div class="item-title" data-v-5a59c4ba${_scopeId}>充值金额</div><div class="item-action" data-v-5a59c4ba${_scopeId}><div class="${ssrRenderClass([num.value ? "input-active" : "", "item-input"])}" data-v-5a59c4ba${_scopeId}><input${ssrRenderAttr("value", num.value)}${ssrRenderAttr("placeholder", "请填写充值金额（不低于" + minRechargeAmount.value + "元）")} data-v-5a59c4ba${_scopeId}></div>`);
            if (electricQuantityValue.value > 0 && num.value && minRechargeAmount.value && Number(num.value) >= Number(minRechargeAmount.value)) {
              _push2(`<!--[--><img class="exchange"${ssrRenderAttr("src", _imports_2$1)} data-v-5a59c4ba${_scopeId}><div class="electric" data-v-5a59c4ba${_scopeId}><img${ssrRenderAttr("src", _imports_3)} data-v-5a59c4ba${_scopeId}><div data-v-5a59c4ba${_scopeId}>电量${ssrInterpolate(electricQuantityValue.value)}</div></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="modalMain-content-item" data-v-5a59c4ba${_scopeId}><div class="item-title" data-v-5a59c4ba${_scopeId}>充值套餐</div><div class="set-meal" data-v-5a59c4ba${_scopeId}><!--[-->`);
            ssrRenderList(batteryList.value, (item, i) => {
              _push2(`<div class="${ssrRenderClass([item.code == goodsCode.value ? "item-active" : "", "set-meal-item"])}" data-v-5a59c4ba${_scopeId}><div class="item-price" data-v-5a59c4ba${_scopeId}><div class="unit" data-v-5a59c4ba${_scopeId}>¥</div><div class="num" data-v-5a59c4ba${_scopeId}>${ssrInterpolate(item.price)}</div></div><div class="item-electric" data-v-5a59c4ba${_scopeId}><img${ssrRenderAttr("src", _imports_3)} data-v-5a59c4ba${_scopeId}>`);
              if (!_ctx.$isEmpty(item.queryEquityInfoResVOS)) {
                _push2(`<div class="item-electric-num" data-v-5a59c4ba${_scopeId}>${ssrInterpolate(item.queryEquityInfoResVOS[0].extent)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!_ctx.$isEmpty(item.queryEquityInfoResVOS)) {
                _push2(`<div class="item-electric-original" data-v-5a59c4ba${_scopeId}>${ssrInterpolate(item.queryEquityInfoResVOS[0].equityValue)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="item-desc" data-v-5a59c4ba${_scopeId}><div data-v-5a59c4ba${_scopeId}>${ssrInterpolate(item.description)}</div></div></div>`);
            });
            _push2(`<!--]--></div></div><div class="modalMain-content-desc" data-v-5a59c4ba${_scopeId}><div class="desc-title" data-v-5a59c4ba${_scopeId}>充值电量特别说明：</div><div data-v-5a59c4ba${_scopeId}>1.如对“电量”不理解，请参阅<span data-v-5a59c4ba${_scopeId}><a data-v-5a59c4ba${_scopeId}>“关于电量”</a></span>;</div><div data-v-5a59c4ba${_scopeId}>2.点击“电量充值”，代表您向官网作出了不可撤销的定制要约，表示您阅读并完全遵守<span data-v-5a59c4ba${_scopeId}><a${ssrRenderAttr("href", unref(routing).configuration.userServiceLink)} target="_blank" data-v-5a59c4ba${_scopeId}>《用户服务协议》</a></span>，</div><div data-v-5a59c4ba${_scopeId}><span data-v-5a59c4ba${_scopeId}><a${ssrRenderAttr("href", unref(routing).configuration.privacyPolicy)} target="_blank" data-v-5a59c4ba${_scopeId}>《隐私条款》</a></span>，遵守<span data-v-5a59c4ba${_scopeId}><a${ssrRenderAttr("href", unref(routing).configuration.topUpLink)} target="_blank" data-v-5a59c4ba${_scopeId}>《充值服务协议》</a></span>或套餐<span data-v-5a59c4ba${_scopeId}><a${ssrRenderAttr("href", unref(routing).configuration.subscriptionAgreement)} target="_blank" data-v-5a59c4ba${_scopeId}>《订购协议》</a></span>。</div><div data-v-5a59c4ba${_scopeId}>3.电量计量说明：</div><div class="explain" data-v-5a59c4ba${_scopeId}><span class="point" data-v-5a59c4ba${_scopeId}></span>最低充值金额：<span class="gold" data-v-5a59c4ba${_scopeId}>${ssrInterpolate(minRechargeAmount.value)}元</span></div><!--[-->`);
            ssrRenderList(batteryList.value, (item, i) => {
              _push2(`<div class="explain" data-v-5a59c4ba${_scopeId}><span class="point" data-v-5a59c4ba${_scopeId}></span> 充值金额<span class="gold" data-v-5a59c4ba${_scopeId}>${ssrInterpolate(item.price)}元</span>，到账电量<span class="gold" data-v-5a59c4ba${_scopeId}>${ssrInterpolate(item.points)}+${ssrInterpolate(item.giftPoints)}点</span>； `);
              if (batteryList.value[i + 1]) {
                _push2(`<!--[-->(${ssrInterpolate(batteryList.value[i].price)}元-${ssrInterpolate(batteryList.value[i + 1].price)}元)<!--]-->`);
              } else {
                _push2(`<!--[-->(大于${ssrInterpolate(batteryList.value[i].price)}元)<!--]-->`);
              }
              _push2(` /${ssrInterpolate(batteryList.value[i].countPrice)}元/次对话 </div>`);
            });
            _push2(`<!--]--></div><div class="modalMain-submit" data-v-5a59c4ba${_scopeId}><div class="submit-check" data-v-5a59c4ba${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(single.value) ? ssrLooseContain(single.value, null) : single.value) ? " checked" : ""} class="checkbox" data-v-5a59c4ba${_scopeId}><div data-v-5a59c4ba${_scopeId}>我已阅读并同意</div><a${ssrRenderAttr("href", unref(routing).configuration.userServiceLink)} target="_blank" data-v-5a59c4ba${_scopeId}>《用户服务协议》</a><div data-v-5a59c4ba${_scopeId}>,遵守</div><a${ssrRenderAttr("href", unref(routing).configuration.topUpLink)} target="_blank" data-v-5a59c4ba${_scopeId}>《充值服务协议》</a><div data-v-5a59c4ba${_scopeId}>或套餐</div><a${ssrRenderAttr("href", unref(routing).configuration.subscriptionAgreement)} target="_blank" data-v-5a59c4ba${_scopeId}>《订购协议》</a><div data-v-5a59c4ba${_scopeId}>。</div></div><div class="submit-btn" data-v-5a59c4ba${_scopeId}><div class="${ssrRenderClass([num.value < Number(minRechargeAmount.value) ? "btnDisabled" : "", "btn"])}" data-v-5a59c4ba${_scopeId}>电量充值</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "modalMain-top" }, [
                createVNode("img", { src: _imports_0 }),
                createVNode("div", { class: "title" }, [
                  createVNode("div", null, "充值"),
                  createVNode("img", {
                    class: "close",
                    onClick: ($event) => modalShow.value = false,
                    src: _imports_1
                  }, null, 8, ["onClick"])
                ])
              ]),
              createVNode("div", { class: "modalMain-content" }, [
                createVNode("div", { class: "modalMain-content-item" }, [
                  createVNode("div", { class: "item-title" }, "充值金额"),
                  createVNode("div", { class: "item-action" }, [
                    createVNode("div", {
                      class: ["item-input", num.value ? "input-active" : ""]
                    }, [
                      withDirectives(createVNode("input", {
                        onInput: unref(numberInput),
                        onKeyup: ($event) => num.value = _ctx.$replace(num.value),
                        "onUpdate:modelValue": ($event) => num.value = $event,
                        placeholder: "请填写充值金额（不低于" + minRechargeAmount.value + "元）"
                      }, null, 40, ["onInput", "onKeyup", "onUpdate:modelValue", "placeholder"]), [
                        [vModelText, num.value]
                      ])
                    ], 2),
                    electricQuantityValue.value > 0 && num.value && minRechargeAmount.value && Number(num.value) >= Number(minRechargeAmount.value) ? (openBlock(), createBlock(Fragment$1, { key: 0 }, [
                      createVNode("img", {
                        class: "exchange",
                        src: _imports_2$1
                      }),
                      createVNode("div", { class: "electric" }, [
                        createVNode("img", { src: _imports_3 }),
                        createVNode("div", null, "电量" + toDisplayString$1(electricQuantityValue.value), 1)
                      ])
                    ], 64)) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "modalMain-content-item" }, [
                  createVNode("div", { class: "item-title" }, "充值套餐"),
                  createVNode("div", { class: "set-meal" }, [
                    (openBlock(true), createBlock(Fragment$1, null, renderList(batteryList.value, (item, i) => {
                      return openBlock(), createBlock("div", {
                        class: ["set-meal-item", item.code == goodsCode.value ? "item-active" : ""],
                        key: i,
                        onClick: ($event) => chooseBattery(item)
                      }, [
                        createVNode("div", { class: "item-price" }, [
                          createVNode("div", { class: "unit" }, "¥"),
                          createVNode("div", { class: "num" }, toDisplayString$1(item.price), 1)
                        ]),
                        createVNode("div", { class: "item-electric" }, [
                          createVNode("img", { src: _imports_3 }),
                          !_ctx.$isEmpty(item.queryEquityInfoResVOS) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "item-electric-num"
                          }, toDisplayString$1(item.queryEquityInfoResVOS[0].extent), 1)) : createCommentVNode("", true),
                          !_ctx.$isEmpty(item.queryEquityInfoResVOS) ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "item-electric-original"
                          }, toDisplayString$1(item.queryEquityInfoResVOS[0].equityValue), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "item-desc" }, [
                          createVNode("div", null, toDisplayString$1(item.description), 1)
                        ])
                      ], 10, ["onClick"]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "modalMain-content-desc" }, [
                  createVNode("div", { class: "desc-title" }, "充值电量特别说明："),
                  createVNode("div", null, [
                    createTextVNode("1.如对“电量”不理解，请参阅"),
                    createVNode("span", null, [
                      createVNode("a", {
                        onClick: ($event) => isShow.value = true
                      }, "“关于电量”", 8, ["onClick"])
                    ]),
                    createTextVNode(";")
                  ]),
                  createVNode("div", null, [
                    createTextVNode("2.点击“电量充值”，代表您向官网作出了不可撤销的定制要约，表示您阅读并完全遵守"),
                    createVNode("span", null, [
                      createVNode("a", {
                        href: unref(routing).configuration.userServiceLink,
                        target: "_blank"
                      }, "《用户服务协议》", 8, ["href"])
                    ]),
                    createTextVNode("，")
                  ]),
                  createVNode("div", null, [
                    createVNode("span", null, [
                      createVNode("a", {
                        href: unref(routing).configuration.privacyPolicy,
                        target: "_blank"
                      }, "《隐私条款》", 8, ["href"])
                    ]),
                    createTextVNode("，遵守"),
                    createVNode("span", null, [
                      createVNode("a", {
                        href: unref(routing).configuration.topUpLink,
                        target: "_blank"
                      }, "《充值服务协议》", 8, ["href"])
                    ]),
                    createTextVNode("或套餐"),
                    createVNode("span", null, [
                      createVNode("a", {
                        href: unref(routing).configuration.subscriptionAgreement,
                        target: "_blank"
                      }, "《订购协议》", 8, ["href"])
                    ]),
                    createTextVNode("。")
                  ]),
                  createVNode("div", null, "3.电量计量说明："),
                  createVNode("div", { class: "explain" }, [
                    createVNode("span", { class: "point" }),
                    createTextVNode("最低充值金额："),
                    createVNode("span", { class: "gold" }, toDisplayString$1(minRechargeAmount.value) + "元", 1)
                  ]),
                  (openBlock(true), createBlock(Fragment$1, null, renderList(batteryList.value, (item, i) => {
                    return openBlock(), createBlock("div", {
                      class: "explain",
                      key: i
                    }, [
                      createVNode("span", { class: "point" }),
                      createTextVNode(" 充值金额"),
                      createVNode("span", { class: "gold" }, toDisplayString$1(item.price) + "元", 1),
                      createTextVNode("，到账电量"),
                      createVNode("span", { class: "gold" }, toDisplayString$1(item.points) + "+" + toDisplayString$1(item.giftPoints) + "点", 1),
                      createTextVNode("； "),
                      batteryList.value[i + 1] ? (openBlock(), createBlock(Fragment$1, { key: 0 }, [
                        createTextVNode("(" + toDisplayString$1(batteryList.value[i].price) + "元-" + toDisplayString$1(batteryList.value[i + 1].price) + "元)", 1)
                      ], 64)) : (openBlock(), createBlock(Fragment$1, { key: 1 }, [
                        createTextVNode("(大于" + toDisplayString$1(batteryList.value[i].price) + "元)", 1)
                      ], 64)),
                      createTextVNode(" /" + toDisplayString$1(batteryList.value[i].countPrice) + "元/次对话 ", 1)
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "modalMain-submit" }, [
                  createVNode("div", { class: "submit-check" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": ($event) => single.value = $event,
                      class: "checkbox"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, single.value]
                    ]),
                    createVNode("div", null, "我已阅读并同意"),
                    createVNode("a", {
                      href: unref(routing).configuration.userServiceLink,
                      target: "_blank"
                    }, "《用户服务协议》", 8, ["href"]),
                    createVNode("div", null, ",遵守"),
                    createVNode("a", {
                      href: unref(routing).configuration.topUpLink,
                      target: "_blank"
                    }, "《充值服务协议》", 8, ["href"]),
                    createVNode("div", null, "或套餐"),
                    createVNode("a", {
                      href: unref(routing).configuration.subscriptionAgreement,
                      target: "_blank"
                    }, "《订购协议》", 8, ["href"]),
                    createVNode("div", null, "。")
                  ]),
                  createVNode("div", { class: "submit-btn" }, [
                    createVNode("div", {
                      class: ["btn", num.value < Number(minRechargeAmount.value) ? "btnDisabled" : ""],
                      onClick: topUp
                    }, "电量充值", 2)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(batteryPay, {
        ref_key: "batteryPayRef",
        ref: batteryPayRef,
        onInit: ($event) => modalShow.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_component_cModal, {
        modelValue: isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event,
        "footer-hide": true,
        scrollable: true,
        "mask-closable": false,
        modalWidth: 788
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-title" data-v-5a59c4ba${_scopeId}>电量说明</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-title" }, "电量说明")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (modalShow.value) {
              _push2(ssrRenderComponent(cBattery, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              modalShow.value ? (openBlock(), createBlock(cBattery, { key: 0 })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_cPaySuccess, {
        ref_key: "cPaySuccessRef",
        ref: cPaySuccessRef
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/topUp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5a59c4ba"]]);
const titleList = [
  {
    titleCn: "登录",
    titleEn: "登录",
    url: "/login",
    keywords: "",
    description: ""
  },
  {
    titleCn: "注册",
    titleEn: "注册",
    url: "/login/register",
    keywords: "",
    description: ""
  },
  {
    titleCn: "忘记密码",
    titleEn: "忘记密码",
    url: "/login/forget",
    keywords: "",
    description: ""
  },
  {
    titleCn: "隐私政策",
    titleEn: "隐私政策",
    url: "/login/privacy",
    keywords: "",
    description: ""
  },
  {
    titleCn: "用户协议",
    titleEn: "用户协议",
    url: "/login/userAgreement",
    keywords: "",
    description: ""
  },
  {
    titleCn: "开通会员",
    titleEn: "开通会员",
    url: "/member",
    keywords: "",
    description: ""
  },
  {
    titleCn: "企业/团队管理",
    titleEn: "企业/团队管理",
    url: "/manage/team",
    keywords: "",
    description: ""
  },
  {
    titleCn: "账号管理",
    titleEn: "账号管理",
    url: "/manage/account",
    keywords: "",
    description: ""
  },
  {
    titleCn: "点石科技爱晚亭AI企业服务|企业知识库、人工智能，AIGC，chatgpt大模型应用",
    titleEn: "点石科技爱晚亭AI企业服务|企业知识库、人工智能，AIGC，chatgpt大模型应用",
    url: "/",
    keywords: "企业知识库，机器人，人工智能，Ai应用，chatgpt大模型,智能客服，智慧营销，智能HR，AiGC",
    description: "爱晚亭AI应用平台，致力做全球领先的Aⅰ智能服务商，为企业提供AI智能应用+数字营销的综合解决方案，如Ai助手、智能客服、智慧营销等，赋能企业快速使用各AI应用解决生产、生活的问题，实现企业降本增效赚钱省钱。"
  },
  {
    titleCn: "AI创作",
    titleEn: "AI创作",
    url: "/robot/creative",
    keywords: "",
    description: ""
  },
  {
    titleCn: "知识库",
    titleEn: "知识库",
    url: "/knowledge",
    keywords: "",
    description: ""
  },
  {
    titleCn: "AI应用",
    titleEn: "AI应用",
    url: "/app",
    keywords: "",
    description: ""
  },
  {
    titleCn: "全部用户",
    titleEn: "全部用户",
    url: "/app/member/allUser",
    keywords: "",
    description: ""
  },
  {
    titleCn: "权益中心",
    titleEn: "权益中心",
    url: "/equity",
    keywords: "",
    description: ""
  },
  {
    titleCn: "AI对话",
    titleEn: "AI对话",
    url: "/ai/chat",
    keywords: "",
    description: ""
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const { proxy: proxy2 } = getCurrentInstance();
    ref(true);
    const routers = useRouter();
    const routing = getRouting();
    const topUpRef = ref();
    const enHostList = ref(["en.chatdzq.com", "global.chatdzq.com", "global.zhygpt.net"]);
    let source2 = "";
    let headers = useRequestHeaders();
    {
      source2 = headers == null ? void 0 : headers.host;
    }
    if (enHostList.value.indexOf(source2) != -1) {
      locale.value = "en";
    } else {
      locale.value = "zh";
    }
    const changeTitle = () => {
      let metaView = "";
      var os = function() {
        var ua = "", isWindowsPhone = /(?:Windows Phone)/.test(ua), isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone, isAndroid = /(?:Android)/.test(ua), isFireFox = /(?:Firefox)/.test(ua), isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua), isPhone = /(?:iPhone)/.test(ua) && !isTablet, isPc = !isPhone && !isAndroid && !isSymbian;
        return {
          isTablet,
          isPhone,
          isAndroid,
          isPc
        };
      }();
      if (os.isAndroid || os.isPhone) {
        if (window.screen.width > 600) {
          metaView = "width=device-width, user-scalable=yes, initial-scale=0.6, maxmum-scale=0.7, minimum-scale=0.6";
        } else {
          metaView = "width=device-width, user-scalable=yes, initial-scale=0.3, maxmum-scale=1.0, minimum-scale=0.3";
        }
      } else if (os.isTablet) {
        metaView = "width=device-width, user-scalable=yes, initial-scale=0.6, maxmum-scale=0.7, minimum-scale=0.6";
      } else if (os.isPc) {
        metaView = "width=device-width, user-scalable=yes, initial-scale=1.0, maxmum-scale=1.0, minimum-scale=1.0";
      }
      useHead({
        title: routing.configuration.companyShortNameEn,
        meta: [
          { hid: "keywords", name: "keywords", content: "企业知识库，机器人，人工智能，Ai应用，chatgpt大模型,智能客服，智慧营销，智能HR，AiGC" },
          { hid: "description", name: "description", content: routing.configuration.companyShortName + "AI应用平台，致力做全球领先的Aⅰ智能服务商，为企业提供AI智能应用+数字营销的综合解决方案，如Ai助手、智能客服、智慧营销等，赋能企业快速使用各AI应用解决生产、生活的问题，实现企业降本增效赚钱省钱。" },
          {
            name: "viewport",
            content: metaView
          }
        ]
      });
      if (routers.currentRoute.value.path.indexOf("/share") > -1) {
        useHead({
          title: routing.configuration.companyShortNameEn,
          meta: [
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            }
          ]
        });
        return;
      }
      titleList.forEach((item) => {
        if (item.url === routers.currentRoute.value.path) {
          useHead({
            title: item.titleCn,
            meta: [
              { hid: "keywords", name: "keywords", content: item.keywords },
              { hid: "description", name: "description", content: item.description },
              {
                name: "viewport",
                content: metaView
              }
            ]
          });
        }
      });
      routing.setIsLoad(false);
      routing.abortReadingStream();
      routing.resetStream();
    };
    const versionCheck = async () => {
      proxy2.$versionCheck();
      if (useCookie("authtoken").value && useCookie("authtoken").value.loginCode) {
        routing.getUserPoints2(proxy2);
      }
    };
    const init = () => {
      versionCheck();
      getTopNav();
    };
    const getTopNav = () => {
      routing.setTopNavList(proxy2);
      routing.setIsChatLoad(false);
    };
    init();
    watch(() => routing.isRecharge, (newValue) => {
      if (newValue) {
        topUpRef.value.showFn();
      }
    }, { immediate: true });
    watch(() => routers.currentRoute.value.path, (newValue) => {
      changeTitle();
      versionCheck();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtPage = __nuxt_component_1$2;
      const _component_topUp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(locale) == "en" ? "page-en" : ""
      }, _attrs))} data-v-70d9fe97>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-70d9fe97${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_NuxtPage)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_topUp, {
        ref_key: "topUpRef",
        ref: topUpRef
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-70d9fe97"]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component-58dd6dbd.mjs').then((r) => r.default || r));
    const IslandRendererer = defineAsyncComponent(() => import('./_nuxt/island-renderer-71ec2140.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRendererer), { context: unref(islandContext) }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { __nuxt_component_1$1 as _, _export_sfc as a, useCookie as b, createError as c, __nuxt_component_0 as d, entry$1 as default, useRuntimeConfig as e, useI18n as f, getRouting as g, __nuxt_component_2 as h, __nuxt_component_0$2 as i, defineStore as j, useRequestHeaders as k, _imports_1 as l, __nuxt_component_1$2 as m, useHead as n, routeDictionary as r, useRouter as u };
//# sourceMappingURL=server.mjs.map

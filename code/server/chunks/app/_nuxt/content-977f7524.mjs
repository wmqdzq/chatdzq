import { a as _export_sfc, g as getRouting, e as useRuntimeConfig } from '../server.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, toRefs, watch, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import mk from '@iktakahiro/markdown-it-katex';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "content",
  __ssrInlineRender: true,
  props: {
    content: { default: "" },
    isShowTagView: { type: Boolean, default: true },
    showTagView: { default: "" },
    isLoad: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const routing = getRouting();
    ref();
    const previewState = ref(false);
    const urlList = ref("");
    getCurrentInstance();
    const { content, isShowTagView, showTagView, isLoad } = toRefs(props);
    useRuntimeConfig();
    ref(false);
    const msg = ref("");
    let md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      breaks: true,
      highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return `<div class="codeArea"><div class="codeHead"><span class="code-name">${lang}</span><div class="copy-icon" onclick=onCopy("${encodeURIComponent(
              str
            )}")></div></div><pre><code class="language-${lang} hljs">` + hljs.highlight(str, { language: lang, ignoreIllegals: true }).value + "</code></pre></div>";
          } catch (__) {
          }
        }
        return '<pre><code class="language-none hljs">' + md.utils.escapeHtml(str) + "</code></pre>";
      }
    }).use(mk);
    async function loadMarkdownItMermaid() {
      try {
        const module = await import('../../index.mjs');
        const markdownItMermaid = module.default;
        md.use(markdownItMermaid).use(function(md2) {
          const defaultRender = md2.renderer.rules.fence || function(tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
          };
          md2.renderer.rules.fence = function(tokens, idx, options, env, self) {
            const token = tokens[idx];
            if (token.info === "mermaid") {
              console.log(tokens);
              const uniqueId = `chatMermaid-${( new Date()).getTime()}`;
              return `
            <div class="chatMermaidCom">
				<div id="${uniqueId}">
              		${defaultRender(tokens, idx, options, env, self)}
				</div>
              <div class="btn-group">
                <button class="copy-btn" onclick=onCopy("${encodeURIComponent(
                token.content
              )}") >\u590D\u5236</button>
                 <button class="download-btn" onclick=uploadImg("${uniqueId}","preview")>\u9884\u89C8</button>
                <button class="download-btn" onclick=uploadImg("${uniqueId}")>\u4E0B\u8F7D</button>
              </div>
            </div>
          `;
            }
            return defaultRender(tokens, idx, options, env, self);
          };
        });
        msg.value = md.render(
          content.value + (isLoad.value && routing.isLoad ? '<span class="circle"></span>' : "")
        );
      } catch (error) {
        console.error("Failed to load markdownItMermaid plugin:", error);
      }
    }
    loadMarkdownItMermaid();
    watch(
      () => content.value,
      (item) => {
        setTimeout(() => {
          msg.value = md.render(
            item + (isLoad.value && routing.isLoad ? '<span class="circle"></span>' : "")
          );
        }, 10);
      },
      { deep: true, immediate: true }
    );
    watch(
      () => routing.isLoad,
      (item) => {
        if (!item) {
          setTimeout(() => {
            msg.value = md.render(content.value);
          }, 10);
        }
      },
      { deep: true, immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImagePreview = resolveComponent("ImagePreview");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-content" }, _attrs))} data-v-ca3f2474><div data-v-ca3f2474>${msg.value}</div>`);
      _push(ssrRenderComponent(_component_ImagePreview, {
        modelValue: previewState.value,
        "onUpdate:modelValue": ($event) => previewState.value = $event,
        "preview-list": urlList.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cChat/content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contentCom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca3f2474"]]);

export { contentCom as c };
//# sourceMappingURL=content-977f7524.mjs.map

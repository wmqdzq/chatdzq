import { b as buildAssetsURL } from '../../paths.mjs';
import { ref, resolveComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './footer-logo-0e992e13.mjs';
import { s as service } from './index-3a8d75d8.mjs';
import { a as _export_sfc, g as getRouting } from '../server.mjs';

const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "" + buildAssetsURL("footer_pic1.fa68149b.png");
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEbklEQVRYR72ZT2hcRRzHv/NCdvfm7qnVQ5vkUKjSmBh6KCo2Yg6VFGyhJwW7FXayEUyTS6QH3fZQ9KBue9iXt5SmosVDD0EI9GAhEQWhEDa1iAch2XporAf35dTtJpmR32Pf8vb9nbfZ7sBj4b3fzHzmO/P7zcxvGTosuq6fZIy9yhg7CWAEQLr5UIsmY6wqpawKIR4AWM3n86uddMXiVFpcXEzv7u7OCCEuOmBUm6gyxlb39vYu5/P5qmolJUACazQanwMgsH0XxtgtVdBIwHK5PCOlLHSgWNRASMUC5/zbMMNQQMMwvumWaiEQRc75bNB3X0Ca0p2dnSUpJTnAcy+MsfX+/v7xbDZrujvzBSyXyxUpJXlmzwo5UC6XG48E7NG0Bg3cM91tCuq6fl7TtMX9yHZv5RfQY5exkWGcOzsZp8lZznnRrtAC1HV9QNO0FQADcVpz27oBhwYOIXfhgzhNmolEYtBej07AW5qmfRinJT9bNyDZzM9OI5OhjUa5tKbaAmyqt6lcPcTQD7ADFZFIJDKkog3YFfWI2w+Q3o+NHMPpdyeQSqWUdBBC0JZYsAANwyD19rX27F6DAOl7Jv0CXjl6BEMDh/Hy0SNRoCbnPMPoVNJ0jqgKSt/DAJ0NfHHlUmR7QohxAixomkYHga6UbgICmGWGYSwBeK8Tunq9jv9q26Bfmj7yVE8cHB1GrbaNjeqjti5UFJRS/kiAleaBU5nx8dYTLN/9CRvVv1t1zp2ZxNjosAfwnfE3Qc/G5iOsrT/E1tYTPK0/w/zctEp/VQKsxTlK/frbfSzfvedpPApQhcbHxiRAqVp5rfI77iwt+5o/J0AoA9ZME+Wbt1Ezt3sOqDTFfuq9ceK4tb4o+JKj0K/bSew1qDpLLjtripWCdPnm921OEXRK6TLgunKYKVz9CvX6s9YAP5n+CC8dPOARppuAVpgplUoX+/r66O4RWj797Grb98KlOd99tZuAtB8rb3VuBXPZ9zE0eNgzqO9+uIM//vyr9f70qQm8fuJ41Ph9v1tbHX1RiYXuNeh3hCJP//LrUltnQQNRIK5yzgft41bkfuznxS8ePIAJy4uTlgNREHeuU9r+5uc+VmDxmtDlPpfLZS3AZuaAwk1ouV66gcf//Btl5tn+lCs4DIUQg5QiaR35FxYWioyxmbDGKEhfK91oUynInmLk5KmJTthgq0eVW4BNFSkmhl4eCJLWY9COQo3uBw7AphDibTvB1HbtNAyDkkORIYcgaE2uVR62jlGZdBrkOGOjx3y9O4aU5535Gk9mQWWqY3QWy1RKWZyammrL0wSlPlZ6lZdxjKDCOX/NPaLA5FGj0aBLfE/yM1LKlWQyeVY5eWSPogfTLaWU19zT6lQxMoHZzNfQpaor11JH5xR3rzjzMH4LNhKQKlHmgbKh3UiNALBUSyaTl/2mVGkNBrmeA/StGIraVwpTCHE9lUoVVcBsBiUF/YDpwg/A/iuCFKbHDvI1KSVlS9cB/CylfNDp3xD/A5YPJA1sNp3gAAAAAElFTkSuQmCC";
const _imports_4 = "" + buildAssetsURL("footer_pic2.f0d5697a.png");
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAD4klEQVRYR9VYTVLbMBTWk42HYUVvACdoOEHhBA0ngGyseFU4AXACYAHG2YScoPQEpCcoPUHdEzRLhoylzueRGceWZTkJdKqZbKL3pM9P7+d7j9gSazwebz8/P/eJqMc5/6iU2mGM4VesGRGlSin8pkqpn1EUTZe4ilEXpTiO9z3PO1NK7XfR07IpEU2zLLuIoih11XcCuCKwGhYiuncFagWIp3x5eRkzxvquX9xBbsYYuxBCXNl0GgHGcbzDOX+s+FaH+51FH4IgGAwGAwCuW9v0583NTc/3fYDbdr5mNcFUSnlg8s2aBbXlfrwjuOLT0iAI9qqWXAD4js9qtDeiPAzDg/JmFeA95/yoqq2UuoaylLJv2u/yujovTjjncJ/Lqq6UEmnovPj/FWAcx8ecc0RsbQVB8KEwPazMGDuvAkVSXvhyonLixtaDlPK07GdJkvwxuRIR7YVh+ASlV4BJkvxqiNhUCLFbRQ2gRPQ5y7LvW1tbqSkKEWyc8x5jLDVVkiRJ4OvYX1jlp84B2qyHw00Auzxrk+xoNHpsqko6qqc5QJvgvwIIlxBCHJKOXDxv4yr74DosV5zR5IN6fxYEwS4lSYIy9rXpYtTNMAwH6wRWnBXHMYLtrOlspVSf7u7urojoS4NQY4ZfF2Cbe+XpzSbwltYrPXPjCyKa8cRN6YVJKQdRFN2vy1qmc1piIAVA1QTgPQDibhuG/xsgY+y0jVCu+vyj0ainlEJFMS6rDyKKhsPhyaogbPpoJzQxNonNANBYD7X0m5W5Ui40Mii9/4RKYhNAJIPpLtUytlm+jX8qpb7R7e3tied5NV5WOtzIdNsud9lPkgT32lzoFIna6qS4iIiesiw77NLP2gDqbhElzurf4IU5m6kma923/taktCCeeePNGLsuyKSLlcoyeFLf94+klMcO3WLu/wUfrBbtnP16nredZdmJgeZjtAHGm9oacFhqPp9fKqVA7zGNcO4SC+qfA9QmR8krH5ATBYBE72Aili61uo2xWKrYLlyq3JPUqA8AzOfzaxzi+z4o2UKf4RLhLnyzCrL84a8AtRWRExdAwFGzLMst63ke/Af7mAJMh8NhDr5ttRDTqvoCxau2nbWsXnyN/oB8qqVHaztCiIc2cKYgbNE5FkJMCpnaZMFEYLtMo0yX2yhdWd5UWo3DI0t1KaKXYWjp2u25AERWCMNwr+aPTeZuK4HQE0I4zRfbAALcxsbGgam3tl7QliLWAVBKOdnc3DzpNH6rZH+MRFCWqqOMVS242gCzWqJM85hlLdgl6Jx8qABbGhx90j5Ym9mYfFp3jiAlE6XUVRfS8RewVkQ8Xh2O5gAAAABJRU5ErkJggg==";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const routing = getRouting();
    const serviceRef = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tooltip = resolveComponent("Tooltip");
      if (unref(routing).configuration.bottomNavigationBar) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-81766b04><div class="footerMain" data-v-81766b04><div class="footer-conetnt" data-v-81766b04><div class="footer-conetnt-main" data-v-81766b04>`);
        if (!_ctx.$isEmpty(unref(routing).configuration.companyContactInformation)) {
          _push(`<div class="footer-conetnt-main-left" data-v-81766b04><img${ssrRenderAttr("src", _imports_0)} data-v-81766b04><!--[-->`);
          ssrRenderList(unref(routing).configuration.companyContactInformation.split("\n"), (item, index) => {
            _push(`<div class="footer-conetnt-main-left-item" data-v-81766b04>${ssrInterpolate(item)}</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="footer-conetnt-main-right" data-v-81766b04><div class="footer-conetnt-main-right-item" data-v-81766b04><div class="footer-conetnt-main-right-item-title" data-v-81766b04>\u4EA7\u54C1\u670D\u52A1&amp;\u652F\u6301</div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a${ssrRenderAttr("href", unref(routing).configuration.productIntroductionLink)} target="_blank" data-v-81766b04>\u4EA7\u54C1\u4ECB\u7ECD</a></div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a${ssrRenderAttr("href", unref(routing).configuration.videoIntroductionlLink)} target="_blank" data-v-81766b04>\u89C6\u9891\u4ECB\u7ECD</a></div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a${ssrRenderAttr("href", unref(routing).configuration.questionsLink)} data-v-81766b04> \u5E38\u89C1\u95EE\u7B54 </a></div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a${ssrRenderAttr("href", unref(routing).configuration.feedbackLink)} data-v-81766b04> \u610F\u89C1\u53CD\u9988 </a></div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a${ssrRenderAttr("href", unref(routing).configuration.privacyPolicy)} data-v-81766b04> \u9690\u79C1\u653F\u7B56 </a></div></div><div class="footer-conetnt-main-right-item" data-v-81766b04><div class="footer-conetnt-main-right-item-title" data-v-81766b04>\u6280\u672F\u652F\u6301</div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a href="./doc.html" data-v-81766b04> API\u6587\u6863 </a></div></div><div class="footer-conetnt-main-right-item" data-v-81766b04><div class="footer-conetnt-main-right-item-title" data-v-81766b04>\u5173\u4E8E${ssrInterpolate(unref(routing).configuration.companyShortNameEn)}</div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a${ssrRenderAttr("href", unref(routing).configuration.aboutUsLink)} data-v-81766b04> \u5173\u4E8E\u6211\u4EEC </a></div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a href="/news" target="_blank" data-v-81766b04>\u65B0\u95FB\u4E2D\u5FC3</a></div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04>\u5728\u7EBF\u54A8\u8BE2</div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a href="/about" target="_blank" data-v-81766b04>\u52A0\u5165\u6211\u4EEC</a></div></div><div class="footer-conetnt-main-right-item" data-v-81766b04><div class="footer-conetnt-main-right-item-title" data-v-81766b04>\u53CB\u60C5\u94FE\u63A5</div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a href="https://dzq.com/" target="_blank" data-v-81766b04>\u70B9\u77F3\u79D1\u6280</a></div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><a href="https://www.gsccdiribo.com/" target="_blank" data-v-81766b04>\u5FB7\u878D\u5B9D\u4F20\u611F\u5668\u79D1\u6280 (\u6DF1\u5733)\u6709\u9650\u516C\u53F8</a></div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04>\u667A\u6167\u733F(\u7F8E\u5BB9\u7F8E\u4E1A)</div></div><div class="footer-conetnt-main-right-item" data-v-81766b04><div class="footer-conetnt-main-right-item-title" data-v-81766b04>\u5173\u6CE8\u793E\u4EA4\u5A92\u4F53</div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04>\u5173\u6CE8\u516C\u4F17\u53F7\uFF0C\u4E86\u89E3\u66F4\u591A\u8D44\u8BAF</div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><img class="code"${ssrRenderAttr("src", unref(routing).configuration.wechatQrPic)} alt="" data-v-81766b04></div><div class="footer-conetnt-main-right-item-tag" data-v-81766b04><ul data-v-81766b04><li data-v-81766b04>`);
        _push(ssrRenderComponent(_component_Tooltip, null, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="w-100"${ssrRenderAttr("src", _imports_2)} alt="" data-v-81766b04${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-100",
                  src: _imports_2,
                  alt: ""
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-81766b04${_scopeId}><p data-v-81766b04${_scopeId}>\u89C6\u9891\u53F7</p>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                }),
                createVNode("p", null, "\u89C6\u9891\u53F7")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-81766b04>`);
        _push(ssrRenderComponent(_component_Tooltip, null, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="w-100"${ssrRenderAttr("src", _imports_4)} alt="" data-v-81766b04${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-100",
                  src: _imports_4,
                  alt: ""
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="" data-v-81766b04${_scopeId}><p data-v-81766b04${_scopeId}>\u6296\u97F3\u53F7</p>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_3,
                  alt: ""
                }),
                createVNode("p", null, "\u6296\u97F3\u53F7")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-81766b04><a href="https://github.com/samdzq/Chatdzq" target="_blank" data-v-81766b04><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-81766b04><p data-v-81766b04>Github</p></a></li></ul></div></div></div></div><div class="footer-bottom" data-v-81766b04><div class="bottom-content" data-v-81766b04><div class="content-item" data-v-81766b04><span data-v-81766b04>${ssrInterpolate(unref(routing).configuration.copyRight)} \u7248\u6743\u6240\u6709\u7ECF\u8425\u8BB8\u53EF\u8BC1\uFF1A </span><span class="item-html1" data-v-81766b04>${unref(routing).configuration.recordNumber}</span></div></div></div></div></div>`);
        _push(ssrRenderComponent(service, {
          ref_key: "serviceRef",
          ref: serviceRef
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81766b04"]]);

export { Footer as F };
//# sourceMappingURL=index-db8f7f5c.mjs.map

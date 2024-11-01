import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1$1 } from '../server.mjs';
import { _ as __nuxt_component_1$1 } from './ossUploader-2d65ed0f.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, toRefs, watch, resolveComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, withModifiers, createCommentVNode, Fragment, createTextVNode, renderList, toDisplayString, renderSlot, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1 } from './robot-20021510.mjs';
import { useRouter } from 'vue-router';
import { _ as __nuxt_component_1 } from './previewImg-8e12aab7.mjs';
import { _ as __nuxt_component_2 } from './cCreate-9b81dba0.mjs';
import { c as contentCom } from './content-977f7524.mjs';
import { _ as _imports_1$1 } from './avatar-8802d9a1.mjs';
import { b as barrageCom, Q as Quote } from './barrage-e0763a91.mjs';
import ipkg from 'view-ui-plus';
import { i as inputCom } from './template-e578487a.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'cookie-es';
import 'ohash';
import '@intlify/message-compiler';
import 'axios';
import 'crypto-js';
import 'pinia-plugin-persistedstate';
import 'vant';
import 'defu';
import 'qrcode.vue';
import '../../nitro/config.mjs';
import 'scule';
import './upload-5a19747f.mjs';
import './svga-ebe3b6cb.mjs';
import './loding-9ec1fb58.mjs';
import '../../paths.mjs';
import './ossUploaderNew-da7960a9.mjs';
import '@aws-sdk/client-s3';
import './addBase-d16bc2bd.mjs';
import './close-5dffb58a.mjs';
import './curriculum-88d76de0.mjs';
import './unit-93a23101.mjs';
import 'markdown-it';
import 'highlight.js';
import '@iktakahiro/markdown-it-katex';
import './createLoading-9278cbec.mjs';
import './close3-d080d282.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACo0lEQVRoQ+1ZPYgTQRT+3hIkSWW3M2nUzkLBxv4EQcFCrRQUtBELi+yBwokHF8EDxQNzYGHhIYKCVipYnIVoK1gIFloInnBkJsEihWCES56sl0iSyy6zm8yGwGyzEN6b9/28mczOEGb8oRnHD0dg2g46B2bBgVypVDrBzAeYOZcVYM/zPtVqtTcAWnE1Y1tISrkHwDqA/VkBH6qzAWBOKfUjqn4cgbyU8guAvVMC3yv7VSl1EMDWKByRBHzfP+l53sswiZl/AXgAIHxbf4goDyAAEL7R6XRO1ev1V4kICCGWiKjSTbqtlLpuHXlfASHEXSK62v1pUSm1nJoAM1e01jczJvBfwLj6kS3U74AjkMI6UwGdAynENUpxDpgqYCRniiDT+m4OpBDXKMU5YKqAkZwpgkzruzmQQlyjFOeAqQJGcqYIMq2f7RyofM9jt3gE8BxAiwgKa1HcpJTnADzpflBd1Fo/nu73wDb4FwCO/wPC/BHzxcNx5gghLhDRllLqaVRcNg4Mg99msICgeCdFdw2k2CcwCjyhgnJhIl94dglYBh9aYY/AKPDMP0H0OmHbbKKpl1HZN/KAyx6Be60rIL6fEOzocKIA5fxqtqtQ9c8ZoPNsIgTAZxEUn2dLIKy2+nsJjN7ZUrjyNAFvAcSx551DQDdRLryd3jK6gwTW0dSno3o6qWP25kA/EoskIglIKW8AuNX9K1/RWl9Lqs5A/DAJxkPMFy6NNWbcMtp/uNs9o68yJ+rdjR37l0ES7xEUjlgjACAnpfw8zt1Au90+32g0Bvcx1dZlMI6CvBUEuz7YJAAhRHg38I6IUt0RMHPkLnJc4L18k0u+vO/7x4joUJKiRPQtbheZZKy4WBMCk6plZRxHwIqsCQZ1DiQQy0rozDvwFzG+BU+Zb+EYAAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFC0lEQVRYR8WXcYhUVRTGf+fN7O5721YrWK6woIJCgtD+YaC0oaGSkZKRkn8IGQQaWPvGBBMURzLU2tiZ2kBByMhIUMjASElQaReCFhQqCjQ0EJwFYSdc9s24O+/EvW92dmd3Zpkxsvvvu/ee755zvu98T/iflzxQ/CMj7TTFnoUC4F3Gl8EHugeoD0BS4zyePwTqI8SLQXNAN1n3AEkZqxdIfQBSwZfAFpQbIClEc6A7QDqAE/jeG/8dgFRuG+hRoI/svRdJPjlsgyVvurS2fQOsRdhKl/dFPSBqy0DPUCvS9DtIC3ldzO7m22VB7Hf3F9AWNL+AxKxsrSCmAzB1bs2vgrADnDZ7kdKO6EaEJF3egYqXp0e6UEmBngXnVnRO7+LwE0OZfpILTK9MW+UAUrkXQI8D7VVfYOovnMGJnYJwGNUtqG4o9kGVY5pBnTdJuN9N3TAB4JNgBQUuIjoM0svY6AUczUBsIU7se5SLwC2E1cD8YmbGIjZoFuQ8YDK2EtVNIAMURttpaFiFqo9KC8RXkmjonwxiAkAq+BFYihaWk2i5VtqUznWhmkJlHY7ECcNuhIWAaUJDRRf0GhJLEuoYoudAduG7H5fu+OjeEuLxqwh9+N7zlQH0BKOIDuA3Ly9vsNxpW3/T/dBpAwvdhLk0ow0ujfHdoNsjIFwuZuAMieZN5fcEPyB04ntetQwE9iVTAaRGrk6q70nyumc6C4L5CIeAzcXS3CDhLSoDEGW4A997tHoJlGWQe8LSyLIh9z7wHlRvovIg+Veh0IvKbBwOlhgT0fQOMIDvPVcFQFFoDNWGMkdonXMaZF1x82F8b09N3E4FnwNbo716juzgJmbN3Wb7SMSny01XBhAp2nVgtkUa1fsP4KkZ+T8VVSrXY2fF+FnDHlN7uEs2s2iqHpTrQE/upaiL7TpPGO7DcX6uD0BgyraXwv3lxBr3W4k2S5wNdDV9W10HzJd0/mU0PFtKX6gH6gaQDvajJAnDZ3AcAyYCYGg8oxBNLoHSVxScX4ElwEF8b19tPVAqwfhZQ82lVqyygzOUYFxwTKMM3TlG65yvQTZEQaUX3327RgCfRiO6WMZs5hVmte22WVHZQcL9rDoNrRLm5pammUlnyF5EMziyhXe8KzOCsD0UngRptf4gm3nLNt0EDa/he2VCN1mK7xV5WiaV9ATXi9JrYp8C159mwXqDeYxqNyJGMc30nC5EPbUooal9wltT9sqekhSbYWMayrigo+AdRrN5HLcLNWJlZ0IfSKflv9+8vuyeVGAG2moSXkO1ElxC6USdDnY2/VbalBp5F6S7NIy0kCxKswGSs+mOLJpvh5Vh0VTf0KvzGMsZTZlBCdPBKkLOIxhjmUK4SOH+XzgNT4OcseNYyKC6FhEjVpOW3gYx49pMSZOBjdwP+2l05tnhZOVcHiFkDTvL+6iCEIXHQSInVGlZQyLnCAtfoRInxmtFtkQeYfpSlD8R2YHvXpj6uYIlM5I8dwWqSydeGi60c0HZS8L7oGKYVGCmoemFU6jcjoxKmEFkgCH3SjXLXo8pvWkbUPOLp5nOD4fbaHSuWmDZwQXV/F8l4LUBMCfTwesoJ2wv/J1ZXwoy2ZYj2/HdYzNqxZSPtQMwB1MjRh03W+Ni1NE0rPF7D+XHxABIXorTuswMGDNujQUzomOM6eGH82s2nj7zc9ooK3CcYUbz/ex67G49aa8sRA96w7889w9Emhc/9ZAiYQAAAABJRU5ErkJggg==";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACz9JREFUeF7lW11oHNcVPmdm//RruTWtC06xqVUX2kBL++BC8uC3QltS0wackJCI2lkZp7JMTGNLDt0SS7LTBK+UONbaLmrqQIvTYJem4Dc/JFA9GEJJC22sEoMNTVKlVi1rd3Z2557m3JnZnb+dmf2RUewLBrNz595zvnPOd865c4WwymPqxKnNQlG3A9A3EOHrALDJ+jcABBm5PYIGhIsAtAiAC0TiX6jAFR3U+dzInhurKSKuxuJHZ85sRzJ2ISrfB6Ktbe2BuECC/kgAF4+MZt9pa62AlzsGQO7E3EAKy0+DojzRttKNtbwGBAWdUrO5A0NLnQCjbQBY8aSijyLgfgAa6IRQkWtwyADMJtTq8Z/v2/dh5PyQCS0DkMtdTqTX/3M3gTJ1xxT3KIIAiwbQc9Wb287mcjuqrQDREgCTLxe+hgLnCGh7K5t2+h0EnIeE8vjhfbsXml27aQAm8rOPoYJnagze7I6rNR9BI0PsHT+w9zfNbBEbAHb51OeungCip5vZ4I7PVfBF/ZPBw3FDIhYAubm5TOpW5Q0A+sEdV6i1DS/p/amduaEhJsvQEQmAqbx+AQC+F7XYGnseC4RQAKTbr3//T59B5S1b4Fv6zcGdYeEQCsCxl0//Sgg6uMYs25Q4CkL+0Ej2QKOXGgIwNXPqSSJlrqnd1uhkInp8fHT49SDxAgGYOnl2KxnGe2su1bUKMFeOCN8a+1n2H94lfACYFd7Vt9dKkdOqzn5Fcb58c/BBLx/4AJianh0mwFOd2ngtrSOA9h7ZPzzrlMkFwAsnT240qon3CGDDWhK8c7Lgki6SW5ydpAuAienZvNnV3b2DAH45vj+bszWsASD7eVX/911DfA1t6PaCGgCT+cIhQJi6e23v0IzoubHR4aP8Sx2A6cIHALD5ngAAYWFsJDtYA+BovvCAgvD2PaG8paRA5btHRvbMSw+YyBdeRIRn7iUACGh6fP/wqARgcqZwFQjaO739rKGHuDA28tQgHp85s8kgcX015Zcoo0k3RLSaWzW1NgqxBSdnZn8ChG809WaMyYgIqWQSEskkqKoC4NBbCAGVahWqlQoYQoSuJoigUqlK4FBBSCUSwGt3YhDgIziRnz2GiM92YkF7jVQqBel02jS60+D8A3tA7QFCtVoFvVyGqmH4RGClS2Xd9Tsrn0klOwICAUzgRL7wB0T4cScAYOG6ujKQSCQ8yzmQYEBsA9rgIEgrl8tlEIJ/NB/olWogMMmECknfHi1ogHARJ6cL7wLAN+O8bhgCDBKgKor85xysfHdXl1SepAJOLb0uG8wD7ByapoGmlWWIsPsHjYSqQirpBTmOBp45BFcYACZA/mAZOsq6O15ZABbEHl2ZDLDrS6JzrFS3fQPT12ajjPNby8tQ0sqhskhuYV5pf3yIkzOFUlT9z5bQAmKxK20qnEwmpfW9w1bZ7RE2RH4iW7p1S1qfB4ObSKjSE9jz7MGel04l21edV0DQ2AMi8xKztqZXfJuyF7A1ent6YpNSHRRzOdNDCEolDf63fFv+lk6lYGBdPxAJKBY1CYLMAgi+0GsXiVgA8CaarlsE5d5yoL8P2P1rw8v89oNGv1sAfLz4X2Cgmdw+v36glilY8WKxJJ+tRg0RKwSk03I+NgwgQaCoCiiAMnpZWJndvMEfQ3EnlB8tfgKCBGxYv14SqTNAWPmVkgYkDJlF3SzThg/IEJgp8BnAxlaW6enuhmSSWd+SCf3cH7fws9Of4skutlxcMBVLJWkA0xMiIzeOSjdwMl+4AgjfjjPbOYcF7evrdVnK+dysd9hLTEFrSdFLAjE2tl8xDAOKGnsCh0MnPIH+ihPTsxcR8KEYcrimcNxztee3RHCwO/WWM4IM6C2QAoRiQuRMwQRph2azstvzieBNnJguHP20EBtvZhG2bD9bv2FN3pjx2H1N45muLIGQ7F6vKWou08DLuSbRdV2C0I4nINFxnJg+vQuBftcMAJz3e7o57zsVNf/PtX21agC7K6vKApqK2rHbeCcmP06BCa7ynHWT09utLUvcP3B65GaK92iFEwQ9jHyNjRSFj8NiDoTenm5ZpDAANgSSqYtFqXi7I5VyF1ZB4S7To6aBMNgLRM2rmtlbReU+60Dk9NW4N7uY/Nb19bmMz9svL9+WudoeHB5sTa4i2V2DBluc//Fz57s8N51OuesLL9sQyFaaCyjZM9Q8LGZ2sA9EeLO43wNkK5rJQMaq+W2lyrouU5RzOHuDlZUVX1enIEIfAwkgveb2yooPI+aZRmnRohHQKxVgTpBe4OgkozyBCF4aH80elB5wdObV7Qqpf4l6iQFg6/PBhBwW2CXu4MruBqaf51kkyQBxl+ccXEJ3OfqH5eVlX/eXyaQhIzNN2EAZCpIPbC+IUXwoBA8eGs2+Uz8Wj3EuyN2eSX7uwW4YBgC7OIPULACcZrsyUQCALNFXuD6QfGCSrXn20jAcro3tz25heRwfRmaPAOLzjbBmuuvr6wFVVV3FD2+h6xVJgK4Q6OqSjRKPlZUiVA33NT5ZSPX2hoYAH64wj8QZfHjCniYB4ELJjpGglwkOj41mj7kAkJ/GlMoHjS49Mln19/bUPN+b6TmG+VTHHjUSFELGadCQJKgmQK/4SZDnc7gxUF471usl+4kpTVHj1Mj9CpNxg7SLoOlG6kv2B1JXUz4xXch96jm/8AuL0vXD+nAWpVzWZSh4GT2OBb1zOAt0Z4LOGMhKvnbur6diQ3CpXLZKZQsAbxgg5MccV2ZcADTyAgUVGFhnMnacwYTEnSOzu2xjuYEBCmyng9Zjt++2uSakd3Db34xnbtt1nQnR4gNZJdX6kUU1Ub3feb/YdywTdEGCUxqTkWxuYjBsGEj8Puft2yv+oon5pdtxqOorqJ0ayxj378Rrr5TYC7l1ts4QLJkjL0jwct4rMnbqU+zUF+kCXrH9fUHRkTXM7wcJeZ5onwPELGXqAHi20CrcK9RrA/Y+JIh3RYb148vQQPAunxWyYH093ablZb8f4QX22b+kWMd3AMsKzBHM2Hy0zQoHHW/7OsdI0OvnETzVTIvMBSYh8mEzKHh/0GVq/8mktZm8FI14jqsxU0i//9k1ujM07OLHDpVOhI2tf9hRgtfPSuWKLI5kKAgxdHjkqcBL1A0B4E1fePXXr6zr7d0XbABvu2YWHl6F/QCEHA7KjcKfO3cN85SqYR7kCqP60rP7ftrwsmcoAJcvX05cvf6fC9TWJWm757fSlRVKcbrXZr3HC05Rq1xa/uqmH+Z2NP5jilAA2B5zc3MZXe3uwGVpUzxXFvEYO9p74pCBNQfxUtoo7hyKuDEeCUAdhJ4LABR5YzzKwZ0q1EJGpjQrV7f8Gd2181tpUXo4Snk74GLByuHw/vWPjiHgM7HTVKyVGzGM6TFSreZqj+ltX/7iwR0hbu/cMZYHOF849dvzT6pAfJPU/qNH84t3YJ4w32zGK4LPwupieonWETYagNgz/MSjgZeiG9miaQB4obPnzm8VQOeAwPdHU14iCgKgOUCi3YgI5lEYQ9mhR32XoaPebgkAXtTMEB/vBoTngayrtbZmDg2jipo2wVgigMPb7vvC2bgu7wWkZQDshebmzm+sKOIQKJh1fWX2xoSDOIK8JMpSnrhdMkhMZ0QmPzS0s62/IG0bgDoQFwZ0pTyMiFlE3Fw7pq4VkFZZHKJpFLkiwIIAeC1tpF5pV3FbjI4B4NSr8Nr5BxSkHwHiQwS0NfDCiFPb8DhYEER/VlX4/Z7Hds034ylx5q4KAM6Nz7z+5iYw9O0EyndQwa8wIAi4gYA2OEJGQ4AlQLxBRDcI6O8I8DfDoPm9Q49ci6NIq3P+D+8+kCmymasMAAAAAElFTkSuQmCC";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFmUlEQVRYR8WZf0xVZRjHv8+9517YSgQjc0UTg8Wl4YRleVuUy5bRIsNFA4MSmi2cNWCrv2KDZlt/1Catmrh0YoHKtMWUBuuHI7UJyybOiqvDIfPHMClQXF3ur7c97z3ncrn3wjmHy13vP/ePc973/Zzned/neb7PJcxjCCEUAKsBPK3+OgAsA5CqLjcBYBSAC8BpAL0A+onIZ3Y7MjNBCJEFoAZApQpkZjoDtwH4jIhGjE40BCiEYOtsB1AFgK2HS7cEOi/60Tcq4BoPYOSWwMRUcNv0ZOCeOwiONELhvRaUZFmRmRLayg2gFUATEV3XA9UFFEJsBtDM7vMFBNpcAXx+1ofTfwq9tWc8dy4j1BYoKHnAgmRFbjsGoI6I2udaaFZAIUQygE8BbOEFuob9qP/Jh6Gb5sAiN2er7nhSQVGmVXvUAqCeiNiyUSMmoAr3DYAit0+g5pgX+wYDpiym9/LmXCta1imaNXsAbIwFGQUYDnfltkDJUQ9+NelOPTjt+ap0QtcGOzIWSYyYkLEAd/JNZbgnDnnkZUjk4MtzojQEuZuI3gjfbwagEKKCQwG71dnhwdmxxMJpIA8vJZx82a65u4qI9mnPQoBqKDnHUaLqO8+Cnzk9L/CZbF1v49c4yDu0EBQOKF3Lt/WFI1699XSfN66R4RLv9xtPHkc32FC8Qt7ukKsloBAiE8Cg2yeSC/Z74BqPz7UM1+QMAjb1+QxDZi8mDL5mh2KRKTGXiIY0wI8AvHPwgh+buuOzngbHQV2xBB1kBnLvMwqqHpIf9zERvUtq4r/MudXZMYX+0flbLxyuvNuLjDsJzWvluTIMuXop4ZdNSTyFc/f9DFgI4ASHkxV71WSqe8KiX4iE+3ooGNhr862mIYer7chMsfB0JwO+B+CD5jM+1B83fqDDEWeD094xC8mpsK5AurmBATmllZR+64H21WYMqAenrbX9MQUNjwYvTmWPF+3n/bNuU/agBQefs/PzTgYc5Lizsm0Kv/1l7vwZhVu+iNBbym4j9FzyY2OXF+7Z+ZCfTjhTIc+hiwHHuZS6e5cbYzHridgfmig43i01CRiv4WIKEwwozUafGKdLJJxmDlErAWEaMNkK/PtWcHJ5twcdF2KXYWbdGumncEDp4rSdbkx4jF2Py68nyRIpY48bV29Hz4kXjiXDjTenXSwvSX77lOHqhcujwvsseOqwB71XZ1owXjj+3LwlhHOvTl8SGWbmclekjb561oZKhxVbfvBiz+/T13Eh4Hivl7ItOPz8dJgxHagb11jR5LTJYnbgRgBDEwJc4HJwNRpK5jpMkYHaCeCUmVRXkWNFW1Ewx0YOI3FO76QPVydpMrVwRrHwyIEpw3KSY9XyFAKXSGw1Vms83u71zRmE9eBYnp4qCysWeIIQQpZbrX/4Uf29frnFJXreXTKZz2sM3Qzg52uxs9aBIhvKc2TRGiy3VMBsLlh9AaHkfunR1b5hZ2RegLMZIieNMPCK1CacNbjsHwkv+b9gkW6k5P/wcQU1K0PC2zQkF8Zbj0VXTt0v2jRB30JEW2Um0VZXRRPHxNT/RzRZ0LpehhZuieRFiSbV1dyHaWXZWXgocYI90uQs4PvKQrKzMrxfE0u4S1dfmQxCjkyaK8HM+puDO2titbsQcq22ztytj0mB4iOJE/AcDTqLTbY+VFdzpk5w88iClnU2882jsEvDkDvUjqqshOuO+3A+Ts2ctZiVnqIJdN5uN8d3U+238HOk9mu4gZnOl6fzYgDNAz7T8pTl5LZVCiodFk0vc4uDG5ihPkys86vbYVVdzi3gRrUFLAs1rQV88loArr8Frv8jQpIh1R5Mg44lFnDqimgBcwDkFnDDgrSAI6zJLZJtcTbRd3FLw+htN2TByMXUbgRXQWsN/g3xI/8dMZ+/If4DLUPedQITk2kAAAAASUVORK5CYII=";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADXElEQVRYR8VXzVHjMBR+UjwOt4UOSAWbVADpYDuAzIBFhsNCBSQVbDgEY8NMspUQKoCtgHSw2VtgsB7zPJJGUWTHTg7rkxNLet/7vvcnBv/5YXXtx3F8zBj7DgAtzvk32i+l/AcAb4j4p9/vz+qcWQlAHMeHQRCcSCmvAGB/g4E5Y2yWZdmw3+/PN4EpBTCZTPY/Pj5uAIAMb/OMwjAc9nq9RdHmQgDkNef8CQAO9WZEnCHiMwDM9vb2XvXBBHS5XLZJGsYYgTV7AGAupewWseEFMB6P20EQkHFNNx3Sq6pvHMennHNiTgNZMMa6URS9ukysAVCev2jjiHjbbDYHZTQW0Xt/fz9ijP1U3xdSyo7LxAoApTkZz5FLKSmQBtuIr/fEcTxQbNBf8zAMO7YzKwCSJPmlA448v7i42Db4VjA7TIyEENd6gQGgqH9TH+ZCiNYuntt7Pcy2tBQ2gCnn/ERtPBVC/PYBoMOK4qHsGxUwlVUr0hoASZKQ96R9ofdpmr4gYrvRaJyenZ2tAHx8fDzJsoyCbh5FUccHPk3TJ0Q8BoCFEOKA1uQAbHQAcC2EGLkHKBoJZJ6aNghlfKr3hGF44GPJDkjGWIfSMgdwd3d31Wg0KACJHioa3nqu8nuiDREIes+yzBhX9cL8th3xOZoDsKO0CL2VVlRkDAjbQJlxWqdY/EvvOsu0BCYAhRAbG5TLhGKOKqXXcxtkkiSYa8/YNIqi3lYAXM3dmChLXy+AOhL4jNsx4WaHpx6sS1A1CF3jpDkZsGPCl6JW/JhaoLMtlyBN0zYiUg8orP92ALmaOzGxCMOw5UtDn6N2ISJq9mmaiaKo69MxSZK8UUkpr92A0yAYY69FhchX7OxSbLpWWS3YoRSb9NUZYCqhqoY0AZlm5LbNssiu8s3ynmReb0ZuQQKAlbZZxUjRmrI2XzqQcM4H5+fnw12MPzw83Egp9VBTPpBYUpiRbFsmPBP15pFMe+obSgFgUDQjuAyppkP9wgyln5+f3cvLy81DqVU01sZymhUQcUQ3IN9YHgTBkZTyBwC0LVD1x3K9mWh8f38fWJNtrXCoMlFv7Hw6LkgCzvmRc+nwASKtbwFguvPVzHe6fTkFgPxyCgD55TTLsmefzmW0VWKgFu81F38BxSY1PyPWxzAAAAAASUVORK5CYII=";
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAsRJREFUWEftmL9rU1EUx78naWkI6UuCpWnBoUKpvS8IEf+AxsFBHFRwENRBXLoUK9RBFFSog6BYQXB1c3BQUMFBMENBB8G20PdesNAMHYIOzQuFdmjukVtSSWPSd18fNhnenQL3/Pi87/1xzg2hywd1OR9CwKArFCrYMQWrpjlDzFcYSHlAzPf09t6JLy2tHQT2QEtcMc3JCPNL7YRETv/g4AkqFLa1feqGvgF/mWYixvwTwBATXZNSzrdLGpUyhmj0PYBRMF83HOfVfwd0TfMBMd8HUDBs+7RXwko2eyki5RsAK/2ZjPCroi8FN0xziJlXGYjViE6mLWvBC1DNu0L8ICDHRFNJy3qh47Nr0xZQfTlJebQxGAETAC4Q0ZpkfqqbiIhOgfkqgDIDj5v9JFGh3ce2BKyOjQ0gGv2tCxDYjnnRcJxcqzjtFTTNSWIeV04RYIKBHAEFCSwGASLgnDo0DHxU+1LFYuBDyrY/+wJsNHaFmCPgJgO3krY9FwSwKsQ7AOcBXDRsW/3ed2gdkhBwHw1DBZvF6cgedLPZ0eTy8s6JVGM9l0vJjY3EkZWVfxqEQwd0hbhMwGsQ3TYs64kCrArxVVWO7c3N4XSpVGlUsROA0wQ8Y+B50ran64CrAEZqzMfSjlMKAfe7B10hdhRUtTnlODPdp2A2O0pSqiV+lLTtb/XuRS31cSOTmWpurw59D3qVqq64ZvxAhgqG3UzTftFtFmYJuFs/qff87LkWh6QA1QBLeTZZLH7yiqUFuD4+no8SfQFRRdZqZ1LF4nevwK3m/5ZFYKvW1zecXljYUwYP3FHXL9+36sFUD7KnfGnCJgAM7Ng21G0vXy0FVRAeGYm58fhsBLgBZq+/O9rlLYHooWFZ2g94bcDdjJzP91TK5T3PUS8V1HxvJLKVsKyyjm2jjW9AvwmC2oeAoYJBFQjq/wf7Vp84351e2QAAAABJRU5ErkJggg==";
const _imports_7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADgklEQVRYR+2XaUhUURTHf2/UtNFs0aDMFGqoCCIqzYgCSxxbKCgK0jAriIiKDAyRyLKFkAzaQCgpKwshMbJ9LygraPvQ8iGTFjFbtLRyaUYnzjQS5ujcN2MhMefTzHv3nve7/3PvO/+n0c1D6+Z8eAE9rZBXQa+COhXwB3yABsCmc67T4V25Bw3AAsAE7ANqugugLFJUCwNeO6BWAvuBZk+V9FRBowNsEDAZ2OIAPAHkAhVAJVDvLqi7gDJvMDAT2KEZtECDQaPZ2mLnk9+yAW0ttu9AOnAeeAX8GqAj3AGUOcOBfE0jJqivkZDwYIxB/jwr/VXhgUND8A/04+ObWuprG7DZeAIkAk/1KukOYCRwStMYLSDmpdHEL4qiurKONTF7BIaUzWbMS8dzOvcONwsfU1VeLddfAmagXIeAuntxT6AAmBtmCmFt3nzCTKH25zV+/0HWnHya6q0kbYgjKkFEhjfP37N3RTGVZdXy9yIwH/iqCqlXwWmyn4zBAaQfS8Q0Rs7G7/jy4RvfvjQQPqx/m+tljyrIXlhIfV2jXJdSF/4twBJgVnxKFIu3Cat6HMw4x9WjD2XCTWCq6oHRo6B0iU9AUPa15e1UcoVa9rCCjbPzZdgPYADw2dUcua8HUDrEC98ePhwuz1DJ3WaM1dLMElM2Lc32N000cF8liR7AscCD0PDe7L67WiV3uzHLRua07sMpwA2VJHoAJwK3uzNgLHDdC/hH3fWUeAZwtn9EH3aVrlLZPp3twenABZUkqoCBwFYgdcSESDYUJavkbjdmXWxua0fZAWRKA3KVSBVwIXDI2DvALyUrgUnzRrnK6/T++bx7nMi+QVODxQIkAUWuEqkAiq265eNriIhLHkfypngMPmKe9YelycqBtDPcPinmxm4a5OC97SyTCqCoV9AjwJfkLDO9+olHdT9q3tVxJPNSawLJfdxTQNnQJZpB8/XzF2fveVgarWK/rNLXXR0WFQXFT+UAwU7QAgBZgITIIg5aQmxZgqOVXunAXtUBaY7+3uGqVQBlstTVWW0F+h4gi5AGfRnsyohb2QkIxCSgygmBLEY+TzsNVcDOksgrIxUQR1oMNAHzHI5Fvuzkpen2N3JXAIp12g5MAIbIN5PjhIqy612d0n+hoDwjBBAHK45HAB859qSz0rpianO/KxTU9UC9g72AehX7c7xXwf9ewZ/6hvcppLslDQAAAABJRU5ErkJggg==";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "record",
  __ssrInlineRender: true,
  props: {
    chatList: { default: [] },
    robotPromptList: { default: [] },
    robotLogo: { default: "" },
    isLoading: { type: Boolean, default: false },
    isQuote: { type: Boolean, default: true },
    recordType: { default: "" },
    isShowTagView: { type: Boolean, default: true },
    showTagView: { default: "" },
    jubao: { type: Boolean, default: false },
    robotInfo: { default: {
      type: ""
    } },
    userCodeList: {},
    isShowName: { type: Boolean, default: false }
  },
  emits: ["scrollTop", "scrollBottom", "getContent", "query", "update:isLoading", "getAdvanced", "response", "scrolls", "employee"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const routing = getRouting();
    const router = useRouter();
    const previewImgRef = ref();
    const isShow = ref(true);
    const quoteRef = ref();
    const height = ref(0);
    const { proxy } = getCurrentInstance();
    const isScroll = ref(true);
    const { Modal } = ipkg;
    const visible = ref(false);
    const robotList = ref([]);
    const popLoading = ref(false);
    const cCreateRef = ref();
    const { chatList, robotPromptList, robotLogo, isLoading, isQuote, recordType, isShowTagView, showTagView, jubao, robotInfo, userCodeList, isShowName } = toRefs(props);
    const chatRecordList = ref(null);
    const rollBottom = async () => {
    };
    proxy.$debounce((e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop < 10) {
        if (!isLoading.value) {
          emits("update:isLoading", true);
          emits("scrollTop");
        }
      }
      const distanceToBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceToBottom < 10) {
        if (!isLoading.value) {
          emits("update:isLoading", true);
          emits("scrollBottom");
        }
      }
      emits("scrolls", {
        scrollTop,
        distanceToBottom
      });
      if (scrollTop + height.value >= scrollHeight) {
        isScroll.value = true;
      } else {
        isScroll.value = false;
      }
    }, 500);
    const chooseItem = (record) => {
      emits("getContent", record);
    };
    const toReport = () => {
      Modal.confirm({
        okText: "\u786E\u8BA4",
        cancelText: "",
        content: "\u5DF2\u8FDB\u884C\u4E3E\u62A5\uFF0C\u5BA1\u6838\u4E2D"
      });
    };
    const onQueryKnowledgeBase = (record) => {
      quoteRef.value.showFn({
        robotCode: record.robotCode ? record.robotCode : record.partyId,
        aiRecordCode: record.recordCode
      });
    };
    const toCopy = (record) => {
      proxy.$CopyTex(record.content);
    };
    const toEvaluate = (record, type) => {
      let data = {
        aiRecordEvaluateType: record.aiRecordEvaluateType == type ? "" : type,
        aiRecordCode: record.recordCode,
        groupId: record.groupId
      };
      proxy.$api.aiRecordLike(data).then(() => {
        record.aiRecordEvaluateType = record.aiRecordEvaluateType == type ? "" : type;
      });
    };
    const getStaffList = (item) => {
      var _a;
      popLoading.value = true;
      robotList.value = [];
      if (item.intentionalAnalysisType == "ROBOT") {
        let data = {
          excludeIdList: [(_a = item == null ? void 0 : item.intentionalAnalysisCode) != null ? _a : ""],
          tagCode: item.intentionalAnalysisLabelCode,
          type: "CHAT",
          queryTrainTeamRobotFlag: true
        };
        proxy.$api.queryTrainRobotInfoList(data).then((res) => {
          robotList.value = res.data;
          popLoading.value = false;
          if (proxy.$isEmpty(res.data)) {
            item.visible = false;
            proxy.$Message.error("\u6CA1\u6709\u673A\u5668\u4EBA\u53EF\u6362");
          }
        }).catch(() => {
          popLoading.value = false;
          item.visible = false;
        });
      } else {
        let data = {
          excludeIdList: userCodeList.value
        };
        proxy.$api.queryDigitalRobotInfoList(data).then((res) => {
          robotList.value = res.data;
          popLoading.value = false;
          if (proxy.$isEmpty(res.data)) {
            item.visible = false;
            proxy.$Message.error("\u6CA1\u6709\u6210\u5458\u53EF\u6362");
          }
        }).catch(() => {
          popLoading.value = false;
          item.visible = false;
        });
      }
    };
    const toAdvanced = (record) => {
      emits("getAdvanced", record.code);
    };
    const toResponse = (record) => {
      emits("response", record.code);
    };
    const toMediate = () => {
      nextTick();
      const offset = (chatRecordList.value.scrollHeight - chatRecordList.value.clientHeight) / 2;
      chatRecordList.value.scrollTop = offset;
    };
    const onEmployee = (idx, item, itemData) => {
      let request = "";
      if (!proxy.$isEmpty(item.request)) {
        request = item.request;
      } else {
        request = chatList.value[idx - 1].type == "USER" ? chatList.value[idx - 1].content : "";
      }
      chatList.value.forEach((data) => {
        data.visible = false;
      });
      emits("employee", { type: "edit", request, item, data: itemData });
    };
    const onChatRobot = (record) => {
      if (record.robotType == "CHAT") {
        if (record.personalFlag) {
          router.push("/robot/chat?code=" + record.robotCode);
        } else {
          router.push("/enterprise/train/chat?robotCode=" + record.robotCode + "&type=&userCode=");
        }
      }
      if (record.robotType == "MULTIPLE_MODELS_CHAT" || record.robotType == "USER_QA_CHAT" || record.robotType == "SYSTEM_QA_CHAT") {
        router.push("/robot/chat");
      }
      if (record.robotType == "ROLE" || record.robotType == "STAR" || record.robotType == "ROLE_ROBOT_CATEGORY") {
        router.push("/robot/chat?code=" + record.robotCode);
      }
      if (record.robotType == "MUSIC") {
        router.push("/robot/music?code=" + record.robotCode);
      }
      if (record.robotType == "QUESTION_BANK") {
        routing.setSelectId(record.robotCategoryId);
        routing.setRobotCode(record.robotCode);
        cCreateRef.value.showFn(record.robotCode);
      }
    };
    __expose({
      toMediate,
      rollBottom
    });
    watch(() => chatList.value, (newVal) => {
      if (newVal.length > 0) {
        setTimeout(() => {
          if (newVal[newVal.length - 1].type == "USER" && !newVal[newVal.length - 1].recordCode) {
            rollBottom();
          } else {
            if (isScroll.value) {
              rollBottom();
            }
          }
        }, 300);
      } else {
        isScroll.value = true;
      }
      chatList.value.forEach((item) => {
        if (item.content && item.content.indexOf("\u6CFD\u4E1C") != -1) {
          item.content = item.content.replace(/泽东/g, "**");
        }
        if (item.content && item.content.indexOf("\u6FA4\u6771") != -1) {
          item.content = item.content.replace(/澤東/g, "**");
        }
      });
    }, { deep: true, immediate: true });
    watch(() => visible.value, () => {
      if (visible.value) {
        getStaffList();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1$1;
      const _component_Spin = resolveComponent("Spin");
      const _component_Image = resolveComponent("Image");
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Button = resolveComponent("Button");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_previewImg = __nuxt_component_1;
      const _component_cCreate = __nuxt_component_2;
      if (isShow.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "chatRecordList",
          ref_key: "chatRecordList",
          ref: chatRecordList
        }, _attrs))} data-v-bbeef9a2>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "recordTop", {}, null, _push2, _parent2, _scopeId);
              _push2(`<!--[-->`);
              ssrRenderList(unref(chatList), (item, index) => {
                _push2(`<div class="${ssrRenderClass([!_ctx.$isEmpty(item.robotInfo) ? "chatRobotInfo" : "", "item clearfix left"])}" data-v-bbeef9a2${_scopeId}>`);
                if (item.type == "SYSTEM") {
                  _push2(`<img class="chat-robot-logo"${ssrRenderAttr("src", item.log || item.robotLog || unref(robotLogo) || unref(_imports_1))} alt="" data-v-bbeef9a2${_scopeId}>`);
                } else {
                  _push2(`<img class="chat-robot-logo"${ssrRenderAttr("src", unref(routing).chatLogo)} alt="" data-v-bbeef9a2${_scopeId}>`);
                }
                if (item.type == "SYSTEM" && unref(isShowName)) {
                  _push2(`<div class="name" data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="${ssrRenderClass([item.type == "SYSTEM" ? "left-item" : "blue", "item-content"])}" data-v-bbeef9a2${_scopeId}>`);
                if (_ctx.$isEmpty(item.content) && !item.barrageData && _ctx.$isEmpty(item.robotInfo)) {
                  _push2(ssrRenderComponent(_component_Spin, null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!--[-->`);
                  if (index == 0 && unref(recordType) == "picedit" && item.chatType == "picedit") {
                    _push2(`<!--[--><div data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item.content)}</div><div class="tag-list" data-v-bbeef9a2${_scopeId}><!--[-->`);
                    ssrRenderList(unref(robotPromptList), (iten) => {
                      _push2(`<div class="tag" data-v-bbeef9a2${_scopeId}>${ssrInterpolate(iten)}</div>`);
                    });
                    _push2(`<!--]--></div><!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.type == "USER") {
                    _push2(`<!--[-->`);
                    if (item.chatType == "CHAT" || item.chatType == "") {
                      _push2(`<pre data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item.content)}</pre>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.type == "SYSTEM") {
                    _push2(`<!--[-->`);
                    if (item.chatType == "CHAT" || item.chatType == "") {
                      _push2(ssrRenderComponent(contentCom, {
                        isShowTagView: index == 0 ? false : unref(isShowTagView),
                        showTagView: unref(showTagView) ? unref(showTagView) : unref(routing).showTagView,
                        content: item.content,
                        isLoad: unref(chatList).length - 1 == index && index != 0
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.chatType == "DRAW") {
                    _push2(ssrRenderComponent(_component_Image, {
                      preview: true,
                      "preview-list": [item.content],
                      class: "cImage-img",
                      src: item.content,
                      fit: "cover"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.chatType == "VIDEO") {
                    _push2(`<video width="658" height="444" controls${ssrRenderAttr("src", item.content)} data-v-bbeef9a2${_scopeId}></video>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.chatType == "MUSIC") {
                    _push2(`<video width="658" height="444" controls${ssrRenderAttr("src", item.content)} data-v-bbeef9a2${_scopeId}></video>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.chatType == "POSTER_TEMPLATE_ROBOT") {
                    _push2(`<div data-v-bbeef9a2${_scopeId}><div style="${ssrRenderStyle({ "margin-bottom": "8px" })}" data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item.content)}</div>`);
                    if (!_ctx.$isEmpty(item.list)) {
                      _push2(`<div class="item-content-list" data-v-bbeef9a2${_scopeId}><!--[-->`);
                      ssrRenderList(item.list, (iten) => {
                        _push2(`<div class="item-img" data-v-bbeef9a2${_scopeId}>`);
                        _push2(ssrRenderComponent(_component_Image, {
                          class: "img",
                          src: iten.url,
                          fit: "cover"
                        }, null, _parent2, _scopeId));
                        _push2(`<div class="cover" data-v-bbeef9a2${_scopeId}><div class="btn" data-v-bbeef9a2${_scopeId}>\u9AD8\u7EA7\u7F16\u8F91</div></div></div>`);
                      });
                      _push2(`<!--]--></div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.type == "SYSTEM" && index != 0) {
                    _push2(`<div class="bottom-action" data-v-bbeef9a2${_scopeId}><div class="bottom-action-left" data-v-bbeef9a2${_scopeId}>`);
                    if (unref(isQuote)) {
                      _push2(`<!--[-->`);
                      if (!_ctx.$isEmpty(item.quoteNum)) {
                        _push2(`<!--[-->`);
                        if (item.quoteNum > 0) {
                          _push2(`<div class="quoteNumbers" data-v-bbeef9a2${_scopeId}><div class="img" data-v-bbeef9a2${_scopeId}></div><div data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item.quoteNum)}\u4E2A\u5F15\u7528</div></div>`);
                        } else {
                          _push2(`<!---->`);
                        }
                        _push2(`<!--]-->`);
                      } else {
                        _push2(`<!--[-->`);
                        if (!_ctx.$isEmpty(item.importVectorCode)) {
                          _push2(`<div class="quoteNumbers" data-v-bbeef9a2${_scopeId}><div class="img" data-v-bbeef9a2${_scopeId}></div><div data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item.importVectorCode.length)}\u4E2A\u5F15\u7528</div></div>`);
                        } else {
                          _push2(`<!---->`);
                        }
                        _push2(`<!--]-->`);
                      }
                      _push2(`<!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (unref(router).currentRoute.value.path.indexOf("/enterprise/flow") != -1 && index != 0) {
                      _push2(`<div class="respond" data-v-bbeef9a2${_scopeId}>\u5B8C\u6574\u54CD\u5E94</div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div><div class="bottom-action-right" data-v-bbeef9a2${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_ClientOnly, null, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          if (_ctx.$isEmpty(item.barrageData)) {
                            _push3(ssrRenderComponent(_component_Tooltip, {
                              content: "\u590D\u5236",
                              placement: "bottom"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`<div class="copy" data-v-bbeef9a2${_scopeId3}></div><div class="text" data-v-bbeef9a2${_scopeId3}>\u590D\u5236</div>`);
                                } else {
                                  return [
                                    createVNode("div", {
                                      class: "copy",
                                      onClick: ($event) => toCopy(item)
                                    }, null, 8, ["onClick"]),
                                    createVNode("div", {
                                      class: "text",
                                      onClick: ($event) => toCopy(item)
                                    }, "\u590D\u5236", 8, ["onClick"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                          if (unref(router).currentRoute.value.path.indexOf("/enterprise/train/chat") != -1 && index != 0) {
                            _push3(`<div class="division" data-v-bbeef9a2${_scopeId2}></div>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (unref(router).currentRoute.value.path.indexOf("/enterprise/train/chat") != -1 && index != 0) {
                            _push3(`<!--[-->`);
                            _push3(ssrRenderComponent(_component_Tooltip, {
                              content: "\u70B9\u8D5E",
                              placement: "bottom"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bbeef9a2${_scopeId3}><path${ssrRenderAttr("fill", item.aiRecordEvaluateType == "GOOD_REVIEW" ? "#0090F7" : "#879299")} d="M6.18147 6.23111L10.2421 2.67595C10.521 2.46058 10.8634 2.34375 11.2158 2.34375C12.0957 2.34375 12.8089 3.05701 12.8089 3.93687V5.89213C12.8089 6.21208 13.0683 6.47145 13.3883 6.47145H15.2221C15.3412 6.47145 15.4601 6.48196 15.5774 6.50284C16.6799 6.69908 17.4145 7.75194 17.2183 8.85443L15.9485 15.9873C15.7762 16.9548 14.935 17.6595 13.9523 17.6595H7.42074C6.30092 17.6595 5.39313 16.7517 5.39313 15.6319V7.8359C5.39313 7.52595 5.46419 7.22012 5.60086 6.94192C5.73752 6.66372 5.93615 6.42055 6.18147 6.23111ZM6.84142 15.6319C6.84142 15.9518 7.10079 16.2112 7.42074 16.2112H13.9523C14.2331 16.2112 14.4734 16.0099 14.5226 15.7334L15.7924 8.60058C15.8485 8.28558 15.6386 7.98479 15.3236 7.9287C15.2901 7.92274 15.2561 7.91974 15.2221 7.91974H13.3882C12.2684 7.91974 11.3606 7.01195 11.3606 5.89213V3.93687C11.3606 3.9098 11.353 3.88327 11.3387 3.86029C11.3244 3.83731 11.304 3.8188 11.2797 3.80687C11.2554 3.79493 11.2282 3.79005 11.2013 3.79276C11.1743 3.79548 11.1487 3.80569 11.1273 3.82224L7.06663 7.37739C6.99654 7.43152 6.9398 7.501 6.90076 7.58048C6.86172 7.65997 6.84142 7.74735 6.84142 7.8359V15.6319ZM4.19829 8.01026V16.0664C4.19829 17.0319 2.75 17.0319 2.75 16.0664V8.01026C2.75 7.04474 4.19829 7.04474 4.19829 8.01026Z" data-v-bbeef9a2${_scopeId3}></path></svg><div class="${ssrRenderClass([item.aiRecordEvaluateType == "GOOD_REVIEW" ? "text-active" : "", "text"])}" data-v-bbeef9a2${_scopeId3}>\u70B9\u8D5E</div>`);
                                } else {
                                  return [
                                    (openBlock(), createBlock("svg", {
                                      width: "20",
                                      onClick: withModifiers(($event) => toEvaluate(item, "GOOD_REVIEW"), ["stop"]),
                                      height: "20",
                                      viewBox: "0 0 20 20",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        fill: item.aiRecordEvaluateType == "GOOD_REVIEW" ? "#0090F7" : "#879299",
                                        d: "M6.18147 6.23111L10.2421 2.67595C10.521 2.46058 10.8634 2.34375 11.2158 2.34375C12.0957 2.34375 12.8089 3.05701 12.8089 3.93687V5.89213C12.8089 6.21208 13.0683 6.47145 13.3883 6.47145H15.2221C15.3412 6.47145 15.4601 6.48196 15.5774 6.50284C16.6799 6.69908 17.4145 7.75194 17.2183 8.85443L15.9485 15.9873C15.7762 16.9548 14.935 17.6595 13.9523 17.6595H7.42074C6.30092 17.6595 5.39313 16.7517 5.39313 15.6319V7.8359C5.39313 7.52595 5.46419 7.22012 5.60086 6.94192C5.73752 6.66372 5.93615 6.42055 6.18147 6.23111ZM6.84142 15.6319C6.84142 15.9518 7.10079 16.2112 7.42074 16.2112H13.9523C14.2331 16.2112 14.4734 16.0099 14.5226 15.7334L15.7924 8.60058C15.8485 8.28558 15.6386 7.98479 15.3236 7.9287C15.2901 7.92274 15.2561 7.91974 15.2221 7.91974H13.3882C12.2684 7.91974 11.3606 7.01195 11.3606 5.89213V3.93687C11.3606 3.9098 11.353 3.88327 11.3387 3.86029C11.3244 3.83731 11.304 3.8188 11.2797 3.80687C11.2554 3.79493 11.2282 3.79005 11.2013 3.79276C11.1743 3.79548 11.1487 3.80569 11.1273 3.82224L7.06663 7.37739C6.99654 7.43152 6.9398 7.501 6.90076 7.58048C6.86172 7.65997 6.84142 7.74735 6.84142 7.8359V15.6319ZM4.19829 8.01026V16.0664C4.19829 17.0319 2.75 17.0319 2.75 16.0664V8.01026C2.75 7.04474 4.19829 7.04474 4.19829 8.01026Z"
                                      }, null, 8, ["fill"])
                                    ], 8, ["onClick"])),
                                    createVNode("div", {
                                      class: ["text", item.aiRecordEvaluateType == "GOOD_REVIEW" ? "text-active" : ""],
                                      onClick: withModifiers(($event) => toEvaluate(item, "GOOD_REVIEW"), ["stop"])
                                    }, "\u70B9\u8D5E", 10, ["onClick"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(`<div class="division" data-v-bbeef9a2${_scopeId2}></div>`);
                            _push3(ssrRenderComponent(_component_Tooltip, {
                              content: "\u70B9\u8E29",
                              placement: "bottom"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bbeef9a2${_scopeId3}><path${ssrRenderAttr("fill", item.aiRecordEvaluateType == "BAD_REVIEW" ? "#0090F7" : "#879299")} d="M6.18092 13.7728L10.2416 17.328C10.5205 17.5433 10.8629 17.6602 11.2153 17.6602C12.0951 17.6602 12.8084 16.9469 12.8084 16.067V14.1118C12.8084 13.7918 13.0678 13.5325 13.3877 13.5325H15.2215C15.3407 13.5325 15.4596 13.5219 15.5769 13.5011C16.6794 13.3048 17.414 12.252 17.2177 11.1495L15.9479 4.01665C15.7757 3.04913 14.9344 2.34441 13.9517 2.34441H7.42018C6.30037 2.34441 5.39258 3.2522 5.39258 4.37202V12.168C5.39258 12.478 5.46364 12.7838 5.60031 13.062C5.73697 13.3402 5.9356 13.5834 6.18092 13.7728ZM6.84087 4.37202C6.84087 4.05208 7.10024 3.7927 7.42018 3.7927H13.9517C14.2325 3.7927 14.4728 3.99405 14.5221 4.2705L15.7918 11.4033C15.8479 11.7183 15.638 12.0191 15.323 12.0752C15.2895 12.0812 15.2555 12.0842 15.2215 12.0842H13.3877C12.2679 12.0842 11.3601 12.992 11.3601 14.1118V16.067C11.3601 16.0941 11.3525 16.1206 11.3382 16.1436C11.3239 16.1666 11.3034 16.1851 11.2791 16.197C11.2548 16.209 11.2276 16.2139 11.2007 16.2111C11.1738 16.2084 11.1481 16.1982 11.1267 16.1817L7.06608 12.6265C6.99599 12.5724 6.93925 12.5029 6.90021 12.4234C6.86116 12.3439 6.84087 12.2566 6.84087 12.168V4.37202Z" data-v-bbeef9a2${_scopeId3}></path><path${ssrRenderAttr("fill", item.aiRecordEvaluateType == "BAD_REVIEW" ? "#0090F7" : "#879299")} d="M4.19829 4.0093V12.0654C4.19829 13.0309 2.75 13.0309 2.75 12.0654V4.0093C2.75 3.04378 4.19829 3.04378 4.19829 4.0093Z" data-v-bbeef9a2${_scopeId3}></path></svg><div class="${ssrRenderClass([item.aiRecordEvaluateType == "BAD_REVIEW" ? "text-active" : "", "text"])}" data-v-bbeef9a2${_scopeId3}>\u70B9\u8E29</div>`);
                                } else {
                                  return [
                                    (openBlock(), createBlock("svg", {
                                      width: "20",
                                      onClick: ($event) => toEvaluate(item, "BAD_REVIEW"),
                                      height: "20",
                                      viewBox: "0 0 20 20",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg"
                                    }, [
                                      createVNode("path", {
                                        fill: item.aiRecordEvaluateType == "BAD_REVIEW" ? "#0090F7" : "#879299",
                                        d: "M6.18092 13.7728L10.2416 17.328C10.5205 17.5433 10.8629 17.6602 11.2153 17.6602C12.0951 17.6602 12.8084 16.9469 12.8084 16.067V14.1118C12.8084 13.7918 13.0678 13.5325 13.3877 13.5325H15.2215C15.3407 13.5325 15.4596 13.5219 15.5769 13.5011C16.6794 13.3048 17.414 12.252 17.2177 11.1495L15.9479 4.01665C15.7757 3.04913 14.9344 2.34441 13.9517 2.34441H7.42018C6.30037 2.34441 5.39258 3.2522 5.39258 4.37202V12.168C5.39258 12.478 5.46364 12.7838 5.60031 13.062C5.73697 13.3402 5.9356 13.5834 6.18092 13.7728ZM6.84087 4.37202C6.84087 4.05208 7.10024 3.7927 7.42018 3.7927H13.9517C14.2325 3.7927 14.4728 3.99405 14.5221 4.2705L15.7918 11.4033C15.8479 11.7183 15.638 12.0191 15.323 12.0752C15.2895 12.0812 15.2555 12.0842 15.2215 12.0842H13.3877C12.2679 12.0842 11.3601 12.992 11.3601 14.1118V16.067C11.3601 16.0941 11.3525 16.1206 11.3382 16.1436C11.3239 16.1666 11.3034 16.1851 11.2791 16.197C11.2548 16.209 11.2276 16.2139 11.2007 16.2111C11.1738 16.2084 11.1481 16.1982 11.1267 16.1817L7.06608 12.6265C6.99599 12.5724 6.93925 12.5029 6.90021 12.4234C6.86116 12.3439 6.84087 12.2566 6.84087 12.168V4.37202Z"
                                      }, null, 8, ["fill"]),
                                      createVNode("path", {
                                        fill: item.aiRecordEvaluateType == "BAD_REVIEW" ? "#0090F7" : "#879299",
                                        d: "M4.19829 4.0093V12.0654C4.19829 13.0309 2.75 13.0309 2.75 12.0654V4.0093C2.75 3.04378 4.19829 3.04378 4.19829 4.0093Z"
                                      }, null, 8, ["fill"])
                                    ], 8, ["onClick"])),
                                    createVNode("div", {
                                      class: ["text", item.aiRecordEvaluateType == "BAD_REVIEW" ? "text-active" : ""],
                                      onClick: ($event) => toEvaluate(item, "BAD_REVIEW")
                                    }, "\u70B9\u8E29", 10, ["onClick"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(`<!--]-->`);
                          } else {
                            _push3(`<!---->`);
                          }
                        } else {
                          return [
                            _ctx.$isEmpty(item.barrageData) ? (openBlock(), createBlock(_component_Tooltip, {
                              key: 0,
                              content: "\u590D\u5236",
                              placement: "bottom"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "copy",
                                  onClick: ($event) => toCopy(item)
                                }, null, 8, ["onClick"]),
                                createVNode("div", {
                                  class: "text",
                                  onClick: ($event) => toCopy(item)
                                }, "\u590D\u5236", 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            unref(router).currentRoute.value.path.indexOf("/enterprise/train/chat") != -1 && index != 0 ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "division"
                            })) : createCommentVNode("", true),
                            unref(router).currentRoute.value.path.indexOf("/enterprise/train/chat") != -1 && index != 0 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                              createVNode(_component_Tooltip, {
                                content: "\u70B9\u8D5E",
                                placement: "bottom"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    width: "20",
                                    onClick: withModifiers(($event) => toEvaluate(item, "GOOD_REVIEW"), ["stop"]),
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      fill: item.aiRecordEvaluateType == "GOOD_REVIEW" ? "#0090F7" : "#879299",
                                      d: "M6.18147 6.23111L10.2421 2.67595C10.521 2.46058 10.8634 2.34375 11.2158 2.34375C12.0957 2.34375 12.8089 3.05701 12.8089 3.93687V5.89213C12.8089 6.21208 13.0683 6.47145 13.3883 6.47145H15.2221C15.3412 6.47145 15.4601 6.48196 15.5774 6.50284C16.6799 6.69908 17.4145 7.75194 17.2183 8.85443L15.9485 15.9873C15.7762 16.9548 14.935 17.6595 13.9523 17.6595H7.42074C6.30092 17.6595 5.39313 16.7517 5.39313 15.6319V7.8359C5.39313 7.52595 5.46419 7.22012 5.60086 6.94192C5.73752 6.66372 5.93615 6.42055 6.18147 6.23111ZM6.84142 15.6319C6.84142 15.9518 7.10079 16.2112 7.42074 16.2112H13.9523C14.2331 16.2112 14.4734 16.0099 14.5226 15.7334L15.7924 8.60058C15.8485 8.28558 15.6386 7.98479 15.3236 7.9287C15.2901 7.92274 15.2561 7.91974 15.2221 7.91974H13.3882C12.2684 7.91974 11.3606 7.01195 11.3606 5.89213V3.93687C11.3606 3.9098 11.353 3.88327 11.3387 3.86029C11.3244 3.83731 11.304 3.8188 11.2797 3.80687C11.2554 3.79493 11.2282 3.79005 11.2013 3.79276C11.1743 3.79548 11.1487 3.80569 11.1273 3.82224L7.06663 7.37739C6.99654 7.43152 6.9398 7.501 6.90076 7.58048C6.86172 7.65997 6.84142 7.74735 6.84142 7.8359V15.6319ZM4.19829 8.01026V16.0664C4.19829 17.0319 2.75 17.0319 2.75 16.0664V8.01026C2.75 7.04474 4.19829 7.04474 4.19829 8.01026Z"
                                    }, null, 8, ["fill"])
                                  ], 8, ["onClick"])),
                                  createVNode("div", {
                                    class: ["text", item.aiRecordEvaluateType == "GOOD_REVIEW" ? "text-active" : ""],
                                    onClick: withModifiers(($event) => toEvaluate(item, "GOOD_REVIEW"), ["stop"])
                                  }, "\u70B9\u8D5E", 10, ["onClick"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "division" }),
                              createVNode(_component_Tooltip, {
                                content: "\u70B9\u8E29",
                                placement: "bottom"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock("svg", {
                                    width: "20",
                                    onClick: ($event) => toEvaluate(item, "BAD_REVIEW"),
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    createVNode("path", {
                                      fill: item.aiRecordEvaluateType == "BAD_REVIEW" ? "#0090F7" : "#879299",
                                      d: "M6.18092 13.7728L10.2416 17.328C10.5205 17.5433 10.8629 17.6602 11.2153 17.6602C12.0951 17.6602 12.8084 16.9469 12.8084 16.067V14.1118C12.8084 13.7918 13.0678 13.5325 13.3877 13.5325H15.2215C15.3407 13.5325 15.4596 13.5219 15.5769 13.5011C16.6794 13.3048 17.414 12.252 17.2177 11.1495L15.9479 4.01665C15.7757 3.04913 14.9344 2.34441 13.9517 2.34441H7.42018C6.30037 2.34441 5.39258 3.2522 5.39258 4.37202V12.168C5.39258 12.478 5.46364 12.7838 5.60031 13.062C5.73697 13.3402 5.9356 13.5834 6.18092 13.7728ZM6.84087 4.37202C6.84087 4.05208 7.10024 3.7927 7.42018 3.7927H13.9517C14.2325 3.7927 14.4728 3.99405 14.5221 4.2705L15.7918 11.4033C15.8479 11.7183 15.638 12.0191 15.323 12.0752C15.2895 12.0812 15.2555 12.0842 15.2215 12.0842H13.3877C12.2679 12.0842 11.3601 12.992 11.3601 14.1118V16.067C11.3601 16.0941 11.3525 16.1206 11.3382 16.1436C11.3239 16.1666 11.3034 16.1851 11.2791 16.197C11.2548 16.209 11.2276 16.2139 11.2007 16.2111C11.1738 16.2084 11.1481 16.1982 11.1267 16.1817L7.06608 12.6265C6.99599 12.5724 6.93925 12.5029 6.90021 12.4234C6.86116 12.3439 6.84087 12.2566 6.84087 12.168V4.37202Z"
                                    }, null, 8, ["fill"]),
                                    createVNode("path", {
                                      fill: item.aiRecordEvaluateType == "BAD_REVIEW" ? "#0090F7" : "#879299",
                                      d: "M4.19829 4.0093V12.0654C4.19829 13.0309 2.75 13.0309 2.75 12.0654V4.0093C2.75 3.04378 4.19829 3.04378 4.19829 4.0093Z"
                                    }, null, 8, ["fill"])
                                  ], 8, ["onClick"])),
                                  createVNode("div", {
                                    class: ["text", item.aiRecordEvaluateType == "BAD_REVIEW" ? "text-active" : ""],
                                    onClick: ($event) => toEvaluate(item, "BAD_REVIEW")
                                  }, "\u70B9\u8E29", 10, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ], 64)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (item.type == "SYSTEM" && item.chatType !== "SUGGEST_ROBOT" && index != 0) {
                    _push2(`<!--[-->`);
                    if (unref(proxy).$judgmentSorce()) {
                      _push2(`<div class="tagView" data-v-bbeef9a2${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_Button, {
                        type: "text",
                        class: "report",
                        size: "small",
                        onClick: toReport
                      }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`\u4E3E\u62A5`);
                          } else {
                            return [
                              createTextVNode("\u4E3E\u62A5")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                      _push2(`<div class="tag" data-v-bbeef9a2${_scopeId}>`);
                      if (unref(jubao)) {
                        _push2(`<img style="${ssrRenderStyle({ "height": "28px", "width": "auto" })}"${ssrRenderAttr("src", "https://hz-oss.chatdzq.com/file/chatdzq/js/jubao1.svg?v=" + Date.now())} data-v-bbeef9a2${_scopeId}>`);
                      } else {
                        _push2(`<img style="${ssrRenderStyle({ "height": "28px", "width": "auto" })}"${ssrRenderAttr("src", "https://hz-oss.chatdzq.com/file/chatdzq/js/jubao2.svg?v=" + Date.now())} data-v-bbeef9a2${_scopeId}>`);
                      }
                      _push2(`</div></div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--]-->`);
                }
                if (item.barrageData) {
                  _push2(ssrRenderComponent(barrageCom, {
                    list: item.barrageData,
                    onPrompt: chooseItem
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (index == 0 && unref(robotPromptList).length > 0 && _ctx.$isEmpty(unref(recordType)) && item.type == "SYSTEM") {
                  _push2(`<div class="list" data-v-bbeef9a2${_scopeId}><h3 data-v-bbeef9a2${_scopeId}>\u60A8\u53EF\u4EE5\u544A\u8BC9\u6211\u9700\u8981\u521B\u4F5C\u4EC0\u4E48\u5185\u5BB9\uFF1F\u6BD4\u5982\u4E0B\u9762\uFF1A</h3><ul data-v-bbeef9a2${_scopeId}><!--[-->`);
                  ssrRenderList(unref(robotPromptList), (item2, index2) => {
                    _push2(`<li data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item2)}</li>`);
                  });
                  _push2(`<!--]--></ul></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (item.chatType == "SUGGEST_ROBOT" && !_ctx.$isEmpty(item.robotInfo)) {
                  _push2(`<div class="recRobots" data-v-bbeef9a2${_scopeId}><p class="gary" data-v-bbeef9a2${_scopeId}>\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u6211\u4E3A\u4F60\u627E\u5230\u4E86\u4EE5\u4E0B\u673A\u5668\u4EBA\uFF0C\u66F4\u597D\u7684\u89E3\u7B54\u8FD9\u65B9\u9762\u7684\u95EE\u9898</p><div class="robotItem" data-v-bbeef9a2${_scopeId}>`);
                  if (!_ctx.$isEmpty(item.robotInfo.robotLog)) {
                    _push2(`<img${ssrRenderAttr("src", item.robotInfo.robotLog)} data-v-bbeef9a2${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _imports_1)} data-v-bbeef9a2${_scopeId}>`);
                  }
                  _push2(`<h2 data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item.robotInfo.robotName)}</h2><p class="text-hide" data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item.robotInfo.robotRemark)}</p><em class="right-arrow" data-v-bbeef9a2${_scopeId}></em></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.intentionalAnalysisFlag) {
                  _push2(`<div class="item questionsCom clearfix left" data-v-bbeef9a2${_scopeId}><div class="questions" data-v-bbeef9a2${_scopeId}><div class="questions-left" data-v-bbeef9a2${_scopeId}><div class="left-user" data-v-bbeef9a2${_scopeId}><div class="userLogo" style="${ssrRenderStyle("background-image:url(" + (item.intentionalAnalysisLog ? item.intentionalAnalysisLog : unref(_imports_1$1)) + ");")}" data-v-bbeef9a2${_scopeId}></div><div data-v-bbeef9a2${_scopeId}>${ssrInterpolate(item.intentionalAnalysisName)} `);
                  if (item.intentionalAnalysisType == "ROBOT" && !_ctx.$isEmpty(item.intentionalAnalysisLabel)) {
                    _push2(`<span data-v-bbeef9a2${_scopeId}> [${ssrInterpolate(item.intentionalAnalysisLabel)}]</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div></div>`);
                  _push2(ssrRenderComponent(_component_Poptip, {
                    placement: "bottom-start",
                    "word-wrap": true,
                    width: "360",
                    modelValue: item.visible,
                    "onUpdate:modelValue": ($event) => item.visible = $event,
                    onOnPopperShow: ($event) => getStaffList(item)
                  }, {
                    content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="tagList" data-v-bbeef9a2${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Spin, {
                          fix: "",
                          show: popLoading.value
                        }, null, _parent3, _scopeId2));
                        _push3(`<!--[-->`);
                        ssrRenderList(robotList.value, (itemData) => {
                          _push3(`<div class="tag-item" data-v-bbeef9a2${_scopeId2}><div class="userLogo" style="${ssrRenderStyle("background-image:url(" + (itemData.robotLogo ? itemData.robotLogo : itemData.userLogo ? itemData.userLogo : unref(_imports_1$1)) + ");")}" data-v-bbeef9a2${_scopeId2}></div><div data-v-bbeef9a2${_scopeId2}>${ssrInterpolate(item.intentionalAnalysisType == "ROBOT" ? itemData.name : itemData.userName)} `);
                          if (item.intentionalAnalysisType == "ROBOT" && !_ctx.$isEmpty(item.intentionalAnalysisLabel)) {
                            _push3(`<span data-v-bbeef9a2${_scopeId2}> [${ssrInterpolate(item.intentionalAnalysisLabel)}]</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</div></div>`);
                        });
                        _push3(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "tagList" }, [
                            createVNode(_component_Spin, {
                              fix: "",
                              show: popLoading.value
                            }, null, 8, ["show"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(robotList.value, (itemData) => {
                              return openBlock(), createBlock("div", {
                                class: "tag-item",
                                onClick: ($event) => onEmployee(index, item, itemData)
                              }, [
                                createVNode("div", {
                                  class: "userLogo",
                                  style: "background-image:url(" + (itemData.robotLogo ? itemData.robotLogo : itemData.userLogo ? itemData.userLogo : unref(_imports_1$1)) + ");"
                                }, null, 4),
                                createVNode("div", null, [
                                  createTextVNode(toDisplayString(item.intentionalAnalysisType == "ROBOT" ? itemData.name : itemData.userName) + " ", 1),
                                  item.intentionalAnalysisType == "ROBOT" && !_ctx.$isEmpty(item.intentionalAnalysisLabel) ? (openBlock(), createBlock("span", { key: 0 }, " [" + toDisplayString(item.intentionalAnalysisLabel) + "]", 1)) : createCommentVNode("", true)
                                ])
                              ], 8, ["onClick"]);
                            }), 256))
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="questions-right" data-v-bbeef9a2${_scopeId2}><div class="right-switch" data-v-bbeef9a2${_scopeId2}></div><div data-v-bbeef9a2${_scopeId2}>${ssrInterpolate(item.intentionalAnalysisType == "ROBOT" ? "\u6362\u4E2AAI\u7B54" : "\u6362\u4E2A\u4EBA\u7B54")}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "questions-right" }, [
                            createVNode("div", { class: "right-switch" }),
                            createVNode("div", null, toDisplayString(item.intentionalAnalysisType == "ROBOT" ? "\u6362\u4E2AAI\u7B54" : "\u6362\u4E2A\u4EBA\u7B54"), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
              if (unref(routing).isChatLoad) {
                _push2(`<div class="item clearfix left" data-v-bbeef9a2${_scopeId}><img class="chat-robot-logo"${ssrRenderAttr("src", unref(_imports_1))} alt="" data-v-bbeef9a2${_scopeId}><div class="item-content left-item" style="${ssrRenderStyle({ "min-width": "20px" })}" data-v-bbeef9a2${_scopeId}><span class="circle" data-v-bbeef9a2${_scopeId}></span></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(Quote, {
                ref_key: "quoteRef",
                ref: quoteRef
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_previewImg, {
                ref_key: "previewImgRef",
                ref: previewImgRef
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_cCreate, {
                ref_key: "cCreateRef",
                ref: cCreateRef
              }, null, _parent2, _scopeId));
            } else {
              return [
                renderSlot(_ctx.$slots, "recordTop", {}, void 0, true),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
                  return openBlock(), createBlock("div", {
                    class: ["item clearfix left", !_ctx.$isEmpty(item.robotInfo) ? "chatRobotInfo" : ""],
                    key: index
                  }, [
                    item.type == "SYSTEM" ? (openBlock(), createBlock("img", {
                      key: 0,
                      class: "chat-robot-logo",
                      src: item.log || item.robotLog || unref(robotLogo) || unref(_imports_1),
                      alt: ""
                    }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      class: "chat-robot-logo",
                      src: unref(routing).chatLogo,
                      alt: ""
                    }, null, 8, ["src"])),
                    item.type == "SYSTEM" && unref(isShowName) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "name"
                    }, toDisplayString(item.name), 1)) : createCommentVNode("", true),
                    createVNode("div", {
                      class: ["item-content", item.type == "SYSTEM" ? "left-item" : "blue"]
                    }, [
                      _ctx.$isEmpty(item.content) && !item.barrageData && _ctx.$isEmpty(item.robotInfo) ? (openBlock(), createBlock(_component_Spin, { key: 0 })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        index == 0 && unref(recordType) == "picedit" && item.chatType == "picedit" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", null, toDisplayString(item.content), 1),
                          createVNode("div", { class: "tag-list" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(robotPromptList), (iten) => {
                              return openBlock(), createBlock("div", {
                                class: "tag",
                                onClick: ($event) => chooseItem(iten)
                              }, toDisplayString(iten), 9, ["onClick"]);
                            }), 256))
                          ])
                        ], 64)) : createCommentVNode("", true),
                        item.type == "USER" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          item.chatType == "CHAT" || item.chatType == "" ? (openBlock(), createBlock("pre", { key: 0 }, toDisplayString(item.content), 1)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true),
                        item.type == "SYSTEM" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                          item.chatType == "CHAT" || item.chatType == "" ? (openBlock(), createBlock(contentCom, {
                            key: 0,
                            isShowTagView: index == 0 ? false : unref(isShowTagView),
                            showTagView: unref(showTagView) ? unref(showTagView) : unref(routing).showTagView,
                            content: item.content,
                            isLoad: unref(chatList).length - 1 == index && index != 0
                          }, null, 8, ["isShowTagView", "showTagView", "content", "isLoad"])) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true),
                        item.chatType == "DRAW" ? (openBlock(), createBlock(_component_Image, {
                          key: 3,
                          preview: true,
                          "preview-list": [item.content],
                          class: "cImage-img",
                          src: item.content,
                          fit: "cover"
                        }, null, 8, ["preview-list", "src"])) : createCommentVNode("", true),
                        item.chatType == "VIDEO" ? (openBlock(), createBlock("video", {
                          key: 4,
                          width: "658",
                          height: "444",
                          controls: "",
                          src: item.content
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        item.chatType == "MUSIC" ? (openBlock(), createBlock("video", {
                          key: 5,
                          width: "658",
                          height: "444",
                          controls: "",
                          src: item.content
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        item.chatType == "POSTER_TEMPLATE_ROBOT" ? (openBlock(), createBlock("div", { key: 6 }, [
                          createVNode("div", { style: { "margin-bottom": "8px" } }, toDisplayString(item.content), 1),
                          !_ctx.$isEmpty(item.list) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "item-content-list"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.list, (iten) => {
                              return openBlock(), createBlock("div", { class: "item-img" }, [
                                createVNode(_component_Image, {
                                  class: "img",
                                  src: iten.url,
                                  fit: "cover"
                                }, null, 8, ["src"]),
                                createVNode("div", {
                                  class: "cover",
                                  onClick: ($event) => previewImgRef.value.showFn(iten.url)
                                }, [
                                  createVNode("div", {
                                    class: "btn",
                                    onClick: withModifiers(($event) => toAdvanced(iten), ["stop"])
                                  }, "\u9AD8\u7EA7\u7F16\u8F91", 8, ["onClick"])
                                ], 8, ["onClick"])
                              ]);
                            }), 256))
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        item.type == "SYSTEM" && index != 0 ? (openBlock(), createBlock("div", {
                          key: 7,
                          class: "bottom-action"
                        }, [
                          createVNode("div", { class: "bottom-action-left" }, [
                            unref(isQuote) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              !_ctx.$isEmpty(item.quoteNum) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                item.quoteNum > 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "quoteNumbers",
                                  onClick: withModifiers(($event) => onQueryKnowledgeBase(item), ["stop"])
                                }, [
                                  createVNode("div", { class: "img" }),
                                  createVNode("div", null, toDisplayString(item.quoteNum) + "\u4E2A\u5F15\u7528", 1)
                                ], 8, ["onClick"])) : createCommentVNode("", true)
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                !_ctx.$isEmpty(item.importVectorCode) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "quoteNumbers",
                                  onClick: withModifiers(($event) => onQueryKnowledgeBase(item), ["stop"])
                                }, [
                                  createVNode("div", { class: "img" }),
                                  createVNode("div", null, toDisplayString(item.importVectorCode.length) + "\u4E2A\u5F15\u7528", 1)
                                ], 8, ["onClick"])) : createCommentVNode("", true)
                              ], 64))
                            ], 64)) : createCommentVNode("", true),
                            unref(router).currentRoute.value.path.indexOf("/enterprise/flow") != -1 && index != 0 ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "respond",
                              onClick: ($event) => toResponse(item)
                            }, "\u5B8C\u6574\u54CD\u5E94", 8, ["onClick"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "bottom-action-right" }, [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                _ctx.$isEmpty(item.barrageData) ? (openBlock(), createBlock(_component_Tooltip, {
                                  key: 0,
                                  content: "\u590D\u5236",
                                  placement: "bottom"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "copy",
                                      onClick: ($event) => toCopy(item)
                                    }, null, 8, ["onClick"]),
                                    createVNode("div", {
                                      class: "text",
                                      onClick: ($event) => toCopy(item)
                                    }, "\u590D\u5236", 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                unref(router).currentRoute.value.path.indexOf("/enterprise/train/chat") != -1 && index != 0 ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "division"
                                })) : createCommentVNode("", true),
                                unref(router).currentRoute.value.path.indexOf("/enterprise/train/chat") != -1 && index != 0 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                  createVNode(_component_Tooltip, {
                                    content: "\u70B9\u8D5E",
                                    placement: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        width: "20",
                                        onClick: withModifiers(($event) => toEvaluate(item, "GOOD_REVIEW"), ["stop"]),
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, [
                                        createVNode("path", {
                                          fill: item.aiRecordEvaluateType == "GOOD_REVIEW" ? "#0090F7" : "#879299",
                                          d: "M6.18147 6.23111L10.2421 2.67595C10.521 2.46058 10.8634 2.34375 11.2158 2.34375C12.0957 2.34375 12.8089 3.05701 12.8089 3.93687V5.89213C12.8089 6.21208 13.0683 6.47145 13.3883 6.47145H15.2221C15.3412 6.47145 15.4601 6.48196 15.5774 6.50284C16.6799 6.69908 17.4145 7.75194 17.2183 8.85443L15.9485 15.9873C15.7762 16.9548 14.935 17.6595 13.9523 17.6595H7.42074C6.30092 17.6595 5.39313 16.7517 5.39313 15.6319V7.8359C5.39313 7.52595 5.46419 7.22012 5.60086 6.94192C5.73752 6.66372 5.93615 6.42055 6.18147 6.23111ZM6.84142 15.6319C6.84142 15.9518 7.10079 16.2112 7.42074 16.2112H13.9523C14.2331 16.2112 14.4734 16.0099 14.5226 15.7334L15.7924 8.60058C15.8485 8.28558 15.6386 7.98479 15.3236 7.9287C15.2901 7.92274 15.2561 7.91974 15.2221 7.91974H13.3882C12.2684 7.91974 11.3606 7.01195 11.3606 5.89213V3.93687C11.3606 3.9098 11.353 3.88327 11.3387 3.86029C11.3244 3.83731 11.304 3.8188 11.2797 3.80687C11.2554 3.79493 11.2282 3.79005 11.2013 3.79276C11.1743 3.79548 11.1487 3.80569 11.1273 3.82224L7.06663 7.37739C6.99654 7.43152 6.9398 7.501 6.90076 7.58048C6.86172 7.65997 6.84142 7.74735 6.84142 7.8359V15.6319ZM4.19829 8.01026V16.0664C4.19829 17.0319 2.75 17.0319 2.75 16.0664V8.01026C2.75 7.04474 4.19829 7.04474 4.19829 8.01026Z"
                                        }, null, 8, ["fill"])
                                      ], 8, ["onClick"])),
                                      createVNode("div", {
                                        class: ["text", item.aiRecordEvaluateType == "GOOD_REVIEW" ? "text-active" : ""],
                                        onClick: withModifiers(($event) => toEvaluate(item, "GOOD_REVIEW"), ["stop"])
                                      }, "\u70B9\u8D5E", 10, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "division" }),
                                  createVNode(_component_Tooltip, {
                                    content: "\u70B9\u8E29",
                                    placement: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock("svg", {
                                        width: "20",
                                        onClick: ($event) => toEvaluate(item, "BAD_REVIEW"),
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, [
                                        createVNode("path", {
                                          fill: item.aiRecordEvaluateType == "BAD_REVIEW" ? "#0090F7" : "#879299",
                                          d: "M6.18092 13.7728L10.2416 17.328C10.5205 17.5433 10.8629 17.6602 11.2153 17.6602C12.0951 17.6602 12.8084 16.9469 12.8084 16.067V14.1118C12.8084 13.7918 13.0678 13.5325 13.3877 13.5325H15.2215C15.3407 13.5325 15.4596 13.5219 15.5769 13.5011C16.6794 13.3048 17.414 12.252 17.2177 11.1495L15.9479 4.01665C15.7757 3.04913 14.9344 2.34441 13.9517 2.34441H7.42018C6.30037 2.34441 5.39258 3.2522 5.39258 4.37202V12.168C5.39258 12.478 5.46364 12.7838 5.60031 13.062C5.73697 13.3402 5.9356 13.5834 6.18092 13.7728ZM6.84087 4.37202C6.84087 4.05208 7.10024 3.7927 7.42018 3.7927H13.9517C14.2325 3.7927 14.4728 3.99405 14.5221 4.2705L15.7918 11.4033C15.8479 11.7183 15.638 12.0191 15.323 12.0752C15.2895 12.0812 15.2555 12.0842 15.2215 12.0842H13.3877C12.2679 12.0842 11.3601 12.992 11.3601 14.1118V16.067C11.3601 16.0941 11.3525 16.1206 11.3382 16.1436C11.3239 16.1666 11.3034 16.1851 11.2791 16.197C11.2548 16.209 11.2276 16.2139 11.2007 16.2111C11.1738 16.2084 11.1481 16.1982 11.1267 16.1817L7.06608 12.6265C6.99599 12.5724 6.93925 12.5029 6.90021 12.4234C6.86116 12.3439 6.84087 12.2566 6.84087 12.168V4.37202Z"
                                        }, null, 8, ["fill"]),
                                        createVNode("path", {
                                          fill: item.aiRecordEvaluateType == "BAD_REVIEW" ? "#0090F7" : "#879299",
                                          d: "M4.19829 4.0093V12.0654C4.19829 13.0309 2.75 13.0309 2.75 12.0654V4.0093C2.75 3.04378 4.19829 3.04378 4.19829 4.0093Z"
                                        }, null, 8, ["fill"])
                                      ], 8, ["onClick"])),
                                      createVNode("div", {
                                        class: ["text", item.aiRecordEvaluateType == "BAD_REVIEW" ? "text-active" : ""],
                                        onClick: ($event) => toEvaluate(item, "BAD_REVIEW")
                                      }, "\u70B9\u8E29", 10, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ], 64)) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])) : createCommentVNode("", true),
                        item.type == "SYSTEM" && item.chatType !== "SUGGEST_ROBOT" && index != 0 ? (openBlock(), createBlock(Fragment, { key: 8 }, [
                          unref(proxy).$judgmentSorce() ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "tagView"
                          }, [
                            createVNode(_component_Button, {
                              type: "text",
                              class: "report",
                              size: "small",
                              onClick: toReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u4E3E\u62A5")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "tag" }, [
                              unref(jubao) ? (openBlock(), createBlock("img", {
                                key: 0,
                                style: { "height": "28px", "width": "auto" },
                                src: "https://hz-oss.chatdzq.com/file/chatdzq/js/jubao1.svg?v=" + Date.now()
                              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                style: { "height": "28px", "width": "auto" },
                                src: "https://hz-oss.chatdzq.com/file/chatdzq/js/jubao2.svg?v=" + Date.now()
                              }, null, 8, ["src"]))
                            ])
                          ])) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ], 64)),
                      item.barrageData ? (openBlock(), createBlock(barrageCom, {
                        key: 2,
                        list: item.barrageData,
                        onPrompt: chooseItem
                      }, null, 8, ["list"])) : createCommentVNode("", true),
                      index == 0 && unref(robotPromptList).length > 0 && _ctx.$isEmpty(unref(recordType)) && item.type == "SYSTEM" ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: "list"
                      }, [
                        createVNode("h3", null, "\u60A8\u53EF\u4EE5\u544A\u8BC9\u6211\u9700\u8981\u521B\u4F5C\u4EC0\u4E48\u5185\u5BB9\uFF1F\u6BD4\u5982\u4E0B\u9762\uFF1A"),
                        createVNode("ul", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(robotPromptList), (item2, index2) => {
                            return openBlock(), createBlock("li", {
                              key: index2,
                              onClick: ($event) => chooseItem(item2)
                            }, toDisplayString(item2), 9, ["onClick"]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ], 2),
                    item.chatType == "SUGGEST_ROBOT" && !_ctx.$isEmpty(item.robotInfo) ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "recRobots"
                    }, [
                      createVNode("p", { class: "gary" }, "\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u6211\u4E3A\u4F60\u627E\u5230\u4E86\u4EE5\u4E0B\u673A\u5668\u4EBA\uFF0C\u66F4\u597D\u7684\u89E3\u7B54\u8FD9\u65B9\u9762\u7684\u95EE\u9898"),
                      createVNode("div", {
                        class: "robotItem",
                        onClick: ($event) => onChatRobot(item.robotInfo)
                      }, [
                        !_ctx.$isEmpty(item.robotInfo.robotLog) ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: item.robotInfo.robotLog
                        }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                          key: 1,
                          src: _imports_1
                        })),
                        createVNode("h2", null, toDisplayString(item.robotInfo.robotName), 1),
                        createVNode("p", { class: "text-hide" }, toDisplayString(item.robotInfo.robotRemark), 1),
                        createVNode("em", { class: "right-arrow" })
                      ], 8, ["onClick"])
                    ])) : createCommentVNode("", true),
                    item.intentionalAnalysisFlag ? (openBlock(), createBlock("div", {
                      key: 4,
                      class: "item questionsCom clearfix left"
                    }, [
                      createVNode("div", { class: "questions" }, [
                        createVNode("div", { class: "questions-left" }, [
                          createVNode("div", { class: "left-user" }, [
                            createVNode("div", {
                              class: "userLogo",
                              style: "background-image:url(" + (item.intentionalAnalysisLog ? item.intentionalAnalysisLog : unref(_imports_1$1)) + ");"
                            }, null, 4),
                            createVNode("div", null, [
                              createTextVNode(toDisplayString(item.intentionalAnalysisName) + " ", 1),
                              item.intentionalAnalysisType == "ROBOT" && !_ctx.$isEmpty(item.intentionalAnalysisLabel) ? (openBlock(), createBlock("span", { key: 0 }, " [" + toDisplayString(item.intentionalAnalysisLabel) + "]", 1)) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        createVNode(_component_Poptip, {
                          placement: "bottom-start",
                          "word-wrap": true,
                          width: "360",
                          modelValue: item.visible,
                          "onUpdate:modelValue": ($event) => item.visible = $event,
                          onOnPopperShow: ($event) => getStaffList(item)
                        }, {
                          content: withCtx(() => [
                            createVNode("div", { class: "tagList" }, [
                              createVNode(_component_Spin, {
                                fix: "",
                                show: popLoading.value
                              }, null, 8, ["show"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(robotList.value, (itemData) => {
                                return openBlock(), createBlock("div", {
                                  class: "tag-item",
                                  onClick: ($event) => onEmployee(index, item, itemData)
                                }, [
                                  createVNode("div", {
                                    class: "userLogo",
                                    style: "background-image:url(" + (itemData.robotLogo ? itemData.robotLogo : itemData.userLogo ? itemData.userLogo : unref(_imports_1$1)) + ");"
                                  }, null, 4),
                                  createVNode("div", null, [
                                    createTextVNode(toDisplayString(item.intentionalAnalysisType == "ROBOT" ? itemData.name : itemData.userName) + " ", 1),
                                    item.intentionalAnalysisType == "ROBOT" && !_ctx.$isEmpty(item.intentionalAnalysisLabel) ? (openBlock(), createBlock("span", { key: 0 }, " [" + toDisplayString(item.intentionalAnalysisLabel) + "]", 1)) : createCommentVNode("", true)
                                  ])
                                ], 8, ["onClick"]);
                              }), 256))
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode("div", { class: "questions-right" }, [
                              createVNode("div", { class: "right-switch" }),
                              createVNode("div", null, toDisplayString(item.intentionalAnalysisType == "ROBOT" ? "\u6362\u4E2AAI\u7B54" : "\u6362\u4E2A\u4EBA\u7B54"), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue", "onOnPopperShow"])
                      ])
                    ])) : createCommentVNode("", true)
                  ], 2);
                }), 128)),
                unref(routing).isChatLoad ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "item clearfix left"
                }, [
                  createVNode("img", {
                    class: "chat-robot-logo",
                    src: unref(_imports_1),
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    class: "item-content left-item",
                    style: { "min-width": "20px" }
                  }, [
                    createVNode("span", { class: "circle" })
                  ])
                ])) : createCommentVNode("", true),
                createVNode(Quote, {
                  ref_key: "quoteRef",
                  ref: quoteRef
                }, null, 512),
                createVNode(_component_previewImg, {
                  ref_key: "previewImgRef",
                  ref: previewImgRef
                }, null, 512),
                createVNode(_component_cCreate, {
                  ref_key: "cCreateRef",
                  ref: cCreateRef
                }, null, 512)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cChat/record.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const recordCom = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bbeef9a2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "addAgent",
  __ssrInlineRender: true,
  setup(__props) {
    const { Modal } = ipkg;
    const single = ref(false);
    const routing = getRouting();
    const content = ref("");
    const robotCode = ref("");
    const robotInfo = ref({});
    const modal = ref(false);
    const loading2 = ref(false);
    const selectCode = ref("");
    const uploadType = ref("");
    const consumeEnergy = ref(null);
    const tableContent = ref(null);
    ref(null);
    const knowledgeBaseFilesProcessingFlag = ref(false);
    const params = ref({
      name: "",
      robotLogo: "",
      robotRemark: "",
      welcomeContent: "",
      promptText: "",
      robotPromptText: ""
    });
    const prompParams = ref({
      roleName: "",
      rolePrompt: ""
    });
    const isLoading = ref(false);
    const groupId = ref("");
    const chatList = ref([]);
    const robotPromptList = ref([]);
    const btnLoading = ref(false);
    const loading = ref(false);
    const robotPromptText = ref([]);
    const automaticModalState = ref(false);
    const resourceCodeList = ref([]);
    const deletedKnowledgeBaseFilesCodeList = ref([]);
    const queryKnowledgeBaseFilesList = ref([]);
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const init = () => {
      var _a2;
      var _a;
      robotCode.value = (_a2 = (_a = router.currentRoute.value.query) == null ? void 0 : _a.code) != null ? _a2 : "";
      onRobotInit();
    };
    const rollBottom = async () => {
    };
    const onRobotInit = () => {
      chatList.value = [];
      if (!proxy.$isEmpty(robotCode.value)) {
        let data = {
          code: robotCode.value
        };
        btnLoading.value = true;
        proxy.$api.space_robotGetRobotInfo(data).then((res) => {
          robotInfo.value = res.data;
          params.value = {
            name: res.data.name,
            robotLogo: res.data.robotLogo,
            robotRemark: res.data.robotRemark,
            welcomeContent: res.data.welcomeContent,
            promptText: res.data.promptText,
            robotPromptText: res.data.robotPromptText
          };
          knowledgeBaseFilesProcessingFlag.value = res.data.knowledgeBaseFilesProcessingFlag;
          consumeEnergy.value = res.data.consumeEnergy;
          queryKnowledgeBaseFilesList.value = [];
          resourceCodeList.value = [];
          deletedKnowledgeBaseFilesCodeList.value = [];
          if (!proxy.$isEmpty(res.data.queryKnowledgeBaseFilesList)) {
            res.data.queryKnowledgeBaseFilesList.forEach((item, i) => {
              queryKnowledgeBaseFilesList.value.push({
                code: item.code,
                name: item.name,
                url: item.url,
                type: "",
                isSelect: false,
                learningState: item.learningState
              });
              if (i == res.data.queryKnowledgeBaseFilesList.length - 1) {
                checkList();
              }
            });
          }
          if (!proxy.$isEmpty(res.data.robotPromptText)) {
            robotPromptText.value = res.data.robotPromptText.split("@").map((item) => ({ name: item }));
          }
          if (!proxy.$isEmpty(res.data.robotPromptText)) {
            robotPromptList.value = res.data.robotPromptText.split("@");
          }
          if (!proxy.$isEmpty(robotInfo.value.welcomeContent) || !proxy.$isEmpty(robotInfo.value.robotPromptText)) {
            chatList.value.unshift({
              content: robotInfo.value.welcomeContent,
              type: "SYSTEM",
              chatType: "CHAT"
            });
          }
          btnLoading.value = false;
          onInitGroup();
        }).catch(() => {
          btnLoading.value = false;
        });
      }
    };
    const chooseAll = () => {
      queryKnowledgeBaseFilesList.value.forEach((item) => {
        item.isSelect = single.value;
      });
      checkList();
    };
    const deleteOne = (i) => {
      if (queryKnowledgeBaseFilesList.value[i].type == "file") {
        resourceCodeList.value.forEach((item, j) => {
          if (item == queryKnowledgeBaseFilesList.value[i].code) {
            resourceCodeList.value.splice(j, 1);
            queryKnowledgeBaseFilesList.value.splice(i, 1);
            checkList();
          }
        });
      } else {
        deletedKnowledgeBaseFilesCodeList.value.push(queryKnowledgeBaseFilesList.value[i].code);
        queryKnowledgeBaseFilesList.value.splice(i, 1);
        checkList();
      }
    };
    const chooseDelete = () => {
      if (queryKnowledgeBaseFilesList.value.length == 0) {
        proxy.$Message.error("\u8BF7\u9009\u62E9");
        return;
      }
      let arr = [];
      let arr2 = JSON.parse(JSON.stringify(queryKnowledgeBaseFilesList.value));
      let arr3 = [];
      queryKnowledgeBaseFilesList.value.forEach((item, i) => {
        if (item.isSelect == true) {
          arr.push(item.code);
        }
        if (i == queryKnowledgeBaseFilesList.value.length - 1) {
          if (arr.length == 0) {
            proxy.$Message.error("\u8BF7\u9009\u62E9");
            return;
          }
          Modal.confirm({
            okText: "\u786E\u5B9A",
            cancelText: "\u53D6\u6D88",
            content: "\u662F\u5426\u5220\u9664\u6240\u9009\u6570\u636E?",
            onOk: () => {
              arr2.forEach((iten, j) => {
                if (iten.isSelect != true) {
                  arr3.push(iten);
                } else {
                  if (iten.type != "file") {
                    deletedKnowledgeBaseFilesCodeList.value.push(iten.code);
                  } else {
                    let index = resourceCodeList.value.indexOf(iten.code);
                    if (index != -1) {
                      resourceCodeList.value.splice(index, 1);
                    }
                  }
                }
                if (j == arr2.length - 1) {
                  queryKnowledgeBaseFilesList.value = arr3;
                  checkList();
                }
              });
            }
          });
        }
      });
    };
    const checkList = () => {
      if (queryKnowledgeBaseFilesList.value.length == 0) {
        single.value = false;
        return;
      }
      let arr = [];
      queryKnowledgeBaseFilesList.value.forEach((item, i) => {
        if (item.isSelect == true) {
          arr.push(item);
        }
        if (i == queryKnowledgeBaseFilesList.value.length - 1) {
          if (arr.length == queryKnowledgeBaseFilesList.value.length) {
            single.value = true;
          } else {
            single.value = false;
          }
        }
      });
    };
    const onOut = () => {
      router.go(-1);
    };
    const changeImg = (type) => {
      var _a;
      uploadType.value = type;
      const input = (_a = document.getElementById("cImage-upload")) == null ? void 0 : _a.getElementsByClassName("upload-input")[0];
      input.click();
    };
    const uploadSuccess = (e) => {
      if (e && e.length > 0) {
        if (uploadType.value == "logo") {
          params.value.robotLogo = e[0].url;
        }
        if (uploadType.value == "file") {
          let fileList = [];
          e.forEach((item, i) => {
            fileList.push({
              resourceName: item.name,
              resourceCode: item.code,
              resourceSize: item.size
            });
            if (i == e.length - 1) {
              let data = {
                resourceList: fileList
              };
              proxy.$api.resourceUploadCallback(data).then(() => {
                queryKnowledgeBaseFilesList.value.push({
                  name: e[0].name,
                  code: e[0].code,
                  url: e[0].url,
                  type: "file",
                  isSelect: false
                });
                resourceCodeList.value.push(e[0].code);
                checkList();
                rollBottom();
              });
            }
          });
        }
      }
    };
    const onAddPromp = () => {
      robotPromptText.value.push({
        name: ""
      });
    };
    const onPromptSubmit = () => {
      if (proxy.$isEmpty(prompParams.value.roleName)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0");
        return;
      }
      if (proxy.$isEmpty(prompParams.value.rolePrompt)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u89D2\u8272\u9700\u6C42");
        return;
      }
      let data = {
        roleName: prompParams.value.roleName,
        rolePrompt: prompParams.value.rolePrompt
      };
      loading.value = true;
      proxy.$api.generateAiRobotInfo(data).then((res) => {
        loading.value = false;
        params.value = {
          name: res.data.name,
          robotLogo: params.value.robotLogo ? params.value.robotLogo : res.data.robotLogo,
          robotRemark: res.data.robotRemark,
          welcomeContent: res.data.welcomeContent,
          promptText: res.data.promptText,
          robotPromptText: res.data.robotPromptText
        };
        if (!proxy.$isEmpty(res.data.robotPromptText)) {
          robotPromptText.value = res.data.robotPromptText.split("@").map((item) => ({ name: item }));
        }
        automaticModalState.value = false;
        routing.getUserPoints(proxy);
      }, (ref2) => {
        loading.value = false;
      });
    };
    const toDelete = (record) => {
      if (record) {
        selectCode.value = record.code;
        modal.value = true;
      } else {
        loading2.value = true;
        proxy.$api.space_robotDel({
          code: selectCode.value
        }).then(() => {
          proxy.$Message.success("\u5DF2\u5220\u9664");
          loading2.value = false;
          onOut();
        }).catch(() => {
          loading2.value = false;
        });
      }
    };
    const onAgentSubmit = proxy.$debounce(() => {
      if (proxy.$isEmpty(params.value.robotLogo)) {
        proxy.$Message.error("\u8BF7\u4E0A\u4F20\u5934\u50CF");
        return;
      }
      if (proxy.$isEmpty(params.value.name)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u540D\u79F0");
        return;
      }
      if (proxy.$isEmpty(params.value.welcomeContent)) {
        proxy.$Message.error("\u8BF7\u8F93\u5165\u6B22\u8FCE\u8BED");
        return;
      }
      if (proxy.$isEmpty(params.value.promptText)) {
        proxy.$Message.error("\u8BF7\u8BBE\u5B9A\u89D2\u8272Prompt");
        return;
      }
      if (queryKnowledgeBaseFilesList.value.length > 20) {
        proxy.$Message.error("\u6700\u591A20\u4E2A\u6587\u4EF6");
        return;
      }
      let data = {
        templateCode: "123",
        robotLogo: params.value.robotLogo,
        name: params.value.name,
        robotRemark: params.value.robotRemark,
        welcomeContent: params.value.welcomeContent,
        promptText: params.value.promptText,
        robotPromptText: robotPromptText.value.map((item) => item.name).join("@"),
        resourceCodeList: resourceCodeList.value,
        deletedKnowledgeBaseFilesCodeList: deletedKnowledgeBaseFilesCodeList.value
      };
      let apiName = "space_robotAdd";
      if (!proxy.$isEmpty(robotCode.value)) {
        apiName = "space_robotModify";
        data.code = robotInfo.value.code;
        data.llmCode = robotInfo.value.llmCode;
      }
      btnLoading.value = true;
      proxy.$api[apiName](data).then((res) => {
        proxy.$Message.success(apiName == "space_robotAdd" ? "\u521B\u5EFA\u6210\u529F" : "\u4FEE\u6539\u6210\u529F");
        if (apiName == "space_robotAdd") {
          robotCode.value = res.data;
        }
        btnLoading.value = false;
        router.replace({
          path: router.currentRoute.value.path,
          query: {
            code: robotCode.value
          }
        });
        onRobotInit();
      }).catch(() => {
        btnLoading.value = false;
      });
    }, 300);
    const getContent = (record) => {
      content.value = record;
    };
    const onInitGroup = () => {
      routing.abortReadingStream();
      let data = {
        type: robotInfo.value.type,
        robotCode: robotCode.value
      };
      proxy.$api.ai_bulidChatGroupId(data).then((res) => {
        groupId.value = res.data;
      });
    };
    const onSubmit = (form) => {
      let data = {
        content: content.value,
        groupId: groupId.value,
        robotCode: robotCode.value
      };
      chatList.value.push(
        {
          content: content.value,
          type: "USER",
          chatType: "CHAT"
        }
      );
      content.value = "";
      routing.setAiChat(proxy, data);
    };
    watch(
      () => routing.getChatMsg,
      (item) => {
        if (item && item.content) {
          proxy.$processChatData(chatList.value, item);
        }
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      const _component_Icon = resolveComponent("Icon");
      const _component_Form = resolveComponent("Form");
      const _component_FormItem = resolveComponent("FormItem");
      const _component_ClientOnly = __nuxt_component_1$1$1;
      const _component_Input = resolveComponent("Input");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_ossUploader = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-main" }, _attrs))} data-v-e21be8de><div class="layout-main-right" data-v-e21be8de><div class="layout-main-right-content" data-v-e21be8de><div class="addAgentPages" data-v-e21be8de><div class="agent-head clearfix" data-v-e21be8de><div class="fl left" data-v-e21be8de><div class="out" data-v-e21be8de><img${ssrRenderAttr("src", _imports_0)} data-v-e21be8de></div><div class="robot-info" data-v-e21be8de>`);
      if (!_ctx.$isEmpty(params.value.robotLogo)) {
        _push(`<img${ssrRenderAttr("src", params.value.robotLogo)} alt="" data-v-e21be8de>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1)} data-v-e21be8de>`);
      }
      _push(` ${ssrInterpolate(params.value.name || "\u672A\u586B\u5199\u540D\u79F0")}</div></div><div class="fr right" data-v-e21be8de>`);
      if (!_ctx.$isEmpty(robotCode.value)) {
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => toDelete({ code: robotCode.value })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { type: "ios-paper-outline" }, null, _parent2, _scopeId));
              _push2(` \u5220\u9664 `);
            } else {
              return [
                createVNode(_component_Icon, { type: "ios-paper-outline" }),
                createTextVNode(" \u5220\u9664 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Button, {
        class: "ml-16",
        type: "primary",
        loading: btnLoading.value,
        disabled: knowledgeBaseFilesProcessingFlag.value,
        onClick: unref(onAgentSubmit)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { type: "ios-document-outline" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(knowledgeBaseFilesProcessingFlag.value ? "\u77E5\u8BC6\u5E93\u5BFC\u5165\u4E2D..." : "\u4FDD\u5B58")}`);
          } else {
            return [
              createVNode(_component_Icon, { type: "ios-document-outline" }),
              createTextVNode(" " + toDisplayString(knowledgeBaseFilesProcessingFlag.value ? "\u77E5\u8BC6\u5E93\u5BFC\u5165\u4E2D..." : "\u4FDD\u5B58"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="agent-content clearfix" data-v-e21be8de><div class="agent-content-left fl" data-v-e21be8de><div class="left-head" data-v-e21be8de> \u4E2A\u6027\u5316\u914D\u7F6E\u667A\u80FD\u4F53 <div class="automatic" data-v-e21be8de><span data-v-e21be8de><img${ssrRenderAttr("src", _imports_2)} data-v-e21be8de> AI\u81EA\u52A8\u751F\u6210\u914D\u7F6E `);
      _push(ssrRenderComponent(_component_Icon, { type: "ios-arrow-forward" }, null, _parent));
      _push(`</span></div></div>`);
      _push(ssrRenderComponent(_component_Form, {
        model: params.value,
        "label-position": "top"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, {
              label: "\u667A\u80FD\u4F53Logo",
              class: "required"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="robotLogo" data-v-e21be8de${_scopeId2}>`);
                  if (!params.value.robotLogo) {
                    _push3(`<img class="logo"${ssrRenderAttr("src", _imports_3)} data-v-e21be8de${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<img class="logo"${ssrRenderAttr("src", params.value.robotLogo)} data-v-e21be8de${_scopeId2}><img class="edit"${ssrRenderAttr("src", _imports_4)} alt="" data-v-e21be8de${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "robotLogo",
                      onClick: ($event) => changeImg("logo")
                    }, [
                      !params.value.robotLogo ? (openBlock(), createBlock("img", {
                        key: 0,
                        class: "logo",
                        src: _imports_3
                      })) : createCommentVNode("", true),
                      createVNode("img", {
                        class: "logo",
                        src: params.value.robotLogo
                      }, null, 8, ["src"]),
                      createVNode("img", {
                        class: "edit",
                        src: _imports_4,
                        alt: ""
                      })
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormItem, {
              label: "\u540D\u79F0",
              class: "required"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0",
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0",
                            modelValue: params.value.name,
                            "onUpdate:modelValue": ($event) => params.value.name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0",
                          modelValue: params.value.name,
                          "onUpdate:modelValue": ($event) => params.value.name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormItem, {
              label: "\u7B80\u4ECB",
              class: "required"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          type: "textarea",
                          placeholder: "\u7B80\u77ED\u4ECB\u7ECD\u667A\u80FD\u4F53\u3002\u6BD4\u5982\uFF1A\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u82F1\u8BED\u8001\u5E08\uFF0C\u62E5\u6709\u6FC0\u53D1\u5B66\u751F\u70ED\u60C5\u7684\u6559\u5B66\u65B9\u6CD5\u3002\u4F60\u5584\u4E8E\u8FD0\u7528\u5E7D\u9ED8\u548C\u5B9E\u9645\u5E94\u7528\u6848\u4F8B\uFF0C\u4F7F\u5BF9\u8BDD\u5145\u6EE1\u8DA3\u5473\u3002",
                          modelValue: params.value.robotRemark,
                          "onUpdate:modelValue": ($event) => params.value.robotRemark = $event,
                          rows: 3
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            type: "textarea",
                            placeholder: "\u7B80\u77ED\u4ECB\u7ECD\u667A\u80FD\u4F53\u3002\u6BD4\u5982\uFF1A\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u82F1\u8BED\u8001\u5E08\uFF0C\u62E5\u6709\u6FC0\u53D1\u5B66\u751F\u70ED\u60C5\u7684\u6559\u5B66\u65B9\u6CD5\u3002\u4F60\u5584\u4E8E\u8FD0\u7528\u5E7D\u9ED8\u548C\u5B9E\u9645\u5E94\u7528\u6848\u4F8B\uFF0C\u4F7F\u5BF9\u8BDD\u5145\u6EE1\u8DA3\u5473\u3002",
                            modelValue: params.value.robotRemark,
                            "onUpdate:modelValue": ($event) => params.value.robotRemark = $event,
                            rows: 3
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          type: "textarea",
                          placeholder: "\u7B80\u77ED\u4ECB\u7ECD\u667A\u80FD\u4F53\u3002\u6BD4\u5982\uFF1A\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u82F1\u8BED\u8001\u5E08\uFF0C\u62E5\u6709\u6FC0\u53D1\u5B66\u751F\u70ED\u60C5\u7684\u6559\u5B66\u65B9\u6CD5\u3002\u4F60\u5584\u4E8E\u8FD0\u7528\u5E7D\u9ED8\u548C\u5B9E\u9645\u5E94\u7528\u6848\u4F8B\uFF0C\u4F7F\u5BF9\u8BDD\u5145\u6EE1\u8DA3\u5473\u3002",
                          modelValue: params.value.robotRemark,
                          "onUpdate:modelValue": ($event) => params.value.robotRemark = $event,
                          rows: 3
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormItem, {
              label: "\u89D2\u8272\u8BBE\u5B9A",
              class: "required"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          type: "textarea",
                          placeholder: "\u6BD4\u5982\uFF1A\u4F5C\u4E3A\u4E00\u540D\u4E2D\u6587\u5199\u4F5C\u6539\u8FDB\u52A9\u7406\uFF0C\u4F60\u7684\u4EFB\u52A1\u662F\u6539\u8FDB\u6240\u63D0\u4F9B\u6587\u672C\u7684\u8BED\u6CD5\u3001\u6E05\u6670\u3001\u7B80\u6D01\u548C\u6574\u4F53\u53EF\u8BFB\u6027\uFF0C\u540C\u65F6\u5206\u89E3\u957F\u53E5\uFF0C\u51CF\u5C11\u91CD\u590D\uFF0C\u5E76\u63D0\u4F9B\u6539\u8FDB\u5EFA\u8BAE\u3002\u8BF7\u53EA\u63D0\u4F9B\u6587\u672C\u7684\u66F4\u6B63\u7248\u672C\uFF0C\u907F\u514D\u5305\u62EC\u89E3\u91CA\u3002",
                          modelValue: params.value.promptText,
                          "onUpdate:modelValue": ($event) => params.value.promptText = $event,
                          rows: 3
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            type: "textarea",
                            placeholder: "\u6BD4\u5982\uFF1A\u4F5C\u4E3A\u4E00\u540D\u4E2D\u6587\u5199\u4F5C\u6539\u8FDB\u52A9\u7406\uFF0C\u4F60\u7684\u4EFB\u52A1\u662F\u6539\u8FDB\u6240\u63D0\u4F9B\u6587\u672C\u7684\u8BED\u6CD5\u3001\u6E05\u6670\u3001\u7B80\u6D01\u548C\u6574\u4F53\u53EF\u8BFB\u6027\uFF0C\u540C\u65F6\u5206\u89E3\u957F\u53E5\uFF0C\u51CF\u5C11\u91CD\u590D\uFF0C\u5E76\u63D0\u4F9B\u6539\u8FDB\u5EFA\u8BAE\u3002\u8BF7\u53EA\u63D0\u4F9B\u6587\u672C\u7684\u66F4\u6B63\u7248\u672C\uFF0C\u907F\u514D\u5305\u62EC\u89E3\u91CA\u3002",
                            modelValue: params.value.promptText,
                            "onUpdate:modelValue": ($event) => params.value.promptText = $event,
                            rows: 3
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          type: "textarea",
                          placeholder: "\u6BD4\u5982\uFF1A\u4F5C\u4E3A\u4E00\u540D\u4E2D\u6587\u5199\u4F5C\u6539\u8FDB\u52A9\u7406\uFF0C\u4F60\u7684\u4EFB\u52A1\u662F\u6539\u8FDB\u6240\u63D0\u4F9B\u6587\u672C\u7684\u8BED\u6CD5\u3001\u6E05\u6670\u3001\u7B80\u6D01\u548C\u6574\u4F53\u53EF\u8BFB\u6027\uFF0C\u540C\u65F6\u5206\u89E3\u957F\u53E5\uFF0C\u51CF\u5C11\u91CD\u590D\uFF0C\u5E76\u63D0\u4F9B\u6539\u8FDB\u5EFA\u8BAE\u3002\u8BF7\u53EA\u63D0\u4F9B\u6587\u672C\u7684\u66F4\u6B63\u7248\u672C\uFF0C\u907F\u514D\u5305\u62EC\u89E3\u91CA\u3002",
                          modelValue: params.value.promptText,
                          "onUpdate:modelValue": ($event) => params.value.promptText = $event,
                          rows: 3
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormItem, {
              label: "\u6B22\u8FCE\u8BED",
              class: "required"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          type: "textarea",
                          placeholder: "\u667A\u80FD\u4F53\u7684\u5F00\u573A\u767D\u3002\u6BD4\u5982\uFF1A\u6211\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u82F1\u8BED\u8001\u5E08\uFF0C\u4F60\u6709\u4EC0\u4E48\u5173\u4E8E\u82F1\u8BED\u7684\u95EE\u9898\u90FD\u53EF\u4EE5\u95EE\u6211\uFF5E",
                          modelValue: params.value.welcomeContent,
                          "onUpdate:modelValue": ($event) => params.value.welcomeContent = $event,
                          rows: 3
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            type: "textarea",
                            placeholder: "\u667A\u80FD\u4F53\u7684\u5F00\u573A\u767D\u3002\u6BD4\u5982\uFF1A\u6211\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u82F1\u8BED\u8001\u5E08\uFF0C\u4F60\u6709\u4EC0\u4E48\u5173\u4E8E\u82F1\u8BED\u7684\u95EE\u9898\u90FD\u53EF\u4EE5\u95EE\u6211\uFF5E",
                            modelValue: params.value.welcomeContent,
                            "onUpdate:modelValue": ($event) => params.value.welcomeContent = $event,
                            rows: 3
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, {
                          type: "textarea",
                          placeholder: "\u667A\u80FD\u4F53\u7684\u5F00\u573A\u767D\u3002\u6BD4\u5982\uFF1A\u6211\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u82F1\u8BED\u8001\u5E08\uFF0C\u4F60\u6709\u4EC0\u4E48\u5173\u4E8E\u82F1\u8BED\u7684\u95EE\u9898\u90FD\u53EF\u4EE5\u95EE\u6211\uFF5E",
                          modelValue: params.value.welcomeContent,
                          "onUpdate:modelValue": ($event) => params.value.welcomeContent = $event,
                          rows: 3
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormItem, {
              label: "\u63D0\u793A\u8BCD",
              class: "promptList required"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="add-prompt" data-v-e21be8de${_scopeId2}>\u6DFB\u52A0</span>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(robotPromptText.value, (item, index) => {
                          _push4(`<div class="prompt" data-v-e21be8de${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Input, {
                            placeholder: "\u5C55\u793A\u5728\u5F00\u573A\u767D\u4E0B\u65B9\uFF0C\u6BD4\u5982\uFF1A\u4F60\u662F\u8C01",
                            modelValue: item.name,
                            "onUpdate:modelValue": ($event) => item.name = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`<img class="del"${ssrRenderAttr("src", _imports_5)} data-v-e21be8de${_scopeId3}></div>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(robotPromptText.value, (item, index) => {
                            return openBlock(), createBlock("div", {
                              class: "prompt",
                              key: index
                            }, [
                              createVNode(_component_Input, {
                                placeholder: "\u5C55\u793A\u5728\u5F00\u573A\u767D\u4E0B\u65B9\uFF0C\u6BD4\u5982\uFF1A\u4F60\u662F\u8C01",
                                modelValue: item.name,
                                "onUpdate:modelValue": ($event) => item.name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("img", {
                                class: "del",
                                onClick: ($event) => robotPromptText.value.splice(index, 1),
                                src: _imports_5
                              }, null, 8, ["onClick"])
                            ]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", {
                      class: "add-prompt",
                      onClick: onAddPromp
                    }, "\u6DFB\u52A0"),
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(robotPromptText.value, (item, index) => {
                          return openBlock(), createBlock("div", {
                            class: "prompt",
                            key: index
                          }, [
                            createVNode(_component_Input, {
                              placeholder: "\u5C55\u793A\u5728\u5F00\u573A\u767D\u4E0B\u65B9\uFF0C\u6BD4\u5982\uFF1A\u4F60\u662F\u8C01",
                              modelValue: item.name,
                              "onUpdate:modelValue": ($event) => item.name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("img", {
                              class: "del",
                              onClick: ($event) => robotPromptText.value.splice(index, 1),
                              src: _imports_5
                            }, null, 8, ["onClick"])
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormItem, {
              label: "\u77E5\u8BC6\u5E93\u6587\u4EF6",
              class: "knowledge"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="desc mb-10" data-v-e21be8de${_scopeId2}> \u6784\u5EFA\u77E5\u8BC6\u5E93\uFF0C\u4E3A\u667A\u80FD\u4F53\u63D0\u4F9B\u4E2A\u6027\u5316\u7684\u77E5\u8BC6\u8F93\u5165\uFF0C\u66F4\u597D\u7684\u89E3\u51B3\u95EE\u9898\u3002<br data-v-e21be8de${_scopeId2}> \u652F\u6301pdf\uFF08\u4E0D\u652F\u6301\u626B\u63CF\u4EF6\uFF09\u3001doc\u3001docx\u3001txt\u7B49\u6587\u4EF6\u683C\u5F0F\uFF0C\u4E00\u6B21\u6700\u591A\u4E0A\u4F2020\u4E2A\u6587\u4EF6\uFF0C\u6574\u4F53\u77E5\u8BC6\u5E93\u6700\u591A\u652F\u6301100\u4E2A\u6587\u4EF6\uFF08\u6BCF\u4E2A100MB\uFF09\uFF0C\u77E5\u8BC6\u5E93\u603B\u5B57\u6570\u4E0D\u8D85\u8FC7500\u4E07\u5B57 </p><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "justify-content": "space-between" })}" data-v-e21be8de${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mb-10",
                    onClick: ($event) => changeImg("file"),
                    disabled: knowledgeBaseFilesProcessingFlag.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(knowledgeBaseFilesProcessingFlag.value ? "\u77E5\u8BC6\u5E93\u5BFC\u5165\u4E2D..." : "\u4E0A\u4F20\u77E5\u8BC6\u5E93")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(knowledgeBaseFilesProcessingFlag.value ? "\u77E5\u8BC6\u5E93\u5BFC\u5165\u4E2D..." : "\u4E0A\u4F20\u77E5\u8BC6\u5E93"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: "mb-10",
                    type: "primary",
                    onClick: init,
                    loading: btnLoading.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u5237\u65B0`);
                      } else {
                        return [
                          createTextVNode("\u5237\u65B0")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (queryKnowledgeBaseFilesList.value.length > 0) {
                    _push3(`<div class="table" data-v-e21be8de${_scopeId2}><div class="table-top" data-v-e21be8de${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Checkbox, {
                      modelValue: single.value,
                      "onUpdate:modelValue": ($event) => single.value = $event,
                      onOnChange: chooseAll
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u5168\u9009`);
                        } else {
                          return [
                            createTextVNode("\u5168\u9009")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="top-state" data-v-e21be8de${_scopeId2}>\u72B6\u6001</div><div class="top-delete" data-v-e21be8de${_scopeId2}>\u5220\u9664\u6587\u4EF6</div></div><div class="table-content" data-v-e21be8de${_scopeId2}><!--[-->`);
                    ssrRenderList(queryKnowledgeBaseFilesList.value, (item, i) => {
                      _push3(`<div class="content-item" data-v-e21be8de${_scopeId2}><div class="item-left" data-v-e21be8de${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Checkbox, {
                        modelValue: queryKnowledgeBaseFilesList.value[i].isSelect,
                        "onUpdate:modelValue": ($event) => queryKnowledgeBaseFilesList.value[i].isSelect = $event,
                        onOnChange: checkList
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="left-name text-hide" data-v-e21be8de${_scopeId3}>${ssrInterpolate(item.name)}</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "left-name text-hide" }, toDisplayString(item.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div data-v-e21be8de${_scopeId2}>${ssrInterpolate(item.learningState)}</div><div class="item-right" data-v-e21be8de${_scopeId2}><img${ssrRenderAttr("src", _imports_6)} data-v-e21be8de${_scopeId2}></div></div>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("p", { class: "desc mb-10" }, [
                      createTextVNode(" \u6784\u5EFA\u77E5\u8BC6\u5E93\uFF0C\u4E3A\u667A\u80FD\u4F53\u63D0\u4F9B\u4E2A\u6027\u5316\u7684\u77E5\u8BC6\u8F93\u5165\uFF0C\u66F4\u597D\u7684\u89E3\u51B3\u95EE\u9898\u3002"),
                      createVNode("br"),
                      createTextVNode(" \u652F\u6301pdf\uFF08\u4E0D\u652F\u6301\u626B\u63CF\u4EF6\uFF09\u3001doc\u3001docx\u3001txt\u7B49\u6587\u4EF6\u683C\u5F0F\uFF0C\u4E00\u6B21\u6700\u591A\u4E0A\u4F2020\u4E2A\u6587\u4EF6\uFF0C\u6574\u4F53\u77E5\u8BC6\u5E93\u6700\u591A\u652F\u6301100\u4E2A\u6587\u4EF6\uFF08\u6BCF\u4E2A100MB\uFF09\uFF0C\u77E5\u8BC6\u5E93\u603B\u5B57\u6570\u4E0D\u8D85\u8FC7500\u4E07\u5B57 ")
                    ]),
                    createVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "space-between" } }, [
                      createVNode(_component_Button, {
                        class: "mb-10",
                        onClick: ($event) => changeImg("file"),
                        disabled: knowledgeBaseFilesProcessingFlag.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(knowledgeBaseFilesProcessingFlag.value ? "\u77E5\u8BC6\u5E93\u5BFC\u5165\u4E2D..." : "\u4E0A\u4F20\u77E5\u8BC6\u5E93"), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"]),
                      createVNode(_component_Button, {
                        class: "mb-10",
                        type: "primary",
                        onClick: init,
                        loading: btnLoading.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5237\u65B0")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    queryKnowledgeBaseFilesList.value.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "table"
                    }, [
                      createVNode("div", { class: "table-top" }, [
                        createVNode(_component_Checkbox, {
                          modelValue: single.value,
                          "onUpdate:modelValue": ($event) => single.value = $event,
                          onOnChange: chooseAll
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u5168\u9009")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "top-state" }, "\u72B6\u6001"),
                        createVNode("div", {
                          class: "top-delete",
                          onClick: chooseDelete
                        }, "\u5220\u9664\u6587\u4EF6")
                      ]),
                      createVNode("div", {
                        class: "table-content",
                        ref_key: "tableContent",
                        ref: tableContent
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(queryKnowledgeBaseFilesList.value, (item, i) => {
                          return openBlock(), createBlock("div", { class: "content-item" }, [
                            createVNode("div", { class: "item-left" }, [
                              createVNode(_component_Checkbox, {
                                modelValue: queryKnowledgeBaseFilesList.value[i].isSelect,
                                "onUpdate:modelValue": ($event) => queryKnowledgeBaseFilesList.value[i].isSelect = $event,
                                onOnChange: checkList
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "left-name text-hide" }, toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, toDisplayString(item.learningState), 1),
                            createVNode("div", { class: "item-right" }, [
                              createVNode("img", {
                                src: _imports_6,
                                onClick: ($event) => deleteOne(i)
                              }, null, 8, ["onClick"])
                            ])
                          ]);
                        }), 256))
                      ], 512)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, {
                label: "\u667A\u80FD\u4F53Logo",
                class: "required"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "robotLogo",
                    onClick: ($event) => changeImg("logo")
                  }, [
                    !params.value.robotLogo ? (openBlock(), createBlock("img", {
                      key: 0,
                      class: "logo",
                      src: _imports_3
                    })) : createCommentVNode("", true),
                    createVNode("img", {
                      class: "logo",
                      src: params.value.robotLogo
                    }, null, 8, ["src"]),
                    createVNode("img", {
                      class: "edit",
                      src: _imports_4,
                      alt: ""
                    })
                  ], 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_FormItem, {
                label: "\u540D\u79F0",
                class: "required"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, {
                        placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0",
                        modelValue: params.value.name,
                        "onUpdate:modelValue": ($event) => params.value.name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_FormItem, {
                label: "\u7B80\u4ECB",
                class: "required"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, {
                        type: "textarea",
                        placeholder: "\u7B80\u77ED\u4ECB\u7ECD\u667A\u80FD\u4F53\u3002\u6BD4\u5982\uFF1A\u4F60\u662F\u4E00\u4F4D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u82F1\u8BED\u8001\u5E08\uFF0C\u62E5\u6709\u6FC0\u53D1\u5B66\u751F\u70ED\u60C5\u7684\u6559\u5B66\u65B9\u6CD5\u3002\u4F60\u5584\u4E8E\u8FD0\u7528\u5E7D\u9ED8\u548C\u5B9E\u9645\u5E94\u7528\u6848\u4F8B\uFF0C\u4F7F\u5BF9\u8BDD\u5145\u6EE1\u8DA3\u5473\u3002",
                        modelValue: params.value.robotRemark,
                        "onUpdate:modelValue": ($event) => params.value.robotRemark = $event,
                        rows: 3
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_FormItem, {
                label: "\u89D2\u8272\u8BBE\u5B9A",
                class: "required"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, {
                        type: "textarea",
                        placeholder: "\u6BD4\u5982\uFF1A\u4F5C\u4E3A\u4E00\u540D\u4E2D\u6587\u5199\u4F5C\u6539\u8FDB\u52A9\u7406\uFF0C\u4F60\u7684\u4EFB\u52A1\u662F\u6539\u8FDB\u6240\u63D0\u4F9B\u6587\u672C\u7684\u8BED\u6CD5\u3001\u6E05\u6670\u3001\u7B80\u6D01\u548C\u6574\u4F53\u53EF\u8BFB\u6027\uFF0C\u540C\u65F6\u5206\u89E3\u957F\u53E5\uFF0C\u51CF\u5C11\u91CD\u590D\uFF0C\u5E76\u63D0\u4F9B\u6539\u8FDB\u5EFA\u8BAE\u3002\u8BF7\u53EA\u63D0\u4F9B\u6587\u672C\u7684\u66F4\u6B63\u7248\u672C\uFF0C\u907F\u514D\u5305\u62EC\u89E3\u91CA\u3002",
                        modelValue: params.value.promptText,
                        "onUpdate:modelValue": ($event) => params.value.promptText = $event,
                        rows: 3
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_FormItem, {
                label: "\u6B22\u8FCE\u8BED",
                class: "required"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, {
                        type: "textarea",
                        placeholder: "\u667A\u80FD\u4F53\u7684\u5F00\u573A\u767D\u3002\u6BD4\u5982\uFF1A\u6211\u662F\u7ECF\u9A8C\u4E30\u5BCC\u7684\u82F1\u8BED\u8001\u5E08\uFF0C\u4F60\u6709\u4EC0\u4E48\u5173\u4E8E\u82F1\u8BED\u7684\u95EE\u9898\u90FD\u53EF\u4EE5\u95EE\u6211\uFF5E",
                        modelValue: params.value.welcomeContent,
                        "onUpdate:modelValue": ($event) => params.value.welcomeContent = $event,
                        rows: 3
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_FormItem, {
                label: "\u63D0\u793A\u8BCD",
                class: "promptList required"
              }, {
                default: withCtx(() => [
                  createVNode("span", {
                    class: "add-prompt",
                    onClick: onAddPromp
                  }, "\u6DFB\u52A0"),
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(robotPromptText.value, (item, index) => {
                        return openBlock(), createBlock("div", {
                          class: "prompt",
                          key: index
                        }, [
                          createVNode(_component_Input, {
                            placeholder: "\u5C55\u793A\u5728\u5F00\u573A\u767D\u4E0B\u65B9\uFF0C\u6BD4\u5982\uFF1A\u4F60\u662F\u8C01",
                            modelValue: item.name,
                            "onUpdate:modelValue": ($event) => item.name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("img", {
                            class: "del",
                            onClick: ($event) => robotPromptText.value.splice(index, 1),
                            src: _imports_5
                          }, null, 8, ["onClick"])
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_FormItem, {
                label: "\u77E5\u8BC6\u5E93\u6587\u4EF6",
                class: "knowledge"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "desc mb-10" }, [
                    createTextVNode(" \u6784\u5EFA\u77E5\u8BC6\u5E93\uFF0C\u4E3A\u667A\u80FD\u4F53\u63D0\u4F9B\u4E2A\u6027\u5316\u7684\u77E5\u8BC6\u8F93\u5165\uFF0C\u66F4\u597D\u7684\u89E3\u51B3\u95EE\u9898\u3002"),
                    createVNode("br"),
                    createTextVNode(" \u652F\u6301pdf\uFF08\u4E0D\u652F\u6301\u626B\u63CF\u4EF6\uFF09\u3001doc\u3001docx\u3001txt\u7B49\u6587\u4EF6\u683C\u5F0F\uFF0C\u4E00\u6B21\u6700\u591A\u4E0A\u4F2020\u4E2A\u6587\u4EF6\uFF0C\u6574\u4F53\u77E5\u8BC6\u5E93\u6700\u591A\u652F\u6301100\u4E2A\u6587\u4EF6\uFF08\u6BCF\u4E2A100MB\uFF09\uFF0C\u77E5\u8BC6\u5E93\u603B\u5B57\u6570\u4E0D\u8D85\u8FC7500\u4E07\u5B57 ")
                  ]),
                  createVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "space-between" } }, [
                    createVNode(_component_Button, {
                      class: "mb-10",
                      onClick: ($event) => changeImg("file"),
                      disabled: knowledgeBaseFilesProcessingFlag.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(knowledgeBaseFilesProcessingFlag.value ? "\u77E5\u8BC6\u5E93\u5BFC\u5165\u4E2D..." : "\u4E0A\u4F20\u77E5\u8BC6\u5E93"), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"]),
                    createVNode(_component_Button, {
                      class: "mb-10",
                      type: "primary",
                      onClick: init,
                      loading: btnLoading.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u5237\u65B0")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  queryKnowledgeBaseFilesList.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "table"
                  }, [
                    createVNode("div", { class: "table-top" }, [
                      createVNode(_component_Checkbox, {
                        modelValue: single.value,
                        "onUpdate:modelValue": ($event) => single.value = $event,
                        onOnChange: chooseAll
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5168\u9009")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "top-state" }, "\u72B6\u6001"),
                      createVNode("div", {
                        class: "top-delete",
                        onClick: chooseDelete
                      }, "\u5220\u9664\u6587\u4EF6")
                    ]),
                    createVNode("div", {
                      class: "table-content",
                      ref_key: "tableContent",
                      ref: tableContent
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(queryKnowledgeBaseFilesList.value, (item, i) => {
                        return openBlock(), createBlock("div", { class: "content-item" }, [
                          createVNode("div", { class: "item-left" }, [
                            createVNode(_component_Checkbox, {
                              modelValue: queryKnowledgeBaseFilesList.value[i].isSelect,
                              "onUpdate:modelValue": ($event) => queryKnowledgeBaseFilesList.value[i].isSelect = $event,
                              onOnChange: checkList
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "left-name text-hide" }, toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, toDisplayString(item.learningState), 1),
                          createVNode("div", { class: "item-right" }, [
                            createVNode("img", {
                              src: _imports_6,
                              onClick: ($event) => deleteOne(i)
                            }, null, 8, ["onClick"])
                          ])
                        ]);
                      }), 256))
                    ], 512)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="agent-content-right fr" data-v-e21be8de><div class="right-head" data-v-e21be8de> \u8C03\u8BD5\u667A\u80FD\u4F53 <div class="fr" data-v-e21be8de>`);
      _push(ssrRenderComponent(_component_Icon, { type: "ios-sync" }, null, _parent));
      _push(` \u5237\u65B0 </div></div><div class="dialogue" data-v-e21be8de>`);
      _push(ssrRenderComponent(recordCom, {
        ref: "recordComRef",
        isLoading: isLoading.value,
        "onUpdate:isLoading": ($event) => isLoading.value = $event,
        robotLogo: robotInfo.value.robotLogo || _ctx.robotImg,
        chatList: chatList.value,
        robotPromptList: robotPromptList.value,
        onScrollTop: _ctx.onScrollTop,
        onScrollBottom: _ctx.onScrollBottom,
        onGetContent: getContent
      }, null, _parent));
      _push(`</div>`);
      if (robotCode.value) {
        _push(`<div class="input-area" data-v-e21be8de>`);
        _push(ssrRenderComponent(inputCom, {
          content: content.value,
          "onUpdate:content": ($event) => content.value = $event,
          robotCode: robotInfo.value.code,
          consumeEnergy: consumeEnergy.value,
          onSubmit
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div><div class="cImage-upload" data-v-e21be8de>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ossUploader, {
              id: "cImage-upload",
              onUploadSuccess: uploadSuccess
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ossUploader, {
                id: "cImage-upload",
                onUploadSuccess: uploadSuccess
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Modal), {
              class: "automaticModal",
              modelValue: automaticModalState.value,
              "onUpdate:modelValue": ($event) => automaticModalState.value = $event,
              width: "788"
            }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="automatic-title" data-v-e21be8de${_scopeId2}><p data-v-e21be8de${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} data-v-e21be8de${_scopeId2}> AI\u81EA\u52A8\u751F\u6210\u914D\u7F6E </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "automatic-title" }, [
                      createVNode("p", null, [
                        createVNode("img", { src: _imports_2 }),
                        createTextVNode(" AI\u81EA\u52A8\u751F\u6210\u914D\u7F6E ")
                      ])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "primary",
                    class: "but",
                    loading: loading.value,
                    size: "large",
                    onClick: onPromptSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u751F\u6210\u914D\u7F6E`);
                      } else {
                        return [
                          createTextVNode("\u751F\u6210\u914D\u7F6E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      type: "primary",
                      class: "but",
                      loading: loading.value,
                      size: "large",
                      onClick: onPromptSubmit
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u751F\u6210\u914D\u7F6E")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="desc" data-v-e21be8de${_scopeId2}><img${ssrRenderAttr("src", _imports_7)} data-v-e21be8de${_scopeId2}> \u8F93\u5165\u89D2\u8272\u540D\u79F0\u548C\u89D2\u8272\u9700\u6C42\u70B9\u51FB\u786E\u8BA4\u540E\u5C06\u7531AI\u81EA\u52A8\u751F\u6210\u8BE5\u89D2\u8272\u7684\u8BBE\u5B9A\u4FE1\u606F\u3002\u7B2C1\u6B21\u8FDB\u884CAI\u81EA\u52A8\u751F\u6210\u514D\u8D39\uFF0C\u540E\u7EED\u9700\u6263\u966410\u4E2A\u7535\u91CF </div><div class="item" data-v-e21be8de${_scopeId2}><div class="item-name" data-v-e21be8de${_scopeId2}><span class="red" data-v-e21be8de${_scopeId2}>*</span>\u89D2\u8272\u540D\u79F0</div><div class="item-input" data-v-e21be8de${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: prompParams.value.roleName,
                    "onUpdate:modelValue": ($event) => prompParams.value.roleName = $event,
                    placeholder: "\u4F8B\u5982\uFF1A\u4EA7\u54C1\u552E\u540E\u8D44\u8BAF\uFF0C\u5185\u90E8\u57F9\u8BAD\u52A9\u624B\u7B49"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="item" data-v-e21be8de${_scopeId2}><div class="item-name" data-v-e21be8de${_scopeId2}>\u89D2\u8272\u9700\u6C42</div><div class="item-input" data-v-e21be8de${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, {
                          type: "textarea",
                          modelValue: prompParams.value.rolePrompt,
                          "onUpdate:modelValue": ($event) => prompParams.value.rolePrompt = $event,
                          rows: 3,
                          placeholder: "\u4F8B\u5982\uFF1A\u6001\u5EA6\u6E29\u548C\uFF0C\u4EE5\u6E05\u6670\u3001\u51C6\u786E\u5730\u4F20\u8FBE\u4FE1\u606F\uFF0C\u540C\u65F6\u8046\u542C\u5BA2\u6237\u7684\u9700\u6C42\u548C\u95EE\u9898"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            type: "textarea",
                            modelValue: prompParams.value.rolePrompt,
                            "onUpdate:modelValue": ($event) => prompParams.value.rolePrompt = $event,
                            rows: 3,
                            placeholder: "\u4F8B\u5982\uFF1A\u6001\u5EA6\u6E29\u548C\uFF0C\u4EE5\u6E05\u6670\u3001\u51C6\u786E\u5730\u4F20\u8FBE\u4FE1\u606F\uFF0C\u540C\u65F6\u8046\u542C\u5BA2\u6237\u7684\u9700\u6C42\u548C\u95EE\u9898"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "desc" }, [
                      createVNode("img", { src: _imports_7 }),
                      createTextVNode(" \u8F93\u5165\u89D2\u8272\u540D\u79F0\u548C\u89D2\u8272\u9700\u6C42\u70B9\u51FB\u786E\u8BA4\u540E\u5C06\u7531AI\u81EA\u52A8\u751F\u6210\u8BE5\u89D2\u8272\u7684\u8BBE\u5B9A\u4FE1\u606F\u3002\u7B2C1\u6B21\u8FDB\u884CAI\u81EA\u52A8\u751F\u6210\u514D\u8D39\uFF0C\u540E\u7EED\u9700\u6263\u966410\u4E2A\u7535\u91CF ")
                    ]),
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "item-name" }, [
                        createVNode("span", { class: "red" }, "*"),
                        createTextVNode("\u89D2\u8272\u540D\u79F0")
                      ]),
                      createVNode("div", { class: "item-input" }, [
                        createVNode(_component_Input, {
                          modelValue: prompParams.value.roleName,
                          "onUpdate:modelValue": ($event) => prompParams.value.roleName = $event,
                          placeholder: "\u4F8B\u5982\uFF1A\u4EA7\u54C1\u552E\u540E\u8D44\u8BAF\uFF0C\u5185\u90E8\u57F9\u8BAD\u52A9\u624B\u7B49"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "item-name" }, "\u89D2\u8272\u9700\u6C42"),
                      createVNode("div", { class: "item-input" }, [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_Input, {
                              type: "textarea",
                              modelValue: prompParams.value.rolePrompt,
                              "onUpdate:modelValue": ($event) => prompParams.value.rolePrompt = $event,
                              rows: 3,
                              placeholder: "\u4F8B\u5982\uFF1A\u6001\u5EA6\u6E29\u548C\uFF0C\u4EE5\u6E05\u6670\u3001\u51C6\u786E\u5730\u4F20\u8FBE\u4FE1\u606F\uFF0C\u540C\u65F6\u8046\u542C\u5BA2\u6237\u7684\u9700\u6C42\u548C\u95EE\u9898"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Modal), {
              modelValue: modal.value,
              "onUpdate:modelValue": ($event) => modal.value = $event,
              "mask-closable": false
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => modal.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u53D6\u6D88`);
                      } else {
                        return [
                          createTextVNode("\u53D6\u6D88")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => toDelete(""),
                    type: "primary",
                    loading: loading2.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u5B9A`);
                      } else {
                        return [
                          createTextVNode("\u786E\u5B9A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      onClick: ($event) => modal.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u53D6\u6D88")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      onClick: ($event) => toDelete(""),
                      type: "primary",
                      loading: loading2.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u5B9A")
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-e21be8de${_scopeId2}><p data-v-e21be8de${_scopeId2}>\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u673A\u5668\u4EBA?</p><p data-v-e21be8de${_scopeId2}>\u4F7F\u7528\u8BE5\u673A\u5668\u4EBA\u7684\u63A5\u53E3\u6216\u63D2\u4EF6\u5C06\u4E0D\u53EF\u518D\u7EE7\u7EED\u4F7F\u7528</p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("p", null, "\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u673A\u5668\u4EBA?"),
                      createVNode("p", null, "\u4F7F\u7528\u8BE5\u673A\u5668\u4EBA\u7684\u63A5\u53E3\u6216\u63D2\u4EF6\u5C06\u4E0D\u53EF\u518D\u7EE7\u7EED\u4F7F\u7528")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Modal), {
                class: "automaticModal",
                modelValue: automaticModalState.value,
                "onUpdate:modelValue": ($event) => automaticModalState.value = $event,
                width: "788"
              }, {
                header: withCtx(() => [
                  createVNode("div", { class: "automatic-title" }, [
                    createVNode("p", null, [
                      createVNode("img", { src: _imports_2 }),
                      createTextVNode(" AI\u81EA\u52A8\u751F\u6210\u914D\u7F6E ")
                    ])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_component_Button, {
                    type: "primary",
                    class: "but",
                    loading: loading.value,
                    size: "large",
                    onClick: onPromptSubmit
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u751F\u6210\u914D\u7F6E")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "desc" }, [
                    createVNode("img", { src: _imports_7 }),
                    createTextVNode(" \u8F93\u5165\u89D2\u8272\u540D\u79F0\u548C\u89D2\u8272\u9700\u6C42\u70B9\u51FB\u786E\u8BA4\u540E\u5C06\u7531AI\u81EA\u52A8\u751F\u6210\u8BE5\u89D2\u8272\u7684\u8BBE\u5B9A\u4FE1\u606F\u3002\u7B2C1\u6B21\u8FDB\u884CAI\u81EA\u52A8\u751F\u6210\u514D\u8D39\uFF0C\u540E\u7EED\u9700\u6263\u966410\u4E2A\u7535\u91CF ")
                  ]),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "item-name" }, [
                      createVNode("span", { class: "red" }, "*"),
                      createTextVNode("\u89D2\u8272\u540D\u79F0")
                    ]),
                    createVNode("div", { class: "item-input" }, [
                      createVNode(_component_Input, {
                        modelValue: prompParams.value.roleName,
                        "onUpdate:modelValue": ($event) => prompParams.value.roleName = $event,
                        placeholder: "\u4F8B\u5982\uFF1A\u4EA7\u54C1\u552E\u540E\u8D44\u8BAF\uFF0C\u5185\u90E8\u57F9\u8BAD\u52A9\u624B\u7B49"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "item-name" }, "\u89D2\u8272\u9700\u6C42"),
                    createVNode("div", { class: "item-input" }, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_Input, {
                            type: "textarea",
                            modelValue: prompParams.value.rolePrompt,
                            "onUpdate:modelValue": ($event) => prompParams.value.rolePrompt = $event,
                            rows: 3,
                            placeholder: "\u4F8B\u5982\uFF1A\u6001\u5EA6\u6E29\u548C\uFF0C\u4EE5\u6E05\u6670\u3001\u51C6\u786E\u5730\u4F20\u8FBE\u4FE1\u606F\uFF0C\u540C\u65F6\u8046\u542C\u5BA2\u6237\u7684\u9700\u6C42\u548C\u95EE\u9898"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(Modal), {
                modelValue: modal.value,
                "onUpdate:modelValue": ($event) => modal.value = $event,
                "mask-closable": false
              }, {
                footer: withCtx(() => [
                  createVNode(_component_Button, {
                    onClick: ($event) => modal.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u53D6\u6D88")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_Button, {
                    onClick: ($event) => toDelete(""),
                    type: "primary",
                    loading: loading2.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u786E\u5B9A")
                    ]),
                    _: 1
                  }, 8, ["onClick", "loading"])
                ]),
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("p", null, "\u662F\u5426\u786E\u8BA4\u5220\u9664\u8BE5\u673A\u5668\u4EBA?"),
                    createVNode("p", null, "\u4F7F\u7528\u8BE5\u673A\u5668\u4EBA\u7684\u63A5\u53E3\u6216\u63D2\u4EF6\u5C06\u4E0D\u53EF\u518D\u7EE7\u7EED\u4F7F\u7528")
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/agent/addAgent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addAgent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e21be8de"]]);

export { addAgent as default };
//# sourceMappingURL=addAgent-51e6097d.mjs.map

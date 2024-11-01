import { a as _export_sfc, g as getRouting, _ as __nuxt_component_1$1, d as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_0 } from './ossUploaderNew-da7960a9.mjs';
import { _ as __nuxt_component_1 } from './previewImg-8e12aab7.mjs';
import { _ as __nuxt_component_2 } from './cCreate-9b81dba0.mjs';
import { useSSRContext, defineComponent, ref, getCurrentInstance, resolveComponent, resolveDirective, withCtx, unref, createVNode, createTextVNode, mergeProps, withDirectives, openBlock, createBlock, createCommentVNode, computed, toRefs, watch, toDisplayString, Fragment, renderList, renderSlot, withModifiers, nextTick } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_4$1 } from './edit1-d50fac04.mjs';
import { _ as _imports_9$1, a as _imports_10, b as _imports_11 } from './copy-d1ce3f41.mjs';
import { _ as _imports_12 } from './switch-59f92d8c.mjs';
import { _ as _imports_1$1 } from './robot-20021510.mjs';
import { c as contentCom } from './content-977f7524.mjs';
import { _ as _imports_1$2 } from './avatar-8802d9a1.mjs';
import { useRouter } from 'vue-router';
import { b as barrageCom, Q as Quote } from './barrage-e0763a91.mjs';
import ipkg from 'view-ui-plus';
import QrcodeVue from 'qrcode.vue';

const _imports_2$1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEKUlEQVRYR+2WXWgcVRTH/+fObsFulmo1KobsJlHBB78abKsoNWiNRTT44ECN7GZmFhcFIWop9aHgig9KFSmoaMLOzmW/VNaHUihVLDYWxYcoaj9EkaYmWIqCbXGzmOzHvXLDjCwlyWY/oD54n2a4M/f87v+c87+XcJkHXeb4+B+gYwrE4/H1ExMTfxORbCatHQEYGRkJdnd3v1Gr1faXSqVfCoVCba0QnQAgy7JeBPCmlPJirVZ7eGBg4JtEIiHWAtE2QDwe91er1S8BDALwuRD3p9PpEwAapqNlgEQiwbxdGoZxJREdIKL7AGgATlQqle2ZTOaPRiq0BKDr+oZAINDf19d33IMYHh4O9PT0HCOiTcBSe79fLBbHC4VCeTWIpgEikUjA5/PtAjAupRzinJ/0pLYs6w4AnwK4TgVViti2/VVHAWKx2DYp5VEADMDxcrm8I5vNnvOCGIYxzhh7y50/HAqFHl2tIJtWQNf1jV1dXZ8TkdotpJTvhMPhcS+IruvrgsHgTwD61fzi4mJvLpf7bSUVmgZQCxmGsZkxdghAN4AyY+yWZDJ5xgtiWdZuAPvUuxBiF+dcKbLsaAlArWSa5qtEtNfN9T7btvd4ESKRyK1+v/8HNw1HUqnUQ20BqJabm5vbKoQ4xzn/1VXhesbYaQDrpZSnwuHw7fW5tizrTwAbpZTnHce5ui2AWCx2L4BPhBAHpZQxzvmCq8K3RKQMSOV6Qy6X+8sLZJrmNBHdpd5nZmb8U1NT1eUgGqbANM1BIioAGJBSykqlsimbzSp5VRoOEtFj6nlhYaEvn8/P1tXBFwC2LQdXD9IQwLKsSQBPez8JIZ7knH+o3i3LUhas1BGMsRuSyeTvdQp8R0R3SinL8/PzwZUMqSGAaZpbiehtAJsBFIUQD3LOpyORyLV+v/8UgGuklGcdx+mtM6QgAFUrqgZOO45zU1s1EI1Gt/h8PtVKPxaLxWfVcWsYxh7G2OuuF0w4jvNMnRntYIwddufyjuM81RaAW/W3aZp21rbt84Zh3M0YO+Ba7gUiety27WPqu6GhIV9/f/8HRPSE6wP/pqylIrz0p7GxsRs1TcsAuEflHsC7oVDoea8Fo9Hodk3TDhHROgBnhBCDnPOLbStQV1wPEJENoE9K+Znf7x+bnJxcOgsMw7iZMZYFsAWAarvdqVRq/0rBl0xstcnl5pQpzc7OPkdEjwghXuKcf+92hGrTvURkurk/UqvVdqbTaWVIK46mAdRKuq5fEQgEwpxzdeh4Z4NqVcu9kJysVqvxdDr9daMNtgRQv6irSIaIdrre/7OU8mXHcT5qFLylFFy6qK7rWjAYfA3ACwCmhRDvlUql/Fpvxm0roICUKWma9oqmaR/39vYeXeuNuCMKeIqMjo5elc/nL6xF9vpvOqJAs0H/UwD/AOOerzAY5DQDAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADRElEQVRYR+2Xz2sTWxTHv+fephob/AHNQqVtajfiQheCoBv7B1jRRcR24ZuZQhBxITwQUdERdCGutIJY28yEaemiILhVkOjbvLdQ3KkoVRR/PQXFNradZO6RW4yMoU1m/FE3nl1yz7nnc77n5p4bwm82+s358QcgjgKUy+WSUsolvu/HiYOUMgDwaXBwsFzb8sgbGYaRIaK/AVhEtCzm2XkM4FhLS8u1gYGB2XBsJICenp5l6XT6BoBtACYB6Iri2FIAS5VSOdd1r8QGME1zOxFdZ+ZPzHwKwIs42YloBxHtY+Y3HR0da2zbVtX4ugrYti2KxaLIZDI7iShHRHcmJiZONkpeLBa1Qlz1M00zTUT/689KqVWu635oCJDL5Vp93++UUiYbJQyvB0HAQRC86+rqemTbdkWvGYaxUgjxPjJANptNp1Kpc0T0FzN/rSQKCNGcqCUAO9vb229puWMD9Pf3n2Xmw8z8Wvc7DoMQIkFEG5h5hpk3OI7zPDaAZVkvAawOguBAoVC4FKXyqk82m02lUql7RNTFzPsdx7n8PQBzsiulOl3XfRoHQPtaluXo1gOw8/n8qT8AP00By7LWKaXWhlsihKhMTk7eGR8f96vf/7IWGIZxQQhh1pyJUrlc3uJ53rPFADgphNDzIGzs+/7BkZERPXDm7Jcp0NfX19Hc3NxZAxCUSqX/FqUFpmmeIKK9NQDlcrm8y/O8Jwsp0Nvb25pMJt/q9dnZ2RWjo6Mf684Cy7LmvQcMw7CFEBu/0Z8ZzHzUdd0H8wHMzMxcSCQSPVLKAjN/nJqaSofVmncaLgTQ3d3dlMlkmsIApVJJhTesPQNKqZtCiKsAWpm54DiOvqC+WiyAqDdi+BAy879EdB7AfQBH8vn8w0UFCIJgRAixtVKpXPc8b+5NEAVAPx6bmHmz4zh3o1Ze9TNN8yoR7Wbm447jnKkXv1AL7gHYxMwXAdyKCZAAcJqI9K25x3Xd8e8B6AdwjpmXE9GrmABLAKSZ+R8pZXZoaOhNbIAvM/0QgC0AlscBICL9HnxBREPDw8O3G8Uu+CjVP7m2trb1UspVjTYJr+vhND09PTE2Nla38roXUZyEP+ob6Y/JjyapF/8Zc24eP/vpsZEAAAAASUVORK5CYII=";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADWklEQVRYR+2XT2hcVRTGv3PzIIZONKkIRSNK1JTWjYoLq6hx4SJFFLWD2Ejy5kyKm0YXLgQt/qlFFy6DceO8+zKDcTEggmhAUw26EPeCSEu6UTEotXT+hGbmvk+eZCBmZtI3j0greJfvnsv3O987577zBFd4yRXWx/8AV7cDs7Oz/fV6fc/GxobXqVY8z2O1Wj1fLpfd+Pi4NzY2NrS+vm62x8ZxmUzm4tzc3KXte10dyGazN2QymccAvCQiB7sUa63RaBwqlUo/qOq9JL8UkaEOsbUoio6HYRgmAshms3sHBwcXABwG8AfJCoCo7bBIk+Rxa+1XqnoMwNsAWg7Erl275cwnQRA8mQggl8udEpFXSZ6JomhmYWHhmyTtqqoTzrm9APqMMfeLyPOpAFT1J5J3OOceKBaL3yUR3xIjqnofgM8ADJOkiMSvOrkDqkoA9SAI9vQqPjk5eaC/v/9bALETFZIXReSmNAAXgiAY7gVgZmbmgHPuUxG5DUCN5Aci8ieAN/5tAPF9f78xZhHA3ZviH1lrj+Xz+ddIvknyY2vt04mKcPMVJHYgl8sdNMZ8SPIuAA2Si9ZaPxbzfV+NMSdEZLFQKJzYdQBV3Q8gzvweAE0Ay5VK5YlyubzREvN9/3CtVlve+qy11/EiSuqAqo6SDEXkwVic5NcDAwNPzc/PV5PWTmoA3/dvNca8C+DIpvjparV6pFwut4mr6qEoirwwDOPu+MdKBbApfpLkcyLCKIq+APBsGIYXOmWuqr8AGOrU1qkAVPUdki/HFwzJZQBHrbW/d7NdVeNWjAHa9NICnATwDIDfms3m0WKxGGfYde06wNTU1PXGmEedc9+XSqVzlyu4XQe4nOD2/f8kQAPApdXV1aGVlZX4ckm94klpdHQ07g4vCIJrkrbh359jkg936t1eaKanpx8yxqwA+NFae2ciAN/3XzHGvEXyNMl5kuf7+vraJqKdQJxzxhgzLCKzAB4h+bq19lRSgH0i8p6IPE7yVwA/A3C9ZB5PRQBuFJF9JD93zr3QqV27DqX5fP72ZrP5oud5N5PsdTBpsdYBnBWR9wuFwtlOCez4XzAxMdE/MjJyS6PRuK7H7FvhlbW1tXNLS0tt4/iOX8OUYqmOXd1/RqlS6vHQX+EBvDBIUW3cAAAAAElFTkSuQmCC";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB8klEQVRYR+2Wv2sUQRTHv29YjgjpTjCNeClsjgvs7BRqp1gJBhUtbP0PLATxPwiIf4CdhUXEQosIKVNqMW/HJWC7gqCFcAGbwGT2ycptE2+Tvbsc02S6Zd6b72fe7PtBiLwosj7OARaOgDHmGoBHInJARK+ttb9nedaFALTWD5VSbwGsTET3rbUawFFXiLkBtNbPlVJbx4VE5AYzf14mQJJl2UsiejpNJIRwyzm3txSAwWCw0u/33wO42yawNIDRaHSp1+t9JKLrJ91uKQBa6ytEtEdEg9NCKyLbRLTb2FVVVY7H4y9lWR5O8237CZM0TVedcwe1kzHmA4D7p4m37YtIKSI38zz/ftxmKoAx5huAgff+alEUP7Is+0NEq/MC1H4issvMd7oCSG0YQtDOOWeM+fe94Dq01l6IBlA/AzOvxwTYYebNaAAAtqy1L6IBiMhjZn4XDcB7v1EUxX4sgKNJBvzXJdvqwFmnYd2mNzpXwibvz6oOiMgbZn4SDQDAM2vtq2gAIrLJzDuLAHgAybyl2Ht/ue4pswD8BLAWQlh3zpXGmBxAOg9AWwluzpqaBcPhcC1JkotN3mqtbyul6hA2w2dXFh9CeOCc+9Tm0HkoTdM0VUrd6zKUTMR+VVW1nef515NoOwN0vfKsducA0SPwFzy/ODBDMhFpAAAAAElFTkSuQmCC";
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADUklEQVRYR+2WQWgUVxjH/9+b3aV2B2yqsR4CprVFClpbBKUtyHpUS8DaRSgmefO2BKSHevNQaQesB/WYohKSeZOYpOBIUQQD0pYUBA09KCp4sWkajASkljaxZXd231deaWAbEx2NmVyc28y8ed9v/vPN9/8TlvigJa6P5wALVsD3fTEyMpJ1XZejKIoB8JN81gUB+L6fGR8ff7tWq70nhPijUql8PzAwcCcVACnlC0KIrQC+BbAMgGDmK5OTk4WhoaFyUoinUqC1tTWfy+X2MvNJADEz3yCitwBkjDGbwzD8adEA2traVjiOUyKiIwD+ZubLExMTLU1NTVb6l4wx28IwHF4MAOro6Fgdx/FXRKQATFv5M5nMJ11dXbFS6vfFBKBSqbTWGHOEiD4EcI+Zv9Fafzbzpkqp3wC8bIzZPjY29t3M9UKhYHzfN/MpkqgHpJTNQohzADYw810Ah7XWJ+o3VUrdALAewDEhxIWZe8aYcqVSudff3397Log5AaSUbwDINzc3X7f0nuedIqK9RPRztVr9sre3d2D2ZlLK/UKILwAsB/43YW2Nq0KI3d3d3b/Mfm5OAM/zrhLR61NTU2uiKLpfJ29LGIbn55PT87xDRLSNmZ26NauI6DVmPq+1bkkEoJT6d5oZY94Jw/Da7POkHW7XSSk/FkJYxe4HQbAidQCl1G4AZ5h5VGu9NnWAUql0iJkPMvMFrfXO1AGUUrZnPmDmo1rrA6kDeJ43RkRrAOwJguB0qgDWM7LZ7J/WqIhoQ09Pz820AbZks9kr1jPy+XxDZ2fnQy455xx4Vr9he3v7PsdxjgO4HgTBxsST8FkBSCm/FkJ8CiAMgsBLHUAp9SOArcx8QGt9NFWAYrGYc133DhE1VqvVHX19fUNPAlCznVs3ih8AeLFWq30Ux/EPSUZxLpdbJ4S4DKBaLpdfnS8rzmdGNtGsLJfLOwcHB39VSl0C8D6Ai8aYkSQARLSeiHbZBhwdHd00PDxcTayAlLJARK9MT0+fiaKo5nneHiL6HMCbNvclAbBexsy3bD7QWvcuKJAUi0XHdd1dzPzuf37/WAYieiCEuOQ4zlkb2RYEUBevMo2NjfnHVgfQ0NDw16MKz+yRKJIlKfi0a5Yc4B+tlgA/C3TyCwAAAABJRU5ErkJggg==";
const _imports_7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACB0lEQVRYR+2WsYsTQRTGv7fZhCt2UcHCQuEEBdNddt+ELBZHQOEKQewtz+4aSwtR0D/AP+AsBcFCLUTEg1U4kyO7CdpZWFxhp2IzYGA3ebKQQAybY3KS3ea2G/je+37zzezMEEr+qGR/nAAYJRCGoe267iMA2wDOGi6bFpFdrfW9drs9XFSTCxBF0c3MSCn1NCvs9/sPROShofG8bJeZ7ywL8IeI1gDUmflrHMc/lpj5P14iMtRan1mUQm4CcRxL1mU8Hjeazebn6fiYCcCyrA3P877k1RcCQES3fd9/VhoAgMfMfL9MgFfMfKtMgG/MfLk0ABFJtdZu3p9QyCbMZp6madBqtQ7mUygMQES2pwfbLESRAE+UUndLS4CI9nzfv14agIh8V0pdKBMgVUpVTQF+AzidJMnFIAgOoyhKiMg+7l0wqTtg5sAIoNfrbdi2fcrzvI9ZQRzHXQCt/wDQlUplq9FofDICmBdFUXQVwN7kij6SQ0Riy7L2pyIROUyS5HWWpPFJmCccDAabo9HoORGdO4qAiLZ8339nmpbRk2zarNPpXKrVau8BrC8yEJG2UurDSgCypt1ud71arb4FcCXPZOUAmWkYho7jOC+J6No8RCEAE4g113VfALgxs+GGjuOcr9frv1a2BLONZ57rOwB+Athh5jem5pluqU24TGNT7QlA6Qn8BaEQMzA7KQbIAAAAAElFTkSuQmCC";
const _imports_8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADZUlEQVRYR+2WX2hcRRTGv3Nvkk0bF6QpRmSJCaKgEbQvilWIoSWCD+pDr4hhTWYSRIKhVAqKQr0RFYo+GQRZ2ZlJQpRaH1L/vIiEfRCKbxUERc2yah+KlCjEbrbJ7jky0i0xbuNNIbsvztO9d86c7zdn7plzCC0e1GJ9/A+QOAJTU1Op1dXVPWEYBkmObW1tTbq7u8szMzOXt7NvCBBFUTgwMEBxHFf94uHh4a5MJvMcgBcA3JIEAMAfAE6urKy8t7i46J8bjoYAWuuHAOwtFotLhUKhqpQ6TkRvAfC7WUsIkAKwh5nfdc49v1OAPwF0MfMdzrkflVIXiKhHRD4WkY+SABDRYSJ6FsAlZt7vnKs0WnetCIg3ZuYDzrlzWut/vCcBiKJoXzqd/g1ACOBeY8w3TQXwYlrrXwFkRORpa+2HTQdQSn1ORI8S0Wv5fP7VpgOMjY29EQTByyJyxlr7RNMBxsfHsyIyB+B7Y8ydTQfQWt8D4ByA9Y2NjX3z8/OXtkLsWhZ4ocnJyRsqlcoKgPZqtXpwbm7ubFMBvJhS6iciuq1Wq03Mzs7mWwFwmoiOAHjHGHO0FQAniGiamb9wzj3SCoAjRHRaRH6x1t666wATExM9zNxVF2LmB4Mg8KlYNsZc/V6fb5gFSqlviWgvgMPGmKLWuuwrm4g8Za091SifoyjqSKfTDwMYFJGbrwoQ3QfgbhEpWGuHEkVAKfW4iNzU19eXj+OYtdZLAPzisyJyzFr79VZHo6Ojh8IwXADQs3lORHz59ht63RjzSSKABs4fC8PwbQC3ewgAJ3p7e5c8XN1Wa/0lgEMAPNzPm3xcrNVqp/r7+7/abL/tEWwFiOM4KJVKzwRB4Lui+wH8QEQvLi8vf+YbliuV7yKAbmZ+sqOjY7HuI5fLbWxXvhP3hABIKTXkQwngAQDnReR4e3v7p7lcrqy1/h3Ajcw85JwrJOkZvM1OAP72qZQaJKKXfKsI4AKANyuVygednZ3FpgBcgbgLwDQR+RJbZuaTQRC84vtIAAeNMf+6868VkR1HoO4om832h2E4HQRB5Ls3Ly4ixfX19cGFhYXzu3YEmx2PjIxkUqnUMQC+7FaY+Yxz7v2k4tf1D2x1ns1mu9ra2vxFUy6VSt/VsyIpxHUfQVKB/7JrOcBfI44LP8sCrjsAAAAASUVORK5CYII=";
const _imports_9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACsklEQVRYR+2WwUsVURTGv6OjuGzhIhAxRMjlWwgZBLoI2ga1VJs7r12LlIIKDYwSlIqMCNp4Zx4IGv4DtgjewoigyFYRCPbQRQsXLkKFnPniyAjymHnvjfZ4BM5y5sw9v/Pde+53BA1+pMH58f8BuK7bFoZhj+M4HQDOiIhDciuKos2dnZ3S0tLS7yyqVlRgcHDQ6ezszLW0tFwAcAlAH4BzAJwKSdZIrpJcCcPww8bGxmqxWNxPi08E0CpF5JWIXAXQXvazLvYTwBqAbZL7ItJO8pyI9JTDkdwWkcUoisaCINgrB0kE8DzvDoBncbAmWiFZjKLoc6lU+pFWkSrW1dV1vrm5uZ9kP4DLIqKK6XPXWvu8VoAXAEZJTvi+P5VlT8tj8/n8PZLTAGattWOZAERkdG5u7uUJAW6TnK0LgDHmsXaBtfZBGmQ+n68fgOd51MTW2tRuOgU4VaDeCvzRm6+Rh/BW3AWvG9KGtVxQddsC13XVij8qBMmLQRBsJwEdC8AYMy4iT0jO+74/nLSw67q5pqamr/otDMO+QqHwJSnO87wDXwEwaa19VJMXDA0N9bS2tn7XA0ZSQaaSrNQYcwPAnu/7b1OSXwMwD6ANQM5a+60mAA3yPE8PmJqIQqyKiJu0QFJiteXu7u6nceUaMp3mFxUnImPMAIAg9nQdJqajKJpJUuMQZGRkpMNxnEWdoEjukbwfBEGqo1YdSuPpSF1P9/FAjSiKbibtuTHmSgx8FsAmyeu+73+q1C1VAQ5/NsboXKhq9ALYV48n+VDViCUfBzARj2TLu7u7wwsLC1vVWrVmAF2oXA2dC0kuq9wikovBJtfX12cqDaJHoTIBlKnxJk56+HozDEO3UCi8r1b1iQGOqDFAsldEfpF8l3YZ/ZMzkKWqLLHH2oIsCarFngL8BdeqwjDdmmvlAAAAAElFTkSuQmCC";
const _imports_15 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAANeUlEQVR4Xu2df3AU5RnHv+/eXXIXgwYagTJxCP6EVkZAaqCA4g8KOLGAUGmKVbRa0XHqHdjBGXWIHezUEcwxbQc62gGLFhGoQemABEuqOEDRBkam6IASB0pig96Bmbskd7dv59nL5nLJ3t3u3e7tXrL3D8zk3ffH83nf533e533e92UolF9doBJCyQ3gsbEAqwRQCY5yMIwEeCk4KwWDU2oORxSMtwMsCPAgwFrBcRaMfQqwZvDQx/ANbS6EpjNLVrKWOzEkPBkCux3ATIBPAGPl+tZVAncIHAcA3ogLnsOoZVF9y8g9N+sAqj3txtBRs8HFRQCvBlhZ7s3TkoMEbBeYsB2Bc++idkyHlq+NSms+oLrQNIAtBeOL8g8llVglWPUA3wBvyWGjhK8mX3MAkQob2rEEIn8cjE1WU1Hz0rAmQHwBwa92mjGq8guoBwyeAcPV5gk9m5L5WTBhDQItf8onqPwB8ocWg7PVhQemH8xPIYpPYfklO7PBrPUb4wH5O66TdLlkjQ2gH0cjHA4vflV0zMhWGQcors6ehiips/j6ZMD9WBiMv4BA6wtGqT1jAEmjRnwDYBMGHBPFBpEhgRp43Z/p3V79Aa0L3w8OUmluvStr7fxYGCJ/FMs9r+pZT/0A0UKzbGQdgGV6VrDg8mJsPQIty/VSefoAqguUAe5tYLij4ARqSIVZA3j4HviGBnPNPndAf+CjEenYNwDM51xl2ff7k3BiFh73fJlLxrkBIjjRjkbJs2z/lCRwGk7cmguk7AHZcNR2yZwgZQfIhqMWjpwua0jaAcUNgiP2nKOVEU6Cd9yk1XDQBohM6ctGvmNba5rhdH/AGhBs+bEWE1wbIH94/aBf52TLRv6O1klPuB9Tm416QHEPwSa1GdvpUkqAQ8QDaj0O6gDFPdJHB5/7xqhuxsIAJqrx3WUGJLlwRhwcPI5Po6D0zZc1IVh8U6ZAlcyA1oVXgaM2X9UeVOWQXH2e59K1OT2guvYJYI6DtmozqtuwCIDx6VRdekD+8P4BtxNqlKyzz3c/vJ7bUn2eGtC6znngYn325dpfqpQAB3gNvCVbldIrA4rv7dAu4ViVhdjJcpEAxylccI9TMhiUAa3reAKc+3Mp0/5WowRELFVaG/UHFDerTwKsQmMRdvJcJJBiFPUH5O9cHA/4sH95l4DCKFIAFGoq9EWp2wFMGyXg+u8wVF7KUOoCgp1Aa4jjaBvHh+dEdMTyLn41BR6B13NT74TJgNaGpsDBaN1TkL8J5QwrbnSieoyAsuLUBmpHlGP7KRFrPo7i2HlupbZycD4DvpIP5Uolt8If3ghgqZVqrKYu5W6g7hYX7h3rUJM8Kc0bn8XgfT+Cr0KaPzXmA45X4PM83B9Q3Dhosc4REHXtv3E4Q311ESqGZPZapcrxzLccNXsikuoz/8cCCLaMkveMEq0qwIXp7NECtt/pQmmRMpzj50Uc/4ajIwo4BUhz0oTLBUUG4SjHXW9H8N4ZC0ASxflycH6iZf7wZgD3mt+D1NWA4NRXu+B2JsMJdnL4m2LYdCKGLy/2n18qShl+8X0Hnprs6PdtoJPjB1u68PkFk+clkb+G5SU/J0nEW1e734myqrZCUW+p4Bw4J6JmdxfOtmeGTKA2z3ZhZkXyiDrYIuLmbV2ImsqI1FzxcPIsxAGtuTgdTtcHmZtlfopUcPY0x7BgV0ST+Uzm+FvVLsypTDYulu6N4NUTptrh5J+bSscv44Dqwk+DYbX54s9cAxLo/KuSBZoNHLkkWiM1/awYV5clVOWpoIhxfzF5FHE8A5/n+Xit/OHdAOZkFo/5Kfr2+lzgyK254woBDXcX9TSOtNtdO7vw92YTDQYu7oPvklndgEKBQpl/SIoyJPq/VrWWqot9sqQI15cn5qP1n0Tx2D9MvTahDV7PcIa6cCUYTps/NrTVgCDRTy+XTW2VE6umJA4CHm0TMfGvXdoqpW9qDt5xJYO/cyEgbtc378LLbc5oAbvnJ9Tct10cl67vNLchojifwR9aAbA15takf+lkrS0b70DNbm2WGeVES6PF15KzVED9FzEcbs1sM0+4nEnGgvyjL4R1Zl82wp8iFfcyGB6yEqDeprRWI4DgbJnrwqJr4jowInLcuqMLH55LD2nycIYjNVYDhA3Mahac0jpHLaS+cORO98rxKB5+L/2EP/9KAW/dlVBx5FUYtsFkFQfsIRVnmf2fXBahqeAQpNX/iuLZg+kBrZnulLYq5N+hFhFT3zTVSKCqHKERRBac6SfkyCvduLCon+NTzehJB+eDczHcWR9BO0WgpfiRRXjivmJpc0/+0V7Rrw+YambTvXdnaASZvgYaWQIcXJwsIBJUPuBQOfePc2DTj1xJBsLUrZ2qjAtj524WICMhYvZNIFvmuPDT67S7b9KNnAPnYpibYeSQcEcPYTi0uAgjL0mMnqY2EZPMXQPJ3COk4jLboAZ2E9qmblqSsJ6oqMazIubWd6VdhOoBZ0QJJLU6dljCg0DCWPBOF3Z+YaKbJyFvbjqgjbNcWPq9xOiheIFxm7vQrLCXI9dbDzikVvf3gUP5v/V5DHfvSjNhGdhZFbLmpqo4mpzbflmcZBjUHoriucOpJ+dcDQISQio41CmmbO20TnwCQCrOPCPh9isE7OvlRSbhVfy5E/9tT611l1wn4LU5ifWK3OvUWGuZ4NCCNt3Ize/godLISPCHzpgVRbpikgNrZiSsJ4ohGP96+rXHqioHaqckvqFmqIVDaX8/04nHb0i+HY2gWA+O1B1OM9SFjph1b+iL0514stfikEKgKLom3a9qJMMHPymCS4hbXVrgUHpSq3+rdmFu9y6qheEAnB811dXz8u0uPHR9wkDY9J8YHmjIPEFT1OjScYIUe7D239G0i1Al2DKkccMEq44cudrk6jHvaH3dzU54JybUjZoRpNc8QJDKPVAVYKJXmZrz4XiF5qCVAPud5o91+CCbOUiHYgsnC5E/yWBiwGLfWICoyDFmI4VN5b52JlN6VZUTvvejuu265p1sjC9ioEcrmNuULW9SM4FlxUkBhJnWQWqE1Hudo8afpyZPE9JwON1jusOuQm36P16hrkkUPNg76J0iQ8e/1pn13KC0CC1MSCwAr3uYHBfXYNYFSbTN8FGvnUzC2ng27ujUGhCSzkMwY1v20NV1Nb1Tsd3wuu+0RODi5tlO3Ds2efGotddXlAINC5IdnyQyS69z0jFNClw0+eAWne+hgI2+R0hIuL5/RlCfxrNMvjlSkS/OcKLckxxIX7BwaKuu+yCXZYLnyUNA3mVPn9MK1MkoRm3HSVH6V7bwaPdz+igBC69xJO2Eyp2ygOFIPrjk4HlqlQWOn5DzlGKvh6Q476NWyxc2HOmJt83wee6j9lruABeNDPKVTUxx0Cq92gZ2nY7hwb0RnDc7pE1tb+qfjkMUF/Q/wGWhI5C0PqJDVisnO6V5KdPhRlrWfvaNiGcORrHjlCV2QrPHI6k3pSOQlKXFghgJ1C0VAuZfJWDad4X4kfpu9UfrpeNfcxxuEbH9lLro0Rykls9PN8LreVAuMLlz1kWmgUUP5LM2dllJEug5uKUMSBpF5u0P2bBYE7zuSb3l0F+925fHmtVPFK8lU7hMab8Tl005YV9cnmdOHGdwofXavndqp7iOzL6COe94RO7D8pJ1fctVBkTH8u1RlD9GHCdwoXWS0o30qZcY9KwmmH0tmfGYkham6kaQnMq+VNZ4PECWl8pK/jnpxvlPACQHouWj2oOjjDBijqlYkfot1kxeFPIurAKzLzY3oL+Qh6oWXs9v0uWdGZBkMFRRcOMgeRPVABSKWdLTAC0/zPRUTWZAPaoOTQD35Kv6A7ycMMB0elxDltRL4fsh2M/T6NBxDHieJmHV2Q885UqIYz18HgMeeKKKxW+kfxvArFzrOUi/b0Cw1cAn0iRvt/3IYJadKw+PDMo1i1/ARC+jmH58P0th5fuz04jiVjyp/VVidVacUnNsSGohZw2HCsgekKTu7JGUgVJOcHIH1AOJ7QX4NWq71KBIRx7qGOZmo9Z6yye3EdQzJwXKwNxv2tZdj2gbwDvu0frqsFLH1QdQwgSvA/BIzqqzcIcYB8cGXGhdnsmFo7aJ+gFK8jiw9YPQLRSGiEfVPmBrHiAqWdqmwBaAT1RbkcJOx5sAoUbNw7Va26n/CJJrEH+YfSUYWzmARxMdSV+NoPu3mR6s1QpGTm8cILmEtV03wBGjuWnmAJqbaC+nEWCPGjFq9Lfi1HSPlzrnQRDpNHkhvyxJYE4B/NlUz2qqEYWWNMaPoN61IbV36YhHwNgKMFyhpaImp42DEfE8LrpfN0qdGWtma5Fg/CTFPECg+Yl2avPbUdTXlcB8BBF/zDeY/M1BmYThD1WBs2VgbB7Ay6wBiwUAvh2cv9r7PblMTTHi79bpuZL6Gz4bTFgIxqrzDIsDLAjOd4GLO3Dxf+/qtdDMFZp1ACXNVdyJy8JVAJsJhukAq9IZGKmu8+DiMUBoBOP7EPR8nM+5RS04awJSqj3diCIW3wiGSjA2FgwVABsRB8fKAF5KrwJ0fxoFWDs4bwdDK4Cv6UQ+wJsh8k/Buo7BN7RZrZDMTPd/+8hFxTZ/WhYAAAAASUVORK5CYII=";
const _imports_16 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAMIklEQVR4Xu2de3BcVRnAf99mA4XWsZR3doEoioBAX9hSrBZK07SCFATRjiCt4JSHMyo4UxxgqA4gzPDQP7BlZCxMccCCw0MQmgRbpNKWgqEwUF7SYHfT2oIt0CdJ7uecu7tJNtnHvbt3791t7vkvmXO+8+33O4/vnPudc4QaSfrMEY1EI6PRyPGINoI0ohwCHIEwAnQESDT1c7QbZAeq24HtiGxGSGDpW4h00N39iszc3FELP12qUUldTpTdsVOp5yzgDGAMiIHhZTLwVoOuRHUF9Z1r5Ey6vazAC1lVA0gXNw4j/lkzGrkQ4RxgpBc/0IWM7Yg+heqjRDuXyZnscVG2YlkDB6QtDV8nwhwbjP9Q8hnWwHqciCySqYk1FbO+A8GBALKHsJ7YD1D5CXCqAz2DyyLaDno7dZ1PBNGrfAXUC8aSGxC+FJzVS6hZSRDhDuoS9/oJyjdA2tbwPazIzTUHZiBLNZ6gXidNnU+UgNl1kYoD0r83fIWeyKK0N+ZaweotoCuo42cyNbmukjpWDJA9nHXHrwe9oW99UsmfEoBsYTfK7UQTt1dq2KsIoFSvkYdBxgRgNv+rNI5ERGfL1M63va7cc0DaFrsUFTOkDfNa2aqWZ3oTeqVMSz7gpZ6eAdLlDKM7djfIFV4qWHuydCHR5DVeDXmeANLHRo5kxPBHQKbVnkEroLFoK5/uvEjO3262k8pKZQPS5448hp66tpp3n8syY87C7xLpaZKzNn1QjuiyAKXgRFYg0liOEvtw2Q1Ees4sB1LJgEI4jptVWZBKAhTCcQwnk7FkSK4B2Q7B8BFrwznHNaR32bFjglvHwRWgtCv919Bbcw0nVcB4d3XJc9244O4AtcYWhuucEuH0FtOF0pS8yqkUx4DSOwT3OxUc5strAUV0rtMdB0eA0jvSrw657ZtKtTKzLRSxxjrZuysKKD3vrBoyG5+VgjJIrrYTTU4oFqhSHFBr/CZggW96D6WKLGuBNHf+qtBPLghIW2JjEFkVDm0VajVCFxHr5EJDXWFArbHlICYuLUyVs8ByaUpMzSc+LyBtbZgFkccrp1coOW0BRazZMq3zz7kskhNQ2jFoBzk+NKMPFlDeoz5xQi6HITegtvhPUX7rg2phFRkLiM7JtTYaBMjuPV3xdxHiofV8tECeXjQYkIlf08jDPqoWVlWgFw0G1Bozc8/QiMapvqaxVpoSE/qrlQVIW2Ongb3uqd50wDHQeDUcfAYMO9J7Pc3Rot0J2PI0fHAvdG3zvo78EhW1viHTO//Z26n659W22GJU5vipkau6Rk2BU+6F6HBXxUrOvHsjtF8Cu/5dsgjXBdW6T6Z3/ngQoJRrHd9URUdAsn/biBPha09C3f6uf3NZBfZ0wuom6P6kLDGOCyvbSEYbZG6HfT6pd4ir+oXp6MVw6ICorr1bwNrr+Lc7ylg3HPYblZ214x547zZHxb3JZJ2XCc7vA9QWW4LKxd5U4LGU+oNgymt9Qrt3wr9mwyftHleUFnfEd+Crd/aFlJtetHJiZerKJVV5UKYnLuntQelA961VO7yNmgzjHur7KX606DFL4JDMNqTC86P9cxjMMFefOMzsLNg9SFsbJkPkBf+aiMua6g6E+n7DTtf/oGeXSyEus594FzR8N11IYeXpsCfhUkjJ2RWra5I0/3dNGlDsepCbSxa3LxYMFpDpNjdIU/KWNKD4M8CMqrBzZH+IX5oaXvY/EszfXibtgV0dsHUZbHokv5MRNCBL26Q52ZQBZFZjfh97H2z2A4+FMffDgT5FEn/6Bqy7PPfQFTQgdKs0JQ+T1A0e0Q1eNtKSZO13KEx4ujK7A4UU2rUB1swYPKcFDgilu/uLoq3xC4BHSzKql4WOvxXitmfpf3r/Lnj/7ux6gwcEPdZ5oi2xaxG5w3+r9KvRzDNT3ujbJTD7Yet/CVv+5r1aUgfxOXDsNX2yc61zqgGQcp1oW/wPKJd7bwkXEj93Ckx8uq9A51J481oXAkrIOnCd84/x8JlZCqZTVQDSRWaIC96DO+g0GP9In3FyDTklMChY5LgFcPRl6SwKq2fAjjerCxA8K9oSb0fMbVIBphBQPuOvNXPQhsBPyIWA8gHaaIa44NdAIaDcgIRtoq2xrsBvAgkE0E1wdD/faHVzNc5BXaYHaYCzT6rqEFA+BBoCypimOnuQAVRjQ5xZ1I5dAgdNKtzxtyyD1+eB2RzNlY6rnSGutpyE2MVwwm+cjcqvzoEPn6tdQLaT0BLfGHgUqZs56OApMPZBB4AUVk2Dne/ULiDYYACZI/XB3hvqBpAx9+HfTsXF5UsmkOSjFbC1JX+eWhjiVF8dwls9NTEHPWuchOCP1rvtQQ3fh5FZEbKDe8q2VakvpvlSTfQg7jND3HwEP4O+BpvMDaBDzkp9dXWSXjo3f2hWTQDSX4i2HjULNNiTdG4AufHi1l2Wfx4qBmjcUhiVceUVVpzkX3RppvH1cGF1fPJ2A8iEYJlvNQdPLtyHtrbB+vn5g0LyATJBksfMSwXoZ5L5LP7iN530WS/zKJGeL2TCrrZW4PEK58q6AeRcauGcWYD6fQ8av3TwIvjtm2DjH72q2ZkcZZtMT4zKAGoN9IKkagZkIn/WzvI+BrwYJtFnZFryW9URuFiVgBQ+bofXroC95tCH3ykrcDHgg1vVBOjEO1NhxuYA1+bH8u/lVZZX70GuVA9K3RIfXPB8NQGqrOGdSR8YPG9DaoktQQI6fhICyganukSmJ39o/lkdB7g+PzZ1ei6TNt4Pb9/orLWVmivrQJjCCxNg7+ZSpXlZTumxzpcZqddV+gAtZhjxgI5AmrXNGW/0fXnv2QvmU8G2lV7+8D5ZhzbDSff0BUp2fQzPn1SZutxKtY9AJhpkbuqJtuxT3kEGMZ68CA4/O/vn7NmUetDRy5TriON/7oN3Ct4K5qUGRWTpYmlK/iiTKRuQeU9OIhVqtkX0MicbTPC8Xye4M+qYRvDS2dlRpT7iGFCVYjFJmvvezctxkUV8bWDvypmPcaYnRUf4YyITk/361fDxy/7UV7QWbZem5Lj+2XJcBWM/L+Nwu7hoje4zmGMojVeBmScOqMB1QSZGwdx/YALzO37v/wZofosoljVbmrOvJct1mVKUrvj68OJy922rvBK6kUTyuIxzkHMOyvwzvIK5PFOXUFpRfi7TE78bWDbfhX5hLyrByiUXUV1PMjluYO8Z5Gb3r8B+VjO8lqxkm7somLUwddSDeoe61vjyfe95TRem8ydraZfKGt3sG+etyOso9f7oOuRq2U2PTpIZ+d9iDS82D65NmE8KC2R6568LqVAckP0pIrY2vIXRa5LaTiJ5ei7HoOBCNZca6cc1zNVSB3it5hCVt5tua6zMLP4wbtEeFK6NPG9CiqVzpdnZg7iOAdlOQ0tsITLUH7ItF1iFHniyAZlvRrHYk4g0lavmkCyv2koyeW6xecf1HJS1gA0fGSy1bVX+kcHe+chcwFRXtzzw4/ulmsrvcsoG6kp78NbVHJTVk0JIzjCXAcdUUDIge04KIRWGVCacsgH1QopGzVG2LztrUkMll64nYs0s5x1vTwDZkGzHYfjS0LtLNz7jre3ceZHbV4dzNd2yhrisOSnlgt+NyLxyh84a7mMKuohE8ho3rnSh3+sZoAE7DguH4LbQbiy90ukOgdNG6Dkge8gznyl65CGQsU4Vqe182k63znayt+b2d1YEUO+uQ7xhPkTm78O9qQu1bubFzltlAR5HWKZQVgxQ75D3bGw0dWJubDUXG1S8PrcttMT85gKqFXRbV1ai1/TXyTeD2a+rqNyG1PTLkgbMe1jWjQPj10oEXbSYb4B6h71YfB6i14IcVVS76smQBqO3sCr5p0oNZxV1s93Y0t4VP8ruUfPTX2p9bSgudDVgXsbSe/wGk9ExcMPosvhERK8AmYXYzxMErhPmCIhYj6I80P89ORdgPcsavDEyi2/7fFJDM8gFqJzjMywT2bkd4Smw/kJiv2WZJ8o8s3SJgqoGUNauxAKinN4wETEPvctklIkeAzMr/g+xWEeEFVjSxqrEK37OLU55VSWgXMrbO+cSHU9EG+03xu2XkvVwkJE2PMWcWYmmy3Yj7EDZAZhzjR+h2gHSgWW9hVrrZObmDqdGCjLf/wHTkDjlDWfZvgAAAABJRU5ErkJggg==";
const _imports_17 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,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";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "recordImg",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { Modal } = ipkg;
    const routing = getRouting();
    const isShareShow = ref(false);
    const { proxy } = getCurrentInstance();
    const qrCodeUrl = ref("");
    const code = ref("");
    const chatList = ref([]);
    const ossUploaderRef = ref();
    const isLoading = ref(false);
    const showFn = (data) => {
      code.value = data;
      let source = "";
      qrCodeUrl.value = source + "/share/chatInfo/" + data;
      isShareShow.value = true;
      init();
    };
    const init = () => {
      let data = {
        code: code.value,
        localPreviewFlag: true
      };
      proxy.$api.queryShareAiRecordDetail(data).then((res) => {
        chatList.value = res.data;
      });
    };
    const uploadImg = (type) => {
      isLoading.value = true;
    };
    const onCopyUrl = (e) => {
      proxy.$CopyTex(e[0].url);
    };
    __expose({
      showFn
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Button = resolveComponent("Button");
      const _component_ossUploaderNew = __nuxt_component_0;
      const _directive_load = resolveDirective("load");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Modal), {
              modelValue: isShareShow.value,
              "onUpdate:modelValue": ($event) => isShareShow.value = $event,
              "class-name": "shareModal",
              title: "\u5206\u4EAB\u56FE\u7247\u9884\u89C8",
              width: 680
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="operation"${_scopeId2}><div class="btn"${_scopeId2}><img${ssrRenderAttr("src", _imports_17)} alt=""${_scopeId2}> \u590D\u5236\u56FE\u7247 </div><div class="btn"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}> \u4FDD\u5B58\u56FE\u7247 </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "operation" }, [
                      createVNode("div", {
                        class: "btn",
                        onClick: ($event) => uploadImg()
                      }, [
                        createVNode("img", {
                          src: _imports_17,
                          alt: ""
                        }),
                        createTextVNode(" \u590D\u5236\u56FE\u7247 ")
                      ], 8, ["onClick"]),
                      createVNode("div", {
                        class: "btn",
                        onClick: ($event) => uploadImg()
                      }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: ""
                        }),
                        createTextVNode(" \u4FDD\u5B58\u56FE\u7247 ")
                      ], 8, ["onClick"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="clearfix"${_scopeId2}><div${ssrRenderAttrs(mergeProps({
                    class: "shareModalContent",
                    id: "shareCanvas"
                  }, ssrGetDirectiveProps(_ctx, _directive_load, isLoading.value)))}${_scopeId2}><div class="content"${_scopeId2}><div class="logo"${_scopeId2}><img${ssrRenderAttr("src", unref(routing).configuration.homeLogo)} alt=""${_scopeId2}></div>`);
                  if (isShareShow.value) {
                    _push3(`<div class="dialogue"${_scopeId2}>`);
                    _push3(ssrRenderComponent(recordCom, {
                      ref: "recordComRef",
                      robotLogo: unref(_imports_1$1),
                      operation: false,
                      chatList: chatList.value
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="share-mask"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Button, { type: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u626B\u63CF\u4E8C\u7EF4\u7801\u67E5\u770B\u5B8C\u6574\u5185\u5BB9`);
                        } else {
                          return [
                            createTextVNode("\u626B\u63CF\u4E8C\u7EF4\u7801\u67E5\u770B\u5B8C\u6574\u5185\u5BB9")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="codeArea"${_scopeId2}><div class="qrcode" id="qrcodes"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(QrcodeVue, {
                          value: qrCodeUrl.value,
                          size: 92,
                          level: "H",
                          "render-as": "svg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(QrcodeVue, {
                            value: qrCodeUrl.value,
                            size: 92,
                            level: "H",
                            "render-as": "svg"
                          }, null, 8, ["value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><p${_scopeId2}>\u626B\u63CF\u4E8C\u7EF4\u7801</p><div class="desc"${_scopeId2}><span${_scopeId2}>\u5BF9\u8BDD</span><span${_scopeId2}>\u5199\u4F5C</span><span${_scopeId2}>\u7ED8\u753B</span></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "clearfix" }, [
                      withDirectives((openBlock(), createBlock("div", {
                        class: "shareModalContent",
                        id: "shareCanvas"
                      }, [
                        createVNode("div", { class: "content" }, [
                          createVNode("div", { class: "logo" }, [
                            createVNode("img", {
                              src: unref(routing).configuration.homeLogo,
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          isShareShow.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "dialogue"
                          }, [
                            createVNode(recordCom, {
                              ref: "recordComRef",
                              robotLogo: unref(_imports_1$1),
                              operation: false,
                              chatList: chatList.value
                            }, null, 8, ["robotLogo", "chatList"]),
                            createVNode("div", { class: "share-mask" }, [
                              createVNode(_component_Button, { type: "primary" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u626B\u63CF\u4E8C\u7EF4\u7801\u67E5\u770B\u5B8C\u6574\u5185\u5BB9")
                                ]),
                                _: 1
                              })
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "codeArea" }, [
                          createVNode("div", {
                            class: "qrcode",
                            id: "qrcodes"
                          }, [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(QrcodeVue, {
                                  value: qrCodeUrl.value,
                                  size: 92,
                                  level: "H",
                                  "render-as": "svg"
                                }, null, 8, ["value"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("p", null, "\u626B\u63CF\u4E8C\u7EF4\u7801"),
                          createVNode("div", { class: "desc" }, [
                            createVNode("span", null, "\u5BF9\u8BDD"),
                            createVNode("span", null, "\u5199\u4F5C"),
                            createVNode("span", null, "\u7ED8\u753B")
                          ])
                        ])
                      ])), [
                        [_directive_load, isLoading.value]
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Modal), {
                modelValue: isShareShow.value,
                "onUpdate:modelValue": ($event) => isShareShow.value = $event,
                "class-name": "shareModal",
                title: "\u5206\u4EAB\u56FE\u7247\u9884\u89C8",
                width: 680
              }, {
                footer: withCtx(() => [
                  createVNode("div", { class: "operation" }, [
                    createVNode("div", {
                      class: "btn",
                      onClick: ($event) => uploadImg()
                    }, [
                      createVNode("img", {
                        src: _imports_17,
                        alt: ""
                      }),
                      createTextVNode(" \u590D\u5236\u56FE\u7247 ")
                    ], 8, ["onClick"]),
                    createVNode("div", {
                      class: "btn",
                      onClick: ($event) => uploadImg()
                    }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: ""
                      }),
                      createTextVNode(" \u4FDD\u5B58\u56FE\u7247 ")
                    ], 8, ["onClick"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "clearfix" }, [
                    withDirectives((openBlock(), createBlock("div", {
                      class: "shareModalContent",
                      id: "shareCanvas"
                    }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "logo" }, [
                          createVNode("img", {
                            src: unref(routing).configuration.homeLogo,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        isShareShow.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "dialogue"
                        }, [
                          createVNode(recordCom, {
                            ref: "recordComRef",
                            robotLogo: unref(_imports_1$1),
                            operation: false,
                            chatList: chatList.value
                          }, null, 8, ["robotLogo", "chatList"]),
                          createVNode("div", { class: "share-mask" }, [
                            createVNode(_component_Button, { type: "primary" }, {
                              default: withCtx(() => [
                                createTextVNode("\u626B\u63CF\u4E8C\u7EF4\u7801\u67E5\u770B\u5B8C\u6574\u5185\u5BB9")
                              ]),
                              _: 1
                            })
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "codeArea" }, [
                        createVNode("div", {
                          class: "qrcode",
                          id: "qrcodes"
                        }, [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(QrcodeVue, {
                                value: qrCodeUrl.value,
                                size: 92,
                                level: "H",
                                "render-as": "svg"
                              }, null, 8, ["value"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("p", null, "\u626B\u63CF\u4E8C\u7EF4\u7801"),
                        createVNode("div", { class: "desc" }, [
                          createVNode("span", null, "\u5BF9\u8BDD"),
                          createVNode("span", null, "\u5199\u4F5C"),
                          createVNode("span", null, "\u7ED8\u753B")
                        ])
                      ])
                    ])), [
                      [_directive_load, isLoading.value]
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ossUploaderNew, {
        ref_key: "ossUploaderRef",
        ref: ossUploaderRef,
        style: { "display": "none" },
        onUploadSuccess: onCopyUrl
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cChat/recordImg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recordNew",
  __ssrInlineRender: true,
  props: {
    chatList: { default: [] },
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
    operation: { type: Boolean, default: true },
    groupId: {},
    isShowName: { type: Boolean, default: false },
    functionHideList: { default: [] },
    isCreate: { type: Boolean, default: false }
  },
  emits: ["scrollTop", "scrollBottom", "getContent", "query", "update:isLoading", "getAdvanced", "response", "scrolls", "employee", "update:shareState", "answer", "createAction"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const routing = getRouting();
    const cCreateRef = ref();
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
    const iframeModalShow = ref(false);
    const iframeUrl = ref("");
    const editState = ref(false);
    const editItem = ref("");
    const shareChatState = ref(false);
    const isBottom = ref(true);
    const allChecked = ref(false);
    const recordImgRef = ref(null);
    const audioRef = ref(null);
    const audioSrc = ref("");
    const lastUserIndex = computed(() => {
      for (let i = chatList.value.length - 1; i >= 0; i--) {
        if (chatList.value[i].type === "USER") {
          return i;
        }
      }
      return -1;
    });
    const { chatList, robotPromptList, robotLogo, isLoading, isQuote, recordType, isShowTagView, showTagView, jubao, robotInfo, userCodeList, groupId, isShowName, isCreate } = toRefs(props);
    const chatRecordList = ref(null);
    const rollBottom = async () => {
    };
    const onEditChat = (item) => {
      editItem.value = JSON.parse(JSON.stringify(item));
      editState.value = !editState.value;
      rollBottom();
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
        isBottom.value = true;
        if (!isLoading.value) {
          emits("update:isLoading", true);
          emits("scrollBottom");
        }
      }
      if (distanceToBottom < 110) {
        isBottom.value = true;
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
    const onUrlArea = (item) => {
    };
    const onAnswer = async (record, index) => {
      shareChatState.value = false;
      let item = JSON.parse(JSON.stringify(record));
      await emits("answer", item);
      setTimeout(() => {
        chatList.value[index].content = "";
        chatList.value[index].list = [];
        chatList.value[index].urlList = "";
        chatList.value[index].promptList = null;
        chatList.value[index].robotInfo = {};
      }, 500);
    };
    const toCreateAction = (e1, e2) => {
      emits("createAction", {
        type: e1,
        record: e2
      });
    };
    const onShareChat = (record) => {
      record.single = true;
      shareChatState.value = true;
    };
    const onCheckAllChat = () => {
      chatList.value.forEach((item) => {
        item.single = allChecked.value;
      });
    };
    const onShareType = (type) => {
      let flag = true;
      let codeList = [];
      let text = "";
      chatList.value.forEach((item) => {
        if (item.single) {
          flag = false;
          codeList.push(item.recordCode);
          if (item.type == "USER") {
            text += "User:" + item.content + "\n\n";
          }
          if (item.type == "SYSTEM") {
            text += item.name + ":" + item.content + "\n\n";
          }
        }
      });
      if (flag) {
        return proxy.$Message.error("\u8BF7\u9009\u62E9\u804A\u5929\u8BB0\u5F55");
      }
      if (type == "LINK") {
        let source = "";
        let data = {
          codeList,
          groupId: groupId.value
        };
        proxy.$api.shareAiRecord(data).then((res) => {
          proxy.$CopyTex(source + "/share/chatInfo/" + res.data);
        });
      }
      if (type == "TEXT") {
        proxy.$CopyTex(text);
      }
      if (type == "IMAGE") {
        let data = {
          codeList,
          groupId: groupId.value
        };
        proxy.$api.shareAiRecord(data).then((res) => {
          recordImgRef.value.showFn(res.data);
        });
      }
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
      if (record.robotType == "FILE_ANALYSIS_ROBOT") {
        router.push("/robot/brain/networking");
      }
    };
    const onEditSubmit = () => {
      emits("submit", editItem.value);
    };
    const uploadSuccess = (e) => {
      e.forEach((item) => {
        const extension = item.name.split(".").pop().toLowerCase();
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
        if (imageExtensions.includes(extension)) {
          editItem.value.imgList.push(item);
        } else {
          editItem.value.fileList.push(item);
        }
      });
    };
    __expose({
      toMediate,
      rollBottom
    });
    watch(() => chatList.value, (newVal) => {
      if (newVal.length > 0) {
        setTimeout(() => {
          if (newVal[newVal.length - 1].type == "USER" && !newVal[newVal.length - 1].recordCode) {
            isBottom.value = true;
            rollBottom();
          } else {
            if (isScroll.value) {
              rollBottom();
            }
          }
        }, 300);
      } else {
        shareChatState.value = false;
        isScroll.value = true;
        isBottom.value = true;
      }
      editState.value = false;
      allChecked.value = true;
      chatList.value.forEach((item) => {
        if (!item.single) {
          allChecked.value = false;
        }
        if (item.content && item.content.indexOf("\u6CFD\u4E1C") != -1) {
          item.content = item.content.replace(/泽东/g, "**");
        }
        if (item.content && item.content.indexOf("\u6FA4\u6771") != -1) {
          item.content = item.content.replace(/澤東/g, "**");
        }
      });
    }, { deep: true });
    watch(() => visible.value, () => {
      if (visible.value) {
        getStaffList();
      }
    });
    watch(() => shareChatState.value, (item) => {
      emits("update:shareState", item);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      const _component_ossUploaderNew = __nuxt_component_0;
      const _component_Tooltip = resolveComponent("Tooltip");
      const _component_Image = resolveComponent("Image");
      const _component_Icon = resolveComponent("Icon");
      const _component_Poptip = resolveComponent("Poptip");
      const _component_Spin = resolveComponent("Spin");
      const _component_previewImg = __nuxt_component_1;
      const _component_cCreate = __nuxt_component_2;
      const _component_cModal = __nuxt_component_0$1;
      if (isShow.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "chatRecordList",
          ref_key: "chatRecordList",
          ref: chatRecordList
        }, _attrs))} data-v-a35bb5a3>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "recordTop", {}, null, _push2, _parent2, _scopeId);
              _push2(`<!--[-->`);
              ssrRenderList(unref(chatList), (item, index) => {
                _push2(`<div class="${ssrRenderClass([[item.type == "USER" ? "right" : "left", editState.value ? "editItem" : ""], "item clearfix"])}" data-v-a35bb5a3${_scopeId}>`);
                if (shareChatState.value) {
                  _push2(ssrRenderComponent(_component_Checkbox, {
                    class: "checkbox",
                    modelValue: item.single,
                    "onUpdate:modelValue": ($event) => item.single = $event
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate("")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(""))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (item.type == "SYSTEM") {
                  _push2(`<img class="chat-robot-logo"${ssrRenderAttr("src", item.log || item.robotLog || unref(robotLogo) || unref(_imports_1$1))} alt="" data-v-a35bb5a3${_scopeId}>`);
                } else {
                  _push2(`<img class="chat-robot-logo"${ssrRenderAttr("src", unref(routing).chatLogo)} alt="" data-v-a35bb5a3${_scopeId}>`);
                }
                if (item.type == "SYSTEM" && unref(isShowName)) {
                  _push2(`<div class="name" data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item.name)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (index === lastUserIndex.value && editState.value) {
                  _push2(`<div class="area" data-v-a35bb5a3${_scopeId}><div class="chat-textarea" data-v-a35bb5a3${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_ClientOnly, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_Input, {
                          class: "chat-textarea-input",
                          type: "textarea",
                          border: false,
                          autosize: { minRows: 4, maxRows: 4 },
                          rows: 4,
                          modelValue: editItem.value.content,
                          "onUpdate:modelValue": ($event) => editItem.value.content = $event
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_Input, {
                            class: "chat-textarea-input",
                            type: "textarea",
                            border: false,
                            autosize: { minRows: 4, maxRows: 4 },
                            rows: 4,
                            modelValue: editItem.value.content,
                            "onUpdate:modelValue": ($event) => editItem.value.content = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`<div class="editBut" data-v-a35bb5a3${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Button, {
                    size: "small",
                    onClick: ($event) => editState.value = false
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`\u53D6\u6D88`);
                      } else {
                        return [
                          createTextVNode("\u53D6\u6D88")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_Button, {
                    size: "small",
                    class: "ml-8",
                    onClick: onEditSubmit,
                    type: "primary"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`\u53D1\u9001`);
                      } else {
                        return [
                          createTextVNode("\u53D1\u9001")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                  if (!_ctx.functionHideList.includes("upload")) {
                    _push2(`<div class="upload" data-v-a35bb5a3${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_ossUploaderNew, {
                      modeType: "icon",
                      multiple: true,
                      onUploadSuccess: uploadSuccess
                    }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                  if (!_ctx.$isEmpty(editItem.value.imgList) || !_ctx.$isEmpty(editItem.value.fileList)) {
                    _push2(`<div class="fileListArea" data-v-a35bb5a3${_scopeId}>`);
                    if (!_ctx.$isEmpty(editItem.value.imgList)) {
                      _push2(`<div class="userImgListCom mt-12 clearfix" data-v-a35bb5a3${_scopeId}><!--[-->`);
                      ssrRenderList(editItem.value.imgList, (item2) => {
                        _push2(`<div class="userImgItem" data-v-a35bb5a3${_scopeId}><img class="del"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-a35bb5a3${_scopeId}><img class="userPic"${ssrRenderAttr("src", item2.url)} alt="" data-v-a35bb5a3${_scopeId}></div>`);
                      });
                      _push2(`<!--]--></div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (!_ctx.$isEmpty(editItem.value.fileList)) {
                      _push2(`<div class="userFileListCom clearfix" data-v-a35bb5a3${_scopeId}><!--[-->`);
                      ssrRenderList(editItem.value.fileList, (item2, index2) => {
                        _push2(`<div class="userFileItem" data-v-a35bb5a3${_scopeId}><img class="del"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-a35bb5a3${_scopeId}><img class="filePic"${ssrRenderAttr("src", _ctx.$loadFileImages(item2.name))} alt="" data-v-a35bb5a3${_scopeId}><h3 data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item2.name.split(".")[0])}</h3><p data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item2.name.split(".")[1].toUpperCase())}\uFF0C${ssrInterpolate(item2.size)}KB</p></div>`);
                      });
                      _push2(`<!--]--></div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (index !== lastUserIndex.value || index === lastUserIndex.value && !editState.value) {
                  _push2(`<div class="${ssrRenderClass([item.type == "SYSTEM" ? "left-item" : "", "item-content"])}" data-v-a35bb5a3${_scopeId}>`);
                  if (_ctx.$isEmpty(item.content) && !item.barrageData && _ctx.$isEmpty(item.robotInfo)) {
                    _push2(`<div style="${ssrRenderStyle({ "min-width": "20px" })}" data-v-a35bb5a3${_scopeId}><span class="circle" data-v-a35bb5a3${_scopeId}></span></div>`);
                  } else {
                    _push2(`<!--[-->`);
                    if (index == 0 && unref(recordType) == "picedit" && item.chatType == "picedit") {
                      _push2(`<!--[--><div data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item.content)}</div><div class="tag-list" data-v-a35bb5a3${_scopeId}><!--[-->`);
                      ssrRenderList(unref(robotPromptList), (iten) => {
                        _push2(`<div class="tag" data-v-a35bb5a3${_scopeId}>${ssrInterpolate(iten)}</div>`);
                      });
                      _push2(`<!--]--></div><!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (!_ctx.$isEmpty(item.urlList)) {
                      _push2(`<div class="url_list" data-v-a35bb5a3${_scopeId}><div class="pointer select text-hide" data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item.urlList[item.urlList.length - 1].content)} <span class="${ssrRenderClass([item.urlState ? "active" : "", "icon"])}" data-v-a35bb5a3${_scopeId}></span></div>`);
                      if (item.urlState) {
                        _push2(`<div class="url-area" data-v-a35bb5a3${_scopeId}><!--[-->`);
                        ssrRenderList(item.urlList, (data, idx) => {
                          _push2(`<!--[-->`);
                          if (data.chatType !== "URL") {
                            _push2(`<p class="mb-5" data-v-a35bb5a3${_scopeId}>${ssrInterpolate(data.content)}</p>`);
                          } else {
                            _push2(`<!---->`);
                          }
                          if (data.chatType == "URL") {
                            _push2(`<p class="pointer primaryColo mb-5" data-v-a35bb5a3${_scopeId}>${ssrInterpolate(data.content.split("[]")[0])}</p>`);
                          } else {
                            _push2(`<!---->`);
                          }
                          _push2(`<!--]-->`);
                        });
                        _push2(`<!--]--></div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (item.type == "USER") {
                      _push2(`<!--[-->`);
                      if (item.chatType == "CHAT" || item.chatType == "") {
                        _push2(`<pre data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item.content)}</pre>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      if (index === lastUserIndex.value && _ctx.operation && !_ctx.functionHideList.includes("edit")) {
                        _push2(ssrRenderComponent(_component_Tooltip, {
                          content: "\u7F16\u8F91\u6D88\u606F",
                          class: "editChatArea",
                          placement: "bottom",
                          onClick: ($event) => onEditChat(item)
                        }, {
                          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                            if (_push3) {
                              _push3(`<div class="editChat" data-v-a35bb5a3${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} alt="" data-v-a35bb5a3${_scopeId2}></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "editChat" }, [
                                  createVNode("img", {
                                    src: _imports_4$1,
                                    alt: ""
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent2, _scopeId));
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
                      _push2(`<video width="658" height="444" controls${ssrRenderAttr("src", item.content)} data-v-a35bb5a3${_scopeId}></video>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (item.chatType == "MUSIC") {
                      _push2(`<video width="658" height="444" controls${ssrRenderAttr("src", item.content)} data-v-a35bb5a3${_scopeId}></video>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (item.chatType == "POSTER_TEMPLATE_ROBOT") {
                      _push2(`<div data-v-a35bb5a3${_scopeId}><div style="${ssrRenderStyle({ "margin-bottom": "8px" })}" data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item.content)}</div>`);
                      if (!_ctx.$isEmpty(item.list)) {
                        _push2(`<div class="item-content-list" data-v-a35bb5a3${_scopeId}><!--[-->`);
                        ssrRenderList(item.list, (iten) => {
                          _push2(`<div class="item-img" data-v-a35bb5a3${_scopeId}>`);
                          _push2(ssrRenderComponent(_component_Image, {
                            class: "img",
                            src: iten.url,
                            fit: "cover"
                          }, null, _parent2, _scopeId));
                          _push2(`<div class="cover" data-v-a35bb5a3${_scopeId}><div class="btn" data-v-a35bb5a3${_scopeId}>\u9AD8\u7EA7\u7F16\u8F91</div></div></div>`);
                        });
                        _push2(`<!--]--></div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (item.type == "SYSTEM" && item.chatType !== "SUGGEST_ROBOT" && index != 0) {
                      _push2(`<div class="officialTip" data-v-a35bb5a3${_scopeId}>`);
                      if (unref(proxy).$judgmentSorce()) {
                        _push2(`<img${ssrRenderAttr("src", "https://hz-oss.chatdzq.com/file/chatdzq/js/Frame_1912054865@2x.png?v=" + Date.now())} alt="" data-v-a35bb5a3${_scopeId}>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (item.type == "SYSTEM" && index != 0 && _ctx.operation) {
                      _push2(`<div class="bottom-action" data-v-a35bb5a3${_scopeId}><div class="bottom-action-left" data-v-a35bb5a3${_scopeId}>`);
                      if (!_ctx.functionHideList.includes("answer")) {
                        _push2(`<div class="bottom-action-item" data-v-a35bb5a3${_scopeId}>`);
                        _push2(ssrRenderComponent(_component_Icon, { type: "md-sync" }, null, _parent2, _scopeId));
                        _push2(` \u91CD\u65B0\u56DE\u7B54 </div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      if (unref(router).currentRoute.value.path.indexOf("/enterprise/flow") != -1 && index != 0) {
                        _push2(`<div class="bottom-action-item" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-a35bb5a3${_scopeId}> \u5B8C\u6574\u54CD\u5E94 </div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      if (!_ctx.functionHideList.includes("quote")) {
                        _push2(`<!--[-->`);
                        if (!_ctx.$isEmpty(item.quoteNum) && item.quoteNum != 0 || !_ctx.$isEmpty(item.importVectorCode)) {
                          _push2(`<div class="bottom-action-item quotes" data-v-a35bb5a3${_scopeId}>${ssrInterpolate(!_ctx.$isEmpty(item.quoteNum) ? item.quoteNum : item.importVectorCode.length)}\u4E2A\u5F15\u7528 </div>`);
                        } else {
                          _push2(`<!---->`);
                        }
                        _push2(`<!--]-->`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div><div class="bottom-action-right" data-v-a35bb5a3${_scopeId}><div class="bottom-action-item" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-a35bb5a3${_scopeId}> \u590D\u5236 </div>`);
                      if (!_ctx.functionHideList.includes("share")) {
                        _push2(`<div class="bottom-action-item line" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-a35bb5a3${_scopeId}> \u5206\u4EAB </div>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`<div class="bottom-action-item" data-v-a35bb5a3${_scopeId}>`);
                      if (item.aiRecordEvaluateType == "GOOD_REVIEW") {
                        _push2(`<img${ssrRenderAttr("src", _imports_5)} alt="" data-v-a35bb5a3${_scopeId}>`);
                      } else {
                        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="" data-v-a35bb5a3${_scopeId}>`);
                      }
                      _push2(` \u8D5E </div><div class="bottom-action-item line" data-v-a35bb5a3${_scopeId}>`);
                      if (item.aiRecordEvaluateType == "BAD_REVIEW") {
                        _push2(`<img${ssrRenderAttr("src", _imports_7)} alt="" data-v-a35bb5a3${_scopeId}>`);
                      } else {
                        _push2(`<img${ssrRenderAttr("src", _imports_8)} alt="" data-v-a35bb5a3${_scopeId}>`);
                      }
                      _push2(` \u8E29 </div><div class="bottom-action-item" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_9)} alt="" data-v-a35bb5a3${_scopeId}> \u4E3E\u62A5 </div></div></div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (unref(isCreate) && item.type == "SYSTEM" && index != 0) {
                      _push2(`<div class="isCreate" data-v-a35bb5a3${_scopeId}><div class="isCreate-item" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_9$1)} data-v-a35bb5a3${_scopeId}><div data-v-a35bb5a3${_scopeId}>\u63D2\u5165</div></div><div class="isCreate-item" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_10)} data-v-a35bb5a3${_scopeId}><div data-v-a35bb5a3${_scopeId}>\u66FF\u6362</div></div><div class="isCreate-item" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_11)} data-v-a35bb5a3${_scopeId}><div data-v-a35bb5a3${_scopeId}>\u590D\u5236</div></div></div>`);
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
                  if (!_ctx.$isEmpty(item.robotPromptList)) {
                    _push2(`<div class="list" data-v-a35bb5a3${_scopeId}><h3 data-v-a35bb5a3${_scopeId}>\u60A8\u53EF\u4EE5\u544A\u8BC9\u6211\u9700\u8981\u521B\u4F5C\u4EC0\u4E48\u5185\u5BB9\uFF1F\u6BD4\u5982\u4E0B\u9762\uFF1A</h3><ul data-v-a35bb5a3${_scopeId}><!--[-->`);
                    ssrRenderList(item.robotPromptList, (item2, index2) => {
                      _push2(`<li data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item2)}</li>`);
                    });
                    _push2(`<!--]--></ul></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if ((!_ctx.$isEmpty(item.imgList) || !_ctx.$isEmpty(item.fileList)) && !editState.value) {
                  _push2(`<div class="fileListArea fileListChatArea clearfix" data-v-a35bb5a3${_scopeId}>`);
                  if (!_ctx.$isEmpty(item.imgList)) {
                    _push2(`<div class="userImgListCom clearfix" data-v-a35bb5a3${_scopeId}><!--[-->`);
                    ssrRenderList(item.imgList, (data, imgIndex) => {
                      _push2(`<div class="userImgItem" data-v-a35bb5a3${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_Image, {
                        class: "userPic",
                        onClick: ($event) => previewImgRef.value.showFn(data.url),
                        src: data.url,
                        fit: "cover"
                      }, null, _parent2, _scopeId));
                      _push2(`</div>`);
                    });
                    _push2(`<!--]--></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (!_ctx.$isEmpty(item.fileList)) {
                    _push2(`<div class="userFileListCom clearfix" data-v-a35bb5a3${_scopeId}><!--[-->`);
                    ssrRenderList(item.fileList, (data, fileIndex) => {
                      _push2(`<div class="userFileItem" data-v-a35bb5a3${_scopeId}><img class="filePic"${ssrRenderAttr("src", _ctx.$loadFileImages(data.name))} alt="" data-v-a35bb5a3${_scopeId}><h3 data-v-a35bb5a3${_scopeId}>${ssrInterpolate(data.name.split(".")[0])}</h3><p data-v-a35bb5a3${_scopeId}>${ssrInterpolate(data.name.split(".")[1].toUpperCase())}\uFF0C${ssrInterpolate(data.size)}KB</p></div>`);
                    });
                    _push2(`<!--]--></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (!_ctx.$isEmpty(item.promptList)) {
                  _push2(`<div class="anaysisQuestions clearfix" data-v-a35bb5a3${_scopeId}><div class="anaysisQuestionsTitle" data-v-a35bb5a3${_scopeId}>\u4F60\u53EF\u4EE5\u7EE7\u7EED\u95EE\u6211</div><div class="anaysisQuestionsList clearfix" data-v-a35bb5a3${_scopeId}><!--[-->`);
                  ssrRenderList(item.promptList, (item2, index2) => {
                    _push2(`<div class="anaysisQuestionsItem" data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item2)} <img${ssrRenderAttr("src", _imports_12)} data-v-a35bb5a3${_scopeId}></div>`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (!_ctx.$isEmpty(item.robotInfo)) {
                  _push2(`<div class="recRobots" data-v-a35bb5a3${_scopeId}><p class="gary" data-v-a35bb5a3${_scopeId}>\u63A8\u8350\u4F7F\u7528</p><div class="robotItem" data-v-a35bb5a3${_scopeId}>`);
                  if (!_ctx.$isEmpty(item.robotInfo.robotLog)) {
                    _push2(`<img${ssrRenderAttr("src", item.robotInfo.robotLog)} data-v-a35bb5a3${_scopeId}>`);
                  } else {
                    _push2(`<img${ssrRenderAttr("src", _imports_1$1)} data-v-a35bb5a3${_scopeId}>`);
                  }
                  _push2(`<h2 data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item.robotInfo.robotName)}</h2><p class="text-hide" data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item.robotInfo.robotRemark)}</p><em class="right-arrow" data-v-a35bb5a3${_scopeId}></em></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.intentionalAnalysisFlag) {
                  _push2(`<div class="item questionsCom clearfix left" data-v-a35bb5a3${_scopeId}><div class="questions" data-v-a35bb5a3${_scopeId}><div class="questions-left" data-v-a35bb5a3${_scopeId}><div class="left-user" data-v-a35bb5a3${_scopeId}><div class="userLogo" style="${ssrRenderStyle("background-image:url(" + (item.intentionalAnalysisLog ? item.intentionalAnalysisLog : unref(_imports_1$2)) + ");")}" data-v-a35bb5a3${_scopeId}></div><div data-v-a35bb5a3${_scopeId}>${ssrInterpolate(item.intentionalAnalysisName)} `);
                  if (item.intentionalAnalysisType == "ROBOT" && !_ctx.$isEmpty(item.intentionalAnalysisLabel)) {
                    _push2(`<span data-v-a35bb5a3${_scopeId}> [${ssrInterpolate(item.intentionalAnalysisLabel)}]</span>`);
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
                        _push3(`<div class="tagList" data-v-a35bb5a3${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Spin, {
                          fix: "",
                          show: popLoading.value
                        }, null, _parent3, _scopeId2));
                        _push3(`<!--[-->`);
                        ssrRenderList(robotList.value, (itemData) => {
                          _push3(`<div class="tag-item" data-v-a35bb5a3${_scopeId2}><div class="userLogo" style="${ssrRenderStyle("background-image:url(" + (itemData.robotLogo ? itemData.robotLogo : itemData.userLogo ? itemData.userLogo : unref(_imports_1$2)) + ");")}" data-v-a35bb5a3${_scopeId2}></div><div data-v-a35bb5a3${_scopeId2}>${ssrInterpolate(item.intentionalAnalysisType == "ROBOT" ? itemData.name : itemData.userName)} `);
                          if (item.intentionalAnalysisType == "ROBOT" && !_ctx.$isEmpty(item.intentionalAnalysisLabel)) {
                            _push3(`<span data-v-a35bb5a3${_scopeId2}> [${ssrInterpolate(item.intentionalAnalysisLabel)}]</span>`);
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
                                  style: "background-image:url(" + (itemData.robotLogo ? itemData.robotLogo : itemData.userLogo ? itemData.userLogo : unref(_imports_1$2)) + ");"
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
                        _push3(`<div class="questions-right" data-v-a35bb5a3${_scopeId2}><div class="right-switch" data-v-a35bb5a3${_scopeId2}></div><div data-v-a35bb5a3${_scopeId2}>${ssrInterpolate(item.intentionalAnalysisType == "ROBOT" ? "\u6362\u4E2AAI\u7B54" : "\u6362\u4E2A\u4EBA\u7B54")}</div></div>`);
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
                _push2(`<div class="item clearfix left" data-v-a35bb5a3${_scopeId}><img class="chat-robot-logo"${ssrRenderAttr("src", unref(_imports_1$1))} alt="" data-v-a35bb5a3${_scopeId}><div class="item-content left-item" style="${ssrRenderStyle({ "min-width": "20px" })}" data-v-a35bb5a3${_scopeId}><span class="circle" data-v-a35bb5a3${_scopeId}></span></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (shareChatState.value) {
                _push2(`<div class="shareChat" data-v-a35bb5a3${_scopeId}><div class="shareChatArea" data-v-a35bb5a3${_scopeId}><div class="shareCheckAll" data-v-a35bb5a3${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Checkbox, {
                  class: "checkbox",
                  modelValue: allChecked.value,
                  "onUpdate:modelValue": ($event) => allChecked.value = $event,
                  onOnChange: ($event) => onCheckAllChat()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u5168\u9009`);
                    } else {
                      return [
                        createTextVNode("\u5168\u9009")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="shareItem" data-v-a35bb5a3${_scopeId}><div class="shareItem-icon" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_15)} alt="" data-v-a35bb5a3${_scopeId}></div><div class="shareItem-title" data-v-a35bb5a3${_scopeId}>\u5206\u4EAB\u94FE\u63A5</div></div><div class="shareItem" data-v-a35bb5a3${_scopeId}><div class="shareItem-icon" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_16)} alt="" data-v-a35bb5a3${_scopeId}></div><div class="shareItem-title" data-v-a35bb5a3${_scopeId}>\u590D\u5236\u6587\u672C</div></div><div class="shareItem" data-v-a35bb5a3${_scopeId}><div class="shareItem-icon" data-v-a35bb5a3${_scopeId}><img${ssrRenderAttr("src", _imports_17)} alt="" data-v-a35bb5a3${_scopeId}></div><div class="shareItem-title" data-v-a35bb5a3${_scopeId}>\u751F\u6210\u56FE\u7247</div></div><div class="delShareChat" data-v-a35bb5a3${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, { type: "ios-close-circle" }, null, _parent2, _scopeId));
                _push2(`</div></div><p data-v-a35bb5a3${_scopeId}>\u8BF7\u9075\u5B88<a data-v-a35bb5a3${_scopeId}>\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B</a>\uFF0CAI\u7ED3\u679C\u7531\u5404\u5927\u6A21\u578B\u8F93\u51FA\uFF0C\u5176\u5185\u5BB9\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4EE3\u8868\u6211\u4EEC\u7684\u89C2\u70B9\u548C\u6001\u5EA6</p></div>`);
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
              _push2(ssrRenderComponent(_component_cModal, {
                modelValue: iframeModalShow.value,
                "onUpdate:modelValue": ($event) => iframeModalShow.value = $event,
                "mask-closable": false,
                modalWidth: 788
              }, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="modal-title" data-v-a35bb5a3${_scopeId2}>\u8BBF\u95EE</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "modal-title" }, "\u8BBF\u95EE")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<iframe${ssrRenderAttr("src", iframeUrl.value)} frameborder="0" width="788" height="500" data-v-a35bb5a3${_scopeId2}></iframe>`);
                  } else {
                    return [
                      createVNode("iframe", {
                        src: iframeUrl.value,
                        frameborder: "0",
                        width: "788",
                        height: "500"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$1, {
                ref_key: "recordImgRef",
                ref: recordImgRef
              }, null, _parent2, _scopeId));
              _push2(`<audio style="${ssrRenderStyle({ "display": "none" })}" data-v-a35bb5a3${_scopeId}><source${ssrRenderAttr("src", audioSrc.value)} type="audio/mpeg" data-v-a35bb5a3${_scopeId}></audio>`);
            } else {
              return [
                renderSlot(_ctx.$slots, "recordTop", {}, void 0, true),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(chatList), (item, index) => {
                  return openBlock(), createBlock("div", {
                    class: ["item clearfix", [item.type == "USER" ? "right" : "left", editState.value ? "editItem" : ""]],
                    key: index
                  }, [
                    shareChatState.value ? (openBlock(), createBlock(_component_Checkbox, {
                      key: 0,
                      class: "checkbox",
                      modelValue: item.single,
                      "onUpdate:modelValue": ($event) => item.single = $event
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(""))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                    item.type == "SYSTEM" ? (openBlock(), createBlock("img", {
                      key: 1,
                      class: "chat-robot-logo",
                      src: item.log || item.robotLog || unref(robotLogo) || unref(_imports_1$1),
                      alt: ""
                    }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                      key: 2,
                      class: "chat-robot-logo",
                      src: unref(routing).chatLogo,
                      alt: ""
                    }, null, 8, ["src"])),
                    item.type == "SYSTEM" && unref(isShowName) ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "name"
                    }, toDisplayString(item.name), 1)) : createCommentVNode("", true),
                    index === lastUserIndex.value && editState.value ? (openBlock(), createBlock("div", {
                      key: 4,
                      class: "area"
                    }, [
                      createVNode("div", { class: "chat-textarea" }, [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_Input, {
                              class: "chat-textarea-input",
                              type: "textarea",
                              border: false,
                              autosize: { minRows: 4, maxRows: 4 },
                              rows: 4,
                              modelValue: editItem.value.content,
                              "onUpdate:modelValue": ($event) => editItem.value.content = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "editBut" }, [
                          createVNode(_component_Button, {
                            size: "small",
                            onClick: ($event) => editState.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D6\u6D88")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_Button, {
                            size: "small",
                            class: "ml-8",
                            onClick: onEditSubmit,
                            type: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u53D1\u9001")
                            ]),
                            _: 1
                          })
                        ]),
                        !_ctx.functionHideList.includes("upload") ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "upload"
                        }, [
                          createVNode(_component_ossUploaderNew, {
                            modeType: "icon",
                            multiple: true,
                            onUploadSuccess: uploadSuccess
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      !_ctx.$isEmpty(editItem.value.imgList) || !_ctx.$isEmpty(editItem.value.fileList) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "fileListArea"
                      }, [
                        !_ctx.$isEmpty(editItem.value.imgList) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "userImgListCom mt-12 clearfix"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(editItem.value.imgList, (item2) => {
                            return openBlock(), createBlock("div", { class: "userImgItem" }, [
                              createVNode("img", {
                                class: "del",
                                onClick: ($event) => editItem.value.imgList.splice(index, 1),
                                src: _imports_2$1,
                                alt: ""
                              }, null, 8, ["onClick"]),
                              createVNode("img", {
                                class: "userPic",
                                onClick: ($event) => previewImgRef.value.showFn(item2.url),
                                src: item2.url,
                                alt: ""
                              }, null, 8, ["onClick", "src"])
                            ]);
                          }), 256))
                        ])) : createCommentVNode("", true),
                        !_ctx.$isEmpty(editItem.value.fileList) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "userFileListCom clearfix"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(editItem.value.fileList, (item2, index2) => {
                            return openBlock(), createBlock("div", { class: "userFileItem" }, [
                              createVNode("img", {
                                class: "del",
                                onClick: ($event) => editItem.value.fileList.splice(index2, 1),
                                src: _imports_2$1,
                                alt: ""
                              }, null, 8, ["onClick"]),
                              createVNode("img", {
                                class: "filePic",
                                src: _ctx.$loadFileImages(item2.name),
                                alt: ""
                              }, null, 8, ["src"]),
                              createVNode("h3", null, toDisplayString(item2.name.split(".")[0]), 1),
                              createVNode("p", null, toDisplayString(item2.name.split(".")[1].toUpperCase()) + "\uFF0C" + toDisplayString(item2.size) + "KB", 1)
                            ]);
                          }), 256))
                        ])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    index !== lastUserIndex.value || index === lastUserIndex.value && !editState.value ? (openBlock(), createBlock("div", {
                      key: 5,
                      class: ["item-content", item.type == "SYSTEM" ? "left-item" : ""]
                    }, [
                      _ctx.$isEmpty(item.content) && !item.barrageData && _ctx.$isEmpty(item.robotInfo) ? (openBlock(), createBlock("div", {
                        key: 0,
                        style: { "min-width": "20px" }
                      }, [
                        createVNode("span", { class: "circle" })
                      ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
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
                        !_ctx.$isEmpty(item.urlList) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "url_list"
                        }, [
                          createVNode("div", {
                            class: "pointer select text-hide",
                            onClick: ($event) => item.urlState = !item.urlState
                          }, [
                            createTextVNode(toDisplayString(item.urlList[item.urlList.length - 1].content) + " ", 1),
                            createVNode("span", {
                              class: ["icon", item.urlState ? "active" : ""]
                            }, null, 2)
                          ], 8, ["onClick"]),
                          item.urlState ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "url-area"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.urlList, (data, idx) => {
                              return openBlock(), createBlock(Fragment, null, [
                                data.chatType !== "URL" ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "mb-5"
                                }, toDisplayString(data.content), 1)) : createCommentVNode("", true),
                                data.chatType == "URL" ? (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "pointer primaryColo mb-5",
                                  onClick: ($event) => onUrlArea(data.content)
                                }, toDisplayString(data.content.split("[]")[0]), 9, ["onClick"])) : createCommentVNode("", true)
                              ], 64);
                            }), 256))
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        item.type == "USER" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                          item.chatType == "CHAT" || item.chatType == "" ? (openBlock(), createBlock("pre", { key: 0 }, toDisplayString(item.content), 1)) : createCommentVNode("", true),
                          index === lastUserIndex.value && _ctx.operation && !_ctx.functionHideList.includes("edit") ? (openBlock(), createBlock(_component_Tooltip, {
                            key: 1,
                            content: "\u7F16\u8F91\u6D88\u606F",
                            class: "editChatArea",
                            placement: "bottom",
                            onClick: ($event) => onEditChat(item)
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "editChat" }, [
                                createVNode("img", {
                                  src: _imports_4$1,
                                  alt: ""
                                })
                              ])
                            ]),
                            _: 2
                          }, 1032, ["onClick"])) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true),
                        item.type == "SYSTEM" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                          item.chatType == "CHAT" || item.chatType == "" ? (openBlock(), createBlock(contentCom, {
                            key: 0,
                            isShowTagView: index == 0 ? false : unref(isShowTagView),
                            showTagView: unref(showTagView) ? unref(showTagView) : unref(routing).showTagView,
                            content: item.content,
                            isLoad: unref(chatList).length - 1 == index && index != 0
                          }, null, 8, ["isShowTagView", "showTagView", "content", "isLoad"])) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true),
                        item.chatType == "DRAW" ? (openBlock(), createBlock(_component_Image, {
                          key: 4,
                          preview: true,
                          "preview-list": [item.content],
                          class: "cImage-img",
                          src: item.content,
                          fit: "cover"
                        }, null, 8, ["preview-list", "src"])) : createCommentVNode("", true),
                        item.chatType == "VIDEO" ? (openBlock(), createBlock("video", {
                          key: 5,
                          width: "658",
                          height: "444",
                          controls: "",
                          src: item.content
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        item.chatType == "MUSIC" ? (openBlock(), createBlock("video", {
                          key: 6,
                          width: "658",
                          height: "444",
                          controls: "",
                          src: item.content
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        item.chatType == "POSTER_TEMPLATE_ROBOT" ? (openBlock(), createBlock("div", { key: 7 }, [
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
                        item.type == "SYSTEM" && item.chatType !== "SUGGEST_ROBOT" && index != 0 ? (openBlock(), createBlock("div", {
                          key: 8,
                          class: "officialTip"
                        }, [
                          unref(proxy).$judgmentSorce() ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: "https://hz-oss.chatdzq.com/file/chatdzq/js/Frame_1912054865@2x.png?v=" + Date.now(),
                            alt: ""
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        item.type == "SYSTEM" && index != 0 && _ctx.operation ? (openBlock(), createBlock("div", {
                          key: 9,
                          class: "bottom-action"
                        }, [
                          createVNode("div", { class: "bottom-action-left" }, [
                            !_ctx.functionHideList.includes("answer") ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "bottom-action-item",
                              onClick: ($event) => onAnswer(item, index)
                            }, [
                              createVNode(_component_Icon, { type: "md-sync" }),
                              createTextVNode(" \u91CD\u65B0\u56DE\u7B54 ")
                            ], 8, ["onClick"])) : createCommentVNode("", true),
                            unref(router).currentRoute.value.path.indexOf("/enterprise/flow") != -1 && index != 0 ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "bottom-action-item"
                            }, [
                              createVNode("img", {
                                src: _imports_2,
                                alt: ""
                              }),
                              createTextVNode(" \u5B8C\u6574\u54CD\u5E94 ")
                            ])) : createCommentVNode("", true),
                            !_ctx.functionHideList.includes("quote") ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                              !_ctx.$isEmpty(item.quoteNum) && item.quoteNum != 0 || !_ctx.$isEmpty(item.importVectorCode) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "bottom-action-item quotes",
                                onClick: withModifiers(($event) => onQueryKnowledgeBase(item), ["stop"])
                              }, toDisplayString(!_ctx.$isEmpty(item.quoteNum) ? item.quoteNum : item.importVectorCode.length) + "\u4E2A\u5F15\u7528 ", 9, ["onClick"])) : createCommentVNode("", true)
                            ], 64)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "bottom-action-right" }, [
                            createVNode("div", {
                              class: "bottom-action-item",
                              onClick: ($event) => toCopy(item)
                            }, [
                              createVNode("img", {
                                src: _imports_3,
                                alt: ""
                              }),
                              createTextVNode(" \u590D\u5236 ")
                            ], 8, ["onClick"]),
                            !_ctx.functionHideList.includes("share") ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "bottom-action-item line",
                              onClick: ($event) => onShareChat(item)
                            }, [
                              createVNode("img", {
                                src: _imports_4,
                                alt: ""
                              }),
                              createTextVNode(" \u5206\u4EAB ")
                            ], 8, ["onClick"])) : createCommentVNode("", true),
                            createVNode("div", {
                              class: "bottom-action-item",
                              onClick: withModifiers(($event) => toEvaluate(item, "GOOD_REVIEW"), ["stop"])
                            }, [
                              item.aiRecordEvaluateType == "GOOD_REVIEW" ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _imports_5,
                                alt: ""
                              })) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: _imports_6,
                                alt: ""
                              })),
                              createTextVNode(" \u8D5E ")
                            ], 8, ["onClick"]),
                            createVNode("div", {
                              class: "bottom-action-item line",
                              onClick: ($event) => toEvaluate(item, "BAD_REVIEW")
                            }, [
                              item.aiRecordEvaluateType == "BAD_REVIEW" ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _imports_7,
                                alt: ""
                              })) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: _imports_8,
                                alt: ""
                              })),
                              createTextVNode(" \u8E29 ")
                            ], 8, ["onClick"]),
                            createVNode("div", {
                              class: "bottom-action-item",
                              onClick: toReport
                            }, [
                              createVNode("img", {
                                src: _imports_9,
                                alt: ""
                              }),
                              createTextVNode(" \u4E3E\u62A5 ")
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        unref(isCreate) && item.type == "SYSTEM" && index != 0 ? (openBlock(), createBlock("div", {
                          key: 10,
                          class: "isCreate"
                        }, [
                          createVNode("div", {
                            class: "isCreate-item",
                            onClick: ($event) => toCreateAction("insertion", item)
                          }, [
                            createVNode("img", { src: _imports_9$1 }),
                            createVNode("div", null, "\u63D2\u5165")
                          ], 8, ["onClick"]),
                          createVNode("div", {
                            class: "isCreate-item",
                            onClick: ($event) => toCreateAction("switch", item)
                          }, [
                            createVNode("img", { src: _imports_10 }),
                            createVNode("div", null, "\u66FF\u6362")
                          ], 8, ["onClick"]),
                          createVNode("div", {
                            class: "isCreate-item",
                            onClick: ($event) => toCopy(item)
                          }, [
                            createVNode("img", { src: _imports_11 }),
                            createVNode("div", null, "\u590D\u5236")
                          ], 8, ["onClick"])
                        ])) : createCommentVNode("", true)
                      ], 64)),
                      item.barrageData ? (openBlock(), createBlock(barrageCom, {
                        key: 2,
                        list: item.barrageData,
                        onPrompt: chooseItem
                      }, null, 8, ["list"])) : createCommentVNode("", true),
                      !_ctx.$isEmpty(item.robotPromptList) ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: "list"
                      }, [
                        createVNode("h3", null, "\u60A8\u53EF\u4EE5\u544A\u8BC9\u6211\u9700\u8981\u521B\u4F5C\u4EC0\u4E48\u5185\u5BB9\uFF1F\u6BD4\u5982\u4E0B\u9762\uFF1A"),
                        createVNode("ul", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.robotPromptList, (item2, index2) => {
                            return openBlock(), createBlock("li", {
                              key: index2,
                              onClick: ($event) => chooseItem(item2)
                            }, toDisplayString(item2), 9, ["onClick"]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true),
                    (!_ctx.$isEmpty(item.imgList) || !_ctx.$isEmpty(item.fileList)) && !editState.value ? (openBlock(), createBlock("div", {
                      key: 6,
                      class: "fileListArea fileListChatArea clearfix"
                    }, [
                      !_ctx.$isEmpty(item.imgList) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "userImgListCom clearfix"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.imgList, (data, imgIndex) => {
                          return openBlock(), createBlock("div", {
                            class: "userImgItem",
                            key: imgIndex
                          }, [
                            createVNode(_component_Image, {
                              class: "userPic",
                              onClick: ($event) => previewImgRef.value.showFn(data.url),
                              src: data.url,
                              fit: "cover"
                            }, null, 8, ["onClick", "src"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true),
                      !_ctx.$isEmpty(item.fileList) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "userFileListCom clearfix"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.fileList, (data, fileIndex) => {
                          return openBlock(), createBlock("div", {
                            class: "userFileItem",
                            key: fileIndex
                          }, [
                            createVNode("img", {
                              class: "filePic",
                              src: _ctx.$loadFileImages(data.name),
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("h3", null, toDisplayString(data.name.split(".")[0]), 1),
                            createVNode("p", null, toDisplayString(data.name.split(".")[1].toUpperCase()) + "\uFF0C" + toDisplayString(data.size) + "KB", 1)
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    !_ctx.$isEmpty(item.promptList) ? (openBlock(), createBlock("div", {
                      key: 7,
                      class: "anaysisQuestions clearfix"
                    }, [
                      createVNode("div", { class: "anaysisQuestionsTitle" }, "\u4F60\u53EF\u4EE5\u7EE7\u7EED\u95EE\u6211"),
                      createVNode("div", { class: "anaysisQuestionsList clearfix" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.promptList, (item2, index2) => {
                          return openBlock(), createBlock("div", {
                            class: "anaysisQuestionsItem",
                            key: index2,
                            onClick: ($event) => chooseItem(item2)
                          }, [
                            createTextVNode(toDisplayString(item2) + " ", 1),
                            createVNode("img", { src: _imports_12 })
                          ], 8, ["onClick"]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    !_ctx.$isEmpty(item.robotInfo) ? (openBlock(), createBlock("div", {
                      key: 8,
                      class: "recRobots"
                    }, [
                      createVNode("p", { class: "gary" }, "\u63A8\u8350\u4F7F\u7528"),
                      createVNode("div", {
                        class: "robotItem",
                        onClick: ($event) => onChatRobot(item.robotInfo)
                      }, [
                        !_ctx.$isEmpty(item.robotInfo.robotLog) ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: item.robotInfo.robotLog
                        }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                          key: 1,
                          src: _imports_1$1
                        })),
                        createVNode("h2", null, toDisplayString(item.robotInfo.robotName), 1),
                        createVNode("p", { class: "text-hide" }, toDisplayString(item.robotInfo.robotRemark), 1),
                        createVNode("em", { class: "right-arrow" })
                      ], 8, ["onClick"])
                    ])) : createCommentVNode("", true),
                    item.intentionalAnalysisFlag ? (openBlock(), createBlock("div", {
                      key: 9,
                      class: "item questionsCom clearfix left"
                    }, [
                      createVNode("div", { class: "questions" }, [
                        createVNode("div", { class: "questions-left" }, [
                          createVNode("div", { class: "left-user" }, [
                            createVNode("div", {
                              class: "userLogo",
                              style: "background-image:url(" + (item.intentionalAnalysisLog ? item.intentionalAnalysisLog : unref(_imports_1$2)) + ");"
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
                                    style: "background-image:url(" + (itemData.robotLogo ? itemData.robotLogo : itemData.userLogo ? itemData.userLogo : unref(_imports_1$2)) + ");"
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
                    src: unref(_imports_1$1),
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    class: "item-content left-item",
                    style: { "min-width": "20px" }
                  }, [
                    createVNode("span", { class: "circle" })
                  ])
                ])) : createCommentVNode("", true),
                shareChatState.value ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "shareChat"
                }, [
                  createVNode("div", { class: "shareChatArea" }, [
                    createVNode("div", { class: "shareCheckAll" }, [
                      createVNode(_component_Checkbox, {
                        class: "checkbox",
                        modelValue: allChecked.value,
                        "onUpdate:modelValue": ($event) => allChecked.value = $event,
                        onOnChange: ($event) => onCheckAllChat()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u5168\u9009")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                    ]),
                    createVNode("div", {
                      class: "shareItem",
                      onClick: ($event) => onShareType("LINK")
                    }, [
                      createVNode("div", { class: "shareItem-icon" }, [
                        createVNode("img", {
                          src: _imports_15,
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "shareItem-title" }, "\u5206\u4EAB\u94FE\u63A5")
                    ], 8, ["onClick"]),
                    createVNode("div", {
                      class: "shareItem",
                      onClick: ($event) => onShareType("TEXT")
                    }, [
                      createVNode("div", { class: "shareItem-icon" }, [
                        createVNode("img", {
                          src: _imports_16,
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "shareItem-title" }, "\u590D\u5236\u6587\u672C")
                    ], 8, ["onClick"]),
                    createVNode("div", {
                      class: "shareItem",
                      onClick: ($event) => onShareType("IMAGE")
                    }, [
                      createVNode("div", { class: "shareItem-icon" }, [
                        createVNode("img", {
                          src: _imports_17,
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "shareItem-title" }, "\u751F\u6210\u56FE\u7247")
                    ], 8, ["onClick"]),
                    createVNode("div", {
                      class: "delShareChat",
                      onClick: ($event) => shareChatState.value = false
                    }, [
                      createVNode(_component_Icon, { type: "ios-close-circle" })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("p", null, [
                    createTextVNode("\u8BF7\u9075\u5B88"),
                    createVNode("a", null, "\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B"),
                    createTextVNode("\uFF0CAI\u7ED3\u679C\u7531\u5404\u5927\u6A21\u578B\u8F93\u51FA\uFF0C\u5176\u5185\u5BB9\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4EE3\u8868\u6211\u4EEC\u7684\u89C2\u70B9\u548C\u6001\u5EA6")
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
                }, null, 512),
                createVNode(_component_cModal, {
                  modelValue: iframeModalShow.value,
                  "onUpdate:modelValue": ($event) => iframeModalShow.value = $event,
                  "mask-closable": false,
                  modalWidth: 788
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "modal-title" }, "\u8BBF\u95EE")
                  ]),
                  default: withCtx(() => [
                    createVNode("iframe", {
                      src: iframeUrl.value,
                      frameborder: "0",
                      width: "788",
                      height: "500"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$1, {
                  ref_key: "recordImgRef",
                  ref: recordImgRef
                }, null, 512),
                createVNode("audio", {
                  ref_key: "audioRef",
                  ref: audioRef,
                  style: { "display": "none" }
                }, [
                  createVNode("source", {
                    src: audioSrc.value,
                    type: "audio/mpeg"
                  }, null, 8, ["src"])
                ], 512)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cChat/recordNew.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recordCom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a35bb5a3"]]);

export { _sfc_main$1 as _, _imports_2$1 as a, recordCom as r };
//# sourceMappingURL=recordNew-2087e423.mjs.map

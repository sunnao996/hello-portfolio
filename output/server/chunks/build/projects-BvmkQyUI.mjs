import { q as queryCollection, _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1 } from './client-nMb__N-H.mjs';
import { M as Motion, _ as _sfc_main$4 } from './PageCard-nyw2-Afi.mjs';
import { a as useAsyncData, c as createError, b as useAppConfig, d as useSeoMeta, i as _sfc_main$b, g as _sfc_main$g } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './Container-BSHj3i83.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'ipx';
import '@vueuse/core';
import 'vue-router';
import 'tailwindcss/colors';
import 'tailwind-merge';
import 'perfect-debounce';
import 'clsx';
import 'class-variance-authority';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("projects-page", () => {
      return queryCollection("pages").path("/projects").first();
    })), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Page not found",
        fatal: true
      });
    }
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("projects", () => {
      return queryCollection("projects").all();
    })), __temp = await __temp, __restore(), __temp);
    const { global } = useAppConfig();
    useSeoMeta({
      title: page.value?.seo?.title || page.value?.title,
      ogTitle: page.value?.seo?.title || page.value?.title,
      description: page.value?.seo?.description || page.value?.description,
      ogDescription: page.value?.seo?.description || page.value?.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$3;
      const _component_UPageHero = _sfc_main$2;
      const _component_UPageSection = _sfc_main$1;
      const _component_Motion = Motion;
      const _component_UPageCard = _sfc_main$4;
      const _component_ULink = _sfc_main$b;
      const _component_UIcon = _sfc_main$g;
      if (unref(page)) {
        _push(ssrRenderComponent(_component_UPage, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UPageHero, {
                title: unref(page).title,
                description: unref(page).description,
                ui: {
                  title: "!mx-0 text-left",
                  description: "!mx-0 text-left",
                  links: "justify-start"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UPageSection, { ui: {
                container: "!pt-0"
              } }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(projects), (project, index) => {
                      _push3(ssrRenderComponent(_component_Motion, {
                        key: project.title,
                        initial: { opacity: 0, transform: "translateY(10px)" },
                        "while-in-view": { opacity: 1, transform: "translateY(0)" },
                        transition: { delay: 0.2 * index },
                        "in-view-options": { once: true }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UPageCard, {
                              title: project.title,
                              description: project.description,
                              to: project.url,
                              orientation: "horizontal",
                              variant: "naked",
                              reverse: index % 2 === 1,
                              class: "group",
                              ui: {
                                wrapper: "max-sm:order-last"
                              }
                            }, {
                              leading: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="text-sm text-muted"${_scopeId4}>${ssrInterpolate(project.date)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", { class: "text-sm text-muted" }, toDisplayString(project.date), 1)
                                  ];
                                }
                              }),
                              footer: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_ULink, {
                                    to: project.url,
                                    class: "text-sm text-primary flex items-center"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` 查看详情 `);
                                        _push6(ssrRenderComponent(_component_UIcon, {
                                          name: "i-lucide-arrow-right",
                                          class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createTextVNode(" 查看详情 "),
                                          createVNode(_component_UIcon, {
                                            name: "i-lucide-arrow-right",
                                            class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                          })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_ULink, {
                                      to: project.url,
                                      class: "text-sm text-primary flex items-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" 查看详情 "),
                                        createVNode(_component_UIcon, {
                                          name: "i-lucide-arrow-right",
                                          class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["to"])
                                  ];
                                }
                              }),
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="object-cover w-full h-48 rounded-lg"${_scopeId4}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      src: project.image,
                                      alt: project.title,
                                      class: "object-cover w-full h-48 rounded-lg"
                                    }, null, 8, ["src", "alt"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UPageCard, {
                                title: project.title,
                                description: project.description,
                                to: project.url,
                                orientation: "horizontal",
                                variant: "naked",
                                reverse: index % 2 === 1,
                                class: "group",
                                ui: {
                                  wrapper: "max-sm:order-last"
                                }
                              }, {
                                leading: withCtx(() => [
                                  createVNode("span", { class: "text-sm text-muted" }, toDisplayString(project.date), 1)
                                ]),
                                footer: withCtx(() => [
                                  createVNode(_component_ULink, {
                                    to: project.url,
                                    class: "text-sm text-primary flex items-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 查看详情 "),
                                      createVNode(_component_UIcon, {
                                        name: "i-lucide-arrow-right",
                                        class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: project.image,
                                    alt: project.title,
                                    class: "object-cover w-full h-48 rounded-lg"
                                  }, null, 8, ["src", "alt"])
                                ]),
                                _: 2
                              }, 1032, ["title", "description", "to", "reverse"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project, index) => {
                        return openBlock(), createBlock(_component_Motion, {
                          key: project.title,
                          initial: { opacity: 0, transform: "translateY(10px)" },
                          "while-in-view": { opacity: 1, transform: "translateY(0)" },
                          transition: { delay: 0.2 * index },
                          "in-view-options": { once: true }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UPageCard, {
                              title: project.title,
                              description: project.description,
                              to: project.url,
                              orientation: "horizontal",
                              variant: "naked",
                              reverse: index % 2 === 1,
                              class: "group",
                              ui: {
                                wrapper: "max-sm:order-last"
                              }
                            }, {
                              leading: withCtx(() => [
                                createVNode("span", { class: "text-sm text-muted" }, toDisplayString(project.date), 1)
                              ]),
                              footer: withCtx(() => [
                                createVNode(_component_ULink, {
                                  to: project.url,
                                  class: "text-sm text-primary flex items-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 查看详情 "),
                                    createVNode(_component_UIcon, {
                                      name: "i-lucide-arrow-right",
                                      class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ]),
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: project.image,
                                  alt: project.title,
                                  class: "object-cover w-full h-48 rounded-lg"
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 2
                            }, 1032, ["title", "description", "to", "reverse"])
                          ]),
                          _: 2
                        }, 1032, ["transition"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UPageHero, {
                  title: unref(page).title,
                  description: unref(page).description,
                  ui: {
                    title: "!mx-0 text-left",
                    description: "!mx-0 text-left",
                    links: "justify-start"
                  }
                }, null, 8, ["title", "description"]),
                createVNode(_component_UPageSection, { ui: {
                  container: "!pt-0"
                } }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project, index) => {
                      return openBlock(), createBlock(_component_Motion, {
                        key: project.title,
                        initial: { opacity: 0, transform: "translateY(10px)" },
                        "while-in-view": { opacity: 1, transform: "translateY(0)" },
                        transition: { delay: 0.2 * index },
                        "in-view-options": { once: true }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UPageCard, {
                            title: project.title,
                            description: project.description,
                            to: project.url,
                            orientation: "horizontal",
                            variant: "naked",
                            reverse: index % 2 === 1,
                            class: "group",
                            ui: {
                              wrapper: "max-sm:order-last"
                            }
                          }, {
                            leading: withCtx(() => [
                              createVNode("span", { class: "text-sm text-muted" }, toDisplayString(project.date), 1)
                            ]),
                            footer: withCtx(() => [
                              createVNode(_component_ULink, {
                                to: project.url,
                                class: "text-sm text-primary flex items-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 查看详情 "),
                                  createVNode(_component_UIcon, {
                                    name: "i-lucide-arrow-right",
                                    class: "size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                  })
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            default: withCtx(() => [
                              createVNode("img", {
                                src: project.image,
                                alt: project.title,
                                class: "object-cover w-full h-48 rounded-lg"
                              }, null, 8, ["src", "alt"])
                            ]),
                            _: 2
                          }, 1032, ["title", "description", "to", "reverse"])
                        ]),
                        _: 2
                      }, 1032, ["transition"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-BvmkQyUI.mjs.map

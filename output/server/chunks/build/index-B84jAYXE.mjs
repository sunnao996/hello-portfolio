import { q as queryCollection, _ as _sfc_main$3$1, b as _sfc_main$a, a as _sfc_main$2$1 } from './client-nMb__N-H.mjs';
import { M as Motion, _ as _sfc_main$c } from './PageCard-nyw2-Afi.mjs';
import { _ as _sfc_main$b } from './ColorModeAvatar-D4e1kZzX.mjs';
import { a as useAsyncData, c as createError, d as useSeoMeta, b as useAppConfig, I as ImageComponent, e as _sfc_main$a$1, i as _sfc_main$b$1, j as useNuxtApp, k as useColorMode, g as _sfc_main$g, t as tv, P as Primitive, f as useForwardProps, h as _sfc_main$d } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, mergeProps, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString, watch, computed, renderSlot, useSlots, createCommentVNode, normalizeProps, guardReactiveProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { reactivePick } from '@vueuse/core';
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

var BaseSeparator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const ORIENTATIONS = ["horizontal", "vertical"];
    function isValidOrientation(orientation) {
      return ORIENTATIONS.includes(orientation);
    }
    const computedOrientation = computed(() => isValidOrientation(props.orientation) ? props.orientation : "horizontal");
    const ariaOrientation = computed(() => computedOrientation.value === "vertical" ? props.orientation : void 0);
    const semanticProps = computed(() => props.decorative ? { role: "none" } : {
      "aria-orientation": ariaOrientation.value,
      "role": "separator"
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "data-orientation": computedOrientation.value
      }, semanticProps.value), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "data-orientation"
      ]);
    };
  }
});
var BaseSeparator_default = BaseSeparator_vue_vue_type_script_setup_true_lang_default;
var Separator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  props: {
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BaseSeparator_default, normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var Separator_default = Separator_vue_vue_type_script_setup_true_lang_default;
const theme$2 = {
  "slots": {
    "root": "group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]",
    "content": "flex items-center shrink-0 justify-around gap-(--gap) min-w-max"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "content": "w-full"
      },
      "vertical": {
        "content": "h-full"
      }
    },
    "pauseOnHover": {
      "true": {
        "content": "group-hover:[animation-play-state:paused]"
      }
    },
    "reverse": {
      "true": {
        "content": "![animation-direction:reverse]"
      }
    },
    "overlay": {
      "true": {
        "root": 'before:absolute before:pointer-events-none before:content-[""] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[""] after:z-2 after:from-default after:to-transparent'
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "class": {
        "root": "flex-row",
        "content": "flex-row animate-[marquee_var(--duration)_linear_infinite] rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden"
      }
    },
    {
      "orientation": "horizontal",
      "overlay": true,
      "class": {
        "root": "before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "class": {
        "root": "flex-col",
        "content": "flex-col animate-[marquee-vertical_var(--duration)_linear_infinite] rtl:animate-[marquee-vertical-rtl_var(--duration)_linear_infinite] h-[fit-content] backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "overlay": true,
      "class": {
        "root": "before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden"
      }
    }
  ]
};
const _sfc_main$9 = {
  __name: "UMarquee",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    pauseOnHover: { type: Boolean, required: false },
    reverse: { type: Boolean, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    repeat: { type: Number, required: false, default: 4 },
    overlay: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.marquee || {} })({
      pauseOnHover: props.pauseOnHover,
      orientation: props.orientation,
      reverse: props.reverse,
      overlay: props.overlay
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.repeat, (i) => {
              _push2(`<div class="${ssrRenderClass(ui.value.content({ class: [props.ui?.content] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.repeat, (i) => {
                return openBlock(), createBlock("div", {
                  key: i,
                  class: ui.value.content({ class: [props.ui?.content] })
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___0f725b5dc80f752a7f475464f281c113/node_modules/@nuxt/ui/dist/runtime/components/Marquee.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { footer, global } = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$2$1;
      const _component_Motion = Motion;
      const _component_UColorModeAvatar = _sfc_main$b;
      const _component_UButton = _sfc_main$a$1;
      const _component_UMarquee = _sfc_main$9;
      const _component_NuxtImg = ImageComponent;
      _push(ssrRenderComponent(_component_UPageHero, mergeProps({ ui: {
        headline: "flex items-center justify-center",
        title: "text-shadow-md max-w-lg mx-auto",
        links: "mt-4 flex-col justify-center items-center"
      } }, _attrs), {
        headline: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.1,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.6,
                delay: 0.1
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UColorModeAvatar, {
                    class: "size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)",
                    light: unref(global).picture?.light,
                    dark: unref(global).picture?.dark,
                    alt: unref(global).picture?.alt
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UColorModeAvatar, {
                      class: "size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)",
                      light: unref(global).picture?.light,
                      dark: unref(global).picture?.dark,
                      alt: unref(global).picture?.alt
                    }, null, 8, ["light", "dark", "alt"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.1
                }
              }, {
                default: withCtx(() => [
                  createVNode(_component_UColorModeAvatar, {
                    class: "size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)",
                    light: unref(global).picture?.light,
                    dark: unref(global).picture?.dark,
                    alt: unref(global).picture?.alt
                  }, null, 8, ["light", "dark", "alt"])
                ]),
                _: 1
              })
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.1,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.6,
                delay: 0.1
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>${ssrInterpolate(__props.page.title)}</p><p${_scopeId2}>${ssrInterpolate(__props.page.subTitle)}</p>`);
                } else {
                  return [
                    createVNode("p", null, toDisplayString(__props.page.title), 1),
                    createVNode("p", null, toDisplayString(__props.page.subTitle), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.1
                }
              }, {
                default: withCtx(() => [
                  createVNode("p", null, toDisplayString(__props.page.title), 1),
                  createVNode("p", null, toDisplayString(__props.page.subTitle), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.1,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.6,
                delay: 0.3
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.page.description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.page.description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.3
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.page.description), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        links: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="gap-x-4 inline-flex"${_scopeId}><!--[-->`);
            ssrRenderList(unref(footer)?.links, (link, index) => {
              _push2(ssrRenderComponent(_component_Motion, {
                key: index,
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.5 + index * 0.1
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { size: "md", color: "neutral", variant: "ghost", ...link }), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UButton, mergeProps({ ref_for: true }, { size: "md", color: "neutral", variant: "ghost", ...link }), null, 16)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "gap-x-4 inline-flex" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(footer)?.links, (link, index) => {
                  return openBlock(), createBlock(_component_Motion, {
                    key: index,
                    initial: {
                      scale: 1.1,
                      opacity: 0,
                      filter: "blur(20px)"
                    },
                    animate: {
                      scale: 1,
                      opacity: 1,
                      filter: "blur(0px)"
                    },
                    transition: {
                      duration: 0.6,
                      delay: 0.5 + index * 0.1
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UButton, mergeProps({ ref_for: true }, { size: "md", color: "neutral", variant: "ghost", ...link }), null, 16)
                    ]),
                    _: 2
                  }, 1032, ["transition"]);
                }), 128))
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UMarquee, {
              "pause-on-hover": "",
              overlay: false,
              class: "py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.page.hero.images, (img, index) => {
                    _push3(ssrRenderComponent(_component_Motion, {
                      key: index,
                      initial: {
                        scale: 1.1,
                        opacity: 0,
                        filter: "blur(20px)"
                      },
                      animate: {
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)"
                      },
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtImg, mergeProps({
                            width: "234",
                            height: "234",
                            class: ["rounded-lg aspect-square object-cover", index % 2 === 0 ? "-rotate-2" : "rotate-2"]
                          }, { ref_for: true }, img), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtImg, mergeProps({
                              width: "234",
                              height: "234",
                              class: ["rounded-lg aspect-square object-cover", index % 2 === 0 ? "-rotate-2" : "rotate-2"]
                            }, { ref_for: true }, img), null, 16, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.page.hero.images, (img, index) => {
                      return openBlock(), createBlock(_component_Motion, {
                        key: index,
                        initial: {
                          scale: 1.1,
                          opacity: 0,
                          filter: "blur(20px)"
                        },
                        animate: {
                          scale: 1,
                          opacity: 1,
                          filter: "blur(0px)"
                        },
                        transition: {
                          duration: 0.6,
                          delay: index * 0.1
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtImg, mergeProps({
                            width: "234",
                            height: "234",
                            class: ["rounded-lg aspect-square object-cover", index % 2 === 0 ? "-rotate-2" : "rotate-2"]
                          }, { ref_for: true }, img), null, 16, ["class"])
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
              createVNode(_component_UMarquee, {
                "pause-on-hover": "",
                overlay: false,
                class: "py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.page.hero.images, (img, index) => {
                    return openBlock(), createBlock(_component_Motion, {
                      key: index,
                      initial: {
                        scale: 1.1,
                        opacity: 0,
                        filter: "blur(20px)"
                      },
                      animate: {
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)"
                      },
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtImg, mergeProps({
                          width: "234",
                          height: "234",
                          class: ["rounded-lg aspect-square object-cover", index % 2 === 0 ? "-rotate-2" : "rotate-2"]
                        }, { ref_for: true }, img), null, 16, ["class"])
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
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$8, { __name: "LandingHero" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$a;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        title: __props.page.about.title,
        description: __props.page.about.description,
        ui: {
          container: "!p-0",
          title: "text-left text-xl sm:text-xl lg:text-2xl font-medium",
          description: "text-left mt-3 text-sm sm:text-md lg:text-sm text-muted"
        }
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/About.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$7, { __name: "LandingAbout" });
const theme$1 = {
  "slots": {
    "root": "flex items-center align-center text-center",
    "border": "",
    "container": "font-medium text-default flex",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xs",
    "label": "text-sm"
  },
  "variants": {
    "color": {
      "primary": {
        "border": "border-primary"
      },
      "secondary": {
        "border": "border-secondary"
      },
      "success": {
        "border": "border-success"
      },
      "info": {
        "border": "border-info"
      },
      "warning": {
        "border": "border-warning"
      },
      "error": {
        "border": "border-error"
      },
      "neutral": {
        "border": "border-default"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex-row",
        "border": "w-full",
        "container": "mx-3 whitespace-nowrap"
      },
      "vertical": {
        "root": "h-full flex-col",
        "border": "h-full",
        "container": "my-2"
      }
    },
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": ""
    },
    "type": {
      "solid": {
        "border": "border-solid"
      },
      "dashed": {
        "border": "border-dashed"
      },
      "dotted": {
        "border": "border-dotted"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "border": "border-t"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "border": "border-t-[2px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "border": "border-t-[3px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "border": "border-t-[4px]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "border": "border-t-[5px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "border": "border-s"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "border": "border-s-[2px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "border": "border-s-[3px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "border": "border-s-[4px]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "border": "border-s-[5px]"
      }
    }
  ],
  "defaultVariants": {
    "color": "neutral",
    "size": "xs",
    "type": "solid"
  }
};
const _sfc_main$6 = {
  __name: "USeparator",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    label: { type: String, required: false },
    icon: { type: [String, Object], required: false },
    avatar: { type: Object, required: false },
    color: { type: null, required: false },
    size: { type: null, required: false },
    type: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    decorative: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "decorative", "orientation"));
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.separator || {} })({
      color: props.color,
      orientation: props.orientation,
      size: props.size,
      type: props.type
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator_default), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.border({ class: props.ui?.border }))}"${_scopeId}></div>`);
            if (__props.label || __props.icon || __props.avatar || !!slots.default) {
              _push2(`<!--[--><div class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
                if (__props.label) {
                  _push2(`<span class="${ssrRenderClass(ui.value.label({ class: props.ui?.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
                } else if (__props.icon) {
                  _push2(ssrRenderComponent(_sfc_main$g, {
                    name: __props.icon,
                    class: ui.value.icon({ class: props.ui?.icon })
                  }, null, _parent2, _scopeId));
                } else if (__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$d, mergeProps({
                    size: props.ui?.avatarSize || ui.value.avatarSize()
                  }, __props.avatar, {
                    class: ui.value.avatar({ class: props.ui?.avatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div><div class="${ssrRenderClass(ui.value.border({ class: props.ui?.border }))}"${_scopeId}></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.border({ class: props.ui?.border })
              }, null, 2),
              __props.label || __props.icon || __props.avatar || !!slots.default ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", {
                  class: ui.value.container({ class: props.ui?.container })
                }, [
                  renderSlot(_ctx.$slots, "default", { ui: ui.value }, () => [
                    __props.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: ui.value.label({ class: props.ui?.label })
                    }, toDisplayString(__props.label), 3)) : __props.icon ? (openBlock(), createBlock(_sfc_main$g, {
                      key: 1,
                      name: __props.icon,
                      class: ui.value.icon({ class: props.ui?.icon })
                    }, null, 8, ["name", "class"])) : __props.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                      key: 2,
                      size: props.ui?.avatarSize || ui.value.avatarSize()
                    }, __props.avatar, {
                      class: ui.value.avatar({ class: props.ui?.avatar })
                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                  ])
                ], 2),
                createVNode("div", {
                  class: ui.value.border({ class: props.ui?.border })
                }, null, 2)
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___0f725b5dc80f752a7f475464f281c113/node_modules/@nuxt/ui/dist/runtime/components/Separator.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "WorkExperience",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$a;
      const _component_Motion = Motion;
      const _component_USeparator = _sfc_main$6;
      const _component_ULink = _sfc_main$b$1;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        title: __props.page.experience.title,
        ui: {
          container: "!p-0 gap-4 sm:gap-4",
          title: "text-left text-xl sm:text-xl lg:text-2xl font-medium",
          description: "mt-2"
        }
      }, _attrs), {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.page.experience.items, (experience, index) => {
              _push2(ssrRenderComponent(_component_Motion, {
                key: index,
                initial: { opacity: 0, transform: "translateY(20px)" },
                "while-in-view": { opacity: 1, transform: "translateY(0)" },
                transition: { delay: 0.4 + 0.2 * index },
                "in-view-options": { once: true },
                class: "text-muted flex items-center text-nowrap gap-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-sm"${_scopeId2}>${ssrInterpolate(experience.date)}</p>`);
                    _push3(ssrRenderComponent(_component_USeparator, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ULink, {
                      class: "flex items-center gap-1",
                      to: experience.company.url,
                      target: "_blank"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-sm"${_scopeId3}>${ssrInterpolate(experience.position)}</span><div class="inline-flex items-center gap-1" style="${ssrRenderStyle({ color: experience.company.color })}"${_scopeId3}><span class="font-medium"${_scopeId3}>${ssrInterpolate(experience.company.name)}</span></div>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-sm" }, toDisplayString(experience.position), 1),
                            createVNode("div", {
                              class: "inline-flex items-center gap-1",
                              style: { color: experience.company.color }
                            }, [
                              createVNode("span", { class: "font-medium" }, toDisplayString(experience.company.name), 1)
                            ], 4)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("p", { class: "text-sm" }, toDisplayString(experience.date), 1),
                      createVNode(_component_USeparator),
                      createVNode(_component_ULink, {
                        class: "flex items-center gap-1",
                        to: experience.company.url,
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm" }, toDisplayString(experience.position), 1),
                          createVNode("div", {
                            class: "inline-flex items-center gap-1",
                            style: { color: experience.company.color }
                          }, [
                            createVNode("span", { class: "font-medium" }, toDisplayString(experience.company.name), 1)
                          ], 4)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.page.experience.items, (experience, index) => {
                  return openBlock(), createBlock(_component_Motion, {
                    key: index,
                    initial: { opacity: 0, transform: "translateY(20px)" },
                    "while-in-view": { opacity: 1, transform: "translateY(0)" },
                    transition: { delay: 0.4 + 0.2 * index },
                    "in-view-options": { once: true },
                    class: "text-muted flex items-center text-nowrap gap-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-sm" }, toDisplayString(experience.date), 1),
                      createVNode(_component_USeparator),
                      createVNode(_component_ULink, {
                        class: "flex items-center gap-1",
                        to: experience.company.url,
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm" }, toDisplayString(experience.position), 1),
                          createVNode("div", {
                            class: "inline-flex items-center gap-1",
                            style: { color: experience.company.color }
                          }, [
                            createVNode("span", { class: "font-medium" }, toDisplayString(experience.company.name), 1)
                          ], 4)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1032, ["transition"]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/WorkExperience.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$5, { __name: "LandingWorkExperience" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Map",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    const { $AMap } = useNuxtApp();
    const color = useColorMode();
    watch(() => color.value, (newColor) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$a;
      const _component_Motion = Motion;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({ ui: {
        container: "px-0 !pt-0 sm:gap-6 lg:gap-8",
        title: "text-center text-xl sm:text-xl lg:text-2xl font-medium",
        description: "text-center mt-2 text-sm sm:text-md lg:text-sm text-muted"
      } }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.1,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.6,
                delay: 0.1
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.page.map.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.page.map.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.1
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.page.map.title), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.1,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.6,
                delay: 0.2
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.page.map.description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.page.map.description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.6,
                  delay: 0.2
                }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.page.map.description), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Motion, {
              initial: {
                scale: 1.05,
                opacity: 0,
                filter: "blur(20px)"
              },
              animate: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              },
              transition: {
                duration: 0.8,
                delay: 0.4
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div id="map-container" class="w-full h-[400px] rounded-md overflow-hidden"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", {
                      id: "map-container",
                      class: "w-full h-[400px] rounded-md overflow-hidden"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Motion, {
                initial: {
                  scale: 1.05,
                  opacity: 0,
                  filter: "blur(20px)"
                },
                animate: {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)"
                },
                transition: {
                  duration: 0.8,
                  delay: 0.4
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    id: "map-container",
                    class: "w-full h-[400px] rounded-md overflow-hidden"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Map.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$4, { __name: "LandingMap" });
const theme = {
  "base": "relative column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 *:break-inside-avoid-column *:will-change-transform"
};
const _sfc_main$3 = {
  __name: "UPageColumns",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pageColumns || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___0f725b5dc80f752a7f475464f281c113/node_modules/@nuxt/ui/dist/runtime/components/PageColumns.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Skills",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$a;
      const _component_UPageColumns = _sfc_main$3;
      const _component_UMarquee = _sfc_main$9;
      const _component_UIcon = _sfc_main$g;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        title: __props.page.skills.title,
        ui: {
          container: "px-0 !pt-0 sm:gap-6 lg:gap-8",
          title: "text-center text-xl sm:text-xl lg:text-2xl font-medium"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageColumns, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UMarquee, {
                    overlay: false,
                    orientation: "vertical",
                    class: "max-h-[400px]",
                    "pause-on-hover": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.page.skills.items.backend, (item, index) => {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            key: index,
                            name: item,
                            class: "size-10 shrink-0"
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.page.skills.items.backend, (item, index) => {
                            return openBlock(), createBlock(_component_UIcon, {
                              key: index,
                              name: item,
                              class: "size-10 shrink-0"
                            }, null, 8, ["name"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UMarquee, {
                    overlay: false,
                    orientation: "vertical",
                    class: "max-h-[400px]",
                    "pause-on-hover": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.page.skills.items.frontend, (item, index) => {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            key: index,
                            name: item,
                            class: "size-10 shrink-0"
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.page.skills.items.frontend, (item, index) => {
                            return openBlock(), createBlock(_component_UIcon, {
                              key: index,
                              name: item,
                              class: "size-10 shrink-0"
                            }, null, 8, ["name"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UMarquee, {
                    overlay: false,
                    orientation: "vertical",
                    class: "max-h-[400px]",
                    "pause-on-hover": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.page.skills.items.other, (item, index) => {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            key: index,
                            name: item,
                            class: "size-10 shrink-0"
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.page.skills.items.other, (item, index) => {
                            return openBlock(), createBlock(_component_UIcon, {
                              key: index,
                              name: item,
                              class: "size-10 shrink-0"
                            }, null, 8, ["name"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UMarquee, {
                      overlay: false,
                      orientation: "vertical",
                      class: "max-h-[400px]",
                      "pause-on-hover": ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.page.skills.items.backend, (item, index) => {
                          return openBlock(), createBlock(_component_UIcon, {
                            key: index,
                            name: item,
                            class: "size-10 shrink-0"
                          }, null, 8, ["name"]);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UMarquee, {
                      overlay: false,
                      orientation: "vertical",
                      class: "max-h-[400px]",
                      "pause-on-hover": ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.page.skills.items.frontend, (item, index) => {
                          return openBlock(), createBlock(_component_UIcon, {
                            key: index,
                            name: item,
                            class: "size-10 shrink-0"
                          }, null, 8, ["name"]);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UMarquee, {
                      overlay: false,
                      orientation: "vertical",
                      class: "max-h-[400px]",
                      "pause-on-hover": ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.page.skills.items.other, (item, index) => {
                          return openBlock(), createBlock(_component_UIcon, {
                            key: index,
                            name: item,
                            class: "size-10 shrink-0"
                          }, null, 8, ["name"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageColumns, null, {
                default: withCtx(() => [
                  createVNode(_component_UMarquee, {
                    overlay: false,
                    orientation: "vertical",
                    class: "max-h-[400px]",
                    "pause-on-hover": ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.page.skills.items.backend, (item, index) => {
                        return openBlock(), createBlock(_component_UIcon, {
                          key: index,
                          name: item,
                          class: "size-10 shrink-0"
                        }, null, 8, ["name"]);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UMarquee, {
                    overlay: false,
                    orientation: "vertical",
                    class: "max-h-[400px]",
                    "pause-on-hover": ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.page.skills.items.frontend, (item, index) => {
                        return openBlock(), createBlock(_component_UIcon, {
                          key: index,
                          name: item,
                          class: "size-10 shrink-0"
                        }, null, 8, ["name"]);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UMarquee, {
                    overlay: false,
                    orientation: "vertical",
                    class: "max-h-[400px]",
                    "pause-on-hover": ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.page.skills.items.other, (item, index) => {
                        return openBlock(), createBlock(_component_UIcon, {
                          key: index,
                          name: item,
                          class: "size-10 shrink-0"
                        }, null, 8, ["name"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Skills.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$2, { __name: "LandingSkills" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: {
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageSection = _sfc_main$a;
      const _component_UMarquee = _sfc_main$9;
      const _component_UPageCard = _sfc_main$c;
      _push(ssrRenderComponent(_component_UPageSection, mergeProps({
        title: "我希望别人对我的评价",
        ui: {
          container: "px-0 !pt-0 sm:gap-6 lg:gap-8",
          title: "text-center text-xl sm:text-xl lg:text-2xl font-medium"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UMarquee, {
              "pause-on-hover": "",
              overlay: false,
              ui: { root: "[--gap:--spacing(4)]", content: "w-auto py-1" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.page.testimonials, (testimonial, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: index,
                      variant: "subtle",
                      description: testimonial.quote,
                      ui: {
                        description: "before:content-[open-quote] after:content-[close-quote] line-clamp-3"
                      },
                      class: "w-64 shrink-0"
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.page.testimonials, (testimonial, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: index,
                        variant: "subtle",
                        description: testimonial.quote,
                        ui: {
                          description: "before:content-[open-quote] after:content-[close-quote] line-clamp-3"
                        },
                        class: "w-64 shrink-0"
                      }, null, 8, ["description"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UMarquee, {
              "pause-on-hover": "",
              reverse: "",
              overlay: false,
              ui: { root: "[--gap:--spacing(4)]", content: "w-auto py-1" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.page.testimonials, (testimonial, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: index,
                      variant: "subtle",
                      description: testimonial.quote,
                      ui: {
                        description: "before:content-[open-quote] after:content-[close-quote] line-clamp-3"
                      },
                      class: "w-64 shrink-0"
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.page.testimonials, (testimonial, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: index,
                        variant: "subtle",
                        description: testimonial.quote,
                        ui: {
                          description: "before:content-[open-quote] after:content-[close-quote] line-clamp-3"
                        },
                        class: "w-64 shrink-0"
                      }, null, 8, ["description"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UMarquee, {
                "pause-on-hover": "",
                overlay: false,
                ui: { root: "[--gap:--spacing(4)]", content: "w-auto py-1" }
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.page.testimonials, (testimonial, index) => {
                    return openBlock(), createBlock(_component_UPageCard, {
                      key: index,
                      variant: "subtle",
                      description: testimonial.quote,
                      ui: {
                        description: "before:content-[open-quote] after:content-[close-quote] line-clamp-3"
                      },
                      class: "w-64 shrink-0"
                    }, null, 8, ["description"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_UMarquee, {
                "pause-on-hover": "",
                reverse: "",
                overlay: false,
                ui: { root: "[--gap:--spacing(4)]", content: "w-auto py-1" }
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.page.testimonials, (testimonial, index) => {
                    return openBlock(), createBlock(_component_UPageCard, {
                      key: index,
                      variant: "subtle",
                      description: testimonial.quote,
                      ui: {
                        description: "before:content-[open-quote] after:content-[close-quote] line-clamp-3"
                      },
                      class: "w-64 shrink-0"
                    }, null, 8, ["description"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$1, { __name: "LandingTestimonials" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("index", () => {
      return queryCollection("index").first();
    })), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Page not found",
        fatal: true
      });
    }
    useSeoMeta({
      title: page.value?.seo.title || page.value?.title,
      ogTitle: page.value?.seo.title || page.value?.title,
      description: page.value?.seo.description || page.value?.description,
      ogDescription: page.value?.seo.description || page.value?.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = _sfc_main$3$1;
      const _component_LandingHero = __nuxt_component_1;
      const _component_UPageSection = _sfc_main$a;
      const _component_LandingAbout = __nuxt_component_3;
      const _component_LandingWorkExperience = __nuxt_component_4;
      const _component_LandingMap = __nuxt_component_5;
      const _component_LandingSkills = __nuxt_component_6;
      const _component_LandingTestimonials = __nuxt_component_7;
      if (unref(page)) {
        _push(ssrRenderComponent(_component_UPage, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_LandingHero, { page: unref(page) }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UPageSection, { ui: {
                container: "!pt-0 lg:grid lg:grid-cols-2 lg:gap-8"
              } }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_LandingAbout, { page: unref(page) }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_LandingWorkExperience, { page: unref(page) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_LandingAbout, { page: unref(page) }, null, 8, ["page"]),
                      createVNode(_component_LandingWorkExperience, { page: unref(page) }, null, 8, ["page"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_LandingMap, { page: unref(page) }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_LandingSkills, { page: unref(page) }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_LandingTestimonials, { page: unref(page) }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_LandingHero, { page: unref(page) }, null, 8, ["page"]),
                createVNode(_component_UPageSection, { ui: {
                  container: "!pt-0 lg:grid lg:grid-cols-2 lg:gap-8"
                } }, {
                  default: withCtx(() => [
                    createVNode(_component_LandingAbout, { page: unref(page) }, null, 8, ["page"]),
                    createVNode(_component_LandingWorkExperience, { page: unref(page) }, null, 8, ["page"])
                  ]),
                  _: 1
                }),
                createVNode(_component_LandingMap, { page: unref(page) }, null, 8, ["page"]),
                createVNode(_component_LandingSkills, { page: unref(page) }, null, 8, ["page"]),
                createVNode(_component_LandingTestimonials, { page: unref(page) }, null, 8, ["page"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B84jAYXE.mjs.map

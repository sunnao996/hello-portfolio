import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { h as _sfc_main$d } from './server.mjs';

const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UColorModeAvatar",
  __ssrInlineRender: true,
  props: {
    light: { type: String, required: true },
    dark: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({
        src: __props.light,
        class: "dark:hidden"
      }, _ctx.$attrs), null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({
        src: __props.dark,
        class: "hidden dark:block"
      }, _ctx.$attrs), null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.1.0_@babel+parser@7.28.5_change-case@5.4.4_db0@0.3.4_better-sqlite3@12.4.1___0f725b5dc80f752a7f475464f281c113/node_modules/@nuxt/ui/dist/runtime/components/color-mode/ColorModeAvatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ColorModeAvatar-D4e1kZzX.mjs.map

webpackJsonp([9],{z3sd:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("markdown-wrapper",[s("h1",{attrs:{id:"tooltip"}},[this._v("Tooltip "),s("a",{staticClass:"header-anchor",attrs:{href:"#tooltip","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("h2",{attrs:{id:"example"}},[this._v("Example "),s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("The first element appear in "),s("code",{pre:!0},[this._v("<tooltip>")]),this._v(" node will be the trigger element. You can also use "),s("code",{pre:!0},[this._v("target")]),this._v(" to reference it from outside the component.")]),this._v(" "),s("p",[s("strong",[this._v("Note")]),this._v(": Tooltips with zero-length texts are never displayed.")]),this._v(" "),s("p",[this._v("Hover over the button below to toggle tooltips:")]),this._v(" "),s("tooltip-example",{ref:"tooltip-example"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("id")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"btn"')]),this._v(">")]),this._v("Hover me!"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("tooltip")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"Static tooltip content goes here"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("target")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"#btn"')]),this._v("/>")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- tooltip-example.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h3",{attrs:{id:"trigger-target"}},[this._v("Trigger target "),s("a",{staticClass:"header-anchor",attrs:{href:"#trigger-target","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("Order to decide the tooltip trigger:")]),this._v(" "),s("ol",[s("li",[this._v("Use "),s("code",{pre:!0},[this._v("target")]),this._v(" if exist.")]),this._v(" "),s("li",[this._v("Use element in default slot with "),s("code",{pre:!0},[this._v('data-role="trigger"')]),this._v(" attribute if exist.")]),this._v(" "),s("li",[this._v("Use the first element present in default slot.")])]),this._v(" "),s("p",[this._v("A "),s("code",{pre:!0},[this._v("target")]),this._v(" can be:")]),this._v(" "),s("ul",[s("li",[this._v("Selector that can be recognized by "),s("code",{pre:!0},[this._v("querySelect")]),this._v(".")]),this._v(" "),s("li",[this._v("Reference to Element.")]),this._v(" "),s("li",[this._v("Reference to Component.")])]),this._v(" "),s("h2",{attrs:{id:"directive"}},[this._v("Directive "),s("a",{staticClass:"header-anchor",attrs:{href:"#directive","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("You can also simply use tooltips via "),s("code",{pre:!0},[this._v("v-tooltip")]),this._v(" directive:")]),this._v(" "),s("tooltip-directive",{ref:"tooltip-directive"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Static tooltip content goes here'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Hover me!"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- tooltip-directive.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h2",{attrs:{id:"placements"}},[this._v("Placements "),s("a",{staticClass:"header-anchor",attrs:{href:"#placements","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("Supported placements:")]),this._v(" "),s("ul",[s("li",[s("strong",[this._v("top")]),this._v(" (Default)")]),this._v(" "),s("li",[s("strong",[this._v("right")])]),this._v(" "),s("li",[s("strong",[this._v("bottom")])]),this._v(" "),s("li",[s("strong",[this._v("left")])])]),this._v(" "),s("tooltip-placements",{ref:"tooltip-placements"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.left")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Tooltip content on left'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Left"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.top")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Tooltip content on top'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Top"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.bottom")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Tooltip content on bottom'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Bottom"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.right")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Tooltip content on right'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Right"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- tooltip-placements.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h2",{attrs:{id:"auto-placement"}},[this._v("Auto placement "),s("a",{staticClass:"header-anchor",attrs:{href:"#auto-placement","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("Tooltips will try to find the best placement for displaying while "),s("code",{pre:!0},[this._v("auto-placement")]),this._v(" is set to "),s("code",{pre:!0},[this._v("true")]),this._v(" (by default) base on the default placement setting. Useful while there does not have enough space to show the entire tooltip content.")]),this._v(" "),s("p",[s("code",{pre:!0},[this._v("auto-placement")]),this._v(" try order: right -> bottom -> left -> top, and use the set one if none of these matched.")]),this._v(" "),s("h2",{attrs:{id:"viewport"}},[this._v("Viewport "),s("a",{staticClass:"header-anchor",attrs:{href:"#viewport","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("Keeps the tooltip within the bounds of this element.")]),this._v(" "),s("tooltip-viewport",{ref:"tooltip-viewport"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("id")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"tooltip-viewport"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("style")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"display: inline-block; padding: 20px; background-color: #eee"')]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"{text:'Tooltip content auto', viewport:'#tooltip-viewport'}\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Auto"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.left")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"{text:'Tooltip content on left', viewport:'#tooltip-viewport'}\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Left"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.top")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"{text:'Tooltip content on top', viewport:'#tooltip-viewport'}\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Top"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.bottom")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"{text:'Tooltip content on bottom', viewport:'#tooltip-viewport'}\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Bottom"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.right")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"{text:'Tooltip content on right', viewport:'#tooltip-viewport'}\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Right"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"{text:'Tooltip content auto', viewport:'#tooltip-viewport'}\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Auto"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- tooltip-viewport.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h2",{attrs:{id:"triggers"}},[this._v("Triggers "),s("a",{staticClass:"header-anchor",attrs:{href:"#triggers","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("Supported triggers:")]),this._v(" "),s("ul",[s("li",[s("code",{pre:!0},[this._v("hover")]),this._v(" show on mouseenter, hide on mouseleave.")]),this._v(" "),s("li",[s("code",{pre:!0},[this._v("focus")]),this._v(" show on focus, hide on blur.")]),this._v(" "),s("li",[s("code",{pre:!0},[this._v("hover-focus")]),this._v(" (Default) combination of hover and focus trigger.")]),this._v(" "),s("li",[s("code",{pre:!0},[this._v("click")]),this._v(" toggle on trigger click.")]),this._v(" "),s("li",[s("code",{pre:!0},[this._v("outside-click")]),this._v(" same as click, but not close on tooltip click and close on outside click.")])]),this._v(" "),s("tooltip-triggers",{ref:"tooltip-triggers"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Static tooltip content'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Hover-Focus (Default)"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.hover")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Static tooltip content'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Hover"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.focus")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Static tooltip content'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Focus"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.click")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Static tooltip content'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Click"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-tooltip.outside-click")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v("\"'Static tooltip content'\"")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Outside-Click"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- tooltip-triggers.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h2",{attrs:{id:"manual-trigger"}},[this._v("Manual trigger "),s("a",{staticClass:"header-anchor",attrs:{href:"#manual-trigger","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("Set "),s("code",{pre:!0},[this._v("trigger")]),this._v(" prop to "),s("code",{pre:!0},[this._v("manual")]),this._v(" to disable all the event listeners, and controls tooltips show / hide only by "),s("code",{pre:!0},[this._v("v-model")]),this._v(" change.")]),this._v(" "),s("tooltip-manual-trigger",{ref:"tooltip-manual-trigger"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("tooltip")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"Static tooltip content goes here"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"manual"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"show"')]),this._v(">")]),this._v("\n      "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("You Can't Trigger Tooltip Here..."),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("tooltip")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("hr")]),this._v("/>")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" @"),s("span",{attrs:{class:"hljs-attr"}},[this._v("click")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"show = !show"')]),this._v(">")]),this._v("Toggle Tooltip"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("section")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n  "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data () {\n      "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n        "),s("span",{attrs:{class:"hljs-attr"}},[this._v("show")]),this._v(": "),s("span",{attrs:{class:"hljs-literal"}},[this._v("false")]),this._v("\n      }\n    }\n  }\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- tooltip-manual-trigger.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h2",{attrs:{id:"disable-tooltip"}},[this._v("Disable tooltip "),s("a",{staticClass:"header-anchor",attrs:{href:"#disable-tooltip","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("Set "),s("code",{pre:!0},[this._v("enable")]),this._v(" prop to "),s("code",{pre:!0},[this._v("false")]),this._v(" to disable a tooltip.")]),this._v(" "),s("tooltip-disable",{ref:"tooltip-disable"}),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-html"}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("tooltip")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("text")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"Static tooltip content goes here"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":enable")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"false"')]),this._v(">")]),this._v("\n  "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("type")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(">")]),this._v("Disabled Tooltip"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("btn")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("tooltip")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-comment"}},[this._v("\x3c!-- tooltip-disable.vue --\x3e")]),this._v("\n")])]),this._v(" "),s("h1",{attrs:{id:"api-reference"}},[this._v("API Reference "),s("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("h2",{attrs:{id:"tooltip-2"}},[s("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/components/tooltip/Tooltip.vue"}},[this._v("Tooltip")]),this._v(" "),s("a",{staticClass:"header-anchor",attrs:{href:"#tooltip-2","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("h3",{attrs:{id:"props"}},[this._v("Props "),s("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered table-hover"},[s("thead",[s("tr",[s("th",[this._v("Name")]),this._v(" "),s("th",[this._v("Type")]),this._v(" "),s("th",[this._v("Default")]),this._v(" "),s("th",[this._v("Required")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[this._v("v-model")])]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Show / hide the tooltip.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("target")])]),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Tooltip trigger, can be a select or reference to Element / Component.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("tag")])]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td",[this._v("span")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("The HTML tag that render the component.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("text")])]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td",[this._v("The tooltip text.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("enable")])]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td",[this._v("true")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Enable the tooltip.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("enterable")])]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td",[this._v("true")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Whether mouse can enter the tooltip.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("placement")])]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td",[this._v("top")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("The tooltip placement, support "),s("code",{pre:!0},[this._v("top")]),this._v(" / "),s("code",{pre:!0},[this._v("bottom")]),this._v(" / "),s("code",{pre:!0},[this._v("left")]),this._v(" / "),s("code",{pre:!0},[this._v("right")]),this._v(".")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("auto-placement")])]),this._v(" "),s("td",[this._v("Boolean")]),this._v(" "),s("td",[this._v("true")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Try to auto adjust the placement if the set one does not have enough space to show.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("trigger")])]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td",[this._v("hover-focus")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("The tooltip trigger event, support "),s("code",{pre:!0},[this._v("hover")]),this._v(" / "),s("code",{pre:!0},[this._v("focus")]),this._v(" / "),s("code",{pre:!0},[this._v("hover-focus")]),this._v(" / "),s("code",{pre:!0},[this._v("click")]),this._v(" / "),s("code",{pre:!0},[this._v("outside-click")]),this._v(" / "),s("code",{pre:!0},[this._v("manual")])])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("append-to")])]),this._v(" "),s("td",[this._v("String")]),this._v(" "),s("td",[this._v("body")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Element selector that the tooltip append to.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("transition-duration")])]),this._v(" "),s("td",[this._v("Number")]),this._v(" "),s("td",[this._v("150")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("The tooltip show / hide transition time in ms.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("show-delay")])]),this._v(" "),s("td",[this._v("Number")]),this._v(" "),s("td",[this._v("0")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("(0.30.0+) Delay showing the tooltip (ms).")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("hide-delay")])]),this._v(" "),s("td",[this._v("Number")]),this._v(" "),s("td",[this._v("0")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("(0.30.0+) Delay hidding the tooltip (ms).")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("viewport")])]),this._v(" "),s("td",[this._v("String or Function")]),this._v(" "),s("td"),this._v(" "),s("td"),this._v(" "),s("td",[this._v("(0.31.0+) Keeps the tooltip within the bounds of this element. Example: viewport: '#viewport'. If a function is given, it is called with the triggering element DOM node as its only argument.")])])])])]),s("h3",{attrs:{id:"events"}},[this._v("Events "),s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-bordered table-hover"},[s("thead",[s("tr",[s("th",[this._v("Name")]),this._v(" "),s("th",[this._v("Params")]),this._v(" "),s("th",[this._v("Description")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[this._v("show")])]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Fire after tooltip show.")])]),this._v(" "),s("tr",[s("td",[s("code",{pre:!0},[this._v("hide")])]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("Fire after tooltip hide.")])])])])]),s("h3",{attrs:{id:"directive-2"}},[s("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/directives/tooltip/tooltip.js"}},[this._v("Directive")]),this._v(" "),s("a",{staticClass:"header-anchor",attrs:{href:"#directive-2","aria-hidden":"true"}},[this._v("🔗")])]),this._v(" "),s("p",[this._v("The binding value will be the text content of corresponding tooltip.")]),this._v(" "),s("p",[s("strong",[this._v("Simplest Usage")])]),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[this._v("v-tooltip=\"'tooltip content'\"\n")])]),this._v(" "),s("p",[s("strong",[this._v("Placements Examples")])]),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[this._v("v-tooltip.left=\"'tooltip content'\"\nv-tooltip.right=\"'tooltip content'\"\n")])]),this._v(" "),s("p",[s("strong",[this._v("Triggers Examples")])]),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[this._v("v-tooltip.hover=\"'tooltip content'\"\nv-tooltip.click=\"'tooltip content'\"\n")])]),this._v(" "),s("p",[s("strong",[this._v("Unenterable")])]),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[this._v("v-tooltip.unenterable=\"'tooltip content'\"\n")])]),this._v(" "),s("p",[s("strong",[this._v("Custom append-to")])]),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[this._v("v-tooltip:arg=\"'tooltip content'\"\n")])]),this._v(" "),s("p",[s("code",{pre:!0},[this._v("arg")]),this._v(" is the ID (without prefix "),s("code",{pre:!0},[this._v("#")]),this._v(") of the element to append to, leave it empty to use default value "),s("code",{pre:!0},[this._v("body")]),this._v(".")]),this._v(" "),s("p",[s("strong",[this._v("Combination")])]),this._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[this._v("v-tooltip.left.hover=\"'tooltip content'\"\nv-tooltip:some-id.right.click=\"'tooltip content'\"\n")])])],1)},staticRenderFns:[]},h=i("VU/8")({components:{"tooltip-example":{template:'<div class="markdown-live-example"><btn type="primary" id="btn">Hover me!</btn>\n<tooltip text="Static tooltip content goes here" target="#btn"/>\n\x3c!-- tooltip-example.vue --\x3e</div>'},"tooltip-directive":{template:'<div class="markdown-live-example"><btn v-tooltip="\'Static tooltip content goes here\'" type="primary">Hover me!</btn>\n\x3c!-- tooltip-directive.vue --\x3e</div>'},"tooltip-placements":{template:'<div class="markdown-live-example"><btn v-tooltip.left="\'Tooltip content on left\'" type="primary">Left</btn>\n<btn v-tooltip.top="\'Tooltip content on top\'" type="primary">Top</btn>\n<btn v-tooltip.bottom="\'Tooltip content on bottom\'" type="primary">Bottom</btn>\n<btn v-tooltip.right="\'Tooltip content on right\'" type="primary">Right</btn>\n\x3c!-- tooltip-placements.vue --\x3e</div>'},"tooltip-viewport":{template:'<div class="markdown-live-example"><div id="tooltip-viewport" style="display: inline-block; padding: 20px; background-color: #eee">\n  <btn v-tooltip="{text:\'Tooltip content auto\', viewport:\'#tooltip-viewport\'}" type="primary">Auto</btn>\n  <btn v-tooltip.left="{text:\'Tooltip content on left\', viewport:\'#tooltip-viewport\'}" type="primary">Left</btn>\n  <btn v-tooltip.top="{text:\'Tooltip content on top\', viewport:\'#tooltip-viewport\'}" type="primary">Top</btn>\n  <btn v-tooltip.bottom="{text:\'Tooltip content on bottom\', viewport:\'#tooltip-viewport\'}" type="primary">Bottom</btn>\n  <btn v-tooltip.right="{text:\'Tooltip content on right\', viewport:\'#tooltip-viewport\'}" type="primary">Right</btn>\n  <btn v-tooltip="{text:\'Tooltip content auto\', viewport:\'#tooltip-viewport\'}" type="primary">Auto</btn>\n</div>\n\x3c!-- tooltip-viewport.vue --\x3e</div>'},"tooltip-triggers":{template:'<div class="markdown-live-example"><btn v-tooltip="\'Static tooltip content\'" type="primary">Hover-Focus (Default)</btn>\n<btn v-tooltip.hover="\'Static tooltip content\'" type="primary">Hover</btn>\n<btn v-tooltip.focus="\'Static tooltip content\'" type="primary">Focus</btn>\n<btn v-tooltip.click="\'Static tooltip content\'" type="primary">Click</btn>\n<btn v-tooltip.outside-click="\'Static tooltip content\'" type="primary">Outside-Click</btn>\n\x3c!-- tooltip-triggers.vue --\x3e</div>'},"tooltip-manual-trigger":{template:'<div class="markdown-live-example">\n  <section>\n    <tooltip text="Static tooltip content goes here" trigger="manual" v-model="show">\n      <btn>You Can\'t Trigger Tooltip Here...</btn>\n    </tooltip>\n    <hr/>\n    <btn type="primary" @click="show = !show">Toggle Tooltip</btn>\n  </section>\n</div>',data:function(){return{show:!1}}},"tooltip-disable":{template:'<div class="markdown-live-example"><tooltip text="Static tooltip content goes here" :enable="false">\n  <btn type="primary">Disabled Tooltip</btn>\n</tooltip>\n\x3c!-- tooltip-disable.vue --\x3e</div>'}}},a,!1,null,null,null);s.default=h.exports}});
//# sourceMappingURL=9.346e9bc522cf8488580d.js.map
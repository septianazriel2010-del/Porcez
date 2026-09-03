(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/GlitchText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlitchText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const GLITCH_CHARS = "01ABCDEF#$%&*<>[]{}/\\".split("");
function GlitchText({ text, as: Tag = "span", className = "", children }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scramble = ()=>{
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const el = ref.current;
        if (!el) return;
        if (intervalRef.current) clearInterval(intervalRef.current);
        let frame = 0;
        const totalFrames = 10;
        intervalRef.current = setInterval(()=>{
            let out = "";
            for(let i = 0; i < text.length; i++){
                if (text[i] === " ") {
                    out += " ";
                    continue;
                }
                const revealPoint = i / text.length * totalFrames;
                out += frame > revealPoint + 3 ? text[i] : GLITCH_CHARS[Math.random() * GLITCH_CHARS.length | 0];
            }
            el.textContent = out;
            frame++;
            if (frame > totalFrames + 4) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                el.textContent = text;
            }
        }, 34);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: `glitch-text ${className}`,
        onMouseEnter: scramble,
        children: children ?? text
    }, void 0, false, {
        fileName: "[project]/src/components/GlitchText.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(GlitchText, "WAd1epf/yXacm9d0+59kNdkTtiA=");
_c = GlitchText;
var _c;
__turbopack_context__.k.register(_c, "GlitchText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HudGridCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HudGridCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HudGridCanvas() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HudGridCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const mouse = {
                x: null,
                y: null,
                radius: 130
            };
            let particles = [];
            function resizeCanvas() {
                if (!canvas || !ctx) return;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                canvas.style.width = window.innerWidth + "px";
                canvas.style.height = window.innerHeight + "px";
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                initParticles();
            }
            function initParticles() {
                const area = window.innerWidth * window.innerHeight;
                let count = Math.min(120, Math.max(35, Math.floor(area / 16000)));
                if (window.innerWidth < 640) count = Math.floor(count * 0.55);
                particles = [];
                for(let i = 0; i < count; i++){
                    particles.push({
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        vx: (Math.random() - 0.5) * 0.35,
                        vy: (Math.random() - 0.5) * 0.35,
                        r: 1 + Math.random() * 1.6
                    });
                }
            }
            const onMouseMove = {
                "HudGridCanvas.useEffect.onMouseMove": (e)=>{
                    mouse.x = e.clientX;
                    mouse.y = e.clientY;
                }
            }["HudGridCanvas.useEffect.onMouseMove"];
            const onMouseLeave = {
                "HudGridCanvas.useEffect.onMouseLeave": ()=>{
                    mouse.x = null;
                    mouse.y = null;
                }
            }["HudGridCanvas.useEffect.onMouseLeave"];
            const LINK_DIST = 150;
            function drawFrame() {
                if (!ctx) return;
                const w = window.innerWidth;
                const h = window.innerHeight;
                ctx.clearRect(0, 0, w, h);
                for (const p of particles){
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0 || p.x > w) p.vx *= -1;
                    if (p.y < 0 || p.y > h) p.vy *= -1;
                    if (mouse.x !== null && mouse.y !== null) {
                        const dx = p.x - mouse.x;
                        const dy = p.y - mouse.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < mouse.radius) {
                            const force = (mouse.radius - dist) / mouse.radius;
                            p.x += dx / (dist || 1) * force * 1.1;
                            p.y += dy / (dist || 1) * force * 1.1;
                        }
                    }
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(0,243,255,0.55)";
                    ctx.fill();
                }
                for(let a = 0; a < particles.length; a++){
                    for(let b = a + 1; b < particles.length; b++){
                        const pa = particles[a];
                        const pb = particles[b];
                        const ddx = pa.x - pb.x;
                        const ddy = pa.y - pb.y;
                        const d = Math.sqrt(ddx * ddx + ddy * ddy);
                        if (d < LINK_DIST) {
                            const alpha = (1 - d / LINK_DIST) * 0.18;
                            ctx.beginPath();
                            ctx.moveTo(pa.x, pa.y);
                            ctx.lineTo(pb.x, pb.y);
                            ctx.strokeStyle = `rgba(0,243,255,${alpha})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                    if (mouse.x !== null && mouse.y !== null) {
                        const mdx = particles[a].x - mouse.x;
                        const mdy = particles[a].y - mouse.y;
                        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                        if (mdist < mouse.radius) {
                            ctx.beginPath();
                            ctx.moveTo(particles[a].x, particles[a].y);
                            ctx.lineTo(mouse.x, mouse.y);
                            ctx.strokeStyle = `rgba(0,255,157,${(1 - mdist / mouse.radius) * 0.3})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                }
            }
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            let rafId = 0;
            function loop() {
                drawFrame();
                rafId = requestAnimationFrame(loop);
            }
            window.addEventListener("resize", resizeCanvas);
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseleave", onMouseLeave);
            resizeCanvas();
            if (reducedMotion) {
                drawFrame();
            } else {
                loop();
            }
            return ({
                "HudGridCanvas.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    window.removeEventListener("resize", resizeCanvas);
                    window.removeEventListener("mousemove", onMouseMove);
                    window.removeEventListener("mouseleave", onMouseLeave);
                }
            })["HudGridCanvas.useEffect"];
        }
    }["HudGridCanvas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        id: "bg-canvas",
        ref: canvasRef,
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/HudGridCanvas.tsx",
        lineNumber: 149,
        columnNumber: 10
    }, this);
}
_s(HudGridCanvas, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = HudGridCanvas;
var _c;
__turbopack_context__.k.register(_c, "HudGridCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Nav() {
    _s();
    const [on, setOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const toggle = ()=>{
        const next = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSfxEnabled"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSfxEnabled"])(next);
        setOn(next);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "nav",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "logo",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "dot"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        " S3P.COM"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Nav.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "links",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#audit",
                            className: "sfx-link",
                            "data-sfx": "hover",
                            children: "AUDIT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#projects",
                            className: "sfx-link",
                            "data-sfx": "hover",
                            children: "PROJECTS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#about",
                            className: "sfx-link",
                            "data-sfx": "hover",
                            children: "ABOUT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            className: "sfx-link",
                            "data-sfx": "hover",
                            children: "CONTACT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Nav.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    id: "sfx-toggle",
                    type: "button",
                    "data-sfx": "hover",
                    "aria-pressed": on,
                    className: on ? "" : "off",
                    onClick: toggle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sfx-dot"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            id: "sfx-label",
                            children: [
                                "SFX: ",
                                on ? "ON" : "OFF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Nav.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Nav.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Nav.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Nav.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Nav, "zGY7URxQ+///9N7gcQs0OpM2Yj4=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProjectModal({ project, onClose }) {
    _s();
    const closeBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastFocused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectModal.useEffect": ()=>{
            lastFocused.current = document.activeElement;
            document.body.style.overflow = "hidden";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playGlitchOpen"])();
            const t = setTimeout({
                "ProjectModal.useEffect.t": ()=>closeBtnRef.current?.focus()
            }["ProjectModal.useEffect.t"], 50);
            const onKey = {
                "ProjectModal.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["ProjectModal.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "ProjectModal.useEffect": ()=>{
                    clearTimeout(t);
                    document.body.style.overflow = "";
                    window.removeEventListener("keydown", onKey);
                    lastFocused.current?.focus?.();
                }
            })["ProjectModal.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ProjectModal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay open",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-glitch-fx",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectModal.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-panel hud-frame",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hud-corner tl",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hud-corner tr",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hud-corner bl",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hud-corner br",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-topline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "blink",
                                        children: "●"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    " SECURE_TERMINAL // DATA_VIEWER"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "LOG_ID: ",
                                    project.code
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        id: "modal-title",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal-cat",
                                        children: [
                                            project.category,
                                            " ",
                                            "//",
                                            " ",
                                            project.role
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: closeBtnRef,
                                type: "button",
                                "data-sfx": "hover",
                                "aria-label": "Close detailed logs",
                                onClick: onClose,
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-media",
                        style: {
                            "--accent": project.accent,
                            "--accent-a": project.accentA
                        },
                        children: project.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: project.image,
                            alt: project.title,
                            fill: true,
                            sizes: "700px",
                            style: {
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectModal.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "glyph",
                            children: project.glyph
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectModal.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-meta-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cell",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "k",
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 91,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "v",
                                        children: project.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 91,
                                        columnNumber: 64
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cell",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "k",
                                        children: "ROLE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 92,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "v",
                                        children: project.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 92,
                                        columnNumber: 62
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cell",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "k",
                                        children: "STACK"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 93,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "v",
                                        children: project.stack.join(" · ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 93,
                                        columnNumber: 63
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "// OVERVIEW"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: project.overview
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "// KEY FEATURES"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "modal-features",
                                children: project.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: f
                                    }, f, false, {
                                        fileName: "[project]/src/components/ProjectModal.tsx",
                                        lineNumber: 103,
                                        columnNumber: 42
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "// NOTES"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: project.notes
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-actions",
                        children: [
                            project.links.repo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.links.repo,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-primary sfx-link",
                                "data-sfx": "hover",
                                children: "[ REPOSITORY ]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-primary",
                                disabled: true,
                                children: "[ REPOSITORY N/A ]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            project.links.demo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.links.demo,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-green sfx-link",
                                "data-sfx": "hover",
                                children: "[ LIVE DEMO ]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-green",
                                disabled: true,
                                children: "[ DEMO N/A ]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectModal.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectModal.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectModal.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectModal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this), document.body);
}
_s(ProjectModal, "e7RVZ989rc2XNkafkyFD7nNhA8o=");
_c = ProjectModal;
var _c;
__turbopack_context__.k.register(_c, "ProjectModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GlitchText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProjectsSection() {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: "02 // ARCHIVE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "Project Logs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "section-sub",
                        children: [
                            "Kumpulan proyek yang sudah dan sedang saya kerjakan. Klik ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "var(--ink)"
                                },
                                children: "DETAILED LOGS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 18,
                                columnNumber: 69
                            }, this),
                            " ",
                            "untuk membuka data lengkapnya."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "projects-grid",
                        className: "projects-grid",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "project-card hud-frame",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hud-corner tl",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hud-corner tr",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hud-corner bl",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hud-corner br",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-media",
                                        style: {
                                            "--accent": p.accent,
                                            "--accent-a": p.accentA
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcorner tl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcorner tr"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcorner bl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mcorner br"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "status-pill",
                                                children: p.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            p.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: p.image,
                                                alt: p.title,
                                                fill: true,
                                                sizes: "(max-width: 640px) 100vw, 400px",
                                                style: {
                                                    objectFit: "cover"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "glyph",
                                                        children: p.glyph
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ph-label",
                                                        children: "[ IMAGE PLACEHOLDER — GANTI DENGAN SCREENSHOT ]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                text: p.title,
                                                as: "div",
                                                className: "project-title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "project-cat",
                                                children: p.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "project-summary",
                                        children: p.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-badges",
                                        children: p.stack.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge",
                                                children: [
                                                    "[ ",
                                                    s,
                                                    " ]"
                                                ]
                                            }, s, true, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn btn-primary sfx-link",
                                                "data-sfx": "hover",
                                                onClick: ()=>setSelected(p),
                                                children: "[ DETAILED LOGS ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            p.links.repo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: p.links.repo,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "btn btn-ghost sfx-link",
                                                "data-sfx": "hover",
                                                children: "[ GITHUB ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn btn-ghost",
                                                disabled: true,
                                                children: "[ LINK N/A ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectsSection.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/ProjectsSection.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                project: selected,
                onClose: ()=>setSelected(null)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 89,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "PVKrpNrydW4BpnDEq9OT3cVmCk4=");
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SfxWiring.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SfxWiring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SfxWiring() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SfxWiring.useEffect": ()=>{
            const unlock = {
                "SfxWiring.useEffect.unlock": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unlockSound"])()
            }["SfxWiring.useEffect.unlock"];
            window.addEventListener("pointerdown", unlock, {
                passive: true
            });
            window.addEventListener("keydown", unlock, {
                passive: true
            });
            window.addEventListener("touchstart", unlock, {
                passive: true
            });
            const onMouseOver = {
                "SfxWiring.useEffect.onMouseOver": (e)=>{
                    const target = e.target?.closest("[data-sfx]");
                    if (target) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playHover"])();
                }
            }["SfxWiring.useEffect.onMouseOver"];
            const onClick = {
                "SfxWiring.useEffect.onClick": (e)=>{
                    const target = e.target?.closest("[data-sfx]");
                    if (target) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playClick"])();
                }
            }["SfxWiring.useEffect.onClick"];
            document.addEventListener("mouseover", onMouseOver);
            document.addEventListener("click", onClick);
            return ({
                "SfxWiring.useEffect": ()=>{
                    window.removeEventListener("pointerdown", unlock);
                    window.removeEventListener("keydown", unlock);
                    window.removeEventListener("touchstart", unlock);
                    document.removeEventListener("mouseover", onMouseOver);
                    document.removeEventListener("click", onClick);
                }
            })["SfxWiring.useEffect"];
        }
    }["SfxWiring.useEffect"], []);
    return null;
}
_s(SfxWiring, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SfxWiring;
var _c;
__turbopack_context__.k.register(_c, "SfxWiring");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThreeBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThreeBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    alpha: true,
                    antialias: true
                });
            } catch (err) {
                console.warn("3D background could not initialize:", err);
                canvas.style.display = "none";
                return;
            }
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            renderer.setPixelRatio(pixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0); // transparent — CSS body bg shows through
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.set(0, 0, 10);
            const isMobile = window.innerWidth < 640;
            const detail = isMobile ? 2 : 3;
            // --- Procedural "Cyber Network Core": holographic wireframe globe + glowing point-nodes
            const coreGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](2.4, detail);
            const posAttr = coreGeo.attributes.position;
            const vertexCount = posAttr.count;
            const basePositions = new Float32Array(posAttr.array);
            const scatterPositions = new Float32Array(posAttr.array.length);
            for(let i = 0; i < vertexCount; i++){
                const r = 4.4 + Math.random() * 3.2;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);
                scatterPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
                scatterPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                scatterPositions[i * 3 + 2] = r * Math.cos(phi);
            }
            const nodesMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                color: 0x00f3ff,
                size: isMobile ? 0.05 : 0.045,
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.9,
                depthWrite: false
            });
            const nodes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](coreGeo, nodesMaterial);
            scene.add(nodes);
            const edgesGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EdgesGeometry"](coreGeo);
            const wireMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: 0x00f3ff,
                transparent: true,
                opacity: 0.32
            });
            const wireframe = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](edgesGeo, wireMaterial);
            scene.add(wireframe);
            const glowGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](1.5, 1);
            const glowMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x00f3ff,
                transparent: true,
                opacity: 0.035
            });
            const glowMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](glowGeo, glowMaterial);
            scene.add(glowMesh);
            // --- Scroll keyframes: Hero -> Security Mindset (Audit) -> Projects -> Footer
            const KEYFRAMES = [
                {
                    selector: "#hero",
                    cam: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 10.5),
                    look: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
                    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x00f3ff),
                    explode: 0,
                    rot: 0.05
                },
                {
                    selector: "#audit",
                    cam: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](3.3, 1.1, 4.1),
                    look: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.2, 0),
                    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff0055),
                    explode: 0,
                    rot: 0.16
                },
                {
                    selector: "#projects",
                    cam: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-2.6, 0.5, 7.6),
                    look: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
                    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x00ff9d),
                    explode: 1,
                    rot: 0.26
                },
                {
                    selector: "#site-footer",
                    cam: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 5.6, 8.6),
                    look: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -0.6, 0),
                    color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x00f3ff),
                    explode: 0,
                    rot: 0.07
                }
            ];
            function recomputeTriggers() {
                KEYFRAMES.forEach({
                    "ThreeBackground.useEffect.recomputeTriggers": (k)=>{
                        const el = document.querySelector(k.selector);
                        if (el) k.triggerY = el.getBoundingClientRect().top + window.scrollY;
                    }
                }["ThreeBackground.useEffect.recomputeTriggers"]);
            }
            recomputeTriggers();
            function clamp(v, min, max) {
                return Math.max(min, Math.min(max, v));
            }
            const targetCam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(KEYFRAMES[0].cam);
            const targetLook = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(KEYFRAMES[0].look);
            const currentLook = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().copy(KEYFRAMES[0].look);
            const targetColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]().copy(KEYFRAMES[0].color);
            let targetExplode = 0;
            let currentExplode = 0;
            let targetRot = KEYFRAMES[0].rot;
            function updateTargets() {
                const scrollY = window.scrollY;
                let i = 0;
                while(i < KEYFRAMES.length - 1 && scrollY >= (KEYFRAMES[i + 1].triggerY ?? Infinity))i++;
                const a = KEYFRAMES[clamp(i, 0, KEYFRAMES.length - 1)];
                const b = KEYFRAMES[clamp(i + 1, 0, KEYFRAMES.length - 1)];
                const aY = a.triggerY ?? 0;
                const bY = b.triggerY ?? 0;
                const span = bY - aY;
                let t = 0;
                if (a !== b && span > 0) {
                    t = clamp((scrollY - aY) / span, 0, 1);
                } else if (a === KEYFRAMES[KEYFRAMES.length - 1] && scrollY >= aY) {
                    t = 1;
                }
                targetCam.copy(a.cam).lerp(b.cam, t);
                targetLook.copy(a.look).lerp(b.look, t);
                targetColor.copy(a.color).lerp(b.color, t);
                targetExplode = a.explode + (b.explode - a.explode) * t;
                targetRot = a.rot + (b.rot - a.rot) * t;
            }
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            function onResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                recomputeTriggers();
            }
            window.addEventListener("resize", onResize);
            let rafId = 0;
            if (reduced) {
                camera.position.copy(KEYFRAMES[0].cam);
                camera.lookAt(KEYFRAMES[0].look);
                nodesMaterial.color.copy(KEYFRAMES[0].color);
                wireMaterial.color.copy(KEYFRAMES[0].color);
                renderer.render(scene, camera);
            } else {
                const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
                const animate3D = {
                    "ThreeBackground.useEffect.animate3D": ()=>{
                        rafId = requestAnimationFrame(animate3D);
                        updateTargets();
                        camera.position.lerp(targetCam, 0.055);
                        currentLook.lerp(targetLook, 0.055);
                        camera.lookAt(currentLook);
                        nodesMaterial.color.lerp(targetColor, 0.05);
                        wireMaterial.color.lerp(targetColor, 0.05);
                        glowMaterial.color.lerp(targetColor, 0.05);
                        currentExplode += (targetExplode - currentExplode) * 0.06;
                        const posArr = coreGeo.attributes.position.array;
                        for(let vi = 0; vi < vertexCount; vi++){
                            const ix = vi * 3;
                            posArr[ix] = basePositions[ix] + (scatterPositions[ix] - basePositions[ix]) * currentExplode;
                            posArr[ix + 1] = basePositions[ix + 1] + (scatterPositions[ix + 1] - basePositions[ix + 1]) * currentExplode;
                            posArr[ix + 2] = basePositions[ix + 2] + (scatterPositions[ix + 2] - basePositions[ix + 2]) * currentExplode;
                        }
                        coreGeo.attributes.position.needsUpdate = true;
                        wireMaterial.opacity = 0.32 * (1 - currentExplode);
                        glowMaterial.opacity = 0.035 * (1 - currentExplode * 0.8);
                        const delta = clock.getDelta();
                        nodes.rotation.y += targetRot * delta;
                        nodes.rotation.x += targetRot * 0.3 * delta;
                        wireframe.rotation.copy(nodes.rotation);
                        glowMesh.rotation.copy(nodes.rotation);
                        renderer.render(scene, camera);
                    }
                }["ThreeBackground.useEffect.animate3D"];
                animate3D();
            }
            return ({
                "ThreeBackground.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    window.removeEventListener("resize", onResize);
                    coreGeo.dispose();
                    edgesGeo.dispose();
                    glowGeo.dispose();
                    nodesMaterial.dispose();
                    wireMaterial.dispose();
                    glowMaterial.dispose();
                    renderer.dispose();
                }
            })["ThreeBackground.useEffect"];
        }
    }["ThreeBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        id: "three-canvas",
        ref: canvasRef,
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/ThreeBackground.tsx",
        lineNumber: 228,
        columnNumber: 10
    }, this);
}
_s(ThreeBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = ThreeBackground;
var _c;
__turbopack_context__.k.register(_c, "ThreeBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─────────────────────────────────────────────────────────────
// SEMUA KONTEN YANG DAPAT DIEDIT ADA DI SINI.
// ─────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "auditLog",
    ()=>auditLog,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills,
    "socials",
    ()=>socials
]);
const profile = {
    name: "MUHAMMAD SEPTIAN AZRIEL SAPUTRA",
    role: "DEVELOPER // GAME DEV // CYBERSECURITY ENTHUSIAST",
    desc: "Pelajar PPLG di SMKN 1 Ciomas yang senang membangun sistem digital — dari web app, game, sampai belajar bagaimana sistem-sistem itu bisa diamankan.",
    school: "SMKN 1 Ciomas",
    major: "PPLG",
    location: "Bogor, Indonesia"
};
const socials = {
    github: "https://github.com/septianazriel2010-del",
    instagram: "https://www.instagram.com/dxcez1",
    email: "septianazriel2010@gmail.com"
};
const skills = [
    "PHP",
    "JAVASCRIPT",
    "NODE.JS",
    "MYSQL",
    "LUA / ROBLOX",
    "GIT",
    "LINUX BASICS",
    "SECURITY FUNDAMENTALS"
];
const auditLog = [
    {
        tag: "pass",
        label: "PRACTICING",
        text: "Validasi & sanitasi input di setiap form yang saya buat"
    },
    {
        tag: "pass",
        label: "PRACTICING",
        text: "Password di-hash, tidak pernah disimpan plaintext"
    },
    {
        tag: "learn",
        label: "LEARNING",
        text: "OWASP Top 10 — masih terus dipelajari secara bertahap"
    },
    {
        tag: "learn",
        label: "LEARNING",
        text: "Dasar-dasar jaringan & keamanan lewat lab CTF yang legal"
    },
    {
        tag: "flag",
        label: "HONEST FLAG",
        text: "Belum punya pengalaman audit profesional — masih level pemula"
    }
];
const projects = [
    {
        id: "ppdb",
        code: "LOG_001",
        title: "PPDB TK An-Nabil",
        category: "Web Development",
        status: "COMPLETED",
        accent: "var(--cyan)",
        accentA: "rgba(0,243,255,0.14)",
        glyph: "PPDB",
        stack: [
            "PHP",
            "MYSQL",
            "JAVASCRIPT"
        ],
        summary: "Sistem pendaftaran siswa TK berbasis web untuk menggantikan proses manual berbasis kertas.",
        overview: "Platform penerimaan peserta didik digital untuk sebuah TK, dibangun untuk mengganti pendaftaran manual dengan alur online yang lebih terstruktur.",
        features: [
            "Formulir pendaftaran online dengan validasi",
            "Upload & pelacakan dokumen pendaftar",
            "Dashboard admin untuk memeriksa data pendaftar",
            "Update status pendaftaran untuk orang tua"
        ],
        notes: "Fokus utama proyek ini adalah UX yang sederhana untuk orang tua, dengan struktur data backend yang tetap rapi di sisi admin.",
        role: "Full-stack Developer",
        links: {
            repo: "https://github.com/septianazriel2010-del/ppdb_tk_an_nabil.git",
            demo: ""
        }
    },
    {
        id: "sentinelscan",
        code: "LOG_002",
        title: "SentinelScan",
        category: "Cybersecurity",
        status: "COMPLETED",
        accent: "var(--red)",
        accentA: "rgba(255,60,60,0.14)",
        glyph: "SS",
        stack: [
            "NEXT.JS",
            "TYPESCRIPT",
            "NODE.JS",
            "HTTP",
            "SECURITY HEADERS"
        ],
        summary: "Security header scanner berbasis web untuk menganalisis dan menilai tingkat hardening keamanan sebuah website.",
        overview: "Tool cybersecurity yang melakukan pemeriksaan langsung terhadap HTTP response headers dari target publik untuk mengidentifikasi konfigurasi keamanan browser yang tersedia, hilang, atau perlu diperkuat.",
        features: [
            "Live scanning terhadap HTTP response headers",
            "Scoring security posture dengan skala 0–100",
            "Pemeriksaan 9 security headers modern",
            "Identifikasi header yang missing atau sudah terkonfigurasi",
            "Security insights dan rekomendasi hardening",
            "Menampilkan HTTP status, HTTPS, dan response time",
            "Export hasil scan dalam format JSON"
        ],
        notes: "Fokus utama proyek ini adalah memberikan gambaran cepat mengenai security posture sebuah website melalui pemeriksaan HTTP security headers tanpa menyimpan riwayat hasil scan.",
        role: "Full-stack Developer",
        links: {
            repo: "https://github.com/septianazriel2010-del/CeScans.git",
            demo: "https://cescans-app.vercel.app"
        }
    },
    {
        id: "ciphervault",
        code: "LOG_003",
        title: "CIPHERVAULT",
        category: "Cybersecurity",
        status: "COMPLETED",
        accent: "var(--purple)",
        accentA: "rgba(168,85,247,0.14)",
        glyph: "CV",
        stack: [
            "REACT",
            "JAVASCRIPT",
            "WEB CRYPTO API",
            "AES",
            "RSA",
            "SHA"
        ],
        summary: "Studio enkripsi dan dekripsi berbasis web yang memproses data secara lokal di browser menggunakan Web Crypto API.",
        overview: "Platform keamanan interaktif untuk melakukan enkripsi, dekripsi, hashing, dan eksperimen kriptografi klasik langsung di browser tanpa perlu mengirim data ke server eksternal.",
        features: [
            "Mode Encrypt dan Decrypt untuk teks maupun file",
            "AES-GCM, AES-CBC, AES-CTR, dan RSA-OAEP",
            "Hash satu arah menggunakan SHA-256, SHA-384, dan SHA-512",
            "Kriptografi edukatif seperti Caesar, Vigenère, XOR, dan Base64",
            "Pembuatan kunci 256-bit secara langsung di browser",
            "Security log real-time untuk memantau proses kriptografi",
            "Pemrosesan data secara lokal menggunakan Web Crypto API"
        ],
        notes: "Fokus utama proyek ini adalah memberikan pengalaman eksplorasi kriptografi yang interaktif dengan pemrosesan lokal di browser. Tool ini ditujukan untuk edukasi dan penggunaan umum, bukan sebagai sistem keamanan enterprise yang telah diaudit.",
        role: "Full-stack Developer",
        links: {
            repo: "https://github.com/septianazriel2010-del/HashCez.git",
            demo: "https://hash-cez.vercel.app"
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/sound.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSfxEnabled",
    ()=>isSfxEnabled,
    "playClick",
    ()=>playClick,
    "playGlitchOpen",
    ()=>playGlitchOpen,
    "playHover",
    ()=>playHover,
    "setSfxEnabled",
    ()=>setSfxEnabled,
    "unlockSound",
    ()=>unlockSound
]);
// ─────────────────────────────────────────────────────────────
// Web Audio API synthesizer — hover bleep + click "activation" sound.
// No external audio files; everything is generated at runtime.
// ─────────────────────────────────────────────────────────────
let ctx = null;
let enabled = true;
let unlocked = false;
function getCtx() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
    }
    return ctx;
}
function unlockSound() {
    if (unlocked) return;
    const c = getCtx();
    if (c && c.state === "suspended") c.resume();
    unlocked = true;
}
function setSfxEnabled(v) {
    enabled = v;
}
function isSfxEnabled() {
    return enabled;
}
function playHover() {
    if (!enabled) return;
    const c = getCtx();
    if (!c) return;
    const now = c.currentTime;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(2100, now);
    osc.frequency.exponentialRampToValueAtTime(2600, now + 0.045);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.05, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
    osc.connect(gain).connect(c.destination);
    osc.start(now);
    osc.stop(now + 0.08);
}
function playGlitchOpen() {
    if (!enabled) return;
    const c = getCtx();
    if (!c) return;
    const now = c.currentTime;
    // rapid stuttering noise bursts through a shifting bandpass — reads as signal corruption
    const stutterCount = 5;
    for(let i = 0; i < stutterCount; i++){
        const t = now + i * 0.035;
        const bufferSize = Math.floor(c.sampleRate * 0.02);
        const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
        const data = buffer.getChannelData(0);
        for(let j = 0; j < bufferSize; j++)data[j] = Math.random() * 2 - 1;
        const noise = c.createBufferSource();
        noise.buffer = buffer;
        const filter = c.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 700 + Math.random() * 3200;
        filter.Q.value = 5;
        const gain = c.createGain();
        gain.gain.setValueAtTime(0.065, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.02);
        noise.connect(filter).connect(gain).connect(c.destination);
        noise.start(t);
        noise.stop(t + 0.02);
    }
    // low descending "power surge" tone underneath, for weight
    const osc = c.createOscillator();
    const oGain = c.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.22);
    oGain.gain.setValueAtTime(0.0001, now);
    oGain.gain.exponentialRampToValueAtTime(0.04, now + 0.02);
    oGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
    osc.connect(oGain).connect(c.destination);
    osc.start(now);
    osc.stop(now + 0.25);
}
function playClick() {
    if (!enabled) return;
    const c = getCtx();
    if (!c) return;
    const now = c.currentTime;
    // layer 1: descending square sweep (the "activation" body)
    const osc1 = c.createOscillator();
    const gain1 = c.createGain();
    osc1.type = "square";
    osc1.frequency.setValueAtTime(1200, now);
    osc1.frequency.exponentialRampToValueAtTime(220, now + 0.14);
    gain1.gain.setValueAtTime(0.0001, now);
    gain1.gain.exponentialRampToValueAtTime(0.045, now + 0.01);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
    osc1.connect(gain1).connect(c.destination);
    // layer 2: quick rising blip (the "confirm" tick)
    const osc2 = c.createOscillator();
    const gain2 = c.createGain();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(600, now + 0.05);
    osc2.frequency.exponentialRampToValueAtTime(1800, now + 0.12);
    gain2.gain.setValueAtTime(0.0001, now + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.04, now + 0.06);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
    osc2.connect(gain2).connect(c.destination);
    // layer 3: short filtered noise burst (the "glitch" texture)
    const bufferSize = Math.floor(c.sampleRate * 0.06);
    const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
    const data = buffer.getChannelData(0);
    for(let i = 0; i < bufferSize; i++)data[i] = Math.random() * 2 - 1;
    const noise = c.createBufferSource();
    noise.buffer = buffer;
    const filter = c.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 1800;
    const gain3 = c.createGain();
    gain3.gain.setValueAtTime(0.05, now);
    gain3.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
    noise.connect(filter).connect(gain3).connect(c.destination);
    osc1.start(now);
    osc1.stop(now + 0.17);
    osc2.start(now + 0.05);
    osc2.stop(now + 0.16);
    noise.start(now);
    noise.stop(now + 0.06);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1oeiu5k._.js.map
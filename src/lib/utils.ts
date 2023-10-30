import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWindow(): (Window & typeof globalThis) | null {
  return typeof window !== "undefined" ? window : null;
}

const webGLCtxNames = ["webgl2", "webgl", "experimental-webgl"];
export function hasWebGLContext(): boolean {
  const window = getWindow();
  if (!window) return false;

  const canvas = window?.document.createElement("canvas");
  if (!canvas) return false;

  const { WebGLRenderingContext, WebGL2RenderingContext } = window;
  if (WebGLRenderingContext == null) return false;

  return webGLCtxNames
    .map((ctxName) => {
      try {
        return canvas.getContext(ctxName);
      } catch {
        return null;
      }
    })
    .some(
      (ctx) =>
        ctx != null &&
        (ctx instanceof WebGLRenderingContext ||
          (WebGL2RenderingContext !== null &&
            ctx instanceof WebGL2RenderingContext)) &&
        ctx.getParameter(ctx.VERSION) !== null
    );
}

{
  _v1.exports = {
    name: "@vimeo/record-studio",
    version: "1.0.0",
    private: !0,
    sideEffects: !1,
    main: "src/index.ts",
    scripts: {
      test: "pnpm -w exec jest libs/record-studio --passWithNoTests --silent",
      "clean:node-modules": "rm -rf node_modules",
      "check-translations": "collect-translations collect . -c --single"
    },
    dependencies: {
      "@dnd-kit/core": "catalog:",
      "@mediapipe/tasks-vision": "catalog:",
      "@vimeo/color-picker-brand-kit": "catalog:",
      "@vimeo/content-space": "catalog:",
      "@vimeo/core": "catalog:",
      "@vimeo/embed-player": "catalog:",
      "@vimeo/gctl-api": "catalog:",
      "@vimeo/monetization-upsells": "catalog:",
      "@vimeo/navigation": "catalog:",
      "@vimeo/orion": "catalog:",
      "@vimeo/picox": "catalog:",
      "@vimeo/pendo-client": "catalog:",
      "@vimeo/privacy-management": "catalog:",
      "@vimeo/record-fabric-fork": "catalog:",
      "@vimeo/teleprompter": "catalog:",
      "@vimeo/ui": "catalog:",
      "@vimeo/upsell-modal": "catalog:",
      "@vimeo/use-tracking": "catalog:",
      "@vimeo/video-library": "catalog:",
      "@vimeo/viewer": "catalog:",
      "lottie-web": "catalog:",
      polished: "catalog:polished-3-6-5",
      "react-resizable": "catalog:",
      zustand: "catalog:zustand-5-0-12",
      "@vimeo/components": "catalog:"
    },
    devDependencies: {
      "@testing-library/react": "catalog:",
      "@testing-library/user-event": "catalog:",
      "@types/react-resizable": "catalog:",
      chance: "catalog:",
      "jest-canvas-mock": "catalog:"
    },
    peerDependencies: {
      next: "*",
      react: ">=17",
      "react-dom": ">=17",
      "styled-components": "*"
    }
  };
}
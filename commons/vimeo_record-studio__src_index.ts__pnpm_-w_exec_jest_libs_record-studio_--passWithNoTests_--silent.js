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
      "@dnd-kit/core": "^6.0.8",
      "@mediapipe/tasks-vision": "0.10.18",
      "@vimeo/color-picker-brand-kit": "workspace:*",
      "@vimeo/content-space": "workspace:*",
      "@vimeo/core": "workspace:*",
      "@vimeo/embed-player": "workspace:^1.0.0",
      "@vimeo/gctl-api": "workspace:*",
      "@vimeo/monetization-upsells": "workspace:*",
      "@vimeo/navigation": "workspace:*",
      "@vimeo/orion": "workspace:*",
      "@vimeo/picox": "workspace:*",
      "@vimeo/pendo-client": "workspace:*",
      "@vimeo/privacy-management": "workspace:*",
      "@vimeo/record-fabric-fork": "6.0.0-rc1",
      "@vimeo/teleprompter": "workspace:*",
      "@vimeo/ui": "workspace:*",
      "@vimeo/upsell-modal": "workspace:*",
      "@vimeo/use-tracking": "workspace:*",
      "@vimeo/video-library": "workspace:*",
      "@vimeo/viewer": "workspace:*",
      "@vpr/tracking": "0.1.16",
      "html-react-parser": "^5.0.6",
      "lottie-web": "^5.13.0",
      polished: "3.6.5",
      "react-resizable": "^3.1.3",
      zustand: "^5.0.8",
      "@vimeo/components": "workspace:*"
    },
    devDependencies: {
      "@testing-library/react": "^16.3.0",
      "@testing-library/user-event": "^13.5.0",
      "@types/react-resizable": "^3.0.8",
      chance: "^1.1.8",
      "jest-canvas-mock": "^2.4.0"
    },
    peerDependencies: {
      next: "*",
      react: ">=17",
      "react-dom": ">=17",
      "styled-components": "*"
    }
  };
}
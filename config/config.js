import path from "path";
import os from "os";
import webpackPlugin from "./plugin.config";
import pageRoutes from "./router.config";

export default {
  sass: {},
  routes: pageRoutes,
  //   externals: {
  //     react: "window.React"
  //   },
  targets: {
    android: 5,
    ios: 7,
    chrome: 58,
    ie: 9
  },
  chainWebpack: webpackPlugin,
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: {
          hmr: true
        },
        targets: {
          ie: 11
        },
        locale: {
          enable: true, // default false
          default: "zh-CN", // default zh-CN
          baseNavigator: true // default true, when it is true, will use `navigator.language` overwrite default
        },
        // dynamicImport: {
        //   loadingComponent: "./components/PageLoading/index"
        // },
        ...(!process.env.TEST && os.platform() === "darwin"
          ? {
              dll: {
                include: ["dva", "dva/router", "dva/saga", "dva/fetch"],
                exclude: ["@babel/runtime"]
              },
              hardSource: true
            }
          : {})
      }
    ]
  ],
  alias: {
    "@": path.resolve(__dirname, "src")
  }
};

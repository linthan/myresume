import EndWebpackPlugin from "end-webpack-plugin";
import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import findChrome from "chrome-finder";
import ghpages from "gh-pages";

const outputPath = path.resolve(__dirname, "../dist");
const env = process.env.NODE_ENV;

export default config => {
  if (env !== "development") {
    config.plugin("end-webpack-plugin").use(EndWebpackPlugin, [
      () => {
        // 自定义域名
        fs.writeFileSync(
          path.resolve(outputPath, "CNAME"),
          "resume.melican.cn"
        );
        ghpages.publish(outputPath, { dotfiles: true }, err => {
          console.log("err", err);
          return;
        });
        // 调用 Chrome 渲染出 PDF 文件
        const chromePath = findChrome();
        spawnSync(chromePath, [
          "--headless",
          "--disable-gpu",
          `--print-to-pdf=${path.resolve(outputPath, "resume.pdf")}`,
          "http://resume.melican.cn" // 这里注意改成你的在线简历的网站
        ]);
        // 重新发布到 ghpages
        ghpages.publish(outputPath, { dotfiles: true }, err => {
          return;
        });
      }
    ]);
  }
};

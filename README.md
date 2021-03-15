# 指南

## 开发
1. 执行 `yarn start`
1. 访问 `http://localhost:8000/` 开始开发

### 注意
- 开发的时候不要切换到 `gh-pages` 分支，否则会出现比较多的冲突需要解决。该分支仅供部署使用。

## 部署
网站现在部署在 GitHub 上。
1. 执行 `yarn deploy`, 会自动完成部署
1. 检查域名设置
   - GitHub 部署后，自定义域名会被移除，原因暂时没特别研究过
   - 自定义域名可以在这里找到：Color-Collect 仓库 → 设置（Settings）→ GitHub 页面（GitHub Pages）→ 自定义域名（Custom domain）
   - 如果为空，填入 `colorcollect.cc`，并保存即可
   - 保存后，需要等待一会（一般 1 分钟内），网站才可以访问 

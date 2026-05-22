# 设计师快捷键速查站

快速查找和学习 Photoshop、Illustrator、Figma 等设计软件快捷键的静态网站。

**网址**: https://pcm4475a-max.github.io/design-shortcut-hub/

## 功能

- Photoshop 73 条、Illustrator 68 条常用快捷键
- Figma 20 条、Premiere Pro 15 条、After Effects 15 条快捷键
- 支持 Windows / Mac 快捷键对照切换
- 按软件、分类、使用频率、难度筛选
- 全文搜索（功能名称、快捷键、描述、场景）
- 本地收藏（localStorage）
- 响应式设计，适配电脑、平板、手机
- 每条快捷键都包含记忆方法和使用场景

## 技术栈

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- React Router v7
- GitHub Pages 部署

## 添加更多快捷键

编辑 `src/data/` 目录下对应软件的数据文件：

```
src/data/photoshop.ts    — Photoshop 快捷键
src/data/illustrator.ts  — Illustrator 快捷键
src/data/figma.ts        — Figma 快捷键
src/data/premiere-pro.ts — Premiere Pro 快捷键
src/data/after-effects.ts — After Effects 快捷键
```

每条快捷键的数据结构：

```ts
{
  id: 'ps-001',           // 唯一 ID
  software: 'photoshop',   // 软件标识
  category: '图层操作',     // 分类
  action: '复制图层',       // 功能名称
  win: 'Ctrl + J',         // Windows 快捷键
  mac: '⌘ + J',           // Mac 快捷键
  description: '...',      // 功能说明
  memoryTip: '...',        // 记忆方法
  scene: '...',            // 使用场景
  frequency: 'high',       // 使用频率: high/medium/low
  difficulty: 'easy',      // 新手难度: easy/medium/hard
}
```

添加数据后运行 `npm run build` 重新构建。

## 添加新软件

1. 在 `src/types/shortcut.ts` 的 `Software` 类型中添加新的软件标识
2. 在 `src/data/software.ts` 中添加软件信息
3. 创建新的数据文件（如 `src/data/blender.ts`）
4. 在 `src/data/index.ts` 中导入并合并

## 本地开发

```bash
npm install
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览构建结果
```

## 绑定独立域名

1. 在 `public/` 目录下添加 `CNAME` 文件，内容为你的域名
2. 在域名 DNS 中添加 CNAME 记录指向 `pcm4475a-max.github.io`
3. 修改 `vite.config.ts` 中的 `base` 为 `'/'`
4. 在 GitHub 仓库 Settings → Pages → Custom domain 中填入域名

## 数据说明

快捷键数据综合参考了 Adobe 官方文档和通用快捷键知识。部分快捷键可能因软件版本不同而有差异，欢迎提交 PR 修正和补充。

## License

MIT

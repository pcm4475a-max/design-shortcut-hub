# Shortcut Site Builder

专门用于构建和维护设计软件快捷键知识网站的 Skill。

## 核心规则

### 1. 数据必须结构化
- 所有快捷键数据必须使用 TypeScript 类型定义
- 每条快捷键至少包含：software, category, action, windows, mac, description, memoryTip, scene, frequency, difficulty
- 数据文件按软件拆分：`src/data/photoshop.ts`, `src/data/illustrator.ts` 等

### 2. 每条快捷键必须有记忆方法
- 优先用英文首字母解释（如 Ctrl+T = Transform）
- 无法用英文解释的用场景记忆
- 记忆方法要通俗易懂但必须准确

### 3. 必须是可搜索、可筛选、可收藏的网站
- 全文搜索支持：功能名、快捷键、描述、场景、分类
- 筛选维度：软件、分类、使用频率、难度
- 收藏用 localStorage 实现，无需登录

### 4. 优先保证准确性、可读性、长期维护性
- 快捷键数据必须尽量准确，参考官方文档
- 代码保持简单，不引入不必要的依赖
- 静态网站，无后端，无数据库

### 5. 视觉设计要克制、清晰
- 不做无意义装饰
- 信息层级清楚
- 高对比，适合长期使用
- 参考 Notion 式信息整理 + Apple 文档式排版

### 6. 页面要适合新手、设计师、学生使用
- 每条快捷键有通俗解释
- 有"新手先背这些"模块
- 支持 Windows/Mac 切换
- 响应式设计

### 7. 修改后必须检查
每轮修改后确认：
- [ ] 搜索功能正常
- [ ] 分类筛选正常
- [ ] 收藏功能正常（localStorage 读写）
- [ ] Windows/Mac 切换正常
- [ ] 移动端布局正常
- [ ] `npm run build` 通过

## 项目结构

```
shortcut-website/
├── src/
│   ├── data/          # 快捷键数据文件
│   ├── components/    # React 组件
│   ├── pages/         # 页面组件
│   ├── utils/         # 工具函数（搜索、存储）
│   └── types/         # TypeScript 类型定义
├── public/            # 静态资源
├── index.html         # HTML 入口（含 SEO meta）
├── vite.config.ts     # Vite 配置
└── README.md          # 项目说明
```

## 数据格式

```ts
export interface Shortcut {
  id: string;           // 唯一标识
  software: Software;   // 软件标识
  category: string;     // 分类
  action: string;       // 功能名称
  win: string;          // Windows 快捷键
  mac: string;          // Mac 快捷键
  description: string;  // 通俗解释
  memoryTip: string;    // 记忆方法
  scene: string;        // 适用场景
  frequency: Frequency; // high / medium / low
  difficulty: Difficulty; // easy / medium / hard
}
```

## 添加新快捷键的步骤

1. 编辑对应软件的数据文件
2. 运行 `npm run dev` 验证数据格式
3. 运行 `npm run build` 确认构建通过
4. 提交并推送

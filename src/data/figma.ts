import type { Shortcut } from '../types/shortcut';

const figmaShortcuts: Shortcut[] = [
  // 基础操作
  { id: 'fg-001', software: 'figma', category: '基础操作', action: '选择工具', win: 'V', mac: 'V', description: '切换到选择/移动工具', memoryTip: 'V = 最常用选择键', scene: '移动和选择对象时', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-002', software: 'figma', category: '基础操作', action: '画框工具', win: 'F', mac: 'F', description: '创建 Frame（容器/画板）', memoryTip: 'F = Frame（画框）', scene: '创建页面布局容器时', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-003', software: 'figma', category: '基础操作', action: '矩形工具', win: 'R', mac: 'R', description: '绘制矩形', memoryTip: 'R = Rectangle（矩形）', scene: '画按钮、卡片等', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-004', software: 'figma', category: '基础操作', action: '椭圆工具', win: 'O', mac: 'O', description: '绘制椭圆/正圆', memoryTip: 'O = Oval（椭圆）', scene: '画圆形图标、头像', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-005', software: 'figma', category: '基础操作', action: '文字工具', win: 'T', mac: 'T', description: '创建文字图层', memoryTip: 'T = Text（文字）', scene: '添加标题和正文', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-006', software: 'figma', category: '基础操作', action: '钢笔工具', win: 'P', mac: 'P', description: '绘制矢量路径', memoryTip: 'P = Pen（钢笔）', scene: '画自定义形状和图标', frequency: 'high', difficulty: 'medium' },
  { id: 'fg-007', software: 'figma', category: '基础操作', action: '撤销', win: 'Ctrl + Z', mac: '⌘ + Z', description: '撤销操作', memoryTip: 'Z = 救命键', scene: '操作失误时', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-008', software: 'figma', category: '基础操作', action: '重做', win: 'Ctrl + Shift + Z', mac: '⌘ + Shift + Z', description: '重做操作', memoryTip: 'Shift + Z = 反向撤销', scene: '撤销过头时', frequency: 'high', difficulty: 'easy' },

  // 工具切换
  { id: 'fg-009', software: 'figma', category: '工具切换', action: '移动/缩放模式', win: 'K', mac: 'K', description: '切换到缩放工具', memoryTip: 'K = sKale（缩放）', scene: '调整画布缩放时', frequency: 'medium', difficulty: 'easy' },
  { id: 'fg-010', software: 'figma', category: '工具切换', action: '切片工具', win: 'S', mac: 'S', description: '创建导出切片', memoryTip: 'S = Slice（切片）', scene: '标记导出区域时', frequency: 'medium', difficulty: 'easy' },
  { id: 'fg-011', software: 'figma', category: '工具切换', action: '吸管工具', win: 'I', mac: 'I', description: '吸取颜色', memoryTip: 'I = 吸管（像吸一下）', scene: '统一配色时临时切换', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-012', software: 'figma', category: '工具切换', action: '评论模式', win: 'C', mac: 'C', description: '切换到评论工具', memoryTip: 'C = Comment（评论）', scene: '给设计添加反馈时', frequency: 'medium', difficulty: 'easy' },

  // 对象操作
  { id: 'fg-013', software: 'figma', category: '对象操作', action: '编组', win: 'Ctrl + G', mac: '⌘ + G', description: '将选中对象编组', memoryTip: 'G = Group（编组）', scene: '整理图层时', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-014', software: 'figma', category: '对象操作', action: '取消编组', win: 'Ctrl + Shift + G', mac: '⌘ + Shift + G', description: '解散编组', memoryTip: 'Shift + G = 散开', scene: '需要单独编辑时', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-015', software: 'figma', category: '对象操作', action: '创建组件', win: 'Ctrl + Alt + K', mac: '⌘ + Opt + K', description: '将选中对象创建为组件', memoryTip: 'Alt + K = 创建组件', scene: '创建可复用的 UI 组件时', frequency: 'high', difficulty: 'medium' },
  { id: 'fg-016', software: 'figma', category: '对象操作', action: '自动布局', win: 'Shift + A', mac: 'Shift + A', description: '为选中对象添加自动布局', memoryTip: 'A = Auto layout（自动布局）', scene: '做响应式布局时', frequency: 'high', difficulty: 'medium' },

  // 视图缩放
  { id: 'fg-017', software: 'figma', category: '视图缩放', action: '放大', win: 'Ctrl + +', mac: '⌘ + +', description: '放大视图', memoryTip: '+ = 放大', scene: '编辑细节时', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-018', software: 'figma', category: '视图缩放', action: '缩小', win: 'Ctrl + -', mac: '⌘ + -', description: '缩小视图', memoryTip: '- = 缩小', scene: '浏览全局时', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-019', software: 'figma', category: '视图缩放', action: '适应选择', win: 'Shift + 2', mac: 'Shift + 2', description: '缩放到适合选中的对象', memoryTip: '2 = 缩放到选中', scene: '快速聚焦到某个元素时', frequency: 'high', difficulty: 'easy' },
  { id: 'fg-020', software: 'figma', category: '视图缩放', action: '显示/隐藏 UI', win: 'Ctrl + \\', mac: '⌘ + \\', description: '隐藏 Figma 界面面板', memoryTip: '\\ = 切掉面板', scene: '演示设计时隐藏界面', frequency: 'medium', difficulty: 'easy' },
];

export default figmaShortcuts;

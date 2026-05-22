import type { Shortcut } from '../types/shortcut';

const afterEffectsShortcuts: Shortcut[] = [
  { id: 'ae-001', software: 'after-effects', category: '基础操作', action: '新建合成', win: 'Ctrl + N', mac: '⌘ + N', description: '创建新的合成', memoryTip: 'N = New composition', scene: '开始制作动画时', frequency: 'high', difficulty: 'easy' },
  { id: 'ae-002', software: 'after-effects', category: '基础操作', action: '保存', win: 'Ctrl + S', mac: '⌘ + S', description: '保存当前项目', memoryTip: 'S = Save（AE 容易崩，多保存）', scene: '编辑过程中经常保存', frequency: 'high', difficulty: 'easy' },
  { id: 'ae-003', software: 'after-effects', category: '基础操作', action: '撤销', win: 'Ctrl + Z', mac: '⌘ + Z', description: '撤销上一步', memoryTip: 'Z = 救命键', scene: '操作失误时', frequency: 'high', difficulty: 'easy' },
  { id: 'ae-004', software: 'after-effects', category: '基础操作', action: '导入素材', win: 'Ctrl + I', mac: '⌘ + I', description: '导入文件到项目面板', memoryTip: 'I = Import', scene: '添加素材时', frequency: 'high', difficulty: 'easy' },

  { id: 'ae-005', software: 'after-effects', category: '图层与合成', action: '新建纯色层', win: 'Ctrl + Y', mac: '⌘ + Y', description: '创建纯色图层', memoryTip: 'Y = solid laYer（纯色层）', scene: '添加背景色或遮罩时', frequency: 'high', difficulty: 'easy' },
  { id: 'ae-006', software: 'after-effects', category: '图层与合成', action: '新建空对象', win: 'Ctrl + Alt + Shift + Y', mac: '⌘ + Opt + Shift + Y', description: '创建空对象（Null）用于控制', memoryTip: '三个修饰键 + Y = 空对象', scene: '做父子链接控制器时', frequency: 'high', difficulty: 'medium' },
  { id: 'ae-007', software: 'after-effects', category: '图层与合成', action: '复制图层', win: 'Ctrl + D', mac: '⌘ + D', description: '复制选中的图层', memoryTip: 'D = Duplicate（复制图层）', scene: '需要复制图层时', frequency: 'high', difficulty: 'easy' },
  { id: 'ae-008', software: 'after-effects', category: '图层与合成', action: '拆分图层', win: 'Ctrl + Shift + D', mac: '⌘ + Shift + D', description: '在时间指示器处拆分图层', memoryTip: 'Shift + D = 拆开', scene: '需要把一段素材分成两段时', frequency: 'high', difficulty: 'easy' },

  { id: 'ae-009', software: 'after-effects', category: '关键帧动画', action: '设置关键帧', win: 'Alt + Shift + P/S/R/T', mac: 'Opt + Shift + P/S/R/T', description: '给位置/缩放/旋转/透明度设关键帧', memoryTip: 'Alt + Shift + 属性首字母', scene: '创建动画关键帧时', frequency: 'high', difficulty: 'medium' },
  { id: 'ae-010', software: 'after-effects', category: '关键帧动画', action: '移动到下一帧', win: 'Page Down', mac: 'Page Down', description: '向后移动一帧', memoryTip: '翻页键 = 逐帧前进', scene: '逐帧检查动画时', frequency: 'high', difficulty: 'easy' },
  { id: 'ae-011', software: 'after-effects', category: '关键帧动画', action: '移动到上一帧', win: 'Page Up', mac: 'Page Up', description: '向前移动一帧', memoryTip: '翻页键 = 逐帧后退', scene: '逐帧检查动画时', frequency: 'high', difficulty: 'easy' },
  { id: 'ae-012', software: 'after-effects', category: '视图缩放', action: '适合屏幕', win: 'Ctrl + 0', mac: '⌘ + 0', description: '缩放合成至适合窗口', memoryTip: '0 = 全景', scene: '查看整体效果时', frequency: 'medium', difficulty: 'easy' },
  { id: 'ae-013', software: 'after-effects', category: '视图缩放', action: '放大/缩小', win: 'Ctrl + +/-', mac: '⌘ + +/-', description: '缩放合成视图', memoryTip: '+ = 放大，- = 缩小', scene: '细节调整时', frequency: 'high', difficulty: 'easy' },
  { id: 'ae-014', software: 'after-effects', category: '效果与预设', action: '添加效果', win: 'Ctrl + Shift + E', mac: '⌘ + Shift + E', description: '给图层添加效果', memoryTip: 'E = Effects', scene: '添加特效时', frequency: 'medium', difficulty: 'medium' },
  { id: 'ae-015', software: 'after-effects', category: '效果与预设', action: 'RAM 预览', win: '数字键盘 0', mac: '数字键盘 0', description: '从当前时间开始 RAM 预览', memoryTip: '0 = 从头预览', scene: '预览动画效果时', frequency: 'high', difficulty: 'easy' },
];

export default afterEffectsShortcuts;

import type { Shortcut } from '../types/shortcut';

const premiereProShortcuts: Shortcut[] = [
  { id: 'pr-001', software: 'premiere-pro', category: '基础操作', action: '新建项目', win: 'Ctrl + Alt + N', mac: '⌘ + Opt + N', description: '创建新的 Premiere 项目', memoryTip: 'N = New project', scene: '开始新剪辑项目时', frequency: 'high', difficulty: 'easy' },
  { id: 'pr-002', software: 'premiere-pro', category: '基础操作', action: '导入素材', win: 'Ctrl + I', mac: '⌘ + I', description: '导入媒体文件到项目', memoryTip: 'I = Import（导入素材）', scene: '添加视频素材时', frequency: 'high', difficulty: 'easy' },
  { id: 'pr-003', software: 'premiere-pro', category: '基础操作', action: '保存', win: 'Ctrl + S', mac: '⌘ + S', description: '保存当前项目', memoryTip: 'S = Save（随时保存！）', scene: '编辑过程中经常保存', frequency: 'high', difficulty: 'easy' },
  { id: 'pr-004', software: 'premiere-pro', category: '基础操作', action: '撤销', win: 'Ctrl + Z', mac: '⌘ + Z', description: '撤销上一步操作', memoryTip: 'Z = 救命键', scene: '任何操作失误时', frequency: 'high', difficulty: 'easy' },
  { id: 'pr-005', software: 'premiere-pro', category: '基础操作', action: '导出媒体', win: 'Ctrl + M', mac: '⌘ + M', description: '打开导出媒体对话框', memoryTip: 'M = Media export（媒体导出）', scene: '完成剪辑需要导出视频时', frequency: 'high', difficulty: 'easy' },

  { id: 'pr-006', software: 'premiere-pro', category: '时间轴操作', action: '剃刀工具', win: 'C', mac: 'C', description: '切割时间轴上的剪辑片段', memoryTip: 'C = Cut（切割）', scene: '分割视频片段时', frequency: 'high', difficulty: 'easy' },
  { id: 'pr-007', software: 'premiere-pro', category: '时间轴操作', action: '选择工具', win: 'V', mac: 'V', description: '切换到选择工具', memoryTip: 'V = 最常用选择', scene: '移动和选择剪辑时', frequency: 'high', difficulty: 'easy' },
  { id: 'pr-008', software: 'premiere-pro', category: '时间轴操作', action: '波纹删除', win: 'Shift + Delete', mac: 'Shift + Delete', description: '删除剪辑并自动闭合间隙', memoryTip: 'Shift + Delete = 删掉并把后面的拉过来', scene: '删除片段不留空位时', frequency: 'high', difficulty: 'medium' },
  { id: 'pr-009', software: 'premiere-pro', category: '时间轴操作', action: '放大时间轴', win: 'Alt + 滚轮上', mac: 'Opt + 滚轮上', description: '放大时间轴以查看细节', memoryTip: 'Alt + 滚轮 = 时间缩放', scene: '精细编辑时', frequency: 'high', difficulty: 'easy' },
  { id: 'pr-010', software: 'premiere-pro', category: '时间轴操作', action: '标记入点', win: 'I', mac: 'I', description: '在素材上标记入点', memoryTip: 'I = In（入点）', scene: '选择素材的起始位置时', frequency: 'high', difficulty: 'easy' },

  { id: 'pr-011', software: 'premiere-pro', category: '剪辑编辑', action: '渲染入点到出点', win: 'Enter', mac: 'Return', description: '渲染时间轴上的效果', memoryTip: 'Enter = 确认渲染', scene: '预览卡顿需要渲染时', frequency: 'high', difficulty: 'easy' },
  { id: 'pr-012', software: 'premiere-pro', category: '剪辑编辑', action: '粘贴属性', win: 'Ctrl + Alt + V', mac: '⌘ + Opt + V', description: '粘贴复制的效果属性', memoryTip: 'Alt + V = 粘贴效果', scene: '给多段素材应用相同效果时', frequency: 'medium', difficulty: 'medium' },
  { id: 'pr-013', software: 'premiere-pro', category: '视图缩放', action: '适合屏幕', win: 'Ctrl + 0', mac: '⌘ + 0', description: '缩放时间轴至适合窗口', memoryTip: '0 = 回到全景', scene: '需要看整体时间线时', frequency: 'medium', difficulty: 'easy' },
  { id: 'pr-014', software: 'premiere-pro', category: '工具切换', action: '钢笔工具', win: 'P', mac: 'P', description: '编辑关键帧和遮罩', memoryTip: 'P = Pen（钢笔）', scene: '做关键帧动画时', frequency: 'medium', difficulty: 'medium' },
  { id: 'pr-015', software: 'premiere-pro', category: '工具切换', action: '速率拉伸', win: 'R', mac: 'R', description: '调整剪辑的播放速度', memoryTip: 'R = Rate（速率）', scene: '做慢动作或快进时', frequency: 'medium', difficulty: 'medium' },
];

export default premiereProShortcuts;

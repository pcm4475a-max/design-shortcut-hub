import type { SoftwareInfo } from '../types/shortcut';

export const softwareList: SoftwareInfo[] = [
  {
    id: 'photoshop',
    name: 'Photoshop',
    nameCN: 'Photoshop',
    icon: '🎨',
    color: '#001e36',
    description: '图像编辑与合成',
    categoryOrder: ['基础操作', '图层操作', '选区操作', '画笔与修图', '文字与排版', '视图缩放', '蒙版与调整', '导出与保存'],
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    nameCN: 'Illustrator',
    icon: '✏️',
    color: '#ff7c00',
    description: '矢量图形设计',
    categoryOrder: ['基础操作', '选择工具', '钢笔与路径', '图形绘制', '文字排版', '对齐与分布', '编组与锁定', '视图缩放', '导出与保存'],
  },
  {
    id: 'figma',
    name: 'Figma',
    nameCN: 'Figma',
    icon: '🟣',
    color: '#a259ff',
    description: 'UI/UX 设计协作',
    categoryOrder: ['基础操作', '工具切换', '对象操作', '视图缩放', '组件与样式'],
  },
  {
    id: 'premiere-pro',
    name: 'Premiere Pro',
    nameCN: 'Premiere Pro',
    icon: '🎬',
    color: '#ea77ff',
    description: '视频剪辑与后期',
    categoryOrder: ['基础操作', '时间轴操作', '工具切换', '剪辑编辑', '视图缩放'],
  },
  {
    id: 'after-effects',
    name: 'After Effects',
    nameCN: 'After Effects',
    icon: '✨',
    color: '#9999ff',
    description: '动态图形与视觉特效',
    categoryOrder: ['基础操作', '图层与合成', '关键帧动画', '视图缩放', '效果与预设'],
  },
];

export const softwareMap = Object.fromEntries(softwareList.map((s) => [s.id, s])) as Record<string, SoftwareInfo>;

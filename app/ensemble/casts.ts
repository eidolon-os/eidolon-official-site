// 示例角色团，取材自公版古典名著；只用文字字形呈现，不使用任何影视或动画形象。
export type Member = { glyph: string; name: string; trait: string; color: string };
export type IpCast = {
  id: string;
  label: string;
  title: string;
  mood: string;
  members: Member[];
  replies: { by: number; text: string }[];
  listener: number;
};

export const sharedQuestion = "明天只有半天，又不想太累，你们帮我想想怎么安排。";

export const ipCasts: IpCast[] = [
  {
    id: "xiyou",
    label: "西游",
    title: "取经师徒",
    mood: "热热闹闹，斗嘴不断：大师兄冲在前，二师兄惦记吃，师父来收尾。",
    members: [
      { glyph: "唐", name: "唐僧", trait: "沉稳 · 把方向", color: "#d6ae58" },
      { glyph: "悟", name: "悟空", trait: "机灵 · 先出主意", color: "#e5733f" },
      { glyph: "八", name: "八戒", trait: "乐天 · 补充享受", color: "#a9b36c" },
      { glyph: "沙", name: "沙僧", trait: "踏实 · 兜底细节", color: "#72a8b2" },
    ],
    replies: [
      { by: 1, text: "上午去近郊走一圈，腿脚活动开，中午前就回来！" },
      { by: 2, text: "猴哥这主意行，就是别走太远。走完吃顿好的，下午睡一觉，这半天才叫舒坦。" },
      { by: 0, text: "不必贪多。挑一处真正想去的地方，慢慢走就好。" },
    ],
    listener: 3,
  },
  {
    id: "sanguo",
    label: "三国",
    title: "蜀汉君臣",
    mood: "运筹帷幄，兄弟情深：军师先定策，三弟抢着请缨，大哥顾着大家。",
    members: [
      { glyph: "备", name: "刘备", trait: "仁厚 · 顾全大家", color: "#d1a95c" },
      { glyph: "羽", name: "关羽", trait: "持重 · 一诺千金", color: "#c4513f" },
      { glyph: "飞", name: "张飞", trait: "爽直 · 说干就干", color: "#9aa0ab" },
      { glyph: "亮", name: "诸葛亮", trait: "谋定 · 安排周全", color: "#7fb0bf" },
    ],
    replies: [
      { by: 3, text: "半日之计，贵在从容。辰时出门，就近登高望远，午时归来用饭，余下的时间静坐读书。" },
      { by: 2, text: "军师安排得好！俺在前头开路，谁要是走不动了，俺背着走！" },
      { by: 0, text: "有兄弟们同行，走到哪里都是好去处。只别累着，尽兴就好。" },
    ],
    listener: 1,
  },
  {
    id: "honglou",
    label: "红楼",
    title: "大观园",
    mood: "闲情雅致，细腻周到：凤姐张罗安排，黛玉讲究意境，宝玉跟着凑趣。",
    members: [
      { glyph: "玉", name: "贾宝玉", trait: "天真 · 爱热闹", color: "#e0876c" },
      { glyph: "黛", name: "林黛玉", trait: "灵秀 · 有诗意", color: "#93b58e" },
      { glyph: "钗", name: "薛宝钗", trait: "稳妥 · 处处周到", color: "#d8b86c" },
      { glyph: "凤", name: "王熙凤", trait: "爽利 · 会张罗", color: "#cf5a4c" },
    ],
    replies: [
      { by: 3, text: "这有什么难的！上午园子里逛逛，中午我叫厨房备几样清淡小菜，下午各自歇着，保管不累。" },
      { by: 1, text: "逛园子也好，只别赶得太急。寻一处有水有花的地方坐坐，比走上一整天强。" },
      { by: 0, text: "林妹妹说得是！我也不去什么正经地方，就陪着大家闲逛。" },
    ],
    listener: 2,
  },
];

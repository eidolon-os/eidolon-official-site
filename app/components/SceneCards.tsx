import Link from "next/link";

type Scene = { n: string; code: string; name: string; desc: string; adds: string; host: string; href: string };

export function SceneCards({ scenes, className = "" }: { scenes: readonly Scene[]; className?: string }) {
  return (
    <div className={`one-hub-scenes ${className}`.trim()}>
      {scenes.map((scene) => (
        <Link key={scene.href} href={scene.href}>
          <span>{scene.n}</span>
          <small>{scene.code}</small>
          <h3>{scene.name}</h3>
          <p>{scene.desc}</p>
          <dl><div><dt>新增</dt><dd>{scene.adds}</dd></div><div><dt>One 提供</dt><dd>{scene.host}</dd></div></dl>
          <b>{scene.href.startsWith("#") ? "看环境组合 ↓" : "查看场景 ↗"}</b>
        </Link>
      ))}
    </div>
  );
}

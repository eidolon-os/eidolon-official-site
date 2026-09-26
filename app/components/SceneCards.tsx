import Link from "next/link";

type Scene = { n: string; code: string; name: string; desc: string; adds: string; href: string };

export function SceneCards({ scenes, className = "" }: { scenes: readonly Scene[]; className?: string }) {
  return (
    <div className={`one-hub-scenes ${className}`.trim()}>
      {scenes.map((scene) => (
        <Link key={scene.href} href={scene.href}>
          <span>{scene.n}</span>
          <small>{scene.code}</small>
          <h3>{scene.name}</h3>
          <p>{scene.desc}</p>
          <dl><div><dt>加一台</dt><dd>{scene.adds}</dd></div></dl>
          <b>查看场景 ↗</b>
        </Link>
      ))}
    </div>
  );
}

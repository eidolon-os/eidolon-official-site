"use client";

import { useState, type CSSProperties } from "react";
import { ipCasts, sharedQuestion } from "./casts";

export function IpSwitcher() {
  const [index, setIndex] = useState(0);
  const cast = ipCasts[index];

  return (
    <div className="en-ip">
      <div className="en-ip-tabs" role="tablist" aria-label="切换示例角色团">
        {ipCasts.map((item, i) => (
          <button key={item.id} type="button" role="tab" aria-selected={i === index} aria-controls="en-ip-panel" onClick={() => setIndex(i)}>
            <b>{item.label}</b><span>{item.title}</span>
          </button>
        ))}
      </div>

      <div className="en-ip-body" id="en-ip-panel" role="tabpanel" key={cast.id}>
        <div className="en-ip-cast" aria-label={`${cast.title}：四位角色`}>
          {cast.members.map((member, i) => (
            <article key={member.name} style={{ "--c": member.color } as CSSProperties} className={i === cast.listener ? "is-listener" : undefined}>
              <div className="en-ip-device"><span>{member.glyph}</span></div>
              <b>{member.name}</b>
              <small>{i === cast.listener ? "这轮旁听" : member.trait}</small>
            </article>
          ))}
        </div>

        <div className="en-ip-talk">
          <p className="en-ip-question"><span>你</span>“{sharedQuestion}”</p>
          <ol>
            {cast.replies.map((reply, order) => {
              const member = cast.members[reply.by];
              return (
                <li key={member.name} style={{ "--c": member.color, "--d": `${order * 0.28}s` } as CSSProperties}>
                  <span>{member.glyph}</span>
                  <div><small>{member.name}</small><p>“{reply.text}”</p></div>
                </li>
              );
            })}
          </ol>
          <p className="en-ip-mood">{cast.mood}</p>
        </div>
      </div>
    </div>
  );
}

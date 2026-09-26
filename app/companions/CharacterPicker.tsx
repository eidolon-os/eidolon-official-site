"use client";
import { useState } from "react";
import catalog from "./catalog.json";

export function CharacterPicker() {
  const [selected, setSelected] = useState(catalog[0].id);
  const character = catalog.find((item) => item.id === selected)!;
  return <div className="cp-picker">
    <div className="cp-choices" aria-label="认识五位伙伴">
      {catalog.map((item, index) => <button key={item.id} type="button" className={`cp-choice cp-${item.id}`} aria-pressed={item.id === selected} aria-controls="companion-introduction" onClick={() => setSelected(item.id)}>
        <span className="cp-element">{item.title.split(" · ")[0]}</span>
        <span className="cp-choice-name">{item.name}</span>
        <span>{item.title.split(" · ")[1]}</span>
        <span className="cp-choice-number">0{index + 1}</span>
      </button>)}
    </div>
    <div id="companion-introduction" className={`cp-introduction cp-${character.id}`} aria-live="polite" aria-atomic="true">
      <div><span className="cp-label">一种合拍的相处方式</span><h3>{character.name}<small>{character.title}</small></h3><p>{character.description}</p><p className="cp-note">这些设定是相识的起点。你可以改名字，也可以慢慢调整 TA 的性格和表达。</p></div>
      <div className="cp-dialogue"><span className="cp-label">同一句话，五种回应</span><p className="cp-you">今天有点累。</p><blockquote>{character.examples[0].split("TA：")[1]}</blockquote><span className="cp-note">每一次回应，都会随你们的交流而变化。</span></div>
    </div>
  </div>;
}

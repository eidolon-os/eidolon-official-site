import { VesselMark } from "./brand";

export function OSConstellation() {
  return (
    <div className="os-constellation" aria-label="Eidolon OS 产品关系图：由人拥有内核，模型提供智能，设备提供存在方式">
      <div className="constellation-owner"><span>OWNER</span><b>你拥有并决定</b></div>
      <div className="constellation-rings"><i /><i /><i /></div>
      <div className="constellation-core">
        <VesselMark size={74} tone="bone" breathe idSuffix="hero-os" />
        <span>EIDOLON OS</span>
        <b>同一个 AI 的连续内核</b>
      </div>
      <div className="constellation-asset asset-memory"><span>MEMORY</span><b>记忆</b></div>
      <div className="constellation-asset asset-identity"><span>IDENTITY</span><b>身份</b></div>
      <div className="constellation-asset asset-authority"><span>AUTHORITY</span><b>权限</b></div>
      <div className="constellation-asset asset-tasks"><span>TASKS</span><b>未完成的事</b></div>
      <div className="constellation-world world-minds"><span>MINDS · 可替换</span><b>本地模型 / 云模型 / Agents</b></div>
      <div className="constellation-world world-bodies"><span>PRESENCES · 可扩展</span><b>手机 / One / 家 / 车 / 机器人</b></div>
      <p>稳定的是你与 Eidolon OS。<br />变化的是智能与身体。</p>
    </div>
  );
}

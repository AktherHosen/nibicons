"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";

const TABS = [
  { id: "npm", label: "npm", display: "npm install nibicons", kw: "npm" },
  { id: "yarn", label: "yarn", display: "yarn add nibicons", kw: "yarn" },
  { id: "pnpm", label: "pnpm", display: "pnpm add nibicons", kw: "pnpm" },
];

export default function InstallSection() {
  const [activeTab, setActiveTab] = useState("npm");
  const tab = TABS.find((t) => t.id === activeTab);

  return (
    <>
      <div className="section-head">
        <div>
          <h2>Install</h2>
          <p>Install Nibicons with the package manager used by your project.</p>
        </div>
      </div>

      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`tab-btn${t.id === activeTab ? " active" : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="code-block no-top-radius">
        <CopyButton text={tab.display} />
        <pre>
          {tab.kw ? (
            <>
              <span className="kw">{tab.kw}</span>
              {tab.display.slice(tab.kw.length)}
            </>
          ) : (
            tab.display
          )}
        </pre>
      </div>
    </>
  );
}

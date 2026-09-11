import CopyButton from "./CopyButton";

const reactCode = `import { Home, Search } from 'nibicons';

function Nav() {
  return (
    <nav>
      <Home size={20} />
      <Search size={20} strokeWidth={1.5} />
    </nav>
  );
}`;

const htmlCode = `<!-- paste the SVG directly into your HTML -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path d="M4 12 12 4l8 8" />
</svg>`;

export default function UsageSection() {
  return (
    <>
      <div className="section-head">
        <div>
          <h2>Usage</h2>
          <p>
            Import icons as components, or drop the raw SVG markup you copied
            above straight into HTML.
          </p>
        </div>
      </div>

      <div className="two-col">
        <div className="usage-block">
          <h3>React / JSX</h3>
          <div className="code-block">
            <CopyButton text={reactCode} />
            <pre>{reactCode}</pre>
          </div>
        </div>

        <div className="usage-block">
          <h3>Plain HTML (SVG)</h3>
          <div className="code-block">
            <CopyButton text={htmlCode} />
            <pre>{htmlCode}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

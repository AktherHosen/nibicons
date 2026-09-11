export default function Hero({ count }) {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <h1>Icons drafted for interfaces, not decoration.</h1>
        <p className="lead">
          Nibicons is a small, consistent set of stroke icons — 24×24, 1.75px line weight, no
          filled variants to keep track of. Find what you need below, then drop it straight into
          a build.
        </p>
        <div className="hero-actions">
          <a href="#install" className="btn btn-solid">
            Get the package
          </a>
          <a href="#browse" className="btn btn-ghost">
            Browse icons
          </a>
        </div>
        <div className="stat-row">
          <div className="stat">
            <div className="num">{count}</div>
            <div className="label">icons</div>
          </div>
          <div className="stat">
            <div className="num">24×24</div>
            <div className="label">consistent grid</div>
          </div>
          <div className="stat">
            <div className="num">1.75px</div>
            <div className="label">stroke weight</div>
          </div>
          <div className="stat">
            <div className="num">0 kb</div>
            <div className="label">runtime dependencies</div>
          </div>
        </div>
      </div>
    </section>
  );
}

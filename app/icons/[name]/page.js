import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ICONS, svgMarkup, toComponentName } from '../../../data/icons';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CopyButton from '../../../components/CopyButton';

// Pre-render a static page for every icon at build time.
export function generateStaticParams() {
  return ICONS.map((icon) => ({ name: icon.name }));
}

export function generateMetadata({ params }) {
  const icon = ICONS.find((i) => i.name === params.name);
  if (!icon) return {};
  return {
    title: `${icon.name} icon`,
    description: `Copy the ${icon.name} icon as SVG, or install the Nibicons set to use it as a component in your project.`,
    openGraph: {
      title: `${icon.name} icon · Nibicons`,
      description: `A 24×24 stroke icon from the Nibicons set, in the "${icon.category}" category.`,
    },
  };
}

export default function IconDetailPage({ params }) {
  const icon = ICONS.find((i) => i.name === params.name);
  if (!icon) notFound();

  const markup = svgMarkup(icon);
  const componentName = toComponentName(icon.name);
  const reactSnippet = `import { ${componentName} } from 'nibicons';\n\n<${componentName} size={20} />`;
  const related = ICONS.filter((i) => i.category === icon.category && i.name !== icon.name).slice(0, 6);

  return (
    <>
      <Header />
      <main className="wrap icon-detail">
        <Link href="/#browse" className="back-link">
          ← Back to all icons
        </Link>

        <div className="icon-detail-head">
          <div className="icon-detail-preview" dangerouslySetInnerHTML={{ __html: markup }} />
          <div>
            <h1>{icon.name}</h1>
            <p className="muted mono">{icon.category}</p>
          </div>
        </div>

        <h2 className="sub">SVG markup</h2>
        <div className="code-block">
          <CopyButton text={markup} />
          <pre>{markup}</pre>
        </div>

        <h2 className="sub">React usage</h2>
        <div className="code-block">
          <CopyButton text={reactSnippet} />
          <pre>{reactSnippet}</pre>
        </div>

        {related.length > 0 && (
          <>
            <h2 className="sub">More in &ldquo;{icon.category}&rdquo;</h2>
            <div className="related-grid">
              {related.map((r) => (
                <Link key={r.name} href={`/icons/${r.name}`} className="icon-card" style={{ textDecoration: 'none' }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    dangerouslySetInnerHTML={{ __html: r.svg }}
                  />
                  <span className="icon-name mono">{r.name}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

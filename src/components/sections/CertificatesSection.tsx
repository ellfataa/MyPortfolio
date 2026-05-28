const certificates = [
  {
    title: "Certificate Name 1",
    issuer: "Issuer Name",
    year: "2026",
  },
  {
    title: "Certificate Name 2",
    issuer: "Issuer Name",
    year: "2025",
  },
  {
    title: "Certificate Name 3",
    issuer: "Issuer Name",
    year: "2025",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-500">
        Certificates
      </p>

      <h2 className="text-3xl font-bold md:text-4xl">Certificates</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {certificates.map((certificate) => (
          <article
            key={certificate.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-bold">{certificate.title}</h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {certificate.issuer}
            </p>

            <p className="mt-4 text-xs font-semibold text-slate-500">
              {certificate.year}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
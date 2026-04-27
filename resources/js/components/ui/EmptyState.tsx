export const EmptyState = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-4xl border border-dashed border-korea-line p-6 text-center">
    <h3 className="font-semibold text-korea-ink">{title}</h3>
    <p className="mt-2 text-sm text-korea-muted">{description}</p>
  </div>
);

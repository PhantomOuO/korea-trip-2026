export const LoadingState = ({ label = '載入中...' }: { label?: string }) => (
  <div className="rounded-4xl border border-korea-line bg-white p-6 text-center text-sm text-korea-muted">
    {label}
  </div>
);

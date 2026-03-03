export const LastUpdated = () => {
  const iso = (import.meta.env as any).VITE_BUILD_TIME as string | undefined;
  const date = iso ? new Date(iso) : new Date();
  const formatted = date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  return (
    <span className="text-xs text-muted-foreground">
      Last updated: <span className="text-foreground">{formatted}</span>
    </span>
  );
};



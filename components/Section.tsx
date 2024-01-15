export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex sticky top-0 min-h-screen w-screen max-w-full">
      {children}
    </div>
  );
}

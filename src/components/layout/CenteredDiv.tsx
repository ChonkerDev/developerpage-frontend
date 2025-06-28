export default function CenteredDiv({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 20,
      }}
    >
      {children}
    </div>
  );
}
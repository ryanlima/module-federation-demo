export function ErrorBoundary({ children }) {
  try {
    return children;
  } catch (err) {
    // Sentry
    console.log('===>err', err);
    return <div>⚠️ Falha ao carregar o módulo</div>;
  }
}

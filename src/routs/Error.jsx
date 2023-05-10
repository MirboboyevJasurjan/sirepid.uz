import React, { useEffect, useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    window.onerror = () => {
      setHasError(true);
    };
  }, []);

  if (hasError) {
    return <h1>Unexpected Application Error!</h1>;
  }

  return children;
}

export default ErrorBoundary;

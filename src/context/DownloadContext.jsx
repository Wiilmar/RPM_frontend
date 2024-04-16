import { createContext, useContext, useEffect, useState } from 'react';

const DownloadContext = createContext();

export const DownloadProvider = ({ children }) => {
  const [apkDownloadCount, setApkDownloadCount] = useState(() => {
    // Obtener el valor almacenado en localStorage o usar 0 si no hay valor
    return parseInt(localStorage.getItem('apkDownloadCount')) || 0;
  });

  useEffect(() => {
    // Almacenar el valor del contador de descargas en localStorage
    localStorage.setItem('apkDownloadCount', apkDownloadCount.toString());
  }, [apkDownloadCount]);

  const incrementDownloadCount = () => {
    setApkDownloadCount(count => count + 1);
  };

  return (
    <DownloadContext.Provider value={{ apkDownloadCount, incrementDownloadCount }}>
      {children}
    </DownloadContext.Provider>
  );
};

export const useDownloadContext = () => useContext(DownloadContext);
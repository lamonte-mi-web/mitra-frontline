'use client';
import { useEffect } from 'react';

export function FixExtensionArtifacts() {
  useEffect(() => {
    const body = document.body;
    if (body.hasAttribute('cz-shortcut-listen')) {
      body.removeAttribute('cz-shortcut-listen');
    }
  }, []);

  return null;
}

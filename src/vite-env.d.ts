/// <reference types="vite/client" />
/// <reference types="@testing-library/jest-dom" />

declare module 'figma:asset/*' {
  const value: string;
  export default value;
}


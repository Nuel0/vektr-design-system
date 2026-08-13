import '@testing-library/jest-dom';
import { expect } from 'vitest';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

if (typeof window !== 'undefined') {
  HTMLCanvasElement.prototype.getContext = (() => null) as any;
}

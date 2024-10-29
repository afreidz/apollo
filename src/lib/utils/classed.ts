import { twMerge } from 'tailwind-merge';
import { createClassed } from '@tw-classed/core';

export type { VariantProps } from '@tw-classed/core';
export const { classed } = createClassed({ merger: twMerge });

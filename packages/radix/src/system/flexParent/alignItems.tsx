import { system, CustomStyleDefinitions } from 'styled-system';
export { AlignItemsProps } from 'styled-system';

export const config: CustomStyleDefinitions = { alignItems: true };

export const alignItems = system(config);
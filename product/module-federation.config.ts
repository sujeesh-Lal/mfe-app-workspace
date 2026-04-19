import {ModuleFederationConfig} from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'product',
  exposes: {
    './Module': './src/remote-entry.ts',
    './ProductCard': './src/app/components/ProductCard.tsx'  // 👈 your component

  },
};

/**
* Nx requires a default export of the config to allow correct resolution of the module federation graph.
**/
export default config;

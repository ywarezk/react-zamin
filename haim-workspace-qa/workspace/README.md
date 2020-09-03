# nrwl

```
npx create-nx-workspace workspace
cd workspace
npm install @nrwl/react -D
npx nx generate @nrwl/react:library haim --buildable --publishable --importPath @nz/haim
npx nx run haim:build:production
```

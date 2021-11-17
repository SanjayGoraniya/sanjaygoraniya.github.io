```
# Action to Deploy React JS Applications

# IMPORTANT NOTE: add new secrect for the repository
# 1. AUTH_TOKEN=Your GitHub access token.
# 2. AUTH_USER=`Sanjay Goraniya <your_email@example.com>`


name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x]

    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install 🔧
        run: npm install

      - name: Build and Deploy  🚀
        run: |
          git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
          npm run deploy -- -u "${GITHUB_USER}"
        env:
          GITHUB_TOKEN: ${{ secrets.AUTH_TOKEN }}
          GITHUB_USER: ${{ secrets.AUTH_USER }}
```

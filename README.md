# フルスタック TypeScript デモアプリ

## これは何？
Next.js と NestJS で作る勉強用のデモアプリです。
DB は MySQL で、 Google Cloud の Cloud Run で動作させます。

## バージョン情報
- node 22.11.0

## プロジェクト作成方法

### フロントエンド (Next.js)
```bash
npx create-next-app@latest
```
インストール時のプロンプトには以下のように答える
```bash
What is your project named? frontend
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like your code inside a `src/` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to use Turbopack for `next dev`?  No
Would you like to customize the import alias (`@/*` by default)? No
```

以下のコマンドで `localhost:3000` に画面が表示されたら OK
```bash
npm run dev
```

### バックエンド (NestJS)
```bash
npm i -g @nestjs/cli
nest new backend
```
以下のコマンドで `localhost:3000` に画面が表示されたら OK
```bash
npm run start:dev
```

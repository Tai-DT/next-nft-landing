# 次世代NFT Landing Page

Next.js + TypeScript で構築された次世代NFTのランディングページです。

## 🎨 デザイン

このプロジェクトは Figma デザインから MCP (Model Context Protocol) を使用して自動生成されました。

デザインファイル: https://www.figma.com/design/ysKjT7GRvdF63bzkUwsMAV/次世代NFT-LP

## 🚀 技術スタック

- **Next.js 15** - React フレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Biome** - リント・フォーマット

## 📦 インストール

```bash
npm install
```

## 🏃 開発サーバー

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 🌟 主要機能

### セクション構成

1. **ヒーローセクション** - インパクトのあるビジュアルとメッセージ
2. **NFTとは？** - NFTの基本説明とユースケース紹介
3. **NFTの進化** - 次世代NFTの特徴
4. **シリーズ紹介** - グリーン、レッド、スペシャルエディション
5. **ダウンロード** - iOS/Androidアプリのダウンロード
6. **FAQ** - よくある質問
7. **フッター** - ナビゲーションと連絡先

### 主な特徴

- 📱 レスポンシブデザイン
- 🎭 アニメーション効果
- 🎨 グラデーションと現代的なUI
- ♿ アクセシビリティ対応
- 🚀 パフォーマンス最適化

## 📂 プロジェクト構造

```
next-nft-landing/
├── app/
│   ├── components/
│   │   ├── Header.tsx         # ヘッダーナビゲーション
│   │   ├── Hero.tsx           # ヒーローセクション
│   │   ├── WhatIsNFT.tsx      # NFT説明セクション
│   │   ├── NFTEvolution.tsx   # 進化セクション
│   │   ├── Series.tsx         # シリーズ紹介
│   │   ├── Download.tsx       # ダウンロードセクション
│   │   ├── FAQ.tsx            # FAQ
│   │   └── Footer.tsx         # フッター
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── biome.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 🎨 カラーパレット

- **Primary Blue**: #050C9C
- **Accent Blue**: #3ABEF9
- **Light Blue**: #A7E6FF
- **Green**: #0DCD7C
- **Yellow**: #FEEF01
- **Pink**: #FF3795
- **White**: #FFFFFF
- **Dark**: #252525

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start

# リント
npm run lint

# フォーマット
npm run format
```

## 📝 カスタマイズ

### コンテンツの編集

各セクションのコンテンツは対応するコンポーネントファイルで編集できます：

- ヒーローセクションのテキスト: `app/components/Hero.tsx`
- NFTユースケース: `app/components/WhatIsNFT.tsx` の `useCases` 配列
- FAQ: `app/components/FAQ.tsx` の `faqs` 配列

### スタイルの変更

Tailwind CSS を使用しているため、クラス名を変更するだけでスタイルをカスタマイズできます。

カスタムスタイルは `app/globals.css` に追加してください。

## 🌐 デプロイ

### Vercel へのデプロイ（推奨）

```bash
# Vercel CLI をインストール
npm install -g vercel

# デプロイ
vercel
```

または GitHub リポジトリを Vercel に接続して自動デプロイを設定できます。

## Learn More

To learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

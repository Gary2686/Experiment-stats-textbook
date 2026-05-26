# 📚 心理學實驗設計與分析 · 互動教材

> 基於 Abdi, Edelman, Valentin & Dowling (2009) 《Experimental Design and Analysis for Psychology》製作的互動式教學網站

---

## 🌐 線上預覽

部署到 GitHub Pages 後，網址會是：
```
https://你的GitHub用戶名.github.io/repository名稱/
```

---

## 📁 檔案結構

```
psyc-stats-textbook/
├── index.html       ← 首頁（自動列出所有章節）
├── chapters.js      ← 章節設定檔（這是新增章節的關鍵！）
├── ch4.html         ← 第四章：簡單線性迴歸（已完成）
└── README.md        ← 本說明文件
```

---

## 🚀 如何上架到 GitHub Pages（免費架設網站）

### 第一次上架

1. **登入 GitHub**，建立新的 repository（建議命名：`psyc-stats-textbook` 或任何你喜歡的名稱）
2. **設為 Public**（GitHub Pages 免費版需要公開）
3. 上傳本資料夾的所有檔案：
   - 方法 A：GitHub 網頁介面 → "Add file" → "Upload files" → 拖曳所有檔案
   - 方法 B：使用 [GitHub Desktop](https://desktop.github.com/) 圖形化介面
   - 方法 C：用 `git` 指令（進階）
4. **啟用 GitHub Pages**：
   - 進入 repository 的 `Settings` → 左側選單找 `Pages`
   - Source 選擇 `Deploy from a branch`
   - Branch 選 `main`（或 `master`），資料夾選 `/ (root)`
   - 點 `Save`
5. 等待 1–2 分鐘後，網址就會出現在 Pages 設定頁的上方

---

## ✨ 如何新增新章節（核心功能）

**只需要兩個動作**：

### 動作 1：建立新章節的 HTML 檔案

把 Claude 製作的新章節（如 `ch5.html`）放到同一個資料夾。

### 動作 2：編輯 `chapters.js`

打開 `chapters.js`，找到對應章節的設定，把 `available: false` 改成 `available: true`：

```javascript
{
  num: "05",
  file: "ch5.html",
  title: "正交多元迴歸",
  desc: "兩個或以上自變數的迴歸分析...",
  tags: ["多元迴歸", "偏相關"],
  available: true   // ← 改成 true 就會在首頁出現
}
```

**完成！** 首頁會自動：
- 顯示新章節的卡片
- 更新「已上架 X/Y」的進度
- 更新進度條

---

## 📝 新章節設定範例

要新增完全沒在清單上的章節？直接在 `chapters.js` 的陣列裡加一個物件：

```javascript
window.chaptersData = [
  // ... 既有章節 ...
  {
    num: "05",                                    // 章節編號（字串）
    file: "ch5.html",                             // HTML 檔名
    title: "正交多元迴歸",                          // 章節標題
    desc: "本章介紹兩個以上自變數的迴歸分析方法...",   // 簡短描述
    tags: ["多元迴歸", "偏相關", "標準化係數"],       // 標籤（陣列）
    available: true                               // 是否已完成
  }
];
```

---

## 🔄 更新網站

每次修改檔案後（無論是新增章節、修改內容、調整 chapters.js）：

1. 把修改後的檔案重新上傳到 GitHub
2. GitHub Pages 會在 1-2 分鐘內自動更新

---

## 💡 常見問題

**Q: 我可以本地預覽嗎？**  
A: 可以！直接用瀏覽器打開 `index.html` 即可（注意要把所有檔案放在同一個資料夾）。

**Q: 我可以改設計嗎？**  
A: 可以！每個 HTML 檔案開頭的 `<style>` 區塊都是樣式設定，CSS 變數（`:root` 區塊）可以一次調整全站配色。

**Q: 章節順序怎麼決定？**  
A: 依照 `chapters.js` 陣列的順序排列。想換順序就調整陣列順序。

**Q: 想暫時下架某章節？**  
A: 把該章節的 `available` 改成 `false`，它會顯示為「敬請期待」但保留位置。

---

## 📜 教材來源

Abdi, H., Edelman, B., Valentin, D. & Dowling, W. J. (2009).  
*Experimental Design and Analysis for Psychology*. Oxford University Press.

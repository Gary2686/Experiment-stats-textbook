/* ═══════════════════════════════════════════════════════════════
   📚 章節設定檔（chapters.js）
   ───────────────────────────────────────────────────────────────
   👉 新增章節只需要做兩件事：
   
   1. 在下方陣列中，把對應章節的 "available" 改成 true
   
   2. 把對應的 HTML 檔案（如 ch5.html）放到同一個資料夾
   
   完成！首頁會自動顯示新章節。
   ─────────────────────────────────────────────────────────────── */

window.chaptersData = [
  // ─── PART 1：基礎概念（第 1-4 章）───
  {
    num: "01", file: "ch1.html",
    title: "實驗設計導論",
    desc: "什麼是自變數、依變數？如何避免混淆變數？內部效度 vs 外部效度，以及隨機分派的重要性。",
    tags: ["自變數", "依變數", "隨機化", "效度"],
    available: true
  },
  {
    num: "02", file: "ch2.html",
    title: "相關分析",
    desc: "Pearson 相關係數的意義與計算。從散佈圖到交叉乘積，理解兩變數之間的線性關係。",
    tags: ["散佈圖", "共變數", "相關係數 r", "Z 分數"],
    available: true
  },
  {
    num: "03", file: "ch3.html",
    title: "統計檢定：F 檢定",
    desc: "虛無假設、顯著水準、Type I/II 錯誤。Fisher 的 F 分配、臨界值與信賴區間的完整介紹。",
    tags: ["H₀ / H₁", "α 水準", "F 分配", "信賴區間"],
    available: true
  },
  {
    num: "04", file: "ch4.html",
    title: "簡單線性迴歸",
    desc: "迴歸方程式、最佳擬合線、平方和分割。透過 Sternberg 反應時間實驗，掌握迴歸分析全流程。",
    tags: ["迴歸線", "最小平方法", "r²", "F 比值"],
    available: true  // ✓ 已完成
  },

  // ─── PART 2：多元迴歸（第 5-6 章）───
  {
    num: "05", file: "ch5.html",
    title: "正交多元迴歸",
    desc: "兩個或以上自變數的迴歸分析。當預測變數彼此正交（不相關）時的處理方法。",
    tags: ["多元迴歸", "正交", "偏迴歸係數"],
    available: true
  },
  {
    num: "06", file: "ch6.html",
    title: "非正交多元迴歸",
    desc: "更真實的多元迴歸情境：當預測變數之間彼此相關時，如何分離各自的獨特貢獻。",
    tags: ["共線性", "型 I/II/III 平方和", "半偏相關"],
    available: true
  },

  // ─── PART 3：單因子變異數分析（第 7-14 章）───
  {
    num: "07", file: "ch7.html",
    title: "單因子 ANOVA：直觀法",
    desc: "變異數分析的入門：用直觀的方式理解 F 比值的計算與意義。",
    tags: ["ANOVA", "F 比值", "組間/組內變異"],
    available: false
  },
  {
    num: "08", file: "ch8.html",
    title: "單因子 ANOVA：檢定與效果量",
    desc: "完整的單因子 ANOVA 流程，包含計算公式、檢定步驟與效果量指標。",
    tags: ["η²", "ω²", "效果量", "檢定力"],
    available: false
  },
  {
    num: "09", file: "ch9.html",
    title: "單因子 ANOVA：迴歸觀點",
    desc: "從迴歸分析的角度重新理解 ANOVA：兩者其實是同一個一般線性模型的不同呈現。",
    tags: ["GLM", "虛擬編碼", "迴歸與 ANOVA"],
    available: false
  },
  {
    num: "10", file: "ch10.html",
    title: "單因子 ANOVA：分數模型",
    desc: "用分數模型（Score Model）描述每筆觀察值的組成：總平均 + 處理效果 + 誤差。",
    tags: ["分數模型", "固定效果", "隨機效果"],
    available: false
  },
  {
    num: "11", file: "ch11.html",
    title: "ANOVA 的基本假設",
    desc: "變異數分析背後的三大假設：常態性、變異數同質性、獨立性。如何檢驗與處理違反假設。",
    tags: ["常態性", "變異數同質性", "穩健統計"],
    available: false
  },
  {
    num: "12", file: "ch12.html",
    title: "單因子 ANOVA：計畫性正交比較",
    desc: "事前規劃的對比分析。當有特定假設時，如何使用正交對比進行更精細的檢定。",
    tags: ["正交對比", "計畫性比較", "對比係數"],
    available: false
  },
  {
    num: "13", file: "ch13.html",
    title: "單因子 ANOVA：計畫性非正交比較",
    desc: "當對比之間相關時的處理方式，以及多重比較的型 I 錯誤校正。",
    tags: ["非正交對比", "Bonferroni 校正", "多重比較"],
    available: false
  },
  {
    num: "14", file: "ch14.html",
    title: "單因子 ANOVA：事後比較",
    desc: "ANOVA 顯著後的後續分析：Tukey HSD、Scheffé、Newman-Keuls 等多種事後檢定方法。",
    tags: ["事後檢定", "Tukey HSD", "Scheffé"],
    available: false
  },

  // ─── PART 4：多因子設計(第 15-21 章)───
  {
    num: "15", file: "ch15.html",
    title: "多因子設計概論",
    desc: "為什麼需要多因子設計？交互作用的概念，以及多因子實驗的優勢與挑戰。",
    tags: ["多因子設計", "交互作用", "主效果"],
    available: false
  },
  {
    num: "16", file: "ch16.html",
    title: "二因子 ANOVA：A × B 設計",
    desc: "兩個獨立因子的完整 ANOVA：主效果、交互作用、簡單主效果的計算與解釋。",
    tags: ["A×B 設計", "交互作用", "簡單主效果"],
    available: false
  },
  {
    num: "17", file: "ch17.html",
    title: "因子設計與對比分析",
    desc: "在多因子設計中使用對比分析，深入探討特定的研究問題。",
    tags: ["因子對比", "交互對比", "趨勢分析"],
    available: false
  },
  {
    num: "18", file: "ch18.html",
    title: "單因子重複量數 ANOVA：S × A",
    desc: "受試者內設計：同一群受試者接受所有實驗條件的分析方法。",
    tags: ["重複量數", "受試者內", "球面性"],
    available: false
  },
  {
    num: "19", file: "ch19.html",
    title: "二因子完全重複量數：S × A × B",
    desc: "兩個因子都是受試者內變數的設計分析。",
    tags: ["完全重複量數", "二因子內變項"],
    available: false
  },
  {
    num: "20", file: "ch20.html",
    title: "二因子混合設計：S(A) × B",
    desc: "一個受試者間、一個受試者內的混合設計。最常見的實驗設計之一。",
    tags: ["混合設計", "Split-plot", "受試者間×內"],
    available: false
  },
  {
    num: "21", file: "ch21.html",
    title: "巢套因子設計：S × A(B)",
    desc: "當一個因子的水準巢套在另一個因子中的設計與分析。",
    tags: ["巢套設計", "Nested design", "層級結構"],
    available: false
  },

  // ─── PART 5：進階主題（第 22 章）───
  {
    num: "22", file: "ch22.html",
    title: "推導任何設計的期望值",
    desc: "一般性原則：如何從零開始推導任何實驗設計的期望均方（EMS）。",
    tags: ["期望均方", "EMS", "通用原則"],
    available: false
  }
];

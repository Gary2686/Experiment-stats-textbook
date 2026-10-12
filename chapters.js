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
    title: "單因子 ANOVA：直觀法與 F 的計算",
    desc: "從心像記憶實驗出發，把變異拆成「組間」與「組內」兩塊，親手造出 F 比值。平方和分割、自由度與均方的完整推導。",
    tags: ["組間/組內變異", "平方和分割", "自由度", "F 比值"],
    available: true
  },
  {
    num: "08", file: "ch8.html",
    title: "單因子 ANOVA：檢定與效果量",
    desc: "統計檢定六步驟、F 分配與臨界值、S(A) 記號、Romeo &amp; Juliet 四組實例，以及效果量 R²／η² 與檢定力粗算。",
    tags: ["F 分配", "S(A) 記號", "效果量 R²", "檢定力"],
    available: true
  },
  {
    num: "09", file: "ch9.html",
    title: "單因子 ANOVA：迴歸觀點",
    desc: "揭穿一個秘密：ANOVA 與迴歸是同一個東西。用組平均當預測變數，b = 1、a = 0、Ŷ = M_a·，兩套記號完整對照。",
    tags: ["平均數模型", "GLM", "虛擬編碼", "記號對照"],
    available: true
  },
  {
    num: "10", file: "ch10.html",
    title: "單因子 ANOVA：分數模型",
    desc: "一個分數由總平均＋處理效果＋誤差組成。期望均方 EMS 證明了 H₀ 下 F ≈ 1，並解鎖不偏效果量 ω² 與 ρ²。",
    tags: ["分數模型", "期望均方 EMS", "固定/隨機因子", "ω² 與 ρ²"],
    available: true
  },
  {
    num: "11", file: "ch11.html",
    title: "ANOVA 的基本假設",
    desc: "常態性、變異數同質性、獨立性三大假設。O'Brien 檢定、Lilliefors 常態性檢定，以及違反時的分數轉換策略。",
    tags: ["常態性", "變異數同質性", "O'Brien 檢定", "Lilliefors"],
    available: true
  },
  {
    num: "12", file: "ch12.html",
    title: "單因子 ANOVA：計畫性正交比較",
    desc: "omnibus F 只說「有差異」。對比分析把研究假設直接翻譯成權重，切開實驗效果——含 α 膨脹、Šidák 校正與趨勢分析。",
    tags: ["對比 ψ", "正交性", "Šidák 校正", "趨勢分析"],
    available: true
  },
  {
    num: "13", file: "ch13.html",
    title: "單因子 ANOVA：計畫性非正交比較",
    desc: "當對立理論的預測互相重疊，古典法會重複計算功勞。用第六章的半偏相關評估每個理論「獨有」的解釋力。",
    tags: ["非正交對比", "Dunnett 檢定", "半偏相關", "理論競賽"],
    available: true
  },
  {
    num: "14", file: "ch14.html",
    title: "單因子 ANOVA：事後比較",
    desc: "看完資料才決定要比什麼？你的比較家族其實包含所有可能的比較。Scheffé、Tukey、Newman–Keuls 三種保護策略。",
    tags: ["事後比較", "Scheffé", "Tukey HSD", "Newman–Keuls"],
    available: true
  },

  // ─── PART 4：多因子設計(第 15-21 章)───
  {
    num: "15", file: "ch15.html",
    title: "多因子設計概論",
    desc: "為什麼要同時操弄兩個變數？交互作用的理論價值，以及描述任何實驗設計的「語法」——巢套、交叉與設計公式。",
    tags: ["交互作用", "巢套 A(B)", "交叉 A×B", "設計公式"],
    available: true
  },
  {
    num: "16", file: "ch16.html",
    title: "二因子 ANOVA：A × B 設計",
    desc: "主效果、交互作用與平方和三分割。從 Treisman 視覺搜尋到 Tulving 線索回憶，含 Model I/II/III 的 F 分母選擇與三種效果量。",
    tags: ["主效果", "交互作用", "期望均方", "partial η²"],
    available: true
  },
  {
    num: "17", file: "ch17.html",
    title: "因子設計與對比分析",
    desc: "把主效果與交互作用「再切細」。主效果對比、交互作用對比（兩者相乘而得）、次設計分析，以及當理論預測不照標準分解走時的處理。",
    tags: ["主效果對比", "交互作用對比", "次設計分析", "標準分解"],
    available: true
  },
  {
    num: "18", file: "ch18.html",
    title: "單因子重複量數設計：S × A",
    desc: "讓同一批人跑完所有條件。把個別差異從誤差中挖出來，F 從 1.07 飆到 7.50——但要面對攜帶效應、回歸平均與全新的球面性假設。",
    tags: ["每人當自己的控制組", "MS_AS 當誤差", "攜帶效應", "球面性"],
    available: true
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

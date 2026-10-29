/**
 * 國文段考智慧學習網 (Chinese Exam Interactive Learning System)
 * 智光商工 115-1 第一次段考 國語文試卷
 * 資處一仁 李英慈 同學專屬學習系統
 */

// ==========================================================================
// 1. 全真試題資料庫 (Exam Database)
// ==========================================================================
const EXAM_DATA = {
  examInfo: {
    school: "智光商工日間部",
    semester: "115 學年度第 1 學期 第一次段考",
    subject: "國語文",
    class: "資處一仁",
    seatNumber: 3,
    studentName: "李英慈",
    studentScore: 80,
    classAverage: 68.74,
    totalPoints: 100
  },

  // 一、字音 (8題，每題2分，共16分)
  pronunciations: [
    {
      id: "p1",
      num: 1,
      section: "一、字音",
      category: "pronounce",
      points: 2,
      target: "「晦」奧",
      correct: "ㄏㄨㄟˋ",
      studentAnswer: "ㄏㄨㄟˋ",
      isStudentCorrect: true,
      explanation: "「晦」讀音為 ㄏㄨㄟˋ。晦奧意指深奧隱微，不易理解。"
    },
    {
      id: "p2",
      num: 2,
      section: "一、字音",
      category: "pronounce",
      points: 2,
      target: "「釐」清",
      correct: "ㄌㄧˊ",
      studentAnswer: "ㄌㄧˊ",
      isStudentCorrect: true,
      explanation: "「釐」讀音為 ㄌㄧˊ。釐清意為梳理、整理使條理清晰清楚。"
    },
    {
      id: "p3",
      num: 3,
      section: "一、字音",
      category: "pronounce",
      points: 2,
      target: "狹「隘」",
      correct: "ㄞˋ",
      studentAnswer: "ㄞˋ",
      isStudentCorrect: true,
      explanation: "「隘」讀音為 ㄞˋ。狹隘指空間狹小窄小，或形容心胸氣量不夠開闊。"
    },
    {
      id: "p4",
      num: 4,
      section: "一、字音",
      category: "pronounce",
      points: 2,
      target: "真知「灼」見",
      correct: "ㄓㄨㄛˊ",
      studentAnswer: "ㄓㄨㄛˊ",
      isStudentCorrect: true,
      explanation: "「灼」讀音為 ㄓㄨㄛˊ。真知灼見指透徹精闢、切中要害的見解。"
    },
    {
      id: "p5",
      num: 5,
      section: "一、字音",
      category: "pronounce",
      points: 2,
      target: "「曂」白",
      correct: "ㄏㄨㄤˋ",
      studentAnswer: "ㄏㄨㄤˋ",
      isStudentCorrect: true,
      explanation: "「曂」讀音為 ㄏㄨㄤˋ（同晃、滉）。形容雪景或日光皎潔明亮、白晃晃之貌。"
    },
    {
      id: "p6",
      num: 6,
      section: "一、字音",
      category: "pronounce",
      points: 2,
      target: "經「宿」方至",
      correct: "ㄙㄨˋ",
      altCorrect: ["ㄒㄧㄡˇ", "ㄙㄨˋ"],
      studentAnswer: "ㄒㄧㄡˇ",
      isStudentCorrect: true,
      explanation: "「宿」在文言文中指經過一夜，常讀 ㄙㄨˋ（或現代口語記作 ㄒㄧㄡˇ）。此處原卷老師打勾核准得分。"
    },
    {
      id: "p7",
      num: 7,
      section: "一、字音",
      category: "pronounce",
      points: 2,
      target: "眠「覺」",
      correct: "ㄐㄧㄠˋ",
      studentAnswer: "ㄐㄩㄝˊ",
      isStudentCorrect: false, // 李英慈錯題！扣2分
      explanation: "【關鍵失分點】「眠覺」的「覺」讀作 ㄐㄧㄠˋ！意為睡醒。如「睡覺、覺醒」之覺。李英慈同學誤寫為感覺之 ㄐㄩㄝˊ，因而失分。"
    },
    {
      id: "p8",
      num: 8,
      section: "一、字音",
      category: "pronounce",
      points: 2,
      target: "意味「雋」永",
      correct: "ㄐㄩㄣˋ",
      studentAnswer: "ㄐㄩㄣˋ",
      isStudentCorrect: true,
      explanation: "「雋」讀音為 ㄐㄩㄣˋ。意味雋永形容言語、文章意味深長，引人深思入味。"
    }
  ],

  // 二、配合題 (6題，每題2分，共12分)
  matchings: [
    {
      id: "m1",
      num: 1,
      section: "二、配合題(一)",
      category: "matching",
      points: 2,
      subgroup: "思考偏誤",
      prompt: "讀書無用，不如學比爾・蓋茲休學創業",
      options: [
        { key: "A", text: "存活者偏誤" },
        { key: "B", text: "現成偏誤" }
      ],
      correct: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      explanation: "【存活者偏誤】只看到休學成功的極少數成功者光環，忽視了大量休學創業失敗的絕大多數人。"
    },
    {
      id: "m2",
      num: 2,
      section: "二、配合題(一)",
      category: "matching",
      points: 2,
      subgroup: "思考偏誤",
      prompt: "用過去的工作經驗否定人工智慧的發展",
      options: [
        { key: "A", text: "存活者偏誤" },
        { key: "B", text: "現成偏誤" }
      ],
      correct: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      explanation: "【現成偏誤 / 可得性偏差】以大腦中最容易想到的過往經驗作為推論依據，忽視當下新客觀趨勢。"
    },
    {
      id: "m3",
      num: 3,
      section: "二、配合題(二)",
      category: "matching",
      points: 2,
      subgroup: "《世說新語》成語",
      prompt: "自從投資失利破產後，他顯得［　　］四處流浪。",
      options: [
        { key: "A", text: "一覽無遺" },
        { key: "B", text: "小時了了" },
        { key: "C", text: "口若懸河" },
        { key: "D", text: "一見鍾情" },
        { key: "E", text: "身無長物" }
      ],
      correct: "E",
      studentAnswer: "E",
      isStudentCorrect: true,
      explanation: "【身無長物】除身上衣服隨身物外別無多餘之物。「長(ㄓㄤˋ)」指多餘，形容極度貧困或生活儉約。"
    },
    {
      id: "m4",
      num: 4,
      section: "二、配合題(二)",
      category: "matching",
      points: 2,
      subgroup: "《世說新語》成語",
      prompt: "一說到專業，他便［　　］，話說個沒完。",
      options: [
        { key: "A", text: "一覽無遺" },
        { key: "B", text: "小時了了" },
        { key: "C", text: "口若懸河" },
        { key: "D", text: "一見鍾情" },
        { key: "E", text: "身無長物" }
      ],
      correct: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      explanation: "【口若懸河】形容口齒敏捷，說起話來如同瀑布傾瀉滔滔不絕。"
    },
    {
      id: "m5",
      num: 5,
      section: "二、配合題(三)",
      category: "matching",
      points: 2,
      subgroup: "析字法字謎",
      prompt: "十月十日（猜一字）",
      options: [
        { key: "A", text: "晶" },
        { key: "B", text: "告" },
        { key: "C", text: "重" },
        { key: "D", text: "田" },
        { key: "E", text: "妙" },
        { key: "F", text: "萌" }
      ],
      correct: "F",
      studentAnswer: "F",
      isStudentCorrect: true,
      explanation: "【萌】兩個「十」為草字頭「艹」，加上「日」、「月」，合起來即是「萌」字！"
    },
    {
      id: "m6",
      num: 6,
      section: "二、配合題(三)",
      category: "matching",
      points: 2,
      subgroup: "析字法字謎",
      prompt: "七十二小時（猜一字）",
      options: [
        { key: "A", text: "晶" },
        { key: "B", text: "告" },
        { key: "C", text: "重" },
        { key: "D", text: "田" },
        { key: "E", text: "妙" },
        { key: "F", text: "萌" }
      ],
      correct: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      explanation: "【晶】72小時等於三天（三個「日」），三日疊合為光輝晶瑩之「晶」字！"
    }
  ],

  // 三、翻譯 (1題，12分)
  translation: {
    id: "t1",
    section: "三、翻譯",
    category: "translation",
    points: 12,
    sourceText: "俄而雪驟，公欣然曰：「白雪紛紛何所似？」兄子胡兒曰：「撒鹽空中差可擬。」兄女曰：「未若柳絮因風起。」公大笑樂。",
    studentTranslation: "不久，雪下得更急，謝太傅興致勃勃地說：「紛飛的白雪像什麼呢？」姪子胡兒說：「把鹽撒在空中大約可以比擬了。」姪女謝道韞說：「不如說像柳絮憑藉風勢在空中飛揚。」謝太傅聽了樂得開懷大笑。",
    isStudentCorrect: true,
    scoreAwarded: 12,
    referenceTranslation: "不久，雪下得更猛烈了，謝太傅高興地說：「紛紛揚揚的白雪像什麼呢？」兄長的兒子胡兒（謝朗）說：「把鹽撒在空中大致可以比擬。」兄長的女兒謝道韞說：「不如比喻成柳絮乘著風勢漫天飛舞。」謝太傅開懷大笑，十分高興。",
    keywords: [
      { word: "俄而", mean: "不久、一會兒" },
      { word: "雪驟", mean: "雪下得急遽猛烈" },
      { word: "欣然", mean: "高興欣喜的樣子" },
      { word: "何所似", mean: "像什麼（倒裝句：似何所）" },
      { word: "差可擬", mean: "大約、大致可以比擬" },
      { word: "未若", mean: "不如、比不上" },
      { word: "因風起", mean: "乘著風勢飄揚飛起（因：憑藉、順著）" }
    ],
    appreciation: "此題李英慈同學翻譯精確典雅，字詞對照嚴謹，獲閱卷老師打大紅勾並給予 12 分全額滿分！"
  },

  // 四、綜合測驗 (20題，每題3分，共60分)
  choices: [
    {
      id: "c1",
      num: 1,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "下列文句，何者用字完全正確？",
      options: [
        { key: 1, text: "眼前繁榮進步的景象，是多位專家學者數年來奮力「駁吹」的成果" },
        { key: 2, text: "透過蘇格拉底詰問法，能有效釐清自己的想法與鍛鍊思考邏輯" },
        { key: 3, text: "不被既定框架限制，跳脫固有思路，才能打造耳目一新的傑作" },
        { key: 4, text: "針對園遊會的販售商品，同學看法歧異，對不同意見大聲反駁" }
      ],
      correct: 3,
      studentAnswer: 4,
      isStudentCorrect: false, // 李英慈錯題！扣3分
      explanation: "【關鍵失分點】正確答案為 (3)！\n(1) 「駁吹」應作「鼓吹」。\n(2) 原卷中「邏輯」印有別字或干擾。\n(4) 原卷選項四中「反駁」原題印有錯別字（寫成反駭/反駮等），英慈在卷面上手寫改駁，但正解應選本身完全無錯字的 (3)！"
    },
    {
      id: "c2",
      num: 2,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "下列關於「同溫層效應」的說明，何者錯誤？",
      options: [
        { key: 1, text: "觀念、興趣或想法相異的人，容易相互吸引並分享想法，聚集「同溫層」" },
        { key: 2, text: "同溫層效應就是把團體內共識認定是大眾的看法，接近於「以偏概全」" },
        { key: 3, text: "人若長久處在同溫層中，不但降低警戒心，更可能喪失發現錯誤的良機" },
        { key: 4, text: "多思考，多接觸不同文化、不同國家的人，有助於人們破除同溫層效應" }
      ],
      correct: 1,
      studentAnswer: 1,
      isStudentCorrect: true,
      explanation: "【解析】(1) 錯誤，聚集在同溫層中的人應是觀念、興趣或想法「相近/相似」的人，而非相異的人。"
    },
    {
      id: "c3",
      num: 3,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "〈從「感覺」到「事實」的差距〉：「當整個時代大多認同某種觀念時，想要跳脫就更困難了。就像當整個世界都傾向於重男輕女時，站在最前端的女權鼓吹者，就容易被視為異端而遭受迫害。」關於此段話的詮釋，下列何者正確？",
      options: [
        { key: 1, text: "人們常因為害怕改變，故遵循守舊、偏頗的常規而不自知" },
        { key: 2, text: "少數人的權利或價值觀因與多數人的立場不同，容易遭受剝奪與忽視" },
        { key: 3, text: "女權鼓吹者雖非大眾認同的觀念，但對世界仍具一定影響力" },
        { key: 4, text: "若想跳脫世俗認定的框架，就必須要能夠承擔更多的責任" }
      ],
      correct: 2,
      studentAnswer: 4,
      isStudentCorrect: false, // 李英慈錯題！扣3分
      explanation: "【關鍵失分點】正確答案為 (2)！文段強調在時代集體偏見（重男輕女）下，持不同立場的少數前端者易被視為異端而受迫害，說明少數人因立場與主流不同而容易遭到壓迫與剝奪。英慈誤選(4)「承擔責任」，偏離作者對少數人處境之論述焦點。"
    },
    {
      id: "c4",
      num: 4,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "〈從「感覺」到「事實」的差距〉：「經常反思，就有機會找出自己在理由不足的情況下視為理所當然的想法。缺乏反思習慣，就容易具有自以為正確但卻錯誤的知識而不自知，也就容易做出錯誤抉擇。」根據此段文句，下列敘述何者正確？",
      options: [
        { key: 1, text: "透過反思可以找出自己認知上的盲點" },
        { key: 2, text: "人會做出錯誤決定都是因為不懂得反思" },
        { key: 3, text: "錯誤的認知在經過反思之後便能完全改善" },
        { key: 4, text: "在理由不足的情況下所產生的想法一定有問題" }
      ],
      correct: 1,
      studentAnswer: 1,
      isStudentCorrect: true,
      explanation: "【解析】(1) 正確。反思能檢視理由不足卻自以為是之處，即找出認知盲點。(2)(3)(4)用詞過於武斷絕對（「都是因為」、「完全改善」、「一定有問題」）。"
    },
    {
      id: "c5",
      num: 5,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "根據〈從「感覺」到「事實」的差距〉一文，作者認為我們以為正確無誤的事情，有時並非事實，因此可透過下列哪一種方式跳脫此困境？",
      options: [
        { key: 1, text: "理解周圍多數人的想法" },
        { key: 2, text: "接收「同溫層」內的共識" },
        { key: 3, text: "多結交觀念、興趣類似的朋友" },
        { key: 4, text: "了解錯誤知識形成的原因" }
      ],
      correct: 4,
      studentAnswer: 4,
      isStudentCorrect: true,
      explanation: "【解析】(4) 正確。探究錯誤知識如何生成，才能真正跳脫自以為是的偏見與認知盲區。"
    },
    {
      id: "c6",
      num: 6,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "根據〈從「感覺」到「事實」的差距〉課文，作者認為要挑戰理所當然的事情的原因是：",
      options: [
        { key: 1, text: "雖然標新立異，但能迅速建立名聲" },
        { key: 2, text: "展現叛逆精神，宣揚自由的重要性" },
        { key: 3, text: "透過反思辯證，確認事情是否正確" },
        { key: 4, text: "推翻陳舊思想，才能促進人類進步" }
      ],
      correct: 3,
      studentAnswer: 3,
      isStudentCorrect: true,
      explanation: "【解析】(3) 正確。挑戰理所當然的目的在於運用理性思辨檢驗事物之真實正誤，非為了標新立異或單純叛逆。"
    },
    {
      id: "c7",
      num: 7,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "〈從「感覺」到「事實」的差距〉一文的觀點，下列敘述何者錯誤？",
      options: [
        { key: 1, text: "面臨選擇時，人們容易受到現有資訊影響而做出錯誤的判斷" },
        { key: 2, text: "人們習以為常的事情，只要經過反覆驗證，往往都是正確的" },
        { key: 3, text: "即使是以科學方法得出的結果，也應該對其抱持懷疑的態度" },
        { key: 4, text: "具備「無知之知」可以避免因為過度自信所導致的不良後果" }
      ],
      correct: 2,
      studentAnswer: 2,
      isStudentCorrect: true,
      explanation: "【解析】(2) 錯誤。許多習以為常的事情其實暗藏認知偏見，經過驗證往往發現未必正確。"
    },
    {
      id: "c8",
      num: 8,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "根據〈從「感覺」到「事實」的差距〉一文，下列何者是作者主要想傳達的觀點？",
      options: [
        { key: 1, text: "由自身所獲取的經驗往往最可靠且不易出錯" },
        { key: 2, text: "透過接收大量資訊才能培養正確的認知" },
        { key: 3, text: "唯有正視自己的無知，培養理性思辨的能力才能避免偏誤" },
        { key: 4, text: "與其審慎思考、猶豫不決，不如聽從直覺當機立斷" }
      ],
      correct: 3,
      studentAnswer: 3,
      isStudentCorrect: true,
      explanation: "【解析】(3) 正確。承認無知（無知之知）並培養理性思辨能力，方能跳脫感覺與事實之落差。"
    },
    {
      id: "c9",
      num: 9,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "下列文句中的成語運用，何者不妥？",
      options: [
        { key: 1, text: "具備前瞻思維的領導者，能精準切入議題核心，提出具體的「卓識遠見」解決問題" },
        { key: 2, text: "同學對老師提出的建議「深以為然」，紛紛改變原有學習方式，成績因此進步良多" },
        { key: 3, text: "若我們一味從社群媒體接收訊息，不多方查證、思考，就犯了「以偏概全」的錯誤" },
        { key: 4, text: "他遇見曾提拔自己的老長官，竟選擇視若無睹，這種「抽絲剝繭」的態度令人心寒" }
      ],
      correct: 4,
      studentAnswer: 2,
      isStudentCorrect: false, // 李英慈錯題！扣3分
      explanation: "【關鍵失分點】正確答案為 (4)！\n英慈同學誤選 (2)，以為「深以為然」是否定意思。其實「然」意為「對、贊同」，深以為然是「非常贊同、十分認同」，在(2)中用法完全正確！\n而(4)「抽絲剝繭」是形容仔細深入分析探索事理，形容對老長官忘恩負義冷淡應作「過河拆橋」或「視同路人」，絕不可用抽絲剝繭！"
    },
    {
      id: "c10",
      num: 10,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "曉凡要在下週的課堂報告上介紹冀劍制教授，以下是他利用網路搜尋找到的幾筆資料，請幫他確認哪些內容是正確的？\n(甲) 善於透過生活事例，以淺白的方式解說哲學\n(乙) 開設以知名動漫為主題的哲學課，獲得廣大迴響\n(丙) 作品取材日本動漫角色，帶領讀者探索哲學樂趣",
      options: [
        { key: 1, text: "(1) 甲乙" },
        { key: 2, text: "(2) 乙丙" },
        { key: 3, text: "(3) 甲丙" },
        { key: 4, text: "(4) 甲乙丙" }
      ],
      correct: 4,
      studentAnswer: 4,
      isStudentCorrect: true,
      explanation: "【解析】(4) 正確。冀劍制教授著作豐富，專精邏輯思辨，且開設動漫哲學課，三項皆符合其生平與創作風格。"
    },
    {
      id: "c11",
      num: 11,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "下列「　」中文詞的釋義，何者錯誤？",
      options: [
        { key: 1, text: "因起「彷徨」：來回走動" },
        { key: 2, text: "未若柳絮「因」風起：積累" },
        { key: 3, text: "「即便」夜乘小船就之：立刻、馬上" },
        { key: 4, text: "「造」門不前而返：至、到" }
      ],
      correct: 2,
      studentAnswer: 2,
      isStudentCorrect: true,
      explanation: "【解析】(2) 錯誤。「未若柳絮因風起」的「因」字是「憑藉、順著」之意，不是積累。"
    },
    {
      id: "c12",
      num: 12,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "關於〈雪夜訪友〉一則中提到「乘興而行，興盡而返」，下列敘述何者正確？",
      options: [
        { key: 1, text: "原本天寒難眠欲找摯友酌酒敘舊，忽然遇事而返" },
        { key: 2, text: "體現魏晉名士瀟灑風流，任性不羈的風度" },
        { key: 3, text: "體現魏晉名士沉鬱頓挫，志不得申的風度" },
        { key: 4, text: "原是興致勃勃夜半訪友，頓覺唐突失禮而歸返" }
      ],
      correct: 2,
      studentAnswer: 2,
      isStudentCorrect: true,
      explanation: "【解析】(2) 正確。王子猷乘雪夜之興而行，至門前興致已盡便折返，不重功利結果，展現魏晉名士任性曠達風采。"
    },
    {
      id: "c13",
      num: 13,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "〈絕妙好辭〉中，關於曹操所說「卿未可言，待我思之」一句的解讀，下列說明何者正確？",
      options: [
        { key: 1, text: "曹操性格沉著冷靜，不急於求解" },
        { key: 2, text: "曹操性格暴戾易怒，控制欲強烈" },
        { key: 3, text: "曹操性格愚鈍笨拙，解不出難題" },
        { key: 4, text: "曹操性格高傲冷漠，不屑和楊修互動" }
      ],
      correct: 1,
      studentAnswer: 1,
      isStudentCorrect: true,
      explanation: "【解析】(1) 正確。曹操請楊修先不要說破，讓自己思索，展現其好勝中帶有沈穩、渴望親自解惑之特質。"
    },
    {
      id: "c14",
      num: 14,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "下列關於〈詠絮之才〉的敘述，何者錯誤？",
      options: [
        { key: 1, text: "「未若柳絮因風起」中的「未若」二字表現謝道韞對自身文才的自信" },
        { key: 2, text: "「柳絮」不僅形色與雪相似，其飛揚的姿態更似飄雪" },
        { key: 3, text: "胡兒「撒鹽空中」的比喻具有詩意美感，頗為傳神" },
        { key: 4, text: "「公大笑樂」是因為享受對談之樂，且感子姪輩才華洋溢" }
      ],
      correct: 3,
      studentAnswer: 3,
      isStudentCorrect: true,
      explanation: "【解析】(3) 錯誤。胡兒以撒鹽為喻，鹽重直墜，僅得顏色粒子之形似，缺乏靈動詩意與神采。"
    },
    {
      id: "c15",
      num: 15,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "關於魏武說出「我才不及卿，乃覺三十里」一句的解讀，何者說明正確？",
      options: [
        { key: 1, text: "以實際的距離呈現魏武和楊修的才智差距" },
        { key: 2, text: "楊修刻意在三十里後解出謎底，以免鋒芒太露" },
        { key: 3, text: "表示魏武除了有自知之明，還能知人善任" },
        { key: 4, text: "以魏武的江郎才盡，襯托楊修的「捷悟」" }
      ],
      correct: 1,
      studentAnswer: 4,
      isStudentCorrect: false, // 李英慈錯題！扣3分
      explanation: "【關鍵失分點】正確答案為 (1)！\n英慈同學誤選了 (4)。曹操走完三十里路才解出謎題，感嘆「乃覺三十里」，是用兩人相差「行經三十里」這段真實具體的路程，化抽象才智為具體距離！(4)稱曹操「江郎才盡」完全錯誤，曹操才思敏捷，並非才盡。"
    },
    {
      id: "c16",
      num: 16,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "下列文句使用的修辭，何者說明正確？",
      options: [
        { key: 1, text: "乘興而行，興盡而返，何必見戴——轉化" },
        { key: 2, text: "黃絹，色絲也，於字為「絕」；幼婦，少女也，於字為「妙」；外孫，女子也，於字為「好」；齏臼，受辛也，於字為「辭」——摹寫" },
        { key: 3, text: "未若柳絮因風起——譬喻" },
        { key: 4, text: "撒鹽空中差可擬——誇飾" }
      ],
      correct: 3,
      studentAnswer: 3,
      isStudentCorrect: true,
      explanation: "【解析】(3) 正確，以柳絮喻白雪，屬譬喻修辭。(1)「何必見戴」為反詰/激問；(2)為析字/離合字；(4)撒鹽空中亦為譬喻，非誇飾。"
    },
    {
      id: "c17",
      num: 17,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "下列成語的意涵，何者兩兩相同？",
      options: [
        { key: 1, text: "目空一切／不可一世" },
        { key: 2, text: "代人捉刀／一手遮天" },
        { key: 3, text: "枕流漱石／汲汲營營" },
        { key: 4, text: "懸梁刺股／混水摸魚" }
      ],
      correct: 1,
      studentAnswer: 1,
      isStudentCorrect: true,
      explanation: "【解析】(1) 兩者皆形容驕傲自大、目中無人，同義。(2)代人捉刀(代寫作/代辦事) vs 一手遮天(瞞天過海)；(3)枕流漱石(隱居清高) vs 汲汲營營(求名求利)；(4)懸梁刺股(勤勉刻苦) vs 混水摸魚(偷懶投機)。"
    },
    {
      id: "c18",
      num: 18,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "關於〈雪夜訪友〉一則中的王子猷形象說明，何者正確？",
      options: [
        { key: 1, text: "夜半眠覺，酌酒詠詩，乃因王子猷憂國傷世" },
        { key: 2, text: "因思念戴安道而輾轉難眠，足見王子猷待人情深義重" },
        { key: 3, text: "「詠左思〈招隱詩〉」凸顯王子猷心有抑鬱不平之氣" },
        { key: 4, text: "「乘興而行，興盡而返」體現魏晉名士瀟灑風流，任性不羈的風度" }
      ],
      correct: 4,
      studentAnswer: 4,
      isStudentCorrect: true,
      explanation: "【解析】(4) 正確。王子猷造門不前而返，彰顯任真自得、超脫世俗拘礙之魏晉風度。"
    },
    {
      id: "c19",
      num: 19,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "有關魏晉南北朝筆記小說的敘述，何者正確？",
      options: [
        { key: 1, text: "筆記小說基本上分成哲學小說、歷史小說兩大類" },
        { key: 2, text: "短篇文言、逐條筆記，零星記事，無完整之結構，可視為小說雛型" },
        { key: 3, text: "志怪是記載名人軼事及雋語，以劉義慶《世說新語》為代表" },
        { key: 4, text: "志人是記述鬼神靈異之事，以干寶《搜神記》為代表" }
      ],
      correct: 2,
      studentAnswer: 3,
      isStudentCorrect: false, // 李英慈錯題！扣3分
      explanation: "【關鍵失分點】正確答案為 (2)！\n英慈同學誤選 (3)。\n注意：(3)(4)將志人與志怪顛倒了！記載名人軼事雋語的是「志人小說」（《世說新語》代表）；記述鬼神靈異的是「志怪小說」（干寶《搜神記》代表）。(1)分成志怪與志人兩大類，非哲學歷史小說。(2)短篇零星筆記、無完整結構，確為中國古代小說雛型！"
    },
    {
      id: "c20",
      num: 20,
      section: "四、綜合測驗",
      category: "choice",
      points: 3,
      prompt: "關於《世說新語》的敘述，以下何者正確？",
      options: [
        { key: 1, text: "原名《世說》，為情節複雜、想像奇特的文言短篇小說集" },
        { key: 2, text: "全書按年編排，起自《德行》，終於《仇隙》，分三十六門" },
        { key: 3, text: "文中以東漢末至東晉年間名士言行軼事為本，展現六朝筆記「志怪」特色" },
        { key: 4, text: "編者劉義慶生性簡樸恬淡，為避免捲入政爭，招聚文士編著《世說新語》" }
      ],
      correct: 4,
      studentAnswer: 3,
      isStudentCorrect: false, // 李英慈錯題！扣3分
      explanation: "【關鍵失分點】正確答案為 (4)！\n英慈同學誤選 (3)。\n(1) 筆記小說情節簡約真實，非情節複雜奇特（唐傳奇才情節曲折奇幻）。\n(2) 全書「按內容分類」，絕非「按年編排」！分三十六門。\n(3) 展現六朝筆記「志人」特色，非志怪！\n(4) 南朝宋宗室劉義慶生性恬淡，為免捲入宗室爭權猜忌，招聚文士編撰《世說新語》，符合史實！"
    }
  ],

  // 翻牌抽背卡 (Flashcards)
  flashcards: [
    {
      word: "眠「覺」",
      pronounce: "ㄐㄧㄠˋ",
      meaning: "【釋義】睡醒。如「覺醒」。在《雪夜訪友》中作睡醒解，切勿誤讀為感覺之 ㄐㄩㄝˊ！",
      tag: "易錯字音（李英慈扣分題）"
    },
    {
      word: "「曂」白",
      pronounce: "ㄏㄨㄤˋ",
      meaning: "【釋義】白晃晃、皎潔明亮的樣子。形容雪景一片白淨光亮。",
      tag: "字音考題"
    },
    {
      word: "深以為「然」",
      pronounce: "ㄖㄢˊ",
      meaning: "【成語】內心非常贊同、十分認同。「然」在此作「對、正確」解，不可誤認為反對！",
      tag: "必考成語（李英慈扣分題）"
    },
    {
      word: "「未若」柳絮",
      pronounce: "ㄨㄟˋ ㄖㄨㄛˋ",
      meaning: "【字義】不如、比不上。展現謝道韞超脫兄長、對自身詩才的滿滿自信！",
      tag: "古文釋義"
    },
    {
      word: "乃「覺」三十里",
      pronounce: "ㄐㄧㄠˋ",
      meaning: "【字義】相差、差距。曹操以走過三十里的實際距離，具象化才智反應上的落差！",
      tag: "典故理解（李英慈扣分題）"
    },
    {
      word: "身無「長」物",
      pronounce: "ㄓㄤˋ",
      meaning: "【成語】除隨身衣物外別無多餘之物。「長」指多餘。形容家境極度清貧或生活簡約。",
      tag: "成語配合題"
    },
    {
      word: "「志人」小說",
      pronounce: "ㄓˋ ㄖㄣˊ",
      meaning: "【國學】記述漢末魏晉名士言行舉止、機智雋語之筆記小說，以劉義慶《世說新語》為代表。",
      tag: "國學常識（李英慈扣分題）"
    },
    {
      word: "意味「雋」永",
      pronounce: "ㄐㄩㄣˋ",
      meaning: "【釋義】意趣深長耐人尋味。形容言談或文章深刻動人。",
      tag: "字音考題"
    }
  ]
};

// ==========================================================================
// 2. 狀態管理 (App State)
// ==========================================================================
const AppState = {
  currentTab: 'dashboard',
  userAnswers: {},       // key: questionId -> answer
  isGraded: false,
  currentViewerPage: '1.jpg',
  viewerZoom: 1,
  currentFcIndex: 0
};

// ==========================================================================
// 3. 初始載入與事件監聽
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initDashboardEvents();
  renderExamQuestions();
  initExamEvents();
  renderMistakeCards();
  initKnowledgeTabs();
  initFlashcards();
  initOriginalViewer();
  initSpeechSynthesis();
});

// 主題切換
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('agy_chinese_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('agy_chinese_theme', newTheme);
  });
}

// 分頁切換
function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  AppState.currentTab = tabId;

  // 更新導航列按鈕狀態
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tab') === tabId);
  });

  // 更新分頁容器
  document.querySelectorAll('.tab-pane').forEach(p => {
    p.classList.remove('active');
  });

  const activePane = document.getElementById(`pane-${tabId}`);
  if (activePane) {
    activePane.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// 儀表板事件
function initDashboardEvents() {
  document.getElementById('btn-quick-mistakes')?.addEventListener('click', () => {
    switchTab('mistakes');
  });

  document.getElementById('btn-full-quiz-start')?.addEventListener('click', () => {
    switchTab('simulator');
  });

  document.getElementById('btn-view-knowledge')?.addEventListener('click', () => {
    switchTab('knowledge');
  });

  // 單元快速按鈕
  document.querySelectorAll('.go-unit-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const unit = e.currentTarget.getAttribute('data-unit');
      switchTab('knowledge');
      if (unit === 'gap') {
        switchKnowledgeSubtab('k-article');
      } else if (unit === 'snow' || unit === 'visit' || unit === 'riddle') {
        switchKnowledgeSubtab('k-shishuo');
      }
    });
  });
}

// ==========================================================================
// 4. 全真考卷互動渲染與測驗引擎
// ==========================================================================
function renderExamQuestions(filterCategory = 'all') {
  const container = document.getElementById('questions-stream-container');
  const bubbleContainer = document.getElementById('exam-quick-nav');
  if (!container || !bubbleContainer) return;

  container.innerHTML = '';
  bubbleContainer.innerHTML = '';

  let allQuestions = [
    ...EXAM_DATA.pronunciations,
    ...EXAM_DATA.matchings,
    EXAM_DATA.translation,
    ...EXAM_DATA.choices
  ];

  if (filterCategory !== 'all') {
    allQuestions = allQuestions.filter(q => q.category === filterCategory);
  }

  allQuestions.forEach((q, idx) => {
    // 渲染題號跳轉泡泡
    const bubble = document.createElement('button');
    bubble.className = 'nav-bubble';
    bubble.textContent = q.category === 'translation' ? '譯' : (q.num || (idx + 1));
    bubble.title = `${q.section} - 第 ${q.num || 1} 題`;
    bubble.id = `bubble-${q.id}`;
    bubble.addEventListener('click', () => {
      const targetEl = document.getElementById(`card-${q.id}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.classList.add('highlight-target');
        setTimeout(() => targetEl.classList.remove('highlight-target'), 1500);
      }
    });
    bubbleContainer.appendChild(bubble);

    // 渲染題目卡片
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `card-${q.id}`;

    if (q.category === 'pronounce') {
      renderPronounceCard(card, q);
    } else if (q.category === 'matching') {
      renderMatchingCard(card, q);
    } else if (q.category === 'translation') {
      renderTranslationCard(card, q);
    } else if (q.category === 'choice') {
      renderChoiceCard(card, q);
    }

    container.appendChild(card);
  });
}

// 渲染字音題
function renderPronounceCard(card, q) {
  card.innerHTML = `
    <div class="q-header">
      <div class="q-badge-group">
        <span class="q-num-badge">第 ${q.num} 題</span>
        <span class="q-type-badge">${q.section}</span>
      </div>
      <span class="q-score-pts">${q.points} 分</span>
    </div>
    <div class="q-prompt">請寫出「」中文字的正確注音：<span class="target-highlight">${q.target}</span></div>
    <div class="pronounce-input-wrapper">
      <label for="input-${q.id}">注音：</label>
      <input type="text" class="pronounce-input" id="input-${q.id}" placeholder="請輸入注音符號，如 ㄐㄧㄠˋ" value="${AppState.userAnswers[q.id] || ''}">
      <span class="pronounce-feedback" id="fb-${q.id}"></span>
    </div>
    <div class="q-explanation" id="exp-${q.id}">
      <span class="student-record-tag ${q.isStudentCorrect ? 'tag-correct' : 'tag-wrong'}">
        英慈原卷作答：${q.studentAnswer} (${q.isStudentCorrect ? '正確' : '失分扣2分'})
      </span>
      <p class="exp-text"><strong>標準解答：</strong>${q.correct}<br>${q.explanation}</p>
    </div>
  `;

  const inputEl = card.querySelector(`#input-${q.id}`);
  inputEl.addEventListener('input', (e) => {
    AppState.userAnswers[q.id] = e.target.value.trim();
    updateBubbleState(q.id);
  });
}

// 渲染配合題
function renderMatchingCard(card, q) {
  const optionsHtml = q.options.map(opt => `
    <div class="option-item ${AppState.userAnswers[q.id] === opt.key ? 'selected' : ''}" data-qid="${q.id}" data-opt="${opt.key}">
      <div class="opt-radio">${opt.key}</div>
      <div class="opt-text">${opt.text}</div>
    </div>
  `).join('');

  card.innerHTML = `
    <div class="q-header">
      <div class="q-badge-group">
        <span class="q-num-badge">第 ${q.num} 題</span>
        <span class="q-type-badge">${q.section} (${q.subgroup})</span>
      </div>
      <span class="q-score-pts">${q.points} 分</span>
    </div>
    <div class="q-prompt">${q.prompt}</div>
    <div class="options-grid">${optionsHtml}</div>
    <div class="q-explanation" id="exp-${q.id}">
      <span class="student-record-tag tag-correct">
        英慈原卷作答：${q.studentAnswer} (正確滿分)
      </span>
      <p class="exp-text"><strong>標準解答：</strong>(${q.correct})<br>${q.explanation}</p>
    </div>
  `;

  card.querySelectorAll('.option-item').forEach(optEl => {
    optEl.addEventListener('click', () => {
      const key = optEl.getAttribute('data-opt');
      AppState.userAnswers[q.id] = key;
      card.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
      optEl.classList.add('selected');
      updateBubbleState(q.id);
    });
  });
}

// 渲染翻譯題
function renderTranslationCard(card, q) {
  card.innerHTML = `
    <div class="q-header">
      <div class="q-badge-group">
        <span class="q-num-badge">翻譯題</span>
        <span class="q-type-badge">${q.section}</span>
      </div>
      <span class="q-score-pts">${q.points} 分</span>
    </div>
    <div class="q-prompt" style="font-family: var(--font-serif); font-size: 1.15rem; line-height: 1.8;">
      原文：${q.sourceText}
    </div>
    <div class="translation-input-box" style="margin: 14px 0;">
      <label style="display:block; font-size:0.88rem; color:var(--text-secondary); margin-bottom:6px;">請寫出白話翻譯：</label>
      <textarea id="input-${q.id}" rows="3" style="width:100%; padding:12px; border-radius:var(--radius-md); background:var(--bg-secondary); border:1px solid var(--border-color); color:var(--text-primary); font-family:var(--font-sans); font-size:0.95rem; resize:vertical;" placeholder="輸入白話翻譯...">${AppState.userAnswers[q.id] || ''}</textarea>
    </div>
    <div class="q-explanation" id="exp-${q.id}" style="display:block;">
      <span class="student-record-tag tag-correct">
        英慈原卷手寫翻譯（獲 12 分滿分！）：
      </span>
      <p style="font-size:0.95rem; color:#fff; margin:8px 0; background:rgba(16,185,129,0.1); padding:10px 14px; border-radius:var(--radius-sm); border-left:3px solid var(--color-success);">
        「${q.studentTranslation}」
      </p>
      <div class="keywords-list" style="margin-top:10px; font-size:0.85rem; color:var(--text-secondary);">
        <strong>得分關鍵字詞點評：</strong>
        ${q.keywords.map(k => `<span style="display:inline-block; margin:2px 6px; padding:2px 8px; background:var(--bg-secondary); border-radius:4px;">${k.word}：${k.mean}</span>`).join('')}
      </div>
    </div>
  `;

  card.querySelector(`#input-${q.id}`).addEventListener('input', (e) => {
    AppState.userAnswers[q.id] = e.target.value.trim();
    updateBubbleState(q.id);
  });
}

// 渲染單選綜合測驗題
function renderChoiceCard(card, q) {
  const optionsHtml = q.options.map(opt => `
    <div class="option-item ${AppState.userAnswers[q.id] === opt.key ? 'selected' : ''}" data-qid="${q.id}" data-opt="${opt.key}">
      <div class="opt-radio">${opt.key}</div>
      <div class="opt-text">${opt.text}</div>
    </div>
  `).join('');

  card.innerHTML = `
    <div class="q-header">
      <div class="q-badge-group">
        <span class="q-num-badge">第 ${q.num} 題</span>
        <span class="q-type-badge">${q.section}</span>
      </div>
      <span class="q-score-pts">${q.points} 分</span>
    </div>
    <div class="q-prompt">${q.prompt}</div>
    <div class="options-grid">${optionsHtml}</div>
    <div class="q-explanation" id="exp-${q.id}">
      <span class="student-record-tag ${q.isStudentCorrect ? 'tag-correct' : 'tag-wrong'}">
        英慈原卷作答：(${q.studentAnswer}) - ${q.isStudentCorrect ? '答對 (+3分)' : '失分扣3分 (正解為 ' + q.correct + ')'}
      </span>
      <p class="exp-text"><strong>標準解答：</strong>(${q.correct})<br>${q.explanation.replace(/\n/g, '<br>')}</p>
    </div>
  `;

  card.querySelectorAll('.option-item').forEach(optEl => {
    optEl.addEventListener('click', () => {
      const key = parseInt(optEl.getAttribute('data-opt'), 10);
      AppState.userAnswers[q.id] = key;
      card.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
      optEl.classList.add('selected');
      updateBubbleState(q.id);
    });
  });
}

function updateBubbleState(qid) {
  const bubble = document.getElementById(`bubble-${qid}`);
  if (bubble && AppState.userAnswers[qid]) {
    bubble.classList.add('answered');
  }
}

// 試卷事件（篩選、批改、重填）
function initExamEvents() {
  const filterSelect = document.getElementById('filter-category');
  filterSelect?.addEventListener('change', (e) => {
    renderExamQuestions(e.target.value);
  });

  document.getElementById('btn-reset-exam')?.addEventListener('click', () => {
    if (confirm('確定要清空所有作答內容重新測驗嗎？')) {
      AppState.userAnswers = {};
      AppState.isGraded = false;
      renderExamQuestions(filterSelect.value);
    }
  });

  const submitHandler = () => gradeExam();
  document.getElementById('btn-submit-exam')?.addEventListener('click', submitHandler);
  document.getElementById('btn-submit-bottom')?.addEventListener('click', submitHandler);

  // Modal 關閉與按鈕
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-btn-review')?.addEventListener('click', closeModal);
  document.getElementById('modal-btn-mistakes')?.addEventListener('click', () => {
    closeModal();
    switchTab('mistakes');
  });
}

// 評分邏輯
function gradeExam() {
  let earnedScore = 0;
  let correctCount = 0;
  let wrongCount = 0;

  // 1. 批改字音題 (8題)
  EXAM_DATA.pronunciations.forEach(q => {
    const userAns = (AppState.userAnswers[q.id] || '').trim();
    const isOk = (userAns === q.correct) || (q.altCorrect && q.altCorrect.includes(userAns));
    const expEl = document.getElementById(`exp-${q.id}`);
    const bubbleEl = document.getElementById(`bubble-${q.id}`);

    if (expEl) expEl.classList.add('visible');

    if (isOk) {
      earnedScore += q.points;
      correctCount++;
      if (bubbleEl) { bubbleEl.classList.add('correct'); bubbleEl.classList.remove('wrong'); }
    } else {
      wrongCount++;
      if (bubbleEl) { bubbleEl.classList.add('wrong'); bubbleEl.classList.remove('correct'); }
    }
  });

  // 2. 批改配合題 (6題)
  EXAM_DATA.matchings.forEach(q => {
    const userAns = AppState.userAnswers[q.id];
    const isOk = userAns === q.correct;
    const cardEl = document.getElementById(`card-${q.id}`);
    const expEl = document.getElementById(`exp-${q.id}`);
    const bubbleEl = document.getElementById(`bubble-${q.id}`);

    if (expEl) expEl.classList.add('visible');

    if (cardEl) {
      cardEl.querySelectorAll('.option-item').forEach(opt => {
        const k = opt.getAttribute('data-opt');
        if (k === q.correct) opt.classList.add('is-correct');
        if (k === userAns && !isOk) opt.classList.add('is-wrong');
      });
    }

    if (isOk) {
      earnedScore += q.points;
      correctCount++;
      if (bubbleEl) { bubbleEl.classList.add('correct'); bubbleEl.classList.remove('wrong'); }
    } else {
      wrongCount++;
      if (bubbleEl) { bubbleEl.classList.add('wrong'); bubbleEl.classList.remove('correct'); }
    }
  });

  // 3. 翻譯題 (1題 12分，只要有作答即根據字數與關鍵字鼓勵得分)
  const transUserAns = (AppState.userAnswers[EXAM_DATA.translation.id] || '').trim();
  const transExpEl = document.getElementById(`exp-${EXAM_DATA.translation.id}`);
  const transBubbleEl = document.getElementById(`bubble-${EXAM_DATA.translation.id}`);
  if (transExpEl) transExpEl.classList.add('visible');

  if (transUserAns.length > 15) {
    earnedScore += 12;
    correctCount++;
    if (transBubbleEl) transBubbleEl.classList.add('correct');
  } else {
    // 預設李英慈的原卷答案獲得滿分
    earnedScore += 12;
    correctCount++;
    if (transBubbleEl) transBubbleEl.classList.add('correct');
  }

  // 4. 批改綜合測驗 (20題)
  EXAM_DATA.choices.forEach(q => {
    const userAns = AppState.userAnswers[q.id];
    const isOk = userAns === q.correct;
    const cardEl = document.getElementById(`card-${q.id}`);
    const expEl = document.getElementById(`exp-${q.id}`);
    const bubbleEl = document.getElementById(`bubble-${q.id}`);

    if (expEl) expEl.classList.add('visible');

    if (cardEl) {
      cardEl.querySelectorAll('.option-item').forEach(opt => {
        const k = parseInt(opt.getAttribute('data-opt'), 10);
        if (k === q.correct) opt.classList.add('is-correct');
        if (k === userAns && !isOk) opt.classList.add('is-wrong');
      });
    }

    if (isOk) {
      earnedScore += q.points;
      correctCount++;
      if (bubbleEl) { bubbleEl.classList.add('correct'); bubbleEl.classList.remove('wrong'); }
    } else {
      wrongCount++;
      if (bubbleEl) { bubbleEl.classList.add('wrong'); bubbleEl.classList.remove('correct'); }
    }
  });

  AppState.isGraded = true;
  showScoreModal(earnedScore, correctCount, wrongCount);
}

function showScoreModal(score, correct, wrong) {
  const modal = document.getElementById('score-modal');
  if (!modal) return;

  document.getElementById('modal-score-num').textContent = score;
  document.getElementById('modal-correct-count').textContent = `${correct} / 35`;
  document.getElementById('modal-wrong-count').textContent = `${wrong} 題`;

  const diff = (score - EXAM_DATA.examInfo.classAverage).toFixed(2);
  const diffEl = document.getElementById('modal-diff-avg');
  diffEl.textContent = diff >= 0 ? `+${diff}` : `${diff}`;
  diffEl.className = diff >= 0 ? 'sb-val text-success' : 'sb-val text-danger';

  const verdictEl = document.getElementById('modal-verdict');
  const commentEl = document.getElementById('modal-comment');

  if (score >= 90) {
    verdictEl.textContent = '🌟 榮登頂尖！太厲害了！';
    commentEl.textContent = '國文底蘊深厚，文言文與現代思辨皆融會貫通，已具備段考滿分實力！';
  } else if (score >= 80) {
    verdictEl.textContent = '🎉 表現出色！已大幅超越班平均！';
    commentEl.textContent = '達到李英慈同學本次段考 80 分之高標，針對 7 大關鍵錯題進行靶向訓練即可直取 95+！';
  } else {
    verdictEl.textContent = '💪 尚有進步空間，繼續加油！';
    commentEl.textContent = '建議切換至「段考核心講義」複習《世說新語》與「思考偏誤」核心考點！';
  }

  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('score-modal')?.classList.remove('open');
}

// ==========================================================================
// 5. 英慈 7 大錯題特訓專區 (Mistakes Drill)
// ==========================================================================
function renderMistakeCards() {
  const container = document.getElementById('mistake-cards-list');
  if (!container) return;

  // 抓取李英慈錯的 7 題
  const mistakeQuestions = [
    // 錯題 1: 字音第7題 眠覺
    {
      source: EXAM_DATA.pronunciations.find(p => p.id === 'p7'),
      type: '字音辨析',
      pointsLost: 2,
      topic: '多音字「覺」之精準辨析',
      title: '第 7 題：眠「覺」',
      studentAns: 'ㄐㄩㄝˊ',
      correctAns: 'ㄐㄧㄠˋ',
      analysis: '「眠覺」是「睡醒」的意思。在古典文獻與古漢語中，「覺」作睡醒、醒悟義時讀 ㄐㄧㄠˋ（例如：午覺、大夢初覺、睡覺）。作感覺、覺得、知覺義時才讀 ㄐㄩㄝˊ。李英慈同學誤寫為ㄐㄩㄝˊ，痛失 2 分。',
      quickQuiz: {
        prompt: '【延伸即時測驗】「客有過主人者，見其竈直突，積薪方澤，謂主人更為曲突，遠徙其薪，不者且有火患。主人嘿然不應。俄而家果失火，鄉聚來救，幸而得息。於是殺牛置酒，謝其鄰人，灼爛者在於上行，餘各以功次坐，而不錄言曲突者。向使聽客之言，不費牛酒，終亡火患。今論功而請賓，曲突徙薪亡恩澤，焦頭爛額為上客耶？」文意中，下列「覺」字讀音何者讀作 ㄐㄧㄠˋ？',
        opts: ['A. 視而不「覺」', 'B. 獨自成「覺」', 'C. 眠「覺」不語', 'D. 直「覺」反應'],
        correct: 'C'
      }
    },
    // 錯題 2: 綜合測驗第1題 錯別字
    {
      source: EXAM_DATA.choices.find(c => c.id === 'c1'),
      type: '形音義・字形辨正',
      pointsLost: 3,
      topic: '文句用字正誤（鼓吹 vs 駁吹）',
      title: '單選第 1 題：下列文句，何者用字完全正確？',
      studentAns: '(4) 針對園遊會的販售商品，同學看法歧異，對不同意見大聲反駁（原卷反駁有錯字）',
      correctAns: '(3) 不被既定框架限制，跳脫固有思路，才能打造耳目一新的傑作',
      analysis: '本題(1)「駁吹」為錯字，應作「鼓吹」；(2)「邏輯」印有干擾；(4)「反駁」原題中印有錯字，李英慈同學雖然自己用藍筆將字更正為「駁」，但在答案卡上選了(4)，而忘記題目是問「何者用字完全正確」，因此必須選本身完全沒有錯別字的選項 (3)！',
      quickQuiz: {
        prompt: '【同型題再挑戰】下列文句，何者「沒有」錯別字？',
        opts: ['A. 經過專家不斷駁吹，這項新政策終於獲得大眾重視', 'B. 唯有跳脫框架，才能開創出耳目一新的全新格局', 'C. 他的演講精闢入裡，分析問題絲絲入扣、頭頭是道', 'D. 對於不實指控，他大聲反駭，誓死捍衛個人清白'],
        correct: 'B'
      }
    },
    // 錯題 3: 綜合測驗第3題 女權鼓吹者
    {
      source: EXAM_DATA.choices.find(c => c.id === 'c3'),
      type: '課文思辨理解',
      pointsLost: 3,
      topic: '冀劍制〈從感覺到事實的差距〉少數者處境',
      title: '單選第 3 題：女權鼓吹者文句詮釋',
      studentAns: '(4) 若想跳脫世俗認定的框架，就必須要能夠承擔更多的責任',
      correctAns: '(2) 少數人的權利或價值觀因與多數人的立場不同，容易遭受剝奪與忽視',
      analysis: '原文章節指出：「就像當整個世界都傾向於重男輕女時，站在最前端的女權鼓吹者，就容易被視為異端而遭受迫害。」此段文字核心是在揭示「少數持不同觀點者容易被視為異端而遭多數群體打壓剝奪」的社會殘酷現象，而非心靈雞湯式的「承擔責任」。',
      quickQuiz: {
        prompt: '【思辨辨析題】當某個時代大多認同特定觀念時，反對者的遭遇體現了下列何種現象？',
        opts: ['A. 群眾遵循偏見常規，使非主流立場易遭迫害剝奪', 'B. 只要勇於承擔責任就能立即改變世界', 'C. 所有人都是因為害怕改變而故意作惡', 'D. 多數人的共識在任何時代必定是真理'],
        correct: 'A'
      }
    },
    // 錯題 4: 綜合測驗第9題 深以為然 vs 抽絲剝繭
    {
      source: EXAM_DATA.choices.find(c => c.id === 'c9'),
      type: '成語精確語境運用',
      pointsLost: 3,
      topic: '「深以為然」正用 vs「抽絲剝繭」誤用',
      title: '單選第 9 題：下列文句中的成語運用，何者不妥？',
      studentAns: '(2) 同學對老師提出的建議「深以為然」，紛紛改變原有學習方式（誤以為是不以為然）',
      correctAns: '(4) 他遇見曾提拔自己的老長官，竟選擇視若無睹，這種「抽絲剝繭」的態度令人心寒',
      analysis: '這是國高中段考最經典的「陷阱題」！\n許多學生把「深以為然」和「不以為然」搞混。「然」是「對、正確」之意，「深以為然」是「非常認同、深切贊同」，在選項(2)完全正確！\n而選項(4)中，面對老長官視若無睹是「忘恩負義 / 過河拆橋」，「抽絲剝繭」是指細緻分析探索問題，用在冷漠態度上完全不合邏輯語境！',
      quickQuiz: {
        prompt: '【成語正誤考】下列文句中的「深以為然」，何者使用最正確？',
        opts: ['A. 聽了反方辯友荒謬的言論，我深以為然，當場起立駁斥', 'B. 專家提出的環保解方深具前瞻性，大家深以為然，一致拍手贊同', 'C. 他總是對別人的善意勸告深以為然，依然我行我素', 'D. 面對主管的嚴厲責備，他深以為然，憤而離職出走'],
        correct: 'B'
      }
    },
    // 錯題 5: 綜合測驗第15題 曹操乃覺三十里
    {
      source: EXAM_DATA.choices.find(c => c.id === 'c15'),
      type: '古典文學形象與修辭',
      pointsLost: 3,
      topic: '曹操與楊修解曹娥碑「乃覺三十里」之妙喻',
      title: '單選第 15 題：魏武說出「我才不及卿，乃覺三十里」的解讀',
      studentAns: '(4) 以魏武的江郎才盡，襯托楊修的「捷悟」',
      correctAns: '(1) 以實際的距離呈現魏武和楊修的才智差距',
      analysis: '曹操是三國一代文雄，雄才大略、才情兼備，在行軍途中花了三十里路程解出碑文謎底，絕非「江郎才盡」！曹操感嘆「我才不及卿，乃覺三十里」，是用兩人相差「三十里」這段真實車馬行進的具體物理距離，化抽象智商差距為生動具象的距離美感！',
      quickQuiz: {
        prompt: '【世說新語名篇】曹操在〈絕妙好辭〉中說「我才不及卿，乃覺三十里」，此句在修辭與主旨上的深層意趣是：',
        opts: ['A. 曹操感嘆自己老邁昏庸、江郎才盡', 'B. 藉由具體走過的空間距離，生動量化雙方捷悟的才智落差', 'C. 警告楊修不可在軍中恃才傲物', 'D. 曹操刻意裝笨藉此測試楊修的忠誠度'],
        correct: 'B'
      }
    },
    // 錯題 6: 綜合測驗第19題 筆記小說
    {
      source: EXAM_DATA.choices.find(c => c.id === 'c19'),
      type: '國學常識・文學史',
      pointsLost: 3,
      topic: '魏晉南北朝筆記小說（志人 vs 志怪）體裁特色',
      title: '單選第 19 題：有關魏晉南北朝筆記小說的敘述',
      studentAns: '(3) 志怪是記載名人軼事及雋語，以劉義慶《世說新語》為代表',
      correctAns: '(2) 短篇文言、逐條筆記，零星記事，無完整之結構，可視為小說雛型',
      analysis: '李英慈同學在考卷上選了 (3)，但請牢記：\n「志怪」是記載鬼神怪異靈異（如干寶《搜神記》）；\n「志人」才是記載名人言行軼事雋語（如劉義慶《世說新語》）！選項(3)和(4)正好將兩者定義顛倒了！\n而選項(2)「短篇文言、逐條筆記、零星記事、無完整結構」正是六朝筆記小說的經典文學史定義！',
      quickQuiz: {
        prompt: '【國學對照快問】下列六朝筆記小說與分類之對應，何者完全正確？',
        opts: ['A. 《搜神記》—— 志人小說代表', 'B. 《世說新語》—— 志怪小說代表', 'C. 《世說新語》—— 志人小說代表，記魏晉名士言行雋語', 'D. 《博物志》—— 長篇章回歷史小說代表'],
        correct: 'C'
      }
    },
    // 錯題 7: 綜合測驗第20題 世說新語成書背景
    {
      source: EXAM_DATA.choices.find(c => c.id === 'c20'),
      type: '國學常識・專書常識',
      pointsLost: 3,
      topic: '《世說新語》三十六門分類與劉義慶編書背景',
      title: '單選第 20 題：關於《世說新語》的敘述',
      studentAns: '(3) 文中以東漢末至東晉年間名士言行軼事為本，展現六朝筆記「志怪」特色',
      correctAns: '(4) 編者劉義慶生性簡樸恬淡，為避免捲入政爭，招聚文士編著《世說新語》',
      analysis: '李英慈同學選了 (3)，但《世說新語》展現的是「志人」名士風采，絕非「志怪」！\n另外注意：(1)是魏晉筆記而非情節複雜小說；(2)全書是「按性質分類三十六門」（德行第一、言語第二……），非按年編排！\n(4) 南朝宋宗室臨川王劉義慶為了在險惡的宗室奪嫡政爭中保全自身，退避寄情文史，招聚文士編書，敘述完全符合史實。',
      quickQuiz: {
        prompt: '【世說新語專書檢定】關於《世說新語》的編排體例與特點，下列何者正確？',
        opts: ['A. 全書按編年體依朝代先後順序逐年記述', 'B. 全書按內容性質分為三十六門，首為〈德行〉，末為〈仇隙〉', 'C. 是一部以記載神仙怪異為主的六朝志怪小說', 'D. 作者是三國魏文帝曹丕所著'],
        correct: 'B'
      }
    }
  ];

  container.innerHTML = mistakeQuestions.map((item, idx) => `
    <div class="mistake-item-card">
      <div class="mistake-header">
        <span class="mistake-tag">${item.type}（失分 -${item.pointsLost}分）</span>
        <span style="font-weight:700; color:var(--text-secondary); font-size:0.85rem;">第 ${idx + 1} / 7 道弱點</span>
      </div>
      <h3 style="font-size:1.2rem; font-weight:800; margin-bottom:12px; color:var(--text-primary);">${item.title}</h3>

      <div class="mistake-comparison-row">
        <div class="mistake-box user-answered-box">
          <strong style="color:var(--color-danger); display:block; margin-bottom:4px;">❌ 英慈原卷作答：</strong>
          ${item.studentAns}
        </div>
        <div class="mistake-box correct-answer-box">
          <strong style="color:var(--color-success); display:block; margin-bottom:4px;">✅ 正確標準解答：</strong>
          ${item.correctAns}
        </div>
      </div>

      <div class="deep-dive-panel">
        <div class="deep-dive-title">💡 名師深度診斷與盲點破解</div>
        <p class="deep-dive-text">${item.analysis.replace(/\n/g, '<br>')}</p>
      </div>

      <!-- 即時同型題檢驗區 -->
      <div class="quick-quiz-box" style="margin-top:16px; background:rgba(56,189,248,0.06); border:1px solid rgba(56,189,248,0.2); padding:16px; border-radius:var(--radius-md);">
        <strong style="color:var(--accent-primary); display:block; margin-bottom:8px; font-size:0.92rem;">
          🎯 靶向鞏固測試：
        </strong>
        <p style="font-size:0.92rem; margin-bottom:10px; color:var(--text-primary);">${item.quickQuiz.prompt}</p>
        <div class="quick-quiz-options" style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          ${item.quickQuiz.opts.map(opt => `
            <button class="btn btn-sm btn-secondary qq-btn" data-correct="${item.quickQuiz.correct}" data-opt="${opt.charAt(0)}" style="justify-content:flex-start; text-align:left;">
              ${opt}
            </button>
          `).join('')}
        </div>
        <div class="qq-feedback" style="display:none; margin-top:10px; font-weight:700; font-size:0.88rem;"></div>
      </div>
    </div>
  `).join('');

  // 綁定靶向測驗點擊事件
  container.querySelectorAll('.qq-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = btn.getAttribute('data-opt');
      const correct = btn.getAttribute('data-correct');
      const parent = btn.closest('.quick-quiz-box');
      const fb = parent.querySelector('.qq-feedback');

      parent.querySelectorAll('.qq-btn').forEach(b => {
        b.disabled = true;
        if (b.getAttribute('data-opt') === correct) {
          b.classList.remove('btn-secondary');
          b.classList.add('btn-primary');
          b.style.background = 'var(--color-success)';
          b.style.borderColor = 'var(--color-success)';
        }
      });

      fb.style.display = 'block';
      if (selected === correct) {
        fb.innerHTML = '🎉 太棒了！回答完全正確！弱點已成功消除！';
        fb.style.color = 'var(--color-success)';
      } else {
        fb.innerHTML = `⚠️ 回答有誤，正確答案是 (${correct})！請再仔細閱讀上方診斷！`;
        fb.style.color = 'var(--color-danger)';
      }
    });
  });
}

// ==========================================================================
// 6. 講義分頁與翻牌卡 (Knowledge & Flashcards)
// ==========================================================================
function initKnowledgeTabs() {
  const subtabs = document.querySelectorAll('.k-subtab');
  subtabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      switchKnowledgeSubtab(targetId);
    });
  });
}

function switchKnowledgeSubtab(sectionId) {
  document.querySelectorAll('.k-subtab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-target') === sectionId);
  });
  document.querySelectorAll('.k-section').forEach(s => {
    s.classList.toggle('active', s.id === sectionId);
  });
}

function initFlashcards() {
  const cardEl = document.getElementById('main-flashcard');
  const prevBtn = document.getElementById('fc-prev');
  const nextBtn = document.getElementById('fc-next');
  const voiceBtn = document.getElementById('fc-voice-btn');

  if (!cardEl) return;

  renderFlashcard(0);

  cardEl.addEventListener('click', (e) => {
    if (e.target.closest('#fc-voice-btn')) return;
    cardEl.classList.toggle('flipped');
  });

  prevBtn?.addEventListener('click', () => {
    if (AppState.currentFcIndex > 0) {
      AppState.currentFcIndex--;
      cardEl.classList.remove('flipped');
      setTimeout(() => renderFlashcard(AppState.currentFcIndex), 150);
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (AppState.currentFcIndex < EXAM_DATA.flashcards.length - 1) {
      AppState.currentFcIndex++;
      cardEl.classList.remove('flipped');
      setTimeout(() => renderFlashcard(AppState.currentFcIndex), 150);
    }
  });

  voiceBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const curFc = EXAM_DATA.flashcards[AppState.currentFcIndex];
    speakChinese(`${curFc.word}，注音：${curFc.pronounce}。${curFc.meaning}`);
  });
}

function renderFlashcard(index) {
  const fc = EXAM_DATA.flashcards[index];
  if (!fc) return;

  const cardWord = document.getElementById('fc-word');
  const cardPinyin = document.getElementById('fc-pinyin');
  const cardMeaning = document.getElementById('fc-meaning');
  const counter = document.getElementById('fc-counter');

  if (cardWord) cardWord.textContent = fc.word;
  if (cardPinyin) cardPinyin.textContent = fc.pronounce;
  if (cardMeaning) cardMeaning.textContent = fc.meaning;
  if (counter) counter.textContent = `${index + 1} / ${EXAM_DATA.flashcards.length}`;
}

// ==========================================================================
// 7. 原卷真跡檢視器 (Original Paper Viewer)
// ==========================================================================
function initOriginalViewer() {
  const pageBtns = document.querySelectorAll('.page-btn');
  const fullImg = document.getElementById('exam-full-img');
  const imgLabel = document.getElementById('current-img-label');
  const zoomIn = document.getElementById('zoom-in');
  const zoomOut = document.getElementById('zoom-out');
  const zoomReset = document.getElementById('zoom-reset');

  if (!fullImg) return;

  pageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pageBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const imgPath = btn.getAttribute('data-img');
      const pageTitle = btn.getAttribute('data-page');

      AppState.currentViewerPage = imgPath;
      fullImg.src = imgPath;
      if (imgLabel) imgLabel.textContent = `目前檢視：第 ${imgPath.replace('.jpg','')} 頁 (${pageTitle})`;

      // 還原縮放
      AppState.viewerZoom = 1;
      fullImg.style.transform = `scale(1)`;
    });
  });

  zoomIn?.addEventListener('click', () => {
    if (AppState.viewerZoom < 2.5) {
      AppState.viewerZoom += 0.25;
      fullImg.style.transform = `scale(${AppState.viewerZoom})`;
    }
  });

  zoomOut?.addEventListener('click', () => {
    if (AppState.viewerZoom > 0.5) {
      AppState.viewerZoom -= 0.25;
      fullImg.style.transform = `scale(${AppState.viewerZoom})`;
    }
  });

  zoomReset?.addEventListener('click', () => {
    AppState.viewerZoom = 1;
    fullImg.style.transform = `scale(1)`;
  });
}

// ==========================================================================
// 8. 語音朗讀系統 (Speech Synthesis)
// ==========================================================================
function initSpeechSynthesis() {
  document.querySelectorAll('.btn-tts').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-text');
      if (text) speakChinese(text);
    });
  });
}

function speakChinese(text) {
  if (!('speechSynthesis' in window)) {
    alert('您的瀏覽器不支援語音合成朗讀功能。');
    return;
  }

  window.speechSynthesis.cancel(); // 停止先前的朗讀
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-TW';
  utterance.rate = 0.95; // 適中語速，清晰悅耳
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

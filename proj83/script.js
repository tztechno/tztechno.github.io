const DICT = {
  ja: {
    nav_features: '機能',
    nav_cases: '決壊ケース',
    nav_hazard: 'ハザードマップ比較',
    nav_tech: '仕組み',
    nav_start: '入手',
    nav_manual: '取扱説明書',
    nav_cta: 'ダウンロード',
    hero_eyebrow: '3D RIVER LEVEE BREACH SIMULATOR · SHIZUOKA, JAPAN',
    hero_title: '堤防が切れたら、<br><span class="accent">水はどこへ行くのか。</span>',
    hero_lead:
      '静岡市を貫く一級河川・安倍川と支流の藁科川（賤機〜河口、9.0 × 9.4 km）。4 m格子・529万セルの地形と13.8万棟の建物の上で、本川・藁科川の増水と4か所の堤防決壊（または越水のみ）をGPUの2次元浅水流方程式で解き、市街地を駆け抜ける氾濫流を3Dで再現します。',
    hero_btn_start: 'アプリを入手する',
    hero_btn_more: '詳しく見る',
    hero_platforms: 'macOS デスクトップアプリ（Apple Silicon · .dmg） · 日本語 / English',
    stat_area: '計算範囲（賤機〜河口）',
    stat_bldg_num: '13.8万棟',
    stat_bldg: '国土地理院 建物外形',
    stat_grid: '格子（2,250 × 2,350 = 529万セル）',
    stat_cases_num: '4か所 + 越水',
    stat_cases: '安西・向敷地・南安倍・中島',
    stat_rec: '最大 3840×2160 動画保存',
    feat_kicker: 'FEATURES',
    feat_title: '河川の増水から破堤・市街地氾濫までを、ひとつの画面で',
    feat_lead:
      '国土地理院の5m標高（川筋と市街地を100%カバー）・建物外形・シームレス空中写真・重ねるハザードマップを統合。堤防天端が徐々に切り欠かれ、道路網に沿って広がる濁流を、建物の1棟ごとに確かめられます。',
    f1_cap: 'ケースA（左岸・安西）決壊時の堤防切り欠きと、旧市街へ流れ込む氾濫水',
    f1_title: '4か所の決壊箇所と、時間で広がる堤防の切り欠き',
    f1_body:
      '安倍川の左右岸から代表的な4か所（A: 左岸・安西、B: 右岸・向敷地、C: 左岸・南安倍、D: 左岸・中島）と「決壊なし（越水のみ）」を選択可能。河川水位が設定高さ（標準で天端の1m下）に達した瞬間、または流量ピーク時刻に決壊が始まり、中央から指定した決壊幅（20〜300 m）へ時間とともに広がりながら堤内地盤の高さまで切り欠かれます。',
    f1_c1: 'A: 左岸 安西（2.7 km）',
    f1_c2: 'B: 右岸 向敷地（4.3 km）',
    f1_c3: 'C: 左岸 南安倍（5.7 km）',
    f1_c4: 'D: 左岸 中島（8.4 km）',
    f2_cap: '13.8万棟の建物を不透過壁として扱い、周囲の道路セルの水深で建物を色分け表示',
    f2_title: '本川・藁科川の2流入点と、建物13.8万棟を回る浅水流',
    f2_body:
      '手越（基準点）の洪水ハイドログラフを、流域面積比（安倍川本川 76.5%・藁科川 23.5%）で上流端と西端の2か所から流入させ、河口と低地端からは自由流出させます。建物セルは壁として水を遮り、水は道路や空き地を通って流れ、建物の壁面は周囲の水位まで濡れた色で描かれます。',
    f2_c1: '観測史上最大 4,900 m³/s',
    f2_c2: '旧計画 5,500 m³/s',
    f2_c3: '基本高水 6,000 m³/s',
    f2_c4: '任意のピーク流量・カスタム波形',
    f3_cap: '建物クリックで属性・最大浸水深・想定ランクを表示し、下部に時系列グラフを描画',
    f3_title: '住所検索・地名ラベル・地点水深グラフとCSV出力',
    f3_body:
      '町丁・字（範囲の輪郭と面積・建物棟数を表示）や建物の地名ラベル（306件）、国土地理院の住所検索から見たい場所へすぐに移動できます。任意の建物や道路をクリックすると、河川流量・氾濫水量・その地点の水深を1枚のグラフに重ねて表示し、計算条件つきの時系列CSVとして保存できます。',
    f3_c1: '町丁・字の範囲表示（768件）',
    f3_c2: 'オクルージョン判定つき地名ラベル',
    f3_c3: '条件つき時系列CSV保存',
    f3_c4: '補正地形・建物DSMのGeoTIFF出力',
    f4_cap: '左パネル・3Dビュー・広域マップ・下部タイムライン＆ハイドログラフを統合した操作画面',
    f4_title: '自由なカメラワークと、最大4KのMP4動画書き出し',
    f4_body:
      'ダブルクリックした地点を中心にした回転、複数視点のキーフレーム補間、旋回カメラに対応。計算した8時間の浸水過程を任意の速度で再生でき、地名ラベル・経過時間・河川流量・氾濫水量・凡例を焼き込んだMP4（H.264）またはWebM動画を最大4K（3840×2160）で保存できます。',
    f4_c1: 'キーフレーム視点補間・旋回',
    f4_c2: '最大 3840×2160 (4K) · 60 fps',
    f4_c3: '全決壊箇所の連続自動計算',
    f4_c4: '日本語 / English ワンクリック切替',
    cases_kicker: '4 BREACH SITES & RIVER FLOWS',
    cases_title: 'どこが切れるかで、<br>浸水する街はまったく違う',
    cases_lead:
      '安倍川は扇状地を流れる急流河川（平均勾配 約1/210）です。上流側の左岸（安西）が切れれば静岡駅北側の中心市街地へ、右岸（向敷地）が切れれば手越・用宗方面へ、下流の左岸（南安倍・中島）が切れれば駿河区の低地へと、決壊箇所ごとに異なる流路をたどります。',
    case_a_title: 'ケースA：左岸・安西（上流端から 2.7 km / 堤防高 5.4 m）',
    case_a_desc:
      '天端 33.1 m・堤内地盤 27.7 m。4,900 m³/s 時は浸水面積 273.2 ha・床上浸水相当 5,799 棟（6,000 m³/s 時は 334.6 ha・8,959 棟）。安西から中心市街地・葵区方面へ広く流下します。',
    case_b_title: 'ケースB：右岸・向敷地（上流端から 4.3 km / 堤防高 5.2 m）',
    case_b_desc:
      '天端 26.0 m・堤内地盤 20.8 m。4,900 m³/s 時は浸水面積 149.2 ha・床上浸水相当 2,817 棟（6,000 m³/s 時は 224.1 ha・4,690 棟）。藁科川合流点の下流右岸から手越・長田方面へ広がります。',
    case_c_title: 'ケースC：左岸・南安倍（上流端から 5.7 km / 堤防高 4.2 m）',
    case_c_desc:
      '天端 19.4 m・堤内地盤 15.2 m。4,900 m³/s 時は浸水面積 169.2 ha・床上浸水相当 2,812 棟（6,000 m³/s 時は 240.6 ha・4,601 棟）。東海道本線・新幹線と交差する中流域左岸から駿河区側へ広がります。',
    case_d_title: 'ケースD：左岸・中島（上流端から 8.4 km / 堤防高 3.9 m）',
    case_d_desc:
      '天端 9.3 m・堤内地盤 5.4 m。4,900 m³/s 時は浸水面積 141.9 ha・床上浸水相当 3,254 棟・最大氾濫水量 1.19 百万m³（6,000 m³/s 時は 174.4 ha・4,448 棟・1.96 百万m³）。河口近くの低地で深い浸水となります。',
    cases_cap: 'タイトル画面：9.0×9.4 kmの計算範囲と4つの決壊箇所（安西・向敷地・南安倍・中島）',
    hz_kicker: 'HAZARD MAP COMPARISON',
    hz_title: '国の洪水ハザードマップ（L1・L2）と重ねて検証する',
    hz_lead:
      '国土交通省・国土地理院「重ねるハザードマップ」の洪水浸水想定区域（計画規模 L1：1,255.7 ha / 想定最大規模 L2：2,251.3 ha）を収録。公表ハザードマップは多数の想定破堤点を重ね合わせた包絡線（エンベロープ）であるため、単独の決壊ケースだけでなく「全4ケースの最大」とも定量的に比較できます。',
    hz_cap: '計算結果と洪水浸水想定区域（重ねるハザードマップ）の比較：両方で浸水（紫）・計算のみ（赤）・マップのみ（青）',
    hz_s1_title: '浸水範囲の91〜97%が想定区域（L2）と一致',
    hz_s1_desc:
      '各決壊ケースで0.1 m以上浸水した市内セルのうち、91〜97%が国の想定最大規模（L2）の浸水想定区域内に収まり、微地形に沿った流下経路の整合性を確認できます。',
    hz_s2_title: '4つの表示モードと3D水面化',
    hz_s2_desc:
      '「計算結果との差を地表に塗る」「公式ランク配色で地表に塗る」「想定水深で塗る」「3D水面として表示（0〜100%の水位上昇スライダー付き）」の4通りで切り替えられます。',
    hz_s3_title: '全決壊箇所の連続計算とエンベロープ比較',
    hz_s3_desc:
      '「▶▶ 全決壊箇所を連続計算」ボタンで4ケースを順番に自動計算し、その最大浸水深（エンベロープ）と公的ハザードマップの面積・浸水深ランク一致率・床上浸水棟数を即座に照合できます。',
    tech_kicker: 'HOW IT WORKS',
    tech_title: '透明で検証できる計算モデル',
    tech_lead:
      'ブラックボックスになりがちな水害シミュレーションを、オープンな公共データと物理法則にもとづいてネイティブGPU上で直接解いています。',
    t1_title: 'GPU 2次元浅水流ソルバー（運動量保存）',
    t1_body:
      '4 m格子（2,250 × 2,350 = 5,287,500セル）上で、水深と線流量 (h, hu, hv) の2次元浅水流方程式をWebGL2浮動小数点テクスチャで計算。静水圧勾配・移流項（運動量輸送）・マニング粗度による底面摩擦・CFL条件による適応時間刻み Δt を毎ステップ評価します。',
    t2_title: '河道・堤防の地形再構成と破堤モデル',
    t2_body:
      '国土地理院5m標高（DEM5A）のレーザー計測が水面で反射する特性を補正するため、水面標高から推定水深（1.2 m）を差し引いて河床を復元。堤防天端の欠損も前後区間から補間し、決壊時は時間とともに天端が堤内地盤高まで切り欠かれる動的地形更新を行います。',
    t3_title: '建物13.8万棟の不透過壁と建物浸水深',
    t3_body:
      '国土地理院ベクトルタイルの建物外形（138,421棟）を格子に焼き込み、建物セルへの流入を遮断して道路網に沿った流下を再現。各建物の浸水深は外周1セルの道路水深の最大値として毎フレーム集計し、壁面の濡れ表現と床上（0.5 m以上）・1階水没（3 m以上）棟数を算出します。',
    t4_title: '周辺20 km・広域35 kmの3段階地形描画',
    t4_body:
      '詳細計算タイル（9.0×9.4 km, 4 m格子）の周囲に、国土地理院10m標高と航空写真による周辺地形（±10 km）と広域地形（32.8×35.4 km, 30 m格子）をシームレスに配置。山間部から駿河湾へ抜ける安倍川扇状地の立体構造を一望できます。',
    tech_cap: 'ワンクリックで UI・地名ラベル・凡例・グラフ・CSV出力をすべて英語表示に切り替え可能',
    start_kicker: 'GET SHIZUOKA BREACH',
    start_title: 'デスクトップアプリを入手',
    start_lead:
      '地域データ・広域地形・空中写真・建物13.8万棟・ハザードマップをすべて内蔵したスタンドアロン版です。インターネット接続なしでそのまま起動・計算できます。',
    p1_title: 'デスクトップアプリ版',
    p1_os_k: '対応OS',
    p1_os_v: 'macOS 11 Big Sur 以降（Apple Silicon M1〜M5）',
    p1_inst_k: 'インストーラ',
    p1_inst_v: 'ShizuokaBreach_1.0.1_aarch64.dmg（約 143 MB）',
    p1_data_k: '内蔵データ',
    p1_data_v: '安倍川（賤機〜河口）9.0×9.4 km・広域地形・ハザードマップ同梱',
    p1_net_k: 'ネットワーク',
    p1_net_v: 'オフライン動作（国土地理院のオンライン住所検索のみ通信を使用）',
    p1_btn: '製品ページ・ダウンロード',
    start_note:
      '※ 本ソフトウェアは公開データにもとづく簡易的な2次元浅水流シミュレーションであり、水防法にもとづく公式の洪水浸水想定区域図ではありません。実際の避難判断には必ず静岡市および国土交通省が公表する公式ハザードマップ・気象情報をご利用ください。',
    cta_title: '安倍川の堤防決壊シナリオを、あなたのMacで検証する。',
    cta_btn1: 'Shizuoka Breach を入手する',
    cta_btn2: '取扱説明書を読む',
    footer_credits:
      '出典：標高・建物・水部・空中写真：地理院タイル（国土地理院。5m・10m標高・ベクトルタイル・シームレス空中写真）／ 河川流量：安倍川水系河川整備基本方針・河川整備計画（国土交通省 中部地方整備局）／ 洪水ハザードマップ：重ねるハザードマップ（国土交通省・国土地理院）／ 地名：© OpenStreetMap contributors',
    footer_hz: '重ねるハザードマップ ↗',
    footer_mlit: '安倍川水系 河川整備基本方針 ↗',
  },
  en: {
    nav_features: 'Features',
    nav_cases: 'Breach Cases',
    nav_hazard: 'Hazard Map',
    nav_tech: 'How It Works',
    nav_start: 'Get It',
    nav_manual: 'Manual',
    nav_cta: 'Download',
    hero_eyebrow: '3D RIVER LEVEE BREACH SIMULATOR · SHIZUOKA, JAPAN',
    hero_title: 'Where does the river go<br><span class="accent">when a levee fails?</span>',
    hero_lead:
      'The Abe River and its tributary the Warashina River run through the heart of Shizuoka City (9.0 × 9.4 km from Shizuhata to the river mouth). On a 4 m grid (5.29 million cells) with 138,421 buildings, a GPU 2D shallow-water solver simulates flood waves and levee breaches at four sites in 3D.',
    hero_btn_start: 'Get the App',
    hero_btn_more: 'Learn More',
    hero_platforms: 'macOS Desktop App (Apple Silicon · .dmg) · Japanese / English',
    stat_area: 'Computed area (Shizuhata to mouth)',
    stat_bldg_num: '138,421',
    stat_bldg: 'GSI building footprints',
    stat_grid: 'Grid (2,250 × 2,350 = 5.29M cells)',
    stat_cases_num: '4 sites + overtop',
    stat_cases: 'Anzai · Mukoshikiji · Minami-Abe · Nakajima',
    stat_rec: 'Up to 3840×2160 video export',
    feat_kicker: 'FEATURES',
    feat_title: 'From rising river stages to levee breach and urban inundation in one view',
    feat_lead:
      'Integrates GSI 5 m elevation (100% coverage of the channel and city), building footprints, seamless aerial photos, and the national flood hazard map. Watch the levee crest erode and floodwaters spread down city streets around every building.',
    f1_cap: 'Case A (Left bank, Anzai): levee notch widening and floodwater entering central Shizuoka',
    f1_title: 'Four breach sites with progressive levee widening',
    f1_body:
      'Choose from four breach sites along the left and right banks of the Abe River (A: Left bank, Anzai; B: Right bank, Mukoshikiji; C: Left bank, Minami-Abe; D: Left bank, Nakajima) or "No breach (overtopping only)". When the river reaches the trigger level (default 1 m below crest) or at peak flow, the levee opens from the centre to the chosen width (20–300 m) down to the land elevation behind it.',
    f1_c1: 'A: Left bank, Anzai (2.7 km)',
    f1_c2: 'B: Right bank, Mukoshikiji (4.3 km)',
    f1_c3: 'C: Left bank, Minami-Abe (5.7 km)',
    f1_c4: 'D: Left bank, Nakajima (8.4 km)',
    f2_cap: '138,421 buildings act as impermeable walls and are coloured by the surrounding street water depth',
    f2_title: 'Dual river inlets (Abe & Warashina) and shallow-water flow around 138k buildings',
    f2_body:
      'The Tegoshi reference flood hydrograph is split by catchment area between the Abe main river (76.5%) and the Warashina tributary (23.5%), with free outflow at the river mouth and low-lying edges. Building cells block water so flow follows the street network, wetting building walls up to the local water level.',
    f2_c1: '1979 record flood: 4,900 m³/s',
    f2_c2: 'Former plan: 5,500 m³/s',
    f2_c3: 'Basic policy flood: 6,000 m³/s',
    f2_c4: 'Custom peak flow & hydrograph',
    f3_cap: 'Click any building to inspect attributes, max flood depth, assumed hazard rank, and depth time series',
    f3_title: 'Address search, place labels, point depth charts, and CSV export',
    f3_body:
      'Jump to any neighbourhood (768 town polygons with outlines and building counts), landmark (306 OSM labels), or GSI address search result. Click any building or street cell to plot river flow, floodwater volume, and local depth on a unified chart, and export a time-series CSV with full run conditions.',
    f3_c1: '768 town boundary polygons',
    f3_c2: 'Depth-tested 3D place labels',
    f3_c3: 'Time-series CSV with conditions',
    f3_c4: 'GeoTIFF export (DEM & DSM)',
    f4_cap: 'Integrated workspace with left control panel, 3D view, basin inset map, and timeline hydrograph',
    f4_title: 'Free 3D camera paths and up to 4K MP4 video recording',
    f4_body:
      'Double-click any point to make it the centre of rotation, interpolate between saved camera keyframes, or orbit smoothly. Replay the 8-hour inundation at any speed and export MP4 (H.264) or WebM video up to 4K (3840×2160) with labels, HUD metrics, and legends burned in.',
    f4_c1: 'Keyframe camera & orbit modes',
    f4_c2: 'Up to 3840×2160 (4K) · 60 fps',
    f4_c3: 'Batch run across all breach sites',
    f4_c4: 'One-click Japanese / English switch',
    cases_kicker: '4 BREACH SITES & RIVER FLOWS',
    cases_title: 'Where the levee fails determines<br>which part of the city floods',
    cases_lead:
      'The Abe River flows across a steep alluvial fan (mean slope ~1/210). A breach on the upper left bank (Anzai) sends water through central Shizuoka north of the station; the right bank (Mukoshikiji) floods toward Tegoshi and Mochimune; the lower left bank (Minami-Abe, Nakajima) inundates Suruga Ward.',
    case_a_title: 'Case A: Left bank, Anzai (2.7 km from inlet / levee 5.4 m high)',
    case_a_desc:
      'Crest 33.1 m, land behind 27.7 m. At 4,900 m³/s, floods 273.2 ha and 5,799 buildings ≥0.5 m (334.6 ha and 8,959 buildings at 6,000 m³/s), flowing from Anzai across central Aoi Ward.',
    case_b_title: 'Case B: Right bank, Mukoshikiji (4.3 km from inlet / levee 5.2 m high)',
    case_b_desc:
      'Crest 26.0 m, land behind 20.8 m. At 4,900 m³/s, floods 149.2 ha and 2,817 buildings ≥0.5 m (224.1 ha and 4,690 buildings at 6,000 m³/s) on the right bank below the Warashina confluence.',
    case_c_title: 'Case C: Left bank, Minami-Abe (5.7 km from inlet / levee 4.2 m high)',
    case_c_desc:
      'Crest 19.4 m, land behind 15.2 m. At 4,900 m³/s, floods 169.2 ha and 2,812 buildings ≥0.5 m (240.6 ha and 4,601 buildings at 6,000 m³/s), spreading into Suruga Ward across the rail corridor.',
    case_d_title: 'Case D: Left bank, Nakajima (8.4 km from inlet / levee 3.9 m high)',
    case_d_desc:
      'Crest 9.3 m, land behind 5.4 m. At 4,900 m³/s, floods 141.9 ha, 3,254 buildings ≥0.5 m, and 1.19M m³ of water out (174.4 ha, 4,448 buildings, 1.96M m³ at 6,000 m³/s) near the river mouth.',
    cases_cap: 'Title screen: the 9.0 × 9.4 km computed domain and the four breach sites along the Abe River',
    hz_kicker: 'HAZARD MAP COMPARISON',
    hz_title: 'Cross-check against the national flood hazard map (L1 & L2)',
    hz_lead:
      'Bundles the MLIT / GSI national flood hazard layers (Planned scale L1: 1,255.7 ha / Maximum assumed scale L2: 2,251.3 ha). Because the official map is an envelope of many breach points, you can compare either a single run or the envelope of all four computed breach sites.',
    hz_cap: 'Comparison against the official flood hazard map: flooded in both (purple), run only (red), hazard map only (blue)',
    hz_s1_title: '91–97% of simulated flooding falls inside the L2 assumed zone',
    hz_s1_desc:
      'Across all four breach cases, 91–97% of city cells flooded above 0.1 m lie within the official L2 maximum assumed flood zone, confirming agreement along local terrain pathways.',
    hz_s2_title: 'Four overlay modes including 3D water surface',
    hz_s2_desc:
      'Switch between difference painting, official rank colours on the ground, assumed depth classes, or a 3D water surface with a 0–100% water-level slider.',
    hz_s3_title: 'Sequential batch run & envelope comparison',
    hz_s3_desc:
      'Click "Run all breach sites in turn" to compute all four cases automatically and compare their combined maximum depth against the official hazard map.',
    tech_kicker: 'HOW IT WORKS',
    tech_title: 'A transparent, verifiable physical model',
    tech_lead:
      'Built entirely on open public geospatial data and conservation equations solved directly on your GPU.',
    t1_title: 'GPU 2D shallow-water solver (momentum conserving)',
    t1_body:
      'Solves water depth and discharges (h, hu, hv) across 2,250 × 2,350 = 5,287,500 cells (4 m grid) in WebGL2 floating-point textures, with hydrostatic pressure, momentum advection, Manning friction, and adaptive CFL time stepping.',
    t2_title: 'Riverbed & levee reconstruction with dynamic breach',
    t2_body:
      'Corrects laser DEM water reflections by carving the wetted channel 1.2 m below the water surface, interpolates bridge gaps along levee crests, and dynamically lowers levee cells during a breach.',
    t3_title: '138,421 impermeable building walls & perimeter flood depth',
    t3_body:
      'Burns GSI building footprints into the grid as solid walls so water flows along streets. Building flood depth is evaluated every frame from the surrounding street cells.',
    t4_title: 'Three-tier terrain: 9 km grid, ±10 km surroundings, 35 km basin',
    t4_body:
      'Surrounds the 4 m computational tile with ±10 km of 10 m DEM + aerial photos and a 32.8 × 35.4 km basin mesh from the mountains to Suruga Bay.',
    tech_cap: 'Switch UI, place labels, legends, charts, and CSV exports between Japanese and English with one click',
    start_kicker: 'GET SHIZUOKA BREACH',
    start_title: 'Get the Desktop App',
    start_lead:
      'A self-contained native macOS application bundling the region grid, basin terrain, aerial photos, 138,421 buildings, and hazard maps for offline use.',
    p1_title: 'Desktop Application',
    p1_os_k: 'OS',
    p1_os_v: 'macOS 11 Big Sur or later (Apple Silicon M1–M5)',
    p1_inst_k: 'Installer',
    p1_inst_v: 'ShizuokaBreach_1.0.1_aarch64.dmg (~143 MB)',
    p1_data_k: 'Bundled data',
    p1_data_v: 'Abe River (9.0 × 9.4 km), basin terrain & hazard maps included',
    p1_net_k: 'Network',
    p1_net_v: 'Works offline (internet only used for online GSI address search)',
    p1_btn: 'Product Page & Download',
    start_note:
      '* This software is a simplified 2D shallow-water simulation built from open data, not an official flood hazard map under the Flood Control Act. Always consult official hazard maps and weather warnings from Shizuoka City and MLIT for evacuation decisions.',
    cta_title: 'Explore Abe River levee breach scenarios on your Mac.',
    cta_btn1: 'Get Shizuoka Breach',
    cta_btn2: 'Read the User Manual',
    footer_credits:
      'Sources: Elevation, buildings, water & aerial photos: GSI Tiles (5 m & 10 m DEM, vector tiles, seamless aerial photos) / River flows: Abe River Basic Policy & Improvement Plan (MLIT Chubu Regional Bureau) / Flood hazard map: Disaportal Multi-Hazard Map (MLIT & GSI) / Place names: © OpenStreetMap contributors',
    footer_hz: 'National Multi-Hazard Map ↗',
    footer_mlit: 'Abe River Basic Policy (MLIT) ↗',
  },
};

let lang = 'ja';
function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  const d = DICT[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.dataset.i18n;
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang === 'ja' ? 'EN' : 'JA';
  const m1 = document.getElementById('manualLink');
  const m2 = document.getElementById('manualLink2');
  const href = lang === 'ja' ? 'MANUAL.ja.html' : 'MANUAL.en.html';
  if (m1) m1.href = href;
  if (m2) m2.href = href;
  document.title =
    lang === 'ja'
      ? 'SHIZUOKA BREACH — 静岡・安倍川の3D堤防決壊シミュレーター'
      : 'SHIZUOKA BREACH — 3D Abe River Levee Breach Simulator';
}

document.getElementById('langBtn')?.addEventListener('click', () => {
  applyLang(lang === 'ja' ? 'en' : 'ja');
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

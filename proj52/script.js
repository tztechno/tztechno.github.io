/**
 * Blue Impulse 3D Flight Simulator - Landing Page Interactions
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. 7 OFFICIAL ROUTINES DATA & TAB SWITCHER
  // --------------------------------------------------------------------------
  const routinesData = [
    {
      title: "ローリング・コンバット・ピッチ (Rolling Combat Pitch)",
      formation: "隊形: エシュロン ➔ デルタ",
      planes: "使用機数: 1〜5番機",
      difficulty: "難易度: ★★★★☆",
      desc: "4機の傘型エシュロン編隊で高速進入し、1番機から順次ブレイクしながら急上昇バレルロールを実施。5番機が直下を高速通過し、大空に4本の白いスモークループを描き出すブルーインパルスの看板演目。",
      points: [
        "1番機の引き起こし合図に合わせた、0.8秒間隔の連続ブレイク機動",
        "ロール中のG負荷コントロールと滑走路軸への正確な復帰",
        "4番機コックピットから見上げる先行3機のスモークカーテン"
      ],
      planesPos: [
        { name: "✈️ 1", x: 0, y: -20 },
        { name: "✈️ 2", x: -40, y: 0 },
        { name: "✈️ 3", x: 40, y: 0 },
        { name: "✈️ 4", x: 0, y: 25 },
        { name: "✈️ 5", x: 0, y: 60 }
      ]
    },
    {
      title: "レインフォール (Rainfall Break)",
      formation: "隊形: 5機デルタ ➔ 扇型ブレイク",
      planes: "使用機数: 1〜5番機",
      difficulty: "難易度: ★★★★★",
      desc: "5機が密集デルタ隊形で垂直急上昇後、頂点から一斉に5方向へ扇型に放射ブレイク。まるで天空から光の雨が降り注ぐような大迫力のアクロバットを展開します。",
      points: [
        "垂直上昇頂点での5機一斉ブレイクタイミング",
        "外側機（2・3番機）の深いバンク角と高度維持",
        "観覧席カメラから見上げる圧巻の放射状スモーク"
      ],
      planesPos: [
        { name: "✈️ 1", x: 0, y: -45 },
        { name: "✈️ 2", x: -60, y: -10 },
        { name: "✈️ 3", x: 60, y: -10 },
        { name: "✈️ 4", x: -30, y: 30 },
        { name: "✈️ 5", x: 30, y: 30 }
      ]
    },
    {
      title: "デルタ・ロール (Delta Roll)",
      formation: "隊形: 5機密集デルタ (間隔3m)",
      planes: "使用機数: 1〜5番機",
      difficulty: "難易度: ★★★★★",
      desc: "わずか3mの超至近距離で三角形のデルタ編隊を組んだまま、編隊全体がひとつの巨大な航空機のようにゆっくりと360度フルロールを行う究極の同調飛行演目。",
      points: [
        "編隊僚機との接触（6.5m未満）を避ける極限のミリ単位舵コントロール",
        "背面飛行（インバーテッド）状態での高度維持とスロットル同期",
        "編隊シンクロ率スコア採点の最高峰チャレンジ"
      ],
      planesPos: [
        { name: "✈️ 1", x: 0, y: -30 },
        { name: "✈️ 2", x: -35, y: 0 },
        { name: "✈️ 3", x: 35, y: 0 },
        { name: "✈️ 4", x: -70, y: 30 },
        { name: "✈️ 5", x: 70, y: 30 }
      ]
    },
    {
      title: "チェンジ・オーバー・ターン (Changeover Turn)",
      formation: "隊形: トレイル (縦一列) ➔ デルタ (三角形)",
      planes: "使用機数: 1〜5番機",
      difficulty: "難易度: ★★★☆☆",
      desc: "縦一列のトレイル隊形で進入後、旋回（ターン）を行いながら各機が瞬時に左右・後方の指定ポジションへと隊形を変更。滑らかなフォーメーションシフトの美しさを体感できます。",
      points: [
        "旋回中の速度変化と横方向へのスムーズなスライド",
        "リーダー機の旋回半径に正確に同期する編隊運動",
        "管制塔カメラからの俯瞰ビューで隊形変化が明瞭に確認可能"
      ],
      planesPos: [
        { name: "✈️ 1", x: 0, y: -40 },
        { name: "✈️ 2", x: 0, y: -15 },
        { name: "✈️ 3", x: 0, y: 10 },
        { name: "✈️ 4", x: 0, y: 35 },
        { name: "✈️ 5", x: 0, y: 60 }
      ]
    },
    {
      title: "バーティカル・クライム・ロール (Vertical Climb Roll)",
      formation: "隊形: 単独 / 2機編隊",
      planes: "使用機数: 5番機 (ソロ)",
      difficulty: "難易度: ★★★★☆",
      desc: "滑走路すれすれの超低空高速進入から、スロットル100%全開で一気に垂直90度へ機首を引き起こし、空高く駆け上がりながら連続ロールを実施するダイナミック機動。",
      points: [
        "急上昇時の強烈なG負荷（5.5G+）と運動エネルギーのマネジメント",
        "青空に向かって真っ直ぐ垂直に昇るホワイトスモークの柱",
        "5番機コックピットから見下ろす松島基地の急速な遠ざかり"
      ],
      planesPos: [
        { name: "✈️ 5", x: 0, y: 0 },
        { name: "💨", x: 0, y: 30 },
        { name: "💨", x: 0, y: 60 },
        { name: "💨", x: 0, y: 90 },
        { name: "💨", x: 0, y: 120 }
      ]
    },
    {
      title: "タック・クロス (Tack Cross)",
      formation: "隊形: 2機交差機動 (Opposing Solo)",
      planes: "使用機数: 4番機 & 5番機",
      difficulty: "難易度: ★★★★★",
      desc: "左右から猛スピードで対向接近する2機が、滑走路中央の観覧ポイント直前で僅か数十メートルの高度差ですれ違うスリリングな極限交差演目。",
      points: [
        "相対速度800km/h以上での一瞬のクロスアプローチ",
        "タイミングのミリ秒単位のズレが勝敗を分ける極限の集中力",
        "すれ違いざまに生じる乱気流と後方視点の迫力"
      ],
      planesPos: [
        { name: "✈️ 4", x: -50, y: -20 },
        { name: "⚡", x: 0, y: 0 },
        { name: "✈️ 5", x: 50, y: 20 },
        { name: "💨", x: -90, y: -20 },
        { name: "💨", x: 90, y: 20 }
      ]
    },
    {
      title: "コークスクリュー (Corkscrew)",
      formation: "隊形: 3機直線飛行 ＋ 1機スパイラルロール",
      planes: "使用機数: 1〜4番機 & 5番機",
      difficulty: "難易度: ★★★★★",
      desc: "直線水平飛行する編隊のスモークラインの周りを、5番機（ソロ）が螺旋状（コルク抜き）に高速連続バレルロールで巻き付くように飛行する名物課目。",
      points: [
        "先行するスモークの円周上を一定半径で周回する精密なピッチ＆ロール連動",
        "ロール中の高度維持と編隊との距離キープ",
        "後方追従カメラで眺める螺旋スモークの芸術的美しさ"
      ],
      planesPos: [
        { name: "✈️ 1", x: 0, y: 0 },
        { name: "🌀", x: -35, y: -15 },
        { name: "✈️ 5", x: 35, y: 15 },
        { name: "💨", x: -60, y: 0 },
        { name: "💨", x: 60, y: 0 }
      ]
    }
  ];

  const routineTabs = document.querySelectorAll('.routine-tab');
  const routineTitle = document.getElementById('routineTitle');
  const routineDesc = document.getElementById('routineDesc');
  const routineFormTag = document.getElementById('routineFormTag');
  const routinePlanesTag = document.getElementById('routinePlanesTag');
  const routineDiff = document.getElementById('routineDiff');
  const routinePoints = document.getElementById('routinePoints');
  const routineAnimDisplay = document.getElementById('routineAnimDisplay');

  function updateRoutineDisplay(index) {
    const data = routinesData[index];
    if (!data) return;

    // Update active tab class
    routineTabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });

    // Update Text Content with subtle fade
    if (routineTitle) routineTitle.textContent = data.title;
    if (routineDesc) routineDesc.textContent = data.desc;
    if (routineFormTag) routineFormTag.textContent = data.formation;
    if (routinePlanesTag) routinePlanesTag.textContent = data.planes;
    if (routineDiff) routineDiff.textContent = data.difficulty;

    if (routinePoints) {
      routinePoints.innerHTML = '';
      data.points.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        routinePoints.appendChild(li);
      });
    }

    if (routineAnimDisplay) {
      routineAnimDisplay.innerHTML = '';
      data.planesPos.forEach((plane, i) => {
        const div = document.createElement('div');
        div.className = `plane-icon p${i+1}`;
        div.textContent = plane.name;
        div.style.transform = `translate(${plane.x}px, ${plane.y}px)`;
        routineAnimDisplay.appendChild(div);
      });
    }
  }

  routineTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      updateRoutineDisplay(i);
    });
  });

  // --------------------------------------------------------------------------
  // 2. CAMERA PREVIEW BUTTONS
  // --------------------------------------------------------------------------
  const camButtons = document.querySelectorAll('.cam-btn');
  camButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      camButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // --------------------------------------------------------------------------
  // 3. FAQ ACCORDION INTERACTION
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others for neatness
        faqItems.forEach(f => f.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // 4. SCROLL LISTENER (Sticky Header & Floating Bottom CTA)
  // --------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');
  const floatingCtaBar = document.getElementById('floatingCtaBar');
  const heroSection = document.getElementById('hero');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header styling on scroll
    if (siteHeader) {
      if (scrollY > 60) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Floating Bottom CTA visibility
    if (floatingCtaBar && heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      if (scrollY > heroBottom - 100) {
        floatingCtaBar.classList.add('visible');
      } else {
        floatingCtaBar.classList.remove('visible');
      }
    }
  });

  // --------------------------------------------------------------------------
  // 5. MOBILE MENU TOGGLE
  // --------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    // Close menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. SMOOTH SCROLL FOR IN-PAGE LINKS
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});

window.ADB = window.ADB || { chapters: [] };
window.ADB.chapters.push({
  id: "tech",
  no: 6,
  title: "기술·프로그램 도감",
  en: "Tech & Programs",
  icon: "satellite",
  color: "#00E5A0",
  intro: "비전문가가 회의에서 길을 잃지 않도록 항공기·엔진·무인기·발사체·위성 등 핵심 기술과 대표 프로그램을 '도감'처럼 정리했다. 각 항목은 원리 → 대표 제품 → 돈이 흐르는 구조(사업모델) → 정책금융 시사점 순으로 읽으면 된다.",
  takeaways: [
    "항공 산업의 돈은 '기체 판매'보다 엔진·MRO·부품 애프터마켓에서 장기적으로 회수된다(면도기-면도날 모델).",
    "KF-21은 4.5세대(스텔스 형상, 내부무장창 미적용)로 2026년 9월 양산 1호기가 공군에 인도됐다.",
    "누리호는 4차(2025.11)·5차(2026.10) 연속 성공으로 민간(한화에어로스페이스) 주도 단계에 진입했다. 재사용·소형발사체가 다음 과제다.",
    "우주 산업의 무게중심은 '발사'에서 저궤도 위성통신·위성데이터 서비스(다운스트림)로 이동 중이다.",
    "UAM·SAF·수소항공기 등 미래 기술은 인증·인프라·수요 불확실성이 커서 정책금융의 위험분담 역할이 중요하다."
  ],
  entries: [
    {
      id: "aircraft-anatomy",
      title: "항공기 구조와 주요 시스템",
      en: "Aircraft Anatomy & Major Systems",
      level: "기초",
      tags: ["기체", "공급망", "Tier 구조"],
      summary: "항공기는 기체·엔진·항전·랜딩기어 등 시스템의 결합체이며 각각 공급망이 다르다",
      body: "<p>항공기 한 대는 수백만 개 부품의 집합이지만, 사업 관점에서는 몇 개의 큰 덩어리(시스템)로 나눠 보면 이해가 쉽다.</p><table><thead><tr><th>시스템</th><th>역할</th><th>원가 비중(약)</th><th>대표 기업</th></tr></thead><tbody><tr><td>기체(Airframe)</td><td>동체·날개·꼬리날개 등 구조물</td><td>30~40%</td><td>보잉, 에어버스, 스피릿, KAI(부품)</td></tr><tr><td>엔진(Propulsion)</td><td>추력 생성</td><td>20~25%</td><td>GE, P&amp;W, 롤스로이스, CFM</td></tr><tr><td>항전(Avionics)</td><td>비행·항법·통신·임무 전자장비</td><td>10~15%(군용은 더 높음)</td><td>하니웰, 콜린스, 탈레스</td></tr><tr><td>기계·유압·전기 계통</td><td>조종면 구동, 연료, 전력, 환경제어</td><td>10~15%</td><td>사프란, 파커, 무그</td></tr><tr><td>랜딩기어·브레이크</td><td>이착륙 하중 지지</td><td>약 5%</td><td>사프란, 콜린스, 헤로닉스</td></tr><tr><td>객실(Interior)</td><td>좌석, 갤리, IFE</td><td>항공사별 상이</td><td>사프란, 콜린스</td></tr></tbody></table><p>공급망은 <strong>OEM(완제기) → Tier 1(대형 구조물·시스템) → Tier 2/3(부품·소재·가공)</strong>의 피라미드 구조다. 한국 기업 대부분은 기체 구조물 Tier 1~2(KAI, 대한항공 항공우주사업본부)와 엔진 부품(한화에어로스페이스) 위치에 있다.</p><p>원가 비중은 기종·출처별로 차이가 커 개략치(추정)로만 활용할 것.</p>",
      facts: [
        { k: "공급망 구조", v: "OEM → Tier1 → Tier2/3" },
        { k: "한국 주력 포지션", v: "기체 구조물·엔진 부품 Tier1~2" }
      ],
      sowhat: "'한국 항공산업 경쟁력'을 논할 때는 어느 시스템·어느 Tier에서 경쟁하는지부터 정의해야 한다. 정책금융 지원 대상도 완제기(방산 수출) vs 부품 공급망(중소·중견)으로 이원화된다.",
      sources: []
    },
    {
      id: "turbofan",
      title: "터보팬 엔진의 원리",
      en: "How a Turbofan Works",
      level: "기초",
      tags: ["엔진", "바이패스비", "추진"],
      summary: "흡입-압축-연소-팽창-배기, 큰 팬이 밀어내는 바이패스 공기가 추력의 대부분",
      body: "<p>현대 여객기·전투기 엔진은 대부분 <strong>터보팬</strong>이다. 원리는 '빨고-누르고-터뜨리고-내뿜기'의 4단계다.</p><ol><li><strong>흡입(Fan)</strong>: 앞쪽 거대한 팬이 공기를 빨아들인다.</li><li><strong>압축(Compressor)</strong>: 여러 단의 블레이드가 공기를 수십 배로 압축한다.</li><li><strong>연소(Combustor)</strong>: 연료를 분사해 1,500℃ 이상으로 태운다.</li><li><strong>팽창(Turbine)</strong>: 뜨거운 가스가 터빈을 돌리고, 터빈이 축으로 팬·압축기를 돌린다.</li></ol><p>핵심 개념은 <span class=\"hl\">바이패스비(BPR)</span>: 엔진 코어를 거치지 않고 팬만 통과하는 공기 대 코어 공기의 비율이다. 여객기는 BPR 10 이상의 고바이패스로 연비·소음을 줄이고, 전투기는 BPR 1 미만의 저바이패스 + 애프터버너로 순간 추력을 높인다.</p><table><thead><tr><th>구분</th><th>민항기(예: LEAP, GTF)</th><th>전투기(예: F414)</th></tr></thead><tbody><tr><td>바이패스비</td><td>약 10~12</td><td>약 0.3~0.5</td></tr><tr><td>우선순위</td><td>연비·내구성·소음</td><td>추력중량비·가속</td></tr></tbody></table><p>고온부(연소기·터빈) 블레이드는 니켈 초내열합금 단결정과 냉각 기술이 핵심으로, 진입장벽이 가장 높은 영역이다.</p>",
      facts: [
        { k: "엔진 4단계", v: "흡입-압축-연소-팽창/배기" },
        { k: "KF-21 엔진", v: "GE F414 2기(한화에어로스페이스 면허생산)" }
      ],
      sowhat: "엔진은 '독자 개발이 가장 어려운 핵심 기술'로, 정부가 추진하는 첨단 항공엔진 국산화는 장기·대규모 R&amp;D 자금과 인증 실적 확보가 관건이다.",
      sources: []
    },
    {
      id: "engine-business-model",
      title: "엔진 사업모델: 면도기-면도날, PBH",
      en: "Razor-Razorblade, Power-by-the-Hour",
      level: "심화",
      tags: ["엔진", "애프터마켓", "RSP", "PBH"],
      summary: "신품 엔진은 손해 보고 팔고, 20~30년 정비·부품으로 회수하는 구조",
      body: "<p>엔진 OEM은 신품 엔진을 원가 이하로 공급하는 경우가 많다(면도기). 대신 엔진 수명 20~30년 동안 발생하는 <strong>정비(Shop visit)·교체 부품(LLP, 수명제한부품)</strong>에서 이익을 회수한다(면도날).</p><ul><li><strong>PBH(Power-by-the-Hour)</strong>: 항공사가 비행시간당 고정 요금을 내고 OEM이 정비를 책임지는 장기 서비스 계약. 롤스로이스 'TotalCare', GE 'TrueChoice' 등이 대표.</li><li><strong>RSP(Risk & Revenue Sharing Partnership)</strong>: 부품사가 엔진 개발비를 분담하고 지분율만큼 평생 매출(특히 애프터마켓)을 나누는 구조. 한화에어로스페이스는 P&amp;W GTF 등 다수 프로그램에 RSP로 참여.</li></ul><table><thead><tr><th>단계</th><th>현금흐름</th></tr></thead><tbody><tr><td>개발·초기 양산 (약 5~10년)</td><td>대규모 투자, 적자</td></tr><tr><td>운항 확대 (10~30년차)</td><td>정비·부품 매출로 흑자 확대</td></tr></tbody></table><p>사례: GE에어로스페이스의 2025년 매출(GAAP 약 459억달러) 가운데 서비스(애프터마켓)가 약 2/3~70% 수준으로 보도됐다.</p>",
      facts: [
        { k: "GE에어로 2025 매출", v: "약 459억달러(GAAP)" },
        { k: "서비스 비중", v: "약 66~70%(보도 기준, 2025)" },
        { k: "엔진 수명주기", v: "약 20~30년" }
      ],
      sowhat: "RSP 참여는 초기 'J커브' 적자를 견디는 장기 자금이 필수다. 수은의 장기 시설·개발자금, 보증이 RSP 지분 확대를 지원하는 대표적 정책금융 수단이 될 수 있다.",
      sources: [
        { label: "Leeham News - GE Aerospace FY2025 실적", url: "https://leehamnews.com/2026/01/22/ge-aerospace-fy-and-q4-2025-earnings-thrust-higher-propelled-by-services-growth-leap-volume-and-expanding-margins/" }
      ]
    },
    {
      id: "materials",
      title: "항공 소재: 복합재·티타늄·초내열합금",
      en: "Aerospace Materials",
      level: "기초",
      tags: ["소재", "복합재", "티타늄"],
      summary: "가볍고 강하고 뜨거움을 견디는 소재가 연비와 성능을 좌우",
      body: "<table><thead><tr><th>소재</th><th>특징</th><th>주 사용처</th></tr></thead><tbody><tr><td>알루미늄 합금</td><td>가볍고 저렴, 가공 용이</td><td>전통적 동체·날개</td></tr><tr><td>탄소섬유 복합재(CFRP)</td><td>알루미늄 대비 경량·고강도, 부식 없음</td><td>B787·A350 기체의 약 50%(중량 기준)</td></tr><tr><td>티타늄</td><td>고강도·내열·내식, 복합재와 궁합 양호</td><td>랜딩기어, 엔진 팬·압축기, 체결부</td></tr><tr><td>니켈 초내열합금</td><td>1,000℃ 이상 강도 유지</td><td>엔진 연소기·터빈 블레이드</td></tr><tr><td>세라믹기지복합재(CMC)</td><td>초내열합금보다 가볍고 더 높은 온도 견딤</td><td>차세대 엔진 고온부(LEAP 등)</td></tr></tbody></table><p>복합재는 오토클레이브(고압 가열로) 설비와 인증된 공정이 진입장벽이며, 티타늄은 러시아(VSMPO) 의존이 높았다가 2022년 이후 공급망 재편이 진행 중이다.</p><p>국내에서는 탄소섬유(효성첨단소재), 티타늄 가공·단조 등 일부 역량이 있으나 항공 인증 소재 비중은 아직 제한적이다(추정).</p>",
      facts: [
        { k: "B787 복합재 비중", v: "약 50%(중량)" },
        { k: "엔진 고온부", v: "니켈 초내열합금 → CMC 전환" }
      ],
      sowhat: "소재·특수공정(열처리, NDT) 인증은 중소기업의 항공 공급망 진입 병목이다. 설비투자 금융과 인증 비용 지원을 패키지화하는 것이 공급망 강화 과제의 핵심 레버다.",
      sources: []
    },
    {
      id: "avionics",
      title: "항공전자(Avionics)와 AESA 레이더",
      en: "Avionics",
      level: "기초",
      tags: ["항전", "AESA", "임무컴퓨터"],
      summary: "항공기의 두뇌·눈·귀. 전투기에서는 기체 가치의 상당 부분을 차지",
      body: "<p>항전은 비행조종·항법·통신·감시·임무수행을 담당하는 전자장비 전체를 뜻한다. 민항기에서는 '글래스 콕핏'(디지털 디스플레이), FMS(비행관리시스템), 플라이바이와이어(전자식 조종)가 핵심이다.</p><p>군용기에서는 다음이 가치의 핵심이다.</p><ul><li><strong>AESA 레이더</strong>: 수천 개의 송수신 모듈로 전자적으로 빔을 조향. 다중표적 탐지·전자전에 유리. KF-21 AESA는 ADD 주관·한화시스템 개발로 국산화.</li><li><strong>임무컴퓨터(MC)</strong>: 센서 정보를 통합(센서 퓨전)해 조종사에게 제공.</li><li><strong>EO/IR 장비(IRST, 표적획득 포드)</strong>, <strong>전자전(EW) 장비</strong>.</li></ul><p>현대 전투기는 '날아다니는 컴퓨터'로 불리며, 소프트웨어 업그레이드로 성능을 지속 개선한다(블록 업그레이드). 이 때문에 항전 국산화는 수출 시 <strong>소스코드 통제권·수출통제(ITAR) 회피</strong> 측면에서 전략적 가치가 크다.</p>",
      facts: [
        { k: "KF-21 AESA", v: "ADD·한화시스템 국산 개발" },
        { k: "키워드", v: "센서 퓨전, 블록 업그레이드, ITAR-free" }
      ],
      sowhat: "미국산 부품이 들어가면 제3국 수출에 미국 승인이 필요하다. 항전 국산화율은 방산 수출 금융(수은 수출금융)의 실행 가능성과 직결된다.",
      sources: []
    },
    {
      id: "fighter-generations",
      title: "전투기 세대 구분과 KF-21의 위치",
      en: "Fighter Generations (4.5 / 5 / 6)",
      level: "기초",
      tags: ["전투기", "KF-21", "스텔스", "6세대"],
      summary: "4.5세대는 첨단 항전, 5세대는 스텔스+센서퓨전, 6세대는 유무인 협업",
      body: "<table><thead><tr><th>세대</th><th>핵심 특징</th><th>대표 기종</th></tr></thead><tbody><tr><td>4세대</td><td>고기동, 플라이바이와이어</td><td>F-16, F-15, MiG-29</td></tr><tr><td>4.5세대</td><td>AESA 레이더, 저피탐 일부 적용, 네트워크</td><td>라팔, 유로파이터, F-16 Block70, <strong>KF-21</strong></td></tr><tr><td>5세대</td><td>스텔스(내부무장창), 센서 퓨전, 초음속 순항</td><td>F-22, F-35, J-20, Su-57</td></tr><tr><td>6세대(개발 중)</td><td>유무인 협업(CCA·로열윙맨), AI, 적응형 엔진</td><td>미 F-47(NGAD), GCAP(영·일·이), FCAS(프·독·스)</td></tr></tbody></table><h4>KF-21 보라매</h4><ul><li>스텔스 '형상'을 갖췄으나 Block I은 내부무장창이 없어 <span class=\"hl\">4.5세대(4++세대)</span>로 분류. 향후 내부무장창 적용 시 5세대 근접(KF-21EX 등 논의, 미확정).</li><li>2022년 7월 시제기 첫 비행 → 2026년 9월 22일 양산 1호기 공군 인도(예천 기지, 제156전투비행대대).</li><li>공군은 2032년까지 약 120대 전력화 계획(보도 기준). 인도네시아가 공동개발 참여.</li></ul>",
      facts: [
        { k: "양산 1호기 인도", v: "2026.9.22" },
        { k: "엔진", v: "F414 쌍발" },
        { k: "도입 계획", v: "2032년까지 약 120대(보도)" },
        { k: "분류", v: "4.5세대(Block I)" }
      ],
      sowhat: "KF-21의 수출 경쟁 상대는 F-35가 아니라 라팔·유로파이터·F-16V·그리펜 등 4.5세대 기종이다. 가격·인도속도·금융조건(수은 수출금융 패키지)이 차별화 포인트가 된다.",
      sources: [
        { label: "대한민국 정책브리핑 - KF-21 양산 1호기 인도", url: "https://www.korea.kr/news/policyNewsView.do?newsId=148931278" },
        { label: "The War Zone - First series KF-21 rolled out", url: "https://twz.com/air/first-series-produced-kf-21-fighter-rolled-out-in-south-korea" }
      ]
    },
    {
      id: "trainer-light-attack",
      title: "훈련기·경공격기 (T-50/FA-50)",
      en: "Trainers & Light Combat Aircraft",
      level: "기초",
      tags: ["FA-50", "T-50", "수출"],
      summary: "한국 항공기 수출의 주력. 훈련기에서 경전투기로 확장된 제품군",
      body: "<p>조종사는 기초훈련기 → 고등훈련기 → 실전 전투기 순으로 양성된다. 한국은 이 사다리를 국산 기종으로 모두 갖춘 몇 안 되는 국가다.</p><table><thead><tr><th>기종</th><th>분류</th><th>비고</th></tr></thead><tbody><tr><td>KT-1</td><td>기본훈련기(터보프롭)</td><td>인니·터키·페루 등 수출</td></tr><tr><td>T-50</td><td>초음속 고등훈련기</td><td>록히드마틴과 공동개발</td></tr><tr><td>TA-50</td><td>전술입문기</td><td>무장 가능</td></tr><tr><td>FA-50</td><td>경공격기/경전투기</td><td>폴란드·필리핀·말레이시아 등 수출</td></tr></tbody></table><p>FA-50은 '저렴한 운용비 + 초음속 + 서방 무장 호환'으로 F-16급 전투기를 보유하기 어려운 국가의 수요를 흡수했다. 폴란드 대규모 계약(2022)이 대표 사례이며, 이후 FA-50PL 등 고객 맞춤형 개량이 이어졌다.</p><p>훈련기는 기체 판매 이후 <strong>훈련체계(시뮬레이터)·후속지원·부품</strong> 매출이 장기간 발생한다.</p>",
      facts: [
        { k: "제조사", v: "한국항공우주산업(KAI)" },
        { k: "엔진(T-50 계열)", v: "GE F404" }
      ],
      sowhat: "개도국 수요가 많아 구매국 재원 조달이 수출 성사의 관건이다. 수은의 구매자금 대출·ECA 커버가 경쟁 입찰의 결정 변수로 작동한다(정책금융 챕터 참고).",
      sources: []
    },
    {
      id: "helicopters",
      title: "헬기(회전익)",
      en: "Rotorcraft",
      level: "기초",
      tags: ["수리온", "LAH", "회전익"],
      summary: "수직이착륙·제자리비행이 강점, 군·관용·응급 수요 중심",
      body: "<p>헬기는 회전하는 로터로 양력을 만들어 수직이착륙과 정지비행(호버링)이 가능하다. 대신 속도·항속거리·연비는 고정익보다 불리하다.</p><ul><li><strong>KUH-1 수리온</strong>: KAI 개발 기동헬기. 육군 기동, 해병 상륙기동(마린온), 경찰·소방·의무후송 등 관용 파생형.</li><li><strong>LAH/LCH</strong>: 소형무장헬기(LAH, 군용)와 소형민수헬기(LCH, 민간). 에어버스 H155 기반 공동개발.</li><li>대형 공격헬기(아파치)·대형 수송헬기(시누크)는 해외 도입.</li></ul><p>세계 헬기 시장은 에어버스 헬리콥터스, 레오나르도, 벨, 시코르스키(록히드마틴) 등이 과점한다. 최근에는 고속 회전익(틸트로터, 복합형)과 무인 헬기, 그리고 eVTOL과의 경계가 흐려지는 추세다.</p>",
      facts: [
        { k: "국산 기동헬기", v: "KUH-1 수리온" },
        { k: "소형헬기", v: "LAH/LCH(H155 기반)" }
      ],
      sowhat: "헬기는 국내 관수 중심으로 수출 실적이 제한적이다. 관용 파생형(소방·응급)과 중고 리스 등 수출 금융 구조 설계가 수출 확대의 실마리가 될 수 있다.",
      sources: []
    },
    {
      id: "uav-drones",
      title: "무인기·드론: MALE, HALE, 군집드론",
      en: "UAVs: MALE, HALE, Swarms",
      level: "기초",
      tags: ["무인기", "드론", "CCA"],
      summary: "고도·체공시간으로 분류. 우크라이나전 이후 저가·대량 드론이 전장의 주역",
      body: "<table><thead><tr><th>분류</th><th>고도/체공</th><th>예시</th></tr></thead><tbody><tr><td>소형·전술(Small/Tactical)</td><td>수 km, 수 시간</td><td>FPV 자폭드론, 군단·사단급 무인기</td></tr><tr><td>MALE(중고도 장기체공)</td><td>약 5~9km, 24시간 이상</td><td>MQ-9 리퍼, TB2, 국산 MUAV</td></tr><tr><td>HALE(고고도 장기체공)</td><td>약 18km 이상, 30시간 이상</td><td>RQ-4 글로벌호크</td></tr><tr><td>CCA/로열윙맨</td><td>유인기와 협업하는 무인 전투기</td><td>미 CCA, 국내 KUS-LW(개발)</td></tr></tbody></table><p><strong>군집드론(Swarm)</strong>은 다수의 저가 드론이 AI·통신으로 협업해 감시·공격하는 개념으로, 방어 측에 비용 비대칭을 강요한다. 우크라이나·중동 전쟁 이후 '값싼 대량 드론 + 대드론(C-UAS)' 시장이 급성장했다.</p><p>민간에서는 물류·농업·점검·촬영 드론이 확산 중이나, 소형 드론 하드웨어는 중국(DJI) 의존도가 매우 높다.</p>",
      facts: [
        { k: "MALE 체공", v: "약 24시간 이상" },
        { k: "HALE 고도", v: "약 18km 이상" }
      ],
      sowhat: "드론은 진입장벽이 낮아 중소·스타트업 비중이 높다. 부품(모터·배터리·통신칩) 탈중국 공급망과 대량생산 설비에 대한 금융 지원이 산업정책의 포인트다.",
      sources: []
    },
    {
      id: "uam-aam",
      title: "UAM/AAM과 eVTOL, K-UAM",
      en: "Urban / Advanced Air Mobility",
      level: "심화",
      tags: ["UAM", "eVTOL", "K-UAM"],
      summary: "전기 수직이착륙기로 도심 하늘길을 여는 개념. 인증·인프라·수익성이 관건",
      body: "<p><strong>eVTOL</strong>은 배터리·분산전기추진으로 수직이착륙하는 항공기다. 이를 활용한 도심 항공교통을 UAM, 지역 간까지 확장한 개념을 AAM이라 한다.</p><ul><li><strong>해외</strong>: 미국 Joby·Archer가 FAA 형식인증 막바지 단계(2026년 기준, 최종 형식인증 미확인). 2026년 3월 미 교통부·FAA가 eVTOL 통합 시범사업 8개 프로젝트 선정. 중국 EHang은 자국에서 무인 eVTOL 인증 확보.</li><li><strong>한국(K-UAM)</strong>: 국토부 주도 'K-UAM 그랜드챌린지'로 개활지·도심 실증 추진. 당초 2025년 상용화 목표였으나 일정이 늦어지고 있으며, 2026년 10월 서비스 수준 운용 검증을 목표로 한 '네오 그랜드챌린지'(약 1,500억원 규모) 개편안이 보도됐다.</li><li>국내 참여: 현대차그룹(Supernal), 한화(오버에어), KAI, SKT·KT·LG유플러스 컨소시엄 등.</li></ul><p>필요 요소: 기체 + 버티포트(이착륙장) + 교통관리(UATM) + 배터리·충전 + 제도(인증·보험).</p>",
      facts: [
        { k: "K-UAM 당초 목표", v: "2025년 상용화" },
        { k: "개편안(보도)", v: "네오 그랜드챌린지, 약 1,500억원" },
        { k: "미국 선두", v: "Joby, Archer(형식인증 진행 중)" }
      ],
      sowhat: "UAM은 수요·인증 리스크가 커 순수 상업금융이 들어가기 어렵다. 인프라(버티포트) PF, 초기 기체 리스, 수출용 부품 공급망 등 정책금융의 역할 범위를 단계별로 정해야 한다.",
      sources: [
        { label: "전자신문 - K-UAM 네오 그랜드챌린지", url: "https://www.etnews.com/20261005000033" },
        { label: "Archer Q1 2026 Results", url: "https://s206.q4cdn.com/823642595/files/doc_news/Archer-Announces-First-Quarter-2026-Results-Highlighting-Record-FAA-Certification-Progress-With-Initial-US-Operations-Expected-In-2026-2026.pdf" }
      ]
    },
    {
      id: "saf-decarbonization",
      title: "SAF와 항공 탈탄소(수소·전기 항공기)",
      en: "SAF & Aviation Decarbonization",
      level: "심화",
      tags: ["SAF", "탈탄소", "수소", "CORSIA"],
      summary: "단기는 SAF 혼합, 장기는 수소·전기 추진. 의무혼합 규제가 시장을 만든다",
      body: "<p>항공은 배터리 무게 문제로 전동화가 가장 어려운 운송수단이다. 그래서 단기 해법은 <strong>지속가능항공유(SAF)</strong>다. SAF는 폐식용유·바이오매스·합성연료(e-SAF) 등으로 만든 대체 항공유로, 기존 엔진·인프라에 혼합해 쓸 수 있다(drop-in).</p><table><thead><tr><th>지역</th><th>의무혼합 비율</th></tr></thead><tbody><tr><td>EU(ReFuelEU)</td><td>2025년 2% → 2030년 6% → 2050년 70%</td></tr><tr><td>한국</td><td>2027년 1%(국제선 항공유 공급자) → 2030년 3~5% → 2035년 7~10%(목표 범위)</td></tr></tbody></table><ul><li>SAF는 일반 항공유 대비 수 배 비싸 항공권 가격 인상 요인이 된다.</li><li><strong>수소 항공기</strong>: 에어버스 ZEROe가 일정을 늦춘 것으로 알려져 상용화는 2040년 전후로 보는 시각이 많다(추정).</li><li><strong>전기·하이브리드</strong>: 소형기·단거리(eVTOL, 지역항공)부터 적용.</li><li>국제 규제: ICAO CORSIA(국제선 탄소상쇄), 2050 넷제로 목표.</li></ul>",
      facts: [
        { k: "한국 SAF 의무", v: "2027년 1%" },
        { k: "EU 2030", v: "6%(ReFuelEU)" },
        { k: "EU 2050", v: "70%" }
      ],
      sowhat: "SAF 생산설비는 정유사의 대규모 설비투자 대상이다. 녹색금융·수출입은행의 친환경 시설자금은 '항공 공급망 경쟁력'과 '탄소중립'을 연결하는 접점이다.",
      sources: [
        { label: "Korea Times - SAF mandate from 2027", url: "https://www.koreatimes.co.kr/amp/southkorea/politics/20250919/korea-to-require-sustainable-jet-fuel-on-all-outbound-flights-from-2027" },
        { label: "Aviation Week - Korean SAF mandate 1% by 2027", url: "https://aviationweek.com/air-transport/safety-ops-regulation/south-korean-saf-mandate-will-require-airlines-use-1-blend-2027" }
      ]
    },
    {
      id: "mro",
      title: "MRO(정비·수리·분해점검)",
      en: "Maintenance, Repair & Overhaul",
      level: "기초",
      tags: ["MRO", "애프터마켓", "엔진정비"],
      summary: "항공기 수명 내내 발생하는 안정적 매출원. 엔진 정비가 최대 비중",
      body: "<p>MRO는 항공기를 안전하게 계속 띄우기 위한 모든 정비 활동이다. 항공기 가격과 비슷하거나 그 이상의 비용이 수명주기 동안 정비에 쓰인다고 알려져 있다.</p><table><thead><tr><th>구분</th><th>내용</th><th>비중(약)</th></tr></thead><tbody><tr><td>엔진 정비</td><td>분해·부품 교체(Shop visit)</td><td>약 40%</td></tr><tr><td>부품(Component)</td><td>랜딩기어, APU, 항전 수리</td><td>약 20%</td></tr><tr><td>기체 중정비(Heavy check)</td><td>C/D 체크, 구조 점검</td><td>약 20%</td></tr><tr><td>운항정비(Line)</td><td>매 비행 전후 점검</td><td>약 15~20%</td></tr></tbody></table><p>비중은 업계 리포트 통상치 기반의 개략치(추정)다.</p><ul><li>한국: 대한항공(엔진·기체), KAEMS(KAI 자회사, 기체 정비), 한화에어로스페이스(엔진) 등. 저비용항공사 다수가 중정비를 해외(싱가포르·중국 등)에 맡겨 MRO 국부 유출이 지적돼 왔다.</li><li>군용 MRO: 미 해군·공군 함정·항공기 해외 정비 수요가 신규 기회로 거론된다.</li></ul>",
      facts: [
        { k: "최대 비중", v: "엔진 정비(약 40%, 추정)" },
        { k: "국내 주요 플레이어", v: "대한항공, KAEMS, 한화에어로" }
      ],
      sowhat: "MRO는 인증·설비(행거, 엔진 시험셀) 선투자형 사업이다. 해외 유출 수요의 국내 회수와 미군 MRO 수주는 정책금융 설비자금의 구체적 타깃이 될 수 있다.",
      sources: []
    },
    {
      id: "launch-vehicles",
      title: "발사체 기초: 액체/고체, 단 구성, 재사용",
      en: "Launch Vehicles 101",
      level: "기초",
      tags: ["발사체", "재사용", "Starship"],
      summary: "다단 로켓으로 무게를 버리며 가속. 재사용이 발사 단가를 바꿨다",
      body: "<p>발사체는 위성을 궤도에 올리는 '우주 택배 트럭'이다. 저궤도 진입에 초속 약 7.8km가 필요해, 다 쓴 연료통을 버리며 가볍게 만드는 <strong>다단(多段) 구조</strong>를 쓴다.</p><table><thead><tr><th>구분</th><th>액체 추진</th><th>고체 추진</th></tr></thead><tbody><tr><td>원리</td><td>연료+산화제를 펌프로 공급·연소</td><td>연료·산화제가 굳어진 추진제 연소</td></tr><tr><td>장점</td><td>추력 조절·재점화·재사용 가능, 고효율</td><td>구조 단순, 즉시 발사, 저장성</td></tr><tr><td>단점</td><td>구조 복잡, 비용</td><td>중간 정지 어려움, 효율 낮음</td></tr><tr><td>예</td><td>누리호, 팰컨9</td><td>미사일, 고체연료 우주발사체(국방)</td></tr></tbody></table><h4>재사용 혁명</h4><p>스페이스X 팰컨9은 1단 수직착륙 재사용으로 발사 단가를 크게 낮췄다. 차세대 초대형 <strong>스타십</strong>은 2026년 V3 기체로 시험비행(5월 12차, 7월 13차)을 이어가며 완전 재사용을 목표로 하고 있다(보도 기준).</p>",
      facts: [
        { k: "저궤도 속도", v: "약 7.8km/s" },
        { k: "스타십 V3", v: "2026.5 첫 비행(12차)" }
      ],
      sowhat: "재사용 발사체가 없는 국가는 가격 경쟁력이 불리하다. 한국 발사체 산업의 사업성은 '정부 수요(국가위성) 앵커 + 재사용 기술 확보' 여부에 달려 있다.",
      sources: [
        { label: "Engadget - Starship V3 first test flight", url: "https://www.engadget.com/2180020/spacex-starship-v3-first-test-flight-succ" }
      ]
    },
    {
      id: "nuri",
      title: "누리호(KSLV-II)와 차세대발사체",
      en: "Nuri (KSLV-II) & KSLV-III",
      level: "기초",
      tags: ["누리호", "한화에어로스페이스", "체계종합"],
      summary: "순수 국내 기술 3단 액체 발사체. 2025년 4차 성공으로 민간 이전 본격화",
      body: "<table><thead><tr><th>항목</th><th>사양(약)</th></tr></thead><tbody><tr><td>단 구성</td><td>3단 액체(케로신+액체산소)</td></tr><tr><td>1단</td><td>75톤급 엔진 4기 클러스터(약 300톤급)</td></tr><tr><td>2단 / 3단</td><td>75톤급 1기 / 7톤급 1기</td></tr><tr><td>길이·중량</td><td>약 47.2m, 약 200톤</td></tr><tr><td>성능</td><td>고도 600~800km 태양동기궤도 1.5톤급</td></tr></tbody></table><h4>발사 이력</h4><ul><li>1차(2021.10) 위성모사체 궤도 미진입 → 2차(2022.6) 성공 → 3차(2023.5) 실용위성 8기 → <strong>4차(2025.11.27) 성공</strong>: 차세대중형위성 3호(516kg) + 부탑재위성 12기, 총 13기 사출.</li><li>4차부터 한화에어로스페이스가 체계종합기업으로 기체 제작·조립을 총괄(4차는 항우연 주관·한화 공동 운용, 5차부터 한화가 발사 운용의 주운영자로 참여, 보도 기준).</li><li><strong>5차(2026.10.7) 성공</strong>: 초소형군집위성 5기 + 큐브위성 10기 중 14기 사출(큐브위성 1기 미분리). 6차는 2027년 예정.</li></ul><p><strong>차세대발사체(KSLV-III)</strong>: 달 착륙선 발사(2032년 목표)를 위한 2단형 대형 발사체. 재사용 적용 방향으로 개발 계획 변경이 논의돼 왔다.</p>",
      facts: [
        { k: "4차 발사", v: "2025.11.27 성공(13기)" },
        { k: "체계종합기업", v: "한화에어로스페이스" },
        { k: "성능", v: "SSO 1.5톤급" },
        { k: "5차 발사", v: "2026.10.7 성공(15기 중 14기 사출)" }
      ],
      sowhat: "누리호는 기술 확보에는 성공했으나 상업 경쟁력(단가·발사 빈도)은 별개다. 민간 이전 이후 발사 서비스 사업화에 필요한 장기 수요 보장과 금융이 다음 쟁점이다.",
      sources: [
        { label: "뉴시스 - 누리호 4차, 13기 위성 모두 사출", url: "https://mobile.newsis.com/view/NISX20251127_0003418604" },
        { label: "머니투데이 - 누리호 4차 무엇이 달라졌나", url: "https://www.mt.co.kr/tech/2025/11/26/2025112622393154473" }
        ,{ label: "MTN - 누리호 5차 15기 중 14기 궤도 진입", url: "https://news.mtn.co.kr/news-detail/2026100716330458112" }
      ]
    },
    {
      id: "satellite-types",
      title: "위성의 종류와 버스·탑재체",
      en: "Satellite Types, Bus & Payload",
      level: "기초",
      tags: ["위성", "SAR", "버스", "탑재체"],
      summary: "용도별(통신·관측·항법·과학) 구분, 구조는 '버스(차체)+탑재체(짐)'",
      body: "<p>위성은 <strong>버스(Bus)</strong>와 <strong>탑재체(Payload)</strong>로 나뉜다. 버스는 전력(태양전지·배터리), 자세제어, 추진, 열제어, 통신 등 '위성을 살아있게 하는 플랫폼'이고, 탑재체는 카메라·레이더·통신중계기 등 '임무 장비'다.</p><table><thead><tr><th>종류</th><th>궤도</th><th>예시</th></tr></thead><tbody><tr><td>통신·방송</td><td>정지궤도(GEO, 3만6천km) / 저궤도</td><td>무궁화(KT SAT), 스타링크</td></tr><tr><td>지구관측(광학)</td><td>저궤도 태양동기</td><td>아리랑(다목적실용위성), 차중형</td></tr><tr><td>지구관측(SAR)</td><td>저궤도</td><td>425사업 SAR 위성, 아리랑 5호</td></tr><tr><td>항법(GNSS)</td><td>중궤도·경사궤도</td><td>GPS, 갈릴레오, KPS(개발 중)</td></tr><tr><td>과학·탐사</td><td>다양</td><td>다누리(달궤도)</td></tr></tbody></table><p><span class=\"hl\">SAR(합성개구레이더)</span>는 전파를 쏘아 반사파로 영상을 만들어 야간·악천후에도 관측 가능하다. 425사업은 EO/IR 1기 + SAR 4기 체계로 2025년 11월 5호기 발사를 끝으로 5기 발사를 완료했다(운용시험평가 등 후속 절차 진행).</p>",
      facts: [
        { k: "정지궤도 고도", v: "약 35,786km" },
        { k: "425사업", v: "EO/IR 1 + SAR 4, 2025.11 5호기 발사" },
        { k: "425 재방문", v: "약 2시간 간격(기대치)" }
      ],
      sowhat: "국내 기업은 탑재체(한화시스템 SAR, 쎄트렉아이 광학)에서 경쟁력을 쌓는 중이다. 수출 시 '위성+지상국+데이터' 패키지와 구매국 금융을 묶는 것이 수주 경쟁력이다.",
      sources: [
        { label: "헤럴드경제 - 정찰위성 5호기 교신 성공", url: "https://www.heraldk.com/article/2025110123522135454" },
        { label: "한화시스템 - 425사업 마지막 SAR 위성", url: "https://www.hanwhasystems.com/kr/prcenter/newsView.do?bbidx=730" }
      ]
    },
    {
      id: "smallsat-cubesat",
      title: "소형위성·큐브샛",
      en: "SmallSats & CubeSats",
      level: "기초",
      tags: ["큐브샛", "소형위성", "뉴스페이스"],
      summary: "10cm 단위 규격화로 개발비·기간을 대폭 줄인 위성. 뉴스페이스의 상징",
      body: "<p><strong>큐브샛</strong>은 10×10×10cm(1U, 약 1~1.3kg) 단위로 규격화된 초소형 위성이다. 3U, 6U, 12U 등으로 조합한다. 상용 부품(COTS) 사용과 표준화로 수억원~수십억원, 1~2년 내 개발이 가능해 대학·스타트업의 진입 문턱을 낮췄다.</p><table><thead><tr><th>분류</th><th>중량(약)</th></tr></thead><tbody><tr><td>대형</td><td>1,000kg 이상</td></tr><tr><td>중형</td><td>500~1,000kg</td></tr><tr><td>소형(Small)</td><td>100~500kg</td></tr><tr><td>초소형(Micro)</td><td>10~100kg</td></tr><tr><td>나노(Nano, 큐브샛 다수)</td><td>1~10kg</td></tr></tbody></table><ul><li>여러 기를 함께 띄우는 <strong>군집(Constellation)</strong> 운용으로 재방문 주기를 짧게 만든다.</li><li>누리호 4차에서 다중위성어댑터(MPA)로 큐브샛 12기 부탑재 사출에 성공.</li><li>국내 기업: 쎄트렉아이, 나라스페이스, 루미르 등.</li></ul>",
      facts: [
        { k: "1U 규격", v: "10cm 정육면체, 약 1~1.3kg" },
        { k: "누리호 4차 부탑재", v: "12기" }
      ],
      sowhat: "소형위성 기업은 매출 규모 대비 설비·발사 선투자가 커 성장자금 공백이 크다. 정책펀드·벤처대출 등 스타트업형 금융 수단 설계가 필요하다.",
      sources: [
        { label: "머니투데이 - 큐브위성 교신 성공", url: "https://www.mt.co.kr/tech/2025/11/27/2025112711381570746" }
      ]
    },
    {
      id: "leo-satcom",
      title: "저궤도 위성통신: 스타링크·원웹·6G NTN",
      en: "LEO Satcom & 6G NTN",
      level: "심화",
      tags: ["스타링크", "원웹", "NTN", "6G"],
      summary: "수천~수만 기 위성으로 전 지구 인터넷. 우주 경제의 최대 성장 축",
      body: "<p>저궤도(LEO, 약 500~1,200km) 위성은 정지궤도 대비 지연시간이 짧아(수십 ms) 지상 인터넷에 근접한 품질을 낸다. 대신 위성 한 기가 덮는 범위가 작아 수천 기 이상의 <strong>메가 컨스텔레이션</strong>이 필요하다.</p><table><thead><tr><th>사업자</th><th>현황(기준)</th></tr></thead><tbody><tr><td>스타링크(스페이스X)</td><td>작동 위성 약 1만 기 이상(2026년 중반), 가입자 약 1,030만(2026.3말, S-1 기준)</td></tr><tr><td>원웹(유텔샛)</td><td>약 600여 기 1세대 운용, 정부·기업(B2B) 중심(추정)</td></tr><tr><td>아마존 카이퍼(Leo)</td><td>배치 초기 단계</td></tr><tr><td>중국 궈왕·첸판</td><td>국가 주도 대규모 배치 추진</td></tr></tbody></table><p><span class=\"hl\">6G NTN(비지상 네트워크)</span>은 위성을 이동통신 표준(3GPP)에 통합해 스마트폰이 지상 기지국과 위성을 끊김 없이 쓰게 하는 개념이다. 스타링크 Direct-to-Cell처럼 일반 휴대폰과 위성 직접 연결도 상용화 단계에 들어섰다.</p><p>한국은 정부 저궤도 통신위성 시범망 사업을 추진 중이며, 국내 스타링크 서비스는 2025년 도입된 것으로 알려져 있다.</p>",
      facts: [
        { k: "스타링크 가입자", v: "약 1,030만(2026.3말)" },
        { k: "스타링크 작동 위성", v: "약 1만 기 이상(2026 중반)" },
        { k: "LEO 고도", v: "약 500~1,200km" }
      ],
      sowhat: "LEO 통신은 단말·지상국·부품(위상배열 안테나) 공급망 기회가 크다. 국내 기업의 글로벌 컨스텔레이션 공급망 진입을 위한 수출금융·시설자금이 유효한 지원 수단이다.",
      sources: [
        { label: "Advanced Television - Starlink exceeds 9.2m customers", url: "https://www.advanced-television.com/2026/01/05/starlink-exceeds-9-2m-customers/" },
        { label: "HighSpeedInternet - Starlink satellites in orbit (2026.6)", url: "https://www.highspeedinternet.com/resources/how-many-starlink-satellites-are-in-orbit-june-26-2026" }
      ]
    },
    {
      id: "ground-data-services",
      title: "지상국과 위성데이터 서비스(다운스트림)",
      en: "Ground Segment & Downstream",
      level: "심화",
      tags: ["지상국", "위성데이터", "다운스트림", "GSaaS"],
      summary: "우주 경제 매출의 대부분은 위성 제조·발사가 아닌 데이터·서비스에서 발생",
      body: "<p>우주 산업은 <strong>업스트림</strong>(위성·발사체 제조, 발사)과 <strong>다운스트림</strong>(위성 신호·데이터를 활용한 서비스)으로 나뉜다. 위성방송·통신, GNSS 기반 위치서비스, 지구관측 데이터 분석 등 다운스트림이 우주경제 매출의 대부분을 차지한다고 알려져 있다(추정).</p><ul><li><strong>지상국(Ground station)</strong>: 위성과 교신해 명령을 보내고 데이터를 받는 안테나·관제 시설. 최근에는 AWS Ground Station처럼 지상국을 클라우드 서비스로 빌려 쓰는 <strong>GSaaS</strong> 모델 확산.</li><li><strong>위성데이터 활용</strong>: 농작물 작황, 재난 감시, 해양·선박 추적, 보험 손해사정, 원자재 재고 분석, 국방 정보.</li><li>AI 영상 분석으로 데이터의 가치가 커지고 있으며, 국내에서도 국토위성·차세대중형위성 데이터 개방이 진행 중.</li></ul><table><thead><tr><th>가치사슬</th><th>특징</th></tr></thead><tbody><tr><td>제조·발사</td><td>자본집약, 정부 수요 의존</td></tr><tr><td>운용·지상국</td><td>인프라형, 안정적 수익</td></tr><tr><td>데이터·응용</td><td>소프트웨어형, 확장성 높음</td></tr></tbody></table>",
      facts: [
        { k: "구분", v: "업스트림 vs 다운스트림" },
        { k: "트렌드", v: "GSaaS, AI 영상분석" }
      ],
      sowhat: "국내 지원이 하드웨어(위성·발사체)에 쏠려 있다면 다운스트림 서비스 기업 육성은 공백 영역이다. 우주 산업 경쟁력 진단 시 가치사슬별 지원 비중을 반드시 점검할 것.",
      sources: []
    },
    {
      id: "space-exploration",
      title: "우주탐사: 달·화성·심우주",
      en: "Space Exploration",
      level: "기초",
      tags: ["다누리", "아르테미스", "달착륙선"],
      summary: "국가 위상·기술 견인형 사업. 아르테미스 등 국제 협력의 장",
      body: "<p>우주탐사는 상업성보다 국가 위상·과학·기술 파급을 목표로 하는 정부 주도 사업이다.</p><ul><li><strong>다누리(KPLO)</strong>: 한국 첫 달 궤도선. 2022년 8월 발사, 같은 해 12월 달 궤도 진입 후 임무 연장 운용.</li><li><strong>달 착륙선</strong>: 차세대발사체로 2032년 발사 목표.</li><li><strong>아르테미스(미국 주도)</strong>: 유인 달 복귀 프로그램. 한국은 2021년 아르테미스 약정 서명. 아르테미스 2호(유인 달 선회) 등 일정은 수차례 조정돼 왔다.</li><li>중국: 창어 시리즈로 달 뒷면 샘플 귀환(2024) 등 성과, 2030년 유인 달착륙 목표.</li><li>민간 달 착륙선(미국 CLPS 프로그램) 등 탐사의 상업화도 진행 중.</li></ul><p>탐사 기술(원자력 전원, 심우주 통신, 착륙·로버)은 다른 우주 분야로 파급된다.</p>",
      facts: [
        { k: "다누리 발사", v: "2022.8" },
        { k: "달 착륙선 목표", v: "2032년" },
        { k: "아르테미스 약정", v: "한국 2021년 서명" }
      ],
      sowhat: "탐사는 금융 수익성보다 국제 공동사업 참여권의 문제다. 국내 기업이 해외 탐사 프로그램의 부품 공급사로 들어가는 경로(수출 실적화)에 주목할 만하다.",
      sources: []
    },
    {
      id: "ssa-debris",
      title: "우주상황인식(SSA)·우주쓰레기",
      en: "Space Situational Awareness & Debris",
      level: "심화",
      tags: ["SSA", "우주쓰레기", "우주안보"],
      summary: "궤도가 붐비면서 충돌 감시·회피·잔해 제거가 새로운 산업이자 안보 과제로 부상",
      body: "<p><strong>SSA(우주상황인식)</strong>는 지상 레이더·광학망원경·위성으로 궤도상 물체를 추적해 충돌을 경고하고 위협을 감시하는 활동이다. 군사적으로는 상대국 위성 감시(SDA, 우주영역인식)로 확장된다.</p><table><thead><tr><th>지표(ESA 2025 보고서)</th><th>수치(약)</th></tr></thead><tbody><tr><td>감시망 추적 물체</td><td>약 40,000개</td></tr><tr><td>그중 작동 위성</td><td>약 11,000개</td></tr><tr><td>10cm 이상 잔해(모델 추정)</td><td>50,000개 이상</td></tr><tr><td>1cm 이상 잔해(모델 추정)</td><td>약 120만 개</td></tr></tbody></table><p>초속 7~8km로 움직이는 궤도에서는 1cm 파편도 위성을 파괴할 수 있다. 충돌이 연쇄적으로 잔해를 늘리는 <span class=\"hl\">케슬러 증후군</span>이 우려된다.</p><ul><li>대응 산업: 충돌회피 서비스, 능동적 잔해 제거(ADR, 일본 아스트로스케일 등), 궤도상 서비싱(수명연장·급유).</li><li>한국: 천문연구원 우주위험 감시, 공군 우주작전 조직 및 전자광학위성감시체계 구축 등.</li></ul>",
      facts: [
        { k: "추적 물체", v: "약 4만 개(ESA, 2024말 기준)" },
        { k: "1cm 이상 잔해", v: "약 120만 개(모델)" },
        { k: "작동 위성", v: "약 1.1만 개" }
      ],
      sowhat: "SSA는 국방(우주안보)과 민간 서비스가 겹치는 신흥 시장이다. 국방 수요를 앵커로 민간 서비스 수출까지 키우는 듀얼유스 투자 논리가 성립한다.",
      sources: [
        { label: "ESA Space Environment Report 2025", url: "https://www.esa.int/Space_Safety/Space_Debris/ESA_Space_Environment_Report_2025" }
      ]
    }
  ]
});

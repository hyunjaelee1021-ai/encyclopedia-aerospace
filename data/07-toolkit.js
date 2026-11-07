window.ADB = window.ADB || { chapters: [] };
window.ADB.chapters.push({
  id: "toolkit",
  no: 7,
  title: "컨설턴트 툴킷 & 용어사전",
  en: "Consultant Toolkit",
  icon: "book",
  color: "#FF80AB",
  intro: "프로젝트 첫 주부터 바로 쓸 수 있는 진단 프레임워크, 이슈 트리, 인터뷰 가이드, 데이터 소스, KPI를 한곳에 모았습니다. 뒤쪽에는 항공·우주·금융·방산 약어 70여 개를 표로 정리했고, ITAR·MTCR 같은 수출통제는 따로 깊게 다룹니다.",
  takeaways: [
    "산업 진단은 Porter 다이아몬드로 큰 그림을 잡고, 밸류체인×역량 매트릭스로 '어디에 돈을 넣을지'를 좁힌다.",
    "정책금융 갭 분석의 핵심 질문: 기업 생애주기·밸류체인 단계별로 '시장이 못 하는 금융'이 어디 비어 있는가.",
    "통계는 정의(매출 vs 생산, 항공제조 vs 우주활용, 방산 포함 여부)가 출처마다 달라 그대로 비교하면 틀린다.",
    "ITAR/EAR·MTCR 같은 수출통제는 수출 구조, 금융 가능성, 일정 리스크를 좌우하는 실무 변수다.",
    "약어 표(항공/우주/금융/방산·기관)는 인터뷰 전에 훑어보면 회의에서 바로 따라갈 수 있다."
  ],
  entries: [
    {
      id: "porter-diamond",
      title: "산업 경쟁력 진단: Porter 다이아몬드의 항공우주 적용",
      en: "Porter's Diamond for Aerospace",
      level: "기초",
      tags: ["프레임워크", "경쟁력진단"],
      summary: "요소조건·수요·연관산업·기업전략에 정부·기회를 더해 한국 항공우주 경쟁력을 진단",
      body: `<p>Porter 다이아몬드는 한 나라 산업의 경쟁 우위를 <strong>4개 결정요인 + 2개 외생변수</strong>로 설명합니다. 항공우주는 정부가 수요자이자 규제자, 투자자를 한꺼번에 맡는 산업이라 <span class="hl">'정부' 축의 비중이 다른 산업보다 훨씬 큽니다</span>.</p>
<table><thead><tr><th>요인</th><th>항공우주 진단 질문</th><th>한국 현황 가설(검증 필요)</th></tr></thead><tbody>
<tr><td>요소조건</td><td>엔지니어 인력, 시험·인증 인프라(풍동, 환경시험, 발사장), 소재(탄소복합재·티타늄)</td><td>설계 인력은 일정 수준이나 인증·시험 인프라와 소재 국산화는 약함</td></tr>
<tr><td>수요조건</td><td>국내 군 수요, 항공사 기단, 위성 수요의 규모와 까다로움</td><td>군 수요(KF-21, 위성) 중심이고 민수 완제기 수요는 사실상 없음</td></tr>
<tr><td>연관·지원산업</td><td>부품·소재·장비 공급망, MRO, 전자·SW</td><td>Tier 2~3 중소기업이 영세하고 Boeing·Airbus 구조물 하청 의존</td></tr>
<tr><td>기업 전략·구조·경쟁</td><td>체계종합사 수, 내부 경쟁, 수직계열화</td><td>KAI·한화 등 소수 대기업 과점 구조</td></tr>
<tr><td>정부</td><td>R&amp;D, 획득정책, 정책금융, 규제(우주항공청)</td><td>2024년 우주항공청 출범으로 거버넌스는 재편됐으나 금융 수단은 분산</td></tr>
<tr><td>기회</td><td>방산 수출 붐, NewSpace, 지정학</td><td>K-방산 수출 확대와 공급망 재편 기회</td></tr>
</tbody></table>
<p>실무 팁: 6개 축마다 <strong>정량 지표 2~3개와 정성 인터뷰 근거</strong>를 붙여 '레이더 차트'로 해외 벤치마크(미·프·일·이스라엘 등)와 겹쳐 보이면 경영진 보고용 한 장이 나옵니다. 축별 진단 결과는 <a data-ref="toolkit/gap-analysis">정책금융 갭 분석</a>으로 이어집니다.</p>`,
      facts: [
        { k: "원전", v: "M. Porter, The Competitive Advantage of Nations (1990)" },
        { k: "구성", v: "4개 결정요인 + 정부·기회" },
        { k: "항공우주 특이점", v: "정부가 수요자이자 규제자·투자자" }
      ],
      sowhat: "다이아몬드 6축 가운데 수은이 직접 움직일 수 있는 지렛대는 '정부(정책금융)'와 '연관산업(공급망 금융)'이다. 진단 결론을 이 두 축의 실행과제로 연결해야 보고서가 실행 가능해진다.",
      sources: []
    },
    {
      id: "vc-matrix",
      title: "밸류체인별 경쟁력 매트릭스 (역량 × 시장매력도)",
      en: "Capability × Attractiveness Matrix",
      level: "기초",
      tags: ["프레임워크", "포트폴리오", "밸류체인"],
      summary: "세부 밸류체인을 역량과 시장매력도 2축에 놓아 육성·선택·유지 영역을 가른다",
      body: `<p>GE-McKinsey 매트릭스를 응용한 도구입니다. 항공우주 밸류체인을 15~25개 세그먼트로 쪼개 <strong>X축 한국 역량</strong>, <strong>Y축 시장매력도</strong>에 배치합니다.</p>
<h4>축 구성 예시</h4>
<ul><li><strong>시장매력도</strong>: 글로벌 시장규모, 성장률(CAGR), 수익성(EBIT 마진), 진입장벽, 수출통제 리스크(역지표)</li>
<li><strong>한국 역량</strong>: 국내 매출·점유율, 기술수준(TRL, 최고국 대비 %), 수주잔고, 인증 보유(AS9100, Nadcap, TC), 핵심기업 수</li></ul>
<h4>세그먼트 예시</h4>
<table><thead><tr><th>구역</th><th>예시 세그먼트(가설)</th><th>전략 방향</th></tr></thead><tbody>
<tr><td>고역량·고매력</td><td>방산 완제기(경공격기·훈련기), 기체 구조물</td><td>수출 확대 금융 집중</td></tr>
<tr><td>저역량·고매력</td><td>항공엔진 부품, 소형위성 체계, 위성 데이터</td><td>선택적 육성(R&amp;D와 금융 패키지)</td></tr>
<tr><td>고역량·저매력</td><td>단순 가공 하청</td><td>효율화·고도화 유도</td></tr>
<tr><td>저역량·저매력</td><td>민항 대형 완제기 독자개발</td><td>참여형(RSP) 접근 위주</td></tr>
</tbody></table>
<p>버블 크기는 국내 매출 또는 고용, 색깔은 현재 수은 익스포저로 표시하면 <span class="hl">'지원은 어디에 쏠려 있고 기회는 어디에 있는가'</span>가 한눈에 보입니다.</p>`,
      facts: [
        { k: "원형", v: "GE-McKinsey 9-box" },
        { k: "권장 세그먼트 수", v: "15~25개" },
        { k: "버블 3번째 차원", v: "매출·고용·수은 여신잔액" }
      ],
      sowhat: "점수 가중치는 고객과 워크숍에서 합의해야 결과에 대한 반발이 줄어든다. 가중치를 바꿔도 결론이 유지되는지 민감도 분석을 꼭 붙인다.",
      sources: []
    },
    {
      id: "gap-analysis",
      title: "정책금융 지원 갭 분석 프레임",
      en: "Policy Finance Gap Analysis",
      level: "심화",
      tags: ["프레임워크", "정책금융", "수은"],
      summary: "기업 단계×밸류체인×금융상품 3차원 그리드로 시장실패 영역과 중복 영역을 찾는다",
      body: `<p>정책금융의 존재 이유는 <strong>시장실패 보완</strong>입니다. 갭 분석은 '필요한 금융(Needs)'과 '공급되는 금융(Supply)'을 같은 그리드에 놓고 차이를 찾는 작업입니다.</p>
<h4>3차원 그리드</h4>
<ul><li><strong>기업 생애주기</strong>: 창업·R&amp;D, 개발·인증, 양산 투자(Capex), 수출·수주, 해외 M&amp;A·현지화</li>
<li><strong>밸류체인</strong>: 소재·부품, 기체·엔진·전자, 체계종합, MRO, 위성·발사체, 서비스·데이터</li>
<li><strong>금융수단</strong>: 대출, 보증(RG/APG), 지분투자, 구매자금융, 보험, 펀드</li></ul>
<table><thead><tr><th>단계</th><th>주요 수요</th><th>공급 주체(예)</th><th>갭 가설</th></tr></thead><tbody>
<tr><td>R&amp;D·인증</td><td>장기·인내자본, 인증비</td><td>정부 R&amp;D, 정책펀드</td><td>상업화 직전 '죽음의 계곡' 자금</td></tr>
<tr><td>양산 Capex</td><td>설비·운전자금</td><td>시중은행, 산은, 수은</td><td>RSP 참여 시 장기 무수익 구간</td></tr>
<tr><td>수출 수주</td><td>RG·APG, 구매자금융</td><td>수은, 무보</td><td>대형 방산 수출 시 한도·신용 제약</td></tr>
<tr><td>NewSpace</td><td>지분·벤처대출</td><td>VC, 모태펀드</td><td>후속(Series B 이후) 대형 투자 부족</td></tr>
</tbody></table>
<p>분석 결과는 <strong>'공백(no supply)', '부족(insufficient size/tenor)', '중복(overlap)', '조건 부적합(가격·담보)'</strong> 네 가지로 분류합니다. 공급 측 현황은 <a data-ref="finance">정책금융 챕터</a>를 참고하세요.</p>`,
      facts: [
        { k: "분류", v: "공백·부족·중복·조건부적합" },
        { k: "데이터", v: "수은 여신 DB, 기업 인터뷰, 설문" }
      ],
      sowhat: "이 프레임이 프로젝트 결과물의 뼈대가 될 가능성이 높다. 기관 간(산은·무보·기보) 역할 중복을 정면으로 다루려면 수은 내부 정치를 감안한 표현 수위를 미리 맞춰 둘 필요가 있다.",
      sources: []
    },
    {
      id: "benchmark-template",
      title: "해외 벤치마킹 템플릿",
      en: "Global Benchmarking Template",
      level: "기초",
      tags: ["벤치마킹", "ECA", "템플릿"],
      summary: "국가·기관·상품·조건·성과 5열 표준 양식으로 해외 ECA와 우주 정책금융을 비교",
      body: `<p>벤치마킹은 '좋아 보이는 사례 모음'으로 흐르기 쉽습니다. 열을 고정한 표준 템플릿으로 <strong>비교 가능성</strong>을 확보하세요.</p>
<table><thead><tr><th>국가</th><th>기관</th><th>상품/프로그램</th><th>조건(금리·만기·커버)</th><th>성과·시사점</th></tr></thead><tbody>
<tr><td>미국</td><td>US EXIM, DoD OSC</td><td>항공기 구매자금융, 국방 공급망 대출</td><td>ASU 준수, 장기 대출</td><td>(조사 필요)</td></tr>
<tr><td>프랑스</td><td>Bpifrance AE, CNES</td><td>항공기 보증, 우주 펀드</td><td>(조사 필요)</td><td>(조사 필요)</td></tr>
<tr><td>영국</td><td>UKEF, NSSIF</td><td>방산·항공 수출보증</td><td>(조사 필요)</td><td>(조사 필요)</td></tr>
<tr><td>독일</td><td>Euler Hermes(Allianz Trade, 정부 위탁)</td><td>Hermes 보증</td><td>(조사 필요)</td><td>(조사 필요)</td></tr>
<tr><td>일본</td><td>JBIC, NEXI, JAXA</td><td>투자금융, JAXA 출자</td><td>(조사 필요)</td><td>(조사 필요)</td></tr>
</tbody></table>
<h4>추가로 수집할 열</h4>
<ul><li>법적 근거·거버넌스(부처, 이사회), 재원(정부출연, 채권)</li>
<li>대상 단계(R&amp;D, 양산, 수출), 리스크 분담 구조(보증 비율 %)</li>
<li>연간 공급 규모, 대표 딜, 실패·논란 사례</li></ul>
<p>위 표의 기관명은 예시이며, 프로그램 상세는 프로젝트 중 공식 자료로 채워야 합니다. 국가별 정책 개관은 <a data-ref="global">글로벌 챕터</a>를 참고하세요.</p>`,
      facts: [
        { k: "표준 열", v: "국가/기관/상품/조건/성과" },
        { k: "권장 대상국", v: "5~8개국" }
      ],
      sowhat: "고객(수은)이 가장 궁금해하는 것은 '해외 ECA가 하는데 우리는 못 하는 것'과 그 이유(법·자본·리스크 한도)다. 성과 열 옆에 '한국 도입 가능성'과 '필요한 제도 변경' 열을 꼭 덧붙인다.",
      sources: []
    },
    {
      id: "issue-tree",
      title: "이슈 트리 예시: 수은은 우주항공 경쟁력 강화를 위해 무엇을 해야 하나",
      en: "Issue Tree",
      level: "심화",
      tags: ["이슈트리", "MECE", "구조화"],
      summary: "핵심 질문을 '어디에·무엇으로·어떻게·얼마나'로 MECE하게 분해",
      body: `<p><strong>핵심 질문(SCQ의 Q)</strong>: 수은은 국내 우주·항공산업의 경쟁력을 높이려면 어떤 금융 역할을 어떤 규모로 맡아야 하는가?</p>
<ol>
<li><strong>Where: 어디에 지원해야 하나?</strong>
<ul><li>1.1 성장성과 전략성이 높은 세그먼트는? (<a data-ref="toolkit/vc-matrix">매트릭스</a>)</li>
<li>1.2 한국이 이길 수 있는 세그먼트는? (역량·TRL)</li>
<li>1.3 시장금융이 이미 충분한 곳은 제외되는가?</li></ul></li>
<li><strong>What: 어떤 수단이 필요한가?</strong>
<ul><li>2.1 현재 수은 상품으로 커버되는 수요는?</li>
<li>2.2 공백인 수요는? (지분, 인내자본, 구매자금융, RG 한도)</li>
<li>2.3 해외 ECA는 어떤 수단을 쓰는가?</li></ul></li>
<li><strong>How: 어떻게 운영해야 하나?</strong>
<ul><li>3.1 조직·심사 역량(전담조직, 기술심사)</li>
<li>3.2 유관기관(우주항공청, 방사청, 산은, 무보) 협업 구조</li>
<li>3.3 리스크 관리(한도, 수출통제, 국가신용)</li></ul></li>
<li><strong>How much: 얼마나, 언제?</strong>
<ul><li>4.1 향후 5~10년 자금 수요 추정</li>
<li>4.2 수은 자본·한도 여력</li>
<li>4.3 단계별 로드맵과 KPI</li></ul></li>
</ol>
<p>가지 하나마다 '필요한 분석', '데이터 소스', '담당자', '마감'을 붙이면 그대로 <strong>워크플랜</strong>이 됩니다.</p>`,
      facts: [
        { k: "원칙", v: "MECE(중복·누락 없음)" },
        { k: "1단계 분기", v: "Where / What / How / How much" }
      ],
      sowhat: "첫 주에 이슈 트리를 고객과 합의해 두면 범위가 늘어나는 것을 막을 수 있다. RFP(제안요청서) 과업 항목과 가지 하나하나를 맞춰 보는 대조표를 만들어 두라.",
      sources: []
    },
    {
      id: "hypothesis",
      title: "가설 기반 접근 예시",
      en: "Hypothesis-driven Approach",
      level: "심화",
      tags: ["가설", "Day-1 Answer"],
      summary: "Day-1 가설을 세우고 반증할 데이터부터 모으는 컨설팅 방식, 항공우주 예시 가설 6개",
      body: `<p>가설 기반 접근은 답을 먼저 세운 뒤 <strong>빠르게 검증하거나 버리는</strong> 방식입니다. 가설은 '반증 가능'하고 '맞으면 행동이 바뀌는' 문장이어야 합니다.</p>
<table><thead><tr><th>#</th><th>Day-1 가설</th><th>검증 방법</th><th>반증 신호</th></tr></thead><tbody>
<tr><td>H1</td><td>방산 완제기 수출은 RG·구매자금융 한도가 수주 제약 요인이다</td><td>수출 딜 사례, 체계사 인터뷰</td><td>한도 문제 없이 수주한 사례가 다수</td></tr>
<tr><td>H2</td><td>Tier 2~3 부품사는 RSP·신규 수주 시 Capex 장기자금이 부족하다</td><td>설문, 재무 분석(DART)</td><td>시중은행 조달에 문제 없음</td></tr>
<tr><td>H3</td><td>NewSpace 기업은 후속 대형투자(Series B 이후) 단계에서 자금이 끊긴다</td><td>투자 DB, VC 인터뷰</td><td>후속 투자 규모가 해외와 비슷</td></tr>
<tr><td>H4</td><td>정책금융 기관 간 우주항공 지원이 분산·중복돼 있다</td><td>기관별 상품 매핑</td><td>역할 분담이 명확함</td></tr>
<tr><td>H5</td><td>해외 ECA는 지분·펀드형 수단을 더 적극적으로 쓴다</td><td>벤치마킹</td><td>대출·보증 중심으로 비슷함</td></tr>
<tr><td>H6</td><td>수출통제(ITAR) 부품 의존이 제3국 수출과 금융의 리스크 요인이다</td><td>BOM 분석, 인터뷰</td><td>대체 공급망 확보됨</td></tr>
</tbody></table>
<p>가설은 2주마다 '확인/수정/폐기' 상태로 업데이트하는 <span class="hl">가설 트래커</span>로 관리하세요.</p>`,
      facts: [
        { k: "좋은 가설 조건", v: "반증 가능 + 의사결정 연결" },
        { k: "업데이트 주기", v: "1~2주 (권장)" }
      ],
      sowhat: "가설은 고객의 기대(수은 역할 확대)와 반대 방향 결론이 나올 수 있다. 반증되면 즉시 공유해서 최종 보고에서 고객이 놀라는 일이 없도록 하는 것이 신뢰 관리의 핵심이다.",
      sources: []
    },
    {
      id: "interview-company",
      title: "인터뷰 가이드 ① 기업용",
      en: "Interview Guide: Companies",
      level: "기초",
      tags: ["인터뷰", "기업"],
      summary: "체계종합사·부품사·NewSpace 기업에게 묻는 사업 현황, 자금 수요, 정책금융 경험 질문",
      body: `<p>60분 기준이며, 오프닝 5분, 본론 45분, 클로징 10분으로 나눕니다. 사전에 DART 공시와 기사로 기본 사실을 확인해 <strong>이미 공개된 내용은 묻지 않습니다</strong>.</p>
<h4>A. 사업·경쟁력</h4>
<ul><li>주력 제품과 고객(국내 군, 해외 OEM) 비중은? 3년 뒤 포트폴리오는 어떻게 바뀌나요?</li>
<li>해외 경쟁사 대비 강점과 약점은 무엇인가요? (원가, 품질, 인증, 납기)</li>
<li>수주를 놓친 최근 사례와 그 원인은?</li></ul>
<h4>B. 자금 수요</h4>
<ul><li>향후 3~5년 주요 투자(설비, R&amp;D, 인증, M&amp;A)와 대략적인 금액은?</li>
<li>RSP나 장기계약에서 투자 회수까지 걸리는 기간은?</li>
<li>수출 계약 시 요구받는 보증(RG/APG, 선급금 보증)의 규모와 조달 애로는?</li></ul>
<h4>C. 정책금융 경험</h4>
<ul><li>수은·산은·무보 등을 이용한 경험과 만족·불만 사항은? (금리, 한도, 속도, 담보, 서류)</li>
<li>해외 경쟁사가 자국 ECA에서 받는 지원 가운데 부러운 것은?</li>
<li>'이것 하나만 바뀌면 좋겠다'는 제도는?</li></ul>
<h4>D. 리스크</h4>
<ul><li>수출통제(ITAR/EAR) 부품 의존도와 승인에 걸리는 기간은?</li>
<li>공급망 병목(소재, 인력, 인증)은 어디인가요?</li></ul>`,
      facts: [
        { k: "권장 시간", v: "60분" },
        { k: "대상", v: "체계사·Tier1~3·NewSpace·MRO" },
        { k: "권장 표본", v: "15~30개사 (추정)" }
      ],
      sowhat: "기업은 발주처(수은)를 의식해 '지원 확대' 같은 원론적인 답을 하기 쉽다. '최근 거절된 딜', '포기한 수출' 같은 구체 사례를 물어야 갭을 정량화할 수 있다.",
      sources: []
    },
    {
      id: "interview-institution",
      title: "인터뷰 가이드 ② 기관·투자자용",
      en: "Interview Guide: Institutions & Investors",
      level: "기초",
      tags: ["인터뷰", "정부", "VC"],
      summary: "우주항공청·방사청·산은·무보·VC·해외 ECA에게 묻는 역할 분담, 정책 방향, 투자 시장 질문",
      body: `<table><thead><tr><th>대상</th><th>핵심 질문</th></tr></thead><tbody>
<tr><td>우주항공청·과기부</td><td>중장기 우주·항공 로드맵의 금융 수요, 민간 이양(발사·위성) 계획, 정책금융에 기대하는 역할</td></tr>
<tr><td>방위사업청·국방부</td><td>방산 수출 지원 체계, 정부 간 거래(G2G) 계약 시 금융 패키지 요구 사례, 절충교역·산업협력 운영</td></tr>
<tr><td>산업부</td><td>항공산업 발전 기본계획, 부품 국산화 지원, 수출통제 운영</td></tr>
<tr><td>산은·무보·기보·신보</td><td>항공우주 익스포저, 기관 간 역할 경계, 협조융자 구조</td></tr>
<tr><td>VC·PE</td><td>우주 스타트업 밸류에이션·후속투자 환경, 회수(IPO) 가능성, 정책 매칭펀드 수요</td></tr>
<tr><td>해외 ECA·은행</td><td>항공기금융(ASU) 시장 현황, 방산 수출금융 사례, 공동금융 가능성</td></tr>
<tr><td>수은 내부</td><td>현 항공우주 여신 규모, 내부 한도·심사 애로, 경영진 기대 결과물</td></tr>
</tbody></table>
<p>기관 인터뷰는 <strong>공식 입장과 비공식 인식의 차이</strong>를 찾는 것이 목적입니다. 메모는 '발언 / 해석 / 가설 연결' 3열로 정리하면 이후 종합 단계에서 효율적입니다.</p>`,
      facts: [
        { k: "메모 양식", v: "발언·해석·가설연결" },
        { k: "우주항공청 개청", v: "2024년 5월" }
      ],
      sowhat: "수은 내부 인터뷰(여신·심사·리스크 부서)를 초기에 해야 제약 조건(자본비율, 한도, 법적 업무범위)을 알고 실현 가능한 안을 설계할 수 있다.",
      sources: []
    },
    {
      id: "data-kr",
      title: "주요 데이터 소스 ① 국내",
      en: "Data Sources: Korea",
      level: "기초",
      tags: ["데이터", "통계", "DART"],
      summary: "KAIA 항공우주산업 통계, 우주산업실태조사, 국가지표, DART, 방산 통계의 용도와 주의점",
      body: `<table><thead><tr><th>소스</th><th>발행</th><th>내용</th><th>주의점</th></tr></thead><tbody>
<tr><td>항공우주산업 통계</td><td>한국항공우주산업진흥협회(KAIA)</td><td>항공우주 생산·수출·수입·고용, 기업별 실적</td><td>회원사 중심 집계, 방산 포함 여부 확인</td></tr>
<tr><td>우주산업실태조사</td><td>과기정통부·우주항공청 / 한국우주기술진흥협회</td><td>우주기기제작·우주활용 매출, 인력, 투자</td><td>'우주활용'에 위성방송 등이 들어가 규모가 커 보일 수 있음</td></tr>
<tr><td>국가지표체계(index.go.kr)</td><td>통계청 등</td><td>항공제조·우주산업 생산·수출 시계열(달러)</td><td>KAIA 원자료 기반, 단위가 달러</td></tr>
<tr><td>DART 전자공시</td><td>금융감독원</td><td>상장·외감 기업 재무, 수주, 사업보고서</td><td>사업부문 구분이 회사마다 다름</td></tr>
<tr><td>방산 통계·수출 실적</td><td>방위사업청, 한국방위산업진흥회(KDIA)</td><td>방산 매출, 수출 수주액</td><td>수주(계약) 기준과 매출(인도) 기준 혼동</td></tr>
<tr><td>무역통계</td><td>관세청·KITA</td><td>HS 8802(항공기·우주선), 8803(부분품), 8411(터빈엔진) 등</td><td>방산 물자는 누락·비공개 가능</td></tr>
</tbody></table>
<p>참고 수치(국가지표 기준): 2024년 항공제조산업 생산 <strong>약 57.3억 달러</strong>(전년 대비 약 +7.4%), 우주산업 생산 <strong>약 31.9억 달러</strong>(약 +0.1%). 언론에 인용된 우주항공청 집계로는 2024년 우주항공 참여기업 매출이 약 11.2조 원이며, 항공제조 68%, 우주활용 21%, 우주기기제작 10% 수준입니다(정의가 서로 달라 직접 비교하면 안 됩니다).</p>`,
      facts: [
        { k: "항공제조 생산(2024)", v: "약 57.3억 달러" },
        { k: "우주산업 생산(2024)", v: "약 31.9억 달러" },
        { k: "우주항공 매출(2024, 언론 인용)", v: "약 11.2조 원" }
      ],
      sowhat: "보고서 첫 장 시장규모 수치는 반드시 출처와 정의를 각주로 달아야 한다. 고객이 다른 통계를 들고 오면 신뢰가 바로 흔들린다.",
      sources: [
        { label: "국가지표체계 항공우주산업 지표", url: "https://www.index.go.kr/unify/idx-info.do?idxCd=1156" },
        { label: "DART 전자공시시스템", url: "https://dart.fss.or.kr" }
      ]
    },
    {
      id: "data-global",
      title: "주요 데이터 소스 ② 해외",
      en: "Data Sources: Global",
      level: "기초",
      tags: ["데이터", "Space Foundation", "OECD", "SIPRI"],
      summary: "Space Foundation, OECD, Teal Group, Cirium, SIPRI 등 글로벌 데이터 지도",
      body: `<table><thead><tr><th>소스</th><th>분야</th><th>대표 수치·용도</th><th>접근</th></tr></thead><tbody>
<tr><td>Space Foundation, The Space Report</td><td>우주경제</td><td>2024년 글로벌 우주경제 약 6,130억 달러(+7.8%), 상업 부문이 성장의 약 78%</td><td>요약 무료, 상세 유료</td></tr>
<tr><td>OECD, The Space Economy in Figures</td><td>우주 정책·예산</td><td>2023년 12월 2판 발간. OECD 정부 우주예산 약 750억 달러(2022, GDP의 약 0.1%)</td><td>무료</td></tr>
<tr><td>Novaspace(구 Euroconsult)</td><td>위성·발사 시장</td><td>정부 우주예산, 위성 수요 전망</td><td>유료</td></tr>
<tr><td>Teal Group</td><td>항공·방산</td><td>세계 군용기·민항기·UAV 생산 전망(10년)</td><td>유료</td></tr>
<tr><td>Cirium</td><td>민항</td><td>기단·주문·인도·항공기 가치, 리스 데이터</td><td>유료</td></tr>
<tr><td>SIPRI</td><td>방산</td><td>Arms Transfers DB, Top 100 방산기업. 2024년 Top100 매출 6,790억 달러, 한국 4개사 합계 141억 달러(+31%)</td><td>무료</td></tr>
<tr><td>Boeing CMO / Airbus GMF</td><td>민항 수요</td><td>20년 신규 항공기 수요 전망</td><td>무료</td></tr>
<tr><td>Oliver Wyman MRO Forecast</td><td>MRO</td><td>글로벌 MRO 시장 전망</td><td>요약 무료</td></tr>
</tbody></table>
<p>우주경제 규모는 기관마다 <strong>정의 범위(위성방송·GNSS 단말 포함 여부)</strong>가 달라 수천억 달러 차이가 납니다. 세계 시장 개관은 <a data-ref="global">글로벌 챕터</a>를 참고하세요.</p>`,
      facts: [
        { k: "글로벌 우주경제(2024)", v: "약 6,130억 달러 (Space Foundation)" },
        { k: "SIPRI Top100 매출(2024)", v: "6,790억 달러" },
        { k: "한국 4개사 방산매출(2024)", v: "141억 달러, +31%" }
      ],
      sowhat: "유료 DB(Teal, Cirium, Novaspace)는 Kearney 내부 구독 여부를 첫 주에 확인하라. 없다면 공개 요약본과 전문가 인터뷰로 대체 경로를 미리 설계해 둬야 한다.",
      sources: [
        { label: "Space Foundation, The Space Report 2025 Q2", url: "https://www.spacefoundation.org/2025/07/22/the-space-report-2025-q2/" },
        { label: "OECD, The Space Economy in Figures (2023)", url: "https://www.oecd.org/en/publications/2023/12/the-space-economy-in-figures_4c52ae39.html" },
        { label: "SIPRI Top 100 2024 관련 보도", url: "https://defence-industry.eu/?p=64460" }
      ]
    },
    {
      id: "kpi-industry",
      title: "핵심 KPI 사전 ① 산업·기업",
      en: "Industry KPIs",
      level: "기초",
      tags: ["KPI", "지표"],
      summary: "수주잔고, Book-to-Bill, 국산화율, TRL, 인도대수 등 항공우주 기업 분석 지표",
      body: `<table><thead><tr><th>KPI</th><th>정의</th><th>해석 포인트</th></tr></thead><tbody>
<tr><td>수주잔고(Backlog)</td><td>계약했으나 아직 매출로 인식하지 않은 금액</td><td>항공우주는 수년치 매출 가시성을 보여 주는 핵심 지표</td></tr>
<tr><td>Book-to-Bill</td><td>신규수주 ÷ 매출</td><td>1 초과면 잔고가 늘어나는 성장 국면</td></tr>
<tr><td>인도대수(Deliveries)</td><td>기간 중 인도된 기체 수</td><td>민항 OEM의 현금흐름과 직결</td></tr>
<tr><td>국산화율</td><td>국내 조달 부가가치 ÷ 전체</td><td>금액 기준인지 품목 기준인지 확인</td></tr>
<tr><td>TRL</td><td>기술성숙도 1~9단계</td><td>TRL 6~7 구간이 상용화 '죽음의 계곡'</td></tr>
<tr><td>수출비중</td><td>수출 매출 ÷ 총매출</td><td>내수(군) 의존도를 반대로 보여 줌</td></tr>
<tr><td>EBIT 마진</td><td>영업이익 ÷ 매출</td><td>구조물 하청은 낮고 엔진 애프터마켓은 높음</td></tr>
<tr><td>R&amp;D 집약도</td><td>R&amp;D ÷ 매출</td><td>정부 R&amp;D 포함 여부 구분</td></tr>
<tr><td>발사 성공률·발사단가</td><td>성공 발사 ÷ 시도, $/kg(LEO)</td><td>발사체 경쟁력 지표</td></tr>
<tr><td>위성 가동률·수명</td><td>운용 기간, 가용성</td><td>위성 서비스 수익성</td></tr>
</tbody></table>`,
      facts: [
        { k: "Book-to-Bill > 1", v: "잔고 증가(성장)" },
        { k: "TRL 체계", v: "1~9단계 (NASA 기원)" }
      ],
      sowhat: "방산은 '수주' 발표와 '매출' 인식 사이에 수년 시차가 있다. 정책금융 효과를 측정할 때는 수주 기준 KPI와 매출 기준 KPI를 함께 써야 한다.",
      sources: []
    },
    {
      id: "kpi-finance",
      title: "핵심 KPI 사전 ② 정책금융 성과",
      en: "Policy Finance KPIs",
      level: "심화",
      tags: ["KPI", "정책금융", "성과측정"],
      summary: "공급액, 레버리지 배수, 추가성, 수출 유발효과 등 정책금융 프로그램 성과 지표",
      body: `<p>정책금융 KPI는 <strong>투입 → 산출 → 성과 → 영향</strong>의 로직 모델로 설계합니다.</p>
<table><thead><tr><th>단계</th><th>KPI 예시</th><th>비고</th></tr></thead><tbody>
<tr><td>투입(Input)</td><td>공급액(여신·보증·투자), 지원 기업 수, 중소·중견 비중</td><td>가장 쉽게 측정되지만 성과는 아님</td></tr>
<tr><td>산출(Output)</td><td>지원 수출계약 건수·금액, 신규 Capex 규모</td><td>지원 딜 기준</td></tr>
<tr><td>성과(Outcome)</td><td>수출 증가율, 신규 고객(OEM) 진입, 매출·고용 증가</td><td>비지원 기업과 비교(DiD)</td></tr>
<tr><td>영향(Impact)</td><td>산업 국산화율, 글로벌 점유율, 공급망 안정성</td><td>귀속(Attribution) 어려움</td></tr>
<tr><td>건전성</td><td>연체율, 부실률, 위험조정수익(RAROC)</td><td>정책성과 건전성의 균형</td></tr>
<tr><td>추가성(Additionality)</td><td>정책금융이 없었으면 성사되지 않았을 딜의 비중</td><td>정책금융 정당성의 핵심</td></tr>
<tr><td>레버리지</td><td>민간 동반금융 ÷ 정책금융</td><td>펀드·협조융자 설계 시 중요</td></tr>
</tbody></table>`,
      facts: [
        { k: "로직 모델", v: "투입-산출-성과-영향" },
        { k: "핵심 정당성 지표", v: "추가성(Additionality)" }
      ],
      sowhat: "공급액 목표('5년간 ○조 원')만 제시하면 감사·국회에서 질타받기 쉽다. 추가성과 수출 유발효과를 같이 제시하는 KPI 체계가 제언의 설득력을 높인다.",
      sources: []
    },
    {
      id: "export-control-itar",
      title: "수출통제 ① ITAR·EAR (미국)",
      en: "ITAR / EAR",
      level: "심화",
      tags: ["수출통제", "ITAR", "EAR", "리스크"],
      summary: "미국산 부품·기술이 들어간 항공우주 제품은 제3국 수출 때 미국 승인이 필요할 수 있다",
      body: `<p>미국 수출통제는 두 축입니다. <strong>ITAR</strong>(International Traffic in Arms Regulations, 국무부 DDTC 소관)은 USML(미국 군수품목록)에 오른 국방물품·기술을, <strong>EAR</strong>(Export Administration Regulations, 상무부 BIS 소관)은 CCL(통제품목목록)의 이중용도 품목을 통제합니다.</p>
<table><thead><tr><th>구분</th><th>ITAR</th><th>EAR</th></tr></thead><tbody>
<tr><td>소관</td><td>국무부 DDTC</td><td>상무부 BIS</td></tr>
<tr><td>목록</td><td>USML 21개 카테고리 (예: VIII 항공기, XV 우주선)</td><td>CCL, ECCN (예: 9A515 우주선, 600 시리즈 군용품)</td></tr>
<tr><td>핵심 원칙</td><td>'See-through': 완제품에 ITAR 부품이 하나라도 있으면 재수출에 승인 필요</td><td>De minimis(미국산 비중 기준), 해외직접제품규칙(FDPR)</td></tr>
<tr><td>승인 형태</td><td>DSP-5, TAA, MLA</td><td>License, License Exception</td></tr>
</tbody></table>
<h4>항공우주에서 중요한 이유</h4>
<ul><li>상업위성 상당수는 2014년 개혁(ECR)으로 USML XV에서 EAR 9x515로 이관됐지만, 민감 위성·부품은 여전히 ITAR 대상입니다.</li>
<li>한국 방산 완제기(예: 경공격기)에 미국산 엔진·항전이 들어가면 제3국 수출 시 <span class="hl">미국 재수출 승인</span>이 필요하며, 이는 일정과 대상국을 제약하는 요인이 됩니다.</li>
<li>'ITAR-free' 설계는 유럽 위성 업계의 전략이었으며, 부품 국산화 논의와 연결됩니다.</li></ul>`,
      facts: [
        { k: "ITAR 소관", v: "미 국무부 DDTC" },
        { k: "EAR 소관", v: "미 상무부 BIS" },
        { k: "우주선 ECCN", v: "9A515 (2014년 신설)" },
        { k: "USML 우주", v: "Category XV" }
      ],
      sowhat: "수출금융 심사에서 '수출 승인(E/L) 미취득'은 계약 발효 지연과 RG 청구 리스크로 이어진다. 수은 심사 체크리스트에 미국 재수출 승인 여부와 예상 기간을 넣을 것을 제안할 수 있다.",
      sources: [
        { label: "BIS, Export Control (space.commerce.gov)", url: "https://www.space.commerce.gov/wp-content/uploads/BIS_EXPORT_CONTROL.pdf" },
        { label: "Federal Register 2014-10807 (9x515 신설)", url: "https://www.govinfo.gov/content/pkg/FR-2014-05-13/html/2014-10807.htm" }
      ]
    },
    {
      id: "export-control-mtcr",
      title: "수출통제 ② MTCR·바세나르 등 다자체제",
      en: "MTCR / Wassenaar",
      level: "심화",
      tags: ["수출통제", "MTCR", "바세나르", "발사체"],
      summary: "탑재중량 500kg·사거리 300km 이상 로켓·무인기는 MTCR 카테고리 I로 수출이 사실상 금지된다",
      body: `<p><strong>MTCR</strong>(Missile Technology Control Regime, 미사일기술통제체제)은 대량살상무기 운반수단 확산을 막기 위해 1987년 출범한 비공식·비조약 다자체제입니다. 회원국은 35개국이며 가입에는 전원 합의가 필요하고, 한국은 2001년에 가입했습니다.</p>
<table><thead><tr><th>구분</th><th>대상</th><th>통제 강도</th></tr></thead><tbody>
<tr><td>Category I</td><td>탑재중량 500kg 이상을 300km 이상 운반하는 완제 로켓·무인기와 주요 서브시스템(엔진, 재진입체 등)</td><td>'강한 거부 추정', 생산시설 이전은 금지</td></tr>
<tr><td>Category II</td><td>사거리 300km 이상 시스템(탑재중량 무관), 이중용도 부품·소재</td><td>회원국 재량, 건별 심사</td></tr>
</tbody></table>
<h4>항공우주에서 중요한 이유</h4>
<ul><li><strong>우주발사체 = 탄도미사일 기술</strong>이라 발사체·엔진 기술은 수출과 국제협력이 극도로 제한됩니다. 한국 발사체 개발이 '독자 개발'로 갈 수밖에 없었던 배경입니다.</li>
<li>대형 무인기(MALE/HALE)도 Category I에 걸릴 수 있습니다. 미국은 2020년 최고속도 800km/h 미만 무인기를 Category II로 취급하도록 해석을 바꿨습니다.</li></ul>
<h4>기타 다자체제</h4>
<ul><li><strong>바세나르 체제(Wassenaar Arrangement)</strong>: 재래식 무기와 이중용도 품목</li>
<li><strong>NSG</strong>(핵공급국그룹), <strong>호주그룹</strong>(생화학)</li>
<li>국내 이행: 대외무역법에 따른 <strong>전략물자 수출허가</strong>(산업부·방사청, 전략물자관리원)</li></ul>`,
      facts: [
        { k: "출범", v: "1987년" },
        { k: "회원국", v: "35개국" },
        { k: "한국 가입", v: "2001년" },
        { k: "Cat. I 기준", v: "500kg × 300km" }
      ],
      sowhat: "발사체·대형 무인기 수출금융은 정책금융으로 풀 수 있는 문제가 아니라 통제체제가 상한을 정한다. 우주 분야 금융 지원은 수출보다 국내 인프라, 위성·서비스 쪽에 무게를 두는 것이 현실적이다.",
      sources: [
        { label: "MTCR FAQ", url: "https://www.mtcr.info/en/faq" },
        { label: "Arms Control Association, MTCR at a Glance", url: "https://armscontrol.org/factsheets/mtcr" }
      ]
    },
    {
      id: "offset",
      title: "절충교역(산업협력) 실무 요약",
      en: "Offset / Industrial Cooperation",
      level: "심화",
      tags: ["방산", "절충교역", "Offset"],
      summary: "해외 무기 구매 시 기술이전·부품 수출 등 반대급부를 받는 제도로, 한국은 받는 쪽이자 주는 쪽이다",
      body: `<p><strong>절충교역(Offset)</strong>은 국외 무기·장비를 살 때 판매자에게 기술이전, 국산 부품 구매(수출), 공동생산 같은 반대급부를 요구하는 제도입니다. 근거는 방위사업법 제20조입니다.</p>
<ul><li><strong>직접 절충</strong>: 구매 무기와 직접 관련된 부품 생산·기술이전 (예: 전투기 구매 시 동체 부품 제작)</li>
<li><strong>간접 절충</strong>: 구매 무기와 무관한 품목 구매나 투자</li></ul>
<h4>최근 동향</h4>
<ul><li>2017년 미국 FMS 구매에 대한 절충교역 의무가 폐지되면서 실적이 크게 줄었습니다.</li>
<li>2024년 10월 지침이 개정돼 우수 중소기업 참여분은 절충교역 가치를 최대 5배까지 인정받습니다. 같은 해 11월 F-15K·F-35A 성능개량 등 30개 대상사업이 공고됐습니다.</li>
<li>2025년 미국 USTR이 무역장벽 보고서에서 한국 절충교역 의무를 문제로 지적했습니다. 한미 상호국방조달협정(RDP-A)과 연계된 논의가 진행 중입니다.</li>
<li>산업부는 '산업협력분야 절충교역'으로 추천대상 수요조사를 계속하고 있습니다(2026년 공고 확인).</li></ul>
<p>반대로 <span class="hl">한국이 수출할 때는 폴란드·중동 등 구매국이 현지생산·기술이전 형태의 절충을 요구</span>하므로, 현지 합작법인 투자금융 수요가 생깁니다.</p>`,
      facts: [
        { k: "근거", v: "방위사업법 제20조" },
        { k: "미 FMS 의무 폐지", v: "2017년" },
        { k: "중소기업 가치 인정", v: "최대 5배 (2024.10 개정)" }
      ],
      sowhat: "K-방산 수출에서 구매국의 현지화 요구가 커질수록 해외 합작법인 출자·현지 공장 PF 같은 해외투자금융 수요가 늘어난다. 이는 수은 고유 영역과 맞닿는 기회다.",
      sources: [
        { label: "방사청 30개 절충교역 사업 공고(2024.11)", url: "https://v.daum.net/v/20241102070224954" },
        { label: "이투데이, 美 절충교역 문제 제기", url: "https://www.etoday.co.kr/news/view/2457987" }
      ]
    },
    {
      id: "glossary-aviation",
      title: "용어사전 ① 항공",
      en: "Glossary: Aviation",
      level: "기초",
      tags: ["용어사전", "항공"],
      summary: "OEM, MRO, TC/STC, PMA, RSP, Tier 구조 등 항공 산업 필수 약어 20개",
      body: `<table><thead><tr><th>약어</th><th>원어</th><th>의미·맥락</th></tr></thead><tbody>
<tr><td>OEM</td><td>Original Equipment Manufacturer</td><td>완제기·엔진 제조사(Boeing, Airbus, GE, P&amp;W 등)</td></tr>
<tr><td>Tier 1/2/3</td><td>Supplier Tier</td><td>OEM 직납 대형 협력사 / 그 하위 부품사 / 가공·소재사</td></tr>
<tr><td>MRO</td><td>Maintenance, Repair &amp; Overhaul</td><td>정비·수리·분해점검. 애프터마켓의 핵심</td></tr>
<tr><td>TC</td><td>Type Certificate</td><td>형식증명. 항공기 설계가 감항기준에 맞음을 당국이 인증</td></tr>
<tr><td>STC</td><td>Supplemental Type Certificate</td><td>부가형식증명. 기존 TC 기체의 개조 인증(화물기 개조 등)</td></tr>
<tr><td>PMA</td><td>Parts Manufacturer Approval</td><td>FAA 부품제작승인. OEM 외 대체부품 시장</td></tr>
<tr><td>RSP</td><td>Risk Sharing Partnership</td><td>국제공동개발 위험분담. 개발비를 분담하고 판매 수익을 나눔</td></tr>
<tr><td>BASA</td><td>Bilateral Aviation Safety Agreement</td><td>항공안전협정. 상호 인증 인정 범위 결정</td></tr>
<tr><td>FAA / EASA / KOCA</td><td>-</td><td>미국·유럽·한국 항공당국(감항인증)</td></tr>
<tr><td>AS9100</td><td>-</td><td>항공우주 품질경영 표준(ISO 9001 기반)</td></tr>
<tr><td>Nadcap</td><td>National Aerospace and Defense Contractors Accreditation Program</td><td>특수공정(열처리·도금·NDT) 인증</td></tr>
<tr><td>Aerostructure</td><td>-</td><td>동체·날개·꼬리 등 기체 구조물</td></tr>
<tr><td>Avionics</td><td>-</td><td>항공전자(항법·통신·비행제어)</td></tr>
<tr><td>Narrowbody / Widebody</td><td>-</td><td>단일통로(A320, 737) / 복수통로(787, A350)</td></tr>
<tr><td>BCA / BDS</td><td>Boeing Commercial Airplanes / Defense, Space &amp; Security</td><td>보잉의 민항 / 방산 사업부</td></tr>
<tr><td>UAM / AAM</td><td>Urban / Advanced Air Mobility</td><td>도심·지역 항공교통(eVTOL)</td></tr>
<tr><td>eVTOL</td><td>electric Vertical Take-Off and Landing</td><td>전기 수직이착륙기</td></tr>
<tr><td>SAF</td><td>Sustainable Aviation Fuel</td><td>지속가능항공유</td></tr>
<tr><td>LLP</td><td>Life Limited Parts</td><td>수명한계부품. 엔진 가치 산정의 핵심</td></tr>
<tr><td>Offset</td><td>Offset / 절충교역</td><td><a data-ref="toolkit/offset">절충교역 항목</a> 참조</td></tr>
</tbody></table>`,
      facts: [{ k: "수록", v: "20개" }],
      sowhat: "",
      sources: []
    },
    {
      id: "glossary-space",
      title: "용어사전 ② 우주",
      en: "Glossary: Space",
      level: "기초",
      tags: ["용어사전", "우주"],
      summary: "LEO/GEO, SAR, EO, TRL, NewSpace, Rideshare 등 우주 산업 필수 약어 18개",
      body: `<table><thead><tr><th>약어</th><th>원어</th><th>의미·맥락</th></tr></thead><tbody>
<tr><td>LEO</td><td>Low Earth Orbit</td><td>저궤도(약 2,000km 이하). 군집위성(Starlink)과 관측위성</td></tr>
<tr><td>MEO</td><td>Medium Earth Orbit</td><td>중궤도. GPS 등 항법위성</td></tr>
<tr><td>GEO</td><td>Geostationary Orbit</td><td>정지궤도(약 35,786km). 통신·기상위성</td></tr>
<tr><td>SSO</td><td>Sun-Synchronous Orbit</td><td>태양동기궤도. 지구관측 위성이 주로 사용</td></tr>
<tr><td>SAR</td><td>Synthetic Aperture Radar</td><td>합성개구레이더. 야간·악천후에도 관측</td></tr>
<tr><td>EO</td><td>Electro-Optical</td><td>전자광학(광학) 관측 위성</td></tr>
<tr><td>GNSS / PNT</td><td>Global Navigation Satellite System / Positioning, Navigation, Timing</td><td>위성항법(GPS, KPS) / 위치·항법·시각 서비스</td></tr>
<tr><td>TRL</td><td>Technology Readiness Level</td><td>기술성숙도 1~9단계</td></tr>
<tr><td>NewSpace</td><td>-</td><td>민간 주도·저비용·빠른 반복 개발의 우주산업 패러다임</td></tr>
<tr><td>OldSpace</td><td>-</td><td>정부 주도·고신뢰·장기 개발 방식</td></tr>
<tr><td>Rideshare</td><td>-</td><td>여러 위성을 한 발사체에 실어 발사비를 분담</td></tr>
<tr><td>Upstream / Downstream</td><td>-</td><td>위성·발사체 제조 / 위성 데이터·서비스 활용</td></tr>
<tr><td>Ground Segment</td><td>-</td><td>지상국·관제·데이터 처리</td></tr>
<tr><td>Payload / Bus</td><td>-</td><td>임무장비 / 위성 본체(전력·자세제어 등)</td></tr>
<tr><td>CubeSat</td><td>-</td><td>10cm 단위(1U) 초소형 위성 규격</td></tr>
<tr><td>ISP</td><td>Specific Impulse</td><td>비추력. 로켓 엔진 효율 지표(초)</td></tr>
<tr><td>SSA / STM</td><td>Space Situational Awareness / Space Traffic Management</td><td>우주상황인식 / 우주교통관리(우주쓰레기 대응)</td></tr>
<tr><td>KASA</td><td>Korea AeroSpace Administration</td><td>우주항공청(2024년 5월 개청)</td></tr>
</tbody></table>`,
      facts: [{ k: "수록", v: "18개" }],
      sowhat: "",
      sources: []
    },
    {
      id: "glossary-finance",
      title: "용어사전 ③ 금융",
      en: "Glossary: Finance",
      level: "기초",
      tags: ["용어사전", "금융", "ECA"],
      summary: "ECA, ASU, CIRR, RG/APG, PF, JOLCO, EETC 등 항공우주 금융 약어 20개",
      body: `<table><thead><tr><th>약어</th><th>원어</th><th>의미·맥락</th></tr></thead><tbody>
<tr><td>ECA</td><td>Export Credit Agency</td><td>수출신용기관(수은, 무보, US EXIM, Bpifrance 등)</td></tr>
<tr><td>OECD Arrangement</td><td>Arrangement on Officially Supported Export Credits</td><td>공적수출신용 협약. 최저금리·만기·보험료 규율</td></tr>
<tr><td>ASU</td><td>Aircraft Sector Understanding</td><td>항공기 부문 양해. 항공기 수출금융 조건(보험료·만기·LTV) 규정. 2025년 4월 MRO·부품 계약 규율 추가</td></tr>
<tr><td>CIRR</td><td>Commercial Interest Reference Rate</td><td>상업참고금리. ECA 직접대출 고정금리 하한</td></tr>
<tr><td>MPR</td><td>Minimum Premium Rate</td><td>최저보험료율(국가·신용위험)</td></tr>
<tr><td>Cape Town Convention</td><td>-</td><td>이동장비 국제담보 협약. 항공기 담보 집행력 강화</td></tr>
<tr><td>RG</td><td>Refund Guarantee</td><td>선수금환급보증. 납기 불이행 시 선수금 반환 보증</td></tr>
<tr><td>APG / PG</td><td>Advance Payment Guarantee / Performance Guarantee</td><td>선급금보증 / 이행보증</td></tr>
<tr><td>Buyer's Credit</td><td>구매자신용</td><td>수입자에게 대출해 한국 제품 구매를 지원</td></tr>
<tr><td>Supplier's Credit</td><td>공급자신용</td><td>수출자의 연불채권을 금융화</td></tr>
<tr><td>PF</td><td>Project Finance</td><td>사업 현금흐름을 상환 재원으로 하는 금융</td></tr>
<tr><td>JOLCO</td><td>Japanese Operating Lease with Call Option</td><td>일본 투자자 세제 혜택을 쓰는 항공기 리스 구조</td></tr>
<tr><td>EETC</td><td>Enhanced Equipment Trust Certificate</td><td>항공기 담보부 트랜치 채권(미국 항공사 중심)</td></tr>
<tr><td>Operating / Finance Lease</td><td>-</td><td>운용리스 / 금융리스</td></tr>
<tr><td>SLB</td><td>Sale and Leaseback</td><td>보유 항공기 매각 후 재임차</td></tr>
<tr><td>LTV</td><td>Loan to Value</td><td>담보가치 대비 대출비율</td></tr>
<tr><td>G2G</td><td>Government-to-Government</td><td>정부 간 거래(방산 수출에 흔함)</td></tr>
<tr><td>RAROC</td><td>Risk-Adjusted Return on Capital</td><td>위험조정 자본수익률</td></tr>
<tr><td>Blended Finance</td><td>-</td><td>공공 재원으로 민간 투자 위험을 낮추는 혼합금융</td></tr>
<tr><td>Additionality</td><td>추가성</td><td>정책금융이 없었다면 일어나지 않았을 효과</td></tr>
</tbody></table>
<p>금융 상품 상세는 <a data-ref="finance">정책금융 챕터</a>를 참고하세요.</p>`,
      facts: [
        { k: "수록", v: "20개" },
        { k: "ASU MRO 개정 발효", v: "2025-04-02" }
      ],
      sowhat: "방산 수출은 OECD 협약 적용 대상이 아니어서(군수품 제외) 조건 설계 재량이 넓다. 그만큼 경쟁국 ECA와의 '금융 조건 경쟁'이 치열하다.",
      sources: [
        { label: "Council Decision (EU) 2025/542 (ASU 개정)", url: "https://eur-lex.europa.eu/eli/dec/2025/542/oj/eng" },
        { label: "LexisNexis, OECD MRO disciplines in ASU", url: "https://www.lexisnexis.co.uk/legal/news/oecd-introduces-new-disciplines-for-mro-contracts-in-the-sector-understanding-on-export-credits-for-civil" }
      ]
    },
    {
      id: "glossary-defense",
      title: "용어사전 ④ 방산·기관·제도",
      en: "Glossary: Defense & Institutions",
      level: "기초",
      tags: ["용어사전", "방산", "기관"],
      summary: "DAPA, ADD, KARI, FMS/DCS, ITAR, MTCR, KF-21 등 방산·기관 약어 18개",
      body: `<table><thead><tr><th>약어</th><th>원어</th><th>의미·맥락</th></tr></thead><tbody>
<tr><td>KEXIM</td><td>Export-Import Bank of Korea</td><td>한국수출입은행(1976년 설립)</td></tr>
<tr><td>K-SURE</td><td>Korea Trade Insurance Corporation</td><td>한국무역보험공사</td></tr>
<tr><td>KDB</td><td>Korea Development Bank</td><td>한국산업은행</td></tr>
<tr><td>DAPA</td><td>Defense Acquisition Program Administration</td><td>방위사업청</td></tr>
<tr><td>ADD</td><td>Agency for Defense Development</td><td>국방과학연구소</td></tr>
<tr><td>KARI</td><td>Korea Aerospace Research Institute</td><td>한국항공우주연구원</td></tr>
<tr><td>KASA</td><td>Korea AeroSpace Administration</td><td>우주항공청</td></tr>
<tr><td>KAIA</td><td>Korea Aerospace Industries Association</td><td>한국항공우주산업진흥협회</td></tr>
<tr><td>KAI</td><td>Korea Aerospace Industries</td><td>한국항공우주산업(KF-21, FA-50)</td></tr>
<tr><td>FMS</td><td>Foreign Military Sales</td><td>미국 정부 대 정부 무기판매</td></tr>
<tr><td>DCS</td><td>Direct Commercial Sales</td><td>미국 방산업체와의 직접 상업구매</td></tr>
<tr><td>ITAR / EAR</td><td>-</td><td>미국 수출통제(<a data-ref="toolkit/export-control-itar">상세</a>)</td></tr>
<tr><td>MTCR</td><td>Missile Technology Control Regime</td><td>미사일기술통제체제(<a data-ref="toolkit/export-control-mtcr">상세</a>)</td></tr>
<tr><td>WA</td><td>Wassenaar Arrangement</td><td>재래식무기·이중용도 수출통제 체제</td></tr>
<tr><td>TAA</td><td>Technical Assistance Agreement</td><td>ITAR 기술지원 협정 승인</td></tr>
<tr><td>MALE / HALE</td><td>Medium / High Altitude Long Endurance</td><td>중고도 / 고고도 장기체공 무인기</td></tr>
<tr><td>KF-21</td><td>보라매</td><td>한국형 전투기(KAI 체계종합)</td></tr>
<tr><td>RDP-A</td><td>Reciprocal Defense Procurement Agreement</td><td>상호국방조달협정(한미 협의 중)</td></tr>
</tbody></table>`,
      facts: [{ k: "수록", v: "18개" }],
      sowhat: "",
      sources: []
    },
    {
      id: "storyline",
      title: "최종 보고서 스토리라인 골격",
      en: "Deliverable Storyline",
      level: "심화",
      tags: ["보고서", "피라미드", "스토리라인"],
      summary: "현황진단, 벤치마킹, 갭, 전략방향, 실행과제, 로드맵 순서의 6막 구성 예시",
      body: `<p>피라미드 원칙에 따라 <strong>결론을 먼저 말하고 근거를 아래에 두는</strong> 구조입니다. 장마다 제목을 '거버닝 메시지(한 문장 결론)'로 씁니다.</p>
<ol>
<li><strong>Executive Summary</strong>: 한 장 안에 SCQA와 핵심 제언 3~5개</li>
<li><strong>산업 현황 진단</strong>: 글로벌 시장, 한국 포지션, Porter 다이아몬드</li>
<li><strong>밸류체인별 기회</strong>: 역량×매력도 매트릭스, 우선 세그먼트</li>
<li><strong>해외 벤치마킹</strong>: ECA·정부 지원 모델 5~8개국</li>
<li><strong>정책금융 갭과 수은 역할 정의</strong>: 갭 맵, 기관 간 역할 분담</li>
<li><strong>전략 방향과 실행과제</strong>: 신상품, 조직, 프로세스, 협업, 리스크관리</li>
<li><strong>로드맵과 KPI</strong>: 단기(1년)·중기(3년)·장기(5~10년), 성과지표</li>
</ol>
<p>거버닝 메시지 예시(가설): <em>"한국 항공우주는 방산 수출이 성장을 이끌지만, 부품·NewSpace 생태계의 금융 공백이 지속 성장의 병목이다."</em></p>`,
      facts: [
        { k: "원칙", v: "피라미드 원칙(Barbara Minto)" },
        { k: "도입 구조", v: "SCQA" }
      ],
      sowhat: "중간보고 때부터 최종 목차를 고정해 두면 매주 '어느 장의 어느 근거를 채우는지' 진척 관리가 쉬워진다.",
      sources: []
    },
    {
      id: "sizing",
      title: "시장 규모·자금 수요 약식 추정법",
      en: "Quick Sizing",
      level: "심화",
      tags: ["추정", "Fermi", "자금수요"],
      summary: "Top-down과 Bottom-up을 교차 검증해 5~10년 항공우주 금융 수요를 추정한다",
      body: `<h4>Top-down</h4>
<ul><li>글로벌 시장규모 × 한국 목표 점유율 → 한국 매출 목표</li>
<li>매출 증가분 × (Capex/매출 비율 + 운전자본/매출 비율) → 투자 수요</li>
<li>투자 수요 × 외부조달 비중 × 정책금융 분담률 → 정책금융 수요</li></ul>
<h4>Bottom-up</h4>
<ul><li>방산 수출 파이프라인(국가·기종·대수·단가) × 금융 동반 비율 → 수출금융 수요</li>
<li>주요 기업 투자계획(공시·인터뷰) 합산 → Capex 금융 수요</li>
<li>위성·발사 국가사업 일정 × 민간 참여분 → 우주 금융 수요</li></ul>
<table><thead><tr><th>변수</th><th>가정 출처</th></tr></thead><tbody>
<tr><td>Capex/매출</td><td>상장사 DART 3~5년 평균</td></tr>
<tr><td>정책금융 분담률</td><td>수은 여신 실적, 인터뷰</td></tr>
<tr><td>금융 동반 비율</td><td>과거 방산 수출 딜 사례</td></tr>
</tbody></table>
<p>두 방법의 결과가 <strong>±30% 안</strong>에 들어오면 대체로 수용 가능한 수준으로 봅니다(실무 관행, 엄밀한 기준은 아님). 모든 가정은 별도 '가정 시트'로 관리하세요.</p>`,
      facts: [
        { k: "교차검증", v: "Top-down vs Bottom-up" },
        { k: "허용 오차(관행)", v: "±30% (추정)" }
      ],
      sowhat: "'수은이 ○조 원을 공급해야 한다'는 숫자는 보고서에서 가장 많이 인용된다. 가정 하나만 바뀌어도 크게 움직이므로 시나리오(보수·기준·적극)로 제시해야 안전하다.",
      sources: []
    },
    {
      id: "pitfalls",
      title: "온보딩 체크리스트 & 흔한 함정",
      en: "Onboarding Checklist & Pitfalls",
      level: "기초",
      tags: ["체크리스트", "함정"],
      summary: "첫 주에 할 일과 항공우주·정책금융 프로젝트에서 자주 하는 실수 모음",
      body: `<h4>첫 주 체크리스트</h4>
<ul><li>RFP·제안서·계약 과업범위를 읽고 이슈 트리에 대응시키기</li>
<li>수은 조직도와 카운터파트(사업부서, 리스크, 기획) 파악</li>
<li>유료 DB 접근 확인(Teal, Cirium, Novaspace, S&amp;P/Capital IQ)</li>
<li>최근 2년 정부 계획(우주항공청 로드맵, 항공산업 발전계획, 방산수출 전략) 읽기</li>
<li>약어 사전(이 챕터) 훑어보기</li></ul>
<h4>흔한 함정</h4>
<table><thead><tr><th>함정</th><th>예방</th></tr></thead><tbody>
<tr><td>매출·생산·수주 수치 혼용</td><td>지표 정의표를 따로 관리</td></tr>
<tr><td>우주경제 규모를 기관끼리 직접 비교</td><td>정의 범위(방송·단말 포함 여부)를 각주로 표기</td></tr>
<tr><td>방산과 민수 혼합</td><td>보고서에 방산/민항/우주 3분류를 일관되게 적용</td></tr>
<tr><td>환율 기준 불일치</td><td>연평균 환율로 통일하고 명시</td></tr>
<tr><td>수출통제 리스크 간과</td><td>세그먼트 매력도 평가에 반영</td></tr>
<tr><td>타 기관 역할 침범 제언</td><td>법적 업무범위(수은법) 확인 후 제언</td></tr>
<tr><td>대외비 정보 취급</td><td>방산 수출 파이프라인은 보안 등급 확인</td></tr>
</tbody></table>`,
      facts: [{ k: "핵심 원칙", v: "정의·출처·기준연도 명시" }],
      sowhat: "방산 관련 자료는 보안 이슈가 있어 고객이 공유를 꺼릴 수 있다. 초기에 NDA와 자료 취급 원칙을 합의해 두면 일정 지연을 막을 수 있다.",
      sources: []
    }
  ]
});

window.ADB = window.ADB || { chapters: [] };
window.ADB.chapters.push({
  id: "briefing",
  no: 1,
  title: "미션 브리핑: 프로젝트 맥락",
  en: "Mission Briefing",
  icon: "rocket",
  color: "#FF4F00",
  intro: "한국수출입은행(수은)이 2026년 8월 발주하고 AT커니(Kearney)가 우선협상대상자로 보도된 '우주·항공산업 경쟁력 강화를 위한 컨설팅 용역'의 맥락을 정리한다. 공개 보도로 확인된 사실과 유사 용역 경험에 기반한 추정을 엔트리마다 [확인됨]/[추정]으로 구분했다. 기준일은 2026-11-07이다.",
  takeaways: [
    "[확인됨] 수은은 2026.8.11 약 18억원·3개월 규모로 용역을 발주했고, 과업에는 글로벌 앵커기업 육성 방안·단계별 로드맵·소요재원 조달 방안이 포함됐다.",
    "[확인됨] 수은은 KAI 최대주주(26.41%)이고, 한화그룹이 2026.8 지분을 15.89%로 늘려 2대주주가 된 직후 발주돼 'KAI 민영화·매각 전초전' 논란이 있다.",
    "[확인됨] 행장은 국감(2026.10.20)에서 '매각 전제 아님, 지분 처분은 과업 범위에 없음'이라 답했으나 '앞으로의 계획은 단정 어렵다'며 여지를 남겼다.",
    "[추정] 겉으로는 '정책금융기관으로서 우주항공 지원 역할'을 설계하는 용역이지만, 실제 쟁점은 KAI를 축으로 한 산업 구조·지배구조 옵션이 될 가능성이 크다.",
    "따라서 정치적 민감도·이해충돌 관리·정보보안이 분석 품질만큼 중요하다. 표현 하나도 보도될 수 있다는 전제로 일하라."
  ],
  entries: [
    {
      id: "project-overview",
      title: "용역 개요: 무엇이 발주되었나",
      en: "Engagement Overview",
      level: "기초",
      tags: ["확인됨", "용역", "KAI"],
      summary: "수은 발주, 약 18억원·3개월, AT커니 우선협상대상자(보도 기준)",
      body: `<p><strong>[확인됨 - 언론 보도 기준]</strong> 한국수출입은행은 <span class="hl">2026년 8월 11일</span> '우주·항공산업 경쟁력 강화를 위한 컨설팅 용역'을 발주했다. 사업예산은 <strong>약 18억원</strong>, 용역기간은 <strong>계약일로부터 3개월 이내</strong>다.</p>
<ul>
<li>보도된 제안요청서(RFP) 과업: 국내외 우주·항공산업 현황 분석, <strong>글로벌 우주·항공 앵커기업 육성 방안</strong>, 단계별 이행 로드맵, 사업별 우선순위, <strong>소요재원 및 조달방안</strong>.</li>
<li>수행사: 데일리안 등은 <strong>AT커니가 우선협상대상자로 선정돼 후속 절차 진행 중</strong>이라 보도(2026.10 하순). 앞서 딜사이트는 BCG가 유력하다고 보도한 바 있어 초기 보도가 엇갈렸다.</li>
<li>일정: 9월 우선협상대상자 선정, 10월 중 계약 예정이라는 보도가 있었다. 실제 계약일·착수일은 공개 정보 미확인.</li>
<li>보도상 발주 배경: 행장은 '재정경제부와 협의해 제안을 받은 것'이라고 국감에서 설명.</li>
</ul>
<p>[추정] 11월 착수 시 종료는 2027년 1~2월경. 나라장터 공고문 원문은 이번 조사에서 직접 확인하지 못했다.</p>`,
      facts: [
        { k: "발주", v: "2026.8.11 (보도)" },
        { k: "예산", v: "약 18억원" },
        { k: "기간", v: "계약 후 3개월 이내" },
        { k: "수행사", v: "AT커니 우협 (보도, 2026.10)" },
        { k: "핵심 과업", v: "앵커기업 육성·로드맵·재원조달" }
      ],
      sowhat: "18억원/3개월은 국내 공공 전략용역 치고 큰 편이라 '규모 과다' 비판이 이미 나왔다. 산출물의 밀도와 근거 수준이 그만큼 높게 요구될 것이다.",
      sources: [
        { label: "데일리안 - 수은 당장 매각 없다면서도 여지", url: "https://m.dailian.co.kr/news/view/1706749/" },
        { label: "YTN - 우주항공 산업 컨설팅 용역 추진안", url: "https://www.ytn.co.kr/_ln/0101_202610200513386331" },
        { label: "딜사이트", url: "https://dealsite.co.kr/articles/169644" }
      ]
    },
    {
      id: "kai-governance-context",
      title: "숨은 맥락: KAI 지배구조 논쟁",
      en: "KAI Governance Debate",
      level: "심화",
      tags: ["확인됨", "KAI", "한화", "지배구조"],
      summary: "한화 2대주주 부상 직후 발주돼 '민영화 전초전' 의혹이 제기됨",
      body: `<p><strong>[확인됨]</strong> 수은은 한국항공우주산업(KAI)의 <strong>최대주주(26.41%)</strong>다. 한화그룹(한화에어로스페이스 9.90%, 한화시스템 4.98%, 한화에어로스페이스USA 1.01%)은 2026년 8월 지분을 <strong>15.89%</strong>로 늘려 국민연금(8.75%)을 제치고 2대주주가 됐다. 공정위는 8.31 기업결합을 승인하면서 '현 지분으로는 경영 지배력 행사 불가, 최대주주가 되거나 이사회 영향력이 커지면 재심사'라는 취지로 판단했다.</p>
<table><thead><tr><th>주체</th><th>입장(보도 기준)</th></tr></thead><tbody>
<tr><td>수은(황기연 행장)</td><td>민영화·매각 전제 아님, 지분 처분은 과업에 없음. 단 향후 계획은 단정 어려움</td></tr>
<tr><td>KAI 노조</td><td>용역 과업·선정과정·이해충돌 점검 공개 요구, 독립경영 보장 촉구(11.3 1,300여명 3차 상경집회)</td></tr>
<tr><td>국회</td><td>3개월 내 마무리 배경, 특정기업 유리한 '앵커기업' 설계 우려, 방산 독과점 우려</td></tr>
<tr><td>KAI</td><td>민영화에 선을 그음</td></tr>
</tbody></table>
<p>노조는 한화에어로스페이스가 AT커니 출신 인사를 영입한 이력을 이해충돌 근거로 들었으나, 이것만으로 실제 이해충돌이 확인된 것은 아니다.</p>`,
      facts: [
        { k: "수은 KAI 지분", v: "26.41%" },
        { k: "한화 KAI 지분", v: "15.89% (2026.8)" },
        { k: "국민연금", v: "8.75%" },
        { k: "공정위 승인", v: "2026.8.31" }
      ],
      sowhat: "이 용역은 '산업정책 용역'인 동시에 '최대주주의 전략 검토'로 읽힌다. 모든 옵션 분석은 중립성·근거 추적성을 갖춰야 하고, 내부 자료 유출은 곧 정치 이슈가 된다.",
      sources: [
        { label: "녹색경제신문 - KAI 노조 3차 집회", url: "https://www.greened.kr/news/articleView.html?idxno=353757" },
        { label: "뉴데일리 - 공정위 판단", url: "https://biz.newdaily.co.kr/site/data/html/2026/08/31/2026083100274.html" },
        { label: "SBS Biz - 한화 KAI 지분 15.89%", url: "https://biz.sbs.co.kr/amp/article/20000327739" },
        { label: "마이데일리 - KAI 지배구조 논란 재점화", url: "https://www.mydaily.co.kr/page/view/2026110310185481263" },
        { label: "SBS Biz - 행장 KAI 지분 매각 계획 없어", url: "https://biz.sbs.co.kr/amp/article/20000341020" }
      ]
    },
    {
      id: "kexim-overview",
      title: "한국수출입은행 개요와 법적 근거",
      en: "Export-Import Bank of Korea (KEXIM)",
      level: "기초",
      tags: ["확인됨", "정책금융", "ECA"],
      summary: "1976년 설립, 한국수출입은행법에 근거한 공적 수출신용기관(ECA)",
      body: `<p><strong>[확인됨 - 일반 공개정보]</strong> 수은은 <strong>한국수출입은행법</strong>에 따라 1976년 설립된 특수은행이자 한국의 대표 <strong>공적 수출신용기관(ECA, Export Credit Agency)</strong>이다. 정부가 최대주주이며, 주무부처는 기획재정부 개편 이후 <strong>재정경제부</strong>로 보도된다.</p>
<h4>주요 업무</h4>
<ul>
<li><strong>수출금융</strong>: 수출 기업 대상 대출(제작금융, 선박·플랜트 등 중장기 수출자금).</li>
<li><strong>구매자금융(Buyer's Credit)</strong>: 해외 발주처·외국 정부에 대출. 방산 G2G 수출(예: 폴란드 K2·K9·천무)에서 핵심.</li>
<li><strong>보증</strong>: 이행성 보증(RG, 선수금환급보증 등), 금융보증.</li>
<li><strong>해외투자·해외사업금융</strong>, 공급망안정화기금 운영, <strong>EDCF</strong>(대외경제협력기금) 위탁 운용.</li>
<li><strong>지분 보유</strong>: KAI 최대주주 등 정책적 출자.</li>
</ul>
<p>2025년 3월 말 총여신 잔액은 약 138조원(대출:보증 약 7:3)으로 보도됐다. 무역보험공사(K-SURE)가 '보험', 수은이 '직접 대출·보증'을 맡는 이원 ECA 체계다.</p>`,
      facts: [
        { k: "설립", v: "1976년" },
        { k: "근거법", v: "한국수출입은행법" },
        { k: "법정자본금 한도", v: "25조원 (2024 개정)" },
        { k: "총여신", v: "약 138조원 (2025.3말, 보도)" },
        { k: "주무부처", v: "재정경제부 (2026, 보도)" }
      ],
      sowhat: "수은은 '돈을 빌려주는 ECA'이자 'KAI 주주'라는 두 모자를 쓰고 있다. 용역 결론이 금융상품 설계인지, 지분·산업구조 전략인지에 따라 다뤄야 할 법·규제가 크게 달라진다.",
      sources: [
        { label: "뉴스토마토 - 수은 정책금융", url: "https://www.newstomato.com/ReadNews.aspx?no=1231837" }
      ]
    },
    {
      id: "kexim-capital",
      title: "자본금 한도와 신용공여 제약",
      en: "Capital Ceiling & Single-Obligor Limit",
      level: "심화",
      tags: ["확인됨", "자본금", "방산수출"],
      summary: "2024.2 법정자본금 15조→25조, 동일차주 한도(자기자본 40%)가 병목",
      body: `<p><strong>[확인됨]</strong> 국회는 <strong>2024년 2월 29일</strong> 수은 법정자본금 한도를 <strong>15조원에서 25조원</strong>으로 늘리는 수은법 개정안을 가결했다. 2014년 이후 10년간 15조원에 묶여 있었고 2023년 말 소진율이 98.5%에 달했다는 지적이 배경이다.</p>
<ul>
<li><strong>병목</strong>: 은행법·수은법상 <strong>동일 차주 신용공여 한도(자기자본의 40%)</strong>. 폴란드 1차 방산 계약 지원으로 이 한도가 소진되면서 2차 실행계약 금융이 막혔던 것이 개정의 직접 계기였다.</li>
<li>당시 국회에는 25조~50조원 여러 안이 있었고 25조원으로 절충됐다.</li>
<li>2026년 초 보도에서도 '단순 증액만으로 중장기 방산·전략수출 금융 수요를 감당할 수 있는지' 의문이 제기되며, <strong>방산 전용 기금</strong> 법안(추미애 의원안), <strong>전략수출금융 플랫폼</strong> 법안(한정애 의원안)이 발의돼 있다(입법 진행상황 미확인).</li>
</ul>`,
      facts: [
        { k: "개정 의결", v: "2024.2.29" },
        { k: "한도", v: "15조 → 25조원" },
        { k: "동일차주 한도", v: "자기자본의 40%" },
        { k: "개정 전 소진율", v: "98.5% (2023말, 보도)" }
      ],
      sowhat: "'소요재원 및 조달방안'이 RFP에 들어간 이유와 연결된다. 대형 우주항공 프로젝트를 수은 대차대조표만으로 감당할지, 기금·민간 신디케이션·출자 회수 등 외부 재원을 쓸지가 핵심 설계 변수다.",
      sources: [
        { label: "SBS Biz - 수은 자본금 25조원으로 증액", url: "https://biz.sbs.co.kr/amp/article/20000159234" },
        { label: "비즈한국", url: "https://bizhankook.com/articles/27172.html" },
        { label: "뉴스토마토 - 방산 전용 기금 조성 시급", url: "https://newstomato.com/ReadNews.aspx?no=1296955" }
      ]
    },
    {
      id: "kexim-aero-defense-track",
      title: "수은의 방산·항공우주 지원 실적",
      en: "KEXIM Track Record in A&D",
      level: "심화",
      tags: ["일부 확인", "방산", "공급망"],
      summary: "폴란드 방산 구매자금융이 대표 사례, 우주 분야 실적은 공개 집계 미확인",
      body: `<p><strong>[확인됨]</strong></p>
<ul>
<li><strong>폴란드 방산 수출금융</strong>: K2 전차 등 1·2차 실행계약 구매자금융 지원(자본금 증액의 직접 계기). 하나은행 등 시중은행과의 협조융자(예: 2025.11 유럽向 3억 유로) 구조 활용.</li>
<li><strong>방산 공급망</strong>: 2026년 방위산업진흥회와 상생협력 MOU, 4월 LIG 등 대표 방산기업 5곳과 협력사 대금결제 지원 협약, 8월까지 약 1,200억원 지원. 공급망안정화기금과 함께 방산·공급망 벤처펀드 약 1,125억원 추진(보도).</li>
<li><strong>KAI 지분</strong>: 최대주주(26.41%)로서 항공 완제기 산업의 사실상 정책 앵커 역할.</li>
</ul>
<p><strong>[공개 정보 미확인]</strong> 우주(위성·발사체) 분야 수은 금융지원 실적의 공식 집계, 수은 내 방산·우주 전담 조직 존재 여부는 이번 조사에서 확인하지 못했다. 언론은 수은 정책금융이 특정 그룹(한화)에 쏠렸다는 지적도 한 바 있다.</p>`,
      facts: [
        { k: "대표 사례", v: "폴란드 K2·K9·천무 금융" },
        { k: "협력사 대금지원", v: "약 1,200억원 (2026.8, 보도)" },
        { k: "방산·공급망 펀드", v: "약 1,125억원 추진 (보도)" },
        { k: "우주 분야 실적", v: "공개 집계 미확인" }
      ],
      sowhat: "킥오프 후 가장 먼저 받을 데이터: 최근 5년 A&D 여신·보증 잔액, 차주·국가·상품별 분해. 이것이 '금융 지원 갭 분석'의 베이스라인이 된다.",
      sources: [
        { label: "뉴스토마토 - K방산 최종병기는 금융", url: "https://newstomato.com/ReadNews.aspx?no=1287510" },
        { label: "데일리안 - 하나은행 K-방산 3억 유로", url: "https://www.dailian.co.kr/news/view/1579960" }
      ]
    },
    {
      id: "why-kexim-aerospace",
      title: "수은은 왜 우주항공을 보는가",
      en: "Why Aerospace, Why Now",
      level: "기초",
      tags: ["추정", "So-what", "방산수출"],
      summary: "방산 수출 반등, 자본 여력, KAI 지분, 정부 우주경제 드라이브의 교차점",
      body: `<p><strong>[확인된 사실 + 추론]</strong> 다음 요인들이 겹친다.</p>
<ol>
<li><strong>방산 수출 규모화</strong>: 방산 수주는 2022년 약 173억달러 → 2023년 약 135억 → 2024년 약 95억 → <strong>2025년 약 152억달러(정부 발표)</strong>로 반등. 방산 4사 수주잔고 100조원 상회(보도). 항공(FA-50, KUH 헬기 등) 수출은 대형 구매자금융 수요를 만든다.</li>
<li><strong>자본 여력</strong>: 2024년 자본금 한도 25조원 확대로 신규 분야를 볼 여력이 생겼다.</li>
<li><strong>정부 정책</strong>: 우주항공청 개청(2024.5)과 예산 확대(2026년 약 1.12조원, 2027 정부안 약 1.65조원), 우주항공 5대 강국 목표.</li>
<li><strong>뉴스페이스</strong>: 위성·발사 서비스 민간화로 프로젝트파이낸스·수출금융 수요가 생기는 단계.</li>
<li><strong>KAI 지분 관리</strong> [추정]: 최대주주로서 장기 보유 전략, 산업 재편 시 역할 정립 필요.</li>
</ol>
<p>행장 공식 설명: '국내외 현황을 분석해 우주항공 분야에서 <strong>정책금융기관 역할</strong>을 어떻게 할지 의견을 들어보려는 것'.</p>`,
      facts: [
        { k: "방산 수주 2025", v: "약 152억달러 (정부 발표)" },
        { k: "방산 수주 2024", v: "약 95억달러" },
        { k: "KASA 예산 2026", v: "약 1조 1,201억원" }
      ],
      sowhat: "공식 명분(정책금융 역할)과 시장이 보는 실질(KAI 구조) 사이 간극을 인지하라. 보고서 프레이밍은 공식 명분을 축으로 하되, 구조 옵션 분석을 배제하지 않는 설계가 현실적이다.",
      sources: [
        { label: "SBS Biz - 행장 국감 답변", url: "https://biz.sbs.co.kr/amp/article/20000341020" },
        { label: "뉴스토마토 - K방산 영업익 5조", url: "https://newstomato.com/ReadNews.aspx?no=1286068" }
      ]
    },
    {
      id: "policy-background",
      title: "정책 배경: 우주항공·방산 정책 지형",
      en: "Policy Landscape",
      level: "기초",
      tags: ["정책", "KASA", "기본계획"],
      summary: "KASA 개청, 우주개발진흥기본계획, 항공산업발전 기본계획, 방산 수출 비전",
      body: `<table><thead><tr><th>정책·기구</th><th>핵심 내용</th><th>확인</th></tr></thead><tbody>
<tr><td>우주항공청(KASA)</td><td>2024.5.27 경남 사천 개청. 우주·항공 R&amp;D 및 산업 육성 총괄</td><td>확인됨</td></tr>
<tr><td>KASA 예산</td><td>2026년 1조 1,201억원(+16.1%, R&amp;D 9,495억원), 2027 정부안 1조 6,491억원</td><td>확인됨(보도)</td></tr>
<tr><td>제4차 우주개발진흥기본계획</td><td>2023~2027 계획, '우주경제 로드맵'·5대 우주강국 비전(2022.12 수립)</td><td>기억 기반, 원문 재확인 필요</td></tr>
<tr><td>제3차 항공산업발전 기본계획</td><td>2021~2030, 항공우주산업개발 촉진법 근거, 산업부 소관</td><td>확인됨</td></tr>
<tr><td>제4차 항공정책 기본계획</td><td>2025~2029, 국토부, '초일류 항공강국'(운송·안전 중심)</td><td>확인됨(보도)</td></tr>
<tr><td>방산 수출 비전</td><td>'세계 4대 방산 수출국' 목표(2023 제시)</td><td>추정(정권 교체 후 표현 변화 가능)</td></tr>
<tr><td>입법 동향</td><td>우주산업진흥법·위성활용촉진법 제정 추진(2026)</td><td>확인됨(보도)</td></tr>
</tbody></table>
<p>2025~2026 정부조직 개편으로 기재부가 재정경제부·기획예산처로 나뉘고, 산업부 명칭도 변경(산업통상부)된 것으로 보인다. 부처 명칭은 킥오프에서 최신 기준으로 통일하라.</p>`,
      facts: [
        { k: "KASA 개청", v: "2024.5.27" },
        { k: "KASA 2026 예산", v: "1조 1,201억원" },
        { k: "KASA 2027 정부안", v: "1조 6,491억원" }
      ],
      sowhat: "정책금융 설계는 상위 계획의 목표·KPI와 정렬돼야 승인된다. 용역 로드맵의 목표 연도와 지표는 이들 계획과 맞춰라.",
      sources: [
        { label: "뉴시스 - 우주항공 R&D 9,495억원", url: "https://mobile.newsis.com/view/NISX20260102_0003463538" },
        { label: "뉴스토마토 - 우주청 내년 예산 1.6조", url: "https://newstomato.com/ReadNews.aspx?no=1312172" },
        { label: "아시아경제 - 산업진흥법 제정 추진", url: "https://view.asiae.co.kr/article/2026021110453311679" },
        { label: "파이낸셜뉴스 - 제4차 항공정책 기본계획", url: "https://www.fnnews.com/news/202512101123313155" }
      ]
    },
    {
      id: "scope-hypothesis",
      title: "용역 범위 가설: 무엇을 답해야 하나",
      en: "Scope Hypothesis",
      level: "심화",
      tags: ["추정", "과업", "앵커기업"],
      summary: "RFP 4대 과업(확인)을 7개 모듈로 분해한 작업 가설",
      body: `<p>RFP 과업 4개(현황 분석 / 앵커기업 육성 / 로드맵·우선순위 / 재원조달)는 <strong>[확인됨]</strong>. 아래 분해는 <strong>[추정 - 유사 정책금융 전략 용역 기반]</strong>이다.</p>
<table><thead><tr><th>모듈</th><th>핵심 질문</th></tr></thead><tbody>
<tr><td>1. 산업 진단</td><td>국내 우주·항공 밸류체인(기체·엔진·항전·위성·발사체·MRO)별 규모·역량·격차</td></tr>
<tr><td>2. 글로벌 벤치마크</td><td>Airbus, Embraer, Saab, Leonardo 등 '국가 앵커' 형성 경로, 각국 정부·ECA 역할</td></tr>
<tr><td>3. 앵커기업 모델</td><td>'글로벌 앵커'의 정의, 국내 후보, 통합·제휴·전문화 등 구조 옵션</td></tr>
<tr><td>4. 해외 ECA 벤치마킹</td><td>US EXIM, UKEF, Bpifrance, EDC, JBIC 등의 A&amp;D·우주 금융 수단</td></tr>
<tr><td>5. 금융 갭 분석</td><td>개발·양산·수출·M&amp;A 단계별 자금수요 대비 현 공급 갭</td></tr>
<tr><td>6. 수은 역할·상품 설계</td><td>신규 상품(개발자금, 위성 PF, 방산 구매자금융 확대, 출자펀드), 조직·KPI</td></tr>
<tr><td>7. 로드맵·재원</td><td>단계별 이행, 우선순위, 소요재원 규모와 조달(자본, 기금, 신디케이션)</td></tr>
</tbody></table>
<p>'앵커기업'이 KAI 단독 육성인지, 다수 기업 육성인지, 통합인지가 가장 민감한 경계다. RFP 원문으로 정확한 문구를 반드시 확인하라.</p>`,
      facts: [
        { k: "RFP 과업(확인)", v: "4개" },
        { k: "작업 모듈(추정)", v: "7개" }
      ],
      sowhat: "'소요재원 및 조달방안'이 있다는 것은 산업 리포트가 아니라 투자·금융 계획서를 요구한다는 뜻이다. 숫자(재원 규모, 단계별 투입)가 최종보고서의 무게중심이 될 것이다.",
      sources: [
        { label: "코리안센터 - 재경부 협의 용역 진행", url: "https://www.koreancenter.or.kr/news/articleView.html?idxno=1427225" }
      ]
    },
    {
      id: "workplan",
      title: "워크스트림과 12주 일정 가설",
      en: "Workstreams & 12-Week Plan",
      level: "심화",
      tags: ["추정", "일정", "PMO"],
      summary: "3개월을 진단-설계-로드맵 3단계, 4개 워크스트림으로 운영하는 가설",
      body: `<p><strong>[추정]</strong> 착수일 미확인. 계약 후 3개월 기준 일반적 구조.</p>
<table><thead><tr><th>주차</th><th>단계</th><th>주요 활동</th><th>게이트</th></tr></thead><tbody>
<tr><td>1~2</td><td>착수·진단</td><td>킥오프, 자료요청, 인터뷰 착수, 가설 트리</td><td>착수보고</td></tr>
<tr><td>3~5</td><td>진단·벤치마크</td><td>밸류체인 진단, 글로벌 앵커·ECA 벤치마크, 금융수요 추정</td><td>-</td></tr>
<tr><td>6</td><td>중간 정리</td><td>시사점·갭 확정, 옵션 롱리스트</td><td>중간보고</td></tr>
<tr><td>7~9</td><td>설계</td><td>앵커기업 모델·옵션 평가, 금융상품·조직·KPI 설계</td><td>-</td></tr>
<tr><td>10~11</td><td>로드맵</td><td>우선순위, 단계별 이행, 소요재원·조달</td><td>-</td></tr>
<tr><td>12</td><td>종료</td><td>최종보고, 요약본, 이해관계자 보고</td><td>최종보고</td></tr>
</tbody></table>
<p>워크스트림(가설): <strong>WS1 산업·시장 진단</strong> / <strong>WS2 글로벌 벤치마크(기업·ECA)</strong> / <strong>WS3 앵커기업·구조 옵션</strong> / <strong>WS4 정책금융 상품·재원·실행</strong>. 국감·노조 이슈 대응을 위한 커뮤니케이션 관리를 PMO에 붙이는 것이 현실적이다.</p>`,
      facts: [
        { k: "기간", v: "약 12주 (가설)" },
        { k: "보고 게이트", v: "착수·중간·최종 (가설)" }
      ],
      sowhat: "3개월은 빠듯하다. 1주차에 데이터 요청서와 인터뷰 일정이 잡히지 않으면 중간보고가 문헌 요약으로 끝난다.",
      sources: []
    },
    {
      id: "deliverables",
      title: "예상 산출물",
      en: "Expected Deliverables",
      level: "기초",
      tags: ["추정", "산출물"],
      summary: "착수·중간·최종보고서와 요약본, 데이터북, 로드맵",
      body: `<p><strong>[추정 - 공공 용역 관행 기반]</strong></p>
<ul>
<li><strong>착수보고서</strong>: 과업 이해, 방법론, 가설 트리, 일정, 인터뷰 계획.</li>
<li><strong>중간보고서</strong>: 국내외 산업 현황, 밸류체인별 경쟁력 평가, 글로벌 앵커·ECA 벤치마크, 금융 갭.</li>
<li><strong>최종보고서</strong>: 앵커기업 육성 방안(옵션 비교), 정책금융 역할·상품·조직·KPI, 단계별 로드맵, 소요재원·조달방안.</li>
<li><strong>경영진 요약본</strong>(10~20p)과 대외 공개 가능 버전 분리 가능성.</li>
<li><strong>데이터북</strong>: 시장규모·재무·금융수요 추정 모델(엑셀).</li>
</ul>
<p>노조·국회가 용역 결과 공개를 요구하고 있어, <strong>공개용/내부용 이원화</strong> 요구가 생길 가능성이 높다 [추정].</p>`,
      facts: [],
      sowhat: "최종 산출물이 국회 자료요구로 공개될 수 있다는 전제로 문장을 쓰라. 근거 출처·가정·한계를 명시한 보고서가 방어력이 높다.",
      sources: []
    },
    {
      id: "kearney",
      title: "커니(Kearney) 회사 소개",
      en: "Kearney",
      level: "기초",
      tags: ["컨설팅", "A&D"],
      summary: "1926년 시카고 기원의 글로벌 전략컨설팅사, 2020년 'Kearney'로 리브랜딩",
      body: `<p><strong>[일반 공개정보]</strong> 커니는 1926년 미국 시카고에서 시작된 글로벌 경영컨설팅사로, 2020년 'A.T. Kearney'에서 <strong>'Kearney'</strong>로 사명을 바꿨다. 파트너십 형태로 운영되며 오퍼레이션·구매(Procurement)·공급망 역량이 전통적 강점이다.</p>
<ul>
<li><strong>A&amp;D 역량</strong>: 글로벌 Aerospace &amp; Defense 프랙티스 운영, 방산 공급망·조달·오프셋, 항공 MRO, 국가 방산 산업화 전략(특히 중동 국부·방산 육성 프로젝트) 경험이 알려져 있다. 2023년 항공(aviation) 섹터 역량 확대를 발표했다.</li>
<li>세계 우주항공 산업 동향 리포트를 정기 발간.</li>
<li><strong>서울 오피스</strong>: 국내 대기업·공공 프로젝트 수행. 국내 A&amp;D 전담 조직 규모는 공개 정보 미확인.</li>
</ul>`,
      facts: [
        { k: "설립", v: "1926년 (시카고)" },
        { k: "사명 변경", v: "2020년 Kearney" },
        { k: "강점", v: "오퍼레이션·조달·공급망" }
      ],
      sowhat: "커니의 글로벌 A&D 네트워크(벤치마크 사례, 해외 전문가 인터뷰)를 1주차에 확보하라. 3개월 안에 해외 ECA·앵커기업 벤치마크의 차별성은 거기서 나온다.",
      sources: [
        { label: "PR Newswire - Kearney aviation 역량 확대", url: "https://prnewswire.com/news-releases/kearney-announces-expansion-of-aviation-sector-expertise-and-capabilities-301816736.html" }
      ]
    },
    {
      id: "stakeholder-map",
      title: "이해관계자 맵",
      en: "Stakeholder Map",
      level: "기초",
      tags: ["이해관계자", "정부", "기업"],
      summary: "발주처·정부·금융·기업·연구기관·노조·국회까지 다층적 이해관계",
      body: `<table><thead><tr><th>그룹</th><th>주체</th><th>관심사(추정)</th></tr></thead><tbody>
<tr><td>발주처</td><td>수출입은행(행장, 기획·방산/산업금융 부서)</td><td>정책금융 역할 정립, KAI 지분 전략, 리스크</td></tr>
<tr><td>재정·금융</td><td>재정경제부(수은 주무), 금융위</td><td>재정 부담, 자본 확충, 공공기관 지분 정책</td></tr>
<tr><td>산업·기술</td><td>산업통상부, 과기정통부, <strong>우주항공청(KASA)</strong></td><td>항공산업발전계획, 우주경제, R&amp;D</td></tr>
<tr><td>국방</td><td>국방부, <strong>방위사업청</strong></td><td>전력화·방산수출, 기술보호, 독과점</td></tr>
<tr><td>타 정책금융</td><td>한국무역보험공사(K-SURE), 산업은행, 정책펀드</td><td>역할 분담·중복</td></tr>
<tr><td>기업</td><td><strong>KAI</strong>, 한화에어로스페이스·한화시스템, LIG, 대한항공 항공우주, 위성·발사 스타트업</td><td>지배구조, 금융 접근, 수출 지원</td></tr>
<tr><td>연구·협회</td><td>KARI(한국항공우주연구원), KAIA(한국항공우주산업진흥협회), 방산진흥회</td><td>산업 데이터, 생태계</td></tr>
<tr><td>사회·정치</td><td>KAI 노조, 국회 기재위·국방위, 경남·사천 지역</td><td>고용·독립경영·지역경제</td></tr>
</tbody></table>`,
      facts: [],
      sowhat: "공정위가 '최대주주 변동·이사회 영향력 확대 시 재심사'를 예고했으므로 공정위도 잠재 이해관계자다. 구조 옵션 평가에 경쟁법 관점을 빠뜨리지 마라.",
      sources: []
    },
    {
      id: "kickoff-questions",
      title: "킥오프 전 가설 질문 20",
      en: "Pre-Kickoff Hypothesis Questions",
      level: "심화",
      tags: ["추정", "질문", "킥오프"],
      summary: "발주처 의도·범위·데이터·민감이슈를 가르는 20개 질문",
      body: `<h4>목적·범위</h4>
<ol>
<li>이번 용역의 1차 의사결정자와 보고 라인은? (행장 / 재정경제부 / 그 이상)</li>
<li>'글로벌 앵커기업'의 정의와 범위: KAI 중심인가, 복수 기업인가?</li>
<li>KAI 지분 관련 옵션 분석은 명시적으로 제외인가, 시나리오로는 허용인가?</li>
<li>'우주'와 '항공'의 비중은? 방산(군용기) 포함 범위는?</li>
<li>결과물의 공개 범위(국회 제출·대외 발표 여부)?</li>
</ol>
<h4>금융·재원</h4>
<ol start="6">
<li>수은의 현 A&amp;D 여신·보증·출자 잔액과 5년 추이는?</li>
<li>동일차주 한도 등 현 제약이 실제로 걸린 사례는?</li>
<li>'소요재원'은 정부 재정까지 포함하나, 수은 재원만인가?</li>
<li>방산 전용 기금·전략수출금융 법안에 대한 수은 입장은?</li>
<li>K-SURE·산은과의 역할 분담 원칙은?</li>
<li>신규 상품 설계 시 내부 리스크·자본 규제(BIS 비율) 허용 범위는?</li>
</ol>
<h4>산업·이해관계</h4>
<ol start="12">
<li>KASA·방사청·산업부와 사전 협의된 내용이 있는가?</li>
<li>KAI·한화 등 기업 인터뷰는 수은이 주선하나?</li>
<li>참조해야 할 기존 연구(KIET, KARI, 수은 해외경제연구소)는?</li>
<li>해외 벤치마크 우선 국가(미·프·영·스웨덴·브라질·이스라엘)?</li>
<li>우주 분야 금융수요가 실재하는 프로젝트(위성 수출, 발사 서비스)는?</li>
</ol>
<h4>운영·리스크</h4>
<ol start="17">
<li>보안 등급: 방산 기술·군사 정보 취급 시 보안서약·자료 반출 규정은?</li>
<li>이해충돌 점검 결과와 팀 구성 제약(전직 이력 등)은?</li>
<li>국감·노조 문의 대응 창구는? 컨설턴트 대외 접촉 규칙은?</li>
<li>중간보고 일정과 수은 내부 의사결정 일정(이사회, 정부 협의)은?</li>
</ol>`,
      facts: [{ k: "질문 수", v: "20개" }],
      sowhat: "2·3·5번 질문의 답이 프로젝트 전체 톤을 결정한다. 킥오프 첫 30분 안에 PM을 통해 정리되도록 하라.",
      sources: []
    },
    {
      id: "first-week-checklist",
      title: "투입 첫 주 체크리스트",
      en: "First-Week Checklist",
      level: "기초",
      tags: ["온보딩", "실행"],
      summary: "RFP·제안서 정독부터 자료요청·인터뷰 섭외까지 5일 루틴",
      body: `<ul>
<li><strong>D1</strong>: RFP·제안서·계약 과업지시서 정독, '앵커기업'·'재원' 문구 원문 확인. 보안서약·이해충돌 확인서 처리.</li>
<li><strong>D1</strong>: 용역 관련 보도(국감 회의록 포함) 타임라인 정리.</li>
<li><strong>D2</strong>: 자료요청서(RDL) 발송: A&amp;D 여신 데이터, 내부 연구, 조직도, KAI 관련 이사회 자료(가능 범위).</li>
<li><strong>D2</strong>: KAI·한화에어로·LIG 최근 사업보고서·IR 자료 핵심 수치 정리(매출, 수주잔고, 수출 비중).</li>
<li><strong>D3</strong>: 정책 문서 수집: 우주개발진흥기본계획, 항공산업발전 기본계획, KASA 업무계획, 방산수출 관련 계획.</li>
<li><strong>D3</strong>: 커니 글로벌 A&amp;D 프랙티스 연결, 기존 사례·전문가 확보.</li>
<li><strong>D4</strong>: 인터뷰 대상 리스트 확정·섭외 요청, 인터뷰 가이드 초안.</li>
<li><strong>D5</strong>: 가설 트리 v1, 착수보고서 목차, 주간 보고 양식 확정.</li>
</ul>
<p>개인 학습: 이 백과사전의 <a data-ref="basics">기초 챕터</a>, <a data-ref="finance">정책금융 챕터</a>, <a data-ref="korea">한국 산업 챕터</a>를 1~2일 내 통독.</p>`,
      facts: [],
      sowhat: "첫 주의 산출물은 '아는 것'이 아니라 '받을 데이터와 만날 사람'이 확정된 상태다.",
      sources: []
    },
    {
      id: "interview-targets",
      title: "인터뷰 대상 후보",
      en: "Interview Long-list",
      level: "기초",
      tags: ["추정", "인터뷰"],
      summary: "수은 내부·정부·기업·금융·전문가 5그룹 약 25~35명 후보",
      body: `<table><thead><tr><th>그룹</th><th>후보(직위 예시)</th><th>확인할 것</th></tr></thead><tbody>
<tr><td>수은 내부</td><td>여신 본부장, 방산·항공 담당 부서, 리스크관리, 해외경제연구소, KAI 지분 관리 부서</td><td>실적·제약·내부 의도</td></tr>
<tr><td>정부</td><td>재정경제부 정책금융 담당, KASA 산업 국장, 방사청 수출 담당, 산업통상부 항공 담당</td><td>정책 방향·예산·우선순위</td></tr>
<tr><td>기업</td><td>KAI 전략·재무, 한화에어로/시스템 전략, LIG, 대한항공 항공우주, 위성·발사 스타트업(쎄트렉아이, 이노스페이스 등)</td><td>자금 수요·금융 애로</td></tr>
<tr><td>금융</td><td>K-SURE, 산업은행, 시중은행 방산금융, 정책펀드 운용사</td><td>역할분담·협조융자</td></tr>
<tr><td>전문가·해외</td><td>KARI, KIET, KAIA, 해외 ECA 담당자, 커니 글로벌 A&amp;D 파트너</td><td>벤치마크·검증</td></tr>
</tbody></table>
<p>KAI 노조 면담은 민감 사안이므로 발주처와 사전 합의 필수 [추정].</p>`,
      facts: [{ k: "규모(가설)", v: "25~35명" }],
      sowhat: "KAI와 한화를 모두 인터뷰하되 질문지를 동일하게 설계해 중립성 기록을 남겨라.",
      sources: []
    },
    {
      id: "risks",
      title: "리스크·이슈 가설",
      en: "Risks & Issues",
      level: "심화",
      tags: ["리스크", "추정"],
      summary: "정치·이해충돌·보안·일정·데이터·결론 수용성 6대 리스크",
      body: `<table><thead><tr><th>리스크</th><th>내용</th><th>대응(가설)</th></tr></thead><tbody>
<tr><td>정치·여론</td><td>KAI 매각 전초전 의혹, 국회·노조 결과 공개 요구 [확인됨]</td><td>공개 가능 문서 기준 작성, 커뮤니케이션 창구 단일화</td></tr>
<tr><td>이해충돌</td><td>노조가 커니-한화 인력 연결 문제 제기 [확인됨]</td><td>팀 구성 이력 점검, 정보 차단벽 문서화</td></tr>
<tr><td>보안</td><td>외국계 수행사의 방산 정보 접근 지적 [확인됨]</td><td>자료 등급 분류, 국외 반출 금지, 보안서약</td></tr>
<tr><td>일정</td><td>3개월 내 '앵커기업+재원' 설계 [확인됨]</td><td>1주차 데이터·인터뷰 확보, 범위 우선순위</td></tr>
<tr><td>데이터</td><td>기업 비공개 정보, 수은 여신 정보 제약 [추정]</td><td>공시·IR 기반 아웃사이드-인 추정, 가정 명시</td></tr>
<tr><td>결론 수용성</td><td>독과점 우려·지역경제 반발 등으로 실행 곤란 [추정]</td><td>옵션별 이해관계자 영향·수용성 평가 포함</td></tr>
</tbody></table>`,
      facts: [],
      sowhat: "이 용역은 '틀린 분석'보다 '편향된 것처럼 보이는 분석'이 더 큰 리스크다. 옵션 평가 기준을 사전에 발주처와 합의하라.",
      sources: [
        { label: "녹색경제신문 - KAI 노조 요구", url: "https://www.greened.kr/news/articleView.html?idxno=353757" },
        { label: "딜사이트", url: "https://dealsite.co.kr/articles/171003" }
      ]
    },
    {
      "id": "elevator-pitch",
      "title": "30초 요약: 이 프로젝트를 한 문장으로",
      "en": "Elevator Pitch",
      "level": "기초",
      "tags": [
        "요약",
        "킥오프",
        "커뮤니케이션"
      ],
      "summary": "'수은이 우주·항공에 돈을 어디에, 어떻게, 얼마나 써야 하나'에 답하는 용역",
      "body": "<p>고객·동료·인터뷰이에게 프로젝트를 소개할 때 쓰는 기본 문장(작업 가설)이다.</p><p><span class=\"hl\">\"한국수출입은행이 우주·항공산업의 수출 경쟁력을 키우기 위해 어떤 분야에, 어떤 금융수단으로, 어느 정도 규모를 지원해야 하는지 진단하고 실행 로드맵을 만드는 3개월 용역\"</span></p><table><thead><tr><th>질문</th><th>한 줄 답(가설)</th><th>참고</th></tr></thead><tbody><tr><td>왜 지금?</td><td>방산 수출 호황, 자본금 한도 확대, KAI 지배구조 변화, 우주항공청 예산 확대가 겹침</td><td><a data-ref=\"briefing/why-kexim-aerospace\">수은은 왜</a></td></tr><tr><td>어디에?</td><td>체계종합(완제기·발사체), 부품·MRO 공급망, 위성·다운스트림 뉴스페이스</td><td><a data-ref=\"briefing/scope-hypothesis\">범위 가설</a></td></tr><tr><td>무엇으로?</td><td>수출·구매자금, 보증, PF, 공급망 금융, 펀드 출자</td><td><a data-ref=\"finance/finance-gap-hypotheses\">갭 가설</a></td></tr><tr><td>어떻게?</td><td>타 정책금융기관과의 역할 분담, 해외 ECA 벤치마킹, 단계별 로드맵</td><td><a data-ref=\"finance/foreign-eca-benchmark\">ECA 벤치마킹</a></td></tr></tbody></table><p>주의: 'KAI 매각·민영화 자문'으로 오해받지 않도록 범위 표현을 발주처와 사전에 맞춘다(<a data-ref=\"briefing/kai-governance-context\">지배구조 논쟁</a>).</p>",
      "facts": [
        {
          "k": "성격",
          "v": "작업 가설 (RFP 원문 미확인)"
        },
        {
          "k": "용역 기간",
          "v": "약 3개월 (보도 기준)"
        }
      ],
      "sowhat": "첫 미팅 전에 이 한 문장을 PM과 맞춰 두면 인터뷰마다 설명이 달라지는 일을 막을 수 있다. 민감 이슈(KAI 지분)는 '범위 밖' 또는 '시나리오 수준'으로 말하는 원칙을 정해 둔다.",
      "sources": []
    },
    {
      "id": "recent-timeline",
      "title": "최근 12개월 핵심 이벤트 타임라인",
      "en": "Key Events Timeline (2025.11~2026.11)",
      "level": "기초",
      "tags": [
        "타임라인",
        "뉴스",
        "2026"
      ],
      "summary": "누리호 4·5차, KF-21 양산기 인도, 한화 KAI 2대주주, 용역 우협까지 한눈에",
      "body": "<p>킥오프 대화에서 자주 나올 최근 사건을 시간순으로 정리했다(보도 기준, 2026.11 현재).</p><table><thead><tr><th>시점</th><th>사건</th><th>프로젝트 관련성</th></tr></thead><tbody><tr><td>2025.11</td><td><a data-ref=\"korea/nuri\">누리호 4차</a> 발사 성공(한화에어로스페이스 체계종합 첫 참여)</td><td>발사체 민간 이전, 발사서비스 금융 수요</td></tr><tr><td>2025.11</td><td><a data-ref=\"korea/425-project\">425 정찰위성</a> 5호기 발사로 5기 체계 완성</td><td>국방 위성 수요와 위성 제조 역량</td></tr><tr><td>2026.1</td><td>폴란드 K2 2차 이행계약 수출금융 체결 보도(만기 약 17년)</td><td><a data-ref=\"finance/poland-case\">방산 구매자금융</a> 템플릿</td></tr><tr><td>2026.3</td><td><a data-ref=\"korea/kf21\">KF-21</a> 양산 1호기 출고</td><td>향후 수출 시 구매국 금융 규모가 수조원대</td></tr><tr><td>2026.8</td><td>한화그룹 KAI 지분 15.89%로 2대주주(8.31 공정위 승인). 수은은 최대주주 26.41% 유지</td><td><a data-ref=\"briefing/kai-governance-context\">지배구조 논쟁</a></td></tr><tr><td>2026.9</td><td>KF-21 양산 1호기 공군 인도(9.22) / 우주항공청 2027 정부안 1조 6,491억원</td><td>항공 완제기 수출, 우주 예산 확대</td></tr><tr><td>2026.10</td><td>누리호 5차 발사 성공(10.7, 15기 중 14기 사출) / AT커니 우선협상대상자 보도(하순)</td><td>프로젝트 착수 직전 환경</td></tr></tbody></table>",
      "facts": [
        {
          "k": "기준",
          "v": "2026.11 보도 기준"
        },
        {
          "k": "수은 KAI 지분",
          "v": "26.41%"
        },
        {
          "k": "한화 KAI 지분",
          "v": "15.89% (2026.8)"
        }
      ],
      "sowhat": "인터뷰이는 이 사건들을 전제로 말한다. 특히 KAI 지분 변화와 KF-21 수출 금융은 수은의 '주주'와 '대주(貸主)' 역할이 겹치는 지점이므로 이해충돌 관리 관점에서도 메모해 둔다.",
      "sources": [
        {
          "label": "SBS Biz - 한화 KAI 지분 15.89%",
          "url": "https://biz.sbs.co.kr/amp/article/20000327739"
        },
        {
          "label": "MTN - 누리호 5차 15기 중 14기 궤도 진입",
          "url": "https://news.mtn.co.kr/news-detail/2026100716330458112"
        }
      ]
    }
  ]
});

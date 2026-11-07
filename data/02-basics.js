window.ADB = window.ADB || { chapters: [] };
window.ADB.chapters.push({
  id: "basics",
  no: 2,
  title: "항공우주 산업 101",
  en: "Aerospace 101",
  icon: "planet",
  color: "#4FC3F7",
  intro: `항공우주 산업이 무엇으로 이루어져 있고, 돈이 어디서 어떻게 벌리는지 처음 보는 사람 눈높이에서 정리한다. 분류·밸류체인·산업 특성·프로그램 경제학·인증·KPI·사이클까지, 수은 과제에서 매일 마주칠 기본 개념을 한 챕터에 모았다.`,
  takeaways: [
    "항공우주는 '항공(민항·군용·엔진·MRO)'과 '우주(발사체·위성·지상·서비스)'로 나뉘며, 돈은 신규 판매보다 애프터마켓·서비스에서 꾸준히 나온다.",
    "OEM-Tier1-Tier2-Tier3 피라미드 구조: 한국 기업 대부분은 Tier1~2(기체 구조물·부품) 위치다.",
    "개발 10년, 손익분기 수백 대, 인증·품질 장벽 — 장기·대규모·저회전 자금이 필요해 정책금융의 역할이 크다.",
    "2025~2026년 업계는 '수요는 넘치는데 못 만드는' 공급망 병목 국면: 백로그 1.7만 대 이상(IATA).",
    "뉴스페이스는 재사용 발사체로 kg당 발사비를 약 1/20로 낮췄고, LEO 군집위성이 우주 수요의 중심이 됐다."
  ],
  entries: [
    {
      id: "definition",
      title: "항공우주 산업의 정의와 분류",
      en: "Definition & Segmentation",
      level: "기초",
      tags: ["정의", "분류", "산업구조"],
      summary: "대기권 안(항공)과 밖(우주)을 나는 비행체와 그 부품·서비스를 만드는 산업",
      body: `<p>항공우주 산업(Aerospace)은 <strong>대기권 내를 비행하는 항공기</strong>와 <strong>대기권 밖을 다루는 우주 비행체</strong>, 그리고 이를 구성하는 엔진·부품·소재와 운용·정비·데이터 서비스까지 포괄한다. 실무에서는 흔히 <strong>항공우주·방산(A&amp;D, Aerospace &amp; Defense)</strong>으로 묶어 부른다.</p>
<table><thead><tr><th>대분류</th><th>중분류</th><th>예시</th></tr></thead><tbody>
<tr><td rowspan="2">항공</td><td>완제기</td><td>민항기, 군용기(전투기·수송기·훈련기), 헬기, 무인기(UAV)</td></tr>
<tr><td>구성품·서비스</td><td>엔진, 기체 구조물, 항전(Avionics), 부품·소재, MRO</td></tr>
<tr><td rowspan="2">우주</td><td>업스트림</td><td>발사체, 위성 제조, 지상국·지상장비</td></tr>
<tr><td>다운스트림</td><td>위성통신·방송, 지구관측 데이터, 항법(GNSS) 서비스, 탐사</td></tr>
</tbody></table>
<p>분류 기준은 기관마다 다르다(예: 방산을 별도로 보는지, MRO를 항공운송업으로 보는지). 통계 인용 시 <span class="hl">분류 범위부터 확인</span>하는 습관이 중요하다. 세부 분류는 <a data-ref="basics/aviation-segments">항공 부문</a>, <a data-ref="basics/space-segments">우주 부문</a> 항목 참고.</p>`,
      facts: [
        { k: "영문 약칭", v: "A&D (Aerospace & Defense)" },
        { k: "세계 우주경제", v: "약 6,130억 달러 (2024, Space Foundation)" },
        { k: "세계 민항 MRO", v: "약 1,200억 달러 (2025, Oliver Wyman 2025판 추정)" }
      ],
      sowhat: "수은 과제에서 '우주·항공 산업 경쟁력'을 논할 때 어떤 세그먼트를 범위에 넣느냐에 따라 시장규모·지원대상이 크게 달라진다. 킥오프 단계에서 범위 정의를 먼저 합의할 것.",
      sources: [
        { label: "Space Foundation – The Space Report 2025 Q2", url: "https://www.spacefoundation.org/2025/07/22/the-space-report-2025-q2/" }
      ]
    },
    {
      id: "aviation-segments",
      title: "항공 부문 세분류",
      en: "Aviation Segments",
      level: "기초",
      tags: ["민항기", "군용기", "엔진", "MRO"],
      summary: "완제기·엔진·부품/소재·MRO로 나뉘며 세그먼트별 경쟁구도와 마진이 다르다",
      body: `<table><thead><tr><th>세그먼트</th><th>주요 플레이어</th><th>특징</th></tr></thead><tbody>
<tr><td>대형 민항기</td><td>Airbus, Boeing (복점), COMAC 추격</td><td>협동체(A320·737)가 물량 대부분. 인도까지 수년 대기</td></tr>
<tr><td>지역항공기·비즈젯</td><td>Embraer, ATR, Bombardier, Gulfstream</td><td>틈새 시장, 경기 민감</td></tr>
<tr><td>군용기</td><td>Lockheed Martin, Boeing, Dassault, KAI 등</td><td>정부가 유일 고객, 수출은 정부 간 협상 성격</td></tr>
<tr><td>헬기</td><td>Airbus Helicopters, Leonardo, Sikorsky, KAI(수리온)</td><td>관용·군용 비중 높음</td></tr>
<tr><td>무인기(UAV)</td><td>General Atomics, Baykar, IAI, 대한항공 등</td><td>우크라이나전 이후 급성장, 진입장벽 상대적으로 낮음</td></tr>
<tr><td>엔진</td><td>GE, Pratt &amp; Whitney, Rolls-Royce, Safran(CFM 합작)</td><td>과점·고마진, 애프터마켓으로 이익</td></tr>
<tr><td>부품·소재</td><td>Spirit AeroSystems, 국내 Tier 기업, Hexcel 등</td><td>Tier 구조, 수주·단가 협상력 약함</td></tr>
<tr><td>MRO</td><td>Lufthansa Technik, ST Engineering, OEM 계열</td><td>운항 대수에 비례하는 안정 수요</td></tr>
</tbody></table>
<p>이익의 상당 부분이 <strong>엔진과 애프터마켓</strong>에 몰려 있다는 점이 핵심이다(<a data-ref="basics/lifecycle-aftermarket">수명주기와 애프터마켓</a>).</p>`,
      facts: [
        { k: "Airbus 인도", v: "793대 (2025)" },
        { k: "Boeing 인도", v: "600대 (2025)" },
        { k: "엔진 시장 구조", v: "GE·P&W·RR·Safran 과점" }
      ],
      sowhat: "한국은 완제기(KAI 군용기·헬기)와 기체 구조물 Tier1~2에 강점이 있지만, 고마진인 엔진·애프터마켓 비중은 작다. 경쟁력 강화 과제는 '어느 세그먼트로 이동할 것인가'의 문제이기도 하다.",
      sources: [
        { label: "Forecast International – Dec 2025 Airbus/Boeing orders & deliveries", url: "https://flightplan.forecastinternational.com/2026/01/15/airbus-and-boeing-report-december-2025-commercial-aircraft-orders-and-deliveries/" }
      ]
    },
    {
      id: "space-segments",
      title: "우주 부문 세분류: 업스트림과 다운스트림",
      en: "Space Upstream vs Downstream",
      level: "기초",
      tags: ["발사체", "위성", "지상국", "우주서비스"],
      summary: "하드웨어(업스트림)보다 데이터·서비스(다운스트림)가 우주경제의 대부분을 차지",
      body: `<p>우주산업은 <strong>업스트림(만들고 쏘는 것)</strong>과 <strong>다운스트림(우주 인프라로 돈 버는 것)</strong>으로 나눈다.</p>
<table><thead><tr><th>구분</th><th>세부</th><th>예시</th></tr></thead><tbody>
<tr><td rowspan="3">업스트림</td><td>발사체·발사서비스</td><td>SpaceX, Rocket Lab, 누리호(한국항공우주연구원·한화에어로스페이스)</td></tr>
<tr><td>위성 제조</td><td>Airbus D&amp;S, Thales Alenia, 쎄트렉아이, KAI</td></tr>
<tr><td>지상국·지상장비</td><td>안테나, 단말기, 관제 시스템</td></tr>
<tr><td rowspan="3">다운스트림</td><td>위성통신·방송</td><td>Starlink, SES, OneWeb(Eutelsat)</td></tr>
<tr><td>지구관측·데이터 분석</td><td>Planet, Maxar, 국내 SAR 스타트업</td></tr>
<tr><td>항법·탐사·기타</td><td>GNSS 응용, 달·심우주 탐사, 우주정거장</td></tr>
</tbody></table>
<p>Space Foundation 기준 2024년 세계 우주경제는 <strong>약 6,130억 달러</strong>, 이 중 <strong>상업 부문이 약 78%</strong>다. 매출의 큰 몫은 위성통신·방송·항법 응용 같은 다운스트림에서 나온다. 한편 기관별 집계 방식 차이가 커서(예: Novaspace는 2025년 약 6,260억 달러로 추정) 수치 비교 시 출처 통일이 필요하다.</p>`,
      facts: [
        { k: "세계 우주경제", v: "약 6,130억 달러 (2024)" },
        { k: "상업 비중", v: "약 78% (2024)" },
        { k: "연간 성장", v: "약 7.8% (2023→2024)" },
        { k: "1조 달러 돌파 전망", v: "2032년경 (Space Foundation)" }
      ],
      sowhat: "정책금융이 발사체·위성 같은 업스트림 '하드웨어'에만 머물면 가치의 큰 부분을 놓친다. 다운스트림 서비스 수출(위성통신 단말, 관측데이터 판매)에 맞는 금융상품 검토가 필요하다.",
      sources: [
        { label: "Space Foundation – The Space Report 2025 Q2", url: "https://www.spacefoundation.org/2025/07/22/the-space-report-2025-q2/" }
      ]
    },
    {
      id: "value-chain",
      title: "밸류체인과 Tier 구조",
      en: "Value Chain & Supplier Tiers",
      level: "기초",
      tags: ["밸류체인", "OEM", "Tier1", "공급망"],
      summary: "OEM을 꼭짓점으로 Tier1(시스템)→Tier2(서브어셈블리)→Tier3(부품·소재)의 피라미드",
      body: `<p>항공기 한 대에는 수십만~수백만 개의 부품이 들어가며, 공급망은 <strong>피라미드형 Tier 구조</strong>로 되어 있다.</p>
<table><thead><tr><th>단계</th><th>역할</th><th>예시</th></tr></thead><tbody>
<tr><td>OEM / 프라임</td><td>설계·최종 조립·인증·판매. 리스크 공유 파트너 선정</td><td>Airbus, Boeing, Lockheed Martin, KAI(KF-21)</td></tr>
<tr><td>Tier 1</td><td>주요 시스템·대형 구조물 통합 공급</td><td>엔진사, Spirit AeroSystems, Collins, 대한항공 항공우주사업부, KAI(민수 구조물)</td></tr>
<tr><td>Tier 2</td><td>서브어셈블리·기능 부품</td><td>국내 중견 기체부품사</td></tr>
<tr><td>Tier 3</td><td>단품 가공, 특수공정, 원소재</td><td>정밀가공·표면처리 중소기업, 티타늄·복합소재</td></tr>
</tbody></table>
<p>최근 OEM은 <strong>RSP(Risk Sharing Partner)</strong> 방식으로 Tier1에 개발비 일부를 부담시키고, 대신 프로그램 수명 동안 독점 공급권을 준다. 이는 Tier1에게 대규모 선투자 자금 수요를 만든다.</p>
<p>하위 Tier일수록 <span class="hl">영세하고 단일 고객 의존도가 높으며</span>, 경기 충격 시 가장 먼저 쓰러진다. 코로나 이후 숙련인력 이탈로 생긴 하위 Tier 병목이 지금의 인도 지연 원인 중 하나다(<a data-ref="basics/cycle">경기 사이클</a>).</p>`,
      facts: [
        { k: "구조", v: "OEM → Tier1 → Tier2 → Tier3" },
        { k: "RSP", v: "개발비 분담 ↔ 장기 공급권" },
        { k: "국내 위치", v: "주로 Tier1~2 (기체 구조물)" }
      ],
      sowhat: "수은의 지원은 OEM·대기업 중심이 되기 쉽지만 공급망 병목은 Tier2~3에서 발생한다. RSP 선투자 금융, 하위 Tier 운전자금·설비자금, 공급망 금융(SCF)이 핵심 논점이 될 수 있다.",
      sources: []
    },
    {
      id: "characteristics",
      title: "항공우주 산업의 8가지 특성",
      en: "Industry Characteristics",
      level: "기초",
      tags: ["진입장벽", "듀얼유스", "수주산업", "정부의존"],
      summary: "장기 개발·고진입장벽·인증·규모의 경제·정부 의존·듀얼유스·수주산업·학습곡선",
      body: `<table><thead><tr><th>특성</th><th>내용</th><th>금융적 함의</th></tr></thead><tbody>
<tr><td>장기 개발</td><td>신형 항공기 개발 7~10년, 프로그램 수명 30~50년</td><td>초장기 인내자본 필요</td></tr>
<tr><td>고진입장벽</td><td>기술·자본·인증·고객 신뢰가 모두 필요</td><td>신규 진입자 신용 평가 어려움</td></tr>
<tr><td>인증</td><td>형식증명, AS9100·Nadcap 등 품질인증 없으면 납품 불가</td><td>인증 취득 비용·기간 지원 수요</td></tr>
<tr><td>규모의 경제</td><td>고정비 비중이 커 생산량이 이익을 결정</td><td>초기 적자 구간 장기화</td></tr>
<tr><td>정부 의존도</td><td>군용·우주는 정부가 주 고객, 민항도 정부 지원 경쟁</td><td>정책 변화 리스크</td></tr>
<tr><td>듀얼유스</td><td>민·군 기술 공유(엔진, 복합재, 위성)</td><td>수출통제(ITAR·EAR) 이슈</td></tr>
<tr><td>수주산업</td><td>계약 후 수년에 걸쳐 인도, 선수금·RG 구조</td><td>보증·선수금환급보증 수요</td></tr>
<tr><td>학습곡선</td><td>누적 생산량 증가에 따라 단가 하락</td><td>초기 단위 손실 → 후반 회수</td></tr>
</tbody></table>
<p>요약하면 <strong>'오래, 많이, 비싸게, 확실하게'</strong> 투자해야 하는 산업이다. 그래서 거의 모든 항공우주 강국은 정부 R&amp;D, 국책 금융, 수출신용(ECA)으로 산업을 키웠다.</p>`,
      facts: [
        { k: "개발 기간", v: "약 7~10년 (신형 민항기)" },
        { k: "프로그램 수명", v: "약 30~50년" },
        { k: "주요 수출통제", v: "ITAR, EAR (미국)" }
      ],
      sowhat: "이 8가지 특성이 곧 '시장 실패' 근거다. 수은 컨설팅에서 정책금융 개입의 정당성을 설명할 때 이 표를 출발점으로 삼으면 논리가 깔끔해진다.",
      sources: []
    },
    {
      id: "program-economics",
      title: "프로그램 경제학: 개발비·손익분기·런레이트",
      en: "Program Economics",
      level: "심화",
      tags: ["개발비", "손익분기", "런레이트", "J-커브"],
      summary: "수조~수십조 원 개발비를 수백 대 이상 팔아야 회수하는 J-커브 사업",
      body: `<p>항공기 사업은 <strong>'프로그램(기종)' 단위</strong>로 손익을 본다. 현금흐름은 전형적인 <strong>J-커브</strong>다.</p>
<ol><li><strong>개발 단계</strong>: 설계·시제기·시험·인증. 대형 민항기는 수십억~100억 달러 이상(추정) 투입, 매출 없음</li>
<li><strong>초기 양산</strong>: 학습곡선 초기라 대당 원가가 판매가보다 높을 수 있음 → 누적 적자 확대</li>
<li><strong>성숙 양산</strong>: 런레이트(월 생산률) 상승, 대당 이익 발생, 누적 적자 회수</li>
<li><strong>애프터마켓</strong>: 운항 기간 30년 내외 부품·정비 매출</li></ol>
<h4>핵심 용어</h4>
<ul><li><strong>손익분기 대수(Break-even)</strong>: 개발비를 회수하는 누적 판매 대수. 대형기는 수백~1,000대 이상이 흔히 거론됨(기종별 상이, 추정)</li>
<li><strong>런레이트(Rate)</strong>: 월 생산 대수. 예) 보잉 737 MAX는 FAA 상한 38→42대를 거쳐 2026년 47대/월로 증산 진행</li>
<li><strong>프로그램 회계</strong>: 보잉은 예상 총 판매대수(accounting quantity)에 원가를 평균 배분하므로, 전망 변경 시 대규모 손실(forward loss) 인식이 발생</li></ul>
<p>런레이트 1~2대 차이가 협력사 매출·설비투자에 직결되므로 업계는 OEM의 <span class="hl">rate 발표</span>를 가장 중요한 뉴스로 본다.</p>`,
      facts: [
        { k: "737 MAX 생산률", v: "42 → 47대/월 (2026 FAA 검토 완료)" },
        { k: "FAA 생산 상한", v: "38대/월 (2024.1 사고 후)" },
        { k: "현금흐름 형태", v: "J-커브" }
      ],
      sowhat: "J-커브의 '골짜기'를 버티게 해주는 것이 정책금융의 본질적 역할이다. 협력사 지원 설계 시 OEM 런레이트 시나리오를 기반으로 설비·운전자금 수요를 추정해야 한다.",
      sources: [
        { label: "CAPA – Boeing testing production rate of 47/month", url: "https://centreforaviation.com/news/boeing-testing-production-rate-of-47-aircraft-per-month-cautious-of-increasing-to-52-ceo-1360867" }
      ]
    },
    {
      id: "learning-curve",
      title: "학습곡선",
      en: "Learning Curve",
      level: "심화",
      tags: ["학습곡선", "원가", "Wright"],
      summary: "누적 생산량이 2배가 될 때마다 단위 노동시간이 일정 비율로 감소하는 법칙",
      body: `<p>학습곡선(Learning Curve)은 1936년 T.P. Wright가 항공기 조립에서 관찰한 법칙이다. <strong>누적 생산량이 2배가 될 때마다 단위당 투입시간이 일정 비율(예: 80~85%)로 줄어든다.</strong></p>
<table><thead><tr><th>누적 대수</th><th>80% 곡선 가정 시 상대 공수</th></tr></thead><tbody>
<tr><td>1대</td><td>100</td></tr><tr><td>2대</td><td>80</td></tr><tr><td>4대</td><td>64</td></tr><tr><td>8대</td><td>51</td></tr><tr><td>16대</td><td>41</td></tr>
</tbody></table>
<p>(위 표는 개념 설명용 예시이며, 실제 학습률은 기종·공정에 따라 다르다.)</p>
<ul><li><strong>함의 1</strong>: 초기 생산분은 원가가 판매가보다 높아 적자 → 생산 대수를 확보해야 경쟁력</li>
<li><strong>함의 2</strong>: 생산 중단·인력 이탈은 학습효과를 잃게 해 재가동 시 원가가 다시 오름(코로나 후 공급망 문제의 한 원인)</li>
<li><strong>함의 3</strong>: 군용기 수출은 양산 물량을 늘려 자국 조달 단가까지 낮추는 효과</li></ul>`,
      facts: [
        { k: "최초 정립", v: "T.P. Wright, 1936" },
        { k: "통상 학습률", v: "약 80~85% (일반론)" }
      ],
      sowhat: "방산 수출금융의 논리 중 하나: 수출 물량이 국내 조달 단가를 낮춘다. 수출 지원의 경제적 파급효과를 정량화할 때 학습곡선을 활용할 수 있다.",
      sources: []
    },
    {
      id: "certification",
      title: "인증 체계: 형식증명과 감항인증",
      en: "Type Certification & Airworthiness",
      level: "기초",
      tags: ["FAA", "EASA", "KC", "BASA", "감항"],
      summary: "형식증명(TC)·생산증명(PC)·감항증명(AC) 3단계 — 인증 없이는 팔 수 없다",
      body: `<p>민간 항공기는 정부 당국의 인증을 받아야 비행·판매할 수 있다.</p>
<table><thead><tr><th>인증</th><th>대상</th><th>의미</th></tr></thead><tbody>
<tr><td>형식증명 (TC)</td><td>설계</td><td>해당 기종 설계가 안전기준을 충족</td></tr>
<tr><td>생산증명 (PC)</td><td>제조시스템</td><td>인증된 설계대로 반복 생산 가능</td></tr>
<tr><td>감항증명 (AC)</td><td>개별 기체</td><td>각 항공기가 비행 가능한 상태</td></tr>
</tbody></table>
<h4>주요 당국</h4>
<ul><li><strong>FAA</strong>(미국)·<strong>EASA</strong>(유럽): 세계 표준. 두 곳 인증을 받아야 사실상 글로벌 판매 가능</li>
<li><strong>한국 국토교통부(KC 감항인증)</strong>: 민간 항공기·부품. KAS(Korean Airworthiness Standards)는 FAA 기준과 유사 수준으로 설계</li>
<li><strong>군용 감항인증</strong>: 방위사업청 주관 별도 체계(군용항공기 비행안전성 인증)</li></ul>
<h4>BASA (양자 항공안전협정)</h4>
<p>상대국 인증을 상호 인정하는 협정. 한·미 BASA는 2008년 부품(기술표준품) 수준으로 체결된 뒤 완제기급 확대가 추진돼 왔다. <span class="hl">BASA 범위가 곧 국산 완제기 수출 가능성</span>을 좌우한다. (확대 범위의 최신 현황은 별도 확인 필요)</p>`,
      facts: [
        { k: "3단계 인증", v: "TC → PC → AC" },
        { k: "글로벌 표준 당국", v: "FAA, EASA" },
        { k: "한·미 BASA", v: "2008년 체결(부품 수준), 이후 확대 추진" }
      ],
      sowhat: "국산 민수 완제기·부품 수출의 실질 장벽은 기술보다 인증인 경우가 많다. 인증 취득 비용·기간을 금융 지원 대상(인증 브릿지 자금 등)으로 볼 여지가 있다.",
      sources: [
        { label: "국토교통부 – 한-미 항공안전협정(BASA)의 의의와 추진계획", url: "https://www.molit.go.kr/USR/policyTarget/dtl.jsp?idx=117" }
      ]
    },
    {
      id: "quality-standards",
      title: "품질 인증: AS9100과 Nadcap",
      en: "AS9100 & Nadcap",
      level: "기초",
      tags: ["AS9100", "Nadcap", "품질", "협력사"],
      summary: "AS9100은 항공우주 품질경영시스템, Nadcap은 특수공정 인증 — 협력사 입장권",
      body: `<p>공급망에 들어가려면 정부 인증과 별개로 <strong>업계 자율 품질인증</strong>이 필요하다.</p>
<table><thead><tr><th>인증</th><th>성격</th><th>주관</th><th>대상</th></tr></thead><tbody>
<tr><td>AS9100 (EN9100/JISQ9100)</td><td>품질경영시스템. ISO 9001 + 항공우주 추가 요구사항</td><td>IAQG</td><td>사실상 모든 협력사</td></tr>
<tr><td>Nadcap</td><td>특수공정 인증 (열처리, 비파괴검사, 화학처리, 용접, 복합재 등)</td><td>PRI (Performance Review Institute)</td><td>특수공정 수행업체</td></tr>
<tr><td>OEM 고객 승인</td><td>각 OEM의 자체 공급사 승인</td><td>Boeing, Airbus 등</td><td>개별 협력사</td></tr>
</tbody></table>
<p>중소 협력사에게 이 인증들은 <strong>시간(1~2년)·비용·전담 인력</strong>이 드는 부담이며, 인증이 없으면 아무리 가공 능력이 좋아도 해외 OEM 공급망에 들어갈 수 없다.</p>`,
      facts: [
        { k: "AS9100 기반", v: "ISO 9001 + 항공우주 요구사항" },
        { k: "Nadcap 운영", v: "PRI (비영리)" }
      ],
      sowhat: "국내 Tier2~3의 해외 진출 지원 프로그램에서 인증 취득 지원과 금융을 패키지로 묶는 방안을 고려할 만하다.",
      sources: []
    },
    {
      id: "lifecycle-aftermarket",
      title: "항공기 수명주기와 애프터마켓",
      en: "Lifecycle & Aftermarket",
      level: "기초",
      tags: ["MRO", "애프터마켓", "면도기-면도날"],
      summary: "신규 판매는 시작일 뿐, 25~30년 운항 기간의 부품·정비가 진짜 이익원",
      body: `<p>항공기 수명주기: <strong>개발 → 생산·인도 → 운항(약 25~30년) → 퇴역·해체(Part-out)</strong>. 운항 기간 동안 정비·부품·개조 수요가 계속 발생한다.</p>
<ul><li><strong>면도기-면도날 모델</strong>: 엔진사는 신품 엔진을 원가 이하로 팔기도 하고, 운항 중 정비·교체 부품(spare)에서 이익을 회수</li>
<li><strong>MRO 4대 영역</strong>: 기체 중정비, 엔진 정비(가장 큰 비중), 부품(Component), 라인 정비</li>
<li><strong>장기 서비스 계약</strong>: 비행시간당 과금(Power-by-the-Hour) 방식이 보편화</li></ul>
<p>Oliver Wyman(2025판)은 세계 민항 MRO 시장을 <strong>2025년 약 1,201억 달러 → 2035년 약 1,561억 달러</strong>(연 2.7%)로 전망했고, 2026판에서는 2025년 실적 기준을 약 1,360억 달러로 상향했다(추정치는 판본별 상이). 신기종 인도 지연으로 노후기 운항이 늘면서 MRO 수요는 오히려 강하다.</p>`,
      facts: [
        { k: "MRO 시장", v: "약 1,201억 달러 (2025, OW 2025판)" },
        { k: "2035 전망", v: "약 1,561억 달러 (연 2.7%)" },
        { k: "운항 수명", v: "약 25~30년" },
        { k: "세계 운항 대수", v: "29,079 → 38,309대 (2025→2035, OW)" }
      ],
      sowhat: "한국 항공산업이 제조 위주라면 수익 안정성이 낮다. MRO·애프터마켓 역량(특히 엔진 정비) 확보는 경쟁력 강화 과제의 유력한 축이며, 시설투자형 금융 수요가 크다.",
      sources: [
        { label: "Oliver Wyman – Fleet Forecast 2025 (backlog 17,000)", url: "https://www.oliverwyman.com/media-center/2025/feb/oliver-wyman-fleet-forecast-shows-aircraft-order-backlog-breaks-record-at-17000.html" },
        { label: "ARSA/Oliver Wyman 2025 Fleet & MRO Market Exec Summary", url: "https://assets.noviams.com/novi-file-uploads/atec/ARSA-OW-2025FleetAndMROMarketReport-ExecSum-03162025.pdf" }
      ]
    },
    {
      id: "old-vs-new-space",
      title: "올드스페이스 vs 뉴스페이스",
      en: "Old Space vs New Space",
      level: "기초",
      tags: ["뉴스페이스", "민간우주", "SpaceX"],
      summary: "정부 주도·맞춤형·고비용에서 민간 주도·양산형·저비용으로의 패러다임 전환",
      body: `<table><thead><tr><th>구분</th><th>올드스페이스</th><th>뉴스페이스</th></tr></thead><tbody>
<tr><td>주체</td><td>정부·국책연구소·대형 방산업체</td><td>민간 기업·스타트업</td></tr>
<tr><td>계약</td><td>원가가산(Cost-plus)</td><td>고정가·서비스 구매(Fixed-price)</td></tr>
<tr><td>설계 철학</td><td>무결점, 장수명 대형 위성</td><td>빠른 반복, 소형·양산 위성</td></tr>
<tr><td>발사체</td><td>소모성</td><td>재사용</td></tr>
<tr><td>자금</td><td>정부 예산</td><td>VC·사모·상장 + 정부 앵커 고객</td></tr>
<tr><td>대표 사례</td><td>아폴로, 우주왕복선, 대형 GEO 통신위성</td><td>SpaceX, Rocket Lab, Planet, Starlink</td></tr>
</tbody></table>
<p>뉴스페이스에서도 정부는 사라지지 않는다. 역할이 <strong>'개발 주체'에서 '앵커 고객'</strong>으로 바뀌었을 뿐이다(NASA의 상업 화물·승무원 수송 계약이 대표적). 한국도 2024년 우주항공청(KASA) 출범 이후 민간 이전·민간 주도를 강조하고 있다.</p>`,
      facts: [
        { k: "계약 방식 전환", v: "Cost-plus → Fixed-price" },
        { k: "정부 역할", v: "개발 주체 → 앵커 고객" },
        { k: "한국 우주항공청", v: "2024년 5월 개청" }
      ],
      sowhat: "뉴스페이스 기업은 매출 전 단계에서 대규모 자금이 필요하나 담보·실적이 없다. 수은이 지분투자·벤처대출·정부 앵커계약 연계 금융 등 새 도구를 검토해야 하는 이유다(금융 챕터 참고).",
      sources: []
    },
    {
      id: "launch-cost",
      title: "발사 비용 하락과 재사용 발사체",
      en: "Launch Cost & Reusability",
      level: "기초",
      tags: ["발사체", "재사용", "Falcon 9", "kg당 비용"],
      summary: "재사용 발사체로 LEO kg당 발사비가 우주왕복선 대비 약 1/20로 하락",
      body: `<p>NASA 보고서 기준 우주왕복선의 LEO 발사비는 <strong>kg당 약 5만4,500달러</strong>, Falcon 9은 <strong>kg당 약 2,720달러</strong>로 약 <strong>20배</strong> 낮아졌다. 1단 로켓 회수·재사용과 수직계열화, 높은 발사 빈도가 원동력이다.</p>
<table><thead><tr><th>발사체</th><th>LEO kg당 비용(약)</th><th>비고</th></tr></thead><tbody>
<tr><td>Space Shuttle</td><td>약 54,500달러</td><td>NASA 추정, 프로그램 평균</td></tr>
<tr><td>Falcon 9 (전용)</td><td>약 2,700~3,000달러</td><td>공시 가격 기준, 내부원가는 훨씬 낮을 것으로 추정</td></tr>
<tr><td>Falcon 9 (라이드셰어)</td><td>약 6,500달러 (2025년 말, 추정)</td><td>소형위성용</td></tr>
<tr><td>Starship</td><td>미확정</td><td>완전 재사용 목표, 시험비행 중</td></tr>
</tbody></table>
<p><strong>발사 빈도</strong>: 2025년 전 세계 궤도 발사 시도는 약 <strong>324회</strong>(SpaceNews 집계)로 사상 최대, 이 중 SpaceX Falcon 9이 <strong>165회</strong>(Starlink 123회)였다. 중국이 92회로 2위.</p>
<p>발사비 하락은 위성 수요를 폭발시켰고, <a data-ref="basics/orbits">LEO 군집위성</a> 시대를 열었다.</p>`,
      facts: [
        { k: "Shuttle kg당", v: "약 $54,500 (NASA)" },
        { k: "Falcon 9 kg당", v: "약 $2,720 (NASA 보고서)" },
        { k: "2025 세계 궤도발사", v: "약 324회 (SpaceNews)" },
        { k: "SpaceX Falcon 9", v: "165회 (2025)" },
        { k: "중국", v: "92회 (2025)" }
      ],
      sowhat: "발사 시장은 SpaceX 독주 구조라 한국 발사체의 상업 경쟁력은 단기적으로 제한적이다. 정책금융은 발사체 자체보다 발사비 하락의 수혜를 받는 위성·서비스 쪽에서 레버리지가 클 수 있다.",
      sources: [
        { label: "NASA NTRS – launch cost report (20200001093)", url: "https://ntrs.nasa.gov/citations/20200001093" },
        { label: "Space.com – SpaceX 165 orbital flights in 2025", url: "https://space.com/space-exploration/private-spaceflight/spacex-shatters-its-rocket-launch-record-yet-again-167-orbital-flights-in-2025" },
        { label: "Payload – 2025 orbital launch attempts by country", url: "https://payloadspace.com/2025-orbital-launch-attempts-by-country/" }
      ]
    },
    {
      id: "orbits",
      title: "위성 궤도와 군집위성",
      en: "Orbits (LEO/MEO/GEO) & Constellations",
      level: "기초",
      tags: ["LEO", "GEO", "MEO", "군집위성", "Starlink"],
      summary: "고도에 따라 지연시간·커버리지·위성 수가 달라진다 — 대세는 LEO 군집",
      body: `<table><thead><tr><th>궤도</th><th>고도(약)</th><th>특징</th><th>용도</th></tr></thead><tbody>
<tr><td>LEO (저궤도)</td><td>160~2,000km</td><td>지연시간 짧음, 1기 커버리지 좁아 다수 필요, 수명 5~7년(약)</td><td>위성인터넷, 지구관측, 정찰</td></tr>
<tr><td>MEO (중궤도)</td><td>2,000~35,786km</td><td>중간</td><td>항법(GPS·Galileo), 일부 통신(O3b)</td></tr>
<tr><td>GEO (정지궤도)</td><td>약 35,786km</td><td>지구 자전과 동기, 3기로 전 지구 커버, 지연 큼, 수명 15년 이상</td><td>방송, 기상, 전통 통신</td></tr>
<tr><td>SSO (태양동기)</td><td>LEO의 일종</td><td>같은 지방시에 통과</td><td>지구관측</td></tr>
</tbody></table>
<h4>군집위성(Constellation)</h4>
<p>수백~수만 기의 LEO 위성을 그물처럼 띄워 전 지구 서비스를 제공한다. <strong>Starlink는 2026년 10월 기준 궤도상 약 1만1,100기</strong>(가동 약 1만800기, KeepTrack 집계)를 운용 중이며, Amazon Kuiper, OneWeb, 중국 국망(궈왕)·천범(첸판) 등이 뒤따르고 있다.</p>
<p>함의: 위성이 <span class="hl">'수공예품'에서 '양산품'</span>으로 바뀌어 제조·부품 공급망의 성격도 자동차 산업에 가까워지고 있다. 동시에 주파수·궤도 선점 경쟁, 우주쓰레기 문제가 부각된다.</p>`,
      facts: [
        { k: "GEO 고도", v: "약 35,786km" },
        { k: "Starlink 궤도상", v: "약 11,131기 (2026.10, KeepTrack)" },
        { k: "Starlink 1만기 돌파", v: "2026년 3월" }
      ],
      sowhat: "LEO 군집의 양산 특성은 한국 제조업(전자·부품)의 강점과 맞닿아 있다. 위성 부품·단말기 공급망 진입을 겨냥한 수출금융이 유망 분야가 될 수 있다.",
      sources: [
        { label: "KeepTrack – How many Starlink satellites are in orbit", url: "https://keeptrack.space/starlink-satellite-count" }
      ]
    },
    {
      id: "kpis",
      title: "산업 핵심 KPI: 백로그·인도대수·Book-to-Bill",
      en: "Key Industry KPIs",
      level: "기초",
      tags: ["백로그", "인도", "Book-to-bill", "KPI"],
      summary: "수주잔고(백로그), 인도대수, 수주/매출 비율로 기업과 산업의 건강도를 본다",
      body: `<table><thead><tr><th>KPI</th><th>정의</th><th>해석</th></tr></thead><tbody>
<tr><td>백로그 (Backlog)</td><td>수주했지만 아직 인도하지 않은 물량·금액</td><td>미래 매출 가시성. 너무 길면 고객 이탈 리스크</td></tr>
<tr><td>인도대수 (Deliveries)</td><td>실제 고객에게 넘긴 대수. 매출 인식 시점</td><td>생산 실행력의 직접 지표</td></tr>
<tr><td>총/순 수주 (Gross/Net Orders)</td><td>신규 주문 (순수주 = 총수주 − 취소)</td><td>수요 강도</td></tr>
<tr><td>Book-to-Bill</td><td>수주액 ÷ 매출액</td><td>&gt;1이면 백로그 증가(성장), &lt;1이면 감소</td></tr>
<tr><td>런레이트</td><td>월간 생산률</td><td>협력사 물량의 선행지표</td></tr>
<tr><td>FCF</td><td>잉여현금흐름</td><td>선수금 구조상 이익보다 중요</td></tr>
</tbody></table>
<h4>2025년 말 기준 수치</h4>
<ul><li>Airbus: 인도 <strong>793대</strong>, 백로그 <strong>8,748대</strong></li>
<li>Boeing: 인도 <strong>600대</strong>, 백로그 <strong>약 6,713대</strong>(737 MAX 4,867대)</li>
<li>Airbus 2026 가이던스: 인도 <strong>약 870대</strong>(2026.10 유지, 1~9월 547대 인도)</li></ul>`,
      facts: [
        { k: "Airbus 백로그", v: "8,748대 (2025말)" },
        { k: "Boeing 백로그", v: "약 6,713대 (2025말)" },
        { k: "Airbus 2026 목표", v: "약 870대 인도" },
        { k: "Airbus 1~9월 인도", v: "547대 (2026)" }
      ],
      sowhat: "국내 협력사 실사 시 '고객 OEM의 백로그 × 탑재 단가 × 점유율'로 매출 가시성을 추정할 수 있다. 백로그가 두터워도 인도 지연 시 현금흐름은 악화되니 런레이트와 함께 볼 것.",
      sources: [
        { label: "Forecast International – Dec 2025 orders & deliveries", url: "https://flightplan.forecastinternational.com/2026/01/15/airbus-and-boeing-report-december-2025-commercial-aircraft-orders-and-deliveries/" },
        { label: "CAPA – Airbus targeting 870 deliveries in 2026", url: "https://centreforaviation.com/news/airbus-targeting-870-commercial-aircraft-deliveries-in-2026-1377560" }
      ]
    },
    {
      id: "cycle",
      title: "경기 사이클: 코로나 후 회복과 공급망 병목",
      en: "Industry Cycle & Supply Chain Bottleneck",
      level: "심화",
      tags: ["사이클", "공급망", "엔진", "코로나"],
      summary: "수요는 회복했으나 엔진·부품·인력 병목으로 '못 만드는' 시대 — 백로그 1.7만 대",
      body: `<p>민항 산업은 여객 수요(경기·유가·사건)에 따라 순환한다. 9·11, 2008 금융위기, 그리고 가장 큰 충격인 <strong>코로나19(2020)</strong>가 있었다.</p>
<h4>2020~2026 흐름</h4>
<ol><li><strong>2020~21 붕괴</strong>: 여객 급감, OEM 감산, 협력사 구조조정·숙련인력 이탈</li>
<li><strong>2022~23 수요 회복</strong>: 여객 회복, 대규모 신규 주문</li>
<li><strong>2024~26 공급 병목</strong>: 엔진(특히 GTF 결함·정비 수요), 주조·단조품, 항전 부품, 인력 부족. 보잉은 2024년 1월 도어플러그 사고로 FAA 생산 상한(38대/월)을 받았다가 단계적으로 해제 중</li></ol>
<p>IATA에 따르면 <strong>수주잔량은 1만7,000대 이상</strong>으로 세계 운항기단의 약 60%, 현 생산능력으로 약 12년치이며, 누적 인도 부족분이 5,300대를 넘는다. IATA·Oliver Wyman은 공급망 병목으로 2025년 항공사 비용이 110억 달러 이상 늘었다고 추정했다. 기체는 다 만들고 <span class="hl">엔진이 없어 세워둔 '글라이더'</span>가 상징적 현상이다.</p>`,
      facts: [
        { k: "수주잔량", v: "1만7,000대 이상 (IATA, 2025말~2026)" },
        { k: "인도 부족분", v: "5,300대 이상 (IATA)" },
        { k: "병목 비용", v: "110억 달러 이상 (2025, IATA·OW 추정)" },
        { k: "737 생산 상한", v: "38 → 42 → 47대/월" }
      ],
      sowhat: "지금은 '수요 리스크'보다 '공급 리스크'의 국면이다. 국내 협력사가 증산 투자로 글로벌 병목을 메울 기회이며, 증산용 설비·운전자금 지원이 정책금융의 타이밍 좋은 개입 지점이다.",
      sources: [
        { label: "Engineering News – IATA urges action on supply chain (2026.06)", url: "https://engineeringnews.co.za/article/iata-urges-action-to-boost-the-aviation-supply-chain-to-cut-the-aircraft-order-backlog-2026-06-25" },
        { label: "Oman Observer – Aircraft orders backlog estimated at 17,000: IATA", url: "https://www.omanobserver.om/article/1182584/business/aviation/aircraft-orders-backlog-estimated-at-17000-iata" }
      ]
    },
    {
      id: "defense-dual-use",
      title: "방산·정부 의존과 듀얼유스",
      en: "Defense, Government & Dual-use",
      level: "심화",
      tags: ["방산", "듀얼유스", "절충교역", "수출통제"],
      summary: "군용·우주는 정부가 고객이자 규제자 — 수출은 사실상 정부 간 거래",
      body: `<p>군용기·위성·발사체는 정부가 <strong>개발비 투자자이자 유일한 고객이자 수출 허가권자</strong>다.</p>
<ul><li><strong>정부 간 거래(G2G)</strong>: 방산 수출은 외교·안보 관계, 현지 생산, 금융조건 패키지 경쟁이 승패를 가름</li>
<li><strong>절충교역(Offset)</strong>: 구매국이 기술이전·현지생산·부품 구매를 요구. 한국도 과거 F-15K 등 도입 시 절충교역으로 기체 구조물 역량을 쌓음</li>
<li><strong>수출통제</strong>: 미국 ITAR(무기 품목)·EAR(듀얼유스)이 대표적. 미국산 부품이 포함되면 제3국 수출에 미국 승인이 필요(KF-21·FA-50 수출 시 이슈)</li>
<li><strong>듀얼유스</strong>: 엔진·복합재·위성·드론 기술은 민·군 공용. 민수 경쟁력과 방산 역량이 서로를 키움</li></ul>
<p>최근 지정학 긴장으로 세계 국방비가 증가하며, 군 우주예산도 Space Foundation 집계 2024년 약 609억 달러로 늘었다.</p>`,
      facts: [
        { k: "세계 군 우주지출", v: "약 609억 달러 (2024, Space Foundation)" },
        { k: "주요 수출통제", v: "ITAR, EAR" }
      ],
      sowhat: "방산 수출에서 '금융조건'은 가격·성능만큼 결정적이다. 수은의 수출금융·보증이 구매국 패키지 경쟁력의 핵심 구성요소라는 점이 이번 과제의 중요한 맥락이다(금융 챕터 참고).",
      sources: [
        { label: "Space Foundation – The Space Report 2025 Q2", url: "https://www.spacefoundation.org/2025/07/22/the-space-report-2025-q2/" }
      ]
    },
    {
      id: "glossary",
      title: "핵심 용어 정리",
      en: "Glossary",
      level: "기초",
      tags: ["용어", "약어"],
      summary: "회의·자료에서 바로 나오는 항공우주 약어 모음",
      body: `<table><thead><tr><th>용어</th><th>뜻</th></tr></thead><tbody>
<tr><td>OEM / Prime</td><td>완제기 제작·통합 업체 / 정부 사업의 주계약자</td></tr>
<tr><td>Tier 1/2/3</td><td>공급망 단계별 협력사</td></tr>
<tr><td>RSP</td><td>Risk Sharing Partner, 개발비 분담 협력사</td></tr>
<tr><td>MRO</td><td>Maintenance, Repair &amp; Overhaul, 정비·수리·분해점검</td></tr>
<tr><td>TC / PC / AC</td><td>형식증명 / 생산증명 / 감항증명</td></tr>
<tr><td>BASA</td><td>양자 항공안전협정 (인증 상호인정)</td></tr>
<tr><td>Narrowbody / Widebody</td><td>협동체(통로 1개, A320·737) / 광동체(통로 2개, A350·787)</td></tr>
<tr><td>Backlog / Book-to-Bill</td><td>수주잔고 / 수주÷매출</td></tr>
<tr><td>Rate</td><td>월간 생산률</td></tr>
<tr><td>AOG</td><td>Aircraft on Ground, 부품 부족 등으로 운항 불가 상태</td></tr>
<tr><td>LEO / MEO / GEO</td><td>저궤도 / 중궤도 / 정지궤도</td></tr>
<tr><td>Payload</td><td>탑재체 (위성·화물)</td></tr>
<tr><td>SAR / EO</td><td>합성개구레이더 / 광학 지구관측</td></tr>
<tr><td>ITAR / EAR</td><td>미국 무기 / 듀얼유스 수출통제 규정</td></tr>
<tr><td>Offset</td><td>절충교역</td></tr>
<tr><td>ECA</td><td>Export Credit Agency, 수출신용기관 (수은이 한국 ECA)</td></tr>
<tr><td>PBH</td><td>Power-by-the-Hour, 비행시간당 정비 과금</td></tr>
</tbody></table>`,
      facts: [],
      sowhat: "",
      sources: []
    }
  ]
});

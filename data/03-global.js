window.ADB = window.ADB || { chapters: [] };
window.ADB.chapters.push({
  id: "global",
  no: 3,
  title: "글로벌 시장과 플레이어",
  en: "Global Landscape",
  icon: "station",
  color: "#B388FF",
  intro: "항공우주 산업은 민항기·엔진, 방산, 우주라는 세 개의 큰 시장으로 구성되며, 각 시장은 소수의 글로벌 프라임(체계종합업체)이 지배한다. 이 챕터는 시장 규모와 지역별 구도, 핵심 기업의 체급(매출·백로그), 그리고 2025~2026년 판을 흔드는 트렌드를 정리한다. 한국 기업과 수은이 어디에 끼어들 수 있는지를 판단하기 위한 지도로 활용하면 된다.",
  takeaways: [
    "세계 군사비 약 2.89조 달러(2025, SIPRI)로 11년 연속 증가했고, 유럽이 +14%로 증가를 이끈다.",
    "우주경제는 6,860억 달러(2025, Space Foundation)이며, WEF·McKinsey는 2035년 1.8조 달러를 전망한다.",
    "민항기는 Boeing·Airbus 듀오폴리 체제이고, 수주잔고가 10년 치를 넘는 반면 인도는 공급망 병목에 막혀 있다.",
    "엔진(GE·Safran·RR·P&W)은 애프터마켓 중심의 고수익 구조로, 항공우주 가치사슬에서 이익률이 가장 높은 구간이다.",
    "SpaceX가 발사와 저궤도 통신을 사실상 독점하는 가운데, 미중 패권 경쟁과 각국의 주권 우주 수요가 새 시장을 만들고 있다."
  ],
  entries: [
    {
      id: "market-overview",
      title: "글로벌 항공우주·방산 시장 한눈에 보기",
      en: "Market Size Overview",
      level: "기초",
      tags: ["시장규모", "방산", "민항", "우주"],
      summary: "방산 약 2.9조 달러, 우주 약 0.7조 달러, 민항기는 연 1,400대 인도 규모",
      body: "<p>항공우주·방산(A&amp;D)은 성격이 다른 세 시장의 묶음이다. 시장마다 고객, 사이클, 금융 수요가 모두 다르므로 함께 보되 따로 이해해야 한다.</p><table><thead><tr><th>구분</th><th>규모(기준연도)</th><th>주요 고객</th><th>특징</th></tr></thead><tbody><tr><td>국방비(전체)</td><td>약 2.89조 달러(2025, SIPRI)</td><td>각국 정부</td><td>11년 연속 증가, 세계 GDP의 2.5%</td></tr><tr><td>우주경제</td><td>약 6,860억 달러(2025, Space Foundation)</td><td>상업 79%, 정부 21%</td><td>위성통신·위성항법 서비스가 큰 비중</td></tr><tr><td>민항기(대형)</td><td>Boeing+Airbus 인도 약 1,393대(2025)</td><td>항공사, 리스사</td><td>듀오폴리, 수주잔고 1만 5천 대 이상(추정)</td></tr><tr><td>엔진·MRO</td><td>GE Aerospace 매출만 459억 달러(2025)</td><td>항공사, 기체 OEM</td><td>애프터마켓 비중이 높아 이익률도 높음</td></tr></tbody></table><p>국방비가 곧 방산 매출은 아니다. 국방비에는 인건비·운영비가 섞여 있고, 그중 장비 획득과 R&amp;D 비중은 대략 25~35%(추정)다. 민항 쪽은 장기 수주잔고 덕분에 가시성이 높고, 우주는 상업 서비스가 성장을 이끈다.</p>",
      facts: [
        { k: "세계 군사비", v: "약 2.89조 달러 (2025, SIPRI)" },
        { k: "우주경제", v: "약 6,860억 달러 (2025, Space Foundation)" },
        { k: "Boeing+Airbus 인도", v: "600 + 793 = 1,393대 (2025)" },
        { k: "유럽 국방비", v: "8,640억 달러, +14% (2025, SIPRI)" }
      ],
      sowhat: "세 시장은 금융 수요가 다르다. 민항은 항공기 금융과 부품 공급망 운전자금, 방산은 수출 계약 이행보증과 구매국 금융(G2G), 우주는 성장자본과 정책펀드가 필요하다. 수은 상품을 설계할 때는 시장별로 나눠서 접근해야 한다.",
      sources: [
        { label: "SIPRI Military Expenditure 2025 Fact Sheet", url: "https://www.sipri.org/sites/default/files/Military%20Expenditure%202025.pdf" },
        { label: "Space Foundation 2026 GSE Report", url: "https://www.spacefoundation.org/wp-content/uploads/2026/07/SF-GSE-REPORT-2026July-FOR-RELEASE.pdf" }
      ]
    },
    {
      id: "space-economy",
      title: "우주경제 규모와 전망",
      en: "Space Economy Outlook",
      level: "기초",
      tags: ["우주경제", "Space Foundation", "McKinsey", "WEF"],
      summary: "2025년 6,860억 달러, 2035년 1.8조 달러 전망. 기관마다 정의가 다르므로 주의",
      body: "<p>우주경제 수치는 발표 기관마다 정의(범위)가 달라서 숫자를 그대로 비교하면 안 된다. 인용할 때는 반드시 출처와 기준연도를 함께 표기하는 것이 원칙이다.</p><table><thead><tr><th>기관</th><th>수치</th><th>정의 범위</th></tr></thead><tbody><tr><td>Space Foundation</td><td>6,860억 달러(2025), +12%</td><td>상업 매출 5,443억 달러 + 정부 예산 약 1,410억 달러</td></tr><tr><td>Space Foundation(직전 판)</td><td>6,130억 달러(2024)</td><td>이후 수정되어 위 수치와 직접 비교 불가</td></tr><tr><td>WEF·McKinsey(2024.4)</td><td>6,300억 달러(2023) → 1.8조 달러(2035)</td><td>Backbone(인프라) + Reach(위성 기반 타 산업 서비스)</td></tr><tr><td>BryceTech</td><td>위성산업 기준 약 4,000억 달러대(추정)</td><td>SIA 위성산업 보고서 기준이며 지상장비·서비스 중심</td></tr></tbody></table><p>WEF·McKinsey 보고서는 연평균 약 9% 성장, 즉 세계 GDP 성장률의 약 2배를 가정한다. 성장의 대부분은 <strong>Reach</strong>, 다시 말해 위성 데이터를 활용하는 공급망·농업·물류 등에서 나온다. 2035년에 Backbone은 약 7,550억 달러, Reach는 1조 달러를 넘을 것으로 본다. 낙관 시나리오는 2.3조 달러다.</p>",
      facts: [
        { k: "2025 우주경제", v: "6,860억 달러 (Space Foundation)" },
        { k: "상업 비중", v: "약 79% (2025)" },
        { k: "2035 전망", v: "1.8조 달러 (WEF·McKinsey, 2024 발표)" },
        { k: "1조 달러 도달", v: "빠르면 2032년 (Space Foundation 전망)" }
      ],
      sowhat: "보고서와 제안서에서 '우주 시장 1.8조 달러'를 인용할 때는 Reach(타 산업 파급) 비중이 크다는 점을 함께 밝혀야 한다. 한국 업체가 실제로 노릴 수 있는 시장은 Backbone 중 위성 제조와 부품, 그리고 일부 다운스트림 서비스다.",
      sources: [
        { label: "WEF press release (2024)", url: "https://www.weforum.org/media/space-economy-set-to-triple-to-1-8-trillion-by-2035-new-research-reveals/" },
        { label: "McKinsey: Space, the $1.8 trillion opportunity", url: "https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/space-the-1-point-8-trillion-dollar-opportunity-for-global-economic-growth" },
        { label: "Space Foundation The Space Report 2025 Q2", url: "https://www.spacefoundation.org/2025/07/22/the-space-report-2025-q2/" },
        { label: "Space Foundation 2026 GSE Report", url: "https://www.spacefoundation.org/wp-content/uploads/2026/07/SF-GSE-REPORT-2026July-FOR-RELEASE.pdf" }
      ]
    },
    {
      id: "regional-landscape",
      title: "지역별 구도",
      en: "Regional Landscape",
      level: "기초",
      tags: ["지역", "미국", "유럽", "중국", "아시아"],
      summary: "미국이 압도적 1강이고 유럽이 재무장으로 2강, 중국은 독자 생태계, 신흥국은 수요처",
      body: "<table><thead><tr><th>지역</th><th>위상</th><th>대표 기업</th><th>키워드</th></tr></thead><tbody><tr><td>미국</td><td>국방비 약 9,540억 달러(2025), 세계 1/3</td><td>Boeing, Lockheed, RTX, GE, SpaceX</td><td>2026 국방예산 1조 달러 이상, 우주 상업화 선도</td></tr><tr><td>유럽</td><td>국방비 8,640억 달러(+14%)</td><td>Airbus, Safran, BAE, Thales, Leonardo, Rheinmetall</td><td>재무장(ReArm Europe), 역내 조달 선호</td></tr><tr><td>중국</td><td>국방비 약 3,360억 달러(+7.4%)</td><td>COMAC, AVIC, CASC</td><td>독자 공급망, 메가 위성군(국망·천범)</td></tr><tr><td>러시아</td><td>세계 3위 국방비</td><td>UAC, Roscosmos</td><td>제재로 수출 시장 축소, 빈자리를 한국 등이 공략</td></tr><tr><td>인도·중동·동남아</td><td>주요 수입국</td><td>HAL, ISRO, EDGE(UAE)</td><td>현지생산·기술이전(오프셋) 요구</td></tr><tr><td>일본·한국</td><td>공급망 Tier 1~2, 체계 일부</td><td>MHI, KHI / KAI, 한화</td><td>방위력 증강, 수출 확대</td></tr></tbody></table><p>민항 수요는 아시아태평양이 가장 크다. Boeing과 Airbus 모두 향후 20년 신규 수요의 약 40%(추정)가 아시아태평양에서 나온다고 본다.</p>",
      facts: [
        { k: "미국 국방비", v: "9,540억 달러 (2025, SIPRI)" },
        { k: "중국 국방비", v: "3,360억 달러 (2025, SIPRI 추정)" },
        { k: "Top 5 비중", v: "세계 군사비의 58% (미·중·러·독·인)" }
      ],
      sowhat: "한국 방산 수출은 러시아의 공백과 유럽의 긴급 소요가 겹친 틈을 파고든 결과다. 앞으로는 유럽의 역내 조달 선호(Buy European)가 진입 장벽이 될 수 있다. 현지 합작이나 현지 생산을 위한 금융 구조를 검토해야 한다.",
      sources: [
        { label: "SIPRI Military Expenditure 2025", url: "https://www.sipri.org/sites/default/files/Military%20Expenditure%202025.pdf" }
      ]
    },
    {
      id: "boeing",
      title: "Boeing (보잉)",
      en: "The Boeing Company",
      level: "기초",
      tags: ["민항기", "방산", "미국", "듀오폴리"],
      summary: "민항·방산·서비스 3개 부문을 가진 미국 최대 항공우주 기업. 2025년 회복세 진입",
      body: "<p>Boeing은 상용기(BCA), 방산·우주·보안(BDS), 글로벌 서비스(BGS) 3개 부문으로 구성된다. 2019년 737 MAX 추락 사고와 2024년 1월 도어플러그 이탈 사고 이후 FAA가 생산량을 제한했고, 2024년에는 파업까지 겹쳐 대규모 적자를 냈다.</p><p>2025년에는 인도량이 600대로 2018년 이후 최대를 기록했다. 매출은 895억 달러로 34% 늘었고 흑자로 전환했지만, 디지털항공 사업부 매각 차익(약 96억 달러)에 따른 일회성 효과가 컸다. 737 생산 상한은 2025년 10월 월 38대에서 42대로 상향된 것으로 보도되었다.</p><ul><li>주력 기종: 737 MAX(협동체), 787(광동체), 777X(인증 지연 중)</li><li>방산: F-15EX, KC-46, MQ-25, 차세대 전투기 F-47 수주(2025)</li><li>Spirit AeroSystems 재인수로 동체 공급망을 내재화했다(2025년 말 완료 보도).</li></ul>",
      facts: [
        { k: "매출", v: "894.6억 달러 (2025)" },
        { k: "총 수주잔고", v: "약 6,820억 달러 (2025년 말, 사상 최대)" },
        { k: "상용기 인도", v: "600대 (2025)" },
        { k: "BDS 수주잔고", v: "약 850억 달러 (2025)" },
        { k: "본사", v: "미국 버지니아주 알링턴" }
      ],
      sowhat: "Boeing의 생산 정상화 속도는 한국 기체부품 업체(KAI, 대한항공 항공우주사업부, 중소 Tier 2~3)의 물량과 직결된다. 생산량이 오를 때마다 공급망 운전자금과 설비투자 금융 수요가 생긴다.",
      sources: [
        { label: "Boeing FY2025 Form 10-K (SEC)", url: "https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm" },
        { label: "AirDataNews: Boeing returns to profit in 2025", url: "https://www.airdatanews.com/boeing-returns-to-profit-in-2025-as-revenues-rise-and-losses-narrow-across-divisions" }
      ]
    },
    {
      id: "airbus",
      title: "Airbus (에어버스)",
      en: "Airbus SE",
      level: "기초",
      tags: ["민항기", "유럽", "듀오폴리", "헬기", "우주"],
      summary: "세계 1위 민항기 제조사. 인도량과 수주잔고 모두 Boeing을 앞선다",
      body: "<p>Airbus는 프랑스·독일·스페인의 항공기 기업이 통합되어 출범한 유럽 기업이다. 상용기, 헬리콥터, 방산·우주(Defence and Space) 3개 부문을 운영하며, 2019년 이후 인도량 기준 세계 1위를 지키고 있다.</p><p>A320neo 패밀리, 특히 A321neo가 협동체 시장에서 우위를 점하고 있다. 그러나 엔진(P&amp;W GTF 결함·공급 부족)과 부품 공급망 문제로 목표 생산률 달성이 지연되고 있다. 2025년 인도는 793대로, 하향 조정한 목표를 달성했다.</p><ul><li>2025년 인도 구성: A220 93대, A320 패밀리 607대, A330 36대, A350 57대</li><li>A320 월 75대 생산 목표는 2027년으로 미뤄졌다(보도 기준).</li><li>방산·우주: Eurofighter 지분 참여, 위성 사업(Thales·Leonardo와 위성사업 통합 추진, 'Project Bromo')</li></ul>",
      facts: [
        { k: "매출", v: "734억 유로 (2025)" },
        { k: "조정 EBIT", v: "약 71억 유로 (2025)" },
        { k: "상용기 인도", v: "793대 (2025)" },
        { k: "수주잔고", v: "8,754대 / 약 6,190억 유로 (2025년 말)" },
        { k: "2026 인도 가이던스", v: "약 870대" },
        { k: "본사", v: "네덜란드 레이던(법인), 프랑스 툴루즈(운영)" }
      ],
      sowhat: "Airbus의 수주잔고는 현재 생산 속도로 10년 치가 넘는다. 이 때문에 공급망의 생산능력 확충 자체가 병목이며, 한국 부품사가 신규 공급자로 진입할 여지가 있다. 증설 금융과 신규 공급자 자격 획득(인증) 지원이 정책금융의 개입 포인트다.",
      sources: [
        { label: "Airbus FY2025 Financial results", url: "https://www.airbus.com/en/annual-press-conference-2026" },
        { label: "Air Cargo Week: Airbus lifts 2026 targets", url: "https://aircargoweek.com/airbus-lifts-2026-targets/" },
        { label: "Aviacionaldia: Airbus closes 2025", url: "https://aviacionaldia.com/en/2026/02/airbus-closes-2025-with-profit-growth-793-deliveries-and-a-record-backlog-of-8754-commercial-aircraft.html" }
      ]
    },
    {
      id: "challengers",
      title: "도전자들: Embraer와 COMAC",
      en: "Embraer & COMAC",
      level: "기초",
      tags: ["리저널제트", "중국", "브라질", "C919"],
      summary: "Embraer는 100석급 이하 강자, COMAC은 국가 주도 듀오폴리 도전자",
      body: "<table><thead><tr><th>항목</th><th>Embraer (브라질)</th><th>COMAC (중국)</th></tr></thead><tbody><tr><td>주력</td><td>E-Jet E2(리저널), 비즈니스제트, KC-390 수송기</td><td>C919(협동체), ARJ21/C909(리저널), C929(광동체, 개발 중)</td></tr><tr><td>2025 실적</td><td>매출 75.8억 달러(+18%), 수주잔고 316억 달러</td><td>C919 인도 약 15~16대(추정, 누적 약 32대)</td></tr><tr><td>강점</td><td>틈새시장 지배력, KC-390의 방산 수출 확대</td><td>내수시장과 국영항공사 대량 주문</td></tr><tr><td>약점</td><td>규모가 작아 대형기 진입이 어려움</td><td>엔진(CFM LEAP-1C)과 항전장비를 서방에 의존, 미국 수출통제 리스크</td></tr></tbody></table><p>COMAC은 2025년 C919 인도 목표를 75대에서 25대로 줄였고, 이마저도 미달한 것으로 보도되었다. 2025년 5월 미국이 LEAP-1C 엔진 수출 라이선스를 일시 중단하면서 서방 부품 의존이 약점이라는 점이 드러났다. 그럼에도 2030년대에는 중국 내수 협동체 시장에서 의미 있는 점유율을 차지할 것으로 전망된다.</p>",
      facts: [
        { k: "Embraer 매출", v: "75.8억 달러 (2025)" },
        { k: "Embraer 수주잔고", v: "약 316억 달러 (2025년 말)" },
        { k: "C919 누적 인도", v: "약 32대 (2025년 말, 보도 기준)" },
        { k: "본사", v: "Embraer 상파울루주 상조제두스캄푸스 / COMAC 상하이" }
      ],
      sowhat: "KC-390은 한국 공군 대형수송기 2차 사업에 선정되어, Embraer와 한국 사이에 산업협력(절충교역) 채널이 열려 있다. COMAC은 미중 수출통제의 리트머스지 역할을 하므로, 중국 프로그램에 납품하는 한국 업체에는 제재 리스크 심사가 필요하다.",
      sources: [
        { label: "Rio Times: Embraer 2025 record revenue", url: "https://www.riotimesonline.com/brazils-embraer-2025-record-7-6b-revenue-31-6b-backlog" },
        { label: "AirInsight: COMAC C919 ambition meets reality", url: "https://airinsight.com/comac-c919-ambition-meets-industrial-reality/" },
        { label: "Gulf Times: COMAC to miss C919 target", url: "https://www.gulf-times.com/article/717477/business/chinas-comac-on-track-to-miss-c919-delivery-target-by-half" }
      ]
    },
    {
      id: "engine-makers",
      title: "엔진 빅3와 CFM",
      en: "Engine OEMs: GE, Rolls-Royce, Pratt & Whitney, CFM",
      level: "심화",
      tags: ["엔진", "애프터마켓", "MRO", "CFM", "RSP"],
      summary: "엔진은 '면도기-면도날' 모델이다. 신규 판매는 손해를 보고 정비·부품으로 수익을 낸다",
      body: "<p>민항 엔진 시장은 GE, Rolls-Royce(RR), Pratt &amp; Whitney(P&amp;W, RTX 계열) 3사와 GE·Safran의 50:50 합작사인 <strong>CFM International</strong>이 과점하고 있다. 엔진은 신품을 원가 이하로 팔고, 이후 25~30년 동안 정비(MRO)와 예비부품, 장기정비계약(TSA/LTSA)으로 수익을 회수하는 구조다.</p><table><thead><tr><th>기업</th><th>주력 엔진</th><th>2025 실적</th><th>비고</th></tr></thead><tbody><tr><td>GE Aerospace</td><td>LEAP(CFM), GEnx, GE9X, F414</td><td>매출 459억 달러(GAAP), 수주 662억 달러</td><td>수주잔고 약 1,900억 달러</td></tr><tr><td>Safran</td><td>LEAP(CFM), 착륙장치, 기내장비</td><td>조정매출 313억 유로(+14.7%)</td><td>LEAP 인도 +28%</td></tr><tr><td>Rolls-Royce</td><td>Trent XWB/7000(광동체 전용)</td><td>기초매출 약 201억 파운드, 영업이익 35억 파운드</td><td>구조조정으로 이익률 17.3%까지 개선</td></tr><tr><td>Pratt &amp; Whitney</td><td>GTF(PW1000G), F135(F-35)</td><td>RTX 내 매출 약 300억 달러대(추정)</td><td>분말금속 결함으로 GTF 대량 지상대기</td></tr></tbody></table><p>A320neo는 LEAP-1A와 GTF 중 하나를 고르고, 737 MAX는 LEAP-1B를 단독 탑재한다. 따라서 협동체 엔진 시장에서는 CFM이 절대 강자다.</p>",
      facts: [
        { k: "GE Aerospace 매출", v: "459억 달러 (2025, GAAP)" },
        { k: "Safran 조정매출", v: "313억 유로 (2025)" },
        { k: "RR 기초매출", v: "약 201억 파운드 (2025)" },
        { k: "RTX 총 매출", v: "886억 달러 (2025, P&W 포함)" },
        { k: "본사", v: "GE 미국 신시내티, Safran 파리, RR 런던, P&W 미국 코네티컷" }
      ],
      sowhat: "한화에어로스페이스는 GE·P&W·RR과 RSP(국제공동개발, 수익·위험 분담) 계약으로 부품을 공급한다. RSP는 개발 초기에 대규모 선투자를 하고 수십 년에 걸쳐 회수하는 구조라, 장기 정책금융이 꼭 맞는 영역이다.",
      sources: [
        { label: "GE Aerospace Q4 2025 results", url: "https://www.geaerospace.com/news/press-releases/ge-aerospace-announces-fourth-quarter-2025-results" },
        { label: "Safran 2025 results press release", url: "https://www.safran-group.com/pressroom/safran-reports-excellent-financial-performance-2025-and-raises-its-2028-ambitions-2026-02-13" },
        { label: "Rolls-Royce 2025 full year results", url: "https://www.rolls-royce.com/media/press-releases/2026/26-02-2026-rr-holdings-plc-2025-full-year-results" },
        { label: "GovConWire: RTX 2025 results", url: "https://www.govconwire.com/articles/rtx-2025-financial-results-2026-outlook" }
      ]
    },
    {
      id: "us-defense-primes",
      title: "미국 방산 프라임",
      en: "US Defense Primes",
      level: "기초",
      tags: ["방산", "미국", "프라임", "백로그"],
      summary: "Lockheed·RTX·Northrop·GD·Boeing BDS 5대 프라임이 미 국방 획득을 지배",
      body: "<p>냉전 이후 1990년대 '최후의 만찬' 통합을 거치면서 미국 방산은 5대 프라임 체제로 재편되었다. 이들은 전 세계 방산 매출 상위권을 차지하며, FMS(대외군사판매)를 통해 동맹국 시장에서도 지배적 지위를 가진다.</p><table><thead><tr><th>기업</th><th>2025 매출</th><th>수주잔고(2025년 말)</th><th>대표 제품</th></tr></thead><tbody><tr><td>Lockheed Martin</td><td>약 750억 달러(보도 기준)</td><td>1,936억 달러</td><td>F-35, PAC-3, THAAD, C-130</td></tr><tr><td>RTX</td><td>886억 달러(민항 포함)</td><td>2,680억 달러(방산 1,070억)</td><td>Patriot, AMRAAM, SM-6, P&amp;W 엔진</td></tr><tr><td>General Dynamics</td><td>약 526억 달러(추정)</td><td>1,180억 달러(+30%)</td><td>Gulfstream, 잠수함, M1 전차</td></tr><tr><td>Northrop Grumman</td><td>420억 달러</td><td>957억 달러</td><td>B-21, Sentinel ICBM, 우주체계</td></tr><tr><td>Boeing BDS</td><td>Boeing 매출에 포함</td><td>약 850억 달러</td><td>F-15EX, F-47, KC-46</td></tr></tbody></table><p>유도탄(Patriot·PAC-3·SM 계열)은 우크라이나와 중동 수요로 증산이 진행 중이다. 그러나 고체로켓모터와 에너지물질 같은 하위 공급망이 병목으로 작용하고 있다.</p>",
      facts: [
        { k: "Lockheed 수주잔고", v: "1,936억 달러 (2025년 말, 10-K)" },
        { k: "RTX 수주잔고", v: "2,680억 달러 (2025년 말)" },
        { k: "Northrop 매출/잔고", v: "420억 / 957억 달러 (2025)" },
        { k: "GD 수주잔고", v: "1,180억 달러 (2025년 말)" },
        { k: "본사", v: "LM 베데스다, RTX 알링턴, NOC 폴스처치, GD 레스턴" }
      ],
      sowhat: "미국 프라임은 경쟁자이면서 동시에 고객이다. 한국 기업은 미국 프라임의 Tier 2~3 공급자(소재, 정밀가공, 탄약 부품)로 들어가거나, 미 해군 MRO처럼 니치 시장을 공략할 수 있다. 미국 현지 거점 투자를 위한 금융 수요가 커지고 있다.",
      sources: [
        { label: "Lockheed Martin FY2025 10-K (SEC)", url: "https://www.sec.gov/Archives/edgar/data/936468/000162828026004195/lmt-20251231.htm" },
        { label: "Northrop Grumman FY2025 10-K (SEC)", url: "https://www.sec.gov/Archives/edgar/data/1133421/000113342126000003/noc-20251231.htm" },
        { label: "Defence Industry EU: RTX 2025 sales", url: "https://defence-industry.eu/rtx-reports-88-6-billion-in-2025-sales-and-projects-higher-earnings-and-cash-flow-in-2026/" },
        { label: "Barchart: GD Q4 deep dive", url: "https://www.barchart.com/story/news/37291381/gd-q4-deep-dive-orders-surge-supply-chain-and-margin-pressures-persist" }
      ]
    },
    {
      id: "european-defense",
      title: "유럽 방산·항공우주 기업",
      en: "European Champions",
      level: "기초",
      tags: ["방산", "유럽", "BAE", "Thales", "Leonardo"],
      summary: "BAE·Thales·Leonardo·Safran·Rheinmetall이 유럽 재무장의 최대 수혜자",
      body: "<table><thead><tr><th>기업</th><th>국가</th><th>2025 실적</th><th>핵심 사업</th></tr></thead><tbody><tr><td>BAE Systems</td><td>영국</td><td>매출 307억 파운드, 수주잔고 836억 파운드</td><td>Eurofighter, GCAP, 잠수함, 미국 법인(BAE Inc.)</td></tr><tr><td>Thales</td><td>프랑스</td><td>수주 253억 유로, 매출 약 220억 유로대(추정)</td><td>레이더·방공, 항전, 위성(TAS), 사이버</td></tr><tr><td>Leonardo</td><td>이탈리아</td><td>매출 195억 유로(+11%), 수주 238억 유로</td><td>헬기(AW 시리즈), 방산전자, DRS(미국)</td></tr><tr><td>Safran</td><td>프랑스</td><td>조정매출 313억 유로</td><td>엔진, 착륙장치, 방산 광학</td></tr><tr><td>Rheinmetall</td><td>독일</td><td>고성장(2025 매출 약 100억 유로대, 추정)</td><td>탄약, 전차, 장갑차</td></tr><tr><td>Dassault Aviation</td><td>프랑스</td><td>-</td><td>Rafale, Falcon 비즈니스제트</td></tr></tbody></table><p>유럽에서는 차세대 전투기를 두고 두 진영이 경쟁한다. 하나는 GCAP(영국·이탈리아·일본)이고, 다른 하나는 FCAS/SCAF(프랑스·독일·스페인)다. FCAS는 Dassault와 Airbus의 주도권 갈등으로 차질이 생겼다는 보도가 이어졌다. 위성 부문에서는 Airbus·Thales·Leonardo가 통합 법인 설립을 추진 중이다.</p>",
      facts: [
        { k: "BAE 매출", v: "307억 파운드 (2025)" },
        { k: "BAE 수주잔고", v: "836억 파운드 (2025년 말)" },
        { k: "Leonardo 매출", v: "195억 유로 (2025)" },
        { k: "Thales 수주", v: "253억 유로 (2025)" }
      ],
      sowhat: "유럽 기업은 한국 방산의 경쟁자이자 협력 파트너다. 폴란드·루마니아 사례처럼 현지 생산 조건이 붙는 대형 수출에서는 유럽 기업과의 컨소시엄이나 합작이 유리할 수 있다. 수은은 이런 다국적 구조에 맞는 금융 패키지를 고민해야 한다.",
      sources: [
        { label: "BAE Systems 2025 full year results", url: "https://www.baesystems.com/en/article/2025-full-year-results" },
        { label: "Thales 2025 full-year results", url: "https://www.thalesgroup.com/en/news-centre/press-releases/thales-reports-its-2025-full-year-results" },
        { label: "Helicopter Investor: Leonardo 2025", url: "https://www.helicopterinvestor.com/?p=104666" }
      ]
    },
    {
      id: "spacex",
      title: "SpaceX (스페이스X)",
      en: "SpaceX / Starlink / Starship",
      level: "기초",
      tags: ["뉴스페이스", "발사체", "Starlink", "Starship", "IPO"],
      summary: "재사용 발사체로 발사 시장을 장악하고, Starlink로 현금을 버는 수직계열화 기업",
      body: "<p>SpaceX는 Falcon 9 1단 재사용으로 발사 단가를 크게 낮췄고, 현재 세계 궤도 발사 횟수의 과반을 수행한다. 발사 능력을 바탕으로 저궤도 위성통신 <strong>Starlink</strong>를 구축했으며, Starlink가 회사 매출의 60% 이상을 차지하는 현금창출원이 되었다.</p><ul><li><strong>재무</strong>: 2026년 상장 신청서(S-1)에 따르면 2025년 매출은 186.7억 달러이고, 이 중 Connectivity(Starlink) 부문이 113.9억 달러다. 순손실은 49억 달러로 Starship과 xAI 관련 투자 영향이 크다(보도 기준).</li><li><strong>Starlink</strong>: 가입자는 2025년 말 약 890만 명이며 2026년 1분기 1,000만 명을 돌파했다. 반면 ARPU는 월 81달러로 하락 추세다.</li><li><strong>Starship</strong>: 완전 재사용 초대형 발사체다. V3 기체로 2026년 9월 첫 궤도 비행과 Starlink V3 위성 배치에 성공했다는 보도가 있으며, 상부단 회수는 아직 이루어지지 않았다.</li><li><strong>IPO</strong>: 2026년 6월 나스닥 상장 보도가 있다(정확한 공모 규모와 가치평가는 확인 필요).</li></ul>",
      facts: [
        { k: "매출", v: "186.7억 달러 (2025, S-1 보도 기준)" },
        { k: "Starlink 매출", v: "113.9억 달러 (2025)" },
        { k: "Starlink 가입자", v: "약 890만 (2025년 말), 1,030만 (2026.3월)" },
        { k: "본사", v: "미국 텍사스 스타베이스" }
      ],
      sowhat: "SpaceX는 고객(한국 위성 발사 대행), 경쟁자(국산 발사체), 그리고 벤치마크(재사용·수직계열화)라는 세 가지 얼굴을 가진다. 한국 우주산업 경쟁력 전략은 'SpaceX와 정면 대결하지 않는 영역'을 찾는 데서 출발해야 한다.",
      sources: [
        { label: "Via Satellite: SpaceX IPO filing financials", url: "https://www.satellitetoday.com/finance/2026/05/20/spacexs-ipo-filing-gives-first-look-into-companys-financials/" },
        { label: "Morningstar: SpaceX S-1 financials", url: "https://www.morningstar.com/stocks/6-charts-spacexs-s-1-financials" },
        { label: "RotatePilot: Starship reaches orbit (2026.9)", url: "https://rotatepilot.com/news/spacex-starship-reaches-orbit-for-first-time-despite-engine-shutdown-2026-09-28" }
      ]
    },
    {
      id: "launch-providers",
      title: "발사 서비스 경쟁자들",
      en: "Launch Providers",
      level: "심화",
      tags: ["발사체", "Blue Origin", "Rocket Lab", "ULA", "Arianespace"],
      summary: "SpaceX 이외의 발사 업체들은 '대안 공급자'이자 주권 발사 수단으로서 가치를 가진다",
      body: "<table><thead><tr><th>기업</th><th>국가/소유</th><th>주력 발사체</th><th>포지션</th></tr></thead><tbody><tr><td>Blue Origin</td><td>미국(제프 베이조스)</td><td>New Glenn(대형, 1단 재사용), New Shepard(준궤도)</td><td>2025년 New Glenn 첫 발사, Amazon Leo 발사 담당, 달착륙선(Blue Moon)</td></tr><tr><td>ULA</td><td>미국(Boeing·Lockheed 합작)</td><td>Vulcan Centaur(Atlas V 퇴역)</td><td>미 국가안보 발사(NSSL) 2강, 2026년 7월 Atlas V 마지막 발사</td></tr><tr><td>Rocket Lab</td><td>미국/뉴질랜드, 나스닥 상장</td><td>Electron(소형), Neutron(중형, 개발 중)</td><td>소형 발사 1위, 위성 부품·버스까지 수직계열화</td></tr><tr><td>Arianespace</td><td>유럽(ArianeGroup)</td><td>Ariane 6, Vega-C</td><td>유럽의 독자적 발사 접근 수단, 2026년 Amazon Leo 발사</td></tr><tr><td>CASC 및 민영기업</td><td>중국</td><td>창정 시리즈, 민영 주췌·톈룽 등</td><td>미국 다음으로 발사 횟수가 많음</td></tr><tr><td>ISRO/NSIL</td><td>인도</td><td>PSLV, LVM3</td><td>저가 상업 발사</td></tr><tr><td>MHI</td><td>일본</td><td>H3</td><td>일본의 주력 발사체</td></tr></tbody></table><p>대부분의 정부는 국가안보 위성을 자국 발사체로 쏘려고 한다. 이것이 각국이 SpaceX보다 비싼 발사체를 유지하는 이유다.</p>",
      facts: [
        { k: "Amazon Leo 궤도 위성", v: "396기 (2026.7월 보도 기준)" },
        { k: "Atlas V", v: "2026.7월 마지막 비행" },
        { k: "Rocket Lab 매출", v: "약 6억 달러 내외 (2025, 추정)" }
      ],
      sowhat: "누리호 이후 한국 발사체의 상업 경쟁력은 가격으로 판단하기 어렵다. '주권 발사 수단'이라는 공공재 성격과 소형 발사 틈새시장으로 정당화해야 하며, 정책금융의 역할도 같은 논리에서 설계해야 한다.",
      sources: [
        { label: "Advanced Television: Amazon Leo launch (2026.7)", url: "https://www.advanced-television.com/2026/07/03/success-for-amazon-leo-launch/" }
      ]
    },
    {
      id: "asia-players",
      title: "아시아 플레이어: 일본 MHI·인도 ISRO·중국",
      en: "Japan, India, China",
      level: "심화",
      tags: ["일본", "인도", "중국", "MHI", "ISRO", "AVIC"],
      summary: "일본은 공급망 강자, 인도는 저가 우주와 방산 국산화, 중국은 완전 독자 생태계",
      body: "<table><thead><tr><th>국가</th><th>핵심 주체</th><th>강점</th><th>최근 동향</th></tr></thead><tbody><tr><td>일본</td><td>MHI(미쓰비시중공업), KHI, IHI, JAXA</td><td>787 날개 등 Boeing 공급망의 핵심, H3 발사체</td><td>스페이스젯(MRJ) 개발 중단(2023), GCAP 참여, 방위비 GDP 2% 조기 달성 추진</td></tr><tr><td>인도</td><td>ISRO, HAL, NSIL, 민간(Skyroot 등)</td><td>저비용 우주 개발(찬드라얀-3 달 착륙)</td><td>우주 민간 개방(IN-SPACe), 유인우주선 가간얀 추진, 방산 국산화(Make in India)</td></tr><tr><td>중국</td><td>AVIC, COMAC, CASC, CASIC</td><td>국가 주도 대규모 투자, 독자 우주정거장(톈궁)</td><td>메가 위성군(국망, 천범) 구축, 민영 발사체 급성장, 유인 달착륙 2030 목표</td></tr></tbody></table><p>일본은 완제기를 직접 만들기보다 Boeing 787 구조물의 약 35%를 생산하는 Tier 1 공급자 전략으로 성공했다. 반면 독자 여객기 사업인 스페이스젯은 형식증명 장벽을 넘지 못하고 실패했다.</p>",
      facts: [
        { k: "787 일본 분담률", v: "기체 구조물 약 35% (일반 인용치)" },
        { k: "인도 찬드라얀-3", v: "2023.8월 달 남극 인근 착륙" },
        { k: "본사", v: "MHI 도쿄 / ISRO 벵갈루루" }
      ],
      sowhat: "일본 사례는 한국에 두 가지 교훈을 준다. 'Tier 1 공급망 집중' 전략은 성공했고, '완제기 독자 개발'은 인증 장벽에 막혀 실패했다. 한국 민항기 전략과 정책금융 배분을 판단할 때 핵심 비교 사례다.",
      sources: []
    },
    {
      id: "trend-duopoly-delivery",
      title: "트렌드① 민항기 듀오폴리와 인도 지연",
      en: "Duopoly & Delivery Delays",
      level: "심화",
      tags: ["트렌드", "민항", "수주잔고", "인도지연"],
      summary: "수요는 넘치는데 공급이 따라가지 못한다. 수주잔고는 사상 최대, 인도는 2018년 수준",
      body: "<p>코로나 이후 항공 수요는 완전히 회복했지만, 기체 인도는 여전히 2018년 정점(Boeing 806대, Airbus 800대)에 못 미친다.</p><ul><li><strong>원인</strong>: Boeing의 품질·규제 리스크, 엔진 결함(P&amp;W GTF), 공급망 인력 부족, 소재·주단조품 병목</li><li><strong>결과</strong>: 항공사는 노후 기재를 연장 운용하고, 중고기와 리스 가격, 엔진 MRO 수요가 급등했다. 리스사(AerCap 등)와 MRO 업체가 반사이익을 얻었다.</li><li><strong>신규 진입</strong>: COMAC이 유일하게 의미 있는 도전자다. 다만 엔진을 서방에 의존하고 서방 인증(EASA)이 없어서 단기적으로는 중국 내수용에 머문다.</li></ul><p>민항기 시장은 1,000억 달러 이상의 개발비, 형식증명, 글로벌 정비망이라는 3대 진입장벽 때문에 듀오폴리가 구조적으로 유지된다.</p>",
      facts: [
        { k: "Airbus 수주잔고", v: "8,754대 (2025년 말)" },
        { k: "Boeing 상용 잔고", v: "5,673억 달러 (2025년 말)" },
        { k: "2025 인도 합계", v: "1,393대 (Boeing 600 + Airbus 793)" }
      ],
      sowhat: "인도 지연은 한국 부품사에 '물량은 확보되었지만 언제 매출로 잡힐지 모르는' 불확실성을 준다. 정책금융은 생산 확대에 맞춘 운전자금, 그리고 고객 일정 변동을 흡수할 수 있는 유연한 만기 구조를 제공해야 한다.",
      sources: [
        { label: "Boeing FY2025 Form 10-K (SEC)", url: "https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm" },
        { label: "AirInsight: Airbus delivers record 2025", url: "https://airinsight.com/airbus-delivers-record-2025-sets-steady-2026-pace/" }
      ]
    },
    {
      id: "trend-supply-chain",
      title: "트렌드② 공급망 병목",
      en: "Supply Chain Bottlenecks",
      level: "심화",
      tags: ["트렌드", "공급망", "주단조", "엔진", "탄약"],
      summary: "주단조·주물, 엔진 부품, 반도체, 숙련공, 고체로켓모터가 대표적 병목",
      body: "<p>항공우주 공급망은 인증을 받은 소수 공급자에 의존하기 때문에 생산을 빠르게 늘리기 어렵다. 신규 공급자가 인증을 받는 데만 수년이 걸린다.</p><table><thead><tr><th>병목 품목</th><th>영향</th><th>원인</th></tr></thead><tbody><tr><td>대형 주단조·정밀주물(터빈 블레이드 등)</td><td>엔진·기체 인도 지연</td><td>PCC·Howmet 등 소수 업체 과점, 설비 리드타임</td></tr><tr><td>엔진 완제품</td><td>엔진 없는 '글라이더' 기체 적체</td><td>신규 엔진 내구성 문제, 애프터마켓과 물량 경합</td></tr><tr><td>티타늄·특수소재</td><td>원가 상승</td><td>러시아(VSMPO) 의존 축소</td></tr><tr><td>고체로켓모터·에너지물질</td><td>미사일 증산 지연</td><td>미국 내 공급자 2~3곳</td></tr><tr><td>숙련 인력</td><td>품질 문제, 생산성 저하</td><td>코로나 시기 이탈, 고령화</td></tr></tbody></table><p>미국과 유럽은 공급망 다변화와 우방국 조달(friend-shoring)을 추진하고 있으며, 이는 한국 업체에 기회 요인이다. 엔진 측면은 <a data-ref=\"global/engine-makers\">엔진 빅3와 CFM</a>, 정책금융 대응은 <a data-ref=\"finance\">정책금융 챕터</a>를 참조하라.</p>",
      facts: [
        { k: "Boeing 주문 취소", v: "110.9억 달러 (2025)" },
        { k: "C919 2025 목표", v: "75대 → 25대 하향 (보도 기준)" }
      ],
      sowhat: "공급망 병목은 이번 KEXIM 프로젝트의 핵심 기회 영역이다. 한국의 소재·주단조·정밀가공 업체가 글로벌 OEM의 신규 인증 공급자로 들어가도록 설비투자 금융, 인증 비용 지원, 수출 선급금 보증을 패키지로 묶는 방안을 검토할 만하다.",
      sources: [
        { label: "Afrviator: Airbus FY2025 (engine shortages)", url: "https://afrviator.org/aerospace/airbus-fy2025-results-793-aircraft-delivered-7-1bn-ebit-adjusted" },
        { label: "Travel Extra: COMAC slashes C919 target", url: "https://www.travelextra.ie/?p=89129" }
      ]
    },
    {
      id: "trend-defense-spending",
      title: "트렌드③ 국방비 증가와 유럽 재무장",
      en: "Defense Spending & European Rearmament",
      level: "기초",
      tags: ["트렌드", "NATO", "5%", "재무장", "방산수출"],
      summary: "NATO 'GDP 5%(핵심 3.5% + 관련 1.5%), 2035년까지' 합의로 장기 슈퍼사이클 진입",
      body: "<p>2025년 6월 헤이그 NATO 정상회의에서 회원국은 2035년까지 국방 관련 지출을 GDP의 5%로 늘리기로 합의했다. 이 중 3.5%는 병력·작전·장비 같은 핵심 국방비이고, 1.5%는 인프라·회복력 같은 안보 관련 투자다. 스페인은 사실상 예외를 인정받았다.</p><ul><li>SIPRI에 따르면 2025년 세계 군사비는 약 2.89조 달러(실질 +2.9%)이고, 유럽은 8,640억 달러(+14%)로 가장 빠르게 늘었다.</li><li>미국은 2025년 9,540억 달러로 7.5% 줄었지만, 2026년 의회 승인액은 1조 달러를 넘는다.</li><li>EU는 ReArm Europe/Readiness 2030, SAFE(1,500억 유로 대출 기구) 등으로 공동 조달과 역내 생산을 유도한다.</li></ul><p>유럽의 수요는 탄약, 방공, 장갑차, 자주포처럼 '지금 당장 필요한' 품목에 집중되어 있다. 이런 품목은 생산능력과 납기가 경쟁력을 좌우한다.</p>",
      facts: [
        { k: "NATO 목표", v: "GDP 5% (핵심 3.5% + 관련 1.5%), 2035년까지" },
        { k: "세계 군사비", v: "2.89조 달러 (2025)" },
        { k: "유럽 증가율", v: "+14% (2025)" },
        { k: "미국 2026 예산", v: "1조 달러 이상 (의회 승인 기준)" }
      ],
      sowhat: "대형 방산 수출(폴란드 K2·K9 등)에서는 구매국 금융이 수주의 성패를 가른다. 수은의 수출금융 한도(법정 자본금, 동일인 여신한도) 확충과 상업은행 공동금융은 방산 수출 경쟁력의 핵심 인프라다. (정책금융 챕터 참조)",
      sources: [
        { label: "Defense News: NATO allies agree 5%", url: "https://www.defensenews.com/global/europe/2025/06/25/nato-allies-agree-to-boost-defense-spending-to-5-at-the-hague-summit/" },
        { label: "OSW: NATO summit in The Hague", url: "https://www.osw.waw.pl/en/publikacje/osw-commentary/2025-06-26/nato-summit-hague-trumps-return-and-a-two-component-5-gdp" },
        { label: "SIPRI Military Expenditure 2025", url: "https://www.sipri.org/sites/default/files/Military%20Expenditure%202025.pdf" }
      ]
    },
    {
      id: "trend-newspace-investment",
      title: "트렌드④ 뉴스페이스 투자",
      en: "NewSpace Investment",
      level: "심화",
      tags: ["트렌드", "뉴스페이스", "VC", "IPO", "SPAC"],
      summary: "SPAC 버블(2021)과 조정기를 거쳐, SpaceX 상장과 방산·안보 수요로 재점화",
      body: "<p>뉴스페이스는 정부가 아닌 민간 자본이 주도하는 우주산업을 말한다. 투자 사이클은 세 국면으로 나눠 볼 수 있다.</p><ol><li><strong>2020~2021 과열</strong>: SPAC 상장 붐이 일었다(Rocket Lab, Planet, Spire 등). 상당수 기업의 주가가 이후 크게 하락했다.</li><li><strong>2022~2023 조정</strong>: 금리 인상으로 투자가 위축되었고 일부 기업이 파산했다(Virgin Orbit 등).</li><li><strong>2024~2026 재점화</strong>: 방산·안보용 우주(감시정찰, 미사일 경보 위성군), Starlink의 수익성 입증, 2026년 SpaceX 상장(보도 기준)이 겹치며 투자 심리가 회복되었다.</li></ol><p>Space Foundation은 2027년 비(非)미국 군사우주 지출이 거의 2배로 늘 것으로 전망한다. 투자 테마는 '상업용 우주'에서 '안보용 이중용도(dual-use) 우주'로 옮겨가고 있다.</p>",
      facts: [
        { k: "상업 우주 매출", v: "5,443억 달러 (2025, Space Foundation)" },
        { k: "정부 우주예산", v: "약 1,410억 달러 (2025, +7.4%)" },
        { k: "SpaceX 상장", v: "2026.6월 나스닥 (보도 기준)" }
      ],
      sowhat: "한국 뉴스페이스 기업은 초기(시드~시리즈B) 이후 성장 자본이 부족하다. 정책펀드 출자, 벤처대출, 수출계약을 담보로 한 금융 등 '데스밸리 구간'의 금융 공백을 메우는 것이 수은·정책금융의 차별화 포인트가 될 수 있다.",
      sources: [
        { label: "Payload: breaking down the $686B space economy", url: "https://payloadspace.com/breaking-down-the-686b-space-economy/" },
        { label: "Nasdaq: Why the 2026 SpaceX IPO is about Starlink", url: "https://www.nasdaq.com/articles/why-2026-spacex-ipo-actually-all-about-starlink" }
      ]
    },
    {
      id: "trend-us-china-space",
      title: "트렌드⑤ 우주 패권 경쟁 (미국과 중국)",
      en: "US-China Space Race",
      level: "심화",
      tags: ["트렌드", "미중경쟁", "아르테미스", "우주군", "수출통제"],
      summary: "달 유인착륙(아르테미스 대 중국 2030), 군사우주, 위성군 경쟁의 3중 레이스",
      body: "<table><thead><tr><th>영역</th><th>미국 진영</th><th>중국 진영</th></tr></thead><tbody><tr><td>유인 달 탐사</td><td>아르테미스 프로그램(아르테미스 협정 서명국 50여 개국, 한국 포함)</td><td>2030년 유인 달착륙 목표, 러시아와 국제달연구기지(ILRS) 추진</td></tr><tr><td>우주정거장</td><td>ISS 2030년 퇴역 후 상업 정거장으로 전환</td><td>톈궁 정거장 운용 중</td></tr><tr><td>군사우주</td><td>우주군(USSF), 골든돔 미사일방어 구상, 확산형 저궤도 위성군(SDA)</td><td>반위성(ASAT) 역량, 정찰위성 급증</td></tr><tr><td>위성통신</td><td>Starlink, Amazon Leo</td><td>국망(GW, 약 1만 3천 기 계획), 천범(Qianfan, 약 1만 4천 기 계획)</td></tr></tbody></table><p>미국은 ITAR(국제무기거래규정)와 수출통제로 기술 이전을 엄격히 관리한다. 한국 우주 기업이 미국 부품을 쓰거나 미국 시장에 진출하려면 ITAR 준수가 필수다.</p>",
      facts: [
        { k: "중국 위성군 계획", v: "국망 약 1.3만 기, 천범 약 1.4만 기 (계획 기준, 추정)" },
        { k: "중국 달착륙 목표", v: "2030년 (유인)" },
        { k: "한국", v: "아르테미스 협정 서명 (2021)" }
      ],
      sowhat: "한국은 아르테미스 진영에 속해 있어 미국 진영 공급망에 참여할 기회를 얻을 수 있다. 반면 중국 시장과 부품에 대한 의존은 리스크가 된다. 정책금융 심사에 수출통제·제재 준수 체크리스트를 반영할 필요가 있다.",
      sources: []
    },
    {
      id: "trend-leo-broadband",
      title: "트렌드⑥ 저궤도 위성통신 경쟁",
      en: "LEO Broadband Race",
      level: "심화",
      tags: ["트렌드", "LEO", "Starlink", "Amazon Leo", "OneWeb", "IRIS2"],
      summary: "Starlink 독주 속에 Amazon Leo, Eutelsat OneWeb, EU IRIS², 중국 위성군이 추격",
      body: "<table><thead><tr><th>위성군</th><th>운영자</th><th>현황</th></tr></thead><tbody><tr><td>Starlink</td><td>SpaceX</td><td>가입자 1,000만 명 이상(2026.3월), 위성 수천 기, D2C(휴대폰 직접 연결) 추진</td></tr><tr><td>Amazon Leo(구 Kuiper)</td><td>Amazon</td><td>약 400기(2026.7월), 2026년 베타 서비스, 2029년까지 약 3,200기</td></tr><tr><td>OneWeb</td><td>Eutelsat(프랑스·영국 정부 지분)</td><td>1세대 약 600기 운용, 2세대 준비</td></tr><tr><td>IRIS²</td><td>EU</td><td>주권 보안통신 위성군, 2030년 전후 서비스 목표(추정)</td></tr><tr><td>국망·천범</td><td>중국</td><td>대량 발사 진행 중</td></tr></tbody></table><p>저궤도 통신은 위성 제조, 발사, 지상단말, 서비스로 이어지는 수직계열화 경쟁이다. 우크라이나 전쟁에서 Starlink가 전장 통신의 핵심 역할을 하면서 각국에서 '주권 위성통신' 수요가 커졌다.</p>",
      facts: [
        { k: "Starlink 가입자", v: "1,030만 (2026.3월, S-1 보도 기준)" },
        { k: "Amazon Leo 궤도", v: "396기 (2026.7월)" },
        { k: "Amazon Leo 목표", v: "약 3,200기, 2029.7월 기한" }
      ],
      sowhat: "한국은 독자 저궤도 위성군을 구축하기에는 규모가 작다. 위성 탑재체·안테나·단말기 등 부품 공급자로 참여하거나, 국방용 소규모 위성군을 구축하는 쪽이 현실적이다. 단말기와 위성 부품 수출에 대한 금융 지원 수요가 생길 것이다.",
      sources: [
        { label: "Advanced Television: Amazon Leo launch", url: "https://www.advanced-television.com/2026/07/03/success-for-amazon-leo-launch/" },
        { label: "Broadband Breakfast: Starlink is paying the bills", url: "https://broadbandbreakfast.com/spacex-ready-to-go-public-in-massive-ipo-reveals-that-starlink-is-paying-the-bills" }
      ]
    }
  ]
});

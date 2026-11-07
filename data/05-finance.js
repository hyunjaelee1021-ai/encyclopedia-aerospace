window.ADB = window.ADB || { chapters: [] };
window.ADB.chapters.push({
  id: "finance",
  no: 5,
  title: "정책금융 & 수출금융",
  en: "Export Credit & Finance",
  icon: "coin",
  color: "#FFD600",
  intro: "이 프로젝트의 핵심 챕터다. 수출신용기관(ECA)의 개념과 한국 정책금융기관의 역할 분담, 수출금융·보증 상품, 항공기금융 구조와 OECD 규범, 방산·우주 금융의 특수성, 해외 ECA 벤치마크, 그리고 '금융 지원 갭' 가설까지 한 번에 정리한다.",
  takeaways: [
    "ECA는 시장이 감당하지 못하는 장기·대형·국가위험을 떠안아 자국 수출을 지원하는 공적 금융기관이며, 한국은 수은(대출·보증)과 무보(보험)가 양대 축이다.",
    "항공기·방산·우주는 '고가·장기·정부 상대' 거래라 금융 조건 자체가 수주 경쟁력이다 — 폴란드 K2 사례가 대표적이다.",
    "민항기 수출금융은 OECD 항공기 부문 양해(ASU)가 최소 프리미엄·최장 12년·선납 15% 등 조건을 묶어 '금리 경쟁'을 막는다.",
    "수은법 개정(2024.2)으로 법정자본금이 15조→25조원으로 늘었지만, 동일차주 신용공여 한도(자기자본 대비)는 여전히 대형 G2G 수주의 병목이다.",
    "가설상 금융 갭은 대기업 완제품보다 중소 Tier2/3 운전자본, 인증비용, 장기 R&D, 우주 스타트업 성장자금에 집중된다."
  ],
  entries: [
    {
      id: "eca-concept",
      title: "수출신용기관(ECA)이란",
      en: "Export Credit Agency",
      level: "기초",
      tags: ["ECA", "정책금융", "OECD"],
      summary: "정부를 대신해 수출 거래의 장기·국가위험을 대출·보증·보험으로 떠안는 공적기관",
      body: `<p><strong>ECA(Export Credit Agency)</strong>는 정부의 지원(명시적·암묵적 보증)을 배경으로 자국 기업의 수출 거래에 <span class="hl">대출(direct lending), 보증(guarantee), 보험(insurance)</span>을 제공하는 공적 금융기관이다. 민간은행이 꺼리는 <em>장기(10년+)·대형·신흥국 국가위험</em> 거래를 메워주는 '시장 실패 보완' 역할이 핵심이다.</p>
<ul>
<li><strong>Pure cover형</strong>: 보험·보증만 제공하고 자금은 상업은행이 공급 (예: UKEF 상당 부분, Allianz Trade/Hermes, 한국 무보)</li>
<li><strong>Direct lender형</strong>: 직접 대출 (예: 한국 수은, US EXIM 일부, JBIC, EDC)</li>
<li><strong>혼합형</strong>: 대출+보증+보험을 모두 수행 (최근 대부분 ECA가 혼합화)</li>
</ul>
<p>OECD 회원국의 공적 수출신용은 <strong>OECD 공적수출신용협약(Arrangement)</strong>으로 최저 금리(CIRR), 최소 프리미엄, 최장 상환기간 등이 규율된다. 항공기·선박·원전 등은 별도 '부문 양해(Sector Understanding)'가 있다. 단, <strong>군수품(방산)은 협약 적용 대상에서 제외</strong>되어 각국 재량이 크다.</p>`,
      facts: [
        { k: "주요 기능", v: "대출 · 보증 · 보험" },
        { k: "국제 규범", v: "OECD 공적수출신용협약 (1978~)" },
        { k: "방산 적용", v: "협약 적용 제외(군수품)" }
      ],
      sowhat: "ECA 지원은 '보조금'이 아니라 규범 안에서 경쟁하는 금융 조건 경쟁이다. 방산은 OECD 규범 밖이라 각국 ECA의 재량적 '패키지 경쟁'이 더 치열하다는 점이 수은 전략 설계의 출발점이다.",
      sources: [
        { label: "OECD - Financing terms and conditions", url: "https://search.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/financing-terms-and-conditions" }
      ]
    },
    {
      id: "korea-policy-finance-map",
      title: "한국 정책금융기관 역할 지도",
      en: "KEXIM vs K-SURE vs KDB vs KODIT/KIBO",
      level: "기초",
      tags: ["수은", "무보", "산은", "신보", "기보"],
      summary: "수은=수출·해외 대출/보증, 무보=수출보험, 산은=국내 산업·투자, 신보·기보=중소기업 보증",
      body: `<table><thead><tr><th>기관</th><th>법적 근거·소관</th><th>핵심 기능</th><th>항공우주 관련 접점</th></tr></thead><tbody>
<tr><td><strong>한국수출입은행</strong> (KEXIM)</td><td>한국수출입은행법 / 재정경제부(구 기재부)</td><td>수출·해외사업 대출, 보증(이행성·RG), 전대, 대외경제협력기금(EDCF) 수탁</td><td>방산·항공기 수출금융, 부품사 수출자금, KAI 최대주주(지분 26.41%, 2026.9 보도 기준)</td></tr>
<tr><td><strong>한국무역보험공사</strong> (K-SURE)</td><td>무역보험법 / 산업통상부</td><td>단기·중장기 수출보험, 수출신용보증, 해외투자보험</td><td>구매자 대출에 대한 보험(커버), 중소 수출 채권 보험</td></tr>
<tr><td><strong>한국산업은행</strong> (KDB)</td><td>한국산업은행법 / 금융위원회</td><td>국내 시설·구조조정·혁신성장 금융, 정책펀드 운용</td><td>국민성장펀드(첨단전략산업기금), 벤처·스케일업 투자</td></tr>
<tr><td><strong>신용보증기금</strong> (KODIT)</td><td>신용보증기금법 / 금융위</td><td>중소기업 일반 신용보증</td><td>Tier2/3 운전자금 보증</td></tr>
<tr><td><strong>기술보증기금</strong> (KIBO)</td><td>기술보증기금법 / 중소벤처기업부</td><td>기술평가 기반 보증</td><td>우주 스타트업·기술형 부품사</td></tr>
</tbody></table>
<p>요약하면 <strong>"국경을 넘는 거래"는 수은·무보, "국내 생산기반·투자"는 산은, "중소기업 신용 보강"은 신보·기보</strong>다. 실무에선 수은 대출 + 무보 보험이 한 거래에 함께 들어가는 경우가 많다(폴란드 방산 등).</p>`,
      facts: [
        { k: "수은 설립", v: "1976년 영업개시 (법 제정 1969년)" },
        { k: "무보 설립", v: "1992년 (한국수출보험공사 → 2010 개칭)" },
        { k: "산은 설립", v: "1954년" }
      ],
      sowhat: "컨설팅에서 '수은만의 역할'을 정의하려면 무보·산은과의 중복/공백을 먼저 매핑해야 한다. 특히 국내 생산설비·R&D(산은)와 수출(수은) 사이의 경계가 항공우주 공급망에서 흐릿하다.",
      sources: []
    },
    {
      id: "kexim-profile",
      title: "수출입은행의 위상과 최근 기조",
      en: "KEXIM Profile & Strategy",
      level: "기초",
      tags: ["수은", "정책금융"],
      summary: "한국 유일의 직접대출형 ECA. 2026년 150조원 금융지원 목표, 우주·항공 용역 발주",
      body: `<p>수은은 수출·해외투자·해외자원개발을 지원하는 국책은행으로, 조선·플랜트·원전·방산 등 <strong>대형 수주산업</strong>의 금융 파트너 역할을 해왔다. 정부가 최대주주이며, 손실 발생 시 정부가 보전하는 구조(수은법상 손실보전 조항)로 신용도가 국가 수준이다.</p>
<ul>
<li><strong>2026년 계획</strong>: 총 150조원 금융지원 목표 중 역대 최대인 110조원을 중소·중견기업에 배정한다고 보도됨.</li>
<li><strong>방산</strong>: 방위산업진흥회와 중소·중견 방산 수출·상생 MOU(2026.10), 공급망안정화기금과 함께 방산·공급망 벤처 투자(목표 1,125억원) 추진 보도.</li>
<li><strong>본 프로젝트</strong>: 우주·항공산업 경쟁력 강화 컨설팅 용역 발주, 예산 약 18억원 — 수은 정책연구 용역 중 최대 규모로 보도(2026.10). 정부(재정경제부)는 "우주·항공은 수출금융이 필수적이라 협의"했다고 설명.</li>
</ul>`,
      facts: [
        { k: "2026 지원목표", v: "150조원 (중소·중견 110조)" },
        { k: "본 용역 예산", v: "약 18억원 (보도 기준)" },
        { k: "KAI 지분", v: "최대주주 26.41% (2026.9 보도 기준)" }
      ],
      sowhat: "KAI 최대주주이자 수출금융 제공자라는 이중 지위는 '지배구조 이슈(매각설 등)'와 '산업 육성 역할'이 겹치는 민감 지점이다. 용역 산출물은 금융상품 설계뿐 아니라 이 역할 정합성까지 의식해야 한다.",
      sources: [
        { label: "YTN - 우주항공 산업 컨설팅 용역 추진안 (2026.10)", url: "https://www.ytn.co.kr/_ln/0101_202610200513386331" },
        { label: "파이낸셜뉴스 (2026.10)", url: "https://www.fnnews.com/news/202610071456034200" }
      ]
    },
    {
      id: "export-loan",
      title: "수출자금대출(제작금융)",
      en: "Pre-shipment / Production Financing",
      level: "기초",
      tags: ["수출금융", "운전자본", "공급자측"],
      summary: "수출 계약 이행에 필요한 제작·생산 자금을 선적 전에 수출기업에 대출",
      body: `<p><strong>수출자금대출</strong>은 수출계약(또는 수주)을 근거로 원자재 구매, 제작, 인건비 등 <span class="hl">선적 전 자금(pre-shipment)</span>을 수출기업에 빌려주는 상품이다. 항공기 부품·방산처럼 제작기간이 1~5년으로 긴 산업에서는 '제작금융'의 성격이 강하다.</p>
<ul>
<li><strong>대상</strong>: 수출계약 보유 기업, 또는 과거 수출실적 기반 포괄 한도(중소·중견)</li>
<li><strong>상환</strong>: 수출대금 회수 시 상환(자기청산형)</li>
<li><strong>항공우주 특성</strong>: Boeing/Airbus·Tier1 장기공급계약(LTA)은 물량이 확정적이지 않고 납기가 길어 '계약 기반 한도' 산정이 어렵다 → 포괄한도·실적기반 상품이 중요</li>
</ul>
<p>선수금이 적고 마일스톤 지급이 늦을수록 수출기업의 운전자본 부담이 커진다. 방산 G2G는 선수금이 큰 편이지만, 이를 받으려면 <a data-ref="finance/guarantees">선수금환급보증(AP Bond)</a>이 필요하다.</p>`,
      facts: [
        { k: "성격", v: "선적 전(pre-shipment) 금융" },
        { k: "상환재원", v: "수출대금" }
      ],
      sowhat: "항공 부품 중소기업의 핵심 애로는 '계약은 있는데 현금이 늦게 들어오는' 구조다. 실적 기반 포괄한도와 LTA 연동 한도 설계가 수은의 차별화 포인트가 될 수 있다.",
      sources: []
    },
    {
      id: "buyers-credit",
      title: "구매자금대출(Buyer's Credit) vs 공급자신용",
      en: "Buyer's Credit vs Supplier's Credit",
      level: "기초",
      tags: ["수출금융", "구매자측", "중장기"],
      summary: "해외 구매자에게 직접 돈을 빌려주는 방식과 수출자가 외상을 주고 채권을 금융화하는 방식",
      body: `<table><thead><tr><th>구분</th><th>구매자신용 (Buyer's Credit)</th><th>공급자신용 (Supplier's Credit)</th></tr></thead><tbody>
<tr><td>차주</td><td>해외 구매자(정부·항공사·발주처)</td><td>국내 수출자</td></tr>
<tr><td>구조</td><td>ECA/은행이 구매자에게 대출 → 수출자에게 대금 직접 지급</td><td>수출자가 연불(외상) 판매 → 수출채권을 ECA가 매입·할인</td></tr>
<tr><td>수출자 리스크</td><td>거의 없음 (즉시 현금화)</td><td>채권 리스크 일부 잔존 (보험으로 헤지)</td></tr>
<tr><td>적합 거래</td><td>대형·장기 (항공기, 방산 G2G, 플랜트)</td><td>중소형·중기 거래</td></tr>
</tbody></table>
<p>OECD 협약상 공적 지원은 통상 <strong>계약금액의 최대 85%</strong>까지(최소 15% 선급금) 가능하다. 대형 거래에서는 수은 직접대출 + 무보 보험을 받은 상업은행 대출을 조합하는 <em>공동금융</em>이 일반적이다.</p>`,
      facts: [
        { k: "공적지원 한도(일반)", v: "계약액의 85% (선급금 15%)" },
        { k: "대표 사례", v: "폴란드 K2 2차: 수은·무보·상업은행 공동" }
      ],
      sowhat: "구매국 입장에서는 '무기·항공기 가격'만큼 '얼마를, 몇 년, 몇 %로 빌려주나'가 중요하다. Buyer's credit 역량 = 수주 경쟁력이라는 프레임이 이 용역의 핵심 메시지 중 하나다.",
      sources: [
        { label: "OECD - Financing terms and conditions", url: "https://search.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/financing-terms-and-conditions" }
      ]
    },
    {
      id: "guarantees",
      title: "이행성보증: APG·PG·AP Bond·RG",
      en: "Performance & Advance Payment Guarantees",
      level: "기초",
      tags: ["보증", "방산", "조선"],
      summary: "수주 시 발주처가 요구하는 입찰·계약이행·선수금환급 보증. 한도가 곧 수주 여력",
      body: `<table><thead><tr><th>보증</th><th>시점</th><th>내용</th><th>통상 규모(약)</th></tr></thead><tbody>
<tr><td>Bid Bond (입찰보증)</td><td>입찰</td><td>낙찰 후 계약 미체결 시 배상</td><td>계약액의 1~5%</td></tr>
<tr><td>PG / PB (계약이행보증)</td><td>계약~납품</td><td>계약 불이행 시 배상</td><td>5~10%</td></tr>
<tr><td>APG / AP Bond (선수금환급보증)</td><td>선수금 수령</td><td>미이행 시 선수금 반환 보장</td><td>선수금 전액 (10~30%+)</td></tr>
<tr><td>RG (Refund Guarantee)</td><td>조선 건조기간</td><td>선박 미인도 시 선수금 반환 — 조선업 용어</td><td>선수금 전액</td></tr>
<tr><td>Warranty Bond (하자보증)</td><td>납품 후</td><td>하자 보수 보장</td><td>2~5%</td></tr>
</tbody></table>
<p>방산 G2G 대형계약은 선수금 비중이 커서 AP Bond 규모가 수조원에 달할 수 있다. 은행의 보증도 <strong>신용공여</strong>로 잡히므로, 동일 기업(예: 현대로템·한화에어로스페이스·KAI)에 대한 대출·보증이 쌓이면 <a data-ref="finance/kexim-act-capital">동일차주 한도</a>에 걸린다.</p>`,
      facts: [
        { k: "보증=신용공여", v: "대출과 함께 한도 차감" },
        { k: "조선 vs 방산", v: "RG ≈ 선수금환급보증의 조선판" }
      ],
      sowhat: "수주가 대형화될수록 '대출'보다 '보증 한도'가 먼저 바닥난다. 다수 은행 분담(신디케이션), 무보 보증 연계, 보증 위험가중치 조정 등이 정책 옵션으로 검토될 수 있다.",
      sources: []
    },
    {
      id: "project-finance",
      title: "해외사업금융 & 프로젝트파이낸스(PF)",
      en: "Overseas Project Finance",
      level: "심화",
      tags: ["PF", "해외사업", "우주"],
      summary: "사업 자체의 현금흐름을 상환재원으로 하는 비소구·제한소구 금융",
      body: `<p><strong>PF(Project Finance)</strong>는 SPC(특수목적법인)가 차주가 되고, 사업에서 발생하는 미래 현금흐름과 사업자산을 담보로 하는 금융이다. 수은은 해외 발전·인프라·자원 사업에서 한국 기업 참여를 조건으로 PF에 참여해왔다.</p>
<ul>
<li><strong>해외사업금융</strong>: 한국 기업의 해외 투자·현지법인 설립·M&A 자금 지원 (예: 해외 MRO 거점, 현지 조립공장)</li>
<li><strong>항공우주 적용 가능성</strong>: 위성통신 사업(위성 제작+발사+운영의 장기 서비스 계약), 해외 MRO 센터, 우주항만·발사장 인프라, 위성 서비스 계약(Satellite-as-a-Service)</li>
<li><strong>핵심 구성요소</strong>: 오프테이크(장기 구매)계약, EPC 고정가 계약, 보험 패키지, 완공보증</li>
</ul>
<p>위성통신 PF는 해외 ECA(COFACE·US EXIM 등)가 위성 제작사 수출을 위해 위성 운영사에 구매자금 + PF를 제공한 선례가 다수 있다(추정 — 개별 사례 확인 필요).</p>`,
      facts: [
        { k: "상환재원", v: "사업 현금흐름" },
        { k: "핵심 리스크", v: "완공·수요·운영 리스크" }
      ],
      sowhat: "한국 위성 제작사의 수출이 늘면 '위성+발사+운영'을 묶은 패키지형 PF가 필요해진다. 수은이 위성 PF 심사역량(기술·보험 이해)을 선제적으로 갖추는 것이 차별화 포인트다.",
      sources: []
    },
    {
      id: "onlending-insurance",
      title: "전대금융 & 신용보험",
      en: "On-lending & Credit Insurance",
      level: "기초",
      tags: ["전대", "무보", "보험"],
      summary: "해외 은행에 한도를 주고 재대출하게 하는 전대, 수출채권 위험을 보험으로 이전하는 신용보험",
      body: `<p><strong>전대금융(On-lending / Credit Line)</strong>: 수은이 해외 금융기관(수입국 은행·정책은행)에 신용한도를 제공하면, 그 은행이 한국산 제품을 수입하는 현지 기업에 다시 대출하는 구조. 개별 거래 심사 부담 없이 <span class="hl">중소 수출기업의 소액 다건 거래</span>를 지원하기 좋다. 폴란드 K2 2차에서 폴란드 국책은행 BGK가 수은 등과 대출계약을 맺은 것도 '현지 정책은행 경유' 구조의 일종이다.</p>
<p><strong>신용보험(Credit Insurance)</strong>: 무보(K-SURE)가 주도. 구매자 지급불능(상업위험)과 전쟁·송금제한(국가위험)으로 인한 손실을 보상.</p>
<ul>
<li>단기수출보험: 결제기간 2년 이내 일반 수출</li>
<li>중장기수출보험(구매자신용): 2년 초과 연불 — 은행 대출을 커버하여 상업은행 참여 유도</li>
<li>해외투자보험, 수출신용보증(선적 전·후)</li>
</ul>`,
      facts: [
        { k: "전대 장점", v: "소액 다건·현지 리스크 분산" },
        { k: "보험 주체", v: "무역보험공사(K-SURE)" }
      ],
      sowhat: "MRO·부품 수출처럼 거래 단위가 작은 항공 영역은 전대·보험이 대형 직접대출보다 효과적일 수 있다. 수은-무보 간 상품 연계(대출+보험 원스톱)가 개선 과제로 거론될 가능성이 높다.",
      sources: [
        { label: "파이낸셜뉴스 - 폴란드 K2 2차 금융 (2026.1)", url: "https://www.fnnews.com/news/202601261829379575" }
      ]
    },
    {
      id: "aircraft-finance-structures",
      title: "항공기금융 구조: 리스·EETC·JOLCO",
      en: "Aircraft Finance Structures",
      level: "심화",
      tags: ["항공기금융", "리스", "EETC", "JOLCO"],
      summary: "항공기는 '움직이는 고가 담보'라 리스·담보부 채권 등 고유한 금융구조가 발달",
      body: `<table><thead><tr><th>구조</th><th>설명</th><th>주요 플레이어</th></tr></thead><tbody>
<tr><td><strong>운용리스</strong> (Operating Lease)</td><td>리스사(레서)가 소유, 항공사(레시)가 5~12년 임차. 잔존가치 위험은 레서 부담. 전 세계 기단의 약 절반 수준(추정)</td><td>AerCap, SMBC AC, Avolon 등</td></tr>
<tr><td><strong>금융리스</strong> (Finance Lease)</td><td>사실상 할부구매. 만기 시 소유권 이전, 항공사 B/S에 자산 계상</td><td>은행, ECA 지원 거래</td></tr>
<tr><td><strong>담보부 대출</strong></td><td>항공기 저당. ECA 보증부 대출(예: US EXIM 보증)</td><td>상업은행 + ECA</td></tr>
<tr><td><strong>EETC</strong></td><td>복수 항공기를 묶은 담보부 채권을 등급별(트랜치) 발행. 미국 파산법 §1110 보호로 고신용</td><td>미국 항공사 중심</td></tr>
<tr><td><strong>JOLCO</strong></td><td>일본형 콜옵션부 운용리스. 일본 투자자가 지분(감가상각 절세), 은행이 부채 제공</td><td>일본 투자자·은행</td></tr>
<tr><td><strong>Sale & Leaseback</strong></td><td>항공사가 신조기를 리스사에 매각 후 재임차 → 유동성 확보</td><td>항공사·리스사</td></tr>
</tbody></table>
<p><strong>렌더(Lender)</strong>는 자금을 빌려주는 은행·투자자, <strong>레서(Lessor)</strong>는 항공기를 소유하고 빌려주는 리스사, <strong>레시(Lessee)</strong>는 항공사다. ECA 지원은 2010년대 중반 이후 자본시장·리스 시장 성장으로 비중이 줄었으나, 시장 경색기(코로나 등)에는 '최종 대부자'로 역할이 커진다.</p>`,
      facts: [
        { k: "리스 비중", v: "글로벌 기단 약 50% 내외 (추정)" },
        { k: "EETC 핵심", v: "미 파산법 §1110 보호" }
      ],
      sowhat: "한국은 완제 민항기 수출국이 아니므로 '항공기 구매금융'보다 국적 항공사의 도입금융·MRO·부품 공급망 금융이 실질 수요다. 향후 국산 완제기(소형·UAM·KF-21 수출) 등장 시 구매자금 구조 설계가 필요하다.",
      sources: []
    },
    {
      id: "cape-town",
      title: "케이프타운 협약 (항공기 의정서)",
      en: "Cape Town Convention & Aircraft Protocol",
      level: "심화",
      tags: ["항공기금융", "담보", "국제조약"],
      summary: "국경을 넘는 항공기 담보권을 국제등록·신속회수로 보호하는 조약. 가입 시 ECA 프리미엄 할인",
      body: `<p><strong>케이프타운 협약(2001)</strong>과 <strong>항공기 의정서</strong>는 항공기·엔진·헬기에 대한 담보권(International Interest)을 국제등기소에 등록하고, 채무불이행 시 <span class="hl">일정 기간(통상 60일 등, 선언에 따름) 내 항공기 반환</span>을 보장한다. 대출자의 회수 위험을 낮춰 금융비용을 줄인다.</p>
<ul>
<li><strong>OECD 연계</strong>: ASU는 케이프타운 체약국으로서 특정 선언(Qualifying Declarations)을 하고 국내법에 반영한 국가의 항공사에 대해 <strong>최소 프리미엄 할인</strong>(Cape Town discount)을 허용한다.</li>
<li><strong>한국</strong>: 학계(KAIST·고려대 등)에서 가입 필요성이 꾸준히 제기되어 왔으나, 검색 기준으로 <strong>가입이 확인되지 않음</strong>(2026.11, 확인 필요).</li>
<li>ICAO 문서에 따르면 할인은 '적격 공적 수출신용 거래'에만 적용되며 일반 금융비용 전반을 낮추는 것은 아니다.</li>
</ul>`,
      facts: [
        { k: "채택", v: "2001년 (케이프타운)" },
        { k: "한국 가입", v: "미확인 (2026.11 기준)" },
        { k: "효과", v: "ECA 최소 프리미엄 할인" }
      ],
      sowhat: "가입은 국적 항공사의 리스·도입 비용을 낮추고, 향후 국산 항공기를 해외에 팔 때 구매자 금융의 담보 안정성을 높인다. 정책 제언 후보이나 법무부·국토부 소관이라 수은 단독 과제는 아니다.",
      sources: [
        { label: "ICAO ATConf/7 WP.143 (2026)", url: "https://www.icao.int/sites/default/files/Meetings/2026/ATconf7/WPs/ATCONF7.2026.WP.143.EN.pdf" },
        { label: "KAIST 연구 (가입 필요성)", url: "https://dspace.kaist.ac.kr/handle/10203/287615" }
      ]
    },
    {
      id: "oecd-asu",
      title: "OECD 항공기 부문 양해 (ASU 2011)",
      en: "Aircraft Sector Understanding",
      level: "심화",
      tags: ["OECD", "ASU", "항공기금융"],
      summary: "민항기 공적 수출신용의 프리미엄·만기·선납 조건을 통일해 ECA 간 보조금 경쟁을 차단",
      body: `<p>ASU는 OECD 수출신용협약의 부속서로, Boeing·Airbus·Embraer·Bombardier 간 ECA 지원 경쟁을 '평평한 운동장(level playing field)'으로 만들기 위해 2007년 개정 후 <strong>2011년 전면 개정</strong>(2011.2 시행)되었다. 2011 ASU는 ECA 지원을 시장 조건에 가깝게 끌어올려(프리미엄 상향) 상업금융 대비 매력을 낮추는 것이 핵심이었다.</p>
<table><thead><tr><th>항목</th><th>요점</th></tr></thead><tbody>
<tr><td>최소 프리미엄 (MPR)</td><td>차주 신용등급별 위험등급(Risk Category)에 따라 차등, 시장 지표 연동으로 주기적 조정</td></tr>
<tr><td>최대 상환기간</td><td>대형 민항기 <strong>12년</strong>; 예외적으로 15년 허용 시 프리미엄 가산(약 35%)</td></tr>
<tr><td>선납 (Down payment)</td><td>항공기 순가격의 최소 <strong>15%</strong> → 공적 지원은 최대 85%</td></tr>
<tr><td>상환방식</td><td>원금 균등 또는 원리금 균등(모기지형), 분기 이하 주기</td></tr>
<tr><td>리스크 완화</td><td>자산보호조치 미충족 시 프리미엄 가산(약 15%) 등 대체 가능</td></tr>
<tr><td>케이프타운 할인</td><td>적격 체약국 차주에 프리미엄 할인</td></tr>
</tbody></table>
<p>참여자: EU, 미국, 캐나다, 브라질, 일본, 한국 등. ASU는 이후에도 수차례 개정(MPR 재산정 등)되고 있어 최신 텍스트 확인이 필요하다.</p>`,
      facts: [
        { k: "시행", v: "2011년 2월" },
        { k: "최대 만기", v: "12년 (예외 15년, 가산)" },
        { k: "최소 선납", v: "15%" },
        { k: "한국", v: "ASU 참여국" }
      ],
      sowhat: "민항기 영역에서 ECA는 '금리를 더 싸게' 주는 경쟁이 불가능하다. 따라서 수은의 경쟁력은 가격이 아니라 속도·구조화 역량·공동금융 네트워크에서 나와야 한다.",
      sources: [
        { label: "ASU Summary 2011 (AWG)", url: "https://awg.aero/wp-content/uploads/2019/09/ASU-Summary-2011.pdf" },
        { label: "Mondaq - The 2011 ASU", url: "https://www.mondaq.com/unitedstates/project-financeppp-amp-pfi/125582/the-2011-aircraft-sector-understanding-on-export-credits" },
        { label: "OECD - Aircraft specific rules", url: "https://search.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/aircraft-specific-rules" }
      ]
    },
    {
      id: "defense-export-finance",
      title: "방산 수출금융의 구조 (G2G)",
      en: "Defense Export Finance",
      level: "심화",
      tags: ["방산", "G2G", "수은", "무보"],
      summary: "정부 간 계약 + 구매국 정부 대상 대출·보증. OECD 규범 밖이라 패키지 경쟁",
      body: `<p>방산 수출은 대부분 <strong>G2G(정부 간) 또는 정부-기업 간</strong> 계약으로, 구매국 국방부·국책기관이 차주가 된다. 금융은 계약 협상의 <span class="hl">핵심 조건</span>이며 '얼마를 빌려줄 수 있느냐'가 수주를 좌우하기도 한다.</p>
<ul>
<li><strong>구매국 측</strong>: 수은 구매자금대출 + 무보 보험을 받은 상업은행 대출(공동금융) — 장기(10~17년) 상환</li>
<li><strong>수출기업 측</strong>: 제작금융, 선수금환급보증(AP Bond), 이행보증</li>
<li><strong>특징</strong>: OECD 협약 적용 제외 → 금리·만기 재량. 대신 국가위험·정치위험 집중, 동일국·동일차주 한도 문제 발생</li>
<li><strong>경쟁국</strong>: 미국 FMS(정부 대외군사판매·차관), 프랑스·독일·영국은 ECA 커버, 일부 국가는 절충교역·현지생산과 패키지</li>
</ul>
<p>최근 필리핀 KF-21 협상 과정에서 한국 측이 '도입가의 상당 부분(70% 수준 보도)'을 금융으로 지원하는 방안이 언론에 거론되었다(조건 미확인).</p>`,
      facts: [
        { k: "차주", v: "구매국 정부·국책기관" },
        { k: "만기 사례", v: "폴란드 K2 2차 약 17년 (보도)" },
        { k: "규범", v: "OECD 협약 적용 제외" }
      ],
      sowhat: "방산은 '무기+금융+산업협력'의 패키지 경쟁이다. 수은 관점에선 국가별 익스포저 관리와 다수 대형 수주 동시 지원 능력(한도)이 최대 과제다.",
      sources: [
        { label: "파이낸셜뉴스 (2026.1)", url: "https://www.fnnews.com/news/202601261829379575" },
        { label: "다음/서울신문 - 필리핀 KF-21 금융 (2026.7)", url: "https://v.daum.net/v/20260703112926248" }
      ]
    },
    {
      id: "kexim-act-capital",
      title: "수은법 개정: 법정자본금 15조→25조",
      en: "KEXIM Act Amendment (2024)",
      level: "심화",
      tags: ["수은법", "자본금", "신용공여한도"],
      summary: "2024.2.29 국회 통과. 대형 방산·수주 대비 자본 확충 근거 마련",
      body: `<p><strong>배경</strong>: 폴란드 1차 계약(2022) 금융 지원 후 수은의 폴란드·방산기업 대상 여력이 소진되며 2차 계약 금융이 쟁점이 되었다. 수은법상 법정자본금 한도는 2014년 개정 이후 <strong>15조원</strong>에 묶여 있었고, 동일차주 신용공여 한도는 <strong>자기자본의 40%</strong>로 제한된다(보도 기준).</p>
<ul>
<li><strong>경과</strong>: 25조~50조원까지 다양한 개정안이 발의 → 기재위 소위(2024.2.21)·전체회의(2.23)에서 25조원 대안 의결 → <span class="hl">2024.2.29 본회의 통과</span></li>
<li><strong>의미</strong>: 법정자본금 '한도'가 늘어난 것이며, 실제 자기자본은 정부 출자(현금·현물)가 뒤따라야 증가한다.</li>
<li><strong>한계</strong>: 동일차주 한도(자기자본 비율)는 그대로여서, 자본금이 늘어난 만큼만 한도가 확대. 다수 대형 수주가 동시 진행되면 재차 병목 가능</li>
</ul>
<p>수은은 개정 취지를 방산뿐 아니라 조선·플랜트 등 수주 대형화 대응으로 설명했다.</p>`,
      facts: [
        { k: "법정자본금", v: "15조 → 25조원" },
        { k: "국회 통과", v: "2024년 2월 29일" },
        { k: "동일차주 한도", v: "자기자본의 40% (보도)" },
        { k: "이전 개정", v: "2014년" }
      ],
      sowhat: "자본금 한도 확대는 '필요조건'일 뿐이다. 실제 출자 이행 속도, 신용공여 한도 산정 방식, 보증 위험가중치, 무보·상업은행과의 분담 구조가 함께 설계되어야 차기 대형 수주(항공기·우주 포함)를 감당할 수 있다.",
      sources: [
        { label: "비즈워치 (2024.2.29)", url: "https://news.bizwatch.co.kr/article/finance/2024/02/29/0018" },
        { label: "SBS Biz - 수은 자본금 25조 증액", url: "https://biz.sbs.co.kr/amp/article/20000159234" },
        { label: "이투데이 - 수은법 개정안", url: "https://www.etoday.co.kr/news/view/2335446" }
      ]
    },
    {
      id: "poland-case",
      title: "사례: 폴란드 K2·K9·FA-50 수출금융",
      en: "Case: Poland Defense Exports",
      level: "심화",
      tags: ["방산", "폴란드", "사례", "FA-50"],
      summary: "1차 약 124억달러 계약에 수은·무보 대규모 지원, 2차 K2(약 65억달러)는 17년 만기 공동금융",
      body: `<h4>1차 이행계약 (2022)</h4>
<p>2022년 7월 기본계약 후 K2 전차 180대, K9 자주포 212문, FA-50 48대 등 약 <strong>124억 달러(약 17조원)</strong> 규모 1차 이행계약 체결. FA-50은 약 4.2조원. 금융 지원 규모는 보도에 따라 '대출·보증 약 12조원' 또는 '계약액 80% 수준 약 100억 달러'로 엇갈린다. 2023년에는 수은·무보가 각 6조원씩 분담하는 방안이 보도되었다.</p>
<h4>병목과 법 개정</h4>
<p>1차 지원 후 수은의 추가 여력이 약 1.4조원 수준이라는 분석까지 나오며 2차 계약 지연 우려 → <a data-ref="finance/kexim-act-capital">수은법 개정(2024.2)</a>. 한편 2024년 하반기 폴란드는 K9·천무 일부를 자국 재원으로 구매 추진한다고 보도되었다.</p>
<h4>K2 2차 이행계약 (2025.8)</h4>
<ul>
<li>규모 약 <strong>65억 달러(약 9조원)</strong>, 180대 중 117대 국내생산·63대 현지(PGZ) 생산</li>
<li>폴란드 국책은행 <strong>BGK</strong>가 수은, 산탄데르 등과 대출 계약; 수은·하나은행·무보 참여, <strong>만기 약 17년</strong>으로 보도</li>
<li>수출금융 계약 조기 체결로 현대로템이 선수금 약 21억 달러 조기 수령(보도)</li>
</ul>`,
      facts: [
        { k: "1차 계약", v: "약 124억 달러 (2022)" },
        { k: "K2 2차", v: "약 65억 달러 (2025.8)" },
        { k: "2차 만기", v: "약 17년 (보도)" },
        { k: "현지 파트너", v: "BGK(금융), PGZ(생산)" }
      ],
      sowhat: "교훈은 세 가지: ① 금융 여력이 수주 속도를 결정, ② 국내 ECA 단독이 아닌 해외 상업은행·현지 정책은행과의 신디케이션이 해법, ③ 금융 조기 확정이 선수금·현금흐름까지 개선한다. 항공기(FA-50·KF-21) 수출에도 같은 템플릿이 적용된다.",
      sources: [
        { label: "파이낸셜뉴스 - K2 2차 금융 (2026.1)", url: "https://www.fnnews.com/news/202601261829379575" },
        { label: "데일리안 - K2 9조원 계약", url: "https://www.dailian.co.kr/news/view/1531151/" },
        { label: "MTN - 1차 금융지원 (2023.6)", url: "https://news.mtn.co.kr/news-detail/2023062013432067164" },
        { label: "세계일보 - 수은 한도초과분 (2023.11)", url: "https://www.segye.com/newsView/20231105512618" },
        { label: "서울신문 - 폴란드 자체구매 (2024.10)", url: "https://m.seoul.co.kr/news/2024/10/22/20241022500135" }
      ]
    },
    {
      id: "space-finance",
      title: "우주산업 금융의 특수성 & 우주보험",
      en: "Space Finance & Insurance",
      level: "심화",
      tags: ["우주", "보험", "리스크"],
      summary: "긴 개발기간·불확실한 수익화·발사 실패의 이진(binary) 리스크가 전통 대출을 어렵게 한다",
      body: `<p>우주산업은 일반 제조업 금융의 전제(담보·안정적 현금흐름)가 잘 성립하지 않는다.</p>
<ul>
<li><strong>수익화 불확실</strong>: 개발 5~10년, 상업 수요(위성 데이터·통신)가 아직 형성 중</li>
<li><strong>이진 리스크</strong>: 발사 실패 시 자산 전손 — 담보가치가 순간적으로 0</li>
<li><strong>정부 의존</strong>: 매출 상당 부분이 정부 R&D·조달 → 계약 기반 금융(수주 담보) 필요</li>
<li><strong>담보 인식 곤란</strong>: 궤도 위 자산의 압류·회수가 사실상 불가 (케이프타운 우주자산 의정서는 미발효)</li>
</ul>
<h4>우주보험 시장</h4>
<p>발사(Launch)+초기운용(통상 1년), 궤도상(In-orbit) 보험이 중심. 시장이 작고 변동성이 크다.</p>
<ul>
<li>2023년: 보험료 약 5.6억 달러 vs 보험금 약 10억 달러 — 손해율 약 180%, 사상 최악 수준(보도)</li>
<li>2025년: 요율 인상 효과로 수익 회복 기대되었으나 대형 전손으로 손해율 약 15%→약 75%로 상승(Gallagher)</li>
<li>시장 가용 인수능력(working capacity) 약 5억 달러 내외(2025, Gallagher)</li>
</ul>`,
      facts: [
        { k: "2023 손해율", v: "약 180% (보도)" },
        { k: "인수능력", v: "약 5억 달러 (2025)" },
        { k: "주 보장", v: "발사+1년, 궤도상" }
      ],
      sowhat: "우주는 '대출'보다 '보증·보험·지분투자·정부계약 담보금융'의 조합이 맞다. 수은은 위성 수출의 구매자금 + 보험 연계, 정부 조달계약 기반 운전자금 같은 틈새를 공략할 수 있다.",
      sources: [
        { label: "Gallagher - Space Market Update Q4 2025", url: "https://specialty.ajg.com/plane-talking/space-market-update-q4-2025" },
        { label: "Gallagher - Q1 2026", url: "https://specialty.ajg.com/plane-talking/space-insurance-market-update-q1-2026" },
        { label: "Insurance Insider - rates rocket", url: "https://insuranceinsider.com/article/2dui1i5m0lcjzv21k19ts/london-market/space-insurance-rates-rocket-as-major-losses-and-capacity-contraction-hit" }
      ]
    },
    {
      id: "foreign-eca-benchmark",
      title: "해외 ECA 벤치마킹",
      en: "Global ECA Benchmark",
      level: "심화",
      tags: ["ECA", "벤치마킹", "US EXIM", "UKEF", "JBIC"],
      summary: "미·영·프·독·일·캐나다 ECA의 형태와 항공우주 지원 특징 비교",
      body: `<table><thead><tr><th>국가·기관</th><th>형태</th><th>항공우주 지원 특징</th></tr></thead><tbody>
<tr><td>미국 <strong>US EXIM</strong> (1934)</td><td>대출·보증·보험</td><td>보잉 대형기 구매자 보증의 최대 공급자(역사적). 의회 재인가(Reauthorization) 정치 리스크 — 2015~19 이사회 정족수 미달로 대형 거래 중단 전례</td></tr>
<tr><td>영국 <strong>UKEF</strong> (1919, 세계 최초 ECA)</td><td>보증·보험 중심 + 직접대출</td><td>에어버스 날개(영국산) 지분만큼 커버. EDC와 협력해 Bombardier/A220(벨파스트 날개) 거래 재보험. 방산 수출 지원도 적극</td></tr>
<tr><td>프랑스 <strong>Bpifrance Assurance Export</strong></td><td>국가 계정 보험·보증 (2017 Coface로부터 이관)</td><td>에어버스·헬기(Airbus Helicopters) 수출 보증, 민간 항공기·헬기 무조건부 보증 상품</td></tr>
<tr><td>독일 <strong>Allianz Trade(구 Euler Hermes)</strong></td><td>연방정부 위임 운영(Hermes 커버)</td><td>에어버스 보증(Airbusgarantie) — 영·프·독 3국 ECA가 생산지분 비례로 공동 지원</td></tr>
<tr><td>일본 <strong>JBIC / NEXI</strong></td><td>JBIC 대출, NEXI 보험</td><td>보잉 787 등 일본 제작 지분(약 35% 수준, 추정) 연계, JOLCO 등 일본 자본 활용</td></tr>
<tr><td>캐나다 <strong>EDC</strong> (1944)</td><td>상업기준 자립형 ECA·직접대출</td><td>Bombardier·De Havilland·CAE 등 자국 항공 수출 지원, 국내 거래 지원 권한도 보유</td></tr>
</tbody></table>
<p>공통점: ① 생산지분 비례 다국 ECA 공동지원(재보험), ② 완제기 OEM 중심이되 공급망 기업 지원 프로그램 병행, ③ 방산은 별도 창구(영국 UKEF 방산팀 등) 운영.</p>`,
      facts: [
        { k: "최초 ECA", v: "UKEF (1919)" },
        { k: "에어버스 지원", v: "UKEF·Bpifrance·Allianz Trade 공동" },
        { k: "Euler Hermes", v: "2022년 Allianz Trade로 개명" }
      ],
      sowhat: "한국 부품사가 보잉·에어버스 공급망에 깊이 들어갈수록 '한국산 지분'을 근거로 해외 ECA 공동금융에 참여(재보험)하는 UKEF형 모델이 현실적 옵션이 된다.",
      sources: [
        { label: "UKEF - Bombardier aircraft made in Belfast", url: "https://www.gov.uk/government/news/ukef-supports-export-of-bombardier-aircraft-made-in-belfast" },
        { label: "UKEF - A350-1000 delivery", url: "https://www.gov.uk/government/news/ukef-backs-first-airbus-a350-1000-delivery-to-african-carrier" },
        { label: "독일 연방 수출신용보증 - Airbus Guarantee", url: "https://www.exportkreditgarantien.de/en/products/banks/supplementary-specific-cover/product-overview/airbus-guarantee.html" },
        { label: "US EXIM - Aircraft exports", url: "https://www.exim.gov/solutions/loan-guarantee/transportation/aircraft-exports" }
      ]
    },
    {
      id: "policy-funds",
      title: "정책펀드: 우주항공·첨단전략산업",
      en: "Policy Funds",
      level: "기초",
      tags: ["정책펀드", "국민성장펀드", "뉴스페이스"],
      summary: "국민성장펀드(150조) 지원대상에 우주항공 추가 추진, 우주청 뉴스페이스 펀드 2,000억",
      body: `<table><thead><tr><th>펀드</th><th>규모</th><th>운용·주관</th><th>항공우주 연관</th></tr></thead><tbody>
<tr><td><strong>국민성장펀드</strong></td><td>5년 150조원 (첨단전략산업기금 75조 + 민간 75조)</td><td>산업은행</td><td>금융위가 위성·발사체·민간항공기를 지원대상에 추가하는 시행령 개정 입법예고 (의견수렴 ~12.1). 범위 확대일 뿐 별도 배정은 미확정</td></tr>
<tr><td><strong>뉴스페이스 펀드</strong></td><td>2026년 2,000억원 (정부 1,000억 + 민간 매칭)</td><td>우주항공청, 모태펀드 출자</td><td>2025년 81억원에서 대폭 확대</td></tr>
<tr><td><strong>과학기술혁신펀드</strong> (우주항공·해양)</td><td>226억원 (2026)</td><td>과기정통부 계열</td><td>운용사 모집에 6개 VC 지원</td></tr>
<tr><td><strong>수은 방산·공급망 벤처 투자</strong></td><td>목표 1,125억원</td><td>수은 + 공급망안정화기금</td><td>방산·공급망 벤처기업</td></tr>
</tbody></table>
<p>참고: 우주항공청 2026년 예산은 약 1조 1,201억원(전년 대비 +16.1%)으로 보도.</p>`,
      facts: [
        { k: "국민성장펀드", v: "150조원 / 5년" },
        { k: "뉴스페이스 펀드", v: "2,000억원 (2026)" },
        { k: "우주청 예산", v: "약 1.12조원 (2026)" }
      ],
      sowhat: "산은(국민성장펀드)과 우주청(모태펀드)이 투자 영역을 선점하는 가운데, 수은은 '투자 이후 수출·스케일업 단계' — 수주 기반 대출, 수출보증 — 로 역할을 차별화할 여지가 크다.",
      sources: [
        { label: "위성경제 - 국민성장펀드 우주항공 확대", url: "https://sateconomy.co.kr/news/view/1065587986581660" },
        { label: "다음 - 2026 우주산업 대전환", url: "https://v.daum.net/v/20260420055802926" },
        { label: "유니콘팩토리 - 과기혁신펀드 우주 분야", url: "https://www.unicornfactory.co.kr/article/2026063015464481368" },
        { label: "파이낸셜뉴스 - 수은 방산 MOU (2026.10)", url: "https://www.fnnews.com/news/202610071829197771" }
      ]
    },
    {
      id: "supply-chain-finance",
      title: "공급망 금융 & 상생금융",
      en: "Supply Chain Finance",
      level: "기초",
      tags: ["공급망", "중소기업", "상생"],
      summary: "체계종합업체(KAI·한화 등) 신용을 활용해 Tier2/3 협력사에 저리 자금을 흘려보내는 구조",
      body: `<p>항공우주 공급망은 <strong>OEM(보잉·에어버스) → Tier1(KAI·한화에어로스페이스·대한항공 항공우주) → Tier2/3(중소 정밀가공·특수공정)</strong>으로 이어진다. 하위 협력사는 신용도가 낮고 매출 집중도가 높아 금융 접근성이 떨어진다.</p>
<ul>
<li><strong>공급망 금융(SCF)</strong>: 대기업 매출채권·발주서를 근거로 협력사에 조기 현금화(역팩토링) 제공</li>
<li><strong>상생·동반성장 프로그램</strong>: 대기업이 예치금·보증을 제공하고 정책금융이 금리 우대 (네트워크론 등)</li>
<li><strong>공급망안정화기금</strong>: 공급망 핵심품목 기업 지원 기금으로 수은이 운용(2024 출범, 규모는 확인 필요)</li>
<li><strong>방산 협력사</strong>: 수은-방위산업진흥회 MOU(2026.10)로 중소·중견 방산 수출·상생 지원</li>
</ul>
<p>항공 부품은 코로나 이후 수요 급회복 과정에서 협력사 유동성·인력 부족이 글로벌 납기 차질의 원인이 되었다(업계 평가). 즉 공급망 금융은 '복지'가 아니라 <span class="hl">납기 신뢰성 = 수주 경쟁력</span>의 문제다.</p>`,
      facts: [
        { k: "구조", v: "OEM → Tier1 → Tier2/3" },
        { k: "관련 기금", v: "공급망안정화기금 (수은 운용)" }
      ],
      sowhat: "Tier1의 신용과 수주 데이터를 활용한 공급망 금융 플랫폼은 수은이 적은 자본으로 넓은 협력사 저변을 지원할 수 있는 고효율 수단이다.",
      sources: [
        { label: "파이낸셜뉴스 - 수은·방진회 MOU (2026.10)", url: "https://www.fnnews.com/news/202610071829197771" }
      ]
    },
    {
      id: "finance-gap-hypotheses",
      title: "금융 지원 갭 가설 (초기 가설)",
      en: "Financing Gap Hypotheses",
      level: "심화",
      tags: ["가설", "컨설팅", "갭분석"],
      summary: "프로젝트 초기 검증 대상: 어디에 시장·정책금융이 비어 있는가",
      body: `<table><thead><tr><th>#</th><th>갭 가설</th><th>근거/징후</th><th>정책 옵션(예시)</th></tr></thead><tbody>
<tr><td>1</td><td><strong>중소 Tier2/3 운전자본</strong></td><td>장기 납기·마일스톤 지급, 원자재(티타늄 등) 선구매 부담</td><td>LTA 연동 포괄 수출자금 한도, 공급망 금융</td></tr>
<tr><td>2</td><td><strong>인증비용</strong> (AS9100, NADCAP, FAA/EASA)</td><td>인증 취득까지 수년·수억원, 매출 전 지출 — 담보 없음</td><td>인증 연계 저리대출·보증, 인증 후 상환</td></tr>
<tr><td>3</td><td><strong>장기 개발 R&D 금융</strong></td><td>RSP(국제공동개발 위험분담) 참여 시 10년+ 회수</td><td>성공불 융자형, 매출연동 상환(Royalty-based)</td></tr>
<tr><td>4</td><td><strong>우주 스타트업 성장자금</strong></td><td>시리즈B 이후 '죽음의 계곡', 정부 매출 의존</td><td>벤처대출(Venture debt), 정부계약 담보대출, 펀드 출자</td></tr>
<tr><td>5</td><td><strong>대형 수주 보증 한도</strong></td><td>방산·항공기 G2G 대형화, 동일차주 한도</td><td>신디케이션·재보험, 무보 연계, 한도 산정 개선</td></tr>
<tr><td>6</td><td><strong>구매자금 경쟁력</strong> (KF-21·FA-50·위성)</td><td>경쟁국 패키지 금융 대비 조건 열위 가능성</td><td>국가별 프레임 크레딧라인, 장기 만기</td></tr>
</tbody></table>
<p>검증 방법: 부품사 인터뷰·설문, 수은/무보 실적 데이터 분석, 해외 ECA 상품 비교, 경쟁 입찰 사례(금융 조건) 리뷰.</p>`,
      facts: [
        { k: "가설 수", v: "6개 (초기)" },
        { k: "검증 수단", v: "인터뷰 · 데이터 · 벤치마크" }
      ],
      sowhat: "이 표는 킥오프 직후 이슈트리의 출발점으로 쓸 수 있다. 각 가설마다 '규모(얼마나 큰 갭인가)'와 '수은 적합성(누가 메워야 하나)'을 정량화하는 것이 1차 산출물의 핵심이다.",
      sources: []
    },
    {
      "id": "oecd-arrangement-cirr",
      "title": "OECD 수출신용 협약과 CIRR",
      "en": "OECD Arrangement & CIRR",
      "level": "심화",
      "tags": [
        "OECD",
        "CIRR",
        "고정금리",
        "규범"
      ],
      "summary": "공적 수출신용의 최소 금리(CIRR)·최장 만기·최소 프리미엄을 정한 신사협정",
      "body": "<p><strong>OECD 공적 수출신용 협약</strong>(Arrangement on Officially Supported Export Credits, 'OECD Consensus')은 ECA 간 금리·만기 경쟁을 막기 위해 공적 지원 조건의 하한을 정한 신사협정이다. 한국(수은·무보)도 참가국이다.</p><ul><li><strong>CIRR</strong>(Commercial Interest Reference Rate): ECA가 제공할 수 있는 <span class=\"hl\">고정금리의 하한</span>. 통화별 국채금리에 가산마진을 더해 산정한다.</li><li><strong>최소 프리미엄</strong>: 국가위험 등급(0~7)과 만기에 따라 보증·보험료 하한을 둔다.</li><li><strong>부문별 양해</strong>: 민항기는 별도 <a data-ref=\"finance/oecd-asu\">ASU</a>가 적용된다. <strong>군수품(방산)은 협약 적용 대상이 아니어서</strong> <a data-ref=\"finance/defense-export-finance\">방산 수출금융</a>은 국가 간 패키지 경쟁이 된다.</li></ul><h4>2023년 현대화 개정 (2023.7 발효)</h4><ul><li>일반 거래의 최장 상환기간이 고소득 OECD국 8.5년, 기타 10년에서 <strong>최대 15년</strong>으로 확대(녹색 분야는 더 길게 허용)</li><li>CIRR 산정에 상환기간뿐 아니라 인출기간·상환구조를 반영하도록 변경</li><li>원리금 상환 구조(amortisation) 유연화</li></ul>",
      "facts": [
        {
          "k": "성격",
          "v": "OECD 신사협정 (법적 조약 아님)"
        },
        {
          "k": "2023 개정 발효",
          "v": "2023년 7월"
        },
        {
          "k": "일반 최장 만기",
          "v": "최대 15년 (2023 개정 후)"
        },
        {
          "k": "방산 적용",
          "v": "적용 제외"
        }
      ],
      "sowhat": "민수(위성 수출, 민항기 부품)는 OECD 규범 안에서 '조건 경쟁'이 제한되므로 차별화는 속도·구조·리스크 인수 범위에서 나온다. 반면 방산·우주 안보 거래는 규범 밖이라 금리·만기 자체가 경쟁 무기가 된다는 점을 구분해 정리해야 한다.",
      "sources": [
        {
          "label": "Mayer Brown - OECD Arrangement 개정 (2023.8)",
          "url": "https://www.mayerbrown.com/en/insights/publications/2023/08/oecd-arrangement-on-officially-supported-export-credits"
        },
        {
          "label": "DLA Piper - Revised OECD Arrangement (2023.8)",
          "url": "https://www.dlapiper.com/insights/publications/2023/08/oecd-publishes-revised-version-of-arrangement-on-officially-supported-export-credits"
        }
      ]
    },
    {
      "id": "kexim-funding-rating",
      "title": "수은의 자금조달 구조와 신용등급",
      "en": "KEXIM Funding & Credit Rating",
      "level": "심화",
      "tags": [
        "자금조달",
        "신용등급",
        "글로벌본드",
        "수은"
      ],
      "summary": "예금 없이 국내외 채권 발행으로 재원 조달. 국가등급 수준(Aa2)의 신용도가 금리 경쟁력의 원천",
      "body": "<p>수은은 예금을 받지 않는다. 대출 재원은 주로 <strong>수출입금융채권(국내 원화채)</strong>과 <strong>외화채권(글로벌본드 등)</strong> 발행, 차입으로 조달한다. 그래서 조달금리와 자본적정성이 지원 여력과 금리 경쟁력을 함께 결정한다.</p><table><thead><tr><th>항목</th><th>내용 (보도 기준)</th></tr></thead><tbody><tr><td>신용등급</td><td>무디스 Aa2·전망 안정적 재확인(2026.2). 한국 국가신용등급은 무디스 Aa2, S&amp;P AA, 피치 AA-</td></tr><tr><td>외화 조달</td><td>2026.7 약 20억 달러 규모 글로벌본드 발행, '미래성장 분야' 지원에 활용 계획 보도</td></tr><tr><td>자본 제약</td><td>정부 출자로 자기자본 확충 → <a data-ref=\"finance/kexim-act-capital\">법정자본금 한도</a>와 동일차주 한도(자기자본 대비)가 신규 지원 규모를 제한</td></tr></tbody></table><p>정부 지원 근거(수은법상 손실 보전 조항)로 신용도가 국가와 사실상 연동되는 것으로 평가된다(추정, 평가사 보고서 원문 확인 필요).</p>",
      "facts": [
        {
          "k": "무디스 등급",
          "v": "Aa2, 안정적 (2026.2 재확인)"
        },
        {
          "k": "글로벌본드",
          "v": "약 20억 달러 (2026.7, 보도)"
        },
        {
          "k": "예금 수신",
          "v": "없음 (채권·차입 조달)"
        }
      ],
      "sowhat": "우주·항공 지원 확대안은 결국 '조달 비용과 자본 소모'로 환산돼야 내부 설득이 된다. 권고안마다 위험가중자산 증가와 필요 출자 규모를 함께 제시하면 실행 가능성이 높아진다.",
      "sources": [
        {
          "label": "Moody's - KEXIM Aa2 affirmed (2026.2)",
          "url": "https://app.researchpool.com/provider/moodys-investors-service/moodys-ratings-affirms-kexims-aa2-ratings-outlook-stable-korean-6narwoto9t"
        },
        {
          "label": "딜사이트 - 수은 20억달러 글로벌본드",
          "url": "https://dealsite.co.kr/articles/104590"
        }
      ]
    }
  ]
});

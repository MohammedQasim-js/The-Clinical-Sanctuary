import svgPaths from "./svg-7kcffkzk6s";
import imgDrRao from "figma:asset/bc3127056e63de57e60df49ac24efc9a5eb361b5.png";
import imgDrGupta from "figma:asset/2cce00b08a2d31b2c442d560f5edff798cbfdd50.png";
import imgClinicLogo from "figma:asset/d3ce538e1abe980987fd4eb5a9b3cea51d684731.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[30px] tracking-[-0.75px] w-[211.23px]">
        <p className="leading-[36px]">Patient History</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[16px] w-[389.7px]">
        <p>
          <span className="leading-[24px]">{`Viewing record for `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[#006d4c]">Arjun Mehta</span>
          <span className="leading-[24px]">{` • +91 98765 43210`}</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[389.7px]" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[11.646px] relative shrink-0 w-[10.529px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5286 11.6458">
        <g id="Container">
          <path d={svgPaths.p329ed300} fill="var(--fill-0, #2C3437)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#dce4e8] content-stretch flex gap-[7.99px] items-center px-[20px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container3 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-center w-[118.98px]">
        <p className="leading-[20px]">Assign Internal ID</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p10ad69c0} fill="var(--fill-0, #E6FFEF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(167.763deg, rgb(0, 109, 76) 0%, rgb(0, 95, 66) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.15px_0_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container4 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e6ffef] text-[14px] text-center w-[120.27px]">
        <p className="leading-[20px]">New Consultation</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#747c80] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Last 7 Days Activity</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[10px] tracking-[0.5px] uppercase w-[63.14px]">
        <p className="leading-[15px]">Follow Up</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative">
        <Background />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-[95.61px]">
          <p className="leading-[16px]">Today, 10:30 AM</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[253.8px]">
          <p className="leading-[20px]">Patient reporting 101°F fever, nausea...</p>
        </div>
      </div>
    </div>
  );
}

function DrRao() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Dr. Rao">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDrRao} />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-[80.78px]">
        <p className="leading-[16px]">Dr. Kavita Rao</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pr-[141.02px] pt-[12px] relative">
        <DrRao />
        <Container9 />
      </div>
    </div>
  );
}

function VisitCard() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[12px] self-stretch shrink-0" data-name="Visit Card 1">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] h-full items-start min-w-[inherit] pl-[24px] pr-[20px] py-[20px] relative">
        <div className="absolute inset-0 rounded-[12px]" data-name="Visit Card 1:outline">
          <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.15)] border-solid inset-0 pointer-events-none rounded-[13px]" />
        </div>
        <Container6 />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[18px] w-[152.91px]">
          <p className="leading-[28px]">Viral Fever Check</p>
        </div>
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e3e9ed] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[0.5px] uppercase w-[64.81px]">
        <p className="leading-[15px]">Lab Result</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative">
        <Background1 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-[97.66px]">
          <p className="leading-[16px]">Oct 24, 02:15 PM</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[242.88px]">
          <p className="leading-[20px]">All parameters within normal range...</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container">
          <path d={svgPaths.p209ba400} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-[92.66px]">
        <p className="leading-[16px]">Metropolis Labs</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center pr-[118.21px] pt-[12px] relative">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function VisitCard1() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[12px] self-stretch shrink-0" data-name="Visit Card 2">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] h-full items-start min-w-[inherit] pl-[24px] pr-[20px] py-[20px] relative">
        <div className="absolute inset-0 rounded-[12px]" data-name="Visit Card 2:outline">
          <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.15)] border-solid inset-0 pointer-events-none rounded-[13px]" />
        </div>
        <Container10 />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[18px] w-[158.78px]">
          <p className="leading-[28px]">Blood Panel (CBC)</p>
        </div>
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#b8f2fa] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#215d64] text-[10px] tracking-[0.5px] uppercase w-[68px]">
        <p className="leading-[15px]">Emergency</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative">
        <Background2 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-[95.86px]">
          <p className="leading-[16px]">Oct 22, 11:00 PM</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[267.41px]">
          <p className="leading-[20px]">Immediate ECG conducted, stable now...</p>
        </div>
      </div>
    </div>
  );
}

function DrGupta() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Dr. Gupta">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDrGupta} />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-[96.25px]">
        <p className="leading-[16px]">Dr. Sanjay Gupta</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pr-[139.16px] pt-[12px] relative">
        <DrGupta />
        <Container18 />
      </div>
    </div>
  );
}

function VisitCard2() {
  return (
    <div className="bg-white min-w-[280px] relative rounded-[12px] self-stretch shrink-0" data-name="Visit Card 3">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] h-full items-start min-w-[inherit] pl-[24px] pr-[20px] py-[20px] relative">
        <div className="absolute inset-0 rounded-[12px]" data-name="Visit Card 3:outline">
          <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.15)] border-solid inset-0 pointer-events-none rounded-[13px]" />
        </div>
        <Container15 />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[18px] w-[148.91px]">
          <p className="leading-[28px]">Acute Chest Pain</p>
        </div>
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[187px] items-start overflow-clip pb-[16px] relative shrink-0 w-full" data-name="Container">
      <VisitCard />
      <VisitCard1 />
      <VisitCard2 />
    </div>
  );
}

function RecentVisitsHorizontalListEditorialStyle() {
  return (
    <div className="col-[1/span_12] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Recent Visits Horizontal List (Editorial style)">
      <Heading2 />
      <Container5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[18px] w-[247.02px]">
          <p className="leading-[28px]">Comprehensive Visit History</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2889b5c0} fill="var(--fill-0, #ACB3B7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1c92c780} fill="var(--fill-0, #ACB3B7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center relative">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f0f4f7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[32px] relative w-full">
          <Heading3 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-[132.63px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] tracking-[1.1px] uppercase w-[45.14px]">
        <p className="leading-[normal] mb-0">{`Date &`}</p>
        <p className="leading-[normal]">Time</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[23px] relative shrink-0 w-[141.19px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] tracking-[1.1px] uppercase w-[73.72px]">
        <p className="leading-[normal]">Symptoms</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-center px-[24px] py-[16px] relative shrink-0 w-[96.61px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] text-center tracking-[1.1px] uppercase w-[43.62px]">
        <p className="leading-[normal] mb-0">Token</p>
        <p className="leading-[normal]">#</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[23px] relative shrink-0 w-[161.16px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] tracking-[1.1px] uppercase w-[53.66px]">
        <p className="leading-[normal]">Doctor</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[144.59px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] tracking-[1.1px] uppercase w-[50.08px]">
        <p className="leading-[normal] mb-0">Billing</p>
        <p className="leading-[normal]">Status</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[23px] relative shrink-0 w-[281.83px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] tracking-[1.1px] uppercase w-[145.92px]">
        <p className="leading-[normal]">Consultation Notes</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Header → Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[16px] w-full">
          <p className="leading-[normal] mb-0">Oct 26,</p>
          <p className="leading-[normal]">2023</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-full">
          <p className="leading-[16px]">10:30 AM</p>
        </div>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[34px] pr-[32px] py-[20px] relative shrink-0 w-[132.63px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e3e9ed] content-stretch flex flex-col h-[18px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] w-[29.55px]">
        <p className="leading-[normal]">Fever</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e3e9ed] content-stretch flex flex-col h-[18px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] w-[39.47px]">
        <p className="leading-[normal]">Fatigue</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[93.19px]" data-name="Data">
      <Background3 />
      <Background4 />
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[35px] pt-[33.5px] px-[24px] relative shrink-0 w-[96.61px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[18px] text-center w-[34.8px]">
        <p className="leading-[28px]">#42</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,109,76,0.1)] content-stretch flex h-[32px] items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 w-[26.66px]" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[12px] text-center w-[16.27px]">
        <p className="leading-[16px]">KR</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.41px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[65.09px]">
        <p className="leading-[20px] mb-0">Dr. Kavita</p>
        <p className="leading-[20px]">Rao</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[113.16px]" data-name="Data">
      <Overlay />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p3cf2be00} fill="var(--fill-0, #40574B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex gap-[3.99px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container25 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[11px] w-[25.22px]">
        <p className="leading-[normal]">PAID</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[37.5px] pt-[37px] px-[24px] relative shrink-0 w-[144.59px]" data-name="Data">
      <Background5 />
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pl-[8px] relative shrink-0 w-[225.83px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[20px] italic justify-center leading-[0] relative shrink-0 text-[#596064] text-[14px] w-[212.52px]">
        <p className="leading-[20px]">Prescribed Paracetamol 500m…</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pr-[32px] relative w-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
          <Data4 />
          <Data5 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[16px] w-full">
          <p className="leading-[normal] mb-0">Oct 24,</p>
          <p className="leading-[normal]">2023</p>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-full">
          <p className="leading-[16px]">02:15 PM</p>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[132.63px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[34px] pr-[32px] py-[20.5px] relative w-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e3e9ed] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] w-[47.63px]">
          <p className="leading-[normal]">Checkup</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[93.19px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Background6 />
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[96.61px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[35px] pt-[34px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[18px] text-center w-[42.59px]">
          <p className="leading-[28px]">#108</p>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(45,103,110,0.1)] content-stretch flex h-[32px] items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 w-[23.31px]" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d676e] text-[12px] text-center w-[16.8px]">
        <p className="leading-[16px]">SG</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.91px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[67.93px]">
        <p className="leading-[20px] mb-0">Dr. Sanjay</p>
        <p className="leading-[20px]">Gupta</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[113.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Overlay1 />
        <Container28 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p13a47680} fill="var(--fill-0, #6E0A12)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#fa746f] content-stretch flex gap-[3.99px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container29 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#6e0a12] text-[11px] w-[49.7px]">
        <p className="leading-[normal]">PENDING</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[144.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[37.5px] relative w-full">
        <Background7 />
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[225.83px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pl-[8px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[20px] italic justify-center leading-[0] relative shrink-0 text-[#596064] text-[14px] w-[204.22px]">
          <p className="leading-[20px]">Annual physical examination,…</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 2">
      <div aria-hidden="true" className="absolute border-[rgba(240,244,247,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pr-[32px] pt-px relative w-full">
          <Data6 />
          <Data7 />
          <Data8 />
          <Data9 />
          <Data10 />
          <Data11 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[16px] w-full">
          <p className="leading-[normal] mb-0">Oct 15,</p>
          <p className="leading-[normal]">2023</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-full">
          <p className="leading-[16px]">09:00 AM</p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[132.63px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[34px] pr-[32px] py-[20.5px] relative w-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#e3e9ed] content-stretch flex flex-col h-[18px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] w-[22.94px]">
        <p className="leading-[normal]">Pain</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#e3e9ed] content-stretch flex flex-col h-[18px] items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] w-[61.7px]">
        <p className="leading-[normal]">Lower Back</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[93.19px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center relative w-full">
        <Background8 />
        <Background9 />
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[96.61px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[35px] pt-[34px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[18px] text-center w-[30.42px]">
          <p className="leading-[28px]">#12</p>
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(0,109,76,0.1)] content-stretch flex h-[32px] items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 w-[26.66px]" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[12px] text-center w-[16.27px]">
        <p className="leading-[16px]">KR</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.41px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[65.09px]">
        <p className="leading-[20px] mb-0">Dr. Kavita</p>
        <p className="leading-[20px]">Rao</p>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[113.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Overlay2 />
        <Container32 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p3cf2be00} fill="var(--fill-0, #40574B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex gap-[3.99px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container33 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[11px] w-[25.22px]">
        <p className="leading-[normal]">PAID</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[144.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[37.5px] relative w-full">
        <Background10 />
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[225.83px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pl-[8px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[20px] italic justify-center leading-[0] relative shrink-0 text-[#596064] text-[14px] w-[202.38px]">
          <p className="leading-[20px]">Physiotherapy suggested for…</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 3">
      <div aria-hidden="true" className="absolute border-[rgba(240,244,247,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pr-[32px] pt-px relative w-full">
          <Data12 />
          <Data13 />
          <Data14 />
          <Data15 />
          <Data16 />
          <Data17 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[16px] w-full">
          <p className="leading-[normal] mb-0">Sep 28,</p>
          <p className="leading-[normal]">2023</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-full">
          <p className="leading-[16px]">11:45 AM</p>
        </div>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[132.63px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[34px] pr-[32px] py-[20px] relative w-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#e3e9ed] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] w-[35.16px]">
          <p className="leading-[normal]">Cough</p>
        </div>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="h-[18px] relative shrink-0 w-[93.19px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Background11 />
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[96.61px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[34.5px] pt-[34px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[18px] text-center w-[34.13px]">
          <p className="leading-[28px]">#65</p>
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(45,103,110,0.1)] content-stretch flex h-[32px] items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 w-[23.31px]" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d676e] text-[12px] text-center w-[16.8px]">
        <p className="leading-[16px]">SG</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[13.91px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[67.93px]">
        <p className="leading-[20px] mb-0">Dr. Sanjay</p>
        <p className="leading-[20px]">Gupta</p>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[113.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Overlay3 />
        <Container36 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p3cf2be00} fill="var(--fill-0, #40574B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex gap-[3.99px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container37 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[11px] w-[25.22px]">
        <p className="leading-[normal]">PAID</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[144.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[37px] pt-[37.5px] px-[24px] relative w-full">
        <Background12 />
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[225.83px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pl-[8px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[20px] italic justify-center leading-[0] relative shrink-0 text-[#596064] text-[14px] w-[209.97px]">
          <p className="leading-[20px]">Allergy symptoms, prescribed…</p>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 4">
      <div aria-hidden="true" className="absolute border-[rgba(240,244,247,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pr-[32px] pt-px relative w-full">
          <Data18 />
          <Data19 />
          <Data20 />
          <Data21 />
          <Data22 />
          <Data23 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[2px] relative w-full">
          <HeaderRow />
          <Body />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-[156.5px]">
        <p className="leading-[16px]">Showing 1-12 of 48 records</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center opacity-50 px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] text-center w-[50.55px]">
        <p className="leading-[16px]">Previous</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#006d4c] content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e6ffef] text-[12px] text-center w-[5.08px]">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] text-center w-[7.48px]">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] text-center w-[27.22px]">
        <p className="leading-[16px]">Next</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(240,244,247,0.5)] relative shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[16px] relative w-full">
          <Container38 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function DetailedHistoryTable() {
  return (
    <div className="bg-white col-[1/span_12] content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[12px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Detailed History Table">
      <OverlayHorizontalBorder />
      <Table />
      <Overlay4 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p7d7b400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#006d4c] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]" data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,109,76,0.2),0px_4px_6px_-4px_rgba(0,109,76,0.2)] size-[64px] top-1/2" data-name="Overlay+Shadow" />
      <Container41 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[20px] w-[271.13px]">
        <p className="leading-[28px]">Patient Continuity Program</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[72px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[16px] w-[447.31px]">
        <p className="leading-[24px] mb-0">Arjun is a frequent visitor. High-frequency patient accounts</p>
        <p className="leading-[24px] mb-0">benefit from the Internal ID system for faster triage and</p>
        <p className="leading-[24px]">billing automation.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[447.31px]" data-name="Container">
      <Heading4 />
      <Container43 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
        <Background13 />
        <Container42 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[12px] tracking-[1.2px] uppercase w-[167.58px]">
        <p className="leading-[16px]">Recommended Action</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p1ab75280} fill="var(--fill-0, #E6FFEF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#006d4c] content-stretch flex gap-[12px] items-center px-[32px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container45 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e6ffef] text-[16px] text-center w-[222.67px]">
        <p className="leading-[24px]">ASSIGN INTERNAL CLINIC ID</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[15px] italic justify-center leading-[0] relative shrink-0 text-[#acb3b7] text-[10px] w-[137.27px]">
        <p className="leading-[15px]">One-time action, irreversible.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative">
        <Margin />
        <Button8 />
        <Container46 />
      </div>
    </div>
  );
}

function DetailViewCombinationBottomStickyActionBarStyle() {
  return (
    <div className="bg-[rgba(0,109,76,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Detail View Combination (Bottom Sticky Action Bar Style)">
      <div aria-hidden="true" className="absolute border border-[rgba(0,109,76,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[33px] relative w-full">
          <Container40 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function DetailViewCombinationBottomStickyActionBarStyleMargin() {
  return (
    <div className="col-[1/span_12] content-stretch flex flex-col items-start justify-self-stretch pt-[16px] relative row-3 self-start shrink-0" data-name="Detail View Combination (Bottom Sticky Action Bar Style):margin">
      <DetailViewCombinationBottomStickyActionBarStyle />
    </div>
  );
}

function BentoGridLayout() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[___223px_592px_182px] relative shrink-0 w-full" data-name="Bento Grid Layout">
      <RecentVisitsHorizontalListEditorialStyle />
      <DetailedHistoryTable />
      <DetailViewCombinationBottomStickyActionBarStyleMargin />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="min-h-[1328px] relative shrink-0 w-full" data-name="Main Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start min-h-[inherit] pb-[91px] pt-[96px] px-[32px] relative w-full">
        <HeaderSection />
        <BentoGridLayout />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acb3b7] text-[14px] w-full">
        <p className="leading-[normal]">Search by phone number (e.g. +91 98XXX...)</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative w-full">
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <div className="absolute bottom-1/4 left-[15px] top-1/4 w-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #ACB3B7)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[576px] min-h-px min-w-px relative" data-name="Container">
      <Container48 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #596064)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3de21300} fill="var(--fill-0, #596064)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container52 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function HeaderTopNavBarShell() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex h-[64px] items-center justify-between px-[32px] right-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1024px]" data-name="Header - TopNavBar Shell">
      <Container47 />
      <Container50 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[20px] tracking-[-0.5px] w-full">
        <p className="leading-[28px]">The Clinical Sanctuary</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Mumbai North Clinic</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] relative w-full">
        <Heading />
        <Container54 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[69.88px]">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container55 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p9fd8800} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[42.31px]">
        <p className="leading-[20px]">Queue</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container57 />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[20.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 19.5">
        <g id="Container">
          <path d={svgPaths.p27f0e480} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[14px] tracking-[-0.35px] w-[52.13px]">
          <p className="leading-[20px]">Patients</p>
        </div>
      </div>
    </div>
  );
}

function LinkActiveTabPatients() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full" data-name="Link - Active Tab: Patients">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] py-[12px] relative w-full">
          <Container59 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[37.95px]">
        <p className="leading-[20px]">Billing</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container61 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[49.59px]">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container63 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[52.13px]">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container65 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] relative size-full">
        <Link />
        <Link1 />
        <LinkActiveTabPatients />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function ClinicLogo() {
  return (
    <div className="max-w-[208px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Clinic Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClinicLogo} />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[92.45px]">
        <p className="leading-[20px]">Dr. A. Sharma</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[120.53px]">
        <p className="leading-[16px]">Chief Medical Officer</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120.53px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <ClinicLogo />
        <Container68 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(226,232,240,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[25px] px-[24px] relative w-full">
        <Container67 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function AsideSideNavBarShell() {
  return (
    <div className="absolute bg-[#f0f4f7] content-stretch flex flex-col h-[1328px] items-start left-0 py-[24px] top-0 w-[256px]" data-name="Aside - SideNavBar Shell">
      <Margin1 />
      <Nav />
      <Margin2 />
    </div>
  );
}

export default function PatientHistory() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex flex-col items-start pl-[256px] relative size-full" data-name="Patient History">
      <MainCanvas />
      <HeaderTopNavBarShell />
      <AsideSideNavBarShell />
    </div>
  );
}
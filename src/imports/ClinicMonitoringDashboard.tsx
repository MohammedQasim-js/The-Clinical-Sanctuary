import svgPaths from "./svg-p8q110a7we";
import imgP25 from "figma:asset/7d4f47098666245aec5d217790dd98a36db8e5f9.png";
import imgProviderProfile from "figma:asset/9c86ed903a787224671c6f0ebc5a15fb13aeda7f.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[30px] tracking-[-0.75px] w-[285.13px]">
        <p className="leading-[36px]">Queue Management</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[16px] w-[250.45px]">
        <p className="leading-[24px]">Monitoring real-time patient flow</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[285.13px]" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.p2268c500} fill="var(--fill-0, #2C3437)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#dce4e8] content-stretch flex gap-[8px] items-center px-[24px] py-[10px] relative rounded-[16px] shrink-0" data-name="Button">
      <Container3 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[16px] text-center w-[74.09px]">
        <p className="leading-[24px]">Audit Log</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Button />
    </div>
  );
}

function DashboardHeaderTopActions() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Dashboard Header & Top Actions">
      <Container />
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-[110.05px]">
        <p className="leading-[16px]">Current Token</p>
      </div>
      <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
          <path d={svgPaths.p1af51ba0} fill="var(--fill-0, #006D4C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[60px] justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[60px] w-[128.05px]">
        <p className="leading-[60px]">#24</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,109,76,0.6)] w-[102.27px]">
        <p className="leading-[20px]">In Consultation</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Margin />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white col-[1/span_2] h-[160px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Paragraph />
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Next</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[30px] w-full">
        <p className="leading-[36px]">#25</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f0f4f7] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative w-full">
        <Container5 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Waiting</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[30px] w-full">
        <p className="leading-[36px]">12</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f0f4f7] col-4 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative w-full">
        <Container6 />
        <Heading4 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Notified</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36px] justify-center leading-[0] relative shrink-0 text-[#2d676e] text-[30px] w-[17.73px]">
        <p className="leading-[36px]">3</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <div className="bg-[#2d676e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f0f4f7] col-5 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative w-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] uppercase w-[42.48px]">
        <p className="leading-[15px]">Skipped</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#a83836] text-[20px] w-[12.47px]">
        <p className="leading-[28px]">2</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f0f4f7] col-1 h-[72px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[10px] uppercase w-[62.33px]">
        <p className="leading-[15px]">Completed</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[20px] w-[25.58px]">
        <p className="leading-[28px]">45</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#cfe9d9] col-1 h-[72px] justify-self-stretch relative rounded-[16px] row-2 shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-6 gap-x-[16px] gap-y-[16px] grid grid-cols-[_140px] grid-rows-[repeat(2,minmax(0,1fr))] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Background4 />
      <Background5 />
    </div>
  );
}

function SummaryGridBentoStyle() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[_160px] relative shrink-0 w-full" data-name="Summary Grid (Bento Style)">
      <Background />
      <Background1 />
      <Background2 />
      <Background3 />
      <Container9 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#596064] text-[14px] tracking-[1.4px] uppercase w-[224.31px]">
        <p className="leading-[20px]">Current Capacity Status</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,109,76,0.1)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[10px] w-[73.64px]">
        <p className="leading-[15px]">NORMAL LOAD</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading6 />
        <Overlay />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] w-[66.22px]">
        <p className="leading-[16px]">Occupancy</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] w-[37.84px]">
        <p className="leading-[16px]">15 / 25</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e3e9ed] h-[10px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#006d4c] inset-[0_40%_0_0]" data-name="Background" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container18 />
      <Background6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[24px] text-right w-[52.72px]">
        <p className="leading-[32px]">60%</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] text-right uppercase w-[62.73px]">
        <p className="leading-[15px]">Utilization</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[62.73px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative w-full">
        <Container17 />
        <Container21 />
      </div>
    </div>
  );
}

function CapacityCardIntegration() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Capacity Card Integration">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[28px] pr-[24px] py-[24px] relative w-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[20px] w-[176.41px]">
        <p className="leading-[28px]">Live Queue Status</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-[25.77px]">
        <p className="leading-[15px]">Live</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#a83836] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container25 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[24px] relative w-full">
          <Heading7 />
          <Background8 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24.5px] pt-[23.5px] px-[32px] relative shrink-0 w-[111.59px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-[47.59px]">
        <p className="leading-[16px]">Token</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-[167.5px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-[58.41px]">
        <p className="leading-[16px] mb-0">Patient</p>
        <p className="leading-[16px]">Name</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-[118.08px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-[54.08px]">
        <p className="leading-[16px] mb-0">Check-</p>
        <p className="leading-[16px]">In</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24.5px] pt-[23.5px] px-[32px] relative shrink-0 w-[154px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-[54.05px]">
        <p className="leading-[16px]">Status</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24.5px] pt-[23.5px] px-[32px] relative shrink-0 w-[148.03px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-[62.89px]">
        <p className="leading-[16px]">Actions</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Row />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[29.5px] pl-[34px] pr-[43.73px] pt-[29px] relative shrink-0 w-[111.59px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[16px] w-[33.86px]">
        <p className="leading-[normal]">#24</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#e3e9ed] content-stretch flex h-[32px] items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 w-[21.09px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-center w-[15.64px]">
        <p className="leading-[16px]">RS</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10.91px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[16px] w-[59.5px]">
        <p className="leading-[normal] mb-0">Rahul</p>
        <p className="leading-[normal]">Sharma</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex gap-[12.01px] items-center pl-[32px] relative shrink-0 w-[135.5px]" data-name="Data">
      <Background9 />
      <Container27 />
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[64px] pr-[32px] py-[20px] relative shrink-0 w-[150.08px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[32.57px]">
        <p className="leading-[20px] mb-0">10:15</p>
        <p className="leading-[20px]">AM</p>
      </div>
    </div>
  );
}

function ParagraphBackground() {
  return (
    <div className="bg-[#006d4c] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[32px] leading-[0] not-italic relative rounded-[9999px] shrink-0 text-[10px] text-white uppercase w-[90.02px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-[12px] top-[10px] w-[10.38px]">
        <p className="leading-[normal]">In</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[12px] justify-center left-0 top-[22px] w-[78.02px]">
        <p className="leading-[normal]">Consultation</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24.5px] pt-[24px] px-[32px] relative shrink-0 w-[154px]" data-name="Data">
      <ParagraphBackground />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2940cd80} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[16px] shrink-0" data-name="Button">
      <Container28 />
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[20px] relative shrink-0 w-[148.03px]" data-name="Data">
      <Button1 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[111.59px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[34px] pr-[43.78px] py-[29.5px] relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[16px] w-[33.81px]">
          <p className="leading-[normal]">#25</p>
        </div>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="max-w-[103.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="P-25">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgP25} />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10.42px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[16px] w-[49.08px]">
        <p className="leading-[normal] mb-0">Meera</p>
        <p className="leading-[normal]">Kapur</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[135.5px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pl-[32px] relative w-full">
        <P />
        <Container29 />
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[150.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[21px] pl-[64px] pr-[32px] pt-[20px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[35.93px]">
          <p className="leading-[20px] mb-0">10:45</p>
          <p className="leading-[20px]">AM</p>
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[10px] uppercase w-[43.66px]">
        <p className="leading-[normal]">Arrived</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[154px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32px] py-[30.5px] relative w-full">
        <Background10 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p19e3b6c0} fill="var(--fill-0, #596064)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[16px] shrink-0" data-name="Button">
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
        <g id="Container">
          <path d={svgPaths.pd247d80} fill="var(--fill-0, #596064)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[16px] shrink-0" data-name="Button">
      <Container31 />
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[148.03px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start px-[32px] py-[20px] relative w-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[111.59px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[29px] pl-[34px] pr-[43.2px] pt-[29.5px] relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[16px] w-[34.39px]">
          <p className="leading-[normal]">#26</p>
        </div>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#b8f2fa] content-stretch flex h-[32px] items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 w-[23.92px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#215d64] text-[12px] text-center w-[17.17px]">
        <p className="leading-[16px]">AK</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[17.13px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[16px] w-[50.45px]">
        <p className="leading-[normal] mb-0">Amit</p>
        <p className="leading-[normal]">Kumar</p>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[135.5px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.01px] items-center pl-[32px] relative w-full">
        <Background11 />
        <Container32 />
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[150.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[64px] pr-[32px] py-[20px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[33.1px]">
          <p className="leading-[20px] mb-0">11:00</p>
          <p className="leading-[20px]">AM</p>
        </div>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#b8f2fa] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#215d64] text-[10px] uppercase w-[46.27px]">
        <p className="leading-[normal]">Notified</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[154px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30px] pt-[30.5px] px-[32px] relative w-full">
        <Background12 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p12092b00} fill="var(--fill-0, #596064)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[16px] shrink-0" data-name="Button">
      <Container33 />
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[148.03px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[32px] py-[20px] relative w-full">
        <Button4 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Body">
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[2px] relative shrink-0 w-[701.2px]" data-name="Table">
      <Header />
      <Body />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Background">
      <Container24 />
      <Container26 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Immediate Actions</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[18.95px] relative shrink-0 w-[85.31px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.31 18.95">
        <g id="Container">
          <path d={svgPaths.p180e6080} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-center w-[52.25px]">
        <p className="leading-[16px]">Call Next</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[7.5px] items-center justify-self-start pb-[17px] pt-[16px] px-[16px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[16.4px] relative shrink-0 w-[83.31px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.31 16.4">
        <g id="Container">
          <path d={svgPaths.p25d4e700} fill="var(--fill-0, #2D676E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-center w-[75.77px]">
        <p className="leading-[16px]">Mark Arrived</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col gap-[7.5px] items-center justify-self-start pb-[17px] pt-[16px] px-[16px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[12px] relative shrink-0 w-[76.31px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.31 12">
        <g id="Container">
          <path d={svgPaths.p95f8600} fill="var(--fill-0, #A83836)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-center w-[63.59px]">
        <p className="leading-[16px]">Skip Token</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[7.5px] items-center justify-self-start pb-[17px] pt-[16px] px-[16px] relative rounded-[16px] row-2 self-start shrink-0" data-name="Button">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[18px] relative shrink-0 w-[85.31px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.31 18">
        <g id="Container">
          <path d={svgPaths.pf2f7a80} fill="var(--fill-0, #596064)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-center w-[61.88px]">
        <p className="leading-[16px]">Add Billing</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col gap-[7.5px] items-center justify-self-start pb-[17px] pt-[16px] px-[16px] relative rounded-[16px] row-2 self-start shrink-0" data-name="Button">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container35() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__80px_80px] relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function UpdatedQuickActionsPanel() {
  return (
    <div className="bg-[#f0f4f7] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Updated Quick Actions Panel">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Heading8 />
        <Container35 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00563c] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Queue Efficiency</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,86,60,0.7)] w-full">
        <p className="leading-[16px]">Average waiting time at current flow</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Heading9 />
        <Container45 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[48px] justify-center leading-[0] relative shrink-0 text-[#00563c] text-[48px] w-[50.08px]">
        <p className="leading-[48px]">15</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#00563c] text-[20px] w-[46.91px]">
        <p className="leading-[28px]">Mins</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(0,86,60,0.6)] uppercase w-[53.36px]">
        <p className="leading-[15px]">Wait Time</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[53.36px]" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.99px] items-center relative w-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(0,86,60,0.1)] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#006d4c] inset-[0_35.01%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Overlay1 />
      </div>
    </div>
  );
}

function EtaPanel() {
  return (
    <div className="bg-[rgba(128,236,188,0.3)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="ETA Panel">
      <div aria-hidden="true" className="absolute border-2 border-[#80ecbc] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[26px] relative w-full">
        <Container44 />
        <Container46 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_268px] relative shrink-0 w-full" data-name="Container">
      <UpdatedQuickActionsPanel />
      <EtaPanel />
    </div>
  );
}

function LiveQueuePanel() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Live Queue Panel">
      <CapacityCardIntegration />
      <Background7 />
      <Container34 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[18px] w-[133.91px]">
        <p className="leading-[28px]">Recent Activity</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[9px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 9">
        <g id="Container">
          <path d={svgPaths.p1b72c490} fill="var(--fill-0, #747C80)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <Heading10 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[11.696px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6958">
        <g id="Container">
          <path d={svgPaths.p33d35c00} fill="var(--fill-0, #40574B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] w-full">
        <p className="leading-[16px]">Token #23 Completed</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] w-full">
        <p className="leading-[15px] mb-0">Sunita Verma marked as consultation</p>
        <p className="leading-[15px]">finished. Prescription uploaded.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[10px] tracking-[-0.25px] uppercase w-full">
        <p className="leading-[15px]">Just now</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container57 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Background13 />
      <div className="absolute bg-[rgba(172,179,183,0.3)] bottom-0 left-[16px] top-[40px] w-px" data-name="Vertical Divider" />
      <Container56 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[9.917px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.91667">
        <g id="Container">
          <path d={svgPaths.p2ca01900} fill="var(--fill-0, #215D64)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#b8f2fa] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] w-full">
        <p className="leading-[16px]">New Priority Patient</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] w-full">
        <p className="leading-[15px] mb-0">Token #32 (Emergency) added to the top</p>
        <p className="leading-[15px]">of the queue.</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[10px] tracking-[-0.25px] uppercase w-full">
        <p className="leading-[15px]">12 mins ago</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container63 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Background14 />
      <div className="absolute bg-[rgba(172,179,183,0.3)] bottom-0 left-[16px] top-[40px] w-px" data-name="Vertical Divider" />
      <Container62 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.0833">
        <g id="Container">
          <path d={svgPaths.p2e0ed180} fill="var(--fill-0, #A83836)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(250,116,111,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] w-full">
        <p className="leading-[16px]">Patient Not Responding</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] w-full">
        <p className="leading-[15px] mb-0">Token #22 failed to arrive after 3</p>
        <p className="leading-[15px]">announcements. Moved to skipped.</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[10px] tracking-[-0.25px] uppercase w-full">
        <p className="leading-[15px]">45 mins ago</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container69 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay2 />
      <Container68 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[8px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container60 />
      <Container66 />
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-center px-px py-[13px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,109,76,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[12px] text-center w-[87.45px]">
        <p className="leading-[16px]">View Audit Log</p>
      </div>
    </div>
  );
}

function UpcomingNotifications() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Upcoming Notifications">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Container51 />
        <Container53 />
        <Button9 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Peak Hours Approaching</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acb3b7] text-[12px] w-full">
        <p className="leading-[19.5px] mb-0">System predicts a 40% volume increase</p>
        <p className="leading-[19.5px] mb-0">between 12:00 PM and 2:00 PM today.</p>
        <p className="leading-[19.5px]">Ensure secondary cabin is ready.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-baseline leading-[0] pt-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36px] justify-center relative shrink-0 text-[30px] text-white w-[36.13px]">
        <p className="leading-[36px]">45</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center not-italic relative shrink-0 text-[#80ecbc] text-[12px] tracking-[1.2px] uppercase w-[125.2px]">
        <p className="leading-[16px]">Avg Patients/Hr</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container73 />
      <Paragraph1 />
    </div>
  );
}

function ClinicHealthStats() {
  return (
    <div className="bg-[#0b0f10] relative rounded-[24px] shrink-0 w-full" data-name="Clinic Health Stats">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <div className="absolute bg-[rgba(0,109,76,0.1)] blur-[32px] bottom-[-39.5px] right-[-40px] rounded-[9999px] size-[160px]" data-name="Overlay+Blur" />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function RightSidebarNotificationsAlerts() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[168.5px] relative row-1 self-start shrink-0" data-name="Right Sidebar: Notifications & Alerts">
      <UpcomingNotifications />
      <ClinicHealthStats />
    </div>
  );
}

function Container14() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_832px] relative shrink-0 w-full" data-name="Container">
      <LiveQueuePanel />
      <RightSidebarNotificationsAlerts />
    </div>
  );
}

function MainContentStage() {
  return (
    <div className="min-h-[1272px] relative shrink-0 w-full" data-name="Main Content Stage">
      <div className="content-stretch flex flex-col gap-[32px] items-start min-h-[inherit] pb-[72px] pt-[80px] px-[32px] relative w-full">
        <DashboardHeaderTopActions />
        <SummaryGridBentoStyle />
        <Container14 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acb3b7] text-[14px] w-full">
        <p className="leading-[normal]">Search patient ID or token...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative w-full">
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Input />
      <div className="absolute bottom-[35.42%] left-[13.75px] top-[35.42%] w-[10.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.p210dd580} fill="var(--fill-0, #747C80)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #2C3437)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container77 />
      <div className="absolute bg-[#a83836] right-[-0.01px] rounded-[9999px] size-[8px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3de21300} fill="var(--fill-0, #2C3437)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container78 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-start relative shrink-0" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function HeaderTopNavBarShell() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex h-[64px] items-center justify-between px-[32px] right-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1024px]" data-name="Header - TopNavBar Shell">
      <Container74 />
      <Container76 />
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pe049700} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#80ecbc] content-stretch flex h-[40px] items-center justify-center relative rounded-[16px] shrink-0 w-[34.41px]" data-name="Background">
      <Container80 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[18px] tracking-[-0.35px] w-[97.75px]">
        <p className="leading-[18px] mb-0">The Clinical</p>
        <p className="leading-[18px]">Sanctuary</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] tracking-[-0.35px] w-[85.94px]">
        <p className="leading-[20px]">Mumbai North Clinic</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[97.75px]" data-name="Container">
      <Heading />
      <Container82 />
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] relative w-full">
          <Background15 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container79 />
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[14px] tracking-[-0.35px] w-[70.48px]">
          <p className="leading-[20px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] py-[12px] relative w-full">
          <Container83 />
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Container85() {
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

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[41.39px]">
        <p className="leading-[20px]">Queue</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container85 />
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[20.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 19.5">
        <g id="Container">
          <path d={svgPaths.p2d7d8580} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[51.23px]">
        <p className="leading-[20px]">Patients</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container87 />
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function Container89() {
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

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[35.81px]">
        <p className="leading-[20px]">Billing</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container89 />
          <Container90 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
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

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[48.94px]">
        <p className="leading-[20px]">Reports</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container91 />
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Container93() {
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

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[52.45px]">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container93 />
          <Container94 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function ProviderProfile() {
  return (
    <div className="max-w-[208px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Provider Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProviderProfile} />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[12px] tracking-[-0.35px] w-[102.64px]">
        <p className="leading-[16px]">Dr. Ananya Sharma</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.35px] w-[75.91px]">
        <p className="leading-[20px]">General Physician</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[102.64px]" data-name="Container">
      <Container97 />
      <Container98 />
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <ProviderProfile />
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[24px] relative w-full">
        <Background16 />
      </div>
    </div>
  );
}

function AsideSideNavBarShell() {
  return (
    <div className="absolute bg-[#f0f4f7] content-stretch flex flex-col h-[1272px] items-start justify-between left-0 py-[24px] top-0 w-[256px]" data-name="Aside - SideNavBar Shell">
      <Margin2 />
      <Nav />
      <Container95 />
    </div>
  );
}

export default function ClinicMonitoringDashboard() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex flex-col items-start pl-[256px] relative size-full" data-name="Clinic Monitoring Dashboard">
      <MainContentStage />
      <HeaderTopNavBarShell />
      <AsideSideNavBarShell />
    </div>
  );
}
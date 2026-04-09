import svgPaths from "./svg-672pnyfhh3";
import imgProviderProfile from "figma:asset/659bb15307efa3aed9d4c69451f244e025c33791.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[30px] tracking-[-0.75px] w-full">
        <p className="leading-[36px]">Billing Dashboard</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[16px] w-[479.13px]">
        <p className="leading-[24px] mb-0">Monitor transactions, manage patient invoices, and oversee the</p>
        <p className="leading-[24px]">{`clinic's financial health in one unified view.`}</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white col-[1/span_2] justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[32px] relative w-full">
          <Heading2Margin />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[20px]">Total Outstanding</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-white w-full">
        <p className="leading-[36px]">₹1,24,500</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Heading2 />
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-center justify-center px-[61.92px] py-[8px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[132.16px]">
        <p className="leading-[16px]">Generate Aging Report</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Background1() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background" style={{ backgroundImage: "linear-gradient(152.835deg, rgb(0, 109, 76) 0%, rgb(0, 95, 66) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
          <div className="absolute bottom-[-10.04px] flex h-[114.971px] items-center justify-center right-[-14.13px] w-[119.079px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-12">
              <div className="h-[96px] relative w-[101.333px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.333 96">
                  <path d={svgPaths.p24439740} fill="var(--fill-0, white)" fillOpacity="0.1" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <Container1 />
          <ButtonMargin />
        </div>
      </div>
    </div>
  );
}

function BentoGridHeader() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_156px] relative shrink-0 w-full" data-name="Bento Grid Header">
      <Background />
      <Background1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[18px] w-[180.08px]">
        <p className="leading-[28px]">Recent Transactions</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#dce4e8] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-center w-[77.28px]">
        <p className="leading-[16px]">Filter By Date</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#006d4c] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 to-[#005f42]" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[88.14px]">
        <p className="leading-[16px]">Create New Bill</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(240,244,247,0.5)] relative shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[24px] relative w-full">
          <Heading3 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-[233.44px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-[86.34px]">
        <p className="leading-[normal]">Patient Name</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-[170.25px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-[63.66px]">
        <p className="leading-[normal]">Invoice ID</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-[156.09px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-[82.77px]">
        <p className="leading-[normal]">Service Date</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-[144.8px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-[51.75px]">
        <p className="leading-[normal]">Amount</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-[133.11px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-[45.03px]">
        <p className="leading-[normal]">Status</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-col items-end px-[32px] py-[16px] relative shrink-0 w-[120.31px]" data-name="Cell">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] text-right tracking-[1px] uppercase w-[52.41px]">
        <p className="leading-[normal]">Actions</p>
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
      <Cell5 />
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

function Background2() {
  return (
    <div className="bg-[#b8f2fa] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#215d64] text-[12px] text-center w-[16.27px]">
        <p className="leading-[16px]">RK</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[92.98px]">
        <p className="leading-[20px]">Rajesh Kumar</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-[109.06px]">
        <p className="leading-[16px]">General Cardiology</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[109.06px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background2 />
        <Container5 />
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[22.5px] pl-[34px] pr-[32px] pt-[22px] relative shrink-0 w-[233.44px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30.5px] pt-[30px] px-[32px] relative shrink-0 w-[170.25px]" data-name="Data">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[100.83px]">
        <p className="leading-[20px]">INV-2024-001</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[31px] pt-[29.5px] px-[32px] relative shrink-0 w-[156.09px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[87.13px]">
        <p className="leading-[20px]">24 Oct, 2023</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[31px] pt-[29.5px] px-[32px] relative shrink-0 w-[144.8px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[70.25px]">
        <p className="leading-[20px]">₹4,500.00</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[10px] tracking-[0.5px] uppercase w-[24.92px]">
        <p className="leading-[normal]">Paid</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30.5px] pt-[30px] px-[32px] relative shrink-0 w-[133.11px]" data-name="Data">
      <Background3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
        <g id="Container">
          <path d={svgPaths.p3e801e80} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container8 />
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-end px-[32px] py-[20px] relative shrink-0 w-[120.31px]" data-name="Data">
      <Button3 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row 1">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(250,116,111,0.2)] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#a83836] text-[12px] text-center w-[16.42px]">
        <p className="leading-[16px]">AS</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[79.98px]">
        <p className="leading-[20px]">Anjali Singh</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-[116px]">
        <p className="leading-[16px]">Pediatrics Follow-up</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[116px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Overlay1 />
        <Container10 />
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[233.44px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[34px] pr-[32px] py-[22.5px] relative w-full">
        <Container9 />
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[170.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32px] py-[30.5px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[100.83px]">
          <p className="leading-[20px]">INV-2024-002</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[156.09px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[31px] pt-[30px] px-[32px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[87.13px]">
          <p className="leading-[20px]">24 Oct, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[144.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[31px] pt-[30px] px-[32px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[66.94px]">
          <p className="leading-[20px]">₹1,250.00</p>
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(250,116,111,0.2)] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#a83836] text-[10px] tracking-[0.5px] uppercase w-[40.88px]">
        <p className="leading-[normal]">Unpaid</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[133.11px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32px] py-[30.5px] relative w-full">
        <Overlay2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
        <g id="Container">
          <path d={svgPaths.p3e801e80} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container13 />
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[120.31px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[32px] py-[20.5px] relative w-full">
        <Button4 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row 2">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(128,236,188,0.3)] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#00563c] text-[12px] text-center w-[19.81px]">
        <p className="leading-[16px]">VM</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[94.25px]">
        <p className="leading-[20px]">Vikram Mehta</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-[108.55px]">
        <p className="leading-[16px]">Diagnostic Imaging</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108.55px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Overlay3 />
        <Container15 />
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[233.44px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22px] pl-[34px] pr-[32px] pt-[22.5px] relative w-full">
        <Container14 />
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[170.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30px] pt-[30.5px] px-[32px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[100.83px]">
          <p className="leading-[20px]">INV-2024-003</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[156.09px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30.5px] pt-[30px] px-[32px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[86.94px]">
          <p className="leading-[20px]">23 Oct, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[144.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30.5px] pt-[30px] px-[32px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[76.19px]">
          <p className="leading-[20px]">₹12,800.00</p>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[10px] tracking-[0.5px] uppercase w-[24.92px]">
        <p className="leading-[normal]">Paid</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[133.11px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30px] pt-[30.5px] px-[32px] relative w-full">
        <Background4 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[15px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
        <g id="Container">
          <path d={svgPaths.p3e801e80} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container18 />
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[120.31px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[32px] py-[20px] relative w-full">
        <Button5 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row 3">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
      <Data16 />
      <Data17 />
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
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[2px] relative w-full">
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
}

function BillingTableSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Billing Table Section">
      <Overlay />
      <Table />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] relative shrink-0 w-full" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[18px] w-[163.19px]">
        <p className="leading-[28px]">Payment Summary</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[111.28px]">
        <p className="leading-[20px]">Consultation Fee</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[70.53px]">
        <p className="leading-[20px]">₹2,000.00</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Item">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[105.91px]">
        <p className="leading-[20px]">Follow-up Exam</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[67.72px]">
        <p className="leading-[20px]">₹1,000.00</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Item">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[111.34px]">
        <p className="leading-[20px]">Laboratory Tests</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[67.47px]">
        <p className="leading-[20px]">₹1,800.00</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Item">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[10px] relative shrink-0 w-[9.988px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.9875 10">
        <g id="Container">
          <path d={svgPaths.p3bdaa580} fill="var(--fill-0, #A83836)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pr-[36.91px] relative shrink-0" data-name="Container">
      <Container26 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#a83836] text-[14px] w-[119.65px]">
        <p className="leading-[20px] mb-0">Privilege Discount</p>
        <p className="leading-[20px]">(10%)</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4.53px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#a83836] text-[14px] w-[57.55px]">
        <p className="leading-[20px] mb-0">-</p>
        <p className="leading-[20px]">₹480.00</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <Container25 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[70.66px]">
        <p className="leading-[20px]">GST (18%)</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[53.13px]">
        <p className="leading-[20px]">₹777.60</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[15.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-[110.33px]">
        <p className="leading-[16px]">Total Payable</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[24px] w-[119.66px]">
        <p className="leading-[32px]">₹5,097.60</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[26.9px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] uppercase w-[48.77px]">
        <p className="leading-[15px] mb-0">Payment</p>
        <p className="leading-[15px]">Mode</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p1fb0f480} fill="var(--fill-0, #596064)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[54.58px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] w-[62.39px]">
        <p className="leading-[16px] mb-0">HDFC Visa</p>
        <p className="leading-[16px]">****8829</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[12px] pr-[12.01px] py-[12px] relative w-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[34px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.3)] border-dashed border-t-2 inset-0 pointer-events-none" />
      <Container30 />
      <Background5 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
        <Heading4 />
        <List />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d676e] text-[14px] w-[126.2px]">
        <p className="leading-[20px]">Insurance Pending</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[59px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(33,93,100,0.8)] w-[183.9px]">
        <p className="leading-[19.5px] mb-0">Claim #82910 is currently under</p>
        <p className="leading-[19.5px] mb-0">review by Star Health Insurance.</p>
        <p className="leading-[19.5px]">Estimated settlement: 48 hours.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[183.9px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <div className="relative shrink-0 size-[20px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p6c8ea80} fill="var(--fill-0, #2D676E)" id="Icon" />
          </svg>
        </div>
        <Container38 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(184,242,250,0.3)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(45,103,110,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative w-full">
        <Container37 />
      </div>
    </div>
  );
}

function BillDetailsBreakdownAsymmetricCard() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[139.5px] relative row-1 self-start shrink-0" data-name="Bill Details Breakdown (Asymmetric Card)">
      <BackgroundShadow />
      <OverlayBorder />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[12px] tracking-[1.2px] uppercase w-[81.16px]">
        <p className="leading-[16px]">Invoice To</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[24px] w-[161.34px]">
        <p className="leading-[32px]">Rajesh Kumar</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[195.32px]">
        <p className="leading-[20px] mb-0">422, Green View Apartments,</p>
        <p className="leading-[20px]">Powai, Mumbai - 400076</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[195.32px]" data-name="Container">
      <Container43 />
      <Heading5 />
      <Container44 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#006d4c] content-stretch flex items-start justify-end px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-right text-white w-[89.63px]">
        <p className="leading-[15px]">OFFICIAL RECEIPT</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] text-right w-[89.48px]">
        <p className="leading-[16px]">Invoice Number</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-right w-[134.42px]">
        <p className="leading-[20px]">CS-MUM-2024-1029</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] text-right w-[74.58px]">
        <p className="leading-[16px]">Date of Issue</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-right w-[119px]">
        <p className="leading-[20px]">October 24, 2023</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Container">
      <Background6 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container45 />
    </div>
  );
}

function Container51() {
  return (
    <div className="col-[1/span_6] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[10px] tracking-[1px] uppercase w-[150.52px]">
          <p className="leading-[15px]">Description of Service</p>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-[7/span_2] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[10px] text-center tracking-[1px] uppercase w-[24.28px]">
          <p className="leading-[15px]">Qty</p>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-[9/span_2] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[10px] text-right tracking-[1px] uppercase w-[66.02px]">
          <p className="leading-[15px]">Unit Price</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="col-[11/span_2] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[10px] text-right tracking-[1px] uppercase w-[51.75px]">
          <p className="leading-[15px]">Amount</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_15px] pb-[10px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2c3437] border-b-2 border-solid inset-0 pointer-events-none" />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-full">
        <p className="leading-[20px]">Specialist Consultation</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-full">
        <p className="leading-[16px]">Dr. Ananya Sharma - Cardiology Department</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="col-[1/span_6] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="col-[7/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-center w-[5.7px]">
          <p className="leading-[20px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="col-[9/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-right w-[67.28px]">
          <p className="leading-[20px]">₹2,000.00</p>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="col-[11/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-right w-[70.53px]">
          <p className="leading-[20px]">₹2,000.00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_36px] pb-[17px] pt-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container55 />
      <Container58 />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-full">
        <p className="leading-[20px]">ECG - 12 Lead Diagnostic</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-full">
        <p className="leading-[16px]">Standard resting electrocardiogram</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="col-[1/span_6] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="col-[7/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-center w-[5.7px]">
          <p className="leading-[20px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="col-[9/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-right w-[64.31px]">
          <p className="leading-[20px]">₹1,800.00</p>
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="col-[11/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-right w-[67.47px]">
          <p className="leading-[20px]">₹1,800.00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_36px] pb-[17px] pt-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container61 />
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-[128.38px]">
        <p className="leading-[15px]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal h-[65px] italic justify-center leading-[0] relative shrink-0 text-[#596064] text-[10px] w-[236.78px]">
        <p className="leading-[16.25px] mb-0">Payment is due within 7 days of invoice date. All</p>
        <p className="leading-[16.25px] mb-0">diagnostic tests are non-refundable once</p>
        <p className="leading-[16.25px] mb-0">performed. Please mention your invoice ID for any</p>
        <p className="leading-[16.25px]">billing queries.</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[240px] relative shrink-0 w-[236.78px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[54.58px]">
        <p className="leading-[20px]">Subtotal</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[70.16px]">
        <p className="leading-[20px]">₹3,800.00</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[98.11px]">
        <p className="leading-[20px]">Tax (GST 18%)</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[57.19px]">
        <p className="leading-[20px]">₹684.00</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] tracking-[1.2px] uppercase w-[111.09px]">
          <p className="leading-[16px]">Total Amount</p>
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[24px] w-[121.48px]">
          <p className="leading-[32px]">₹4,484.00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2c3437] border-solid border-t inset-0 pointer-events-none" />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[256px]" data-name="Container">
      <Container72 />
      <Container75 />
      <HorizontalBorder4 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container71 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 10.5">
        <g id="Container">
          <path d={svgPaths.p344da140} fill="var(--fill-0, #2C3437)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex gap-[7.99px] items-center px-[24px] py-[12px] relative rounded-[16px] shrink-0" data-name="Button">
      <Container80 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-center w-[72.16px]">
        <p className="leading-[16px]">Print Invoice</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p1c659f80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#006d4c] content-stretch flex gap-[7.99px] items-center px-[24px] py-[12px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.35px_0_0] rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container81 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[89.3px]">
        <p className="leading-[16px]">Email to Patient</p>
      </div>
    </div>
  );
}

function FooterAction() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-end relative shrink-0 w-full" data-name="Footer Action">
      <Button6 />
      <Button7 />
    </div>
  );
}

function DigitalInvoiceLayoutEditorialStyle() {
  return (
    <div className="bg-white col-[2/span_2] justify-self-stretch relative rounded-[16px] row-1 self-start shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05),0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Digital Invoice Layout (Editorial Style)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start p-[48px] relative w-full">
          <div className="-translate-y-1/2 absolute flex h-[473.121px] items-center justify-center right-[349.07px] top-[138.52px] translate-x-full w-[468.292px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-12">
              <div className="flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] h-[400px] justify-center leading-[0] not-italic opacity-3 relative text-[#2c3437] text-[400px] w-[393.731px]">
                <p className="leading-[400px]">health_and_safety</p>
              </div>
            </div>
          </div>
          <Container41 />
          <Container50 />
          <Container67 />
          <FooterAction />
        </div>
      </div>
    </div>
  );
}

function InvoiceDetailsSection() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_775px] relative shrink-0 w-full" data-name="Invoice & Details Section">
      <BillDetailsBreakdownAsymmetricCard />
      <DigitalInvoiceLayoutEditorialStyle />
    </div>
  );
}

function ContentCanvas() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Content Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] p-[32px] relative w-full">
        <BentoGridHeader />
        <BillingTableSection />
        <InvoiceDetailsSection />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #747C80)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#acb3b7] text-[14px] w-full">
        <p className="leading-[normal]">Search billing entries, patients, or invoices...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[10px] pt-[9px] px-[12px] relative w-full">
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0 w-[384px]" data-name="Background">
      <Container82 />
      <Input />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative" data-name="Button">
      <Container85 />
    </div>
  );
}

function ButtonCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center py-[8.6px] relative shrink-0" data-name="Button:css-transform">
      <div className="flex h-[19px] items-center justify-center relative shrink-0 w-[15.2px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-right w-[110.89px]">
        <p className="leading-[15px]">Dr. Ananya Sharma</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] text-right w-[100.45px]">
        <p className="leading-[15px]">Chief Medical Officer</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[110.89px]" data-name="Container">
      <Container88 />
      <Container89 />
    </div>
  );
}

function ProviderProfile() {
  return (
    <div className="relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[40px]" data-name="Provider Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProviderProfile} />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container87 />
      <ProviderProfile />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[24.6px] items-center pl-[0.6px] relative shrink-0" data-name="Container">
      <ButtonCssTransform />
      <Container86 />
    </div>
  );
}

function HeaderTopNavBarExecutionFromJson() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex h-[64px] items-center justify-between px-[32px] right-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1024px]" data-name="Header - TopNavBar (Execution from JSON)">
      <Background7 />
      <Container84 />
    </div>
  );
}

function MainStage() {
  return (
    <div className="flex-[1_0_0] min-h-[1513px] min-w-px relative self-stretch" data-name="Main Stage">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[24px] pt-[64px] relative size-full">
        <ContentCanvas />
        <HeaderTopNavBarExecutionFromJson />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pe049700} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#006d4c] content-stretch flex h-[40px] items-center justify-center relative rounded-[12px] shrink-0 w-[34.41px]" data-name="Background">
      <Container91 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[45px] justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[18px] tracking-[-0.35px] w-[97.75px]">
        <p className="leading-[22.5px] mb-0">The Clinical</p>
        <p className="leading-[22.5px]">Sanctuary</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[130.58px]">
        <p className="leading-[20px]">Mumbai North Clinic</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130.58px]" data-name="Container">
      <Heading />
      <Container93 />
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] relative w-full">
          <Background8 />
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container90 />
    </div>
  );
}

function Container94() {
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

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[67.25px]">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container94 />
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Container96() {
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

function Container97() {
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
          <Container96 />
          <Container97 />
        </div>
      </div>
    </div>
  );
}

function Container98() {
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

function Container99() {
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
          <Container98 />
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[14px] tracking-[-0.35px] w-[39.48px]">
          <p className="leading-[20px]">Billing</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none rounded-br-[16px] rounded-tr-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] py-[12px] relative w-full">
          <Container100 />
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function Container102() {
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

function Container103() {
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
          <Container102 />
          <Container103 />
        </div>
      </div>
    </div>
  );
}

function Container104() {
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

function Container105() {
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
          <Container104 />
          <Container105 />
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
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#596064] text-[12px] tracking-[-0.35px] w-full">
        <p className="leading-[16px]">{`Today's Revenue`}</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[18px] tracking-[-0.35px] w-full">
        <p className="leading-[28px]">₹42,850.00</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Container107 />
        <Container108 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <BackgroundShadow1 />
      </div>
    </div>
  );
}

function AsideSideNavBarExecutionFromJson() {
  return (
    <div className="absolute bg-[#f0f4f7] content-stretch flex flex-col h-[1513px] items-start justify-between left-0 py-[24px] top-0 w-[256px]" data-name="Aside - SideNavBar (Execution from JSON)">
      <Margin />
      <Nav />
      <Container106 />
    </div>
  );
}

export default function BillingInvoices() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex items-start justify-center pl-[256px] relative size-full" data-name="Billing & Invoices">
      <MainStage />
      <AsideSideNavBarExecutionFromJson />
    </div>
  );
}
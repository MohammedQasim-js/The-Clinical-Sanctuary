import svgPaths from "./svg-vmb2xg5s6c";
import imgProviderProfile from "figma:asset/1d5d6a4dec88bb18c69c5bea89c5f8f6ae585d85.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[40px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[36px] tracking-[-0.9px] w-[237.42px]">
        <p className="leading-[40px]">Patient Intake</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[16px] w-[448.38px]">
        <p className="leading-[24px]">Issue new queue tokens and register incoming clinic visits.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[448.38px]" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="h-[29.333px] relative shrink-0 w-[34.333px]" data-name="Overlay">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.3333 29.3333">
        <g id="Overlay">
          <rect fill="var(--fill-0, #2D9F75)" fillOpacity="0.1" height="29.3333" rx="14.6667" width="34.3333" />
          <path d={svgPaths.p3bd11980} fill="var(--fill-0, #2D9F75)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-[117.72px]">
        <p className="leading-[16px]">Current Queue</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center left-0 text-[#2c3437] text-[20px] top-[13.5px] w-[24.67px]">
        <p className="leading-[28px]">{`12 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center left-[24.67px] text-[#596064] text-[14px] top-[15.5px] w-[54.03px]">
        <p className="leading-[20px]">Patients</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117.72px]" data-name="Container">
      <Container4 />
      <Paragraph />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[16px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] h-full items-center px-[24px] py-[12px] relative">
          <Overlay />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="relative shrink-0 size-[32.667px]" data-name="Overlay">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6667 32.6667">
        <g id="Overlay">
          <rect fill="var(--fill-0, #2D676E)" fillOpacity="0.1" height="32.6667" rx="16.3333" width="32.6667" />
          <path d={svgPaths.p20e91000} fill="var(--fill-0, #2D676E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-[73.92px]">
        <p className="leading-[16px]">Avg. Wait</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center left-0 text-[#2c3437] text-[20px] top-[13.5px] w-[25.02px]">
        <p className="leading-[28px]">{`18 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center left-[25.01px] text-[#596064] text-[14px] top-[15.5px] w-[23.36px]">
        <p className="leading-[20px]">Min</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[73.92px]" data-name="Container">
      <Container6 />
      <Paragraph1 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[16px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] h-full items-center px-[24px] py-[12px] relative">
          <Overlay1 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[68px] items-start relative shrink-0" data-name="Container">
      <Background />
      <Background1 />
    </div>
  );
}

function IntakeDashboardHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Intake Dashboard Header">
      <Container />
      <Container2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.pe7a2f00} fill="var(--fill-0, #00563C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#80ecbc] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[20px] w-[216.91px]">
          <p className="leading-[28px]">New Token Generation</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-[25px] relative w-full">
        <Background2 />
        <Heading2 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p>
          <span className="leading-[16px]">{`Phone Number `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic text-[#a83836]">*</span>
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">+91 98765 43210</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[40px] pr-[16px] py-[18px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <div className="absolute bottom-[37.95%] left-[14.25px] top-[37.95%] w-[13.5px]" data-name="Icon">
        <div className="absolute inset-[0_0_-1.82%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
            <path d={svgPaths.pb3c9680} fill="var(--fill-0, #747C80)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container9 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Reason for Visit</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="SVG">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start justify-center left-0 overflow-clip pl-[235.33px] pr-[8px] py-[13.5px] top-0 w-[264.33px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container13() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[16px] overflow-clip right-[16px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[83.31px]">
        <p className="leading-[20px]">Consultation</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#f8f9fb] h-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Options">
      <ImageFill />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)]" data-name="Options:shadow" />
      <Container13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[16px] relative row-1 self-start shrink-0" data-name="Container">
      <Label1 />
      <Options />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Symptoms / Brief Notes</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[20px]">e.g. Fever, persistent headache...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[32px] pt-[12px] px-[16px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label2 />
      <Textarea />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_88px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
    </div>
  );
}

function PrimaryFields() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Primary Fields">
      <Container8 />
      <Container11 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px]">Optional Details</p>
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] uppercase w-full">
        <p className="leading-[15px]">Full Name</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[normal]">John Doe</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.2)] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[11px] pt-[10px] px-[16px] relative w-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label3 />
      <Input1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] uppercase w-full">
        <p className="leading-[15px]">Age</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] overflow-clip right-[31.01px] top-[10px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[31.94px]">
        <p className="leading-[normal]">Years</p>
      </div>
    </div>
  );
}

function Container23() {
  return <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px mr-[-0.01px]" data-name="Container" />;
}

function RectangleAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start mr-[-0.01px] relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex items-center left-[16px] pr-[0.01px] right-[16.01px] top-[10px]" data-name="Container">
      <Container23 />
      <div className="flex flex-row items-center self-stretch">
        <RectangleAlignStretch />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[36px] overflow-clip relative rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.2)] shrink-0 w-full" data-name="Input">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label4 />
      <Input2 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] uppercase w-full">
        <p className="leading-[15px]">Gender</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] col-1 content-stretch flex flex-col items-center justify-center justify-self-start px-[19.35px] py-[8px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[10px] text-center w-[9.14px]">
        <p className="leading-[15px]">M</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#2d9f75] col-2 content-stretch flex flex-col items-center justify-center justify-self-start pl-[20.97px] pr-[20.98px] py-[8px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_#2d9f75]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white w-[5.89px]">
        <p className="leading-[15px]">F</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] col-3 content-stretch flex flex-col items-center justify-center justify-self-start pl-[20.08px] pr-[20.09px] py-[8px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[10px] text-center w-[7.67px]">
        <p className="leading-[15px]">O</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_31px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[5px] relative row-1 self-start shrink-0" data-name="Container">
      <Label5 />
      <Container25 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_59px] relative w-full">
        <Container18 />
        <Container20 />
        <Container24 />
      </div>
    </div>
  );
}

function OptionalDetailsGroupVisuallySecondary() {
  return (
    <div className="bg-[rgba(240,244,247,0.5)] relative rounded-[24px] shrink-0 w-full" data-name="Optional Details Group (Visually Secondary)">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.2)] border-dashed inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[16px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] text-center w-[74.13px]">
        <p className="leading-[20px]">Clear Form</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p12995800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#2d9f75] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[16px] relative rounded-[16px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.01px_0_0] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container27 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[121.5px]">
        <p className="leading-[24px]">Generate Token</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative w-full">
        <PrimaryFields />
        <OptionalDetailsGroupVisuallySecondary />
        <Container26 />
      </div>
    </div>
  );
}

function IntakeFormSection() {
  return (
    <div className="bg-white col-[1/span_2] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Intake Form Section (2/3)">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[49px] pt-[33px] px-[33px] relative w-full">
        <HorizontalBorder />
        <Form />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-full">
          <p className="leading-[16px]">Daily Patient Capacity</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] uppercase w-[53.75px]">
        <p className="leading-[15px]">Progress</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] relative shrink-0 text-[#2d9f75] text-[24px] w-[51.31px]">
        <p className="leading-[32px]">84%</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[53.75px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] text-right uppercase w-[39.03px]">
        <p className="leading-[15px]">Status</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#a83836] text-[12px] text-right w-[74.59px]">
        <p className="leading-[16px]">Limited Slots</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[74.59px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container33 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#e3e9ed] h-[12px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Progress Bar">
      <div className="absolute bg-[#2d9f75] inset-[0_16%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[9px] text-center uppercase w-[29.09px]">
        <p className="leading-[13.5px]">Total</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-center w-[17.81px]">
        <p className="leading-[20px]">50</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[9px] text-center uppercase w-[32.78px]">
          <p className="leading-[13.5px]">Issued</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-center w-[18.05px]">
          <p className="leading-[20px]">42</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] relative w-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[9px] text-center uppercase w-[51.56px]">
        <p className="leading-[13.5px]">Remaining</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d9f75] text-[14px] text-center w-[8.97px]">
        <p className="leading-[20px]">8</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_33.50px] pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container36 />
      <Border />
      <Container41 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container29 />
        <ProgressBar />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function DailyPatientCapacityCard() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Daily Patient Capacity Card">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative w-full">
        <Heading3 />
        <Container28 />
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(207,233,217,0.4)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[10px] tracking-[2px] uppercase w-[131.86px]">
        <p className="leading-[15px]">Live Token Issued</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.pa645fe0} fill="var(--fill-0, #2D9F75)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container45 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Overlay2 />
      <Button5 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] text-center tracking-[3px] uppercase w-[139.36px]">
        <p className="leading-[15px]">Patient Token ID</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[60px] justify-center leading-[0] relative shrink-0 text-[#2d9f75] text-[60px] text-center tracking-[-3px] w-[194.41px]">
        <p className="leading-[60px]">CS-142</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Heading1 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[42.52px]">
          <p className="leading-[20px]">Phone</p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[75.67px]">
          <p className="leading-[20px]">+91 98XXX</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[9px] relative w-full">
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[71.25px]">
          <p className="leading-[20px]">Symptoms</p>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[37.59px]">
          <p className="leading-[20px]">Fever</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder2 />
      <HorizontalBorder3 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[9px] text-center tracking-[0.9px] uppercase w-[19.86px]">
          <p className="leading-[13.5px]">ETA</p>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[14px] text-center w-[64.55px]">
          <p className="leading-[20px]">~ 22 Mins</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f0f4f7] col-1 justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative w-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[9px] text-center tracking-[0.9px] uppercase w-[70.22px]">
          <p className="leading-[13.5px]">Report Time</p>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[14px] text-center w-[57.95px]">
          <p className="leading-[20px]">11:45 AM</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f0f4f7] col-2 justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative w-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_63.50px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Container44 />
        <Container46 />
        <Container48 />
        <Container53 />
      </div>
    </div>
  );
}

function LastGeneratedTokenSuccessView() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Last Generated Token (Success View)" style={{ backgroundImage: "linear-gradient(52.9457deg, rgb(255, 255, 255) 0%, rgba(207, 233, 217, 0.3) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
          <div className="absolute bg-[rgba(45,159,117,0.05)] blur-[32px] right-[-47.01px] rounded-[9999px] size-[192px] top-[-47px]" data-name="Decorative Circle Background Elements" />
          <div className="absolute bg-[rgba(77,100,88,0.1)] blur-[32px] bottom-[-47px] left-[-47px] rounded-[9999px] size-[192px]" data-name="Overlay+Blur" />
          <Background3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(45,159,117,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] tracking-[0.6px] uppercase w-[71.94px]">
        <p className="leading-[16px]">Upcoming</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[9px] uppercase w-[70.27px]">
        <p className="leading-[13.5px]">Auto-Refresh</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d9f75] text-[12px] w-[42.63px]">
        <p className="leading-[16px]">CS-139</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[64.63px]">
        <p className="leading-[20px]">Anita Rao</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d9f75] text-[9px] uppercase w-[33.27px]">
          <p className="leading-[13.5px]">Active</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorderShadow() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder+Shadow">
      <div aria-hidden="true" className="absolute border-[#2d9f75] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[12px] relative w-full">
          <Container60 />
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-[43.22px]">
        <p className="leading-[16px]">CS-140</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[72.63px]">
        <p className="leading-[20px]">Kiran Shah</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[9px] uppercase w-[24.36px]">
        <p className="leading-[13.5px]">Next</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] opacity-80 relative rounded-[16px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Container64 />
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundVerticalBorderShadow />
      <Overlay3 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2d9f75] text-[12px] text-center w-[97.09px]">
        <p className="leading-[16px]">Full Clinic Queue</p>
      </div>
    </div>
  );
}

function LiveQueueMiniTracker() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[24px] shrink-0 w-full" data-name="Live Queue Mini-Tracker">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Container58 />
        <Container59 />
        <Button6 />
      </div>
    </div>
  );
}

function AsideStatusSide() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Aside - Status Side (1/3)">
      <DailyPatientCapacityCard />
      <LastGeneratedTokenSuccessView />
      <LiveQueueMiniTracker />
    </div>
  );
}

function Component23And13Layout() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_929.50px] relative shrink-0 w-full" data-name="2/3 and 1/3 Layout">
      <IntakeFormSection />
      <AsideStatusSide />
    </div>
  );
}

function MainContentStage() {
  return (
    <div className="max-w-[1400px] min-h-[1192px] relative shrink-0 w-full" data-name="Main Content Stage">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] min-h-[inherit] pb-[54.5px] pt-[96px] px-[40px] relative w-full">
        <IntakeDashboardHeader />
        <Component23And13Layout />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #596064)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-0" data-name="Button:shadow" />
      <Container68 />
    </div>
  );
}

function SupportShortcut() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col items-start right-[32px]" data-name="Support shortcut">
      <Button7 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d9f75] text-[20px] tracking-[-0.5px] w-full">
        <p className="leading-[28px]">The Clinical Sanctuary</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-full">
        <p className="leading-[16px]">Mumbai North Clinic</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] relative w-full">
        <Heading5 />
        <Container70 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container69 />
    </div>
  );
}

function Container71() {
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

function Link() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container71 />
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[67.25px]">
            <p className="leading-[20px]">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p9fd8800} fill="var(--fill-0, #2D9F75)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#2d9f75] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] py-[12px] relative w-full">
          <Container72 />
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#2d9f75] text-[14px] tracking-[-0.35px] w-[43.13px]">
            <p className="leading-[20px]">Queue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container73() {
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

function Link2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container73 />
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[51.23px]">
            <p className="leading-[20px]">Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container74() {
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

function Link3() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container74 />
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[35.81px]">
            <p className="leading-[20px]">Billing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container75() {
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

function Link4() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container75 />
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[48.94px]">
            <p className="leading-[20px]">Reports</p>
          </div>
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
      </div>
    </div>
  );
}

function Container77() {
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

function Link5() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container77 />
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[52.45px]">
            <p className="leading-[20px]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Link5 />
      </div>
    </div>
  );
}

function AsideSideNavBarShell() {
  return (
    <div className="absolute bg-[#f0f4f7] content-stretch flex flex-col h-[1192px] items-start justify-between left-0 py-[24px] top-0 w-[256px]" data-name="Aside - SideNavBar Shell">
      <Margin />
      <Nav />
      <Container76 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search patients or records...</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative w-full">
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[448px] min-h-px min-w-px relative" data-name="Container">
      <Input3 />
      <div className="absolute bottom-[31.25%] left-[14.25px] top-[31.25%] w-[13.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <path d={svgPaths.p2500af80} fill="var(--fill-0, #747C80)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[269.91px] relative w-full">
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
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

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative" data-name="Button">
      <Container82 />
    </div>
  );
}

function ButtonCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center py-px relative shrink-0" data-name="Button:css-transform">
      <div className="flex h-[34.2px] items-center justify-center relative shrink-0 w-[30.4px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-right w-[95.56px]">
        <p className="leading-[17.5px]">Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] text-right tracking-[0.5px] uppercase w-[109.08px]">
        <p className="leading-[15px]">Lead Receptionist</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0 w-[109.08px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container84 />
        <Container85 />
      </div>
    </div>
  );
}

function ProviderProfile() {
  return (
    <div className="relative rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(45,159,117,0.1)] shrink-0 size-[40px]" data-name="Provider Profile">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProviderProfile} />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[17px] relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.2)] border-l border-solid inset-0 pointer-events-none" />
      <Container83 />
      <ProviderProfile />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <VerticalBorder />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[17px] items-center pl-px relative shrink-0" data-name="Container">
      <ButtonCssTransform />
      <Margin1 />
    </div>
  );
}

function HeaderTopNavBarShell() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex h-[64px] items-center justify-between px-[32px] right-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1024px]" data-name="Header - TopNavBar Shell">
      <Container78 />
      <Container81 />
    </div>
  );
}

export default function PatientIntakeCapacityManagement() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex flex-col items-start pl-[256px] relative size-full" data-name="Patient Intake & Capacity Management">
      <MainContentStage />
      <SupportShortcut />
      <AsideSideNavBarShell />
      <HeaderTopNavBarShell />
    </div>
  );
}
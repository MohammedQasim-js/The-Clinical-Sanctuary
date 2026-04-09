import svgPaths from "./svg-dglfjvti4g";
import imgPatientProfile from "figma:asset/316861c3ad7833f67480d76994992e790576c65e.png";
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
          <rect fill="var(--fill-0, #006D4C)" fillOpacity="0.1" height="29.3333" rx="14.6667" width="34.3333" />
          <path d={svgPaths.p3bd11980} fill="var(--fill-0, #006D4C)" id="Icon" />
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center left-[24.68px] text-[#596064] text-[14px] top-[15.5px] w-[105.83px]">
        <p className="leading-[20px]">Patients Waiting</p>
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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[1.2px] uppercase w-[112.52px]">
        <p className="leading-[16px]">Avg. Wait Time</p>
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center left-[25.02px] text-[#596064] text-[14px] top-[15.5px] w-[52.53px]">
        <p className="leading-[20px]">Minutes</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112.52px]" data-name="Container">
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

function Container8() {
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
        <Container8 />
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

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">+91 98765 43210</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[14px] pl-[40px] pr-[16px] pt-[13px] relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <div className="absolute bottom-[34.66%] left-[14.25px] top-[34.66%] w-[13.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <path d={svgPaths.pb3c9680} fill="var(--fill-0, #747C80)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function RequiredField() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Required Field">
      <Label />
      <Container10 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Full Name (Optional)</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">John Doe</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[14px] pl-[40px] pr-[16px] pt-[13px] relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <div className="absolute bottom-[36.36%] left-[15px] top-[36.36%] w-[12px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p3189a600} fill="var(--fill-0, #747C80)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function OptionalField() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Optional Field">
      <Label1 />
      <Container12 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Age</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] overflow-clip right-[31.01px] top-[13px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[37.25px]">
        <p className="leading-[normal]">Years</p>
      </div>
    </div>
  );
}

function Container17() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" data-name="Container" />;
}

function RectangleAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex items-center left-[16px] right-[16.01px] top-[12px]" data-name="Container">
      <Container17 />
      <div className="flex flex-row items-center self-stretch">
        <RectangleAlignStretch />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f8f9fb] h-[44px] overflow-clip relative rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)] shrink-0 w-full" data-name="Input">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Gender</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f8f9fb] col-1 content-stretch flex flex-col items-center justify-center justify-self-start pl-[20.68px] pr-[20.7px] py-[10px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-center w-[27.84px]">
        <p className="leading-[16px]">Male</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#80ecbc] col-2 content-stretch flex flex-col items-center justify-center justify-self-start pl-[13.75px] pr-[13.77px] py-[10px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_#006d4c]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#00563c] text-[12px] text-center w-[41.7px]">
        <p className="leading-[16px]">Female</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f8f9fb] col-3 content-stretch flex flex-col items-center justify-center justify-self-start pl-[18.52px] pr-[18.51px] py-[10px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] text-center w-[32.2px]">
        <p className="leading-[16px]">Other</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_36px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[8px] relative row-2 self-start shrink-0" data-name="Container">
      <Label3 />
      <Container19 />
    </div>
  );
}

function Container9() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__68px_68px] relative shrink-0 w-full" data-name="Container">
      <RequiredField />
      <OptionalField />
      <Container14 />
      <Container18 />
    </div>
  );
}

function Label4() {
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
    <div className="absolute content-stretch flex flex-col h-[44px] items-start justify-center left-0 overflow-clip pl-[442.33px] pr-[8px] py-[11.5px] top-0 w-[471.33px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container21() {
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
    <div className="bg-[#f8f9fb] h-[44px] relative rounded-[16px] shrink-0 w-full" data-name="Options">
      <ImageFill />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)]" data-name="Options:shadow" />
      <Container21 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Options />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Symptoms / Brief Notes</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[20px]">e.g. Mild fever since morning, persistent headache...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[16px] shadow-[0px_0px_0px_1px_rgba(172,179,183,0.3)] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[52px] pt-[12px] px-[16px] relative w-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Textarea />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] text-center w-[74.13px]">
        <p className="leading-[20px]">Clear Form</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.padeb980} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[14px] relative rounded-[16px]" data-name="Button" style={{ backgroundImage: "linear-gradient(171.53deg, rgb(0, 109, 76) 0%, rgb(0, 95, 66) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container25 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[121.5px]">
        <p className="leading-[24px]">Generate Token</p>
      </div>
    </div>
  );
}

function Container24() {
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Container9 />
        <Container20 />
        <Container22 />
        <Container24 />
      </div>
    </div>
  );
}

function IntakeFormSection() {
  return (
    <div className="bg-white col-[1/span_7] justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Intake Form Section">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[49px] pt-[33px] px-[33px] relative w-full">
        <HorizontalBorder />
        <Form />
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

function Container27() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.pa645fe0} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container27 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Overlay2 />
        <Button5 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] text-center tracking-[3.6px] uppercase w-[167.23px]">
        <p className="leading-[16px]">Patient Token ID</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[72px] justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[72px] text-center tracking-[-3.6px] w-[233.28px]">
        <p className="leading-[72px]">CS-142</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Heading1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px]">Estimated Wait</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[18px] w-full">
          <p className="leading-[28px]">~ 22 Mins</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f0f4f7] col-1 justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative w-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px]">Reporting Time</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[18px] w-full">
          <p className="leading-[28px]">11:45 AM</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f0f4f7] col-2 justify-self-stretch relative rounded-[24px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[17px] relative w-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_81px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function PatientProfile() {
  return (
    <div className="max-w-[300.6600036621094px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Patient Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPatientProfile} />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[83.11px]">
        <p className="leading-[17.5px]">Arjun Mehta</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[11px] w-[111.89px]">
        <p className="leading-[16.5px]">98765 • Consultation</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[111.89px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p20c60900} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[56.766px] relative w-full">
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(0,109,76,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <PatientProfile />
          <Container35 />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Container26 />
        <Container28 />
        <Container30 />
        <Overlay3 />
      </div>
    </div>
  );
}

function LastGeneratedTokenSuccessView() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Last Generated Token (Success View)" style={{ backgroundImage: "linear-gradient(51.3799deg, rgb(255, 255, 255) 0%, rgba(207, 233, 217, 0.3) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
          <div className="absolute bg-[rgba(0,109,76,0.05)] blur-[32px] right-[-46.98px] rounded-[9999px] size-[192px] top-[-47px]" data-name="Decorative Circle Background Elements" />
          <div className="absolute bg-[rgba(77,100,88,0.1)] blur-[32px] bottom-[-47px] left-[-47px] rounded-[9999px] size-[192px]" data-name="Overlay+Blur" />
          <Background3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,109,76,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] tracking-[0.7px] uppercase w-[136.73px]">
        <p className="leading-[20px]">Upcoming Calls</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(172,179,183,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] w-[95.88px]">
        <p className="leading-[15px]">AUTO-REFRESH ON</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <Heading3 />
          <BackgroundBorder2 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[48px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[12px] text-center w-[42.63px]">
        <p className="leading-[16px]">CS-139</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[64.63px]">
        <p className="leading-[20px]">Anita Rao</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[10px] tracking-[0.5px] uppercase w-[72.13px]">
          <p className="leading-[15px]">In Progress</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorderShadow() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder+Shadow">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[12px] relative w-full">
          <Container41 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[48px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] text-center w-[43.22px]">
        <p className="leading-[16px]">CS-140</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[72.63px]">
        <p className="leading-[20px]">Kiran Shah</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[0.5px] uppercase w-[46.89px]">
        <p className="leading-[15px]">Up Next</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] opacity-80 relative rounded-[16px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[12.01px] py-[12px] relative w-full">
          <Container45 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[48px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] text-center w-[40px]">
        <p className="leading-[16px]">CS-141</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[14px] w-[62.83px]">
        <p className="leading-[20px]">Samira V.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] tracking-[0.5px] uppercase w-[47.53px]">
        <p className="leading-[15px]">Waiting</p>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] opacity-80 relative rounded-[16px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[12.01px] py-[12px] relative w-full">
          <Container49 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundVerticalBorderShadow />
      <Overlay4 />
      <Overlay5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[12px] text-center w-[128.97px]">
        <p className="leading-[16px]">View Full Clinic Queue</p>
      </div>
    </div>
  );
}

function LiveQueueMiniTracker() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[24px] shrink-0 w-full" data-name="Live Queue Mini-Tracker">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Container39 />
        <Container40 />
        <Button6 />
      </div>
    </div>
  );
}

function AsideSuccessStateTokenDetails() {
  return (
    <div className="col-[8/span_5] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Aside - Success State / Token Details">
      <LastGeneratedTokenSuccessView />
      <LiveQueueMiniTracker />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_812px] relative shrink-0 w-full" data-name="Container">
      <IntakeFormSection />
      <AsideSuccessStateTokenDetails />
    </div>
  );
}

function MainContentStage() {
  return (
    <div className="max-w-[1400px] min-h-[1074px] relative shrink-0 w-full" data-name="Main Content Stage">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] min-h-[inherit] pb-[54px] pt-[96px] px-[40px] relative w-full">
        <IntakeDashboardHeader />
        <Container7 />
      </div>
    </div>
  );
}

function Container53() {
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
      <Container53 />
    </div>
  );
}

function FloatingActionForMobileQuickAccessSuppressedAsPerRulesOnDetailTaskPagesButHereIt() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col items-start right-[32px]" data-name="Floating Action for Mobile / Quick Access (Suppressed as per rules on detail/task pages, but here it...">
      <Button7 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[20px] tracking-[-0.5px] w-full">
        <p className="leading-[28px]">The Clinical Sanctuary</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-full">
        <p className="leading-[16px]">Mumbai North Clinic</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] relative w-full">
        <Heading4 />
        <Container55 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container54 />
    </div>
  );
}

function Container56() {
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
          <Container56 />
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[67.25px]">
            <p className="leading-[20px]">Dashboard</p>
          </div>
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
          <path d={svgPaths.p9fd8800} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] py-[12px] relative w-full">
          <Container57 />
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006d4c] text-[14px] tracking-[-0.35px] w-[43.13px]">
            <p className="leading-[20px]">Queue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container58() {
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
          <Container58 />
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[51.23px]">
            <p className="leading-[20px]">Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container59() {
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
          <Container59 />
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[35.81px]">
            <p className="leading-[20px]">Billing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container60() {
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
          <Container60 />
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

function Container62() {
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
          <Container62 />
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[52.45px]">
            <p className="leading-[20px]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container61() {
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
    <div className="absolute bg-[#f0f4f7] content-stretch flex flex-col h-[1074px] items-start justify-between left-0 py-[24px] top-0 w-[256px]" data-name="Aside - SideNavBar Shell">
      <Margin1 />
      <Nav />
      <Container61 />
    </div>
  );
}

function Container65() {
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
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
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

function Container63() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[269.91px] relative w-full">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
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
      <Container67 />
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

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-right w-[95.56px]">
        <p className="leading-[17.5px]">Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[10px] text-right tracking-[0.5px] uppercase w-[109.08px]">
        <p className="leading-[15px]">Lead Receptionist</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-[109.08px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function ProviderProfile() {
  return (
    <div className="relative rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(0,109,76,0.1)] shrink-0 size-[40px]" data-name="Provider Profile">
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
      <Container68 />
      <ProviderProfile />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <VerticalBorder />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[17px] items-center pl-px relative shrink-0" data-name="Container">
      <ButtonCssTransform />
      <Margin2 />
    </div>
  );
}

function HeaderTopNavBarShell() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] content-stretch flex h-[64px] items-center justify-between px-[32px] right-0 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1024px]" data-name="Header - TopNavBar Shell">
      <Container63 />
      <Container66 />
    </div>
  );
}

export default function PatientIntakeTokenGen() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex flex-col items-start pl-[256px] relative size-full" data-name="Patient Intake & Token Gen">
      <MainContentStage />
      <FloatingActionForMobileQuickAccessSuppressedAsPerRulesOnDetailTaskPagesButHereIt />
      <AsideSideNavBarShell />
      <HeaderTopNavBarShell />
    </div>
  );
}
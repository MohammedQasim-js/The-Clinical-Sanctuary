import svgPaths from "./svg-f5hjue2mq0";
import imgAb6AXuD17PeP8OIchNa6FAamYpBltTsbOCqXpBa25DHByN09AdELuaJgArDrFh469WZ9SxQsiFtYEeprSbowAqQqSdjMkuTwXy4Ltlm7Ad6GrvSj0Qsc0Ac7Wwx3JiZz9Hc1GkO5UMoybQ9M6QzYhhZtBGckzLKelC6Is26SfqKw6TKlaAzm8VLxnXv0Jw2XGnRtrHwVrDbTqzDoVwMeHxH9K3Hu21PGgPs1U0SibrPaqV1Hq2DkEDtx1GMqrFoD2NckunZqqheG64 from "figma:asset/16d680001ff56db2d8000875b611f803838a8e5c.png";
import imgProviderProfile from "figma:asset/f2f6e3640b1c78c71197100e3f48658c802189ce.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36px] justify-center leading-[0] relative shrink-0 text-[#2c3437] text-[30px] tracking-[-0.75px] w-[272.59px]">
        <p className="leading-[36px]">Notification Center</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[16px] w-[458.22px]">
        <p className="leading-[24px]">Monitoring system-wide alerts and communication delivery.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[458.22px]" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#dce4e8] content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] text-center w-[87.58px]">
        <p className="leading-[20px]">Mark all read</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(163.174deg, rgb(0, 109, 76) 0%, rgb(0, 95, 66) 100%)" }}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[92.27px]">
        <p className="leading-[20px]">Alert Settings</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Page Header">
      <Container />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#acb3b7] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">Delivery Performance</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3fbeb1c0} fill="var(--fill-0, #40574B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[90.66px]">
        <p className="leading-[20px]">SMS Channel</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-[117.28px]">
        <p className="leading-[16px]">98.2% Success Rate</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117.28px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background />
      <Container7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container10 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p27c98a00} fill="var(--fill-0, #215D64)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#b8f2fa] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[71.08px]">
        <p className="leading-[20px]">WhatsApp</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-[112.11px]">
        <p className="leading-[16px]">{`Active & Connected`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112.11px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Container14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container17 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p150bb900} fill="var(--fill-0, #747C80)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e3e9ed] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[76.92px]">
        <p className="leading-[20px]">Email Relay</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[12px] w-[93.5px]">
        <p className="leading-[16px]">2 Alerts Pending</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[93.5px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container21 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3aacea00} fill="var(--fill-0, #2D676E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container24 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container11 />
      <Container18 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Heading2 />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between leading-[0] not-italic relative text-[10px] w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center relative shrink-0 text-[#006d4c] tracking-[1px] uppercase w-[141.11px]">
          <p className="leading-[15px]">Active Toast Preview</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center relative shrink-0 text-[#747c80] w-[42.89px]">
          <p className="leading-[15px]">Just now</p>
        </div>
      </div>
    </div>
  );
}

function Ab6AXuD17PeP8OIchNa6FAamYpBltTsbOCqXpBa25DHByN09AdELuaJgArDrFh469WZ9SxQsiFtYEeprSbowAqQqSdjMkuTwXy4Ltlm7Ad6GrvSj0Qsc0Ac7Wwx3JiZz9Hc1GkO5UMoybQ9M6QzYhhZtBGckzLKelC6Is26SfqKw6TKlaAzm8VLxnXv0Jw2XGnRtrHwVrDbTqzDoVwMeHxH9K3Hu21PGgPs1U0SibrPaqV1Hq2DkEDtx1GMqrFoD2NckunZqqheG() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="AB6AXuD17PeP8oIchNa6FAamYpBltTSB_oCqXPBa25dHByN09AdELuaJGArDrFH469wZ9SxQSIFtYEeprSbowAQ_QQ-SdjMkuTWXy4ltlm7Ad6grv-SJ0Qsc0Ac7Wwx3JiZz9Hc1gkO5UMoybQ9m6qzYHHZtBGckzLKelC6is26SfqKw6TKlaAzm8VLxnXv0jw2XGnRtrHwVrDBTqzDoVwMeHxH9k3Hu_21PGgPs1u0SIBRPaqV1hq2DkEDtx1gMqrFO-d2NckunZqqheG64">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuD17PeP8OIchNa6FAamYpBltTsbOCqXpBa25DHByN09AdELuaJgArDrFh469WZ9SxQsiFtYEeprSbowAqQqSdjMkuTwXy4Ltlm7Ad6GrvSj0Qsc0Ac7Wwx3JiZz9Hc1GkO5UMoybQ9M6QzYhhZtBGckzLKelC6Is26SfqKw6TKlaAzm8VLxnXv0Jw2XGnRtrHwVrDbTqzDoVwMeHxH9K3Hu21PGgPs1U0SibrPaqV1Hq2DkEDtx1GMqrFoD2NckunZqqheG64} />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 size-[48px]" data-name="Container">
      <Ab6AXuD17PeP8OIchNa6FAamYpBltTsbOCqXpBa25DHByN09AdELuaJgArDrFh469WZ9SxQsiFtYEeprSbowAqQqSdjMkuTwXy4Ltlm7Ad6GrvSj0Qsc0Ac7Wwx3JiZz9Hc1GkO5UMoybQ9M6QzYhhZtBGckzLKelC6Is26SfqKw6TKlaAzm8VLxnXv0Jw2XGnRtrHwVrDbTqzDoVwMeHxH9K3Hu21PGgPs1U0SibrPaqV1Hq2DkEDtx1GMqrFoD2NckunZqqheG />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[89.55px]">
        <p className="leading-[20px]">Token Issued</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-[187.81px]">
        <p className="leading-[19.5px] mb-0">Patient #4402 has been checked</p>
        <p className="leading-[19.5px]">in. Assigned to Room 4B.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[187.81px]" data-name="Container">
      <Heading3 />
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function LiveToastPreviews() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="Live Toast Previews">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[28px] pr-[24px] py-[24px] relative w-full">
        <Paragraph />
        <Container25 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between leading-[0] not-italic relative text-[10px] w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center relative shrink-0 text-[#a83836] tracking-[1px] uppercase w-[88.25px]">
          <p className="leading-[15px]">Urgent Alert</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center relative shrink-0 text-[#747c80] w-[35.42px]">
          <p className="leading-[15px]">2m ago</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[23.75px] relative shrink-0 w-[27.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 23.75">
          <path d={svgPaths.p27eaa780} fill="var(--fill-0, #A83836)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[14px] w-[74.52px]">
        <p className="leading-[20px]">Delay Alert</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[59px] justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-[205.19px]">
        <p className="leading-[19.5px] mb-0">OPD-2 is experiencing a 15-minute</p>
        <p className="leading-[19.5px] mb-0">backlog. Automated patient updates</p>
        <p className="leading-[19.5px]">sent.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[205.19px]" data-name="Container">
      <Heading4 />
      <Container32 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[79px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorderShadow() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="Background+VerticalBorder+Shadow">
      <div aria-hidden="true" className="absolute border-[#a83836] border-l-4 border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[28px] pr-[24px] py-[24px] relative w-full">
        <Paragraph1 />
        <Container29 />
      </div>
    </div>
  );
}

function SystemStatusSummary() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[15.5px] relative row-1 self-start shrink-0" data-name="System Status Summary">
      <BackgroundShadow />
      <LiveToastPreviews />
      <BackgroundVerticalBorderShadow />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#acb3b7] text-[14px] tracking-[0.7px] uppercase w-[144.91px]">
          <p className="leading-[20px]">Live Alert Stream</p>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#cfe9d9] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[10px] w-[18.59px]">
          <p className="leading-[15px]">ALL</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative rounded-[9999px] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[10px] w-[41.97px]">
          <p className="leading-[15px]">SYSTEM</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative rounded-[9999px] self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[10px] w-[41.67px]">
          <p className="leading-[15px]">PATIENT</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[23px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-start relative">
        <Background3 />
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[32px] relative w-full">
          <Heading5 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 text-[#2c3437] text-[14px] w-[166.16px]">
        <p className="leading-[20px]">Your turn is approaching</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center relative shrink-0 text-[#747c80] text-[11px] w-[51.38px]">
        <p className="leading-[16.5px]">09:42 AM</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-full">
        <p className="leading-[16px]">Push notification sent to Mrs. Kapoor (Token #11). Estimated wait: 4 mins.</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[7.015px] relative shrink-0 w-[12.775px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.775 7.01458">
        <g id="Container">
          <path d={svgPaths.pfb5e518} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[10px] w-[99.16px]">
        <p className="leading-[15px]">WhatsApp Delivered</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container41 />
      <Background4 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[10px] w-[71.88px]">
        <p className="leading-[15px]">ID: MSG-99812</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container42 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Paragraph2 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function LogItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Log Item 1">
      <div className="content-stretch flex gap-[24px] items-start p-[24px] relative w-full">
        <div className="bg-[#006d4c] h-[48px] opacity-0 rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
        <Container37 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 text-[#2c3437] text-[14px] w-[119.73px]">
        <p className="leading-[20px]">Report now ready</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center relative shrink-0 text-[#747c80] text-[11px] w-[48.56px]">
        <p className="leading-[16.5px]">09:15 AM</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-full">
        <p className="leading-[16px]">Blood Pathology (L-12) for Mr. David finished processing and uploaded.</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p1c659f80} fill="var(--fill-0, #747C80)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#e3e9ed] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[10px] w-[50.63px]">
        <p className="leading-[15px]">Email Sent</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container47 />
      <Background5 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Paragraph3 />
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function LogItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Log Item 2">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start pb-[24px] pt-[25px] px-[24px] relative w-full">
        <div className="bg-[#006d4c] h-[48px] opacity-0 rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
        <Container43 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 text-[#2c3437] text-[14px] w-[83.53px]">
        <p className="leading-[20px]">Billing ready</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center relative shrink-0 text-[#747c80] text-[11px] w-[51px]">
        <p className="leading-[16.5px]">08:50 AM</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-full">
        <p className="leading-[16px]">Invoice #INV-2024-88 prepared for patient check-out. Payment link generated.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[7.015px] relative shrink-0 w-[12.775px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.775 7.01458">
        <g id="Container">
          <path d={svgPaths.pfb5e518} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#cfe9d9] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#40574b] text-[10px] w-[70.63px]">
        <p className="leading-[15px]">SMS Delivered</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container52 />
      <Background6 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container48() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Paragraph4 />
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function LogItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Log Item 3">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start pb-[24px] pt-[25px] px-[24px] relative w-full">
        <div className="bg-[#006d4c] h-[48px] opacity-0 rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
        <Container48 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 text-[#a83836] text-[14px] w-[99.84px]">
        <p className="leading-[20px]">Delivery Failed</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center relative shrink-0 text-[#747c80] text-[11px] w-[50.95px]">
        <p className="leading-[16.5px]">08:22 AM</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#596064] text-[12px] w-full">
        <p className="leading-[16px]">{`SMS Alert for 'Follow-up Schedule' failed to reach +91 98765 43210. Invalid Number.`}</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p308a4a00} fill="var(--fill-0, #A83836)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#fa746f] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6e0a12] text-[10px] w-[60.17px]">
        <p className="leading-[15px]">Carrier Error</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container57 />
      <Background7 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[10px] text-center w-[77.61px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[15px] underline">Retry with Email</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Button2 />
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Paragraph5 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function LogItem4Error() {
  return (
    <div className="relative shrink-0 w-full" data-name="Log Item 4 (Error)">
      <div aria-hidden="true" className="absolute border-[rgba(172,179,183,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start pb-[24px] pt-[25px] px-[24px] relative w-full">
        <div className="bg-[#a83836] h-[48px] rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
        <Container53 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LogItem />
      <LogItem1 />
      <LogItem2 />
      <LogItem4Error />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[14px] text-center w-[168.41px]">
        <p className="leading-[20px]">Load earlier notifications</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(240,244,247,0.5)] relative shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[24px] relative w-full">
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function MainActivityLog() {
  return (
    <div className="bg-white col-[5/span_8] content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[20px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Main Activity Log">
      <HorizontalBorder />
      <Container36 />
      <Overlay />
    </div>
  );
}

function BentoGridLayout() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_619px] relative shrink-0 w-full" data-name="Bento Grid Layout">
      <SystemStatusSummary />
      <MainActivityLog />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] w-[233.69px]">
        <p>
          <span className="leading-[16px]">{`Notification Gateway Status: `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic text-[#006d4c]">Operational</span>
        </p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[10px] tracking-[1px] uppercase w-[121.97px]">
        <p className="leading-[15px]">Encryption Active</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[10px] tracking-[1px] uppercase w-[123.8px]">
        <p className="leading-[15px]">Privacy Compliant</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[16px] h-[15px] items-start relative shrink-0" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function FooterMeta() {
  return (
    <div className="content-stretch flex items-center justify-between opacity-60 pt-[16px] relative shrink-0 w-full" data-name="Footer Meta">
      <Container58 />
      <Container59 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1152px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <PageHeader />
      <BentoGridLayout />
      <FooterMeta />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search alerts or records...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative w-full">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[448px] min-h-px min-w-px relative" data-name="Container">
      <Input />
      <div className="absolute bottom-[29.17%] left-[14.5px] top-[29.17%] w-[15px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path d={svgPaths.p2dbaedc0} fill="var(--fill-0, #747C80)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[439.97px] relative w-full">
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #747C80)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container66 />
      <div className="absolute bg-[#a83836] right-[-0.01px] rounded-[9999px] size-[8px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3de21300} fill="var(--fill-0, #747C80)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container67 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[23.99px] items-center relative shrink-0" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)] content-stretch flex h-[64px] items-center justify-between px-[32px] right-0 top-0 w-[1024px]" data-name="Header - TopNavBar">
      <Container62 />
      <Container65 />
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

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Mumbai North Clinic</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] relative w-full">
        <Heading />
        <Container69 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container68 />
    </div>
  );
}

function Container70() {
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

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[73.02px]">
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
          <Container70 />
          <Container71 />
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
          <path d={svgPaths.p9fd8800} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[44.06px]">
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
          <Container72 />
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
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

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[54px]">
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
          <Container74 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
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

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[40.41px]">
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
          <Container76 />
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
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

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[52.05px]">
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
          <Container78 />
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #006D4C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#006d4c] text-[14px] w-[55.86px]">
          <p className="leading-[20px]">Settings</p>
        </div>
      </div>
    </div>
  );
}

function LinkActiveStateSettingsContextuallyMappedToNotificationsHub() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[16px] shrink-0 w-full" data-name="Link - Active State: Settings (Contextually mapped to Notifications Hub)">
      <div aria-hidden="true" className="absolute border-[#006d4c] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] py-[12px] relative w-full">
          <Container80 />
          <Container81 />
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
        <LinkActiveStateSettingsContextuallyMappedToNotificationsHub />
      </div>
    </div>
  );
}

function ProviderProfile() {
  return (
    <div className="max-w-[208px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Provider Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProviderProfile} />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2c3437] text-[12px] w-[93.03px]">
        <p className="leading-[16px]">Dr. Aarav Mehta</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#747c80] text-[10px] w-[67.78px]">
        <p className="leading-[15px]">Chief Surgeon</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[93.03px]" data-name="Container">
      <Container84 />
      <Container85 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[20px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <ProviderProfile />
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Overlay1 />
      </div>
    </div>
  );
}

function AsideSideNavBar() {
  return (
    <div className="absolute bg-[#f0f4f7] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 py-[24px] top-0 w-[256px]" data-name="Aside - SideNavBar">
      <Margin />
      <Nav />
      <Container82 />
    </div>
  );
}

export default function NotificationHistory() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex flex-col items-start pb-[145px] pl-[288px] pr-[32px] pt-[96px] relative size-full" data-name="Notification History">
      <MainContentCanvas />
      <HeaderTopNavBar />
      <AsideSideNavBar />
    </div>
  );
}
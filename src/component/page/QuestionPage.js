"use client";

import MobileFrame from "../layout/MobileFrame";

export default function QuestionPage({ questionIndex, nextStep }) {
  return (
    <>
      <MobileFrame>
        QuestionPage:{questionIndex}
        <div className="flex flex-col justify-center items-center gap-[60px]">
          <div
            className="w-80 h-80 rounded-full
           bg-[radial-gradient(circle,_rgba(253,224,71,1)_0%,_rgba(253,224,71,0.5)_40%,_rgba(253,224,71,0.2)_65%,_transparent_100%)]
           blur-[25px] absolute top-0 -translate-y-1/2"
          ></div>
          <Image src={titleImg} alt="title"></Image>
          <div className="text-[#B65A0F] font-[500] text-center text-[14px] leading leading-loose">
            有些人天生酥脆，有些人出爐時就塌了。 你努力發酵、翻滾、等待出爐，
            結果還是變成一坨可頌災難。 沒關係，這世界不缺完美麵包，
            缺的是——像你一樣軟爛卻獨特的存在。
            現在，就來看看你是什麼等級的失控可頌吧。
          </div>
          {/* <Image src={startBtn} alt="start button"></Image> */}
          <div className="rounded-2xl w-[100px] h-[40px] bg-[#B65A0F] drop-shadow-[0_4px_0_#8D4509] text-white flex justify-center items-center font-semibold">
            START
          </div>
          <div
            className="w-80 h-80 rounded-full
           bg-[radial-gradient(circle,_rgba(253,224,71,1)_0%,_rgba(253,224,71,0.5)_40%,_rgba(253,224,71,0.2)_65%,_transparent_100%)]
           blur-[25px] absolute bottom-0 translate-y-1/2"
          ></div>
        </div>
      </MobileFrame>
    </>
  );
}

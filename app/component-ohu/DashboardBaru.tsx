import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function QuestionMark() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
        </svg>
    );
}

const DashboardBaru = () => {
    return (
        <div className="flex items-center justify-center w-screen overflow-x-hidden overflow-y-scroll py-14">
            <div className="w-[90vw]   flex flex-col items-center justify-center gap-14  md:items-start md:h-screen">
                <div className="w-[70vw] md:w-full h-[1px] flex gap-2 items-center justify-center mt-5">
                    <Link href="https://drive.google.com/drive/folders/1-3U5xSyr7SCTIxYVTavMsh_y9ZAsOu79">
                        <Button
                            variant="link"
                            className="flex gap-2 p-10 border-2 border-black rounded-2xl"
                        >
                            <QuestionMark></QuestionMark>
                            <h1 className="text-4xl font-bold">
                                Guidebook Pendaftaran
                            </h1>
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-8 md:gap-5 md:flex-row">
                    <div className="w-[70vw] h-fit pt-5 md:pt-3 rounded-2xl bg-gradient-to-b from-[#0A6EA2] via-[#6AC4B8] to-[#FBB915] flex items-center justify-center shadow-xl shadow-slate-400 md:w-fit md:max-w-[70vw] relative md:h-fit flex-col">
                        <div className="relative flex flex-col w-4/5 px-2  min-h-[30vw] md:h-fit  md:min-h-[10vw]">
                            <h1 className="w-full text-3xl font-bold md:text-5xl md:pt-5">
                                Pendaftaran Internship
                                <br />
                                <br />
                            </h1>
                            <p className="text-xl md:text-3xl md:py-2">
                                Pendaftaran dibuka hingga tanggal{" "}
                                <span className="font-bold underline">
                                    16 September 2023, pukul 20.23 WIB
                                </span>
                            </p>
                        </div>
                        <Button className="w-4/5 p-0 my-7">
                            <Link
                                href="pendaftaran-baru/internship-form"
                                className="flex items-center justify-center w-full h-full"
                            >
                                Daftar Sekarang
                            </Link>
                        </Button>
                    </div>

                    {/* <div className="w-[70vw] h-fit pt-5 md:pt-3 rounded-2xl bg-gradient-to-b from-[#372F85] via-[#AF86D6] to-[#6AC4B8] flex items-center justify-center shadow-xl shadow-slate-400 md:w-fit md:max-w-[70vw] relative md:h-fit flex-col">
                        <div className="relative flex flex-col w-4/5 px-2 py-4 min-h-[30vw] md:h-fit  md:min-h-[10vw]">
                            <h1 className="w-full text-3xl font-bold md:text-5xl">
                                Pendaftaran Bundle
                            </h1>
                            <p className="text-xl md:text-3xl md:py-2">
                                Daftar TEC Internship <br /> sekaligus TEC
                                Festival!
                            </p>
                        </div>
                        <Button className="w-4/5 p-0 my-7">
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfp_eVcMb_WDYmgQvu7v3vrkk_XpNQAZPC3UJe92l0BPvvkGA/viewform?usp=sharing"
                                className="flex items-center justify-center w-full h-full"
                            >
                                Pendaftaran Sudah Ditutup
                            </Link>
                        </Button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DashboardBaru;

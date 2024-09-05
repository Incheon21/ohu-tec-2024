import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function QuestionMark() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
        </svg>
    );
}

const Dashboard = () => {
    return (
        <div className="flex items-center justify-center w-screen overflow-x-hidden overflow-y-scroll mt-10 py-14">
            <div className="w-full flex flex-col items-center justify-center gap-14  md:items-start md:h-screen">
                <div className="flex flex-col items-center justify-center w-full gap-8 md:gap-5 md:flex-row">
                    <div className="w-[85vw] h-fit rounded-2xl bg-gradient-to-b from-[#c66541] to-[#9f5524] flex items-center justify-center shadow-xl shadow-slate-400 md:w-fit md:max-w-[70vw] relative md:h-fit flex-col">
                        <div className="flex w-auto px-6 pt-6 justify-center text-center text-black min-h-[30vw] md:h-fit  md:min-h-[10vw]">
                            <Image src="/assets/image/daftar.jpg" alt="daftar" className="w-auto h-full object-cover rounded-lg" width={20} height={20}/>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <Button className="w-full mx-6 my-7">
                                <Link
                                    href="dashboard/daftar-ulang"
                                    className="flex items-center justify-center w-full h-full"
                                >
                                    Daftar Sekarang
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-[70vw] md:w-full h-[1px] flex gap-2 items-center justify-center mt-5">
                    <Link href="https://drive.google.com/drive/folders/1-3U5xSyr7SCTIxYVTavMsh_y9ZAsOu79" target="_blank">
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
            </div>
        </div>
    );
};

export default Dashboard;

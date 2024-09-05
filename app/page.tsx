'use client'
import React, { useState } from 'react';
import VideoPlayer from "./component-ohu/VideoPlayer";
import Footer from "./component-ohu/Footer";
import Countdown from "./component-ohu/Countdown";
import Hero from "./component-ohu/Hero";
import Popup from "./component-ohu/Popup";
import PaginationNumbers from "./component-ohu/pagination";
import { useMediaQuery } from 'react-responsive';

import Image from "next/image";
import tecfest from "/public/assets/image/tecfest.jpg";
import intern from "/public/assets/image/intern.jpg";
import incubator from "/public/assets/image/incubatorbisnis.jpg";
import compvis from "/public/assets/image/compvis.jpg";
import tecmeout from "/public/assets/image/tecmeout.jpg";


export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);

    const isMobile = useMediaQuery({ query: '(max-width: 639px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 640px) and (max-width: 768px)' });

    const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    const posts = [
        {
            title: 'TECFest',
            image: tecfest,
            description: `TECFest adalah entrepreneurial festival yang diadakan secara tahunan. TECFest dimulai pada tahun 2019 dan kini sedang dilaksanakan TECFest yang ke-5 dengan visi "Catalyzing Indonesia's Future Entrepreneurs Through Technology and Youth-Led Innovations". TECFest terdiri dari berbagai rangkaian, seperti Business Competitions, Youth Entrepreneur Lab, Start Up EXPO, dan sebagainya`,
        },
        {
            title: 'TEC Internship',
            image: intern,
            description: `TEC Internship merupakan wadah pengembangan, pembinaan, dan pendidikan bagi  calon anggota TEC ITB untuk mempersiakan diri sebelum secara resmi menjadi bagian dari TEC ITB.`,
        },
        {
            title: 'Incubator Bisnis',
            image: incubator,
            description: `Incubator Bisnis merupakan program TEC yang akan membimbing anggotanya untuk memenuhi tujuan dan kebutuhan tiap anggota baik dalam hal membuat bisnis maupun ketertarikan dalam mengikuti perlombaan mengenai bisnis.`,
        },
        {
            title: 'Company Visit',
            image: compvis,
            description: `Company Visit merupakan salah satu program TEC dengan mengunjungi perusahaan tertentu agar mendapatkan wawasan yang lebih mendalam mengenai bagaimana sebuah perusahaan berorganisasi.`,
        },
        {
            title: 'TECMeOut',
            image: tecmeout,
            description: `TECMeOut merupakan salah satu program TEC yang bertujuan mempererat ikatan di antara para anggota melalui kegiatan-kegiatan seperti berolahraga bersama atau bahkan sekedar riding dan jalan-jalan bersama.`,
        },
    ];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    return (
        <html className="overflow-x-hidden scroll-smooth">
            <section className="w-[100vw] overflow-hidden h-fit">
                <Popup />
                <Hero />
                <Countdown />
                <VideoPlayer />
                <div className='w-full flex flex-col items-center justify-center mt-12'>
                    <h2 className="text-2xl font-bold mb-2 text-black">Our Activities</h2>
                    <div className="mx-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        {currentPosts.map((post, index) => (
                            <div key={index} className="w-full h-full bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw] lg:w-[25vw] lg:h-[30vw] mt-9 min-[500px]:mt-10 md:mt-7 ">
                                <div className="w-full bg-red-200 h-1/2">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-8">
                                    <h2 className="font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg ">
                                        {post.title}
                                    </h2>
                                    <p className="text-[12px] sm:text-[10px] min-[1300px]:text-[12px] min-[1300px]:pt-2 mb-6">
                                        {post.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <PaginationNumbers
                        totalItems={posts.length}
                        itemsPerPage={itemsPerPage}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
                <Footer />
            </section>
        </html>
    );
}

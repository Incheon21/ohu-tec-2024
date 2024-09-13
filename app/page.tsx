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
import tecfest from "/public/assets/image/tecfest.png";
import intern from "/public/assets/image/intern.jpg";
import incubator from "/public/assets/image/incubator.jpg";
import compvis from "/public/assets/image/compvis.jpg";
import mentor from "/public/assets/image/mentor.jpg";
import studban from "/public/assets/image/studban.jpg";


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
            title: 'TEC Festival',
            image: tecfest,
            description: `TEC Festival adalah sebuah acara besar tahunan TEC ITB yang berisikan rangkaian perlombaan Business Case dan Business Plan Competition yang dilengkapi dengan acara puncak berupa sesi Talkshow dan Final dari perlombaan yang diadakan.`,
        },
        {
            title: 'TEC Internship',
            image: intern,
            description: `TEC Internship adalah sebuah fase pelatihan untuk menjadi anggota TEC ITB. TEC Internship merupakan proses di mana setiap individu yang mendaftar menjadi anggota TEC ITB menjalankan pendidikan awal mengenai dunia bisnis dan menerima ilmu-ilmu dari narasumber berpengalaman.`,
        },
        {
            title: 'Company Visit',
            image: compvis,
            description: `Company Visit merupakan program khusus bagi para anggota TEC ITB. Anggota-anggota TEC ITB memiliki kesempatan untuk melakukan company visit ke perusahaan-perusahaan ternama di Indonesia. Saat ini, TEC ITB telah berhasil menjalin kerjasama company visit dengan Pocari dan Agate.`,
        },
        {
            title: 'Studi Banding',
            image: studban,
            description: `Studi Banding merupakan program yang mempertemukan TEC ITB dengan unit bisnis lain dari berbagai universitas di seluruh Indonesia. Melalui studi banding, TEC ITB berkesempatan untuk bertukar pikiran, mencari referensi untuk pengembangan, bahkan menjadi inspirasi bagi perkembangan unit-unit lain di luar sana. Selain itu, peserta studi banding dapat memperoleh relasi dengan mahasiswa di seluruh Indonesia.`,
        },
        {
            title: 'Business Incubator',
            image: incubator,
            description: `Business Incubator merupakan program TEC yang menginkubasi ide-ide bisnis dari anggota TEC ITB. Program ini memiliki fokus untuk menjadikan para anggota TEC ITB pebisnis muda. Business Incubator memberikan pelatihan berupa mentoring dengan para pebisnis muda, presentasi ide, sampai menyediakan wadah untuk anggota TEC ITB berinteraksi langsung dengan investor.`,
        },
        {
            title: 'Competition Mentoring',
            image: mentor,
            description: `Competition Mentoring merupakan program TEC yang memfasilitasi para anggotanya dalam mempersiapkan perlombaan Business Case dan Business Plan dengan para mentor berpengalaman yang telah memenangkan berbagai perlombaan terkait.`,
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
                            <div key={index} className="w-full h-[360px] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[420px] lg:w-[25vw] lg:h-[540px] mt-9 min-[500px]:mt-10 md:mt-7 ">
                                <div className="w-full bg-red-200 h-1/2">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-4  w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-8">
                                    <h2 className="font-bold mt-4 text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg ">
                                        {post.title}
                                    </h2>
                                    <p className="text-[10px] sm:text-[10px] min-[1300px]:text-[12px] min-[1300px]:pt-2 mb-6">
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

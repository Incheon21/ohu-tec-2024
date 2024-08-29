"use client";

import { useState } from "react";

export default function FormInternshipDaful() {
    const [email, setEmail] = useState("");
    const [nama, setNama] = useState("");
    const [nim, setNim] = useState("");
    const [fakultas, setFakultas] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [idLine, setIdLine] = useState("");
    const [buktiBayar, setBuktiBayar] = useState("");
    const [buktiPersyaratan, setBuktiPersyaratan] = useState("");

    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log("Full name: ", nama);
        console.log("Email: ", email);

        const res = await fetch("../api/daful", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                nama,
                nim,
                fakultas,
                jurusan,
                idLine,
                buktiBayar,
                buktiPersyaratan,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setEmail("");
            setNama("");
            setNim("");
            setFakultas("");
            setJurusan("");
            setIdLine("");
            setBuktiBayar("");
            setBuktiPersyaratan("");
        }
    };

    return (
        <>
            <div className="w-[80%] mx-auto my-10">
                <h1 className="text-3xl font-bold text-center ">
                    Form Pendaftaran Ulang TEC Internship 2023
                </h1>
                <div className="flex flex-col bg-slate-100">
                    {error &&
                        error.map((e) => (
                            <div
                                key={e}
                                className={`${
                                    success
                                        ? "text-green-600 font-bold text-3xl"
                                        : "text-red-600"
                                } px-5 py-2`}
                            >
                                {e}
                            </div>
                        ))}
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 py-4 mt-4 border-t"
                >
                    <h2 className="text-2xl font-semibold">Data Diri</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="nama">Nama</label>
                        <input
                            onChange={(e) => setNama(e.target.value)}
                            value={nama}
                            type="text"
                            id="nama"
                            placeholder="Nama"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="nim">
                            NIM (selain angkatan 2023, gunakan NIM jurusan)
                        </label>
                        <input
                            onChange={(e) => setNim(e.target.value)}
                            value={nim}
                            type="text"
                            id="nim"
                            placeholder="NIM"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="fakultas">
                            Fakultas (Contoh: FTI, STEI-K, SITH-R, dll)
                        </label>
                        <input
                            onChange={(e) => setFakultas(e.target.value)}
                            value={fakultas}
                            type="text"
                            id="fakultas"
                            placeholder="Fakultas"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="jurusan">
                            Jurusan (Contoh: TPB, IF, TI, dll)
                        </label>
                        <input
                            onChange={(e) => setJurusan(e.target.value)}
                            value={jurusan}
                            type="text"
                            id="jurusan"
                            placeholder="Jurusan"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="idLine">ID Line</label>
                        <input
                            onChange={(e) => setIdLine(e.target.value)}
                            value={idLine}
                            type="text"
                            id="idLine"
                            placeholder="ID Line"
                            required
                        />
                    </div>
                    <div className="w-full bg-slate-200 h-[2px] my-5"></div>
                    <h2 className="text-2xl font-semibold">
                        Bukti Pembayaran dan Persyaratan
                    </h2>
                    <div>
                        <label htmlFor="buktiBayar">
                            Link GDrive Bukti Pembayaran
                        </label>
                        <p className="text-xs text-slate-500">Silakan membuat folder pada Google Drive sesuai instruksi pada Guidebook Pendaftaran. Jika kamu membayar melalui cash, silakan isi kolom dengan tulisan "Cash". Kami akan mencocokkan data kamu!</p>
                        <input
                            onChange={(e) => setBuktiBayar(e.target.value)}
                            value={buktiBayar}
                            type="text"
                            id="buktiBayar"
                            placeholder="Link GDrive Bukti Pembayaran"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="buktiPersyaratan">
                            Link GDrive Bukti Persyaratan
                        </label>
                        <p className="text-xs text-slate-500"> Pisahkan folder antara bukti pembayaran dan bukti persyaratan. Tata cara penamaan dan lainnya dapat dilihat pada Guidebook Pendaftaran.  Manggatt 😍</p>
                        <input
                            onChange={(e) =>
                                setBuktiPersyaratan(e.target.value)
                            }
                            value={buktiPersyaratan}
                            type="text"
                            id="buktiPersyaratan"
                            placeholder="Link GDrive Bukti Persyaratan"
                            required
                        />
                    </div>

                    <button
                        className="p-3 font-bold text-white bg-green-700"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

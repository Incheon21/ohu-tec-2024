"use client";

import { useState } from "react";

export default function FormBundle() {
    const [emailBundle, setEmailBundle] = useState("");
    const [namaBundle, setNamaBundle] = useState("");
    const [nimBundle, setNimBundle] = useState("");
    const [fakultasBundle, setFakultasBundle] = useState("");
    const [jurusanBundle, setJurusanBundle] = useState("");
    const [idLineBundle, setIdLineBundle] = useState("");
    const [buktiBayarBundle, setBuktiBayarBundle] = useState("");
    const [buktiPersyaratanBundle, setBuktiPersyaratanBundle] = useState("");

    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();



        const res = await fetch("../api/bundle", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                emailBundle,
                namaBundle,
                nimBundle,
                fakultasBundle,
                jurusanBundle,
                idLineBundle,
                buktiBayarBundle,
                buktiPersyaratanBundle,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setEmailBundle("");
            setNamaBundle("");
            setNimBundle("");
            setFakultasBundle("");
            setJurusanBundle("");
            setIdLineBundle("");
            setBuktiBayarBundle("");
            setBuktiPersyaratanBundle("");
        }
    };

    return (
        <>
            <div className="w-[80%] mx-auto my-10">
                <h1 className="text-3xl font-bold text-center ">
                    Form Pendaftaran Bundle (TEC Internship 2023+TEC Festival 2023)
                </h1>
                <div className="flex flex-col bg-slate-100">
                    {error &&
                        error.map((e) => (
                            <div
                                key={e}
                                className={`${success ? "text-green-600 font-bold text-3xl" : "text-red-600"
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
                            onChange={(e) => setEmailBundle(e.target.value)}
                            value={emailBundle}
                            type="email"
                            id="emailBundle"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="namaBundle">Nama</label>
                        <input
                            onChange={(e) => setNamaBundle(e.target.value)}
                            value={namaBundle}
                            type="text"
                            id="namaBundle"
                            placeholder="Nama"
                            required

                        />
                    </div>

                    <div>
                        <label htmlFor="nimBundle">
                            NIM (selain angkatan 2023, gunakan NIM jurusan)
                        </label>
                        <input
                            onChange={(e) => setNimBundle(e.target.value)}
                            value={nimBundle}
                            type="text"
                            id="nimBundle"
                            placeholder="NIM"
                            required

                        />
                    </div>
                    <div>
                        <label htmlFor="fakultasBundle">
                            Fakultas (Contoh: FTI, STEI-K, SITH-R, dll)
                        </label>
                        <input
                            onChange={(e) => setFakultasBundle(e.target.value)}
                            value={fakultasBundle}
                            type="text"
                            id="fakultasBundle"
                            placeholder="Fakultas"
                            required

                        />
                    </div>
                    <div>
                        <label htmlFor="jurusanBundle">
                            Jurusan (Contoh: TPB, IF, TI, dll)
                        </label>
                        <input
                            onChange={(e) => setJurusanBundle(e.target.value)}
                            value={jurusanBundle}
                            type="text"
                            id="jurusanBundle"
                            placeholder="Jurusan"
                            required

                        />
                    </div>
                    <div>
                        <label htmlFor="idLineBundle">ID Line</label>
                        <input
                            onChange={(e) => setIdLineBundle(e.target.value)}
                            value={idLineBundle}
                            type="text"
                            id="idLineBundle"
                            placeholder="ID Line"
                            required

                        />
                    </div>
                    <div>
                        <div className="w-full bg-slate-200 h-[1px] my-5"></div>
                        <h2 className="text-2xl font-semibold">Bukti Pembayaran dan Persyaratan</h2>
                        <label htmlFor="buktiBayarBundle">
                            Link GDrive Bukti PembayaranBundle
                        </label>
                        <input
                            onChange={(e) => setBuktiBayarBundle(e.target.value)}
                            value={buktiBayarBundle}
                            type="text"
                            id="buktiBayarBundle"
                            placeholder="Link GDrive Bukti Pembayaran"
                            required

                        />
                    </div>
                    <div>
                        <label htmlFor="buktiPersyaratanBundle">
                            Link GDrive Bukti Persyaratan
                        </label>
                        <input
                            onChange={(e) =>
                                setBuktiPersyaratanBundle(e.target.value)
                            }
                            value={buktiPersyaratanBundle}
                            type="text"
                            id="buktiPersyaratanBundle"
                            placeholder="Link GDrive Bukti Persyaratan"
                            required

                        />
                    </div>
                    <div className="w-full bg-slate-200 h-[1px] my-5"></div>
                    
                    <h2 className="text-xl font-semibold">Form Pendaftaran TEC FESTIVAL (Grand Summit dan Startup Expo)</h2>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJ8KQLwGWAnlt6HBtz1lhKxGTlMSduqVr8MrN2zF6Gr9RZ1w/viewform" className="text-blue-400 underline">Form Pendaftaran Grand Summit</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScCeAFZyiT0fIcS3ZEjn14dkVnvyWxT4B1wQh6XTUyMqDxjmg/viewform" className="text-blue-400 underline">Form Pendaftaran Startup Expo</a>

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

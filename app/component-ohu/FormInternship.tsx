// "use client";

// import { useState } from "react";

// export default function FormInternship() {
//     const [emailNormal, setEmailNormal] = useState("");
//     const [namaNormal, setNamaNormal] = useState("");
//     const [nimNormal, setNimNormal] = useState("");
//     const [fakultasNormal, setFakultasNormal] = useState("");
//     const [jurusanNormal, setJurusanNormal] = useState("");
//     const [idLineNormal, setIdLineNormal] = useState("");
//     const [paket, setPaket] = useState("");
//     const [isPerwakilan, setIsPerwakilan] = useState("");
//     const [namaPerwakilan, setNamaPerwakilan] = useState("");
//     const [buktiBayarNormal, setBuktiBayarNormal] = useState("");
//     const [buktiPersyaratanNormal, setBuktiPersyaratanNormal] = useState("");

//     const [error, setError] = useState([]);
//     const [success, setSuccess] = useState(false);

//     const handleSubmit = async (e: any) => {
//         e.preventDefault();

//         const res = await fetch("../api/normal", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//             },
//             body: JSON.stringify({
//                 emailNormal,
//                 namaNormal,
//                 nimNormal,
//                 fakultasNormal,
//                 jurusanNormal,
//                 idLineNormal,
//                 paket,
//                 isPerwakilan,
//                 namaPerwakilan,
//                 buktiBayarNormal,
//                 buktiPersyaratanNormal,
//             }),
//         });

//         const { msg, success } = await res.json();
//         setError(msg);
//         setSuccess(success);

//         if (success) {
//             setEmailNormal("");
//             setNamaNormal("");
//             setNimNormal("");
//             setFakultasNormal("");
//             setJurusanNormal("");
//             setIdLineNormal("");
//             setPaket("");
//             setIsPerwakilan("");
//             setNamaPerwakilan("");
//             setBuktiBayarNormal("");
//             setBuktiPersyaratanNormal("");
//         }
//     };

//     return (
//         <>
//             <div className="w-[80%] mx-auto my-10">
//                 <h1 className="text-3xl font-bold text-center ">
//                     Form Pendaftaran TEC Internship 2023
//                 </h1>
//                 <div className="flex flex-col bg-slate-100">
//                     {error &&
//                         error.map((e) => (
//                             <div
//                                 key={e}
//                                 className={`${
//                                     success
//                                         ? "text-green-600 font-bold text-3xl"
//                                         : "text-red-600"
//                                 } px-5 py-2`}
//                             >
//                                 {e}
//                             </div>
//                         ))}
//                 </div>
//                 <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-col gap-5 py-4 mt-4 border-t"
//                 >
//                     <h2 className="text-2xl font-semibold">Data Diri</h2>
//                     <div>
//                         <label htmlFor="emailNormal">Email</label>
//                         <input
//                             onChange={(e) => setEmailNormal(e.target.value)}
//                             value={emailNormal}
//                             type="email"
//                             id="email"
//                             placeholder="Email"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="namaNormal">Nama</label>
//                         <input
//                             onChange={(e) => setNamaNormal(e.target.value)}
//                             value={namaNormal}
//                             type="text"
//                             id="nama"
//                             placeholder="Nama"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="nimNormal">
//                             NIM (selain angkatan 2023, gunakan NIM jurusan)
//                         </label>
//                         <input
//                             onChange={(e) => setNimNormal(e.target.value)}
//                             value={nimNormal}
//                             type="text"
//                             id="nim"
//                             placeholder="NIM"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="fakultasNormal">
//                             Fakultas (Contoh: FTI, STEI-K, SITH-R, dll)
//                         </label>
//                         <input
//                             onChange={(e) => setFakultasNormal(e.target.value)}
//                             value={fakultasNormal}
//                             type="text"
//                             id="fakultas"
//                             placeholder="Fakultas"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="jurusanNormal">
//                             Jurusan (Contoh: TPB, IF, TI, dll)
//                         </label>
//                         <input
//                             onChange={(e) => setJurusanNormal(e.target.value)}
//                             value={jurusanNormal}
//                             type="text"
//                             id="jurusan"
//                             placeholder="Jurusan"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="idLineNormal">ID Line</label>
//                         <input
//                             onChange={(e) => setIdLineNormal(e.target.value)}
//                             value={idLineNormal}
//                             type="text"
//                             id="idLine"
//                             placeholder="ID Line"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="paket">
//                             Pilih paket yang kamu inginkan
//                         </label>
//                         <select
//                             name="paket"
//                             id="paket"
//                             className="border-2 border-black"
//                             required
//                             onChange={(e) => setPaket(e.target.value)}
//                         >
//                             <option value="Single">Single</option>
//                             <option value="Double">Double</option>
//                             <option value="Triple">Triple</option>
//                             <option value="Quadruple">Quadruple</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="isPerwakilan">
//                             Apakah Anda merupakan perwakilan pembayaran? (Jawab
//                             "iya", jika memilih paket Single)
//                         </label>

//                         <select
//                             name="isPerwakilan"
//                             id="isPerwakilan"
//                             className="border-2 border-black"
//                             required
//                             onChange={(e) => setIsPerwakilan(e.target.value)}
//                         >
//                             <option value="True">Iya</option>
//                             <option value="False">Tidak</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="namaPerwakilan">
//                             Siapa nama lengkap perwakilan Anda?{" "}
//                             <span className="font-bold">
//                                 (HANYA DIISI OLEH YANG{" "}
//                                 <span className="text-red-500">BUKAN </span>
//                                 PERWAKILAN)
//                             </span>
//                         </label>
//                         <input
//                             onChange={(e) => setNamaPerwakilan(e.target.value)}
//                             value={namaPerwakilan}
//                             type="text"
//                             id="namaPerwakilan"
//                             placeholder="Nama Perwakilan"
//                         />
//                     </div>
//                     <div className="w-full bg-black h-[2px] my-5"></div>
//                     <h2 className="text-2xl font-semibold">Bukti Pembayaran</h2>
//                     <div>
//                         <label htmlFor="buktiBayarNormal">
//                             Link GDrive Bukti Pembayaran{" "}
//                             <span className="font-bold">
//                                 (HANYA DIISI OLEH PERWAKILAN)
//                             </span>
//                         </label>
//                         <input
//                             onChange={(e) =>
//                                 setBuktiBayarNormal(e.target.value)
//                             }
//                             value={buktiBayarNormal}
//                             type="text"
//                             id="buktiBayar"
//                             placeholder="Link GDrive Bukti Pembayaran"
//                         />
//                     </div>
//                     <div className="w-full bg-black h-[3px] my-5"></div>
//                     <h2 className="text-2xl font-semibold">
//                         Bukti Persyaratan
//                     </h2>

//                     <div>
//                         <label htmlFor="buktiPersyaratanNormal">
//                             Link GDrive Bukti Persyaratan
//                         </label>
//                         <input
//                             onChange={(e) =>
//                                 setBuktiPersyaratanNormal(e.target.value)
//                             }
//                             value={buktiPersyaratanNormal}
//                             type="text"
//                             id="buktiPersyaratan"
//                             placeholder="Link GDrive Bukti Persyaratan"
//                             required
//                         />
//                     </div>

//                     <button
//                         className="p-3 font-bold text-white bg-green-700"
//                         type="submit"
//                     >
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// }

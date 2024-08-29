// "use client";
// import { FormEvent, useState } from "react";
// import { LinkPage3 } from "./LinkPage3";
// import { LinkPage2 } from "./LinkPage2";
// import { useMultistepForm } from "./UseMultistepForm";
// import { UserForm } from "./UserForm";
// import Link from "next/link";


// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogFooter,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog";

// type FormData = {
//     email: string;
//     name: string;
//     fakultas: string;
//     nim: string;
//     jurusan: string;
//     idLine: string;
//     linkBuktiBayar: string;
//     linkUploadPersyaratan: string;
// };

// const INITIAL_DATA: FormData = {
//     email: "",
//     name: "",
//     fakultas: "",
//     nim: "",
//     jurusan: "",
//     idLine: "",
//     linkBuktiBayar: "",
//     linkUploadPersyaratan: "",
// };


// function FormApp() {
//     const [data, setData] = useState(INITIAL_DATA);
//     function updateFields(fields: Partial<FormData>) {
//         setData((prev) => {
//             return { ...prev, ...fields };
//         });
//     }
//     const {
//         steps,
//         currentStepIndex,
//         step,
//         isFirstStep,
//         isLastStep,
//         back,
//         next,
//     } = useMultistepForm([
//         <UserForm {...data} updateFields={updateFields} />,
//         <LinkPage2 {...data} updateFields={updateFields} />,
//         <LinkPage3 {...data} updateFields={updateFields} />,
//     ]);

//     const [email, setEmail] = useState("")


//     function onSubmit(e: FormEvent) {
//         e.preventDefault();
//         console.log(email)

//         if (!isLastStep) return next();
//     }

//     // const [email, setEmail] = useState("")

//     // const handleSubmit = (e: any) => {
//     //     e.preventDefault();
//     //     console.log(email)
//     // }

    

//     function ButtonStep() {
//         if (isLastStep) {
//             return (
//                 <Dialog>
//                     <DialogTrigger asChild>
//                         <button type="submit">
//                             {isLastStep ? "Submit" : "Next"}
//                         </button>
//                     </DialogTrigger>
//                     <DialogContent className="sm:max-w-[425px]">
//                         <DialogHeader>
//                             <DialogTitle>Registration Successful</DialogTitle>
//                             <DialogDescription>
//                                 Thank you for your enthusiasm.
//                             </DialogDescription>
//                         </DialogHeader>

//                         <DialogFooter>
//                             <Link href="/dashboard">Back To Home</Link>
//                         </DialogFooter>
//                     </DialogContent>
//                 </Dialog>
//             );
//         } else {
//             return (
//                 <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
//             );
//         }
//     }

//     return (
//         <div className="absolute left-[50%] translate-x-[-50%] p-[2rem] border-black border-[1px] border-solid rounded-xl mt-4">
//             <form onSubmit={onSubmit}>
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: ".5rem",
//                         right: ".5rem",
//                     }}
//                 >
//                     {currentStepIndex + 1} / {steps.length}
//                 </div>
//                 {step}
//                 <div
//                     style={{
//                         marginTop: "1rem",
//                         display: "flex",
//                         gap: ".5rem",
//                         justifyContent: "flex-end",
//                     }}
//                 >
//                     {!isFirstStep && (
//                         <button type="button" onClick={back}>
//                             Back
//                         </button>
//                     )}
//                     <ButtonStep />
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default FormApp;

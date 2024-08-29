import { FormWrapper } from "./FormWrapper";

type UserData = {
    email: string;
    name: string;
    fakultas: string;
    nim: string;
    jurusan: string;
    idLine: string;
};

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
    email,
    name,
    fakultas,
    nim,
    jurusan,
    idLine,
    updateFields,
}: UserFormProps) {
    return (
        <FormWrapper title="User Details">
            <label>Email</label>
            <input
                className="border-black border-[1px] border-solid rounded-sm"
                autoFocus
                required
                type="email"
                value={email}
                onChange={(e) => updateFields({ email: e.target.value })}
            />
            <label>Nama Lengkap</label>
            <input
                className="border-black border-[1px] border-solid rounded-sm"
                autoFocus
                required
                type="text"
                value={name}
                onChange={(e) => updateFields({ name: e.target.value })}
            />
            <label>Fakultas</label>
            <input
                className="border-black border-[1px] border-solid rounded-sm"
                autoFocus
                required
                type="text"
                value={fakultas}
                onChange={(e) => updateFields({ fakultas: e.target.value })}
            />
            <label>NIM</label>
            <input
                className="border-black border-[1px] border-solid rounded-sm"
                autoFocus
                required
                type="text"
                value={nim}
                onChange={(e) => updateFields({ nim: e.target.value })}
            />
            <label>Jurusan</label>
            <input
                className="border-black border-[1px] border-solid rounded-sm"
                autoFocus
                required
                type="text"
                value={jurusan}
                onChange={(e) => updateFields({ jurusan: e.target.value })}
            />
            <label>Id Line</label>
            <input
                className="border-black border-[1px] border-solid rounded-sm"
                autoFocus
                required
                type="text"
                value={idLine}
                onChange={(e) => updateFields({ idLine: e.target.value })}
            />
        </FormWrapper>
    );
}

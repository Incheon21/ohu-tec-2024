import { FormWrapper } from "./FormWrapper"

type LinkPage3Data = {
  linkUploadPersyaratan: string
}

type LinkPage3Props = LinkPage3Data & {
  updateFields: (fields: Partial<LinkPage3Data>) => void
}

export function LinkPage3({
  linkUploadPersyaratan,
  updateFields,
}: LinkPage3Props) {
  return (
    <FormWrapper title="Page 3">
      <label>Link G-Drive Bukti Upload Persyaratan</label>
      <br />
      <input className="border-black border-[1px] border-solid rounded-sm"
        autoFocus
        required
        type="url"
        value={linkUploadPersyaratan}
        onChange={e => updateFields({ linkUploadPersyaratan: e.target.value })}
      />
    
    </FormWrapper>
  )
}
import { FormWrapper } from "./FormWrapper"

type LinkPage2Data = {
  linkBuktiBayar: string
}

type LinkPage2Props = LinkPage2Data & {
  updateFields: (fields: Partial<LinkPage2Data>) => void
}

export function LinkPage2({
  linkBuktiBayar,
  updateFields,
}: LinkPage2Props) {
  return (
    <FormWrapper title="Page 2">
      <label>Link G-Drive Bukti Pembayaran</label>
      <br />
      <input className="border-black border-[1px] border-solid rounded-sm"
        autoFocus
        required
        type="url"
        value={linkBuktiBayar}
        onChange={e => updateFields({ linkBuktiBayar: e.target.value })}
      />
    </FormWrapper>
  )
}
export const InputForm = ({ type, onChange, onClick }: { type: 'signin' | 'signup', onChange: ChangeEvent<HTMLInputElement>, onClick: ClickEvent<HTMLInputElement> }) => {
  return (
    <div>
      <div>
        {type === "signup" ? <LabelledInput label={'Username'} placeholder={'Username'} onChange={onChange} /> : null}
        <LabelledInput label={'Email'} placeholder={'Email'} onChange={onChange} />
        <LabelledInput label={'Password'} placeholder={'Password'} type="password" onChange={onChange} />
      </div>
      <button type="button" onClick={onClick} className="text-white bg-gray-800 hover:bg-gray-900 w-full focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signin" ? "Sign In" : "Sign Up"}</button>
    </div>
  )
}


interface LabelledInputType {
  label: string,
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return (
    <div className="my-3">
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-900">{label}</label>
        <input onChange={onChange} type={type || "text"} name={label.toLowerCase()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
      </div>
    </div>
  )
}

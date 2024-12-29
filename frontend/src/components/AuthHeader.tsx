import { Link } from "react-router-dom"

export const AuthHeader = ({ type }: { type: "signin" | "signup" }) => {
  return (
    <div className="px-10">
      <div className="text-3xl font-extrabold">Create an Account</div>
      <div className="text-slate-400 ml-5 mt-3">{type === "signin" ? "Already have an Account?" : "Don't have an account"} <Link className="underline pl-2" to={type === 'signin' ? '/signup' : '/signin'}>{type === 'signin' ? "Sign Up" : "Login"}</Link></div>
    </div>
  )
}

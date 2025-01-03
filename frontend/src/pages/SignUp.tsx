import { SignUpAuth } from "../components/Auth"
import { Quote } from "../components/Quote"
export const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <SignUpAuth />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  )
}

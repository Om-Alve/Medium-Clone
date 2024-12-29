import { SignInInput, SignUpInput } from "@omalve/common"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { InputForm } from "./InputForm"
import { AuthHeader } from "./AuthHeader"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ChangeEvent } from "react"

export const SignInAuth = () => {
  const [postInputs, setPostInputs] = useState<SignInInput>({
    email: "",
    password: "",
  })

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs)
      const jwt = response.data.token;
      localStorage.setItem("token", `Bearer ${jwt}`)
      navigate('/blogs');
    }
    catch (e) {
      alert("Request could not be fulfilled. Please try again.")
    }
  }


  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <AuthHeader type={'signin'} />
          <InputForm type={'signin'} onChange={handleInputChange} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export const SignUpAuth = () => {
  const [postInputs, setPostInputs] = useState<SignUpInput>({
    username: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs)
      const jwt = response.data.token;
      localStorage.setItem("token", `Bearer ${jwt}`)
      navigate('/blogs');
    }
    catch (e) {
      console.log(e)
      alert("Request could not be fulfilled. Please try again.")
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <AuthHeader type={'signup'} />
          <InputForm type={'signup'} onChange={handleInputChange} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}


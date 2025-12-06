import React,{useState} from 'react'
import axios from "axios";

export default function RegisterForm() {
    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!email || !password){
            alert("email and password required");
            return;
        }
            try {
                const response = await axios.post('https://24df64jx-1350.inc1.devtunnels.ms/api/admin/login',{email, password});
                console.log("Response:",response.data);
            } catch (error) {
                console.error(error);
            }
            setEmail("");
            setPassword("");
    }
  return (
    <div className='justify-center items-center bg-amber-50 text-black mb-8'>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center '>
            <label htmlFor="email">Enter Email:</label>
            <input type="email"
                required
                id ='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <label htmlFor="password">Enter Password</label>
            <input type="password"
            required
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className='cursor-pointer'>Submit</button>
        </form>
    </div>
  )
}

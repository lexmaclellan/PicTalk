import React from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(username, email, password)
        await signup(username, email, password)
    }

    return(
		<div style={{display: "flex", marginTop: "5em", width: "200px", height: "200px"}}>
			<form action=""> 
				<div> 
					<label style={{color: "black", fontSize: "25px"}} htmlFor="username">Username</label>
					<input
                        style={{display: "flex", width: "400px"}}
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    /> 
				</div> 
        <br />
				<div> 
					<label style={{color: "black", fontSize: "25px"}} htmlFor="email">Email</label>
					<input
                        style={{display: "flex", width: "400px"}}
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    /> 
				</div> 
        <br />
				<div> 
					<label style={{color: "black", fontSize: "25px"}} htmlFor="passw">Password</label>
					<input
                        style={{display: "flex", width: "400px"}}
                        type="password"
                        name="passw"
                        id="passw"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    /> 
				</div>  
        <br />
        <br />
				<button
                    style={{borderRadius: "8px", width: "100px", fontSize: "20px"}}
                    type="submit"
                    disable={isLoading}
                >Sign Up</button>
        <br />
        <br />
        {error && <div className="error">{error}</div>}
			</form>
		</div>
	)
}

export default Signup
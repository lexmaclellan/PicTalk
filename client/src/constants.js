/// This is the config used in order to send
// our token with Axios requests
export const config = (jwt) => {
	return {
		headers: {
			Authorization: "Bearer " + jwt,
		},
	};
};

/**
 * EndPoints of the API used in the code
 */

// Login
export const LOGIN_URL = `http://localhost:5000/signin`;

// SignUp Screen
export const SIGNUP_URL = `http://localhost:5000/signup`;

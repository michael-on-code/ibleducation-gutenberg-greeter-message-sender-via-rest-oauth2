import { getAuthorisationTokenInfos } from "./utils"
const LOGIN_ENDPOINT_URL = 'https://ibleducation-instance1.local/wp-json/greetingbot/v1/login'
const SEND_GREETING_ENDPOINT_URL = 'https://ibleducation-instance1.local/wp-json/greetingbot/v1/send'
const GRANT_TYPE = 'client_credentials'
const CLIENT_ID = 'michaeloncode'
const CLIENT_SECRET = 'michaeloncode'

export const getToken = () =>{
    return fetch(LOGIN_ENDPOINT_URL, {
		method: 'POST',
		body: 'grant_type='+GRANT_TYPE+'&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
}

export const sendGreetingMessage = async (content) =>{
    //TRY AND RETRIEVE PREVIOUSLY SET AUTH DATA OR FETCH NEW ONE
    const promisedAuthData = getAuthorisationTokenInfos()
    return Promise.resolve(promisedAuthData).then((authData)=>{
        return fetch(SEND_GREETING_ENDPOINT_URL, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + authData.access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                greeting:content
            })
        })
    })
    
}
import { getToken } from "./crud";

const STORAGE_KEY = "IBL_EDUCATION_AUTHORISATION_TOKEN";
const DEFAULT_EXPIRATION_TIME = 3600;

const storeAuthorisationTokenInfos = (authTokenData ) => {
    const currentDate = new Date()
    const updatedAuthData = {
        ...authTokenData,
        expired_at:(currentDate.getTime() / 1000) + (authTokenData?.expires_in || DEFAULT_EXPIRATION_TIME)
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAuthData))
    return updatedAuthData
}

export const getAuthorisationTokenInfos = async () =>{
    //RETRIEVING AUTHORATISATION INFOS FROM LOCALSTORAGE
    const persistedData = localStorage.getItem(STORAGE_KEY);
    let authData = !!persistedData ? JSON.parse(persistedData) : null;
    
    //CHECKING IF THE AUTH DATA IS EXPIRED OR INEXISTANT
    const currentDate = new Date()
    const hasTokenExpiredOrInexistant = (currentDate.getTime()/1000) > (authData?.expired_at || 0)
    
    if(!!hasTokenExpiredOrInexistant){
        //FETCHING NEW AUTH DATA WHEN INEXISTANT OR EXPIRED
        authData = await handleFetchToken()
    }
    return authData
}

const handleFetchToken = async () =>{
    
   return getToken().then((resp) => {
         return resp.json()
	}).then((authData)=>{
        if(!(authData || authData?.access_token || authData?.expires_in)){
            throw new error("EMPTY AUTH DATA RETURNED")
        }
        storeAuthorisationTokenInfos(authData)
        return authData
    }).catch(err=>{
        console.log(err?.message || "Something went wrong")
    })
}
import { commonapi } from "./Commonfile"
import { base_url } from "./base_url"

export const registerapi=async(user)=>
{
    return await commonapi('POST',`${base_url}/api/register`,user,"")
}
export const loginapi=async(user)=>
{
    return await commonapi('POST',`${base_url}/api/login`,user,"")
}
export const deleteuserapi=async(id,header)=>
{
    return await commonapi("DELETE",`${base_url}/api/delete/:${id}`,{},header)
}

export const edituserprofileapi=async(body,header)=>
{
    return await commonapi('PUT',`${base_url}/api/update`,body,header)
}

export const getuserapi=async()=>
{
    return await commonapi('GET',`${base_url}/api/getuser`)
}

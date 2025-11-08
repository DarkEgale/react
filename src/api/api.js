 export const getPost= async (props) => {
    const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"GET",
    })
return response.json()
}

export const getPhoto=async () =>{
    const res=await fetch('https://api.pexels.com/v1/photos/2014422',{
        method:"GET",
        headers:{
            Authorization:"D7jp3RJmp5WHleXp09unhxcdvTj0hfTRoLzrCRP3pUmrqi361Qm30yE9"
        }
        
    })
    return res.json()
}
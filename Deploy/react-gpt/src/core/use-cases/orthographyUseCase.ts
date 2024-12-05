import { OrthographyResponse } from "../../interfaces/orthography.response"

export const orthographyUseCase = async (prompt:string) => {
try {
    const resp = await fetch("http://localhost:3000/gpt/orthography-check", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({prompt})
    })

    if(!resp.ok) throw new Error('No se pudo realizar la correcion1')
        const data = await resp.json() as OrthographyResponse
    console.log(data)
    return {
        ok : true,
        ...data
    }
} catch (error) {
    return {
    ok:false,
    userScore:0,
    errors:[],
    message:"No se pudo realizar la correcion"
    }
}
}
import axios
 from "axios";

export const registerUser = async (registerData: object) => {
    try {
        const { data } = await axios({
            method: 'post',
            url: 'localhost:3000/users',
            data: registerData
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
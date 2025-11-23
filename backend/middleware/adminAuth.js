import jwt from 'jsonwebtoken'

const authAdmin=async(req,res,next)=>{
    const {token}=req.headers
    try {
        if(!token) return res.json({
            success:false,
            message:'You are not an admin to perform this action'
        })
        const decode=jwt.verify(token,process.env.JWT_SECRET)
       if(decode!==process.env.Email + process.env.Password) {
        return res.json({
            success:false,
            message:'You are not a admin'
        })
       }
       next()
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
        
    }
}

export default authAdmin
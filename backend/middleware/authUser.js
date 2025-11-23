  import jwt from 'jsonwebtoken'


const authUser=async(req,res,next)=>{
    const {token}=req.headers
    try {
        if(!token) return res.json({
            success:false,
            message:'Unauthorize to perform this action'
        })
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        req.userId=decode.id
        next()
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
        
    }

}

export default authUser;
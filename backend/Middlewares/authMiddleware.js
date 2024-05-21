import jwt from 'jsonwebtoken';
//validate jwt tokens
export const Requireverifuser=async(req,res,next)=>{
    try {
        const verifyUser=jwt.verify(req.headers.authorization,process.env.jwttoken)
        req.checkloginuser=verifyUser;
        next();
        
    } catch (error) {

        console.log(error)
        
    }
}

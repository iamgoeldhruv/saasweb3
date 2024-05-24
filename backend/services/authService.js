const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const signIn=async(walletAddress)=>{
    try {
        const user = await prisma.user.findUnique({
            where: {
              address: walletAddress,
            },
          })
        if(!user){
             user = await prisma.user.create({
                data: {
                  address: walletAddress,
                },
              })
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
        
    } catch (error) {
        throw error;
        
    }
}
module.exports = { signIn };
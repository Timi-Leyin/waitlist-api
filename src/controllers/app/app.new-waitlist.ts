import {Response} from "express"
import {Request} from "../../@types"

export default async (req:Request, res:Response)=>{
  try{
   console.log(req?.payload)
    res.status(201).send({message:"Created waitlist... "})
  }catch(err){
    res.status(500).send({message:"An error occurred "})
  }
}
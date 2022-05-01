
export default (req, res )=>{
  try{
 return res.status(201).send({message:"Register"})
  }
  catch(err){
  res.status(500).send({message:"Register"})
  }
}
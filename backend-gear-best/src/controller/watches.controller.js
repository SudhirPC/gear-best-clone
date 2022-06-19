const WatchSchema=require("../model/watches.model.js")
const express=require("express")
const router =express.Router()


router.post("",async(req,res)=>{
    try{
const watchPage=await WatchSchema.create(req.body)
res.send(watchPage)
    }catch(err){
return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
const watchPage=await WatchSchema.find().lean().exec()
res.send(watchPage)
    }catch(err){
return res.status(500).send(err.message)
    }
})
router.get("/:id",async(req,res)=>{
  try{
       const mainproduct=await WatchSchema.findById(req.params.id).lean().exec()
       return res.status(200).send(mainproduct);
  }
  catch(err){
      return res.status(500).send(err.message)
  }
})
router.get("/sort/asc",async(req,res)=>{
    try {
      const data = await WatchSchema.find().sort({price:1}).lean().exec()
      res.send(data)
    } catch (error) {
      return res.status(500).send(err.message)
    }
  })
  router.get("/sort/desc",async(req,res)=>{
    try {
      const data = await WatchSchema.find().sort({price:-1}).lean().exec()
      res.send(data)
    } catch (error) {
      return res.status(500).send(err.message)
    }
  })

  router.get("/filter/brand/:value",async(req,res)=>{
 
    try {
      const data = await WatchSchema.find({brand:req.params.value})
      res.status(200).json(data)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })

  router.get("/filter/gender/:value",async(req,res)=>{
 
    try {
      const data = await WatchSchema.find({gender:req.params.value})
      res.status(200).json(data)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })
module.exports = router

import Questions from "../models/questionScheme.js";
import Results from "../models/resultScheme.js";
import questions,{answers} from '../database/data.js'
export async function getQuestions(req,res){
    try {
        const q=await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({error})
        
    }

}
export async function insertQuestion(req,res){
   
    
    Questions.insertMany({questions,answers}).then(function () {
        console.log("Successfully saved default items to DB");
     }).catch(function (err) {
        console.log(err);
     });
    
    } 

export async function dropQuestions(req,res){
    try {
        await Questions.deleteMany();
        res.json({msg:'question del'})
    } catch (error) {
        res.json({error})
        
    }
}
export async function getResult(req,res){
    try {
        const r =await Results.find();
        res.json(r)
    } catch (error) {
        res.json({error})
        
    }
}
export async function storeResult(req,res){
   
    const {username,result,attempts,points,achived}=req.body;
    if (!username && !result) throw new Error('data not provided');
    Results.create({username,result,attempts,points,achived})
.then((result) => {
  res.send({ kq: 1, msg: 'added' })
})
.catch((err) => {
  res.send({ kq: 0, msg: 'error' })
})
    
    
   }

export async function dropResult(req,res){
    try {
        await Results.deleteMany();
        res.json({msg:'result del sucess'})
    } catch (error) {
        res.json({error})
        
    }
}
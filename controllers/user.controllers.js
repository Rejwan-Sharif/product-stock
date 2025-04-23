import * as userService from "../services/user.service.js" 

export const createUser = async(req,res)=>{
    try{
        const user = await userService.create(req.body);
        res.status(201).json(`user ${user.first_name} created successfully`);
    }catch(err)
    {
        res.status(500).json({error : err.message});
    }
    };


    export const getAllUser = async(req,res)=>{
        try{
            const users = await userService.findAll();
            res.json(users);
        }catch(err){
            res.status(500).json({error:err.message});
        }
    };

    export const updateUser = async(req,res)=>{
        try{
            const user = userService.update(req.params.id,req.body);
            res.send("user updated");
        }catch(err){
            res.status(500).json({error:err.message});
        }
    }

    export const findById = async(req,res)=>{
        try{
          const user =  await  userService.findById(req.params.id);
            if(!user) return res.status(404).json("User not found");
            res.status(200).json(user);
        }catch(err){
            res.status(500).json({error:err.message});
        }
    }

    export const deleteUser = async (req, res) => {
        try {
          await userService.remove(req.params.id);
          res.send("User deleted");
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      };

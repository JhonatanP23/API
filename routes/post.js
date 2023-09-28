const Post = require('../models/Post');
const express = require('express');
const router = express.Router();


router.post('/', async (req,res)=>{
//console. los(req.body); se utiliza para la respuesta del post en consola
    const  post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();//método que guarda en la BD
        res.json({savedPost});
    }catch (error){
        res.json({message:error});
    }
});

// bloque para mostar solo un post por el id 

router.get('/:postId', async (req, res)=>{
    try{
        const post = await Post.findById(req.params.postId);
        //encuentra por id
        res.json(post);
    }catch (error) {
        res.json({message: error});
    }
});

//Bloque para borrar un post

router.delete('/:postId', async (req,res)=>{
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        //borra
        res.json(removedPost);
    }catch (error){
        res.json({message: error});
    }
});

//Actualizar un post 

router.patch('/:postId', async (req, res)=>{
    //patch para actualizar
    try {
        const updatePost = await Post.updateOne(
            //actualiza de uno en uno 
            {_id: req.params.postId},
            {$set: {title: req.body.title}});
            res.json(updatePost);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router; //devuelve como modulo lo que se le asigna a route
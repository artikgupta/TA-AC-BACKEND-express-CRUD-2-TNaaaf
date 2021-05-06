var express = require('express');
var router = express.Router();

var Author = require("../models/author")

var Comment = require("../models/book")

/* GET users listing. */


router.get("/create", (req,res)=>{
  res.render("CreateBook")
})


router.get("/author/:id", (req, res, next) => {
    let id = req.params.id;
    Author.findById(id).populate("books").exec((err, author) => {
    
    })
  })


// router.post("/", (req,res,next)=>{
//   Article.create(req.body,(err, article)=>{
//     if(err) return next(err)
//    res.send("Article has been created")
//   })

// })

//


// router.get("/",(req,res,next)=>{ // find always return an array
//   Article.find((err, articles)=>{
//     if(err) return next(err)
//     res.render("allArticles",{articles:articles})

//   })
// })

// router.get("/:id",(req,res,next)=>{
//   let id = req.params.id;
//   Article.findById(id,(err,article)=>{
//    if(err) return next(err)
//    Comment.find((err,comments)=>{
//    if(err) return next(err)
//    res.render("singleArticle",{article:article,comments:comments})
//    })
//   })
// })

// // delete

// router.get("/:id/delete",(req,res,next)=>{
//   let id = req.params.id;
//   Article.findByIdAndDelete(id,(err,article)=>{
//     if(err) return next(err);
//     res.redirect("/articles")
//   })
// })

// // edit

// router.get("/:id/edit",(req,res,next)=>{
//   let id = req.params.id;
//   Article.findById(id,(err,article)=>{
//     if(err) return next(err);
//     res.render("updateArticle",{article:article})
//   })
// })

// router.post("/:id/edit",(req,res, next)=>{
//   let id = req.params.id;
//   Article.findByIdAndUpdate(id,req.body,(err, updateArticle)=>{
//     if(err) return next(err);
//     res.redirect('/articles/' + id);
//   })
// })

// // increment

// router.post("/:id/likes",(req,res, next)=>{
//   let id = req.params.id;
//   Article.findByIdAndUpdate(id,{$inc:{$likes:1}},(err,updateArticle)=>{
//     if(err) return next(err);
//     res.redirect('/articles/' + id);
//   })
// })

// // decrement


// router.post("/:id/likes",(req,res, next)=>{
//   let id = req.params.id;
//   Article.findByIdAndUpdate(id,{$inc:{$likes:-1}},(err,updateArticle)=>{
//     if(err) return next(err);
//     res.redirect('/articles/' + id);
//   })
// })

module.exports = router;

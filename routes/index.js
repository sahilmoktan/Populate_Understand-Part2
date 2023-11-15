var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/create", async function (req, res) {
  let createdman = await userModel.create({
    username: "safal001",
    password: "lama",
    posts: [],

    email: "moktansafal02@mail.com",
    fullname: "safal lama",
  });
  res.send(createdman)
});


router.get("/createpost", async function (req, res) {
  let createdPost = await postModel.create({
    postText: "hello this is second post",
    user: "65549bb27a9a2713ad558204"
  });
  let user = await userModel.findOne({_id:'65549bb27a9a2713ad558204'})
  user.posts.push(createdPost._id)
  await user.save()
    res.send("Post created and added to user's posts successfully.");

    
  // try {
  //   let createdPost = await postModel.create({
  //     postText: "hello this is second post",
  //     user: "6554960ce41abbfdc5c17cb3"
  //   });

  //   let user = await userModel.findOne({_id: '6554960ce41abbfdc5c17cb3'});

  //   if (user) {
  //     user.posts.push(createdPost._id);
  //     await user.save();
  //     console.log("Post created and added to user's posts successfully.");
  //   } else {
  //     console.log("User not found with the specified ID.");
  //   }

  //   res.send("Post created and added to user's posts successfully.");
  // } catch (error) {
  //   console.error("Error creating post:", error);
  //   res.status(500).send("Internal Server Error");
  // }
});

router.get('/getAllHisPost',async function(req,res){
  let user = await userModel.findOne({_id:'65549bb27a9a2713ad558204'}).populate('posts')
  res.send(user)
} )
module.exports = router;

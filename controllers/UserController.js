const User = require("../models/user");
const Post = require("../models/Post");

class UserController{
    async updateUserProfile(req, res){
        try {
            await User.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: 'User updated successfully.'
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getUserInfo(req, res){
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getUserPost(req, res){
        try {
            const posts = await Post.find({createdBy: req.params.user_id}, {likes: false}).populate('createdBy', 'firstname lastname photo').sort({createdAt: -1});
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = UserController;
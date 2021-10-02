// import Models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// combines one user to multiple posts
// adds a foreign key to User
User.hasMany(Post, {
    foreignKey: 'user_id'
});


Post.belongsTo(User, {
    foreignKey: 'user_id',
// deletion cascade for Post foreignKey 
    onDelete: "cascade"
});

// adds foreignKey to User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

// adds foreignKey to Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})

module.exports = { User, Post, Comment };
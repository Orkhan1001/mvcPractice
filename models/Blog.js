const blogs = [
    {
        title: 'Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies',
        categories: ['category'],
        date: 'July 19, 2020',
        info:'4 min read'
    },
    {
        title: 'Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer',
        categories: ['category', 'category'],
        date: 'June 30, 2020',
        info: '5 min read'
    },
    {
        title: 'In eu mi bibendum neque egestas congue quisque egestas diam',
        categories: ['categoryy'],
        date: 'June 26, 2020',
        info: '3 min read'
    }
];


module.exports.getAll = function(){
    return blogs;
};

module.exports.addBlog = function(){
    blogs.push(blog);
}
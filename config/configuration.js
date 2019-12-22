module.exports = {

    mongoDbUrl : 'mongodb+srv://Faruk:Faruk01936@cluster0-fqsei.mongodb.net/cmsblog?retryWrites=true&w=majority',
    PORT: process.env.PORT || 3000,
    globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');
        res.locals.user = req.user || null;
        next();
    },


};
// mongodb://localhost:27017/tutorial_cms
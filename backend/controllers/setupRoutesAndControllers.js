module.exports = (app, express) => {
    const loginRouter = express.Router();
    const userRouter = express.Router();
    const courseRouter = express.Router();
    const moduleRouter = express.Router();
    const lectureRouter = express.Router();
    
    require('./login/login.controller')(loginRouter);
    require('./user/user.controller')(userRouter);
    require('./course/course.controller')(courseRouter);
    require('./module/module.controller')(moduleRouter);
    require('./lecture/lecture.controller')(lectureRouter);
    
    app.use('/users', userRouter);
    app.use('/login', loginRouter);
    app.use('/courses', courseRouter);
    app.use('/modules', moduleRouter);
    app.use('/lectures', lectureRouter);
}
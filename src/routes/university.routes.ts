import express from 'express';
import controller from '../controllers/univesity.controllers';

const uniRouter = express.Router();

uniRouter.get('/uni/search', controller.findUniversity);

uniRouter.post('/uni/add', controller.addUniversity);

export default uniRouter;

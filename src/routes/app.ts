import 'express';
import { AppController } from '../controllers';

var express = require('express'), router = express.Router();

router.get('/', AppController.index)

export default router;
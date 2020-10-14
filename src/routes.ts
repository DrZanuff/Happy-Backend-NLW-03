import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

import multer from 'multer'


const routes = Router();
const upload = multer(uploadConfig);


routes.get('/orphanages' , OrphanagesController.index )
routes.get('/orphanages/:id' , OrphanagesController.show )
routes.post('/orphanages' , upload.array('images'), OrphanagesController.create )

export default routes;

/*
{
	"name" : "Muleque Compliado dos 201",
	"latitude": 15.7695978,
	"longitude" : -47.8325063,
	"about" : "Onde mora os mulekin",
	"instructions" : "Vem ai",
	"opening_hours" : "Dás 09:00 até 16:00",
	"open_on_weekends" : true
}
*/
import { Router, Request, Response } from "express";
import Server from '../classes/server';

const router = Router();

router.get('/mensajes', ( req: Request, res: Response ) => {
    res.json({
        ok: true,
        mensaje: 'Todo está correcto'
    });
});

router.post('/mensajes', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    const server = Server.instance;
    server.io.emit('mensaje-nuevo', { de, cuerpo });

    res.json({
        ok: true,
        mensaje: 'POST - Listo',
        cuerpo,
        de
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    const payload = { de, cuerpo };

    const server = Server.instance;
    server.io.in(id).emit('mensaje-privado', { payload });

    res.json({
        ok: true,
        mensaje: 'POST - Listo',
        cuerpo,
        de,
        id
    });
});

export default router;

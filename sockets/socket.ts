import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const desconectar = (cliente: Socket) => {
    
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

};

// Escuchar mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('mensaje', (payload: MensajeInterface) => {
        console.log('Mensaje - Recibido de:', payload.de);
        console.log('Mensaje - Cuerpo:', payload.cuerpo);
        io.emit('mensaje-nuevo', payload);
    });
};

interface MensajeInterface {
    de: string;
    cuerpo: string;
}

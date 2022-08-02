import { HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';

import config from 'config';

const connection = new HubConnectionBuilder()
    .withUrl(config.wsUrl)
    .withAutomaticReconnect()
    .build();

export const connect = async () => {
    await connection.start();
};

export const disconnect = async () => {
    await connection.stop();
};

export const emit = async (event, ...args) => {
    await connection.invoke(event, ...args);
};

export const on = (event, callback) => {
    connection.on(event, callback);
};

export const off = (event, callback) => {
    connection.off(event, callback);
};

export const connected = () =>
    connection.state === HubConnectionState.Connected;

export const disconnected = () =>
    connection.state !== HubConnectionState.Connected;

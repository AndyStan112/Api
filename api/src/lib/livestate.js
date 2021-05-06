export const Normal = 0;
export const OnPlane = 1;
export const OnParachute = 2;
export const OnVehicle = 3;
export const Knocked = 4;
export const Dead = 5;
export const Disconnected = 6;

export const isNormal = (state) => state === Normal;

export const isOnPlane = (state) => state === OnPlane;

export const isOnParachute = (state) => state === OnParachute;

export const isOnVehicle = (state) => state === OnVehicle;

export const isKnocked = (state) => state === Knocked;

export const isDead = (state) => state === Dead;

export const isDisconnected = (state) => state === Disconnected;

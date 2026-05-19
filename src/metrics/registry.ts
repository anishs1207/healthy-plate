import client from "prom-client";

const globalForMetrics = global as unknown as {
    register: client.Registry;
};

if (!globalForMetrics.register) {
    globalForMetrics.register = new client.Registry();
    client.collectDefaultMetrics({ register: globalForMetrics.register });
}

export const register = globalForMetrics.register;

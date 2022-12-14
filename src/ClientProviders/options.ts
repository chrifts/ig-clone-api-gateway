import { ClientProviderOptions, Transport } from "@nestjs/microservices";

const postServiceModule: ClientProviderOptions = {
    name: process.env.POST_SERVICE_NAME,
    transport: Transport.REDIS,
    options: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT)
    }
}

export default postServiceModule;
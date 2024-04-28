import { envs } from "./config";
import { Server, AppRoutes} from "./presentation";


(() => {
    main();
})()

async function main() {
    new Server({
        port: envs.SERVER_PORT,
        routes: AppRoutes.routes
    }).start();
}

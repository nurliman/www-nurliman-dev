import { Router } from "itty-router";
import sendv0 from "./handlers/v0/send";

const router = Router();

router.post("/v0/send", sendv0).all("*", () => new Response("Not found", { status: 404 }));

export default router;

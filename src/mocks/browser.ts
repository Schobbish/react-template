import { setupWorker } from "msw";
import { helloWorld } from "./api/helloWorld";

/** This configures a Service Worker with the given request handlers. */
// add more handlers in the args of the setupWorker call
export const worker = setupWorker(helloWorld);

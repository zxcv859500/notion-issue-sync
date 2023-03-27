import { WebhookPayload } from "@actions/github/lib/interfaces";
export declare function makePage(notionSecret: string, dbId: string, payload: WebhookPayload['issue']): Promise<import("@notionhq/client/build/src/api-endpoints").PartialPageObjectResponse | undefined>;

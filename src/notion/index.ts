import { Client } from "@notionhq/client";
import { WebhookPayload } from "@actions/github/lib/interfaces";

export async function makePage(notionSecret: string, dbId: string, payload: WebhookPayload['issue']) {    
    const notion = new Client({
        auth: notionSecret,
    })
    if (!payload) return
    return await notion.pages.create({
        parent: { database_id: dbId },
        properties: {
            "이름": {
                title: [
                    {
                        text: { content: payload.title, link: { url: payload.html_url as string }}
                    }
                ]
            },
            "상태": {
                status: {
                    name: "Not started"
                }
            }
        }
    })
}
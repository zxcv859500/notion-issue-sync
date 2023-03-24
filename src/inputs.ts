import parseInputs from "@wow-actions/parse-inputs";

export function getInputs() {
    return parseInputs({
        notionSecret: { type: 'string', required: true },
        databaseId: { type: 'string', required: true }
    })
}

export type Inputs = ReturnType<typeof getInputs>
import * as core from '@actions/core'
import * as github from '@actions/github'
import { getInputs } from './inputs'
import { makePage } from './notion'

async function run() {
    try {
        const { context } = github

        core.debug(`event: ${context.eventName}`)
        core.debug(`action: ${context.payload.action}`)

        const issue = context.payload.issue
    
        if (issue) {
            const inputs = getInputs()
            core.debug(`inputs: \n${JSON.stringify(inputs, null, 2)}`)

            makePage(inputs.notionSecret, inputs.databaseId, issue)
        }
    } catch(e) {
        core.error(e)
    }
}

run()

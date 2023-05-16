#! /usr/bin/env node

import { select, confirm } from "@clack/prompts"
import i18next from "i18next";
import { initI18Next } from "./lang.config.js";
import chalk from "chalk";
import { exec, execSync } from "child_process";

async function talk() {
    await initI18Next();
    const config = (await import("./committer.config.js")).default as any;
    const commitOption = await select({
        message: i18next.t('choose_commit').valueOf(),
        options: config.commitTypes
    })
    const option = String(commitOption) as keyof typeof config.steps;
    const steps = config.steps[option]
    let command = `git commit -m "${String(option)}`;
    for (const step of steps) {
        command = await config.handlers[step as keyof typeof config.handlers](command);
    }
    const commitPreview = command.split('"').filter(c => !c.includes('-m')).join("\n\n")
    console.log("> Commit message preview:\n")
    console.log(chalk.green(commitPreview));
    const choice = await confirm({
        message: i18next.t('common.ask_for_commit')
    });
    if (choice.valueOf()) {
        execSync(command);
    }
}

talk();
import i18next from "i18next";
import { text } from "@clack/prompts";

const config = {
    commitTypes: [
        {
            value: "feat",
            label: i18next.t('feat').valueOf(),
        },
        {
            value: "fix",
            label: i18next.t('fix').valueOf(),
        },
        {
            value: "perf",
            label: i18next.t('perf').valueOf(),
        },
        {
            value: "style",
            label: i18next.t('style').valueOf(),
        },
        {
            value: "test",
            label: i18next.t('test').valueOf(),
        },
        {
            value: "revert",
            label: i18next.t('revert').valueOf(),
        },
        {
            value: "refactor",
            label: i18next.t('refactor').valueOf(),
        },
        {
            value: "docs",
            label: i18next.t('docs').valueOf(),
        }
        ,
        {
            value: "build",
            label: i18next.t('build').valueOf(),
        },
        {
            value: "ci",
            label: i18next.t('ci').valueOf(),
        }
    ],
    steps: {
        feat: [
            "scope",
            "description",
            "body",
            "footer",
            "breaking_change"
        ],
        fix: [
            "scope",
            "description",
            "body",
            "footer",
            "breaking_change"
        ],
        perf: [
            "scope",
            "description",
            "body",
            "footer",
            "breaking_change"
        ],
        style: [
            "scope",
            "description",
            "body",
            "footer",
            "breaking_change"
        ],
        test: [
            "scope",
            "description",
            "body",
            "footer",
        ],
        revert: [
            "scope",
            "description",
            "body",
            "footer",
            "breaking_change"
        ],
        refactor: [
            "scope",
            "description",
            "body",
            "footer",
        ],
        docs: [
            "scope",
            "description",
            "body",
            "footer",
        ],
        build: [
            "scope",
            "description",
            "body",
            "footer",
            "breaking_change"
        ],
        ci: [
            "scope",
            "description",
            "body",
            "footer",
            "breaking_change"
        ],
    },
    handlers: {
        scope: async (accumulator: string): Promise<string> => {
            const choice = await text({ message: i18next.t('common.scope') })
            return accumulator.concat(choice ? `(${String(choice)}):` : ':');
        },
        description: async (accumulator: string): Promise<string> => {
            const choice = await text({ message: i18next.t('common.description') })
            return accumulator.concat(choice ? ` ${String(choice)}"` : '"');
        },
        body: async (accumulator: string): Promise<string> => {
            const choice = await text({ message: i18next.t('common.body') })
            return accumulator.concat(choice ? ` -m "${String(choice)}"` : '');
        },
        footer: async (accumulator: string): Promise<string> => {
            const choice = await text({ message: i18next.t('common.footer') })
            return accumulator.concat(choice ? ` -m "${String(choice)}"` : '');
        },
        breaking_change: async (accumulator: string): Promise<string> => {
            let changes = [];
            const choice = await text({
                message: i18next.t('common.ask_for_breaking_changes')
            })
            if (choice) {
                changes.push(` -m "BREAKING CHANGE: ${String(choice)}"`)
                const breakingChangeBody = await text({
                    message: i18next.t("common.ask_for_breaking_changes_body").valueOf(),
                });
                if (breakingChangeBody) {
                    changes.push(` -m "${String(breakingChangeBody)}"`)
                }
            }
            return accumulator.concat(changes.join(''));
        }
    }
};

export default config
import i18next from "i18next";

export function initI18Next() {
  let locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const lng = !locale.includes("it") ? "en" : "it";
  return i18next.init({
    lng,
    debug: false,
    resources: {
      en: {
        translation: {
          choose_commit: "Choose your commit type:",
          feat: "feat: A new feature",
          fix: "fix: A bug fix",
          perf: "perf: A code change that improves performance",
          style:
            "style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
          test: "test: Adding missing tests or correcting existing tests",
          revert: "revert: Reverting to a previous commit",
          refactor:
            "refactor: A code change that neither fixes a bug nor adds a feature",
          docs: "docs: Documentation only changes",
          build:
            "build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
          ci: "ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
          common: {
            description: "Write a succint description of the change:",
            body: "Write the motivation for the change and contrast this with previous behavior:",
            footer: "Write the reference to the issue and any breaking change:",
            scope: "Write the scope for your commit:",
            ask_for_commit: "Do you want me to perform the commit?",
            paste: "Paste this line to commit:",
            ask_for_breaking_changes: "Write one breaking change:",
            ask_for_breaking_changes_body:
              "Write breaking change's description:",
          },
        },
      },
      it: {
        translation: {
          choose_commit: "Scegli il tipo di commit:",
          feat: "feat: Una nuova feature",
          fix: "fix: Una risoluzione di un bug",
          perf: "perf: Un cambiamento di codice che migliora le performances",
          style:
            "style: Cambiamenti che non incidono sul significato del codice (white-space, formatting, missing semi-colons, etc)",
          test: "test: Aggiunta o correzione di test",
          revert: "revert: Revert a un commit precedente",
          refactor:
            "refactor: Un cambiamento del codice che non risolve un bug né introduce una nuova feature",
          docs: "docs: Cambiamenti sulla documentazione",
          build:
            "build: Cambiamenti che riguardano il sistema di build o le dipendenze (es: gulp, broccoli, npm)",
          ci: "ci: Cambiamenti a scripts o file per la CI (es.: Travis, Circle, BrowserStack, SauceLabs)",
          common: {
            description: "Scrivi una breve descrizione del cambiamento:",
            body: "Scrivi il motivo per cui hai cambiato il codice e il comportamento del sistema prima e dopo di esso:",
            footer:
              "Scrivi il riferimento alla issue e/o le breaking changes introdotte:",
            scope: "Scrivi il contesto del commit: (opzionale)",
            ask_for_commit: "Eseguo io il commit?",
            paste: "Incolla questo comando per eseguire il commit:",
            ask_for_breaking_changes: "Scrivi una breaking change:",
            ask_for_breaking_changes_body:
              "Scrivi la descrizione di questa breaking change",
          },
        },
      },
    },
  });
}

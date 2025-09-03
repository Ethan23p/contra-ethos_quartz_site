typ

```terminal output
PS E:\Hume General\Programming\Repos\contra-ethos_quartz> npx quartz build --serve

 Quartz v4.5.1

X [ERROR] Could not resolve "../styles/navPage.scss"

    quartz/components/custom/NavPage.tsx:4:19:
      4 │ import styles from "../styles/navPage.scss"
        ╵                    ~~~~~~~~~~~~~~~~~~~~~~~~

Couldn't parse Quartz configuration: ./quartz/build.ts
TypeError [ERR_INVALID_ARG_TYPE]: The "text" argument must be of type string. Received an instance of Error
    at styleText (node:util:236:3)
    at file:///E:/Hume%20General/Programming/Repos/contra-ethos_quartz/quartz/cli/handlers.js:321:30
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async build (file:///E:/Hume%20General/Programming/Repos/contra-ethos_quartz/quartz/cli/handlers.js:319:20)
    at async handleBuild (file:///E:/Hume%20General/Programming/Repos/contra-ethos_quartz/quartz/cli/handlers.js:355:5)
    at async Object.handler (file:///E:/Hume%20General/Programming/Repos/contra-ethos_quartz/quartz/bootstrap-cli.mjs:36:5) {
  code: 'ERR_INVALID_ARG_TYPE'
}
PS E:\Hume General\Programming\Repos\contra-ethos_quartz>
```